import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ChatHeader from './ChatHeader.jsx'
import ChatMessage from './ChatMessage.jsx'
import TypingIndicator from './TypingIndicator.jsx'
import SuggestedQuestions from './SuggestedQuestions.jsx'
import ChatInput from './ChatInput.jsx'
import { assistantIdentity } from '../../config/restaurantContext.js'

export default function ChatWindow({ chat, onClose, visible }) {
  const scrollRef = useRef(null)
  const { messages, isStreaming, sendMessage, retry, clearConversation, isEmpty, stop } = chat

  useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, isStreaming])

  if (!visible) return null

  const showTyping = isStreaming && messages.length > 0 && !messages[messages.length - 1]?.text

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      role="dialog"
      aria-label={`${assistantIdentity.restaurantName} AI Assistant chat`}
      className="fixed bottom-24 left-4 right-4 z-[94] flex h-[min(72vh,640px)] flex-col overflow-hidden rounded-[28px] border border-stone-100 bg-white shadow-lift dark:border-white/10 dark:bg-charcoal-900 sm:bottom-28 sm:left-auto sm:right-8 sm:w-[400px]"
    >
      <div className="h-1.5 w-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300" />

      <ChatHeader onClose={onClose} onClear={clearConversation} showClear={!isEmpty} />

      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
        {isEmpty ? (
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl bg-gradient-to-br from-gold-50 to-cream-50 p-5 dark:from-gold-400/10 dark:to-transparent">
              <p className="font-display text-lg text-charcoal dark:text-cream-100">
                {assistantIdentity.welcomeTitle}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-charcoal-500 dark:text-cream-100/60">
                {assistantIdentity.welcomeMessage}
              </p>
            </div>
            <div>
              <p className="mb-2.5 px-1 text-xs font-medium uppercase tracking-widest2 text-charcoal-400 dark:text-cream-100/40">
                Try asking
              </p>
              <SuggestedQuestions onSelect={sendMessage} disabled={isStreaming} />
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} onRetry={retry} />
            ))}
            {showTyping && <TypingIndicator />}
          </>
        )}
      </div>

      <ChatInput onSend={sendMessage} disabled={isStreaming} onStop={stop} />
    </motion.div>
  )
}
