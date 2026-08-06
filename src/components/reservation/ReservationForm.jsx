import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Calendar, Clock, MessageSquare, User, Mail, Phone } from 'lucide-react'
import Button from '../ui/Button.jsx'
import ReservationConfirmation from './ReservationConfirmation.jsx'

const TIME_SLOTS = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM']
const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8]

const initialState = {
  name: '',
  email: '',
  phone: '',
  guests: 2,
  date: '',
  time: '',
  requests: '',
}

export default function ReservationForm() {
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const update = (field) => (e) => {
    const value = e?.target ? e.target.value : e
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    if (!form.date) next.date = 'Please select a date'
    if (!form.time) next.time = 'Please select a time'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  const reset = () => {
    setForm(initialState)
    setErrors({})
    setSubmitted(false)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="card-surface p-6 sm:p-10">
      {submitted ? (
        <ReservationConfirmation data={form} onReset={reset} />
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          noValidate
        >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Full Name" icon={User} error={errors.name}>
                <input
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Jane Doe"
                  className={inputClasses(errors.name)}
                />
              </Field>
              <Field label="Email" icon={Mail} error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="jane@email.com"
                  className={inputClasses(errors.email)}
                />
              </Field>
            </div>

            <Field label="Phone (optional)" icon={Phone}>
              <input
                type="tel"
                value={form.phone}
                onChange={update('phone')}
                placeholder="(503) 555-0100"
                className={inputClasses()}
              />
            </Field>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Date" icon={Calendar} error={errors.date}>
                <input
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={update('date')}
                  className={inputClasses(errors.date)}
                />
              </Field>

              <Field label="Guests" icon={Users}>
                <select value={form.guests} onChange={update('guests')} className={inputClasses()}>
                  {GUEST_OPTIONS.map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                  <option value="9+">9+ Guests (Private Dining)</option>
                </select>
              </Field>
            </div>

            <Field label="Time" icon={Clock} error={errors.time}>
              <div className="flex flex-wrap gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => update('time')(slot)}
                    className={`rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                      form.time === slot
                        ? 'border-gold-400 bg-gold-400 text-charcoal-900'
                        : 'border-stone-200 text-charcoal-600 hover:border-gold-300 dark:border-white/15 dark:text-cream-100/70'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Special Requests (optional)" icon={MessageSquare}>
              <textarea
                value={form.requests}
                onChange={update('requests')}
                rows={4}
                placeholder="Allergies, celebrations, seating preferences..."
                className={`${inputClasses()} resize-none`}
              />
            </Field>

            <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto sm:self-start">
              Request Reservation
            </Button>
          <p className="text-xs text-charcoal-400 dark:text-cream-100/40">
            This is a portfolio demo — no reservation will actually be submitted or emailed.
          </p>
        </motion.form>
      )}
    </div>
  )
}

function Field({ label, icon: Icon, error, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-center gap-1.5 text-sm font-medium text-charcoal dark:text-cream-100">
        <Icon size={14} className="text-gold-500" />
        {label}
      </span>
      {children}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  )
}

function inputClasses(error) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold-400 dark:bg-charcoal-800 dark:text-cream-100 ${
    error ? 'border-red-300' : 'border-stone-200 dark:border-white/15'
  }`
}
