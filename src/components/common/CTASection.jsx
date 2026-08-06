import { motion } from 'framer-motion'
import Button from '../ui/Button.jsx'

export default function CTASection({ eyebrow, title, description, image, ctaLabel, ctaTo, reverse = false, secondary }) {
  return (
    <section className="relative overflow-hidden">
      <div className={`grid grid-cols-1 lg:grid-cols-2 ${reverse ? 'lg:[direction:rtl]' : ''}`}>
        <div className="relative min-h-[340px] lg:min-h-[440px] [direction:ltr]">
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 to-transparent lg:bg-gradient-to-r" />
        </div>

        <div className="flex items-center bg-charcoal-900 px-8 py-16 sm:px-14 lg:px-16 [direction:ltr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex max-w-md flex-col gap-4"
          >
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="heading-md text-cream-100 text-balance">{title}</h2>
            <p className="text-sm sm:text-base leading-relaxed text-cream-100/70">{description}</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Button to={ctaTo} variant="gold">
                {ctaLabel}
              </Button>
              {secondary && (
                <Button to={secondary.to} variant="outline" className="border-cream-100/30 text-cream-100 hover:bg-white/10">
                  {secondary.label}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
