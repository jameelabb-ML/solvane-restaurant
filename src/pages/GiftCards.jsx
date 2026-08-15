import { useState } from 'react'
import Seo from '../components/common/Seo.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import FadeIn from '../components/ui/FadeIn.jsx'
import GiftCardOption from '../components/giftcards/GiftCardOption.jsx'
import PurchaseModal from '../components/giftcards/PurchaseModal.jsx'
import FaqAccordion from '../components/common/FaqAccordion.jsx'
import { giftCardOptions, giftCardFaqs } from '../data/giftcards.js'

export default function GiftCards() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <Seo
        title="Gavekort"
        description="Gi bort Solvane — nordiske fine dining-gavekort for enhver anledning."
      />

      <section className="section-padding bg-charcoal-900">
        <div className="container-page flex flex-col items-center gap-4 text-center">
          <span className="eyebrow">Gavekort</span>
          <h1 className="heading-xl text-cream-100 text-balance">Gi bort en Solvane-opplevelse</h1>
          <p className="max-w-xl text-cream-100/75">
            Enten det er et første besøk eller en retur til et favorittbord, er et Solvane-gavekort en invitasjon
            til å senke skuldrene og smake på sesongen.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream-200 dark:bg-charcoal-900">
        <div className="container-page">
          <SectionHeading eyebrow="Velg et beløp" title="Gavekortalternativer" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {giftCardOptions.map((option, i) => (
              <GiftCardOption
                key={option.id}
                option={option}
                index={i}
                onSelect={setSelected}
                selected={selected?.id === option.id}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-stone-100 dark:bg-charcoal-800">
        <div className="container-page mx-auto max-w-2xl">
          <FadeIn className="mb-10 flex flex-col items-center gap-3 text-center">
            <span className="eyebrow">Godt å vite</span>
            <h2 className="heading-md text-charcoal dark:text-cream-100">Ofte stilte spørsmål om gavekort</h2>
          </FadeIn>
          <FaqAccordion items={giftCardFaqs} />
        </div>
      </section>

      <PurchaseModal option={selected} onClose={() => setSelected(null)} />
    </>
  )
}
