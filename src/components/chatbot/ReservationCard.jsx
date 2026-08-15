import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CalendarCheck, Users, User, ArrowRight } from 'lucide-react'

export default function ReservationCard({ data, onNavigate }) {
  if (!data) return null

  const rows = [
    { icon: CalendarCheck, label: `${data.date} · kl. ${data.time}` },
    { icon: Users, label: `${data.guests} ${Number(data.guests) === 1 ? 'gjest' : 'gjester'}` },
    data.name && { icon: User, label: data.name },
  ].filter(Boolean)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="max-w-[85%] overflow-hidden rounded-2xl border border-gold-200 bg-gradient-to-br from-gold-50 to-white shadow-soft dark:border-gold-400/20 dark:from-charcoal-800 dark:to-charcoal-800"
    >
      <div className="flex items-center gap-2 border-b border-gold-100 bg-gold-100/50 px-4 py-2.5 dark:border-white/10 dark:bg-white/5">
        <CalendarCheck size={15} className="text-gold-600 dark:text-gold-300" />
        <span className="text-xs font-semibold uppercase tracking-wide text-gold-700 dark:text-gold-300">
          Ditt bestillingsønske
        </span>
      </div>

      <div className="flex flex-col gap-2.5 px-4 py-3.5">
        {rows.map((row, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-charcoal-600 dark:text-cream-100/75">
            <row.icon size={13} className="shrink-0 text-gold-500" />
            <span>{row.label}</span>
          </div>
        ))}

        <Link
          to="/reservations"
          onClick={onNavigate}
          className="mt-1.5 flex items-center justify-center gap-1.5 rounded-full bg-charcoal-900 px-4 py-2.5 text-sm font-medium text-cream-100 transition-transform hover:scale-[1.02] dark:bg-gold-400 dark:text-charcoal-900"
        >
          Fullfør bestilling <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  )
}
