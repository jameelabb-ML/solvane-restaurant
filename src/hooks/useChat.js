import { useCallback, useEffect, useRef, useState } from 'react'
import { streamChatReply, ChatError } from '../services/gemini.js'
import { loadChatHistory, saveChatHistory, clearChatHistory } from '../utils/storage.js'
import { assistantIdentity } from '../config/restaurantContext.js'

let idCounter = 0
const nextId = () => `msg-${Date.now()}-${idCounter++}`

// Reservation-type messages carry structured data instead of free text, so when
// they're sent back to the model as conversation history, summarize them —
// otherwise the model loses track of what it already booked.
const summarizeReservation = (r) =>
  `Reservation confirmed: ${r.name}, ${r.guests} guest${r.guests === 1 ? '' : 's'}, ${r.date} at ${r.time}${
    r.email ? `, email ${r.email}` : ''
  }${r.phone ? `, phone ${r.phone}` : ''}${r.specialRequests ? `. Notes: ${r.specialRequests}` : ''}.`

const toApiText = (m) => (m.type === 'reservation' ? summarizeReservation(m.reservation) : m.text)

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

      if (result.functionCall?.name === 'submit_reservation') {
        const reservation = result.functionCall.args
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMessageId
              ? { ...m, status: 'done', type: 'reservation', reservation, text: '' }
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
