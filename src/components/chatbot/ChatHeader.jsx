import { X, RotateCcw } from 'lucide-react'
import { assistantIdentity } from '../../config/restaurantContext.js'
import ChatIcon from './ChatIcon.jsx'

export default function ChatHeader({ onClose, onClear, showClear }) {
  return (
    <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-gold-50 via-[#F6E9CE] to-gold-100 px-5 py-4 dark:from-charcoal-800 dark:via-charcoal-800 dark:to-charcoal-800">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-gold-600 shadow-soft dark:bg-white/10 dark:text-gold-300">
          <ChatIcon size={19} />
        </div>
        <div>
          <p className="font-display text-base leading-tight text-charcoal-800 dark:text-cream-100">
            {assistantIdentity.name}
          </p>
          <p className="flex items-center gap-1.5 text-xs text-charcoal-500 dark:text-cream-100/60">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Pålogget
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {showClear && (
          <button
            type="button"
            onClick={onClear}
            aria-label="Tøm samtalen"
            title="Tøm samtalen"
            className="rounded-full p-2 text-charcoal-500 transition-colors hover:bg-white/60 hover:text-charcoal-800 dark:text-cream-100/50 dark:hover:bg-white/10 dark:hover:text-cream-100"
          >
            <RotateCcw size={16} />
          </button>
        )}
        <button
          type="button"
          onClick={onClose}
          aria-label="Lukk chat"
          className="rounded-full p-2 text-charcoal-500 transition-colors hover:bg-white/60 hover:text-charcoal-800 dark:text-cream-100/50 dark:hover:bg-white/10 dark:hover:text-cream-100"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}
