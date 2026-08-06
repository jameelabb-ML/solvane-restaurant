import { useEffect } from 'react'

const setMeta = (name, content, attr = 'name') => {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function Seo({ title, description, image }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Solvane` : 'Solvane — Modern Nordic Fine Dining'
    document.title = fullTitle
    setMeta('description', description)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    if (image) setMeta('og:image', image, 'property')
  }, [title, description, image])

  return null
}
