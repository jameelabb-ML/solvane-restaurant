import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll.js'

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const open = index !== null && index !== undefined
  useLockBodyScroll(open)

  const handleKeyDown = useCallback(
    (e) => {
      if (!open) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate(1)
      if (e.key === 'ArrowLeft') onNavigate(-1)
    },
    [open, onClose, onNavigate]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  if (!images || !open) return null
  const current = images[index]
  if (!current) return null

  return createPortal(
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-charcoal-950/95 p-4 backdrop-blur-sm sm:p-8">
      <button
        type="button"
        onClick={onClose}
        aria-label="Lukk galleri"
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2.5 text-cream-100 transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
      >
        <X size={20} />
      </button>

      <button
        type="button"
        onClick={() => onNavigate(-1)}
        aria-label="Forrige bilde"
        className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream-100 transition-colors hover:bg-white/20 sm:left-6"
      >
        <ChevronLeft size={20} />
      </button>

      <motion.div
        key={current.id}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex max-h-[85vh] max-w-4xl flex-col items-center gap-4"
      >
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[75vh] w-auto rounded-2xl object-contain shadow-lift"
        />
        {current.caption && (
          <p className="text-center text-sm text-cream-100/80">{current.caption}</p>
        )}
      </motion.div>

      <button
        type="button"
        onClick={() => onNavigate(1)}
        aria-label="Neste bilde"
        className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream-100 transition-colors hover:bg-white/20 sm:right-6"
      >
        <ChevronRight size={20} />
      </button>
    </div>,
    document.body
  )
}
