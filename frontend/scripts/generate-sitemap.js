/**
 * Generates public/sitemap.xml at build time by fetching all published
 * slugs from the API. Run before `vite build`.
 *
 * Requires API_URL env var (or falls back to VITE_API_URL).
 */
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir   = dirname(fileURLToPath(import.meta.url))
const SITE    = process.env.VITE_SITE_URL   || 'https://attractionsnepal.com'
const API_URL = process.env.VITE_API_URL    || 'http://localhost:3000/api'

async function fetchSlugs(path) {
  try {
    const res = await fetch(`${API_URL}${path}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.json()
  } catch (e) {
    console.warn(`  Warning: could not fetch ${path}: ${e.message}`)
    return []
  }
}

function url(loc, lastmod, priority = '0.7', freq = 'weekly') {
  return `  <url>
    <loc>${SITE}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

const today = new Date().toISOString().split('T')[0]

console.log(`Generating sitemap (API: ${API_URL}) …`)

const [places, blogs, stories, itineraries] = await Promise.all([
  fetchSlugs('/places?limit=500&published=true'),
  fetchSlugs('/blogs?limit=500&published=true'),
  fetchSlugs('/stories?limit=500'),
  fetchSlugs('/itineraries?limit=500'),
])

const placeList     = places.places          ?? places      ?? []
const blogList      = blogs.blogs            ?? blogs       ?? []
const storyList     = stories.stories        ?? stories     ?? []
const itineraryList = itineraries.itineraries ?? itineraries ?? []

console.log(`  Places: ${placeList.length}, Blogs: ${blogList.length}, Stories: ${storyList.length}, Itineraries: ${itineraryList.length}`)

const staticPages = [
  '/itineraries',
  '/plan-my-trip',
  '/visit-nepal',
  '/nepal-trekking-guide',
  '/best-time-to-visit-nepal',
  '/nepal-visa-guide',
  '/nepal-travel-cost',
  '/kathmandu-to-pokhara',
  '/nepal-packing-list',
  '/contact',
  '/category/temple',
  '/category/monastery',
  '/category/stupa',
  '/category/durbar-palace',
  '/category/trek-route',
  '/category/national-park',
  '/category/waterfall',
  '/category/lake',
  '/category/adventure-sports',
  '/category/hill-viewpoint',
  '/category/mountain-view',
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${url('/', today, '1.0', 'daily')}
${staticPages.map((p) => url(p, today, '0.9', 'weekly')).join('\n')}
${url('/explore', today, '0.9', 'daily')}
${url('/blog', today, '0.8', 'weekly')}
${url('/stories', today, '0.8', 'weekly')}
${placeList.map((p) => url(`/places/${p.slug}`, (p.updatedAt ?? today).split('T')[0], '0.8')).join('\n')}
${blogList.map((b)  => url(`/blog/${b.slug}`,   (b.updatedAt  ?? today).split('T')[0], '0.7')).join('\n')}
${storyList.map((s)     => url(`/stories/${s.slug}`,      (s.updatedAt ?? today).split('T')[0], '0.7')).join('\n')}
${itineraryList.map((i) => url(`/itineraries/${i.slug}`, (i.updatedAt ?? today).split('T')[0], '0.8')).join('\n')}
</urlset>`

const outPath = join(__dir, '../public/sitemap.xml')
writeFileSync(outPath, xml, 'utf-8')
console.log(`  Saved: ${outPath}`)
console.log(`  Total URLs: ${4 + staticPages.length + placeList.length + blogList.length + storyList.length + itineraryList.length}`)
