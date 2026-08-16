import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

export default function QuickReplies({ options, onSelect, disabled }) {
  if (!options?.length) return null

  return (
    <div className="flex max-w-[85%] flex-wrap gap-2">
      {options.map((option, i) => (
        <motion.button
          key={option}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(option)}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.25 }}
          className="flex items-center gap-1.5 rounded-full border border-gold-300 bg-gold-50 px-4 py-2 text-sm font-medium text-charcoal-700 shadow-soft transition-colors hover:bg-gold-100 disabled:pointer-events-none disabled:opacity-50 dark:bg-gold-100 dark:hover:bg-gold-200"
        >
          <Clock size={13} className="text-gold-500" />
          {option}
        </motion.button>
      ))}
    </div>
  )
}
