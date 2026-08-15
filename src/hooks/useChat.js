import { useCallback, useEffect, useRef, useState } from 'react'
import { streamChatReply, ChatError } from '../services/gemini.js'
import { loadChatHistory, saveChatHistory, clearChatHistory } from '../utils/storage.js'
import { assistantIdentity } from '../config/restaurantContext.js'

let idCounter = 0
const nextId = () => `msg-${Date.now()}-${idCounter++}`

// Structured message types (quick replies, reservation summaries) carry data
// instead of free text, so when they're sent back to the model as conversation
// history, summarize them in plain text — otherwise the model loses context.
const summarizeForApi = (m) => {
  if (m.type === 'reservationSummary') {
    const r = m.reservation
    return `Oppsummering vist til gjesten: ${r.guests} gjester, ${r.date} kl. ${r.time}${
      r.name ? `, navn: ${r.name}` : ''
    }. Gjesten er bedt om å fullføre bestillingen på reservasjonssiden.`
  }
  if (m.type === 'quickReplies') {
    return `Tilbød gjesten disse tidspunktene: ${m.quickReplies.join(', ')}.`
  }
  return m.text
}

const toApiText = (m) => summarizeForApi(m)

export function useChat() {
  const [messages, setMessages] = useState(() => loadChatHistory())
  const [isStreaming, setIsStreaming] = useState(false)
  const abortRef = useRef(null)
  const hydratedRef = useRef(false)

  useEffect(() => {
    hydratedRef.current = true
  }, [])

  useEffect(() => {
    if (!hydratedRef.current) return
    if (isStreaming) return
    saveChatHistory(messages)
  }, [messages, isStreaming])

  useEffect(() => () => abortRef.current?.abort(), [])

  const runReply = useCallback(async (historyForApi, assistantMessageId) => {
    const controller = new AbortController()
    abortRef.current = controller
    setIsStreaming(true)

    try {
      const result = await streamChatReply({
        messages: historyForApi,
        signal: controller.signal,
        onChunk: (_delta, full) => {
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantMessageId ? { ...m, text: full } : m))
          )
        },
      })

      const call = result.functionCall
      if (call?.name === 'offer_time_slots' && Array.isArray(call.args?.times)) {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMessageId
              ? { ...m, status: 'done', type: 'quickReplies', quickReplies: call.args.times, text: '' }
              : m
          )
        )
      } else if (call?.name === 'summarize_reservation') {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMessageId
              ? { ...m, status: 'done', type: 'reservationSummary', reservation: call.args, text: '' }
              : m
          )
        )
      } else {
        setMessages((prev) =>
          prev.map((m) => (m.id === assistantMessageId ? { ...m, status: 'done' } : m))
        )
      }
    } catch (err) {
      const chatError = err instanceof ChatError ? err : new ChatError(err.message, 'unknown')
      if (chatError.type === 'aborted') {
        setMessages((prev) =>
          prev
            .filter((m) => m.id !== assistantMessageId || m.text)
            .map((m) => (m.id === assistantMessageId ? { ...m, status: 'done' } : m))
        )
      } else {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMessageId
              ? { ...m, status: 'error', errorMessage: chatError.message, errorType: chatError.type }
              : m
          )
        )
      }
    } finally {
      setIsStreaming(false)
      abortRef.current = null
    }
  }, [])

  const sendMessage = useCallback(
    (text) => {
      const trimmed = text.trim()
      if (!trimmed || isStreaming) return

      const userMessage = { id: nextId(), role: 'user', text: trimmed, status: 'done', timestamp: Date.now() }
      const assistantMessage = { id: nextId(), role: 'assistant', text: '', status: 'streaming', timestamp: Date.now() }
      const historyForApi = [...messages, userMessage].map((m) => ({ role: m.role, text: toApiText(m) }))

      setMessages((prev) => [...prev, userMessage, assistantMessage])
      runReply(historyForApi, assistantMessage.id)
    },
    [isStreaming, messages, runReply]
  )

  const retry = useCallback(() => {
    const lastErrorIndex = [...messages].reverse().findIndex((m) => m.status === 'error')
    if (lastErrorIndex === -1) return
    const errorIndex = messages.length - 1 - lastErrorIndex

    const history = messages.slice(0, errorIndex)
    const assistantMessage = { id: nextId(), role: 'assistant', text: '', status: 'streaming', timestamp: Date.now() }

    setMessages([...history, assistantMessage])
    runReply(history.map((m) => ({ role: m.role, text: toApiText(m) })), assistantMessage.id)
  }, [messages, runReply])

  const clearConversation = useCallback(() => {
    abortRef.current?.abort()
    setMessages([])
    clearChatHistory()
  }, [])

  const stop = useCallback(() => {
    abortRef.current?.abort()
  }, [])

  return {
    messages,
    isStreaming,
    sendMessage,
    stop,
    retry,
    clearConversation,
    isEmpty: messages.length === 0,
    identity: assistantIdentity,
  }
}

export default useChat
