/**
 * Applies YouTube video URLs to places in the database.
 * Videos sourced from: @nepal8thwonder, @Ghumante, @TRAVERART, @sirjanasizzu
 * Run: node prisma/seed-youtube-urls.js
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const YOUTUBE_UPDATES = [
  // @nepal8thwonder
  { slug: 'bardiya-national-park',      youtubeUrl: 'https://www.youtube.com/watch?v=lm6xJfYwSMc' },
  { slug: 'pokhara-city',               youtubeUrl: 'https://www.youtube.com/watch?v=yHHgJYvet_o' },
  { slug: 'chitwan-national-park',      youtubeUrl: 'https://www.youtube.com/watch?v=IsCOBvvzHLQ' },
  { slug: 'rara-lake-national-park',    youtubeUrl: 'https://www.youtube.com/watch?v=qiYKD1FZ5YM' },
  { slug: 'pathibhara-devi-temple',     youtubeUrl: 'https://www.youtube.com/watch?v=vm6cpfNyz6U' },
  { slug: 'shey-phoksundo-lake',        youtubeUrl: 'https://www.youtube.com/watch?v=K3NSty1-xpw' },
  { slug: 'gosaikunda-lake',            youtubeUrl: 'https://www.youtube.com/watch?v=GhdVvDIaGVo' },
  { slug: 'annapurna-base-camp-trek',   youtubeUrl: 'https://www.youtube.com/watch?v=mJ28gebzYqU' },
  { slug: 'lo-manthang',               youtubeUrl: 'https://www.youtube.com/watch?v=oSIniuht7B4' },
  { slug: 'upper-mustang-trek',         youtubeUrl: 'https://www.youtube.com/watch?v=oSIniuht7B4' },
  // Kalinchowk — using @sirjanasizzu's dedicated video (more focused on the destination)
  { slug: 'kalinchowk',                youtubeUrl: 'https://www.youtube.com/watch?v=d86u6LMu-l8' },
  // Ilam tea gardens appears in the Pathibhara/eastern Nepal tour video
  { slug: 'ilam-tea-gardens',           youtubeUrl: 'https://www.youtube.com/watch?v=vm6cpfNyz6U' },

  // @Ghumante
  { slug: 'everest-base-camp-trek',     youtubeUrl: 'https://www.youtube.com/watch?v=LolExdWgPDU' },
  { slug: 'kala-patthar',              youtubeUrl: 'https://www.youtube.com/watch?v=LolExdWgPDU' },
  { slug: 'gokyo-lakes',               youtubeUrl: 'https://www.youtube.com/watch?v=T_bEqgQnj8E' },
  { slug: 'namche-bazaar',             youtubeUrl: 'https://www.youtube.com/watch?v=NOUH6DpNUDM' },
  { slug: 'janakpur',                  youtubeUrl: 'https://www.youtube.com/watch?v=ZG1SAjZHiJw' },

  // @sirjanasizzu
  { slug: 'langtang-valley-trek',       youtubeUrl: 'https://www.youtube.com/watch?v=XTLuOT_wdXk' },

  // @TRAVERART
  { slug: 'bandipur',                  youtubeUrl: 'https://www.youtube.com/watch?v=2gj0-gjmw9s' },
]

async function main() {
  console.log(`Applying YouTube URLs to ${YOUTUBE_UPDATES.length} places…\n`)

  let updated = 0
  let skipped = 0

  for (const { slug, youtubeUrl } of YOUTUBE_UPDATES) {
    const existing = await prisma.place.findUnique({
      where: { slug },
      select: { id: true, name: true, youtubeUrl: true },
    })

    if (!existing) {
      console.log(`  ⚠️  SKIP — place not found: ${slug}`)
      skipped++
      continue
    }

    if (existing.youtubeUrl) {
      console.log(`  ℹ️  OVERWRITE — ${existing.name} (${slug})`)
      console.log(`       old: ${existing.youtubeUrl}`)
      console.log(`       new: ${youtubeUrl}`)
    } else {
      console.log(`  ✅  SET — ${existing.name} (${slug})`)
      console.log(`       url: ${youtubeUrl}`)
    }

    await prisma.place.update({
      where: { slug },
      data: { youtubeUrl },
    })
    updated++
  }

  console.log(`\n────────────────────────────`)
  console.log(`  Updated : ${updated}`)
  console.log(`  Skipped : ${skipped}`)
  console.log(`  Total   : ${YOUTUBE_UPDATES.length}`)
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
