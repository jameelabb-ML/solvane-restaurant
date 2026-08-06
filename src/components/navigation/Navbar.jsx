import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { navLinks } from '../../utils/navigation.js'
import { useScrollPosition } from '../../hooks/useScrollPosition.js'
import ThemeToggle from './ThemeToggle.jsx'
import MobileMenu from './MobileMenu.jsx'
import Button from '../ui/Button.jsx'
import restaurant from '../../data/restaurant.js'

export default function Navbar() {
  const scrolled = useScrollPosition(30)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-panel shadow-soft py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-page flex items-center justify-between">
          <NavLink to="/" className="font-display text-2xl tracking-wide text-charcoal dark:text-cream-100">
            {restaurant.name}
          </NavLink>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full ${
                    isActive
                      ? 'text-gold-500 after:w-full'
                      : 'text-charcoal-600 hover:text-charcoal dark:text-cream-100/80 dark:hover:text-cream-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle className="hidden sm:flex" />
            <Button to="/reservations" size="sm" className="hidden sm:inline-flex">
              Reserve
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-full text-charcoal dark:text-cream-100 lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
