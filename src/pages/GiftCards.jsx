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
        title="Gift Cards"
        description="Give the gift of Solvane — Nordic fine dining gift cards for any occasion."
      />

      <section className="section-padding bg-charcoal-900">
        <div className="container-page flex flex-col items-center gap-4 text-center">
          <span className="eyebrow">Gift Cards</span>
          <h1 className="heading-xl text-cream-100 text-balance">Give the Gift of Solvane</h1>
          <p className="max-w-xl text-cream-100/75">
            Whether it&apos;s a first visit or a return to a favorite table, a Solvane gift card is an invitation to
            slow down and taste the season.
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream-200 dark:bg-charcoal-900">
        <div className="container-page">
          <SectionHeading eyebrow="Choose an Amount" title="Gift card options" />
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
            <span className="eyebrow">Good to Know</span>
            <h2 className="heading-md text-charcoal dark:text-cream-100">Gift Card FAQ</h2>
          </FadeIn>
          <FaqAccordion items={giftCardFaqs} />
        </div>
      </section>

      <PurchaseModal option={selected} onClose={() => setSelected(null)} />
    </>
  )
}
