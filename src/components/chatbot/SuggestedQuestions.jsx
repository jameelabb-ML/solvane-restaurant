import { motion } from 'framer-motion'
import { suggestedPrompts } from '../../config/restaurantContext.js'

export default function SuggestedQuestions({ onSelect, disabled }) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {suggestedPrompts.map((item, i) => (
        <motion.button
          key={item.label}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(item.prompt)}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * i, duration: 0.35 }}
          className="group flex items-center gap-2.5 rounded-2xl border border-stone-200 bg-white px-4 py-3 text-left text-sm text-charcoal-600 transition-colors hover:border-gold-300 hover:bg-gold-50 disabled:pointer-events-none disabled:opacity-50 dark:border-white/10 dark:bg-charcoal-800 dark:text-cream-100/80 dark:hover:border-gold-400/40 dark:hover:bg-white/5"
        >
          <span className="text-base leading-none">{item.icon}</span>
          <span>{item.label}</span>
        </motion.button>
      ))}
    </div>
  )
}
