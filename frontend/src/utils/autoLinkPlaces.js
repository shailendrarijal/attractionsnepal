/**
 * Preprocesses story Markdown to turn the first occurrence of each related
 * place name into an internal link — e.g. "Muktinath" → [Muktinath](/places/muktinath-temple).
 *
 * Rules:
 *  - Only the FIRST occurrence of each name is linked (avoids spammy repetition).
 *  - Names already inside a Markdown link [...](...) are never double-linked.
 *  - Matching is case-insensitive; the original casing is preserved in the link text.
 *  - Common suffixes (temple, mandir, stupa, …) are stripped when deriving the
 *    display name from the slug, so "muktinath-temple" → "Muktinath".
 */

const STRIP_SUFFIXES = [
  'temple', 'mandir', 'stupa', 'monastery', 'gompa', 'lake', 'park',
  'valley', 'kund', 'dham', 'shrine', 'complex',
]

function slugToDisplayName(slug) {
  let name = slug.replace(/-/g, ' ')
  for (const suffix of STRIP_SUFFIXES) {
    name = name.replace(new RegExp(`\\s+${suffix}\\s*$`, 'i'), '')
  }
  return name.replace(/\b\w/g, (c) => c.toUpperCase()).trim()
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * @param {string}   content            – Raw Markdown string
 * @param {string[]} relatedPlaceSlugs  – e.g. ['muktinath-temple', 'gosaikunda']
 * @returns {string} Markdown with first-occurrence place links injected
 */
export function autoLinkPlaces(content, relatedPlaceSlugs) {
  if (!content || !relatedPlaceSlugs?.length) return content

  let result = content

  for (const slug of relatedPlaceSlugs) {
    const name = slugToDisplayName(slug)
    if (!name) continue

    const escaped = escapeRegex(name)
    // Negative lookbehind: not already inside [...]
    // Negative lookahead:  not immediately followed by ](...)
    const regex = new RegExp(`(?<!\\[|/)\\b(${escaped})\\b(?!\\]|\\()`, 'i')
    result = result.replace(regex, `[$1](/places/${slug})`)
  }

  return result
}
