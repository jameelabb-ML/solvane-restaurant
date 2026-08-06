import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { CalendarCheck, Users, Mail, Phone, MessageSquare } from 'lucide-react'

const generateConfirmationCode = () =>
  `SLV-${Math.random().toString(36).slice(2, 7).toUpperCase()}`

export default function ReservationCard({ data }) {
  const confirmationCode = useMemo(generateConfirmationCode, [])

  if (!data) return null

  const rows = [
    { icon: CalendarCheck, label: `${data.date} · ${data.time}` },
    { icon: Users, label: `${data.guests} guest${Number(data.guests) === 1 ? '' : 's'}` },
    data.email && { icon: Mail, label: data.email },
    data.phone && { icon: Phone, label: data.phone },
    data.specialRequests && { icon: MessageSquare, label: data.specialRequests },
  ].filter(Boolean)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="max-w-[85%] overflow-hidden rounded-2xl border border-gold-200 bg-gradient-to-br from-gold-50 to-white shadow-soft dark:border-gold-400/20 dark:from-charcoal-800 dark:to-charcoal-800"
    >
      <div className="flex items-center justify-between gap-2 border-b border-gold-100 bg-gold-100/50 px-4 py-2.5 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-2">
          <CalendarCheck size={15} className="text-gold-600 dark:text-gold-300" />
          <span className="text-xs font-semibold uppercase tracking-wide text-gold-700 dark:text-gold-300">
            Reservation Confirmed
          </span>
        </div>
        <span className="text-[11px] font-medium text-gold-600/80 dark:text-gold-300/70">{confirmationCode}</span>
      </div>

      <div className="flex flex-col gap-2.5 px-4 py-3.5">
        <p className="font-display text-base text-charcoal dark:text-cream-100">{data.name}</p>
        {rows.map((row, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-charcoal-600 dark:text-cream-100/75">
            <row.icon size={13} className="shrink-0 text-gold-500" />
            <span>{row.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
