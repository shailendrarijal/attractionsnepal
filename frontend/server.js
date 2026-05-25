/**
 * Thin Express server that wraps the static Vite build.
 *
 * For regular visitors  → serves the React SPA as-is.
 * For social/SEO bots   → intercepts /place/:slug, fetches real place data
 *   from the API and returns a server-rendered HTML shell with correct
 *   <title>, <meta description>, OG tags, and JSON-LD structured data.
 *   The bot sees real content; real users still get the full React app.
 */

import express   from 'express'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath }  from 'url'

const __dir  = dirname(fileURLToPath(import.meta.url))
const app    = express()
const PORT   = process.env.PORT || 4000
const DIST   = resolve(__dir, 'dist')
const API    = process.env.VITE_API_URL ?? 'https://attractionsnepal.onrender.com'
const SITE   = 'https://www.attractionsnepal.com'

// ── Bot detection ─────────────────────────────────────────────────────────────

const BOT_UA = [
  'facebookexternalhit', 'facebot',
  'twitterbot',
  'pinterest',
  'linkedinbot',
  'whatsapp',
  'telegrambot',
  'slackbot',
  'discordbot',
  'googlebot', 'google-structured-data-testing-tool',
  'bingbot',
  'applebot',
  'semrushbot', 'ahrefsbot', 'mj12bot',
]

function isBot(req) {
  const ua = (req.headers['user-agent'] ?? '').toLowerCase()
  return BOT_UA.some(b => ua.includes(b))
}

// ── Escape helper ─────────────────────────────────────────────────────────────

function esc(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

// ── Build a pre-rendered HTML shell for a place ───────────────────────────────

function buildPlaceHtml(place) {
  const title       = esc(place.seoTitle ?? place.name)
  const siteName    = 'AttractionsNepal'
  const fullTitle   = `${title} — ${siteName}`
  const description = esc(place.seoDescription ?? place.summary ?? `Explore ${place.name} in Nepal.`)
  const image       = esc(place.heroImage ?? `${SITE}/og-default.jpg`)
  const canonical   = `${SITE}/place/${place.slug}`
  const category    = (place.category ?? 'Tourist Attraction')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type':    'TouristAttraction',
    name:        place.name,
    description: place.seoDescription ?? place.summary,
    image:       place.heroImage,
    url:         canonical,
    address: {
      '@type':           'PostalAddress',
      addressCountry:    'NP',
      addressRegion:     place.province ?? '',
      addressLocality:   place.district ?? '',
    },
    ...(place.lat && place.lng ? {
      geo: {
        '@type':     'GeoCoordinates',
        latitude:    place.lat,
        longitude:   place.lng,
      },
    } : {}),
  })

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${fullTitle}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonical}" />

  <!-- Open Graph -->
  <meta property="og:type"        content="place" />
  <meta property="og:site_name"   content="${siteName}" />
  <meta property="og:title"       content="${fullTitle}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image"       content="${image}" />
  <meta property="og:image:width"  content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url"         content="${canonical}" />

  <!-- Twitter Card -->
  <meta name="twitter:card"        content="summary_large_image" />
  <meta name="twitter:title"       content="${fullTitle}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image"       content="${image}" />

  <!-- JSON-LD structured data -->
  <script type="application/ld+json">${jsonLd}</script>
</head>
<body>
  <h1>${esc(place.name)}</h1>
  <p>${description}</p>
  <p>Category: ${esc(category)}</p>
  ${place.district ? `<p>Location: ${esc(place.district)}, Nepal</p>` : ''}
  <a href="${canonical}">View full details →</a>
</body>
</html>`
}

// ── Place page middleware ─────────────────────────────────────────────────────

app.get('/places/:slug', async (req, res, next) => {
  if (!isBot(req)) return next()   // real user → serve React app

  const { slug } = req.params
  try {
    const apiRes = await fetch(`${API}/api/places/${slug}`)
    if (!apiRes.ok) return next()   // unknown slug → fall through

    const place = await apiRes.json()
    res.setHeader('Cache-Control', 'public, max-age=3600')  // cache 1 hour
    res.send(buildPlaceHtml(place))
  } catch {
    next()   // API down → fall through to React SPA
  }
})

// ── Serve static Vite build ───────────────────────────────────────────────────

app.use(express.static(DIST))

// SPA fallback — all unknown paths return index.html so React Router works
app.get('*', (_req, res) => {
  res.sendFile(resolve(DIST, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`AttractionsNepal frontend server running on port ${PORT}`)
})
