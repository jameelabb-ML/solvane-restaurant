import Seo from '../components/common/Seo.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import FadeIn from '../components/ui/FadeIn.jsx'
import OptimizedImage from '../components/ui/OptimizedImage.jsx'
import ChefIntro from '../components/common/ChefIntro.jsx'
import Timeline from '../components/common/Timeline.jsx'
import Button from '../components/ui/Button.jsx'
import restaurant from '../data/restaurant.js'
import img from '../utils/images.js'

export default function About() {
  return (
    <>
      <Seo
        title="Om oss"
        description="Historien, oppdraget og bærekraftsverdiene bak Solvane — moderne nordisk fine dining i Oslo."
      />

      <section className="relative flex h-[50vh] min-h-[380px] items-center justify-center overflow-hidden">
        <img src={img.interiorWide} alt="Solvanes spisesal" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-900/40 to-charcoal-900/10" />
        <div className="container-page relative z-10 flex flex-col items-center gap-4 text-center">
          <span className="eyebrow">{restaurant.story.eyebrow}</span>
          <h1 className="heading-xl text-cream-100 text-balance">{restaurant.story.heading}</h1>
        </div>
      </section>

      <section className="section-padding bg-cream-200 dark:bg-charcoal-900">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="flex flex-col gap-5">
            {restaurant.story.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className="body-text">{p}</p>
            ))}
          </FadeIn>
          <FadeIn delay={0.1}>
            <OptimizedImage src={img.aboutHearth} alt="Det åpne ildstedskjøkkenet hos Solvane" aspect="aspect-[4/3]" className="rounded-3xl shadow-soft" />
          </FadeIn>
        </div>
      </section>

      <section className="bg-stone-100 py-16 dark:bg-charcoal-800 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-10 sm:grid-cols-2">
          <FadeIn className="card-surface flex flex-col gap-3 p-8">
            <h2 className="font-display text-2xl text-charcoal dark:text-cream-100">{restaurant.mission.heading}</h2>
            <p className="body-text">{restaurant.mission.text}</p>
          </FadeIn>
          <FadeIn delay={0.1} className="card-surface flex flex-col gap-3 p-8">
            <h2 className="font-display text-2xl text-charcoal dark:text-cream-100">{restaurant.vision.heading}</h2>
            <p className="body-text">{restaurant.vision.text}</p>
          </FadeIn>
        </div>
      </section>

      <ChefIntro />

      <section className="section-padding bg-cream-200 dark:bg-charcoal-900">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <OptimizedImage src={img.aboutIngredients} alt="Ferske lokale råvarer" aspect="aspect-[4/3]" className="rounded-3xl shadow-soft" />
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-col gap-5">
            <span className="eyebrow">{restaurant.sustainability.eyebrow}</span>
            <h2 className="heading-lg text-charcoal dark:text-cream-100 text-balance">
              {restaurant.sustainability.heading}
            </h2>
            <p className="body-text">{restaurant.sustainability.intro}</p>
            <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {restaurant.sustainability.pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-stone-200 p-5 dark:border-white/10">
                  <h3 className="font-display text-lg text-charcoal dark:text-cream-100">{pillar.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal-600 dark:text-cream-100/70">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-stone-100 dark:bg-charcoal-800">
        <div className="container-page">
          <SectionHeading eyebrow="Vår reise" title="Et tiår i vekst" />
          <div className="mx-auto mt-14 max-w-2xl">
            <Timeline items={restaurant.timeline} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-900">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="heading-md max-w-lg text-cream-100 text-balance">
            Kom og smak på historien selv
          </h2>
          <Button to="/reservations" variant="gold" size="lg">
            Reserver bord
          </Button>
        </div>
      </section>
    </>
  )
}
