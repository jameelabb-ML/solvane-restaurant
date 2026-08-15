import { useEffect, useRef, useState } from 'react'
import { ArrowUp, Square } from 'lucide-react'

export default function ChatInput({ onSend, disabled, onStop }) {
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)

  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`
  }, [value])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (disabled || !value.trim()) return
    onSend(value)
    setValue('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-2 border-t border-stone-100 p-3.5 dark:border-white/10"
    >
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
        placeholder="Spør om menyen, åpningstider, arrangementer..."
        className="max-h-[120px] flex-1 resize-none rounded-2xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal-300 focus:border-gold-400 focus:bg-white dark:border-white/10 dark:bg-charcoal-800 dark:text-cream-100 dark:placeholder:text-cream-100/30"
      />
      {disabled ? (
        <button
          type="button"
          onClick={onStop}
          aria-label="Stopp generering"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-charcoal-800 text-cream-100 transition-transform hover:scale-105"
        >
          <Square size={13} fill="currentColor" />
        </button>
      ) : (
        <button
          type="submit"
          disabled={!value.trim()}
          aria-label="Send melding"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-charcoal-800 text-cream-100 transition-all hover:scale-105 disabled:pointer-events-none disabled:opacity-30 disabled:hover:scale-100 dark:bg-gold-400 dark:text-charcoal-900"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </form>
  )
}
