/**
 * Downloads hero images for the 17 new YouTube-sourced places from
 * Wikimedia Commons and uploads them to Supabase Storage, then
 * updates heroImage + images[] in the database.
 *
 * Run: node prisma/seed-youtube-place-images.js
 */
import { createClient } from '@supabase/supabase-js'
import { PrismaClient }  from '@prisma/client'
import { config }        from 'dotenv'
import { resolve, dirname } from 'path'
import { fileURLToPath }  from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
config({ path: resolve(__dir, '../.env') })

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
)
const prisma = new PrismaClient()

const BUCKET = 'places'
const WIKI   = 'https://commons.wikimedia.org/w/api.php'

// ── Search queries per slug (primary, fallback1, fallback2) ────────────────────
const QUERIES = {
  'bhairav-kunda-lake':            ['Bhairav Kunda lake Nepal Sindhupalchok', 'high altitude lake Nepal mountains', 'Nepal glacial alpine lake Himalaya'],
  'jugal-himal-base-camp':         ['Jugal Himal Nepal mountains', 'Nepal Himalaya trekking base camp Sindhupalchok', 'Nepal mountain peak snow glacier'],
  'tsho-rolpa-glacial-lake':       ['Tsho Rolpa glacial lake Nepal', 'Rolwaling valley Nepal', 'Nepal large glacial lake turquoise Himalaya'],
  'panchakunda-lake-annapurna-north': ['Annapurna north base camp Nepal', 'Myagdi Nepal Annapurna mountains', 'Annapurna massif Nepal north face'],
  'ruby-valley-trek':              ['Ruby Valley Nepal trek Dhading', 'Ganesh Himal Nepal mountains trek', 'Nepal mountain village rhododendron forest'],
  'khumai-danda':                  ['Machhapuchhre Nepal Fishtail mountain Kaski', 'Pokhara Nepal mountain view trek', 'Annapurna Kaski Nepal viewpoint ridge'],
  'badimalika-temple':             ['Bajura Nepal mountains Far West', 'Nepal far west remote mountain temple', 'Api Saipal peaks Nepal Sudurpashchim'],
  'mai-pokhari-ilam':              ['Mai Pokhari Ilam Nepal lake', 'Ilam Nepal tea garden hills', 'Nepal eastern hills forest lake rhododendron'],
  'nar-phu-valley':                ['Nar Phu valley Nepal Manang Tibet', 'Phu village Nepal Himalaya remote', 'Manang Nepal Himalayan village stone house'],
  'milarepa-cave-bhraka':          ['Bhraka Braga village Nepal Manang', 'Manang village Nepal monastery stone', 'Annapurna Circuit Nepal village Buddhist gompa'],
  'dona-lake-manang':              ['Manang Nepal lake mountain', 'Annapurna region Nepal alpine lake', 'Nepal high altitude lake Manang mountains'],
  'ice-lake-kicho-tal-manang':     ['Kicho Tal Ice lake Manang Nepal', 'Manang acclimatisation hike Nepal lake', 'Nepal alpine lake Annapurna Circuit frozen'],
  'tilachan-lake-rolpa':           ['Rolpa Nepal highlands mountains', 'Dhorpatan Nepal high altitude meadow', 'Nepal western hills remote lake'],
  'salpa-pokhari':                 ['Salpa Pokhari Nepal Bhojpur lake', 'Bhojpur Nepal mountain ridgeline lake', 'Nepal eastern hills Koshi trekking lake'],
  'sinja-valley':                  ['Sinja valley Jumla Nepal ruins', 'Jumla Nepal valley Karnali landscape', 'Karnali Nepal valley ancient ruins archaeology'],
  'ramaroshan-wetland':            ['Ramaroshan Achham Nepal wetland lake', 'Achham Nepal hills Far West', 'Nepal Sudurpashchim alpine meadow lakes'],
  'bukipatan-highland-meadow':     ['Dhorpatan Nepal highland meadow Baglung', 'Baglung Nepal Dhaulagiri mountains', 'Nepal western highland meadow yak herders'],
}

// ── Wikimedia helpers ──────────────────────────────────────────────────────────

