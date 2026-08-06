import { useState } from 'react'
import { motion } from 'framer-motion'
import { Expand } from 'lucide-react'
import Lightbox from './Lightbox.jsx'

export default function GalleryGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null)

  const navigate = (dir) => {
    setActiveIndex((prev) => {
      if (prev === null) return prev
      const next = (prev + dir + images.length) % images.length
      return next
    })
  }

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
        {images.map((image, i) => (
          <motion.button
            type="button"
            key={image.id}
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
            className="group relative mb-5 block w-full overflow-hidden rounded-2xl break-inside-avoid text-left shadow-soft"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex items-center gap-2 text-sm font-medium text-cream-100">
                <Expand size={14} /> {image.caption}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={images}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={navigate}
      />
    </>
  )
}
