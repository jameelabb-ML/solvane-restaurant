import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme.js'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:border-gold-400 hover:text-gold-500 dark:border-cream-100/20 dark:text-cream-100 dark:hover:text-gold-300 ${className}`}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
