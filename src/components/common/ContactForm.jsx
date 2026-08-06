import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Button from '../ui/Button.jsx'

const initialState = { name: '', email: '', subject: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 py-10 text-center"
      >
        <CheckCircle2 size={32} className="text-gold-500" />
        <h3 className="heading-md text-charcoal dark:text-cream-100">Message Sent</h3>
        <p className="max-w-sm text-sm text-charcoal-600 dark:text-cream-100/70">
          Thanks for reaching out, {form.name || 'friend'}. Our team will get back to you shortly.
        </p>
        <Button variant="outline" onClick={() => { setForm(initialState); setSubmitted(false) }}>
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name">
          <input required value={form.name} onChange={update('name')} className={fieldClasses} placeholder="Your name" />
        </Field>
        <Field label="Email">
          <input required type="email" value={form.email} onChange={update('email')} className={fieldClasses} placeholder="you@email.com" />
        </Field>
      </div>
      <Field label="Subject">
        <input value={form.subject} onChange={update('subject')} className={fieldClasses} placeholder="How can we help?" />
      </Field>
      <Field label="Message">
        <textarea required rows={5} value={form.message} onChange={update('message')} className={`${fieldClasses} resize-none`} placeholder="Your message..." />
      </Field>
      <Button type="submit" size="lg" className="w-full sm:w-auto sm:self-start">
        Send Message
      </Button>
    </form>
  )
}

const fieldClasses =
  'w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold-400 dark:border-white/15 dark:bg-charcoal-800 dark:text-cream-100'

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-charcoal dark:text-cream-100">{label}</span>
      {children}
    </label>
  )
}
