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
          className="group flex items-center gap-2.5 rounded-2xl border border-gold-200 bg-gold-50 px-4 py-3 text-left text-sm text-charcoal-700 transition-colors hover:border-gold-400 hover:bg-gold-100 disabled:pointer-events-none disabled:opacity-50 dark:border-gold-300 dark:bg-gold-200 dark:hover:bg-gold-300"
        >
          <span className="text-base leading-none">{item.icon}</span>
          <span>{item.label}</span>
        </motion.button>
      ))}
    </div>
  )
}
