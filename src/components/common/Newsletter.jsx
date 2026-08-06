import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import Button from '../ui/Button.jsx'

export default function Newsletter({ dark = false }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className={`flex items-center gap-3 rounded-2xl border px-5 py-4 ${
          dark
            ? 'border-cream-100/20 text-cream-100'
            : 'border-gold-200 bg-gold-50 text-charcoal dark:border-white/10 dark:bg-white/5 dark:text-cream-100'
        }`}
      >
        <CheckCircle2 size={20} className="text-gold-500 shrink-0" />
        <p className="text-sm">Thank you — you&apos;re on the list for seasonal menus and invitations.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`w-full flex-1 rounded-full border px-5 py-3 text-sm outline-none transition-colors focus:border-gold-400 ${
          dark
            ? 'border-cream-100/25 bg-transparent text-cream-100 placeholder:text-cream-100/50'
            : 'border-stone-300 bg-white text-charcoal placeholder:text-charcoal-400 dark:border-white/15 dark:bg-charcoal-800 dark:text-cream-100'
        }`}
      />
      <Button type="submit" variant={dark ? 'gold' : 'primary'} size="md" className="shrink-0">
        Subscribe <Send size={15} />
      </Button>
    </form>
  )
}
