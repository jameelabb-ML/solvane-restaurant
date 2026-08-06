import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Calendar, Clock, Users, User } from 'lucide-react'
import Button from '../ui/Button.jsx'

const generateConfirmationCode = () =>
  `SLV-${Math.random().toString(36).slice(2, 7).toUpperCase()}`

const formatDate = (value) => {
  if (!value) return value
  const parsed = new Date(`${value}T00:00:00`)
  if (Number.isNaN(parsed.getTime())) return value
  return parsed.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
}

export default function ReservationConfirmation({ data, onReset }) {
  const confirmationCode = useMemo(generateConfirmationCode, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col items-center gap-6 py-6 text-center"
    >
      <motion.span
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4, ease: 'easeOut' }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-gold-600 dark:bg-gold-400/15 dark:text-gold-300"
      >
        <CheckCircle2 size={30} />
      </motion.span>

      <div>
        <h3 className="heading-md text-charcoal dark:text-cream-100">Reservation Confirmed</h3>
        <p className="mt-2 max-w-sm text-sm text-charcoal-600 dark:text-cream-100/70">
          Thank you, {data.name}. We look forward to welcoming you to Solvane. A confirmation has been sent to{' '}
          {data.email}.
        </p>
      </div>

      <div className="w-full max-w-sm rounded-2xl border border-stone-200 bg-cream-50 text-left dark:border-white/10 dark:bg-charcoal-800">
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-3 dark:border-white/10">
          <span className="text-xs font-semibold uppercase tracking-widest2 text-charcoal-400 dark:text-cream-100/40">
            Reservation Details
          </span>
          <span className="text-xs font-medium text-gold-600 dark:text-gold-300">{confirmationCode}</span>
        </div>
        <div className="grid grid-cols-1 gap-3 p-5">
          <div className="flex items-center gap-3 text-sm text-charcoal-600 dark:text-cream-100/80">
            <User size={16} className="text-gold-500" /> {data.name}
          </div>
          <div className="flex items-center gap-3 text-sm text-charcoal-600 dark:text-cream-100/80">
            <Calendar size={16} className="text-gold-500" /> {formatDate(data.date)}
          </div>
          <div className="flex items-center gap-3 text-sm text-charcoal-600 dark:text-cream-100/80">
            <Clock size={16} className="text-gold-500" /> {data.time}
          </div>
          <div className="flex items-center gap-3 text-sm text-charcoal-600 dark:text-cream-100/80">
            <Users size={16} className="text-gold-500" /> {data.guests} {Number(data.guests) === 1 ? 'Guest' : 'Guests'}
          </div>
        </div>
      </div>

      <Button onClick={onReset} variant="outline">
        Make Another Reservation
      </Button>
    </motion.div>
  )
}
