import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'
import GalleryGrid from './GalleryGrid.jsx'
import galleryImages from '../../data/gallery.js'

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 6)

  return (
    <section className="section-padding bg-cream-200 dark:bg-charcoal-900">
      <div className="container-page">
        <SectionHeading
          eyebrow="Galleri"
          title="Et stille rom, gjennomtenkt belyst"
          description="Et innblikk i Solvane — spisesalen vår, rettene våre, og hendene som lager dem."
        />

        <div className="mt-14">
          <GalleryGrid images={preview} />
        </div>

        <div className="mt-4 flex justify-center">
          <Button to="/gallery" variant="outline" size="lg">
            Se hele galleriet
          </Button>
        </div>
      </div>
    </section>
  )
}
