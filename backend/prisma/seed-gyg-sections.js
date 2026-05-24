/**
 * Creates TOURS_EXPERIENCES PlaceSection records for 17 places,
 * each linking to curated GetYourGuide activities with the affiliate partner ID.
 *
 * Run: node prisma/seed-gyg-sections.js
 */
import { PrismaClient } from '@prisma/client'
import { config }       from 'dotenv'
import { resolve, dirname } from 'path'
import { fileURLToPath }   from 'url'

config({ path: resolve(dirname(fileURLToPath(import.meta.url)), '../.env') })

const prisma     = new PrismaClient()
const PARTNER_ID = 'HAI6BK9'

function gygUrl(rawUrl) {
  // Append partner_id query param, avoiding duplicates
  const url = new URL(rawUrl)
  url.searchParams.set('partner_id', PARTNER_ID)
  return url.toString()
}

const SECTIONS = [
  {
    placeSlug: 'kathmandu-durbar-square',
    title: 'Immersive Experiences in Kathmandu',
    content: "Kathmandu's heritage goes far beyond sightseeing — you can knead dough with local women for a momo-making class, chant mantras beside ancient stupas at sunrise, or join a guided twilight walk to witness the evening Aarati ceremony at Pashupatinath. These hands-on experiences bring the living culture of the city to life in ways no museum can.",
    activities: [
      { label: 'Women-Led Nepali Cooking & Momo-Making Class',              url: 'https://www.getyourguide.com/kathmandu-l101/kathmandu-local-women-lead-nepali-cooking-momo-class-t526528/' },
      { label: 'Traditional Yoga Retreat with Temple Meditation',            url: 'https://www.getyourguide.com/kathmandu-l101/traditional-yoga-retreat-in-kathmandu-with-temple-meditation-t1214803/' },
      { label: 'Yoga & Sound Healing Session',                               url: 'https://www.getyourguide.com/kathmandu-l101/kathmandu-yoga-and-sound-healing-session-t1057356/' },
      { label: 'Early Morning Temple & Stupa Tour with Coffee',              url: 'https://www.getyourguide.com/kathmandu-l101/kathmandu-early-morning-temple-stupa-tour-with-coffee-t1247855/' },
    ],
  },
  {
    placeSlug: 'thamel',
    title: 'Explore Thamel on Foot',
    content: "Thamel's alleyways hide centuries-old courtyards, incense-filled shrines, and artisan workshops. A guided walking tour peels back the tourist veneer and reveals the neighbourhood's living history — from Asan Bazaar's spice markets to hidden garden retreats just steps from the chaos.",
    activities: [
      { label: 'Thamel Heritage Walking Tour with Local Guide',              url: 'https://www.getyourguide.com/kathmandu-l101/kathmandu-thamel-heritage-walking-tour-with-guide-t1313927/' },
      { label: 'Thamel, Asan Bazaar & Temples Walking Tour',                 url: 'https://www.getyourguide.com/kathmandu-l101/kathmandu-walking-tour-of-thamel-asan-bazaar-temples-t1167877/' },
      { label: 'Ason, Thamel & Garden of Dreams Walking Tour',               url: 'https://www.getyourguide.com/kathmandu-l101/kathmandu-ason-thamel-garden-of-dreams-walking-tour-t1165290/' },
    ],
  },
  {
    placeSlug: 'pashupatinath-temple',
    title: 'Sacred Rituals at Pashupatinath',
    content: "Pashupatinath's riverbank ghats pulse with ancient ritual — from dawn ablutions to the hypnotic Aarati fire ceremony at dusk. Joining a guided twilight walk gives you rare context to understand the ceremonies unfolding before you, transforming a sightseeing stop into a genuinely moving spiritual encounter.",
    activities: [
      { label: 'Pashupati Twilight Walk & Evening Aarati Ceremony',          url: 'https://www.getyourguide.com/kathmandu-l101/pashupati-twilight-walk-evening-aarati-journey-t1158528/' },
      { label: 'Kapan Monastery & Boudha Spiritual Morning Tour',            url: 'https://www.getyourguide.com/kathmandu-l101/awakening-in-kathmandu-jamche-kapan-boudha-spiritual-tour-t620370/' },
    ],
  },
  {
    placeSlug: 'boudhanath-stupa',
    title: 'Meditation & Spirituality at Boudhanath',
    content: "Boudhanath is one of the world's largest Buddhist stupas and a living hub for Tibetan culture. Beyond circumambulating the stupa with pilgrims, join a meditation retreat or spiritual monastery tour that takes you inside the prayer halls and connects you with resident monks.",
    activities: [
      { label: '1–3 Day Yoga, Meditation & Reiki Retreat in Kathmandu',     url: 'https://www.getyourguide.com/kathmandu-l101/kathmandu-1-3-day-of-yoga-and-meditation-with-reiki-retreat-t458718/' },
      { label: 'Day Yoga & Meditation Retreat with Lunch',                   url: 'https://www.getyourguide.com/kathmandu-l101/day-yoga-meditation-retreat-with-lunch-kathmandu-t613999/' },
    ],
  },
  {
    placeSlug: 'bhaktapur-durbar-square',
    title: 'Craft & Culture in Bhaktapur',
    content: "Bhaktapur's Pottery Square is one of the last places in Nepal where traditional Newari wheel-throwing is a living daily practice. Take a hands-on pottery class with artisan families, join a craft tour through ancient courtyards, or combine clay art with a Newari folk music evening.",
    activities: [
      { label: 'Pottery & Craft Tour with Hands-On Experience',              url: 'https://www.getyourguide.com/bhaktapur-l1403/bhaktapur-pottery-and-craft-tour-with-hands-on-experience-t868500/' },
      { label: 'Pottery-Making Class with Bhaktapur Guided Tour',            url: 'https://www.getyourguide.com/bhaktapur-l1403/pottery-making-class-with-bhaktapur-guided-tour-t504493/' },
      { label: 'Nagarkot Sunrise with Changu Narayan & Bhaktapur',           url: 'https://www.getyourguide.com/bhaktapur-l1403/nagarkot-sunrise-tour-with-changu-narayan-bhaktapur-t639840/' },
      { label: 'Clay Art, Nepali Lunch & Folk Music Experience',             url: 'https://www.getyourguide.com/lalitpur-nepal-l105012/kathmandu-bhaktapur-clay-art-nepali-lunch-and-folk-music-t1032471/' },
    ],
  },
  {
    placeSlug: 'patan-durbar-square',
    title: 'Hidden Alleys & Living Art in Patan',
    content: "Patan is the artisan capital of the Kathmandu Valley, where metalworkers and thangka painters keep thousand-year-old skills alive in workshops tucked behind temple courtyards. A walking tour through the UNESCO-listed square and its hidden lanes reveals a city barely changed since the medieval era.",
    activities: [
      { label: 'Patan Durbar Square: UNESCO Hidden Alleys Tour',             url: 'https://www.getyourguide.com/lalitpur-nepal-l105012/walking-patan-durbar-sq-unesco-hidden-alle-t562873/' },
      { label: 'Kathmandu: 3 Major Durbar Squares Guided Tour',              url: 'https://www.getyourguide.com/kathmandu-l101/kathmandu-3-major-durbar-square-guided-tour-t849986/' },
    ],
  },
  {
    placeSlug: 'nagarkot',
    title: 'Sunrise Hikes & Himalayan Views at Nagarkot',
    content: "Nagarkot sits at 2,195 m and offers one of the widest Himalayan panoramas in Nepal — on clear mornings you can see from Dhaulagiri to Kanchenjunga. Combine the sunrise viewpoint with a hike down through villages to the medieval temple of Changu Narayan for a full day of mountain views and living heritage.",
    activities: [
      { label: 'Himalayan Sunrise at Nagarkot with Village Breakfast',       url: 'https://www.getyourguide.com/nagarkot-l33365/himalayan-sunrise-at-nagarkot-with-local-village-breakfast-t1311228/' },
      { label: 'Nagarkot Sunrise, Buddha Peace Park & Ranijhula Bridge',     url: 'https://www.getyourguide.com/nagarkot-l33365/nagarkot-sunrise-buddha-peace-park-with-ranijhula-bridge-t1016360/' },
      { label: 'Nagarkot Sunrise View & Private Hike from Kathmandu',        url: 'https://www.getyourguide.com/nagarkot-l33365/kathmandu-nagarkot-sunrise-view-private-tour-and-hike-t664208/' },
    ],
  },
  {
    placeSlug: 'paragliding-sarangkot-pokhara',
    title: 'Tandem Paragliding Over Pokhara',
    content: "Launching from Sarangkot Hill at dawn with the Annapurna massif filling the horizon is widely regarded as one of the world's best paragliding experiences. Certified tandem pilots handle everything — your only job is to soak in the views over Phewa Lake far below.",
    activities: [
      { label: 'Paragliding with Stunning Photos & Videos Included',         url: 'https://www.getyourguide.com/pokhara-l277/paragliding-in-pokhara-stunning-photos-and-videos-t643176/' },
      { label: 'Paragliding over Phewa Lake with Panoramic Himalaya View',   url: 'https://www.getyourguide.com/pokhara-l277/pokhara-paragliding-over-phewa-lake-with-panoramic-view-t614619/' },
      { label: '30-Minute Tandem Paraglide from Pokhara',                    url: 'https://www.getyourguide.com/pokhara-l277/pokhara-30-minute-tandem-paraglide-t165420/' },
    ],
  },
  {
    placeSlug: 'fewa-lake-boating',
    title: 'Boating & Island Temple on Phewa Lake',
    content: "A wooden rowboat across the still waters of Phewa Lake to the Tal Barahi island temple at sunrise is one of Pokhara's most tranquil rituals. Extend the experience with a hike up to the World Peace Pagoda for sweeping views over the lake and the Annapurna range beyond.",
    activities: [
      { label: 'Boating on Phewa Lake & Hike to World Peace Pagoda',        url: 'https://www.getyourguide.com/pokhara-l277/pokhara-boating-by-phewa-and-hike-to-peace-pagoda-t1182049/' },
      { label: 'Talbarahi Temple Visit with Boat Ride on Phewa Lake',        url: 'https://www.getyourguide.com/pokhara-l277/pokhara-talbarahi-temple-visit-with-boat-ride-t1115677/' },
      { label: 'Pokhara Scenic Day: Sunrise Views & Lake Boating',           url: 'https://www.getyourguide.com/pokhara-l277/pokhara-scenic-day-hike-sunrise-views-boating-t1223987/' },
    ],
  },
  {
    placeSlug: 'zip-flyer-pokhara',
    title: 'Zipline & Extreme Adventure in Pokhara',
    content: "Pokhara has quietly become Nepal's adventure sports capital. The ZipFlyer is billed as the world's steepest zipline, dropping 600 m in under a minute with the Himalayas as backdrop, while the nearby Kushma bungee ranks among the world's highest. Combo packages let adrenaline-seekers tick off multiple thrills in a single day.",
    activities: [
      { label: "Experience the World's Steepest Zipline",                    url: 'https://www.getyourguide.com/pokhara-l277/pokhara-experience-the-world-s-steepest-zipline-t526015/' },
      { label: 'Sunrise ZipFlyer with Champagne Breakfast',                  url: 'https://www.getyourguide.com/pokhara-l277/pokhara-sunrise-zipflyer-with-champagne-breakfast-t894135/' },
      { label: "Kushma Bungee Jump — World's 2nd Highest",                   url: 'https://www.getyourguide.com/pokhara-l277/kushma-bungee-jumping-world-s-2nd-highest-bungee-jump-t1313891/' },
    ],
  },
  {
    placeSlug: 'jungle-safari-chitwan',
    title: 'Wildlife Safari & Jungle Adventures in Chitwan',
    content: "Chitwan National Park is one of Asia's finest wildlife destinations, home to one-horned rhinos, Bengal tigers, and gharial crocodiles. A full-day safari combines a jeep drive through the grasslands with a dugout canoe ride on the Rapti River — one of the best ways to spot rhinos from the water.",
    activities: [
      { label: 'Full-Day Safari, Canoeing & Jungle Walk',                    url: 'https://www.getyourguide.com/ratnanagar-l244327/chitwan-full-day-safari-canoeing-and-jungle-walk-and-jeep-t853278/' },
      { label: 'Chitwan Wilderness Jungle Safari & River Adventure',         url: 'https://www.getyourguide.com/chitwan-national-park-l2063/chitwan-wilderness-jungle-safari-trishuli-river-adventure-t1213418/' },
      { label: 'Sauraha Jungle Walk in the Buffer Zone',                     url: 'https://www.getyourguide.com/ratnanagar-l244327/sauraha-jungle-walk-with-local-guide-in-bufferzone-t1163031/' },
    ],
  },
  {
    placeSlug: 'lumbini-sacred-garden',
    title: 'Spiritual Pilgrimage in Lumbini',
    content: "Lumbini, birthplace of the Buddha, is one of the world's most significant pilgrimage sites — and also one of its most peaceful. Beyond the Maya Devi Temple and the sacred flame, join a full-day guided tour of the sacred garden and monastery zone, or combine it with the ancient ruins of Tilaurakot.",
    activities: [
      { label: "Buddhist Spiritual Exploration Tour",                         url: 'https://www.getyourguide.com/lumbini-l1477/lumbini-buddhists-spiritual-exploration-t502178/' },
      { label: 'Lumbini Full-Day Tour with Guide',                           url: 'https://www.getyourguide.com/lumbini-l1477/lumbini-full-day-tour-with-guide-t474874/' },
      { label: 'Lumbini & Tilaurakot Ancient Palace Day Tour',               url: 'https://www.getyourguide.com/lumbini-l1477/lumbini-tilaurakot-palace-day-tour-with-guide-t1294250/' },
    ],
  },
  {
    placeSlug: 'poon-hill-trek-ghorepani-poon-hill',
    title: 'Poon Hill Sunrise Trek',
    content: "The 3–4 day Ghorepani Poon Hill trek is the most rewarding short trek in Nepal — rhododendron forests, Gurung villages, and a pre-dawn climb to the 3,210 m viewpoint where Dhaulagiri, Annapurna South, and Machapuchare rise from the clouds. Options include private guided treks and small-group departures led by female guides.",
    activities: [
      { label: '3-Day Ghorepani Poon Hill Trek with Guide from Pokhara',     url: 'https://www.getyourguide.com/pokhara-l277/from-pokhara-3-day-ghorepani-poon-hill-trek-with-guide-t460130/' },
      { label: '3-Day Poon Hill Sunrise Trek with Lady Guide',               url: 'https://www.getyourguide.com/ulleri-l254531/pokhara-3-day-poon-hill-sunrise-trek-with-lady-guide-t1196636/' },
      { label: '4-Day Ghorepani Poon Hill & Ghandruk Trek',                  url: 'https://www.getyourguide.com/pokhara-l277/pokhara-4-day-ghorepani-poonhill-ghandruk-mountain-trek-t444439/' },
    ],
  },
  {
    placeSlug: 'annapurna-base-camp-trek',
    title: 'Annapurna Base Camp Guided Trek',
    content: "The Annapurna Base Camp trek leads to a 4,130 m glacial amphitheatre ringed by thirteen peaks over 6,000 m — a setting that feels like standing at the centre of the world. Five-day guided treks from Pokhara include a detour to the Jhinu hot springs for a well-earned soak on the way back.",
    activities: [
      { label: '5-Day Annapurna Base Camp Trek from Pokhara',                url: 'https://www.getyourguide.com/pokhara-l277/pokhara-5-day-annapurna-base-camp-trek-t510287/' },
      { label: 'ABC Trek with Jhinu Hot Spring (5 Days)',                    url: 'https://www.getyourguide.com/pokhara-l277/annapurna-base-camp-5-day-guided-trek-with-jhinu-hot-spring-t816679/' },
      { label: 'Small-Group 5-Day ABC Trek with Lady Guide',                 url: 'https://www.getyourguide.com/pokhara-l277/pokhara-small-group-5-day-abc-trek-with-lady-guide-t1199394/' },
    ],
  },
  {
    placeSlug: 'everest-base-camp-trek',
    title: 'Everest Base Camp Guided Trek',
    content: "The 12–14 day journey to Everest Base Camp at 5,364 m is the world's most iconic trekking route, passing through Sherpa villages, ancient monasteries, and yak pastures before arriving beneath the Khumbu Icefall. All-inclusive packages cover permits, lodging, porter, and guide.",
    activities: [
      { label: 'Everest Base Camp Trek with Guide & Porter',                  url: 'https://www.getyourguide.com/kathmandu-l101/nepal-everest-base-camp-trek-with-guide-and-porter-t950838/' },
      { label: '12-Day Everest Base Camp Guided Trekking from Kathmandu',    url: 'https://www.getyourguide.com/kathmandu-l101/from-kathmandu-12-day-everest-base-camp-guided-trekking-t365500/' },
      { label: 'Everest Base Camp Trek 12 Days (All-Inclusive)',             url: 'https://www.getyourguide.com/pheriche-l148610/everest-base-camp-trek-12-days-t587742/' },
    ],
  },
  {
    placeSlug: 'narayani-river-water-sports',
    title: 'White-Water Rafting on the Trishuli River',
    content: "The Trishuli River offers Nepal's most accessible white-water rafting — Grade III–IV rapids within a day's drive of Kathmandu, passing through forested gorges and traditional villages. Both day trips and two-day overnight expeditions are available, ending with a riverside camp under the stars.",
    activities: [
      { label: 'Beginner-Friendly Rafting on the Trishuli River',            url: 'https://www.getyourguide.com/kathmandu-l101/beginner-friendly-rafting-adventure-on-the-trishuli-river-t612304/' },
      { label: 'Trishuli River Rafting — Full Day from Kathmandu',           url: 'https://www.getyourguide.com/kathmandu-l101/trishuli-river-rafting-kathmandu-1-day-t476880/' },
      { label: 'Trishuli River Rafting 3-Day Adventure from Kathmandu',     url: 'https://www.getyourguide.com/kathmandu-l101/from-kathmandu-trishuli-river-rafting-adventure-3-days-t1245404/' },
    ],
  },
  {
    placeSlug: 'white-water-rafting-seti-river-pokhara',
    title: 'Seti River Rafting from Pokhara',
    content: "The Upper Seti River offers an exhilarating half-day of white water right on Pokhara's doorstep — ideal as an add-on to a morning paraglide. For a bigger challenge, the three-day Kali Gandaki expedition descends through one of the world's deepest gorges with overnight camping on sandy river beaches.",
    activities: [
      { label: 'Upper Seti River Rafting Day Tour from Pokhara',             url: 'https://www.getyourguide.com/pokhara-l277/pokhara-upper-seti-river-rafting-day-tour-t913685/' },
      { label: 'Seti River Rafting Adventure with Hotel Pickup',             url: 'https://www.getyourguide.com/pokhara-l277/pokhara-seti-river-rafting-adventure-with-hotel-pickup-t455600/' },
      { label: '3-Day Kali Gandaki River Rafting from Pokhara',              url: 'https://www.getyourguide.com/pokhara-l277/from-pokhara-3-day-kali-gandaki-river-rafting-adventure-t1245474/' },
    ],
  },
]

