import { useState } from 'react'
import Seo from '../components/common/Seo.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import GalleryGrid from '../components/gallery/GalleryGrid.jsx'
import { galleryCategories, galleryImages } from '../data/gallery.js'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered =
    activeCategory === 'all' ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <>
      <Seo title="Galleri" description="En visuell rundtur hos Solvane — spisesal, retter, team og private arrangementer." />

      <section className="section-padding bg-cream-200 dark:bg-charcoal-900">
        <div className="container-page">
          <SectionHeading
            eyebrow="Galleri"
            title="En visuell rundtur hos Solvane"
            description="Fra det åpne ildstedskjøkkenet til kveldens siste rett — et innblikk i vår verden."
          />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-charcoal text-cream-100 dark:bg-gold-400 dark:text-charcoal-900'
                    : 'bg-stone-100 text-charcoal-600 hover:bg-stone-200 dark:bg-white/10 dark:text-cream-100/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="mt-14">
            <GalleryGrid images={filtered} />
          </div>
        </div>
      </section>
    </>
  )
}
