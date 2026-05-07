import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import slugify from 'slugify'

const prisma = new PrismaClient()

function slug(name) {
  return slugify(name, { lower: true, strict: true })
}

async function main() {
  console.log('🌱 Seeding database...')

  // Tags
  const tags = await Promise.all(
    ['Heritage', 'Temple', 'Trekking', 'Waterfall', 'Viewpoint', 'Buddhist', 'Hindu', 'Kathmandu Valley'].map(
      (name) =>
        prisma.tag.upsert({
          where: { slug: slug(name) },
          update: {},
          create: { name, slug: slug(name) },
        })
    )
  )

  const tagMap = Object.fromEntries(tags.map((t) => [t.name, t.id]))

  // Places
  const placesData = [
    {
      name: 'Pashupatinath Temple',
      category: 'TEMPLE',
      summary:
        'One of the most sacred Hindu temples in the world, dedicated to Lord Shiva, situated on the banks of the Bagmati River in Kathmandu.',
      story: `<p>Pashupatinath Temple is a sacred Hindu temple complex dedicated to Lord Shiva, located on the banks of the Bagmati River in Kathmandu, Nepal. Listed as a UNESCO World Heritage Site, it is one of the most important temples in the Hindu world.</p>
<p>The main temple, built in the pagoda style, dates back to the 5th century AD, although the present structure was rebuilt in 1697 after the original was destroyed by termites. The two-tiered golden roof and silver doors make it an architectural masterpiece of Nepal.</p>
<p>Every morning and evening, the Aarti ceremony draws hundreds of devotees. During Maha Shivaratri festival, hundreds of thousands of pilgrims flock here from across Nepal and India.</p>
<h3>What to See</h3>
<ul>
  <li>The main pagoda temple with golden roof</li>
  <li>Cremation ghats on the Bagmati River</li>
  <li>Sadhus (holy men) performing rituals</li>
  <li>Deer Park and mini stupas on the eastern bank</li>
</ul>`,
      district: 'Kathmandu',
      province: 'BAGMATI',
      lat: 27.7109,
      lng: 85.3488,
      elevation: 1277,
      entryFee: 'NPR 1,000 for foreigners / Free for Hindus',
      bestSeason: 'Oct–Apr',
      openingHours: '4:00 AM – 12:00 PM, 5:00 PM – 9:00 PM',
      howToGetThere:
        'Take a taxi or bus from Thamel (20–30 min). From the airport, about 20 minutes by taxi.',
      gygQuery: 'Pashupatinath Temple Kathmandu',
      bookingCity: 'Kathmandu',
      heroImage: null,
      images: [],
      published: true,
      featured: true,
      publishedAt: new Date(),
      seoTitle: 'Pashupatinath Temple Kathmandu — Nepal\'s Holiest Hindu Shrine',
      seoDescription:
        'Visit Pashupatinath Temple, a UNESCO World Heritage Site and one of the most sacred Hindu temples in the world, on the banks of the Bagmati River in Kathmandu, Nepal.',
      tagIds: [tagMap['Heritage'], tagMap['Temple'], tagMap['Hindu'], tagMap['Kathmandu Valley']],
      sections: [
        {
          type: 'WHERE_TO_STAY',
          title: 'Where to Stay Near Pashupatinath',
          content:
            'Thamel is 4 km away and offers the widest range of accommodation from budget guesthouses to boutique hotels. Alternatively, stay closer at Boudha for a peaceful vibe.',
          order: 1,
        },
        {
          type: 'TOURS_EXPERIENCES',
          title: 'Guided Tours & Experiences',
          content:
            'A knowledgeable guide greatly enhances your visit. Many walking tour packages include Pashupatinath, Boudhanath, and Swayambhunath in one day.',
          order: 2,
        },
        {
          type: 'TRAVEL_TIPS',
          title: 'Travel Tips',
          content:
            '**Dress modestly** — cover shoulders and knees. Non-Hindus may not enter the main temple but can observe from platforms across the river. Visit at dawn for cremation ceremonies and river atmosphere.',
          order: 3,
        },
      ],
    },
    {
      name: 'Annapurna Base Camp Trek',
      category: 'TREK_ROUTE',
      summary:
        'A legendary 7–12 day trek through rhododendron forests, Gurung villages, and dramatic mountain scenery, culminating in a stunning amphitheatre of Himalayan peaks.',
      story: `<p>The Annapurna Base Camp (ABC) Trek is one of Nepal's most celebrated trekking routes, leading deep into the heart of the Annapurna Sanctuary — a glacial amphitheatre ringed by some of the world's highest peaks, including Annapurna I (8,091m), Machapuchare (6,993m), and Hiunchuli (6,441m).</p>
<p>The trail climbs through subtropical forests of bamboo and rhododendron, past terraced farmland and traditional Gurung and Magar villages, before ascending to the high-altitude sanctuary. The final approach to base camp, through a narrow gorge, opens dramatically onto a vast arena of ice and rock.</p>
<h3>Route Highlights</h3>
<ul>
  <li><strong>Ghorepani & Poon Hill</strong> — Classic sunrise viewpoint over Dhaulagiri and Annapurna</li>
  <li><strong>Chhomrong</strong> — Gateway village with incredible mountain views</li>
  <li><strong>Deurali</strong> — Last settlement before the sanctuary</li>
  <li><strong>Annapurna Base Camp (4,130m)</strong> — Surrounded by glacier-draped peaks</li>
</ul>`,
      district: 'Kaski',
      province: 'GANDAKI',
      lat: 28.5308,
      lng: 83.8773,
      elevation: 4130,
      bestSeason: 'Oct–Dec, Mar–May',
      entryFee: 'ACAP Permit NPR 3,000 + TIMS NPR 2,000',
      howToGetThere:
        'Fly or drive to Pokhara (6–7 hrs from Kathmandu). Jeep to Nayapul or Kimche as the trail head. Most agencies arrange transport from Pokhara.',
      trekDays: 10,
      trekDifficulty: 'MODERATE',
      trekMaxElevation: 4130,
      trekDistance: 115,
      trekStartPoint: 'Nayapul / Kimche (near Pokhara)',
      trekEndPoint: 'Nayapul (loop) or Jhinu Danda',
      trekHighlights: [
        'Poon Hill sunrise (3,210m)',
        'Annapurna Base Camp (4,130m)',
        'Machapuchare (Fishtail) views',
        'Traditional Gurung villages',
        'Natural hot springs at Jhinu Danda',
      ],
      gygQuery: 'Annapurna Base Camp Trek',
      bookingCity: 'Pokhara',
      heroImage: null,
      images: [],
      published: true,
      featured: true,
      publishedAt: new Date(),
      seoTitle: 'Annapurna Base Camp Trek — Complete Guide 2025',
      seoDescription:
        'Everything you need to know about the Annapurna Base Camp Trek in Nepal — route, difficulty, best time, permits, and what to expect.',
      tagIds: [tagMap['Trekking']],
      sections: [
        {
          type: 'WHERE_TO_STAY',
          title: 'Tea Houses Along the Route',
          content:
            'The entire route is serviced by comfortable teahouses (guesthouses) run by local families. Rooms are simple but clean; most include meals. Book ahead in peak season (Oct–Nov).',
          order: 1,
        },
        {
          type: 'TRAVEL_TIPS',
          title: 'Permits & Preparation',
          content:
            'You need an **ACAP permit** (Annapurna Conservation Area Project) and a **TIMS card** — get both in Pokhara or Kathmandu. Hire a licensed guide or porter through a registered agency for safety and to support local livelihoods.',
          order: 2,
        },
        {
          type: 'TOURS_EXPERIENCES',
          title: 'Guided Trek Packages',
          content:
            'Most trekkers use an all-inclusive package from Pokhara including permits, guide, porter, teahouse accommodation, and airport transfers. Typical 10-day packages cost USD 600–1,200.',
          order: 3,
        },
      ],
    },
    {
      name: 'Boudhanath Stupa',
      category: 'STUPA',
      summary:
        'One of the largest stupas in the world, a UNESCO World Heritage Site and the spiritual centre of Tibetan Buddhism in Nepal, surrounded by monasteries and prayer flags.',
      story: `<p>Boudhanath Stupa, also known as Boudha or Khāsti, is one of the holiest Buddhist sites in Nepal and the world. Towering at 36 metres, the great mandala of Boudhanath dominates the skyline of the eponymous suburb of Kathmandu.</p>
<p>Built in the 14th century (some accounts suggest earlier), the stupa became a focal point for Tibetan refugees who settled in Nepal after 1959. Today, over 50 Tibetan Buddhist gompas (monasteries) ring the stupa, making Boudhanath the most important centre of Tibetan culture outside Tibet itself.</p>
<p>Walking the Kora (circumambulation) around the stupa at dawn or dusk is a meditative experience — you join monks, nuns, and pilgrims spinning prayer wheels, chanting mantras, and prostrating in devotion.</p>
<h3>Around the Stupa</h3>
<ul>
  <li>Ka-Nying Shedrub Ling Monastery — stunning murals and butter lamp offerings</li>
  <li>Shechen Tennyi Dargyeling — founded by Dilgo Khyentse Rinpoche</li>
  <li>Local shops selling thangka paintings, singing bowls, and prayer flags</li>
</ul>`,
      district: 'Kathmandu',
      province: 'BAGMATI',
      lat: 27.7215,
      lng: 85.3619,
      elevation: 1350,
      entryFee: 'NPR 400 for foreigners',
      bestSeason: 'Oct–Apr',
      openingHours: 'Stupa grounds: 6:00 AM – 8:00 PM',
      howToGetThere:
        'About 8 km from Thamel. Taxi takes 20–30 minutes. Alternatively, combine with a Pashupatinath visit (1.5 km away).',
      gygQuery: 'Boudhanath Stupa Kathmandu',
      bookingCity: 'Kathmandu',
      heroImage: null,
      images: [],
      published: true,
      featured: false,
      publishedAt: new Date(),
      seoTitle: 'Boudhanath Stupa Kathmandu — Guide to Nepal\'s Largest Stupa',
      seoDescription:
        'Discover Boudhanath Stupa, a UNESCO World Heritage Site and the spiritual heart of Tibetan Buddhism in Nepal. Tips, visiting hours, and what to expect.',
      tagIds: [tagMap['Heritage'], tagMap['Buddhist'], tagMap['Kathmandu Valley']],
      sections: [
        {
          type: 'WHERE_TO_STAY',
          title: 'Staying at Boudha',
          content:
            'The Boudhanath area has excellent boutique hotels and guesthouses. Staying here gives you access to the stupa at dawn and dusk, the best times to visit.',
          order: 1,
        },
        {
          type: 'TRAVEL_TIPS',
          title: 'Visiting Tips',
          content:
            'Walk clockwise around the stupa. Dress respectfully. Visit at dawn for the most atmospheric experience — monks chanting, butter lamps flickering, mist over the golden spire. The rooftop cafés and restaurants around the stupa offer great views.',
          order: 2,
        },
      ],
    },
  ]

  for (const placeData of placesData) {
    const { tagIds, sections, ...data } = placeData
    const placeSlug = slug(data.name)

    const place = await prisma.place.upsert({
      where: { slug: placeSlug },
      update: {},
      create: {
        ...data,
        slug: placeSlug,
        tags: {
          create: tagIds.filter(Boolean).map((tagId) => ({
            tag: { connect: { id: tagId } },
          })),
        },
        sections: { create: sections },
      },
    })

    console.log(`✅ Seeded: ${place.name}`)
  }

  // Sample blog
  const blogSlug = slug('10 Best Places to Visit in Nepal in 2025')
  await prisma.blog.upsert({
    where: { slug: blogSlug },
    update: {},
    create: {
      slug: blogSlug,
      title: '10 Best Places to Visit in Nepal in 2025',
      excerpt:
        'From ancient temples in Kathmandu to high-altitude Himalayan treks, here are the top destinations that belong on every Nepal itinerary.',
      content: `<p>Nepal is one of the world's most diverse travel destinations, packing everything from tropical lowland jungles to the world's highest peaks into a country the size of Arkansas.</p>
<h2>1. Kathmandu Valley</h2>
<p>The capital valley is home to seven UNESCO World Heritage Sites including Pashupatinath Temple, Boudhanath Stupa, and Swayambhunath (the Monkey Temple). Allow at least 3 days to explore the valley's temples, durbar squares, and vibrant Thamel district.</p>
<h2>2. Pokhara</h2>
<p>Nepal's adventure capital sits beside the placid Phewa Lake with the Annapurna range as its dramatic backdrop. Base yourself here for trekking, paragliding, kayaking, and watching the most spectacular mountain sunrises in the world.</p>
<h2>3. Annapurna Base Camp</h2>
<p>The classic 10-day trek into the Annapurna Sanctuary rewards trekkers with close-up views of some of the world's highest peaks and an authentic village experience.</p>
<h2>4. Chitwan National Park</h2>
<p>Nepal's most accessible national park offers jeep safaris, canoe rides, and guided jungle walks with the chance to spot one-horned rhinos, Bengal tigers, and gharial crocodiles.</p>
<h2>5. Lumbini</h2>
<p>The birthplace of Buddha Siddhartha Gautama, this UNESCO World Heritage Site in the Terai plains draws pilgrims from across the world. The Sacred Garden, Maya Devi Temple, and the Ashoka Pillar are must-see landmarks.</p>`,
      relatedPlaceSlugs: [slug('Pashupatinath Temple'), slug('Boudhanath Stupa'), slug('Annapurna Base Camp Trek')],
      published: true,
      publishedAt: new Date(),
      seoTitle: '10 Best Places to Visit in Nepal in 2025 — AttractionsNepal',
      seoDescription:
        'Discover the top 10 attractions in Nepal for 2025, from Kathmandu\'s ancient temples to Himalayan treks and wildlife safaris in Chitwan.',
      tags: {
        create: [tagMap['Heritage'], tagMap['Trekking']].filter(Boolean).map((tagId) => ({
          tag: { connect: { id: tagId } },
        })),
      },
    },
  })

  console.log('✅ Seeded sample blog')
  console.log('🌱 Done!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
