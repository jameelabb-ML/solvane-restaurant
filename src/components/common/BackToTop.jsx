import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useScrollPosition } from '../../hooks/useScrollPosition.js'

export default function BackToTop() {
  const visible = useScrollPosition(480)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-charcoal/90 text-cream-100 shadow-lift backdrop-blur transition-colors hover:bg-gold-400 hover:text-charcoal-900 dark:bg-cream-100/90 dark:text-charcoal-900 sm:bottom-8 sm:left-8"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
