/**
 * imageUrl — transforms Supabase Storage URLs to use image resizing.
 *
 * Supabase Storage supports on-the-fly image transformation via the
 * /render/image/public/ path (requires Pro plan or above).
 * Falls back to the original URL on free plan (transformation returns 400).
 *
 * Usage:
 *   imageUrl(place.heroImage, { width: 800, quality: 75 })
 *
 * Unsplash images also support sizing via URL params (?w=800&q=75).
 */

const SUPABASE_STORAGE_RE = /^(https:\/\/[^/]+\.supabase\.co)\/storage\/v1\/object\/public\/(.+)$/

export function imageUrl(src, { width = 800, quality = 75 } = {}) {
  if (!src) return src

  // Supabase Storage → use render/image endpoint for automatic WebP + resize
  const supabaseMatch = src.match(SUPABASE_STORAGE_RE)
  if (supabaseMatch) {
    const [, base, path] = supabaseMatch
    return `${base}/storage/v1/render/image/public/${path}?width=${width}&quality=${quality}&resize=contain`
  }

  // Unsplash → they support ?w= and ?q= params directly
  if (src.includes('images.unsplash.com')) {
    const url = new URL(src)
    url.searchParams.set('w', String(width))
    url.searchParams.set('q', String(quality))
    url.searchParams.set('fm', 'webp')
    url.searchParams.set('auto', 'compress')
    return url.toString()
  }

  return src
}

/**
 * Generates a srcSet string for responsive images.
 * Pass the Supabase/Unsplash URL and the desired widths.
 */
export function imageSrcSet(src, widths = [400, 800, 1200]) {
  if (!src) return ''
  return widths
    .map((w) => `${imageUrl(src, { width: w, quality: 75 })} ${w}w`)
    .join(', ')
}