async function wikimediaSearch(query) {
  const url = new URL(WIKI)
  url.searchParams.set('action',     'query')
  url.searchParams.set('generator',  'search')
  url.searchParams.set('gsrsearch',  query)
  url.searchParams.set('gsrnamespace', '6')
  url.searchParams.set('gsrlimit',   '8')
  url.searchParams.set('prop',       'imageinfo')
  url.searchParams.set('iiprop',     'url|mime|size')
  url.searchParams.set('iiurlwidth', '1200')
  url.searchParams.set('format',     'json')
  url.searchParams.set('origin',     '*')

  const res = await fetch(url.toString(), {
    headers: { 'User-Agent': 'AttractionsNepal/1.0 (shailendrarijal@gmail.com)' },
  })
  if (!res.ok) return null

  const json = await res.json()
  const pages = json?.query?.pages
  if (!pages) return null

  const results = Object.values(pages)
    .filter(p => {
      const ii = p.imageinfo?.[0]
      if (!ii) return false
      const mime = ii.mime ?? ''
      // Only JPEG and PNG, large enough, skip SVGs/GIFs
      return (mime === 'image/jpeg' || mime === 'image/png') && ii.size > 50_000
    })
    .map(p => ({
      title:    p.title,
      url:      p.imageinfo[0].thumburl,   // 1200 px wide version
      origUrl:  p.imageinfo[0].url,
      mime:     p.imageinfo[0].mime,
    }))

  return results[0] ?? null
}

async function findImage(slug) {
  const queries = QUERIES[slug]
  if (!queries) return null

  for (const q of queries) {
    const result = await wikimediaSearch(q)
    if (result) {
      console.log(`    🔍 Found via "${q}": ${result.title}`)
      return result
    }
    await new Promise(r => setTimeout(r, 300)) // polite delay
  }
  return null
}

// ── Download & upload ──────────────────────────────────────────────────────────

async function downloadImage(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'AttractionsNepal/1.0 (shailendrarijal@gmail.com)' },
  })
  if (!res.ok) throw new Error(`Download failed: ${res.status}`)
  const buf = await res.arrayBuffer()
  return Buffer.from(buf)
}

async function uploadToSupabase(slug, buffer, mime) {
  const path = `${slug}/hero.jpg`
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, buffer, { contentType: mime, upsert: true })

  if (error) throw new Error(`Supabase upload failed: ${error.message}`)

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path)
  return data.publicUrl
}

// ── Main ───────────────────────────────────────────────────────────────────────

async function main() {
  const slugs = Object.keys(QUERIES)
  console.log(`\nProcessing ${slugs.length} places…\n`)

  let ok = 0, failed = 0

  for (const slug of slugs) {
    console.log(`▸ ${slug}`)

    // Skip if already has a heroImage
    const place = await prisma.place.findUnique({
      where: { slug },
      select: { id: true, heroImage: true },
    })

    if (!place) {
      console.log(`  ⚠️  Not found in DB — skip`)
      failed++
      continue
    }

    if (place.heroImage) {
      console.log(`  ℹ️  Already has image — skip`)
      ok++
      continue
    }

    try {
      // 1. Find image on Wikimedia
      const img = await findImage(slug)
      if (!img) {
        console.log(`  ❌ No Wikimedia image found`)
        failed++
        continue
      }

      // 2. Download
      const buffer = await downloadImage(img.url || img.origUrl)
      console.log(`    ⬇️  Downloaded ${Math.round(buffer.length / 1024)} KB`)

      // 3. Upload to Supabase
      const publicUrl = await uploadToSupabase(slug, buffer, img.mime)
      console.log(`    ⬆️  Uploaded → ${publicUrl}`)

      // 4. Update DB
      await prisma.place.update({
        where: { slug },
        data: {
          heroImage: publicUrl,
          images: [publicUrl],
        },
      })

      console.log(`  ✅  Done`)
      ok++

    } catch (err) {
      console.log(`  ❌  Error: ${err.message}`)
      failed++
    }

    // Polite delay between places
    await new Promise(r => setTimeout(r, 500))
  }

  console.log(`\n────────────────────────────────────`)
  console.log(`  Success : ${ok}`)
  console.log(`  Failed  : ${failed}`)
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
