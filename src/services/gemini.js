import { GEMINI_CONFIG, isGeminiConfigured } from '../config/gemini.js'
import { buildSystemPrompt, chatTools } from '../config/restaurantContext.js'

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
 * decides to call one of the chat tools (offer_time_slots, summarize_reservation)
 * instead of replying with text. Automatically retries once on a 429 (rate
 * limit) or 503 (server temporarily overloaded) after a short backoff.
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
      'Assistenten trenger en Gemini API-nøkkel. Legg til VITE_GEMINI_API_KEY i en .env.local-fil (se .env.example) og start utviklingsserveren på nytt.',
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
        tools: [chatTools],
        generationConfig: { temperature, maxOutputTokens },
      }),
    })
  } catch (err) {
    if (err.name === 'AbortError') throw new ChatError('Forespørselen ble avbrutt.', 'aborted')
    throw new ChatError('Fikk ikke kontakt med AI-tjenesten. Sjekk internettforbindelsen og prøv igjen.', 'network')
  }

  if (!response.ok) {
    const message = await parseErrorResponse(response)
    if (response.status === 400 && /API key/i.test(message)) {
      throw new ChatError('Denne Gemini API-nøkkelen ser ugyldig ut. Dobbeltsjekk VITE_GEMINI_API_KEY.', 'missing_key')
    }
    if (response.status === 404) {
      throw new ChatError(
        `Modellen «${model}» er ikke tilgjengelig for denne API-nøkkelen. Oppdater GEMINI_CONFIG.model i src/config/gemini.js til en gyldig modell (se ai.google.dev/gemini-api/docs/models).`,
        'api'
      )
    }
    if (response.status === 429) {
      throw new ChatError(
        'Denne Gemini-nøkkelen har nådd grensen for gratisnivået akkurat nå. Vent et minutt og prøv igjen — eller sjekk forbruket på aistudio.google.com.',
        'rate_limit'
      )
    }
    if (response.status === 503) {
      throw new ChatError('AI-tjenesten er midlertidig overbelastet. Prøver igjen...', 'unavailable')
    }
    throw new ChatError(message || 'AI-tjenesten returnerte en feil.', 'api')
  }

  const state = { full: '', functionCall: null, onChunk }

  if (!response.body) {
    // Fallback for environments without streaming body support.
    const data = await response.json()
    readParts(data?.candidates?.[0]?.content?.parts, state)
    if (state.full) onChunk?.(state.full, state.full)
    if (!state.full && !state.functionCall) {
      throw new ChatError('AI-assistenten svarte ikke. Prøv igjen.', 'api')
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
