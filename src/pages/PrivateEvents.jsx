import Seo from '../components/common/Seo.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import FadeIn from '../components/ui/FadeIn.jsx'
import EventCard from '../components/events/EventCard.jsx'
import InquiryForm from '../components/events/InquiryForm.jsx'
import FaqAccordion from '../components/common/FaqAccordion.jsx'
import { eventTypes, eventFaqs } from '../data/events.js'
import img from '../utils/images.js'

export default function PrivateEvents() {
  return (
    <>
      <Seo
        title="Private arrangementer"
        description="Arranger din neste feiring, bedriftsmiddag eller bryllupsmottakelse i Solvanes private spisesal."
      />

      <section className="relative flex h-[50vh] min-h-[380px] items-center justify-center overflow-hidden">
        <img src={img.eventSetup} alt="Oppdekking til privat middag hos Solvane" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-900/40 to-charcoal-900/10" />
        <div className="container-page relative z-10 flex flex-col items-center gap-4 text-center">
          <span className="eyebrow">Private arrangementer</span>
          <h1 className="heading-xl text-cream-100 text-balance">Samles rundt vårt bord</h1>
          <p className="max-w-xl text-cream-100/80">
            Fra intime middager til hele restauranten for dere selv — arrangementteamet vårt designer opplevelser
            like gjennomtenkte som menyen.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream-200 dark:bg-charcoal-900">
        <div className="container-page">
          <SectionHeading eyebrow="Typer arrangementer" title="Rom for enhver anledning" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eventTypes.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-stone-100 dark:bg-charcoal-800">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="flex flex-col gap-5">
            <span className="eyebrow">Start planleggingen</span>
            <h2 className="heading-lg text-charcoal dark:text-cream-100 text-balance">
              Fortell oss om arrangementet ditt
            </h2>
            <p className="body-text">
              Del noen detaljer, så følger arrangementteamet vårt opp med ledig kapasitet, menyvalg og priser
              tilpasset feiringen din.
            </p>
            <div className="mt-4">
              <FaqAccordion items={eventFaqs} />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="card-surface p-6 sm:p-10">
            <InquiryForm />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
