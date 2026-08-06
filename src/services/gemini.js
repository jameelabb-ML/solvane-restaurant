import { GEMINI_CONFIG, isGeminiConfigured } from '../config/gemini.js'
import { buildSystemPrompt, reservationTool } from '../config/restaurantContext.js'

export class ChatError extends Error {
  constructor(message, type = 'unknown') {
    super(message)
    this.name = 'ChatError'
    this.type = type
  }
}

const MAX_HISTORY_MESSAGES = 16

const toGeminiContents = (messages) =>
  messages
    .filter((m) => m.role === 'user' || m.role === 'assistant')
    .slice(-MAX_HISTORY_MESSAGES)
    .map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text }],
    }))

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function parseErrorResponse(response) {
  try {
    const data = await response.json()
    return data?.error?.message || response.statusText
  } catch {
    return response.statusText
  }
}

// Extracts text and/or a function call from a Gemini `parts` array. A single
// response typically contains either text or one functionCall, not both.
function readParts(parts, state) {
  for (const part of parts || []) {
    if (part.text) {
      state.full += part.text
      state.onChunk?.(part.text, state.full)
    } else if (part.functionCall) {
      state.functionCall = part.functionCall
    }
  }
}

const RETRYABLE_TYPES = new Set(['rate_limit', 'unavailable'])

/**
 * Streams a chat reply from Gemini, invoking onChunk(deltaText) as tokens arrive.
 * Resolves with { text, functionCall } — functionCall is set when the model
 * decides to call the submit_reservation tool instead of (or in addition to)
 * replying with text. Automatically retries once on a 429 (rate limit) or 503
 * (server temporarily overloaded) after a short backoff.
 */
export async function streamChatReply(args) {
  try {
    return await attemptStreamChatReply(args)
  } catch (err) {
    if (err instanceof ChatError && RETRYABLE_TYPES.has(err.type) && !args.signal?.aborted) {
      await wait(err.type === 'rate_limit' ? 4000 : 2000)
      if (args.signal?.aborted) throw new ChatError('Request cancelled.', 'aborted')
      return attemptStreamChatReply(args)
    }
    throw err
  }
}

async function attemptStreamChatReply({ messages, onChunk, signal }) {
  if (!isGeminiConfigured()) {
    throw new ChatError(
      'The AI assistant needs a Gemini API key. Add VITE_GEMINI_API_KEY to a .env.local file (see .env.example) and restart the dev server.',
      'missing_key'
    )
  }

  const { baseUrl, model, apiKey, temperature, maxOutputTokens } = GEMINI_CONFIG
  const url = `${baseUrl}/${model}:streamGenerateContent?alt=sse&key=${apiKey}`

  let response
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal,
      body: JSON.stringify({
        contents: toGeminiContents(messages),
        systemInstruction: { parts: [{ text: buildSystemPrompt() }] },
        tools: [reservationTool],
        generationConfig: { temperature, maxOutputTokens },
      }),
    })
  } catch (err) {
    if (err.name === 'AbortError') throw new ChatError('Request cancelled.', 'aborted')
    throw new ChatError('Could not reach the AI service. Check your connection and try again.', 'network')
  }

  if (!response.ok) {
    const message = await parseErrorResponse(response)
    if (response.status === 400 && /API key/i.test(message)) {
      throw new ChatError('That Gemini API key looks invalid. Double-check VITE_GEMINI_API_KEY.', 'missing_key')
    }
    if (response.status === 404) {
      throw new ChatError(
        `The model "${model}" isn't available for this API key. Update GEMINI_CONFIG.model in src/config/gemini.js to a current model (see ai.google.dev/gemini-api/docs/models).`,
        'api'
      )
    }
    if (response.status === 429) {
      throw new ChatError(
        "This Gemini key has hit its free-tier rate limit for the moment. Wait about a minute and try again — or check usage at aistudio.google.com.",
        'rate_limit'
      )
    }
    if (response.status === 503) {
      throw new ChatError("The AI service is temporarily overloaded. Retrying...", 'unavailable')
    }
    throw new ChatError(message || 'The AI service returned an error.', 'api')
  }

  const state = { full: '', functionCall: null, onChunk }

  if (!response.body) {
    // Fallback for environments without streaming body support.
    const data = await response.json()
    readParts(data?.candidates?.[0]?.content?.parts, state)
    if (state.full) onChunk?.(state.full, state.full)
    if (!state.full && !state.functionCall) {
      throw new ChatError('The AI assistant did not return a response. Please try again.', 'api')
    }
    return { text: state.full, functionCall: state.functionCall }
  }

  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    buffer += decoder.decode(value, { stream: true })

    const lines = buffer.split('\n')
    buffer = lines.pop() ?? ''

    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed.startsWith('data:')) continue
      const jsonStr = trimmed.slice(5).trim()
      if (!jsonStr || jsonStr === '[DONE]') continue
      try {
        const parsed = JSON.parse(jsonStr)
        readParts(parsed?.candidates?.[0]?.content?.parts, state)
      } catch {
        // Ignore partial/malformed SSE fragments; they complete on the next chunk.
      }
    }
  }

  if (!state.full && !state.functionCall) {
    throw new ChatError('The AI assistant did not return a response. Please try again.', 'api')
  }

  return { text: state.full, functionCall: state.functionCall }
}

export default streamChatReply
