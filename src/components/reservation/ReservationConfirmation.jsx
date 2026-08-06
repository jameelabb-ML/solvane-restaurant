import { motion } from 'framer-motion'
import { CheckCircle2, Calendar, Clock, Users } from 'lucide-react'
import Button from '../ui/Button.jsx'

export default function ReservationConfirmation({ data, onReset }) {
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
        <h3 className="heading-md text-charcoal dark:text-cream-100">Request Received</h3>
        <p className="mt-2 max-w-sm text-sm text-charcoal-600 dark:text-cream-100/70">
          Thank you, {data.name}. This is a portfolio demo, so no reservation has actually been made — but here is
          what a confirmation would include.
        </p>
      </div>

      <div className="grid w-full max-w-sm grid-cols-1 gap-3 rounded-2xl border border-stone-200 bg-cream-50 p-5 text-left dark:border-white/10 dark:bg-charcoal-800">
        <div className="flex items-center gap-3 text-sm text-charcoal-600 dark:text-cream-100/80">
          <Calendar size={16} className="text-gold-500" /> {data.date || 'Date pending'}
        </div>
        <div className="flex items-center gap-3 text-sm text-charcoal-600 dark:text-cream-100/80">
          <Clock size={16} className="text-gold-500" /> {data.time || 'Time pending'}
        </div>
        <div className="flex items-center gap-3 text-sm text-charcoal-600 dark:text-cream-100/80">
          <Users size={16} className="text-gold-500" /> {data.guests} {Number(data.guests) === 1 ? 'Guest' : 'Guests'}
        </div>
      </div>

      <Button onClick={onReset} variant="outline">
        Make Another Reservation
      </Button>
    </motion.div>
  )
}
