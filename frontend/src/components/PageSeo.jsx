import { Helmet } from 'react-helmet-async'

const SITE      = import.meta.env.VITE_SITE_URL ?? 'https://attractionsnepal.com'
const SITE_NAME = 'AttractionsNepal'

// Default share image — shown when a page has no hero image
const DEFAULT_OG_IMAGE = `${SITE}/cover_image.png`

export default function PageSeo({
  title,
  description,
  image,
  canonicalPath,
  type = 'website',
}) {
  const fullTitle = title
    ? `${title} — ${SITE_NAME}`
    : `${SITE_NAME} — Discover Nepal's Best Places`
  const canonical  = canonicalPath ? `${SITE}${canonicalPath}` : SITE
  const ogImage    = image || DEFAULT_OG_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />

      {/* ── Open Graph ───────────────────────────────────────────────── */}
      <meta property="og:title"       content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image"       content={ogImage} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url"         content={canonical} />
      <meta property="og:type"        content={type} />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:locale"      content="en_US" />

      {/* ── Twitter / X card ─────────────────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image"       content={ogImage} />
      <meta name="twitter:site"        content="@AttractionsNPL" />

      {/* ── Pinterest rich pins ──────────────────────────────────────── */}
      {/* article type activates Pinterest Article Rich Pins */}
      {type === 'article' && (
        <meta property="article:publisher" content="https://www.pinterest.com/attractionsnepal" />
      )}
    </Helmet>
  )
}
