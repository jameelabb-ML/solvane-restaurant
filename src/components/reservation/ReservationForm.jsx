import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Calendar, Clock, MessageSquare, User, Mail, Phone } from 'lucide-react'
import Button from '../ui/Button.jsx'
import ReservationConfirmation from './ReservationConfirmation.jsx'

const TIME_SLOTS = ['17.00', '17.30', '18.00', '18.30', '19.00', '19.30', '20.00', '20.30', '21.00']
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
    if (!form.name.trim()) next.name = 'Navn er påkrevd'
    if (!form.email.trim()) next.email = 'E-post er påkrevd'
    if (!form.date) next.date = 'Velg en dato'
    if (!form.time) next.time = 'Velg et tidspunkt'
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
              <Field label="Fullt navn" icon={User} error={errors.name}>
                <input
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Kari Nordmann"
                  className={inputClasses(errors.name)}
                />
              </Field>
              <Field label="E-post" icon={Mail} error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="kari@epost.no"
                  className={inputClasses(errors.email)}
                />
              </Field>
            </div>

            <Field label="Telefon (valgfritt)" icon={Phone}>
              <input
                type="tel"
                value={form.phone}
                onChange={update('phone')}
                placeholder="912 34 567"
                className={inputClasses()}
              />
            </Field>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Dato" icon={Calendar} error={errors.date}>
                <input
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={update('date')}
                  className={inputClasses(errors.date)}
                />
              </Field>

              <Field label="Gjester" icon={Users}>
                <select value={form.guests} onChange={update('guests')} className={inputClasses()}>
                  {GUEST_OPTIONS.map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'gjest' : 'gjester'}
                    </option>
                  ))}
                  <option value="9+">9+ gjester (privat middag)</option>
                </select>
              </Field>
            </div>

            <Field label="Tidspunkt" icon={Clock} error={errors.time}>
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

            <Field label="Spesielle ønsker (valgfritt)" icon={MessageSquare}>
              <textarea
                value={form.requests}
                onChange={update('requests')}
                rows={4}
                placeholder="Allergier, feiringer, bordønsker..."
                className={`${inputClasses()} resize-none`}
              />
            </Field>

            <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto sm:self-start">
              Send reservasjonsforespørsel
            </Button>
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
