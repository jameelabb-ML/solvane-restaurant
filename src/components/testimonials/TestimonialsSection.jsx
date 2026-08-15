import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading.jsx'
import TestimonialCard from './TestimonialCard.jsx'
import testimonials from '../../data/testimonials.js'

export default function TestimonialsSection() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir * 380, behavior: 'smooth' })
  }

  return (
    <section className="section-padding bg-stone-100 dark:bg-charcoal-800">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Gjestehistorier"
            title="Hva gjestene våre sier"
          />
          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Forrige anmeldelser"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:border-gold-400 hover:text-gold-500 dark:border-cream-100/20 dark:text-cream-100"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Neste anmeldelser"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:border-gold-400 hover:text-gold-500 dark:border-cream-100/20 dark:text-cream-100"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        >
          {testimonials.map((t) => (
            <div key={t.id} className="w-[85%] shrink-0 snap-start sm:w-[360px]">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
