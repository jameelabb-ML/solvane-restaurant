import { motion } from 'framer-motion'

export default function Timeline({ items }) {
  return (
    <div className="relative flex flex-col gap-10 pl-8 sm:pl-10">
      <div className="absolute bottom-2 left-[7px] top-2 w-px bg-stone-200 dark:bg-white/10 sm:left-[11px]" />
      {items.map((item, i) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
          className="relative"
        >
          <span className="absolute -left-8 top-1 h-3.5 w-3.5 rounded-full border-2 border-gold-400 bg-cream-200 dark:bg-charcoal-900 sm:-left-10" />
          <span className="text-sm font-semibold uppercase tracking-widest2 text-gold-600 dark:text-gold-300">
            {item.year}
          </span>
          <h3 className="mt-1 font-display text-xl text-charcoal dark:text-cream-100">{item.title}</h3>
          <p className="mt-1 max-w-lg text-sm leading-relaxed text-charcoal-600 dark:text-cream-100/70">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
