import Seo from './Seo.jsx'
import FadeIn from '../ui/FadeIn.jsx'

export default function LegalPage({ title, updated, sections }) {
  return (
    <>
      <Seo title={title} description={`${title} for restauranten Solvane.`} />

      <section className="section-padding bg-cream-200 dark:bg-charcoal-900">
        <div className="container-page mx-auto max-w-3xl">
          <FadeIn className="mb-14 flex flex-col gap-3 text-center">
            <span className="eyebrow">Juridisk</span>
            <h1 className="heading-lg text-charcoal dark:text-cream-100">{title}</h1>
            <p className="text-sm text-charcoal-400 dark:text-cream-100/40">Sist oppdatert: {updated}</p>
          </FadeIn>

          <div className="flex flex-col gap-10">
            {sections.map((section, i) => (
              <FadeIn key={section.heading} delay={i * 0.04}>
                <h2 className="font-display text-xl text-charcoal dark:text-cream-100">{section.heading}</h2>
                <div className="mt-3 flex flex-col gap-3">
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)} className="body-text">
                      {p}
                    </p>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
