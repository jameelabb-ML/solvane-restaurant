import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`flex flex-col ${alignment} max-w-2xl ${align === 'center' ? 'mx-auto' : ''} gap-4`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && (
        <h2 className={`heading-lg text-balance ${light ? 'text-cream-100' : 'text-charcoal dark:text-cream-100'}`}>
          {title}
        </h2>
      )}
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-cream-100/80' : 'text-charcoal-600 dark:text-cream-100/70'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
