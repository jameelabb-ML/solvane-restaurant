import FadeIn from '../ui/FadeIn.jsx'
import Newsletter from './Newsletter.jsx'

export default function NewsletterSection() {
  return (
    <section className="section-padding bg-gold-50 dark:bg-charcoal-800">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <FadeIn className="flex flex-col items-center gap-4">
          <span className="eyebrow">Stay in Touch</span>
          <h2 className="heading-md max-w-xl text-charcoal dark:text-cream-100 text-balance">
            Seasonal menus, private tastings, and a table when we have one
          </h2>
          <p className="max-w-md text-sm sm:text-base text-charcoal-600 dark:text-cream-100/70">
            Join our list for quiet invitations to new tasting menus and seasonal events. No noise, just the good stuff.
          </p>
        </FadeIn>
        <Newsletter />
      </div>
    </section>
  )
}
