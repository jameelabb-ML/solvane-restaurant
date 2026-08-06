import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Button from '../ui/Button.jsx'

const EVENT_TYPES = ['Private Dining', 'Corporate Dinner', 'Wedding Reception', 'Birthday / Celebration', 'Other']

const initialState = {
  name: '',
  email: '',
  phone: '',
  eventType: EVENT_TYPES[0],
  guests: '',
  date: '',
  message: '',
}

export default function InquiryForm() {
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
        <CheckCircle2 size={36} className="text-gold-500" />
        <h3 className="heading-md text-charcoal dark:text-cream-100">Inquiry Sent</h3>
        <p className="max-w-sm text-sm text-charcoal-600 dark:text-cream-100/70">
          Thank you, {form.name || 'there'}. Our events team would typically respond within two business days. This
          is a portfolio demo, so no message was actually sent.
        </p>
        <Button variant="outline" onClick={() => { setForm(initialState); setSubmitted(false) }}>
          Send Another Inquiry
        </Button>
      </motion.div>
    )
  }

  return (
    <AnimatePresence>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <TextField label="Full Name" value={form.name} onChange={update('name')} required />
          <TextField label="Email" type="email" value={form.email} onChange={update('email')} required />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <TextField label="Phone" type="tel" value={form.phone} onChange={update('phone')} />
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-charcoal dark:text-cream-100">Event Type</span>
            <select value={form.eventType} onChange={update('eventType')} className={fieldClasses}>
              {EVENT_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <TextField label="Estimated Guests" type="number" min="1" value={form.guests} onChange={update('guests')} />
          <TextField label="Preferred Date" type="date" value={form.date} onChange={update('date')} />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-charcoal dark:text-cream-100">Tell us about your event</span>
          <textarea
            rows={4}
            value={form.message}
            onChange={update('message')}
            placeholder="Occasion, vision, dietary needs..."
            className={`${fieldClasses} resize-none`}
          />
        </div>
        <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto sm:self-start">
          Submit Inquiry
        </Button>
        <p className="text-xs text-charcoal-400 dark:text-cream-100/40">
          This is a portfolio demo — inquiries are not sent anywhere.
        </p>
      </motion.form>
    </AnimatePresence>
  )
}

const fieldClasses =
  'w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold-400 dark:border-white/15 dark:bg-charcoal-800 dark:text-cream-100'

function TextField({ label, ...props }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-charcoal dark:text-cream-100">{label}</span>
      <input className={fieldClasses} {...props} />
    </label>
  )
}
