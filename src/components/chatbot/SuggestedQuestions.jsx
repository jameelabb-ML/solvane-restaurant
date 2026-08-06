import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { suggestedPrompts } from '../../config/restaurantContext.js'

export default function SuggestedQuestions({ onSelect, disabled }) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {suggestedPrompts.map((prompt, i) => (
        <motion.button
          key={prompt}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(prompt)}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * i, duration: 0.35 }}
          className="group flex items-center justify-between gap-2 rounded-2xl border border-stone-200 bg-white px-4 py-3 text-left text-sm text-charcoal-600 transition-colors hover:border-gold-300 hover:bg-gold-50 disabled:pointer-events-none disabled:opacity-50 dark:border-white/10 dark:bg-charcoal-800 dark:text-cream-100/80 dark:hover:border-gold-400/40 dark:hover:bg-white/5"
        >
          <span>{prompt}</span>
          <ArrowUpRight size={14} className="shrink-0 text-gold-400 opacity-0 transition-opacity group-hover:opacity-100" />
        </motion.button>
      ))}
    </div>
  )
}
