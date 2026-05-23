/**
 * Batch 2 of 5 — 3-day itineraries (10 total)
 * Run from backend/: node prisma/seed-itineraries-batch2.js
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ITINERARIES = [
  {
    slug: 'kathmandu-valley-3-days',
    title: 'Kathmandu Valley in 3 Days',
    excerpt: 'The definitive introduction to Nepal\'s cultural heartland — three UNESCO-listed Durbar Squares, living Hindu temples, Buddhist stupas, mountain views, and the best Newari food in the country.',
    days: 3,
    activities: ['CULTURAL', 'SPIRITUAL'],
    budget: 'MIDRANGE',
    difficulty: 'EASY',
    provinces: ['BAGMATI'],
    heroImage: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1200&q=80',
    highlights: [
      'All three Durbar Squares: Kathmandu, Patan, and Bhaktapur',
      'Pashupatinath, Boudhanath, and Swayambhunath',
      'Nagarkot sunrise — panoramic Himalayan view',
      'Changu Narayan — Nepal\'s oldest surviving temple',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Kathmandu',
    featured: true,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Kathmandu Sacred Sites',
        description: `**Morning — Pashupatinath & Boudhanath**\n\nStart at Pashupatinath Temple at 7 AM for the morning rituals on the Bagmati River ghats. Then taxi to Boudhanath Stupa — walk the kora with monks and explore the surrounding Tibetan monasteries. Lunch at a café overlooking the stupa.\n\n**Afternoon — Swayambhunath & Thamel**\n\nAfternoon at Swayambhunath (Monkey Temple) — climb the 365 steps for panoramic valley views and golden-hour light on the spire. Evening in Thamel: browse the bookshops and textile shops, then dinner at a traditional Nepali restaurant with live folk music.`,
        accommodation: 'Hotel in Thamel, Kathmandu',
        meals: 'All meals',
      },
      {
        day: 2,
        title: 'Patan, Kathmandu Durbar Square & Nagarkot',
        description: `**Morning — Patan (Lalitpur)**\n\nTake a taxi south to Patan. Spend the morning at Patan Durbar Square and Patan Museum (2 hours), then the Golden Temple (Hiranya Varna Mahavihar) and Oku Bahal courtyard. Lunch in Patan's café strip.\n\n**Afternoon — Kathmandu Durbar Square**\n\nReturn to central Kathmandu and spend the afternoon exploring Hanuman Dhoka, the Kumari courtyard (catch the living goddess if you're lucky), and the old Indra Chowk bazaar.\n\n**Evening — Drive to Nagarkot**\n\nHire a taxi to Nagarkot (1.5 hours). Dinner at your hilltop lodge and early bed ahead of the sunrise.`,
        accommodation: 'Lodge at Nagarkot',
        meals: 'Breakfast in Thamel; lunch in Patan; dinner at Nagarkot lodge',
      },
      {
        day: 3,
        title: 'Nagarkot Sunrise → Changu Narayan → Bhaktapur',
        description: `**Dawn — Nagarkot Sunrise Panorama**\n\nWake at 5 AM for the most famous mountain view near Kathmandu. On a clear day: Dhaulagiri, Manaslu, Ganesh Himal, Langtang, and the pyramid of Everest.\n\n**Morning — Changu Narayan Trek**\n\nHike 2–3 hours through forest and terraced fields from Nagarkot to Changu Narayan — Nepal's oldest surviving temple (4th century CE), a UNESCO site with remarkable stone sculpture and woodwork.\n\n**Afternoon — Bhaktapur**\n\nDescend to Bhaktapur for lunch and a final afternoon in Nepal's best-preserved medieval city. Nyatapola Temple, 55-Window Palace, and the pottery square. Return to Kathmandu by evening.`,
        accommodation: 'Hotel in Kathmandu (night 3 or depart)',
        meals: 'Breakfast at Nagarkot lodge; lunch in Bhaktapur; dinner in Kathmandu',
        distanceKm: 8,
      },
    ],
  },

  {
    slug: 'pokhara-relaxation-weekend-3-days',
    title: 'Pokhara Weekend Escape — 3 Days',
    excerpt: 'Three days in Nepal\'s most relaxing city: lakeside sunrises, a dawn paragliding flight, mountain biking, kayaking on Phewa Lake, and the complete Annapurna backdrop from every angle.',
    days: 3,
    activities: ['RELAXATION', 'ADVENTURE'],
    budget: 'MIDRANGE',
    difficulty: 'EASY',
    provinces: ['GANDAKI'],
    heroImage: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&q=80',
    highlights: [
      'Sarangkot sunrise — Annapurna range at golden hour',
      'Tandem paragliding over Phewa Lake',
      'Kayaking and rowing on Phewa Lake',
      'World Peace Pagoda and Begnas Lake day trip',
    ],
    startLocation: 'Pokhara',
    endLocation: 'Pokhara',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Arrival, Lakeside & Peace Pagoda',
        description: `**Morning — Arrive in Pokhara**\n\nArrive by tourist bus (6–7 hours from Kathmandu) or flight (25 minutes). Check in to a Lakeside hotel.\n\n**Afternoon — Phewa Lake & Tal Barahi Temple**\n\nRent a rowboat on Phewa Lake and row to the Tal Barahi island temple. The afternoon light on Machhapuchhre (Fishtail Mountain, 6,993m) reflecting on the lake is iconic.\n\n**Late Afternoon — World Peace Pagoda**\n\nHike or boat across to the southern ridge for the World Peace Pagoda — a white stupa built by Japanese monks with views over the entire lake and Annapurna range.\n\n**Evening — Lakeside dinner**\n\nPokhara's Lakeside strip has restaurants for every taste. Try a lakeside table at sunset.`,
        accommodation: 'Lakeside hotel, Pokhara',
        meals: 'Lunch at Lakeside café; dinner at lakeside restaurant',
      },
      {
        day: 2,
        title: 'Sarangkot Sunrise & Paragliding',
        description: `**Pre-dawn (5:00 AM) — Sarangkot Sunrise**\n\nJeep to Sarangkot (1,592m) before dawn. The Annapurna range at sunrise is one of Nepal's top 5 experiences. Clear mornings in October–November and March–May offer the best views.\n\n**Morning — Tandem Paragliding**\n\nFly with a licensed tandem pilot from Sarangkot — 25–40 minutes soaring on thermals with Phewa Lake below and the Himalayas in front. Book the previous evening (USD 80–90).\n\n**Afternoon — Kayaking or Hiking**\n\nRent a kayak on Phewa Lake for the afternoon, or take the 4-hour mountain bike trail around the lake's southern shore through jungle and villages.\n\n**Evening — Lakeside Relaxation**\n\nMassage, sunset cocktail, dinner. Pokhara is made for unwinding.`,
        accommodation: 'Lakeside hotel, Pokhara',
        meals: 'Breakfast at Sarangkot viewpoint; lunch at Lakeside; dinner on Lakeside strip',
      },
      {
        day: 3,
        title: 'Begnas Lake & Caves Day Trip',
        description: `**Morning — Begnas Lake**\n\n14 km east of Pokhara, Begnas Lake is quieter and more rural than Phewa. Rent a pedal boat, walk the ridge trail with valley views, and have breakfast at a local teahouse. Few tourists.\n\n**Midday — Davis Falls & Gupteshwor Cave**\n\nReturn via Davis Falls (waterfall that disappears into an underground gorge) and Gupteshwor Cave (large natural cavern with Hindu shrines).\n\n**Afternoon — International Mountain Museum**\n\nPokhara's International Mountain Museum is the best mountaineering museum in Asia — covers all 14 eight-thousanders, expedition history, and Himalayan ecology. 2 hours.\n\n**Evening — Depart or extend**\n\nBus or flight back to Kathmandu, or extend your Pokhara stay.`,
        accommodation: 'Lakeside hotel or depart',
        meals: 'Breakfast at Begnas teahouse; lunch at Lakeside; farewell dinner at favourite Pokhara restaurant',
        distanceKm: 30,
      },
    ],
  },

  {
    slug: 'lumbini-buddhist-pilgrimage-3-days',
    title: 'Lumbini Buddhist Pilgrimage — 3 Days',
    excerpt: 'A deep spiritual journey through Buddhism\'s birthplace and its surrounding sacred sites: Kapilavastu (childhood home of the Buddha), Devadaha (birthplace of his mother), and Tilaurakot palace ruins.',
    days: 3,
    activities: ['SPIRITUAL', 'CULTURAL'],
    budget: 'BUDGET',
    difficulty: 'EASY',
    provinces: ['LUMBINI'],
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80',
    highlights: [
      'Maya Devi Temple at the exact birthplace of the Buddha',
      'Tilaurakot — ruins of the Shakya palace where Siddhartha grew up',
      'Devadaha — birthplace of Queen Maya Devi',
      'International monastery zone with 30+ monasteries from 14 nations',
    ],
    startLocation: 'Bhairahawa (Lumbini airport)',
    endLocation: 'Bhairahawa',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Sacred Garden & International Monastery Zone',
        description: `**Morning — Maya Devi Temple & Sacred Garden**\n\nArrive in Lumbini and go directly to the Sacred Garden. Visit Maya Devi Temple (birthplace marker), the Ashoka Pillar (249 BCE), the Puskarini pond, and the Eternal Peace Flame. Spend 2–3 hours in quiet contemplation.\n\n**Afternoon — Eastern Monastic Zone**\n\nThe Eastern Zone houses Theravada monasteries. Walk to the **Myanmar Golden Temple**, the **Sri Lanka Monastery**, the **Thai Royal Temple**, and the **Cambodian Buddhist Monastery**. Each has a different architectural style and atmosphere.\n\n**Evening — Meditation**\n\nSeveral monasteries offer free meditation sessions to visitors in the evenings. The Japanese **World Peace Pagoda** is lit beautifully after dark.`,
        accommodation: 'Monastery guesthouse in Lumbini',
        meals: 'Simple vegetarian meals at monastery guesthouse',
      },
      {
        day: 2,
        title: 'Western Monastery Zone & Lumbini Museum',
        description: `**Morning — Western Monastic Zone**\n\nThe Western Zone houses Mahayana and Vajrayana monasteries. Visit the **Great Drigung Kagyud Lotus Stupa** (Tibet), the **Chinese Buddhist Monastery**, the **Korean Temple**, the **Vietnamese Monastery**, and the stunning **German Dharmakirti Buddhist Society** temple. A bicycle is the best way to cover the zone — rent one for NPR 100.\n\n**Midday — Lumbini Museum**\n\nThe government museum displays archaeological finds from the Sacred Garden and surrounding area — coins, terracotta figurines, and ancient inscriptions.\n\n**Afternoon — Meditation & Reflection**\n\nFree afternoon for personal meditation, joining a monastery's guided session, or reading at the Sacred Garden.`,
        accommodation: 'Monastery guesthouse in Lumbini',
        meals: 'Vegetarian meals at monastery; possible community lunch at a monastery',
      },
      {
        day: 3,
        title: 'Tilaurakot & Devadaha — Buddha\'s Childhood World',
        description: `**Morning — Tilaurakot (Kapilavastu)**\n\n27 km west of Lumbini, Tilaurakot is believed to be ancient Kapilavastu — the Shakya kingdom where Siddhartha Gautama lived until age 29. Archaeological excavations have revealed palace ruins, city walls, and gateways. The small museum on site houses finds from the excavations.\n\n**Midday — Kudan & Nigrodharam**\n\nNearby sites: Kudan (where Emperor Ashoka was believed to have meditated) and Nigrodharam (a grove where the Buddha returned to teach his family after enlightenment).\n\n**Afternoon — Devadaha**\n\n15 km east of Lumbini, Devadaha is the birthplace of Queen Maya Devi (Buddha's mother) and the site where she is believed to have given birth during her journey. A quiet, rarely-visited archaeological site with Ashoka-era remains.\n\n**Evening — Depart from Bhairahawa**\n\nReturn to Bhairahawa for bus or flight connections.`,
        accommodation: 'Return to Kathmandu or onward travel',
        meals: 'Breakfast at guesthouse; lunch at local restaurant in Tilaurakot area; dinner at Bhairahawa',
        distanceKm: 60,
      },
    ],
  },

  {
    slug: 'chitwan-wildlife-weekend-3-days',
    title: 'Chitwan Wildlife Weekend — 3 Days',
    excerpt: 'The full Chitwan National Park experience: multiple safaris, canoe rides, birdwatching, Tharu culture, and the best chance of seeing rhinos, elephants, and crocodiles in one of Asia\'s top wildlife reserves.',
    days: 3,
    activities: ['WILDLIFE'],
    budget: 'MIDRANGE',
    difficulty: 'EASY',
    provinces: ['BAGMATI'],
    heroImage: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&q=80',
    highlights: [
      'Jeep safaris at dawn and dusk — best time for rhino sightings',
      'Canoe safari on the Rapti and Narayani Rivers',
      'Elephant breeding centre visit',
      'Tharu village home-stay and cultural programme',
    ],
    startLocation: 'Sauraha, Chitwan',
    endLocation: 'Sauraha, Chitwan',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Arrival, Orientation Walk & Evening Safari',
        description: `**Afternoon — Arrive in Sauraha**\n\nArrive in Sauraha (6 hours from Kathmandu by tourist bus, or 30 min from the nearest airport at Bharatpur). Check in to your jungle lodge.\n\n**Late Afternoon — Park Orientation Walk**\n\nA short guided walk along the park boundary to see deer, langur monkeys, peacocks, and rhinos from the embankment. Good introduction to the habitat.\n\n**Sunset — Canoe on the Rapti River**\n\nDugout canoe ride at sunset along the Rapti — watch mugger and gharial crocodiles on the banks as the forest turns orange.\n\n**Evening — Tharu Cultural Programme**\n\nTharu stick dance at a local cultural centre (8 PM). Traditional music, fire acts, and storytelling.`,
        accommodation: 'Jungle lodge in Sauraha',
        meals: 'Lunch on arrival; dinner at lodge',
      },
      {
        day: 2,
        title: 'Full Day Jungle Safaris',
        description: `**Dawn (5:30 AM) — Jeep Safari**\n\nThe main event — 4-hour Jeep safari into the core park area. National parks don't guarantee sightings but Chitwan has the highest rhino density in Asia (~700 rhinos). Also look for: elephants, sloth bears, leopards, Bengal foxes, and over 500 bird species.\n\n**Mid-Morning — Elephant Breeding Centre**\n\nVisit the government Elephant Breeding Centre to see elephant calves and learn about conservation efforts.\n\n**Afternoon (2:00 PM) — Walking Safari**\n\nLead by an armed park naturalist, a 2-hour walk through the grassland and sal forest buffer zone. Closer to wildlife than any vehicle — experience the jungle at ground level.\n\n**Evening — Bird Walk**\n\nChitwan has 500+ bird species including the endangered Bengal florican and giant hornbill. A 90-minute dusk birdwatching walk with a specialist guide.`,
        accommodation: 'Jungle lodge in Sauraha',
        meals: 'All meals at lodge',
        distanceKm: 25,
      },
      {
        day: 3,
        title: 'Tharu Village & Departure',
        description: `**Morning — Tharu Village Home-stay Walk**\n\nVisit a traditional Tharu village with a local guide. The Tharu are the indigenous people of the Terai plains — see their distinctive longhouse architecture (designed to confuse tigers), traditional farming, and craft weaving.\n\n**Late Morning — Narayani River Safari**\n\nFinal 2-hour canoe safari on the Narayani River — the border between Chitwan and Valmiki Tiger Reserve (India). Gangetic river dolphins are occasionally spotted here.\n\n**Afternoon — Departure**\n\nTourist buses return to Kathmandu (6 hours) or you can fly from Bharatpur airport (30 min flight).`,
        accommodation: 'Depart',
        meals: 'Breakfast and lunch at lodge',
        distanceKm: 15,
      },
    ],
  },

  {
    slug: 'poon-hill-express-trek-3-days',
    title: 'Poon Hill Express Trek — 3 Days',
    excerpt: 'The most rewarding short trek in Nepal — three days from Pokhara to the iconic Poon Hill viewpoint (3,210m) with the Annapurna and Dhaulagiri ranges as a constant backdrop. Perfect for first-time trekkers.',
    days: 3,
    activities: ['TREKKING'],
    budget: 'BUDGET',
    difficulty: 'MODERATE',
    provinces: ['GANDAKI'],
    heroImage: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80',
    highlights: [
      'Poon Hill (3,210m) — sunrise over 12 Himalayan peaks',
      'Rhododendron forests in full bloom (March–April)',
      'Ghorepani village and classic teahouse trekking culture',
      'Views of Dhaulagiri (8,167m) and Annapurna South',
    ],
    startLocation: 'Nayapul (Pokhara)',
    endLocation: 'Nayapul (Pokhara)',
    featured: true,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Nayapul → Tikhedunga → Ulleri',
        description: `**Morning — Drive to Nayapul**\n\nTaxi or bus from Pokhara to Nayapul (1.5 hours). Get your TIMS card and ACAP permit in Pokhara before departure.\n\n**Trek: Nayapul (1,070m) → Tikhedunga (1,540m) → Ulleri (1,960m)**\n\nStart walking from Nayapul along the Modi Khola river valley. The trail passes through Birethanti (checkpoint) and the charming village of Tikhedunga before the infamous **Ulleri stone staircase** — 3,280 steps climbing 420m in 45 minutes. Hard but worth it. Total walking: 5–6 hours, 14 km.`,
        accommodation: 'Teahouse in Ulleri',
        meals: 'Lunch at Tikhedunga; dinner at Ulleri teahouse',
        distanceKm: 14,
        maxElevation: 1960,
      },
      {
        day: 2,
        title: 'Ulleri → Ghorepani → Poon Hill Sunset',
        description: `**Trek: Ulleri (1,960m) → Banthanti → Nangethanti → Ghorepani (2,860m)**\n\nThe trail climbs through magnificent rhododendron and oak forest. Between March and May the rhododendrons are in full crimson bloom — one of Nepal's most beautiful forest walks. Arrive at Ghorepani by midday. Rest and acclimatize.\n\n**Afternoon — Optional Poon Hill Sunset**\n\nIf the sky is clear, walk up to Poon Hill (45 min) for afternoon/sunset views. The viewpoint at 3,210m has an extraordinary panorama of Dhaulagiri, Tukuche, Nilgiri, Annapurna South, Hiunchuli, and Machhapuchhre. Total walking: 4–5 hours, 10 km.`,
        accommodation: 'Teahouse in Ghorepani',
        meals: 'Breakfast at Ulleri; lunch at trail teahouse; dinner at Ghorepani',
        distanceKm: 10,
        maxElevation: 2860,
      },
      {
        day: 3,
        title: 'Poon Hill Sunrise → Descent to Nayapul',
        description: `**Dawn (5:00 AM) — Poon Hill Sunrise**\n\nRise at 4:30 AM and hike 45 minutes by headlamp to Poon Hill (3,210m). Watch the sun rise behind Dhaulagiri (8,167m) and then illuminate the entire Annapurna range from east to west. One of the greatest sunrise experiences in the Himalayas.\n\n**Morning — Descent via Tadapani or direct**\n\nOption A (direct, 4 hours): Return to Nayapul via Ulleri the same way.\nOption B (scenic, 5–6 hours): Descend via Tadapani and Ghandruk village (a large Gurung village with mountain views), adding 2 extra hours but much more scenery.\n\n**Afternoon — Return to Pokhara**\n\nBus or taxi back to Pokhara (1.5 hours). Shower, celebrate with a well-earned cold beer and the Annapurna range in view.`,
        accommodation: 'Return to Pokhara',
        meals: 'Breakfast at Ghorepani; trail lunch; dinner in Pokhara',
        distanceKm: 14,
        maxElevation: 3210,
      },
    ],
  },

  {
    slug: 'nepal-spiritual-pilgrimage-mini-3-days',
    title: 'Nepal Spiritual Mini-Pilgrimage — 3 Days',
    excerpt: 'For the spiritually-minded traveller: three days connecting the sacred geography of Nepal — Hindu fire temples, Buddhist stupas, hilltop shrines, and a sacred lake that draws pilgrims from across the subcontinent.',
    days: 3,
    activities: ['SPIRITUAL'],
    budget: 'BUDGET',
    difficulty: 'EASY',
    provinces: ['BAGMATI', 'GANDAKI'],
    heroImage: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1200&q=80',
    highlights: [
      'Pashupatinath — Nepal\'s holiest Hindu temple',
      'Muktinath Temple — sacred to both Hindus and Buddhists',
      'Manakamana Temple by cable car — wish-granting goddess',
      'Gosaikunda Lake — sacred alpine lake at 4,380m',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Kathmandu',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Kathmandu Sacred Sites',
        description: `**Morning — Pashupatinath Temple**\n\nNepal's most important Hindu shrine. Arrive at 7 AM for morning puja. Watch sadhus (holy men) in orange robes, cremation ghats, and devotional offerings. Spend 2 hours exploring the complex.\n\n**Midday — Boudhanath to Swayambhunath**\n\nBuddhist counterpart: the great Boudhanath Stupa with its monk community and prayer wheel kora. Then Swayambhunath for the afternoon — Hindu-Buddhist synthesis temple on a forested hill above the valley.\n\n**Evening — Puja at a local temple**\n\nAttend evening aarti (fire puja) at Pashupatinath (6:30 PM) or find a neighbourhood temple for a more intimate experience of daily Nepali devotion.`,
        accommodation: 'Hotel in Thamel',
        meals: 'Breakfast before departure; lunch in Boudha; dinner in Thamel',
      },
      {
        day: 2,
        title: 'Manakamana Temple & Drive West',
        description: `**Morning — Manakamana Cable Car**\n\n120 km west of Kathmandu on the Prithvi Highway (3 hours by bus). The Manakamana Temple sits on a ridge at 1,302m, accessible by Nepal's first cable car. The goddess Bhagwati is believed to grant wishes — the temple receives tens of thousands of pilgrims weekly. Goats are traditionally sacrificed; the atmosphere is intense and authentic Hindu pilgrimage culture at its rawest.\n\n**Afternoon — Continue to Pokhara or Muktinath**\n\nOption A: Continue to Pokhara for the night (2 more hours west).\nOption B: If on a Muktinath pilgrimage, continue to Beni for next-day transport.`,
        accommodation: 'Hotel in Pokhara',
        meals: 'Breakfast at Kathmandu; snacks at Manakamana; dinner in Pokhara',
      },
      {
        day: 3,
        title: 'Pokhara Sacred Sites & Return',
        description: `**Morning — Bindhyabasini Temple & Barahi Temple**\n\nBindhyabasini Temple on the hilltop above Pokhara is the city's oldest and most important temple — a 5-minute walk from the old bazaar with good views. Then row to the Tal Barahi island temple on Phewa Lake.\n\n**Afternoon — Devi's Fall & Gupteshwor Cave**\n\nDavis Falls (Patale Chhango) is believed to be the home of an underground deity. Gupteshwor Cave has a massive Shivalinga inside and pilgrims come year-round.\n\n**Evening — Return to Kathmandu**\n\nFly back from Pokhara (25 min) or overnight bus.`,
        accommodation: 'Return to Kathmandu',
        meals: 'Breakfast in Pokhara; lunch at lakeside; dinner at hotel or en route',
      },
    ],
  },

  {
    slug: 'everest-lukla-to-namche-3-days',
    title: 'Everest Region Intro — Lukla to Namche Bazaar (3 Days)',
    excerpt: 'A taste of the Everest region without committing to the full EBC trek — fly to Lukla and hike to Namche Bazaar (3,440m), the "gateway to Everest," for stunning mountain views and classic Sherpa culture.',
    days: 3,
    activities: ['TREKKING'],
    budget: 'MIDRANGE',
    difficulty: 'MODERATE',
    provinces: ['KOSHI'],
    heroImage: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=1200&q=80',
    highlights: [
      'The legendary Lukla airport landing (one of the world\'s most thrilling)',
      'Sagarmatha National Park entry and first mountain views',
      'Namche Bazaar — the Sherpa capital at 3,440m',
      'Views of Everest, Lhotse, and Ama Dablam from Namche ridge',
    ],
    startLocation: 'Lukla (fly from Kathmandu)',
    endLocation: 'Lukla (fly back)',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Fly to Lukla → Trek to Phakding',
        description: `**Morning — Flight to Lukla (2,840m)**\n\nEarly morning flight from Kathmandu's Tribhuvan Airport to Tenzing-Hillary Airport in Lukla (~30 min). The landing approach into the short uphill runway framed by mountains is one of aviation's most famous moments.\n\n**Trek: Lukla → Chaurikharka → Phakding (2,652m)**\n\nGradual descent through pine forest and Sherpa villages. Cross suspension bridges over the Dudh Koshi River. First views of Kusum Kanguru (6,367m). Arrive at Phakding for the night. Walking: 3–4 hours, 9 km.`,
        accommodation: 'Teahouse in Phakding',
        meals: 'Breakfast before flight; lunch at trail teahouse; dinner at Phakding',
        distanceKm: 9,
        maxElevation: 2840,
      },
      {
        day: 2,
        title: 'Phakding → Namche Bazaar',
        description: `**Trek: Phakding (2,652m) → Monjo → Namche Bazaar (3,440m)**\n\nThe day's highlight is the final 700m climb to Namche on a steep, forested zigzag trail. Before the final climb, pass through the Sagarmatha National Park entrance (TIMS and park permit required). On the upper part of the ascent, catch the first view of Everest (8,849m) framing itself above the ridge. Arrive at Namche Bazaar — a horseshoe-shaped market town built into a steep hillside. Walking: 5–6 hours, 11 km.`,
        accommodation: 'Teahouse in Namche Bazaar',
        meals: 'Breakfast at Phakding; lunch en route; dinner at Namche',
        distanceKm: 11,
        maxElevation: 3440,
      },
      {
        day: 3,
        title: 'Namche Acclimatization & Return to Lukla',
        description: `**Morning — Namche Acclimatization Hike**\n\nClimb to the Everest View Hotel ridge (3,880m) above Namche for the day's best views: Everest, Lhotse, Nuptse, Ama Dablam, Thamserku. The Everest View Hotel is the world's highest-altitude hotel and its terrace offers a classic panorama.\n\n**Midday — Namche Bazaar**\n\nExplore Namche's Saturday market (largest in the Khumbu), the Sherpa Culture Museum, and the network of bakeries, gear shops, and expedition cafés.\n\n**Afternoon — Return Trek to Phakding or Lukla**\n\nBegin the return walk to Lukla (6–7 hours downhill) for an early morning flight the next day, or stop at Phakding overnight (Day 4 optional). Fly back to Kathmandu for same-day return.`,
        accommodation: 'Teahouse in Phakding or Lukla (night before flight)',
        meals: 'Breakfast at Namche; trail lunch; dinner at teahouse',
        distanceKm: 18,
        maxElevation: 3880,
      },
    ],
  },

  {
    slug: 'kathmandu-food-culture-3-days',
    title: 'Kathmandu Food, Art & Hidden Courtyards — 3 Days',
    excerpt: 'Beyond the tourist trail: three days discovering Kathmandu through its cuisine, living artisan traditions, hidden bahal courtyards, rooftop restaurants, and the Nepal that doesn\'t make the postcards.',
    days: 3,
    activities: ['CULTURAL'],
    budget: 'MIDRANGE',
    difficulty: 'EASY',
    provinces: ['BAGMATI'],
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80',
    highlights: [
      'Asan and Indra Chowk spice market — unchanged for 700 years',
      'Cooking class: make daal bhat, momos, and Newari dishes',
      'Hidden bahal (monastery courtyards) only locals know',
      'Thangka painting workshop and handmade paper arts district',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Kathmandu',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Old Bazaars, Spice Markets & Cooking Class',
        description: `**Morning — Asan Bazaar & Old City Walk**\n\nBegin at Asan Chowk, where six streets converge at a 15th-century grain market. It's still a bustling bazaar with wholesale spice, dried fruit, and hardware merchants. Walk through the network of medieval streets to Indra Chowk, Makhan Tole, and the bead sellers of Thamel.\n\n**Afternoon — Newari Cooking Class**\n\nSeveral Kathmandu restaurants offer 3-hour Newari cooking classes: learn to make **momo** dumplings, **chatamari** (rice crepe), **yomari** (steamed rice dumplings), and the classic **daal bhat** set. Eat what you cook for lunch.\n\n**Evening — Rooftop Dinner**\n\nThamel has excellent rooftop restaurants with views over the old city. End the evening at a music venue or garden restaurant.`,
        accommodation: 'Boutique hotel in Thamel or Patan',
        meals: 'Street breakfast at Asan; cooking class lunch; dinner on rooftop',
      },
      {
        day: 2,
        title: 'Hidden Courtyards, Thangka Art & Pottery',
        description: `**Morning — Itum Bahal & Hidden Courtyards**\n\nWith a local guide, explore the bahals (monastery courtyards) tucked into the medieval city that 95% of tourists never find: Itum Bahal (Kathmandu's largest), Kwa Bahal (Golden Temple area), and the Seto Machhendranath temple complex with its living-goddess tradition.\n\n**Afternoon — Thangka Painting Workshop**\n\nThangka art (sacred Buddhist scroll paintings) is a living tradition. Visit a workshop in Boudha or Thamel — most will let you try your hand at the intricate brushwork while a master explains the iconography. Quality thangkas for purchase start at USD 50.\n\n**Evening — Swayambhunath Sunset**\n\nEnds the day at Swayambhunath for golden hour on the stupa — often less crowded in the early evening than during the day.`,
        accommodation: 'Same hotel',
        meals: 'Street food breakfast; light lunch at workshop; dinner near Swayambhunath',
      },
      {
        day: 3,
        title: 'Patan Museum, Craft Breweries & Departure',
        description: `**Morning — Patan Museum**\n\nTake a taxi to Patan for the finest museum in Nepal — its collection of religious bronzes, woodwork, and masks is superbly curated. Budget 2 hours.\n\n**Midday — Craft Beer Lunch**\n\nKathmandu has a surprisingly good craft beer scene. Several Thamel breweries make Himalayan IPAs and wheat beers. Pair with a Nepali lunch thali.\n\n**Afternoon — Freak Street & Souvenir Shopping**\n\nFreak Street (Jhoche Tole) is where Kathmandu's 1970s hippie trail ended — still atmospheric with its old shopfronts. Buy pashmina, handmade paper, hand-stamped metalwork, and carved wooden masks to take home.\n\n**Evening — Departure or extend**\n\nDepart from Tribhuvan International Airport or extend your stay.`,
        accommodation: 'Hotel in Thamel or airport area',
        meals: 'Breakfast at hotel; lunch at craft brewery; snacks shopping',
      },
    ],
  },

  {
    slug: 'annapurna-foothills-village-trek-3-days',
    title: 'Annapurna Foothills Village Trek — 3 Days',
    excerpt: 'A gentle trek through Gurung and Magar villages in the Annapurna foothills — terraced fields, rhododendron forest, the classic view of Machhapuchhre, and genuine teahouse hospitality.',
    days: 3,
    activities: ['TREKKING', 'CULTURAL'],
    budget: 'BUDGET',
    difficulty: 'MODERATE',
    provinces: ['GANDAKI'],
    heroImage: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80',
    highlights: [
      'Machhapuchhre (Fishtail) mountain close-up views',
      'Traditional Gurung villages — Landruk and Ghandruk',
      'Rhododendron and bamboo forest trails',
      'Annapurna Conservation Area wildlife',
    ],
    startLocation: 'Phedi (Pokhara)',
    endLocation: 'Nayapul (Pokhara)',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Phedi → Dhampus → Landruk',
        description: `**Morning — Drive to Phedi (1,130m)**\n\nTaxi from Pokhara to Phedi (30 min). Register at the ACAP checkpoint.\n\n**Trek: Phedi → Dhampus (1,650m) → Australian Camp (2,060m) → Landruk (1,565m)**\n\nClimb through forest to Dhampus — first village with excellent Annapurna range views. Continue to Australian Camp (named by Australian aid workers) with panoramic views from a wide meadow. Descend through terraced farmland to Landruk. 5–6 hours, 14 km.`,
        accommodation: 'Teahouse in Landruk',
        meals: 'Breakfast at Pokhara; trail lunch; dinner at Landruk',
        distanceKm: 14,
        maxElevation: 2060,
      },
      {
        day: 2,
        title: 'Landruk → Ghandruk',
        description: `**Trek: Landruk (1,565m) → New Bridge → Ghandruk (1,940m)**\n\nDescend to the Modi Khola River valley then climb back up to Ghandruk — the largest Gurung village in Nepal and one of the most scenic in the Annapurna region. The views of Machhapuchhre (6,993m), Annapurna South, and Hiunchuli are outstanding from the village. Visit the Gurung museum and community library. 4–5 hours, 9 km.`,
        accommodation: 'Teahouse in Ghandruk',
        meals: 'Breakfast at Landruk; trail lunch; dinner at Ghandruk',
        distanceKm: 9,
        maxElevation: 1940,
      },
      {
        day: 3,
        title: 'Ghandruk → Nayapul → Pokhara',
        description: `**Morning — Sunrise views from Ghandruk**\n\nWake early for the sunrise on the Annapurna range from Ghandruk's viewing spots. The Gurung women weave and the children go to school as the mountains glow.\n\n**Trek: Ghandruk (1,940m) → Kimche → Syauli Bazaar → Nayapul (1,070m)**\n\nDescend through forest and rice terraces to the Modi Khola valley and Nayapul. 3–4 hours, 10 km.\n\n**Afternoon — Return to Pokhara**\n\nBus or taxi from Nayapul to Pokhara (1.5 hours). Shower and celebrate.`,
        accommodation: 'Return to Pokhara hotel',
        meals: 'Breakfast at Ghandruk; trail lunch; dinner in Pokhara',
        distanceKm: 10,
        maxElevation: 1940,
      },
    ],
  },

  {
    slug: 'nepal-family-fun-3-days',
    title: 'Nepal Family Fun — 3 Days',
    excerpt: 'Nepal with kids: elephant encounters, boating on a Himalayan lake, a zip-line, pottery workshops, and the thrill of watching rhinos from a safari jeep — all at an easy pace with comfortable accommodation.',
    days: 3,
    activities: ['WILDLIFE', 'CULTURAL'],
    budget: 'MIDRANGE',
    difficulty: 'EASY',
    provinces: ['BAGMATI', 'GANDAKI'],
    heroImage: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&q=80',
    highlights: [
      'Elephant encounters at Chitwan Elephant Breeding Centre',
      'Rowboat on Phewa Lake with mountain backdrop',
      'Pottery workshop for kids in Bhaktapur',
      'Rapti River canoe and rhino spotting',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Pokhara',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Kathmandu: Kids\' Temples & Pottery',
        description: `**Morning — Swayambhunath (Monkey Temple)**\n\nKids love the 200+ monkeys that live on the hill. Climb the steps, feed (don't — but they will) the monkeys, and enjoy the panorama.\n\n**Afternoon — Bhaktapur Pottery Square**\n\nThe Bhaktapur pottery square is one of Nepal's most child-friendly activities. Kids can try their hand at the pottery wheel with patient local craftsmen who are used to young visitors. Buy a small pot to take home.\n\n**Evening — Thamel**\n\nWander Thamel's colourful streets. Ice cream and momos for dinner.`,
        accommodation: 'Family hotel in Thamel',
        meals: 'Breakfast at hotel; street food lunch; dinner in Thamel',
      },
      {
        day: 2,
        title: 'Chitwan: Elephants, Rhinos & Canoe',
        description: `**Morning — Drive to Chitwan (5–6 hours)**\n\nTourist bus from Kathmandu to Sauraha — reclining seats and stops at scenic viewpoints.\n\n**Afternoon — Elephant Breeding Centre**\n\nThe National Trust's Elephant Breeding Centre is perfect for families. See elephant calves up close with handlers. Educational and very exciting for children.\n\n**Late Afternoon — Canoe Safari**\n\nFamily canoe ride on the Rapti River — spot crocodiles on the banks and birds in the trees. Calm, safe, and thrilling.`,
        accommodation: 'Family jungle lodge in Sauraha',
        meals: 'Lunch on bus; dinner at lodge',
      },
      {
        day: 3,
        title: 'Chitwan Jeep Safari → Pokhara',
        description: `**Dawn — Jeep Safari (Child-friendly)**\n\nMorning Jeep safari — children 5+ welcome. Seeing wild rhinos from a jeep is unforgettable for kids (and adults). The open-top jeep, forest sounds, and sudden rhino encounters create lifelong memories.\n\n**Midday — Drive to Pokhara (3 hours)**\n\nScenic Prithvi Highway drive past the Marsyangdi River gorge.\n\n**Afternoon — Pokhara Lake Rowboat**\n\nCalm afternoon rowing on Phewa Lake. Kids can take the oars. Row to the Tal Barahi island temple and back.`,
        accommodation: 'Lakeside family hotel, Pokhara',
        meals: 'Breakfast at lodge; lunch en route; dinner at Pokhara',
        distanceKm: 20,
      },
    ],
  },
]

async function main() {
  console.log('🌏 Seeding Batch 2 — 3-day itineraries...\n')
  let created = 0
  let skipped = 0

  for (const { dayPlans, ...data } of ITINERARIES) {
    const exists = await prisma.itinerary.findUnique({ where: { slug: data.slug } })
    if (exists) {
      console.log(`  ⏭  Skipped (already exists): ${data.slug}`)
      skipped++
      continue
    }

    await prisma.itinerary.create({
      data: {
        ...data,
        publishedAt: data.published ? new Date() : null,
        dayPlans: {
          create: dayPlans.map((dp, i) => ({ ...dp, order: i })),
        },
      },
    })
    console.log(`  ✓  Created: ${data.title}`)
    created++
  }

  console.log(`\n✅ Batch 2 done — ${created} created, ${skipped} skipped`)
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
