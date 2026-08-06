import { useState } from 'react'

export default function OptimizedImage({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  eager = false,
  aspect = 'aspect-[4/5]',
  ...props
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${aspect} ${className}`}>
      <div
        className={`absolute inset-0 bg-stone-200 dark:bg-charcoal-700 transition-opacity duration-700 ${
          loaded ? 'opacity-0' : 'opacity-100 animate-pulse'
        }`}
      />
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-700 ease-out ${
          loaded ? 'scale-100 opacity-100 blur-0' : 'scale-105 opacity-0 blur-md'
        } ${imgClassName}`}
        {...props}
      />
    </div>
  )
}
