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
          eyebrow="Gallery"
          title="A quiet room, thoughtfully lit"
          description="A glimpse inside Solvane — our dining room, our dishes, and the hands that make them."
        />

        <div className="mt-14">
          <GalleryGrid images={preview} />
        </div>

        <div className="mt-4 flex justify-center">
          <Button to="/gallery" variant="outline" size="lg">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}
