import { motion } from 'framer-motion'

export default function FadeIn({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  className = '',
  once = true,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
