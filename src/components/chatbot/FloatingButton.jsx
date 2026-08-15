import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { assistantIdentity } from '../../config/restaurantContext.js'
import ChatIcon from './ChatIcon.jsx'

export default function FloatingButton({ onClick, visible }) {
  const [autoCue, setAutoCue] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (!visible) {
      setAutoCue(false)
      return undefined
    }
    const showTimer = setTimeout(() => setAutoCue(true), 900)
    const hideTimer = setTimeout(() => setAutoCue(false), 6500)
    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [visible])

  if (!visible) return null

  const showTooltip = autoCue || hovering

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[95] sm:bottom-8 sm:right-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-gold-300/50"
        animate={{ scale: [1, 1.35, 1], opacity: [0.55, 0, 0.55] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.button
        type="button"
        onClick={onClick}
        aria-label={`Åpne ${assistantIdentity.name}`}
        whileHover={{ scale: 1.08, rotate: -4 }}
        onHoverStart={() => setHovering(true)}
        onHoverEnd={() => setHovering(false)}
        onFocus={() => setHovering(true)}
        onBlur={() => setHovering(false)}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full border border-gold-200 bg-gradient-to-br from-white to-gold-50 text-gold-600 shadow-lift transition-shadow duration-300 hover:shadow-[0_24px_48px_-12px_rgba(176,141,83,0.45)] dark:border-white/10 dark:from-charcoal-800 dark:to-charcoal-800 dark:text-gold-300"
      >
        <ChatIcon size={27} />

        <AnimatePresence>
          {showTooltip && (
            <motion.span
              initial={{ opacity: 0, x: 8, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-charcoal px-3.5 py-2 text-xs font-medium text-cream-100 shadow-soft sm:block dark:bg-cream-100 dark:text-charcoal-900"
            >
              Spør oss gjerne
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  )
}
