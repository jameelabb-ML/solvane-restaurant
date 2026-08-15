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
        <h3 className="heading-md text-charcoal dark:text-cream-100">Melding sendt</h3>
        <p className="max-w-sm text-sm text-charcoal-600 dark:text-cream-100/70">
          Takk for at du tok kontakt, {form.name || 'du'}. Teamet vårt svarer deg så snart som mulig.
        </p>
        <Button variant="outline" onClick={() => { setForm(initialState); setSubmitted(false) }}>
          Send en ny melding
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Navn">
          <input required value={form.name} onChange={update('name')} className={fieldClasses} placeholder="Ditt navn" />
        </Field>
        <Field label="E-post">
          <input required type="email" value={form.email} onChange={update('email')} className={fieldClasses} placeholder="deg@epost.no" />
        </Field>
      </div>
      <Field label="Emne">
        <input value={form.subject} onChange={update('subject')} className={fieldClasses} placeholder="Hva kan vi hjelpe deg med?" />
      </Field>
      <Field label="Melding">
        <textarea required rows={5} value={form.message} onChange={update('message')} className={`${fieldClasses} resize-none`} placeholder="Din melding..." />
      </Field>
      <Button type="submit" size="lg" className="w-full sm:w-auto sm:self-start">
        Send melding
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
