import { Star, Quote } from 'lucide-react'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="card-surface flex h-full flex-col gap-5 p-7">
      <Quote size={22} className="text-gold-400" />
      <p className="flex-1 text-sm leading-relaxed text-charcoal-600 dark:text-cream-100/80">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 border-t border-stone-100 pt-5 dark:border-white/10">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-11 w-11 rounded-full border border-stone-200 object-cover dark:border-white/10"
          loading="lazy"
        />
        <div>
          <p className="text-sm font-semibold text-charcoal dark:text-cream-100">{testimonial.name}</p>
          <p className="text-xs text-charcoal-400 dark:text-cream-100/50">{testimonial.role}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={13} className="fill-gold-400 text-gold-400" />
          ))}
        </div>
      </div>
    </div>
  )
}
