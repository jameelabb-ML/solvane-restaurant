// Minimal, dependency-free markdown renderer for chat messages.
// Supports: **bold**, *italic*, `code`, [links](url), bullet/numbered lists, paragraphs.
// Builds React elements directly (no dangerouslySetInnerHTML) to avoid any injection risk.

import { createElement as h, Fragment } from 'react'

const INLINE_PATTERN = /(\*\*(.+?)\*\*|`([^`]+)`|\*(?!\*)([^*]+?)\*|\[([^\]]+)\]\(([^)]+)\))/

function parseInline(text, keyPrefix) {
  const nodes = []
  let remaining = text
  let key = 0

  while (remaining) {
    const match = remaining.match(INLINE_PATTERN)
    if (!match) {
      nodes.push(remaining)
      break
    }
    const idx = match.index
    if (idx > 0) nodes.push(remaining.slice(0, idx))

    if (match[2] !== undefined) {
      nodes.push(h('strong', { key: `${keyPrefix}-${key++}`, className: 'font-semibold' }, match[2]))
    } else if (match[3] !== undefined) {
      nodes.push(
        h(
          'code',
          {
            key: `${keyPrefix}-${key++}`,
            className: 'rounded bg-stone-100 px-1.5 py-0.5 text-[0.85em] dark:bg-white/10',
          },
          match[3]
        )
      )
    } else if (match[4] !== undefined) {
      nodes.push(h('em', { key: `${keyPrefix}-${key++}` }, match[4]))
    } else if (match[5] !== undefined) {
      nodes.push(
        h(
          'a',
          {
            key: `${keyPrefix}-${key++}`,
            href: match[6],
            target: '_blank',
            rel: 'noreferrer',
            className: 'text-gold-600 underline underline-offset-2 dark:text-gold-300',
          },
          match[5]
        )
      )
    }
    remaining = remaining.slice(idx + match[0].length)
  }

  return nodes
}

export function renderMarkdown(text) {
  if (!text) return null
  const blocks = text.trim().split(/\n{2,}/)

  const elements = blocks.map((block, bi) => {
    const lines = block.split('\n').filter((l) => l.trim().length > 0)
    const isBulletList = lines.length > 0 && lines.every((l) => /^\s*[-*]\s+/.test(l))
    const isNumberedList = lines.length > 0 && lines.every((l) => /^\s*\d+\.\s+/.test(l))

    if (isBulletList) {
      return h(
        'ul',
        { key: `b-${bi}`, className: 'my-1.5 list-disc space-y-1 pl-5' },
        lines.map((l, li) =>
          h('li', { key: li }, parseInline(l.replace(/^\s*[-*]\s+/, ''), `b-${bi}-${li}`))
        )
      )
    }

    if (isNumberedList) {
      return h(
        'ol',
        { key: `b-${bi}`, className: 'my-1.5 list-decimal space-y-1 pl-5' },
        lines.map((l, li) =>
          h('li', { key: li }, parseInline(l.replace(/^\s*\d+\.\s+/, ''), `b-${bi}-${li}`))
        )
      )
    }

    const paraNodes = []
    lines.forEach((l, li) => {
      if (li > 0) paraNodes.push(h('br', { key: `br-${li}` }))
      paraNodes.push(...parseInline(l, `p-${bi}-${li}`))
    })

    return h('p', { key: `b-${bi}`, className: bi > 0 ? 'mt-2' : '' }, paraNodes)
  })

  return h(Fragment, null, ...elements)
}

export default renderMarkdown
