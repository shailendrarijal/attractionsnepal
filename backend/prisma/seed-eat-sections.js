/**
 * Finds restaurants / cafés near every place in the DB using the
 * OpenStreetMap Overpass API (free, no key) and creates WHERE_TO_EAT
 * PlaceSections with Google Maps search deep-links.
 *
 * Run: node prisma/seed-eat-sections.js
 *
 * Skips places that already have a WHERE_TO_EAT section.
 * Skips places where Overpass returns < 2 named results (remote areas).
 */

import { PrismaClient } from '@prisma/client'
import { config }       from 'dotenv'
import { resolve, dirname } from 'path'
import { fileURLToPath }  from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
config({ path: resolve(__dir, '../.env') })

const prisma = new PrismaClient()

const OVERPASS = 'https://overpass-api.de/api/interpreter'
const RADIUS   = 700   // metres — wide enough for most tourist hubs
const MIN_RESULTS = 2  // skip place if fewer than this many named venues found

const UA = 'AttractionsNepal/1.0 (shailendrarijal@gmail.com)'

// ── Query Overpass ─────────────────────────────────────────────────────────────

async function nearbyFood(lat, lng) {
  // Fetch restaurants, cafés, and food stalls within RADIUS metres
  const query = `
[out:json][timeout:20];
(
  node["amenity"="restaurant"](around:${RADIUS},${lat},${lng});
  way["amenity"="restaurant"](around:${RADIUS},${lat},${lng});
  node["amenity"="cafe"](around:${RADIUS},${lat},${lng});
  way["amenity"="cafe"](around:${RADIUS},${lat},${lng});
);
out body;
  `.trim()

  const res = await fetch(OVERPASS, {
    method:  'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent':   UA,
    },
    body: 'data=' + encodeURIComponent(query),
  })

  if (!res.ok) throw new Error(`Overpass HTTP ${res.status}`)

  const json = await res.json()
  const elements = json.elements ?? []

  // Deduplicate by name (ways and nodes can overlap)
  const seen = new Set()
  const results = []

  for (const el of elements) {
    const name = el.tags?.name?.trim()
    if (!name || seen.has(name.toLowerCase())) continue
    seen.add(name.toLowerCase())

    const cuisine = el.tags?.cuisine
    const type    = el.tags?.amenity   // 'restaurant' | 'cafe'
    const lat_el  = el.lat ?? el.center?.lat
    const lng_el  = el.lon ?? el.center?.lon

    results.push({ name, cuisine, type, lat: lat_el, lng: lng_el })
  }

  // Sort: prefer entries with cuisine tag (more complete OSM records = more notable)
  results.sort((a, b) => (b.cuisine ? 1 : 0) - (a.cuisine ? 1 : 0))

  return results
}

// ── Build a Google Maps search URL ────────────────────────────────────────────

function mapsUrl(name, district) {
  const q = [name, district, 'Nepal'].filter(Boolean).join(' ')
  return `https://www.google.com/maps/search/${encodeURIComponent(q)}`
}

// ── Friendly label ─────────────────────────────────────────────────────────────

function cuisineLabel(r) {
  if (!r.cuisine) return r.type === 'cafe' ? 'Café' : 'Restaurant'
  // Capitalise first cuisine type (some entries have "nepali;indian")
  const first = r.cuisine.split(';')[0].trim()
  return first.charAt(0).toUpperCase() + first.slice(1)
}

// ── Main ───────────────────────────────────────────────────────────────────────

async function main() {
  // Load all places
  const places = await prisma.place.findMany({
    select: { id: true, slug: true, name: true, lat: true, lng: true, district: true },
    orderBy: { name: 'asc' },
  })

  // Load slugs that already have WHERE_TO_EAT sections
  const existing = await prisma.placeSection.findMany({
    where:  { type: 'WHERE_TO_EAT' },
    select: { placeId: true },
  })
  const existingIds = new Set(existing.map(s => s.placeId))

  console.log(`\nProcessing ${places.length} places (${existingIds.size} already have WHERE_TO_EAT)...\n`)

  let created = 0, skippedRemote = 0, skippedExisting = 0, errors = 0

  for (const place of places) {
    if (existingIds.has(place.id)) {
      skippedExisting++
      continue
    }

    process.stdout.write(`▸ ${place.name} … `)

    try {
      const venues = await nearbyFood(place.lat, place.lng)

      if (venues.length < MIN_RESULTS) {
        console.log(`⚠️  only ${venues.length} result(s) — skip`)
        skippedRemote++
        await sleep(1200)
        continue
      }

      // Take up to 5 best results
      const top = venues.slice(0, 5)

      const links = top.map(r => ({
        label: r.name,
        url:   mapsUrl(r.name, place.district),
        type:  'info',
        note:  cuisineLabel(r),
      }))

      await prisma.placeSection.create({
        data: {
          placeId: place.id,
          type:    'WHERE_TO_EAT',
          title:   `Where to Eat near ${place.name}`,
          content: `Top-rated dining spots close to ${place.name}. From local dal-bhat joints to popular cafés — here are the best places to refuel.`,
          links:   links,
          order:   10,
        },
      })

      console.log(`✅  ${top.length} venues added`)
      created++

    } catch (err) {
      console.log(`❌  ${err.message}`)
      errors++
    }

    // Polite delay — Overpass asks for 2 s between requests
    await sleep(2000)
  }

  console.log('\n──────────────────────────────────────────')
  console.log(`  Sections created  : ${created}`)
  console.log(`  Skipped (remote)  : ${skippedRemote}`)
  console.log(`  Skipped (existing): ${skippedExisting}`)
  console.log(`  Errors            : ${errors}`)
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
