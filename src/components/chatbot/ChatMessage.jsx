import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, RefreshCcw, TriangleAlert } from 'lucide-react'
import { renderMarkdown } from '../../utils/markdown.js'
import ChatIcon from './ChatIcon.jsx'
import ReservationCard from './ReservationCard.jsx'
import QuickReplies from './QuickReplies.jsx'

const formatTime = (timestamp) => {
  if (!timestamp) return ''
  return new Date(timestamp).toLocaleTimeString('nb-NO', { hour: '2-digit', minute: '2-digit' })
}

export default function ChatMessage({ message, onRetry, onQuickReply, onNavigate, disabled }) {
  const [copied, setCopied] = useState(false)
  const isUser = message.role === 'user'
  const isError = message.status === 'error'
  const isStreaming = message.status === 'streaming'
  const isReservation = message.type === 'reservationSummary'
  const isQuickReplies = message.type === 'quickReplies'
  const isStructured = isReservation || isQuickReplies

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard API may be unavailable — fail silently.
    }
  }

  if (isError) {
    return (
      <div className="flex items-start gap-2.5">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 dark:bg-red-500/10">
          <TriangleAlert size={13} />
        </div>
        <div className="flex max-w-[85%] flex-col gap-2 rounded-2xl rounded-bl-md border border-red-100 bg-red-50/70 px-4 py-3 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300">
          <span>{message.errorMessage || 'Noe gikk galt.'}</span>
          <button
            type="button"
            onClick={onRetry}
            className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-red-600 shadow-soft transition-colors hover:bg-red-50 dark:bg-charcoal-800 dark:text-red-300"
          >
            <RefreshCcw size={12} /> Prøv igjen
          </button>
        </div>
      </div>
    )
  }

  if (!message.text && !isStructured && isStreaming) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`group flex items-end gap-2.5 ${isUser ? 'flex-row-reverse' : ''}`}
    >
      {!isUser && (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-100 to-gold-200 text-charcoal-800">
          <ChatIcon size={13} />
        </div>
      )}

      <div className={`flex max-w-[82%] flex-col gap-1 ${isUser ? 'items-end' : 'items-start'}`}>
        {isReservation ? (
          <ReservationCard data={message.reservation} onNavigate={onNavigate} />
        ) : isQuickReplies ? (
          <QuickReplies options={message.quickReplies} onSelect={onQuickReply} disabled={disabled} />
        ) : (
          <div
            className={`rounded-2xl px-4 py-3 text-[0.9rem] leading-relaxed shadow-soft ${
              isUser
                ? 'rounded-br-md bg-charcoal-800 text-cream-100'
                : 'rounded-bl-md bg-gold-200 text-charcoal-900'
            }`}
          >
            {isUser ? message.text : renderMarkdown(message.text)}
            {isStreaming && (
              <span className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 animate-pulse bg-charcoal-900 align-middle" />
            )}
          </div>
        )}

        <div className="flex items-center gap-2 px-1 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="text-[11px] text-charcoal-300 dark:text-cream-100/30">
            {formatTime(message.timestamp)}
          </span>
          {!isUser && !isStructured && message.status === 'done' && message.text && (
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Kopier melding"
              className="text-charcoal-300 transition-colors hover:text-gold-500 dark:text-cream-100/30 dark:hover:text-gold-300"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
