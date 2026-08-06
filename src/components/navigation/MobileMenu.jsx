import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { navLinks } from '../../utils/navigation.js'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll.js'
import Button from '../ui/Button.jsx'
import restaurant from '../../data/restaurant.js'

export default function MobileMenu({ open, onClose }) {
  useLockBodyScroll(open)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[90] sm:hidden">
      <motion.div
        className="absolute inset-0 bg-charcoal-950/50 backdrop-blur-[2px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />

      <motion.div
        className="absolute inset-y-0 right-0 flex w-[62%] max-w-[300px] flex-col bg-cream-100 shadow-lift dark:bg-charcoal-900"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <span className="font-display text-xl text-charcoal dark:text-cream-100">
            {restaurant.name}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full p-2 text-charcoal dark:text-cream-100 hover:bg-charcoal/5 dark:hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-2">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.04 * i, duration: 0.35 }}
            >
              <NavLink
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `block py-2.5 font-display text-xl transition-colors ${
                    isActive ? 'text-gold-500' : 'text-charcoal dark:text-cream-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        <div className="flex flex-col gap-3 px-5 pb-8 pt-4">
          <Button to="/reservations" onClick={onClose} size="sm" className="w-full">
            Reserve a Table
          </Button>
          <a
            href={restaurant.contact.phoneHref}
            className="text-center text-xs text-charcoal-600 dark:text-cream-100/70"
          >
            {restaurant.contact.phone}
          </a>
        </div>
      </motion.div>
    </div>
  )
}
