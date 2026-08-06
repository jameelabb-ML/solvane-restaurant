import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll.js'
import { useOnClickOutside } from '../../hooks/useOnClickOutside.js'

export default function Modal({ open, onClose, children, className = '' }) {
  const panelRef = useRef(null)
  useLockBodyScroll(open)
  useOnClickOutside(panelRef, () => open && onClose?.())

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-charcoal-900/60 backdrop-blur-sm" />
      <motion.div
        ref={panelRef}
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`relative z-10 w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-cream-100 dark:bg-charcoal-800 shadow-lift ${className}`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 z-10 rounded-full bg-white/80 dark:bg-charcoal-700/80 p-2 text-charcoal dark:text-cream-100 shadow-soft transition hover:bg-white dark:hover:bg-charcoal-700"
        >
          <X size={18} />
        </button>
        {children}
      </motion.div>
    </div>,
    document.body
  )
}
