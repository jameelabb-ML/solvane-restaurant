import FadeIn from '../ui/FadeIn.jsx'
import Newsletter from './Newsletter.jsx'

export default function NewsletterSection() {
  return (
    <section className="section-padding bg-gold-50 dark:bg-charcoal-800">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <FadeIn className="flex flex-col items-center gap-4">
          <span className="eyebrow">Hold deg oppdatert</span>
          <h2 className="heading-md max-w-xl text-charcoal dark:text-cream-100 text-balance">
            Sesongmenyer, private smakinger, og et bord når vi har ett ledig
          </h2>
          <p className="max-w-md text-sm sm:text-base text-charcoal-600 dark:text-cream-100/70">
            Meld deg på listen vår for stillferdige invitasjoner til nye smaksmenyer og sesongarrangementer. Ikke noe mas, bare det gode.
          </p>
        </FadeIn>
        <Newsletter />
      </div>
    </section>
  )
}