async function main() {
  console.log(`\nCreating TOURS_EXPERIENCES sections for ${SECTIONS.length} places…\n`)

  let created = 0, skipped = 0, notFound = 0

  for (const entry of SECTIONS) {
    const place = await prisma.place.findUnique({
      where:  { slug: entry.placeSlug },
      select: { id: true, name: true },
    })

    if (!place) {
      console.log(`  ⚠️  Place not found: ${entry.placeSlug}`)
      notFound++
      continue
    }

    // Remove any existing TOURS_EXPERIENCES section for this place so we don't duplicate
    const existing = await prisma.placeSection.findFirst({
      where: { placeId: place.id, type: 'TOURS_EXPERIENCES' },
    })
    if (existing) {
      await prisma.placeSection.delete({ where: { id: existing.id } })
      console.log(`  ↻  Replacing existing section for ${place.name}`)
    }

    const links = entry.activities.map(a => ({
      label: a.label,
      url:   gygUrl(a.url),
      type:  'affiliate',
    }))

    await prisma.placeSection.create({
      data: {
        placeId: place.id,
        type:    'TOURS_EXPERIENCES',
        title:   entry.title,
        content: entry.content,
        links,
        order: 0,
      },
    })

    console.log(`  ✅  ${place.name} — ${links.length} activities`)
    links.forEach(l => console.log(`       · ${l.label}`))
    created++
  }

  console.log(`\n────────────────────────────────────────`)
  console.log(`  Sections created : ${created}`)
  console.log(`  Not found        : ${notFound}`)
  console.log(`  Skipped          : ${skipped}`)
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
