/**
 * Batch 4 of 5 — 7-day itineraries (10 total)
 * Run from backend/: node prisma/seed-itineraries-batch4.js
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ITINERARIES = [
  {
    slug: 'nepal-classic-triangle-7-days',
    title: 'Nepal Classic Triangle — Kathmandu, Pokhara & Chitwan (7 Days)',
    excerpt: 'The definitive Nepal itinerary that covers everything: UNESCO heritage in Kathmandu, lakeside paradise in Pokhara, and jungle wildlife in Chitwan — the three experiences every first-time visitor should have.',
    days: 7,
    activities: ['CULTURAL', 'WILDLIFE', 'RELAXATION'],
    budget: 'MIDRANGE',
    difficulty: 'EASY',
    provinces: ['BAGMATI', 'GANDAKI'],
    heroImage: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1200&q=80',
    highlights: [
      'Pashupatinath, Boudhanath, Patan, and Bhaktapur',
      'Sarangkot sunrise and paragliding over Phewa Lake',
      'Chitwan rhino jeep safari and canoe ride',
      'Three UNESCO World Heritage landscapes in one trip',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Kathmandu',
    featured: true,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Kathmandu Arrival & Spiritual Introduction',
        description: `Arrive Kathmandu. Afternoon at Pashupatinath (evening aarti at 6:30 PM), then taxi to Boudhanath Stupa for the stunning illuminated stupa at dusk. Dinner in Thamel.`,
        accommodation: 'Hotel in Thamel',
        meals: 'Dinner in Thamel',
      },
      {
        day: 2,
        title: 'Swayambhunath & Kathmandu Durbar Square',
        description: `**Morning** — Swayambhunath for golden-hour views and monkey encounters.\n\n**Afternoon** — Kathmandu Durbar Square (Hanuman Dhoka, Kumari courtyard, Taleju Temple). Walk through Indra Chowk and Asan Bazaar.`,
        accommodation: 'Hotel in Thamel',
        meals: 'All meals',
      },
      {
        day: 3,
        title: 'Patan & Bhaktapur',
        description: `**Morning** — Patan (Durbar Square, Patan Museum, Golden Temple). **Afternoon** — Bhaktapur (55-Window Palace, Nyatapola Temple, pottery square, juju dhau). Return to Kathmandu evening.`,
        accommodation: 'Hotel in Thamel',
        meals: 'All meals',
      },
      {
        day: 4,
        title: 'Drive to Chitwan — Jungle Arrival',
        description: `Tourist bus Kathmandu → Sauraha (5–6 hours). Afternoon: **canoe safari** on the Rapti River. Evening: **Tharu cultural programme** (stick dance and folk music).`,
        accommodation: 'Jungle lodge, Sauraha',
        meals: 'Breakfast in Kathmandu; dinner at lodge',
      },
      {
        day: 5,
        title: 'Chitwan Full Safari Day',
        description: `**Dawn (5:30 AM)** — Jeep safari into the national park core zone (4 hours). **Mid-morning** — Elephant Breeding Centre. **Afternoon** — Walking safari with armed guide. **Evening** — Canoe sunset on the river.`,
        accommodation: 'Jungle lodge, Sauraha',
        meals: 'All meals at lodge',
        distanceKm: 20,
      },
      {
        day: 6,
        title: 'Chitwan → Pokhara',
        description: `**Morning** — Final bird walk at dawn. **Late morning** — Drive to Pokhara (3–4 hours along the Prithvi Highway). Check in to a Lakeside hotel. **Afternoon** — Rowboat on Phewa Lake to the island temple. **Evening** — Sunset at the World Peace Pagoda.`,
        accommodation: 'Lakeside hotel, Pokhara',
        meals: 'Breakfast at lodge; lunch en route; dinner at Pokhara Lakeside',
      },
      {
        day: 7,
        title: 'Sarangkot Sunrise, Paragliding & Departure',
        description: `**Pre-dawn** — Sarangkot sunrise (5 AM) — the full Annapurna range illuminated.\n\n**Morning** — Tandem paragliding over Phewa Lake.\n\n**Afternoon** — Flight or bus back to Kathmandu for international connections.`,
        accommodation: 'Depart from Pokhara or Kathmandu',
        meals: 'Breakfast at viewpoint; lunch at Lakeside; depart',
      },
    ],
  },

  {
    slug: 'annapurna-poon-hill-7-days',
    title: 'Annapurna Poon Hill & Ghandruk Loop — 7 Days',
    excerpt: 'The complete Annapurna foothills loop at a comfortable pace — Poon Hill sunrise, Ghandruk Gurung village, Tadapani forest trails, and a rewarding hot spring finish. Nepal\'s most popular trek done right.',
    days: 7,
    activities: ['TREKKING'],
    budget: 'BUDGET',
    difficulty: 'MODERATE',
    provinces: ['GANDAKI'],
    heroImage: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80',
    highlights: [
      'Poon Hill (3,210m) — sunrise over Dhaulagiri and Annapurna',
      'Ghandruk — Nepal\'s most scenic Gurung village',
      'Hot spring bath at Jhinu Danda after trekking',
      'Rhododendron forest in full bloom (March–April)',
    ],
    startLocation: 'Nayapul (Pokhara)',
    endLocation: 'Nayapul (Pokhara)',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Pokhara → Nayapul → Tikhedunga',
        description: `Permits in Pokhara. Drive to Nayapul. Trek: Nayapul → Birethanti → Tikhedunga (1,540m). Gentle river walk. 3 hours, 8 km.`,
        accommodation: 'Teahouse, Tikhedunga', meals: 'Trail meals', distanceKm: 8, maxElevation: 1540,
      },
      {
        day: 2, title: 'Tikhedunga → Ulleri → Ghorepani',
        description: `Ulleri stone staircase (3,280 steps), then rhododendron forest to Ghorepani (2,860m). 5–6 hours, 13 km.`,
        accommodation: 'Teahouse, Ghorepani', meals: 'Trail meals', distanceKm: 13, maxElevation: 2860,
      },
      {
        day: 3, title: 'Poon Hill Sunrise → Tadapani',
        description: `Dawn climb to Poon Hill (3,210m) for the iconic Himalayan sunrise. After breakfast: ridgeline trek through rhododendron forest to Tadapani (2,590m). 4–5 hours, 10 km.`,
        accommodation: 'Teahouse, Tadapani', meals: 'Trail meals', distanceKm: 10, maxElevation: 3210,
      },
      {
        day: 4, title: 'Tadapani → Ghandruk',
        description: `Forest descent to Ghandruk (1,940m) — largest Gurung village in Nepal, incredible Annapurna South and Machhapuchhre views. Explore the village, Gurung Museum, and weaving cooperatives. 3–4 hours, 7 km.`,
        accommodation: 'Teahouse, Ghandruk', meals: 'Trail meals', distanceKm: 7, maxElevation: 2590,
      },
      {
        day: 5, title: 'Ghandruk → Chhomrong',
        description: `Trek north to Chhomrong (2,170m) — gateway to the Annapurna Sanctuary with views of Annapurna South directly overhead. 4–5 hours, 9 km.`,
        accommodation: 'Teahouse, Chhomrong', meals: 'Trail meals', distanceKm: 9, maxElevation: 2170,
      },
      {
        day: 6, title: 'Chhomrong → Jhinu Danda Hot Springs → Nayapul',
        description: `Descend via Jhinu Danda — natural hot springs where trekkers soak aching muscles beside the Modi Khola River. Continue to Nayapul. 5–6 hours, 14 km.`,
        accommodation: 'Pokhara hotel', meals: 'Trail meals; dinner in Pokhara', distanceKm: 14, maxElevation: 2170,
      },
      {
        day: 7, title: 'Pokhara Rest Day & Departure',
        description: `Rest day in Pokhara: Phewa Lake rowboat, International Mountain Museum, lakeside cafés. Evening flight or bus back to Kathmandu.`,
        accommodation: 'Depart from Pokhara', meals: 'All meals',
      },
    ],
  },

  {
    slug: 'langtang-valley-7-days',
    title: 'Langtang Valley Trek — 7 Days',
    excerpt: 'Often overlooked in favour of Annapurna and Everest, Langtang rewards with dramatic glacial valleys, traditional Tamang villages, yak pastures, and the most accessible high-altitude trek from Kathmandu.',
    days: 7,
    activities: ['TREKKING', 'CULTURAL'],
    budget: 'BUDGET',
    difficulty: 'MODERATE',
    provinces: ['BAGMATI'],
    heroImage: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80',
    highlights: [
      'Kyanjin Gompa (3,870m) — ancient monastery under Langtang Lirung',
      'Kyanjin Ri (4,773m) viewpoint — Langtang range panorama',
      'Traditional Tamang villages and yak-herding culture',
      'Fresh yak cheese from the Kyanjin Ri cheese factory',
    ],
    startLocation: 'Syabrubesi (Kathmandu)',
    endLocation: 'Syabrubesi (Kathmandu)',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Kathmandu → Syabrubesi',
        description: `Drive from Kathmandu to Syabrubesi (2,240m): 7–8 hours by local bus or 6 hours by private jeep along the Trishuli River valley. Check in at guesthouse. Get TIMS and Langtang National Park permits before departure.`,
        accommodation: 'Guesthouse, Syabrubesi', meals: 'Breakfast in Kathmandu; dinner at guesthouse', distanceKm: 120,
      },
      {
        day: 2, title: 'Syabrubesi → Lama Hotel',
        description: `Trek through the Langtang River gorge and dense sub-tropical forest. Pass Bamboo (1,960m) and Riverside. Arrive Lama Hotel (2,380m). 5–6 hours, 14 km.`,
        accommodation: 'Teahouse, Lama Hotel', meals: 'Trail meals', distanceKm: 14, maxElevation: 2380,
      },
      {
        day: 3, title: 'Lama Hotel → Langtang Village',
        description: `Forest opens to high alpine pastures. Pass Ghora Tabela (former army camp, 3,030m). Arrive Langtang Village (3,430m) — rebuilt after the devastating 2015 earthquake avalanche. Memorial chorten for the 250 lives lost. 5–6 hours, 12 km.`,
        accommodation: 'Teahouse, Langtang Village', meals: 'Trail meals', distanceKm: 12, maxElevation: 3430,
      },
      {
        day: 4, title: 'Langtang → Kyanjin Gompa',
        description: `Short day through yak pastures and glacial moraines to Kyanjin Gompa (3,870m). The monastery is centuries old; the cheese factory makes fresh yak cheese sold to lodges across Nepal. Afternoon acclimatisation walk. 3 hours, 7 km.`,
        accommodation: 'Teahouse, Kyanjin Gompa', meals: 'Trail meals', distanceKm: 7, maxElevation: 3870,
      },
      {
        day: 5, title: 'Kyanjin Ri Summit Day',
        description: `**Acclimatisation summit** (optional): Kyanjin Ri (4,773m) — a 3–4 hour scramble from the gompa with one of the finest views in Nepal: Langtang Lirung (7,227m), Gangchenpo, Shishapangma (Tibet), and the entire Langtang range. Return to Kyanjin for yak steak dinner.`,
        accommodation: 'Teahouse, Kyanjin Gompa', meals: 'Trail meals', distanceKm: 8, maxElevation: 4773,
      },
      {
        day: 6, title: 'Kyanjin → Lama Hotel (Descent)',
        description: `Long descent back through the valley to Lama Hotel. The downhill is rapid through the forest gorge — knees require care. 5–6 hours, 19 km.`,
        accommodation: 'Teahouse, Lama Hotel', meals: 'Trail meals', distanceKm: 19, maxElevation: 3870,
      },
      {
        day: 7, title: 'Lama Hotel → Syabrubesi → Kathmandu',
        description: `Final descent to Syabrubesi (3–4 hours). Late morning jeep or afternoon bus back to Kathmandu (6–7 hours). Arrive Kathmandu evening.`,
        accommodation: 'Hotel in Kathmandu or depart', meals: 'Trail breakfast; dinner in Kathmandu', distanceKm: 14,
      },
    ],
  },

  {
    slug: 'spiritual-nepal-grand-tour-7-days',
    title: 'Spiritual Nepal Grand Tour — 7 Days',
    excerpt: 'A complete pilgrimage through Nepal\'s sacred geography: from the Hindu fire temples of Kathmandu to the Buddhist birthplace at Lumbini, the Muktinath sky-temple in the Himalayas, and Gosaikunda\'s sacred alpine lake.',
    days: 7,
    activities: ['SPIRITUAL', 'CULTURAL'],
    budget: 'MIDRANGE',
    difficulty: 'MODERATE',
    provinces: ['BAGMATI', 'GANDAKI', 'LUMBINI'],
    heroImage: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1200&q=80',
    highlights: [
      'Pashupatinath — Nepal\'s most sacred Hindu site',
      'Muktinath Temple (3,710m) — sacred to both Hindu and Buddhist',
      'Lumbini — exact birthplace of the Buddha',
      'Manakamana — wish-granting goddess temple by cable car',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Kathmandu',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Kathmandu Sacred Circuit',
        description: `Pashupatinath (morning), Boudhanath (midday kora), Swayambhunath (sunset). Evening puja at Pashupatinath.`,
        accommodation: 'Hotel in Thamel', meals: 'All meals',
      },
      {
        day: 2, title: 'Manakamana & Drive to Pokhara',
        description: `Morning bus to Manakamana cable car (3 hours from Kathmandu). Ride the cable car to the wish-granting goddess temple (1,302m). Return and continue to Pokhara (2 more hours). Arrive Lakeside evening.`,
        accommodation: 'Hotel in Pokhara', meals: 'Breakfast in Kathmandu; dinner in Pokhara',
      },
      {
        day: 3, title: 'Fly to Jomsom → Trek to Muktinath',
        description: `Early morning flight: Pokhara → Jomsom (2,720m). Trek Jomsom → Kagbeni → Muktinath (3,710m). Muktinath is one of the most sacred pilgrimage sites in Asia — 108 water spouts sacred to both Hindus and Buddhists, an eternal flame fed by natural gas, and the Vishnu temple. 6–7 hours trek.`,
        accommodation: 'Guesthouse, Muktinath', meals: 'Trail meals', distanceKm: 22, maxElevation: 3710,
      },
      {
        day: 4, title: 'Muktinath Rituals & Return to Jomsom',
        description: `**Early morning** — Ritual bath in the 108 water spouts at Muktinath (3:30 AM is most sacred; dawn is more practical). Visit the Jwala Mai temple (eternal gas flame). Descend to Jomsom. Afternoon flight to Pokhara.`,
        accommodation: 'Hotel in Pokhara', meals: 'Trail meals; dinner in Pokhara', distanceKm: 22,
      },
      {
        day: 5, title: 'Pokhara Sacred Sites',
        description: `Bindhyabasini Temple (hilltop, oldest temple in Pokhara), Tal Barahi island temple (rowboat across Phewa Lake), Devi's Falls and Gupteshwor Cave. Evening meditation at the World Peace Pagoda.`,
        accommodation: 'Hotel in Pokhara', meals: 'All meals',
      },
      {
        day: 6, title: 'Fly to Kathmandu → Bus to Lumbini',
        description: `Morning flight to Kathmandu. Afternoon bus to Bhairahawa (6 hours). Evening arrival and check-in at Lumbini monastery guesthouse.`,
        accommodation: 'Monastery guesthouse, Lumbini', meals: 'Breakfast in Pokhara; dinner at guesthouse',
      },
      {
        day: 7, title: 'Lumbini Pilgrimage',
        description: `Full day: Sacred Garden (Maya Devi Temple, Ashoka Pillar), both monastery zones (Eastern and Western), Lumbini Museum. Meditation at dawn and dusk. Return to Bhairahawa for flight or bus back to Kathmandu.`,
        accommodation: 'Return to Kathmandu', meals: 'Vegetarian meals at guesthouse',
      },
    ],
  },

  {
    slug: 'nepal-adventure-week-7-days',
    title: 'Nepal Adventure Week — 7 Days',
    excerpt: 'Seven consecutive days of Nepal\'s finest adventure activities: bungee, rafting, mountain biking, trekking, paragliding, zip-lining, and a canyon swing — the ultimate adrenaline tour.',
    days: 7,
    activities: ['ADVENTURE', 'TREKKING'],
    budget: 'MIDRANGE',
    difficulty: 'HARD',
    provinces: ['BAGMATI', 'GANDAKI'],
    heroImage: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80',
    highlights: [
      'Bhote Koshi bungee (160m) and canyon swing',
      'Trisuli and Seti River white-water rafting',
      'Three-day Annapurna Poon Hill trek',
      'Paragliding and world-class zip-line in Pokhara',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Pokhara',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Bhote Koshi Bungee & Canyon Swing',
        description: `Drive 90 km north to Bhote Koshi gorge. Bungee (160m free fall, USD 90) in the morning. **Canyon swing** in the afternoon (USD 65) — swings you out over the gorge at 150 km/h. Return to Kathmandu evening.`,
        accommodation: 'Hotel in Thamel', meals: 'All meals',
      },
      {
        day: 2, title: 'Trisuli River Rafting → Pokhara',
        description: `Full-day Trisuli River rafting (Grade III–IV, USD 45 with lunch). The river runs alongside the Prithvi Highway so the route doubles as the drive to Pokhara. Arrive Pokhara Lakeside evening.`,
        accommodation: 'Lakeside hotel, Pokhara', meals: 'Breakfast in Kathmandu; lunch on river; dinner at Pokhara',
        distanceKm: 50,
      },
      {
        day: 3, title: 'Sarangkot Sunrise → Paragliding → Zip-line',
        description: `5 AM Sarangkot sunrise. Tandem paragliding (USD 85). Afternoon: Hemja zip-line (1.8 km at 140 km/h, USD 55). Evening recovery at Lakeside.`,
        accommodation: 'Lakeside hotel, Pokhara', meals: 'All meals',
      },
      {
        day: 4, title: 'Pokhara → Nayapul → Tikhedunga (Trek Day 1)',
        description: `Begin the Poon Hill trek. Drive to Nayapul, walk to Tikhedunga (1,540m). 3 hours, 8 km. Simple teahouse night.`,
        accommodation: 'Teahouse, Tikhedunga', meals: 'Trail meals', distanceKm: 8, maxElevation: 1540,
      },
      {
        day: 5, title: 'Ulleri → Ghorepani (Trek Day 2)',
        description: `Ulleri staircase and rhododendron forest to Ghorepani (2,860m). 5–6 hours, 13 km. Sunset walk up to Poon Hill for the preview view.`,
        accommodation: 'Teahouse, Ghorepani', meals: 'Trail meals', distanceKm: 13, maxElevation: 2860,
      },
      {
        day: 6, title: 'Poon Hill Sunrise → Ghandruk (Trek Day 3)',
        description: `Poon Hill sunrise (3,210m). Descend via Tadapani to Ghandruk (1,940m). 6–7 hours, 17 km.`,
        accommodation: 'Teahouse, Ghandruk', meals: 'Trail meals', distanceKm: 17, maxElevation: 3210,
      },
      {
        day: 7, title: 'Ghandruk → Nayapul → Pokhara → Seti Rafting',
        description: `Descent to Nayapul (3 hours). Taxi to Pokhara. **Afternoon: Seti River rafting** — half-day calm-water float through Pokhara's gorge system (Grade I–II, great for post-trek relaxation). Evening farewell dinner.`,
        accommodation: 'Lakeside hotel or depart', meals: 'Trail breakfast; lunch at teahouse; dinner at Pokhara', distanceKm: 10,
      },
    ],
  },

  {
    slug: 'nepal-budget-backpacker-7-days',
    title: 'Nepal Budget Backpacker — 7 Days',
    excerpt: 'See Nepal\'s greatest hits on a tight budget: local buses, teahouse trekking, street food, and guesthouses. Proof that Nepal\'s best experiences cost almost nothing.',
    days: 7,
    activities: ['CULTURAL', 'TREKKING'],
    budget: 'BUDGET',
    difficulty: 'MODERATE',
    provinces: ['BAGMATI', 'GANDAKI'],
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80',
    highlights: [
      'All major Kathmandu sites for under NPR 2,000 entry total',
      'Poon Hill trek staying in USD 8–12 teahouses',
      'Local bus travel on the Prithvi Highway',
      'Bhaktapur and Nagarkot on a shoestring',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Pokhara',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Kathmandu: Free & Cheap',
        description: `Swayambhunath (free to walk the outer circuit; USD 2 entry optional). Asan Bazaar (free). Kathmandu Durbar Square (USD 5 foreigner entry). Evening Pashupatinath (USD 5). Thamel street momos for dinner (NPR 200).`,
        accommodation: 'Budget guesthouse, Thamel (USD 8–12)', meals: 'Street food throughout',
      },
      {
        day: 2, title: 'Patan & Bhaktapur',
        description: `Public bus to Patan (NPR 25). Patan Durbar Square (USD 5). Lunch at local bhojanalaya (NPR 300). Microbus to Bhaktapur (NPR 45). Bhaktapur entry (USD 15, but valid for 7 days). Nyatapola Temple, pottery square, juju dhau.`,
        accommodation: 'Budget guesthouse, Thamel', meals: 'Street food and local restaurants',
      },
      {
        day: 3, title: 'Nagarkot & Return',
        description: `Local bus to Nagarkot (NPR 120, 2 hours). Sunrise walk on the ridge (free). Hike to Changu Narayan (free trail, USD 3 entry at temple). Microbus back to Bhaktapur (NPR 30), then to Kathmandu. Budget: under USD 20 for the day.`,
        accommodation: 'Budget guesthouse, Thamel', meals: 'Dal bhat at local restaurants',
        distanceKm: 8,
      },
      {
        day: 4, title: 'Local Bus to Pokhara',
        description: `Local bus Kathmandu → Pokhara (NPR 600, 7–8 hours). Budget tourist bus available too (NPR 900, USD 8). Arrive Lakeside afternoon. Free evening walk on the lake shore.`,
        accommodation: 'Budget guesthouse, Lakeside (USD 8–15)', meals: 'Bus snacks; dinner at Pokhara Lakeside',
      },
      {
        day: 5, title: 'Free Pokhara Day',
        description: `Row to Tal Barahi temple (rowboat NPR 500/hour). World Peace Pagoda hike (free trail, 45 min each way). Davis Falls and Gupteshwor Cave (USD 2 combined). Lakeside walk at sunset (free). Total cost: under USD 10.`,
        accommodation: 'Budget guesthouse, Lakeside', meals: 'Local restaurants',
      },
      {
        day: 6, title: 'Nayapul → Tikhedunga → Ulleri',
        description: `Microbus to Nayapul (NPR 200). TIMS and ACAP permits in Pokhara (USD 20 total). Trek to Ulleri (1,960m). 5–6 hours. Teahouse dinner (NPR 400).`,
        accommodation: 'Teahouse, Ulleri (USD 5–8)', meals: 'Trail teahouse meals', distanceKm: 11, maxElevation: 1960,
      },
      {
        day: 7, title: 'Poon Hill Sunrise → Back to Pokhara',
        description: `4:30 AM: hike to Ghorepani (2,860m), then Poon Hill (3,210m) for sunrise. Descend all the way back to Nayapul (via Ulleri). 9–10 hours total, but possible in a day for fit trekkers. Return to Pokhara for celebration dinner.`,
        accommodation: 'Pokhara Lakeside or depart', meals: 'Trail meals', distanceKm: 24, maxElevation: 3210,
      },
    ],
  },

  {
    slug: 'nepal-photography-week-7-days',
    title: 'Nepal Photography Week — 7 Days',
    excerpt: 'Nepal is one of the world\'s great photography destinations. Seven days hitting the golden-hour locations, cultural festivals, mountain viewpoints, and hidden temples that make the best images.',
    days: 7,
    activities: ['CULTURAL', 'TREKKING'],
    budget: 'MIDRANGE',
    difficulty: 'MODERATE',
    provinces: ['BAGMATI', 'GANDAKI'],
    heroImage: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=1200&q=80',
    highlights: [
      'Nagarkot pre-dawn shoot with Himalayan panorama',
      'Bhaktapur\'s backstreets and artisan workshops',
      'Poon Hill sunrise over Dhaulagiri',
      'Pokhara reflections on Phewa Lake at dawn',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Pokhara',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Kathmandu Aarti & Stupa Golden Hour',
        description: `**7 AM** — Pashupatinath aarti for fire-ritual photos in golden morning light. **10 AM** — Boudhanath kora — monks in saffron robes, prayer wheels, pilgrims against the stupa. **4 PM** — Swayambhunath for sunset: the stupa's eyes painted golden in the late sun.`,
        accommodation: 'Hotel in Thamel', meals: 'All meals',
      },
      {
        day: 2, title: 'Kathmandu Old City & Courtyard Hunt',
        description: `Hidden Nepal: with a guide, explore the medieval bahals and courtyards that don't appear in guidebooks — wood-carved windows, eroded stone deities, women at water spouts, potters in temple courtyards. Indra Chowk, Asan, and Itum Bahal. Late afternoon: Patan Durbar Square for long shadows on the temple façades.`,
        accommodation: 'Hotel in Thamel', meals: 'All meals',
      },
      {
        day: 3, title: 'Nagarkot Pre-Dawn + Bhaktapur Backstreets',
        description: `**4:30 AM** — Drive to Nagarkot. Shoot the Himalayan skyline from the viewpoint tower (Everest visible on clear days). **Midday** — Drive to Bhaktapur. Spend the afternoon in the backstreets: potters throwing clay, woodcarvers at work, women in traditional Newari dress at the ancient hiti (stone water spouts).`,
        accommodation: 'Hotel in Bhaktapur old city or Kathmandu', meals: 'All meals',
      },
      {
        day: 4, title: 'Drive to Pokhara — Lake Reflections',
        description: `**Morning** — Bus or private car to Pokhara via Prithvi Highway (scenic gorge driving, stop for river shots). **Afternoon** — Arrive Lakeside. Rent a rowboat for the late-afternoon Phewa Lake reflection shots — mountains in the water, painted wooden boats, fishermen.`,
        accommodation: 'Lakeside hotel, Pokhara', meals: 'Breakfast in Kathmandu; dinner at Lakeside',
      },
      {
        day: 5, title: 'Sarangkot Dawn & Paragliding POV',
        description: `**5 AM** — Sarangkot sunrise shoot: the Annapurna range illuminated from first light through golden hour. **Morning** — Optional GoPro tandem paraglide for aerial photography over the lake. **Afternoon** — Phewa Lake shore: boats, reflections, fishermen against mountain backdrop.`,
        accommodation: 'Lakeside hotel', meals: 'All meals',
      },
      {
        day: 6, title: 'Trek Day: Nayapul → Ghorepani',
        description: `Drive to Nayapul. Trek Nayapul → Birethanti → Ulleri → Ghorepani (2,860m). Bring your best wide-angle lens — the rhododendron forest trails have extraordinary light in the afternoon. 6–7 hours.`,
        accommodation: 'Teahouse, Ghorepani', meals: 'Trail meals', distanceKm: 16, maxElevation: 2860,
      },
      {
        day: 7, title: 'Poon Hill Sunrise Shoot & Return',
        description: `**4:30 AM** — Poon Hill (3,210m): shoot the sunrise over the Annapurna range. The lighting at Poon Hill changes rapidly — be set up 30 minutes before sunrise. Descend to Nayapul and return to Pokhara for the evening.`,
        accommodation: 'Return to Pokhara', meals: 'Trail breakfast; dinner in Pokhara', distanceKm: 14, maxElevation: 3210,
      },
    ],
  },

  {
    slug: 'annapurna-sanctuary-7-days',
    title: 'Annapurna Sanctuary Trek — 7 Days',
    excerpt: 'The full Annapurna Base Camp (ABC) trek at a comfortable pace — from Pokhara\'s foothills to the 4,130m sanctuary amphitheatre surrounded by the entire Annapurna massif.',
    days: 7,
    activities: ['TREKKING'],
    budget: 'MIDRANGE',
    difficulty: 'HARD',
    provinces: ['GANDAKI'],
    heroImage: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80',
    highlights: [
      'Annapurna Base Camp (4,130m) inside the mountain amphitheatre',
      'Chhomrong — a terraced village with panoramic views',
      'Jhinu Danda natural hot springs (post-trek reward)',
      'Machhapuchhre (Fishtail) close-up from 3,700m',
    ],
    startLocation: 'Nayapul (Pokhara)',
    endLocation: 'Nayapul (Pokhara)',
    featured: true,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Nayapul → Ghandruk',
        description: `Drive to Nayapul, trek to Ghandruk (1,940m) via Birethanti and Kimche. Ghandruk is Nepal's most scenic Gurung village with outstanding Annapurna South and Machhapuchhre views. 5–6 hours, 12 km.`,
        accommodation: 'Teahouse, Ghandruk', meals: 'Trail meals', distanceKm: 12, maxElevation: 1940,
      },
      {
        day: 2, title: 'Ghandruk → Chhomrong',
        description: `Trek to Chhomrong (2,170m) — gateway to the Annapurna Sanctuary. Terraced village on a south-facing ridge, views of Annapurna South. 3–4 hours, 6 km.`,
        accommodation: 'Teahouse, Chhomrong', meals: 'Trail meals', distanceKm: 6, maxElevation: 2170,
      },
      {
        day: 3, title: 'Chhomrong → Dovan (Sanctuary Entrance)',
        description: `Enter the narrow Modi Khola gorge through Sinuwa and Bamboo. Dense bamboo and rhododendron forest. Arrive Dovan (2,600m). The sanctuary walls close in. 5–6 hours, 12 km.`,
        accommodation: 'Teahouse, Dovan', meals: 'Trail meals', distanceKm: 12, maxElevation: 2600,
      },
      {
        day: 4, title: 'Dovan → Machhapuchhre Base Camp',
        description: `The forest thins and the snow peaks emerge. Himalaya Hotel, Hinku Cave, then Machhapuchhre Base Camp (3,700m) at the foot of Machhapuchhre (6,993m) — the sacred "Fishtail" peak. 5 hours, 11 km.`,
        accommodation: 'Teahouse, MBC', meals: 'Trail meals', distanceKm: 11, maxElevation: 3700,
      },
      {
        day: 5, title: 'MBC → ABC & Back to MBC',
        description: `**Dawn push to Annapurna Base Camp (4,130m)**: 2 hours from MBC. Inside the sanctuary amphitheatre — Annapurna I (8,091m) towers directly above. Sunrise is extraordinary. Spend 2 hours at ABC then return to MBC (or descend to Bamboo). 6 hours round trip.`,
        accommodation: 'Teahouse at MBC or Bamboo', meals: 'Trail meals', distanceKm: 9, maxElevation: 4130,
      },
      {
        day: 6, title: 'Descent to Chhomrong',
        description: `Long descend from the sanctuary back to Chhomrong (2,170m). 6–7 hours down through Bamboo, Sinuwa. The descent is rapid but easier than the ascent. 18 km.`,
        accommodation: 'Teahouse, Chhomrong', meals: 'Trail meals', distanceKm: 18, maxElevation: 3700,
      },
      {
        day: 7, title: 'Chhomrong → Jhinu Hot Springs → Nayapul',
        description: `Descend from Chhomrong to Jhinu Danda — natural hot springs (1,760m) beside the Modi Khola River. 45-minute soak, then continue to Nayapul and return to Pokhara.`,
        accommodation: 'Return to Pokhara', meals: 'Trail meals; dinner in Pokhara', distanceKm: 14, maxElevation: 2170,
      },
    ],
  },

  {
    slug: 'nepal-wildlife-nature-7-days',
    title: 'Nepal Wildlife & Nature — 7 Days',
    excerpt: 'Nepal\'s biodiversity from jungle to alpine: Chitwan\'s rhinos and elephants, Koshi Tappu\'s migratory birds and wild water buffalo, and the high-altitude wildlife of Sagarmatha National Park.',
    days: 7,
    activities: ['WILDLIFE'],
    budget: 'MIDRANGE',
    difficulty: 'MODERATE',
    provinces: ['BAGMATI', 'KOSHI'],
    heroImage: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&q=80',
    highlights: [
      'Chitwan: one-horned rhino jeep safari and canoe',
      'Koshi Tappu: Ramsar wetland with 500+ bird species',
      'Wild Asian water buffalo — the rarest large mammal in Nepal',
      'Sagarmatha National Park: red pandas and pheasants',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Kathmandu',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Kathmandu to Chitwan',
        description: `Tourist bus from Kathmandu to Sauraha, Chitwan (5–6 hours). Afternoon arrival: orientation walk and canoe at sunset.`,
        accommodation: 'Jungle lodge, Sauraha', meals: 'Breakfast in Kathmandu; dinner at lodge',
      },
      {
        day: 2, title: 'Chitwan Jeep & Walking Safari',
        description: `Dawn jeep safari (4 hours) in the core park zone — rhino, deer, crocodiles. Afternoon: 2-hour walking safari with armed guide for closer wildlife experiences.`,
        accommodation: 'Jungle lodge, Sauraha', meals: 'All meals at lodge', distanceKm: 25,
      },
      {
        day: 3, title: 'Chitwan Bird Walk & Tharu Village',
        description: `Dawn bird walk (2 hours, 540+ species in Chitwan). Afternoon: visit Tharu village, Elephant Breeding Centre, and sunset canoe on the Narayani River.`,
        accommodation: 'Jungle lodge, Sauraha', meals: 'All meals at lodge', distanceKm: 15,
      },
      {
        day: 4, title: 'Drive to Koshi Tappu Wildlife Reserve',
        description: `Drive east along the Terai: Chitwan → Koshi Tappu (5–6 hours). Koshi Tappu is a Ramsar wetland and bird sanctuary on the Koshi River floodplain — one of Asia's finest birdwatching sites with 500+ species. Late afternoon arrival, sunset boat ride on the Koshi barrage.`,
        accommodation: 'Wildlife camp, Koshi Tappu', meals: 'Breakfast at lodge; dinner at camp', distanceKm: 200,
      },
      {
        day: 5, title: 'Koshi Tappu: Wild Buffalo & Birds',
        description: `Dawn canoe/boat safari on the Koshi River: **wild Asian water buffalo** (fewer than 200 remaining, all in Koshi Tappu). Migratory birds in winter (Oct–Mar): cranes, storks, and ducks in their thousands. Afternoon: jeep safari for grassland birds and buffalo herds.`,
        accommodation: 'Wildlife camp, Koshi Tappu', meals: 'All meals at camp', distanceKm: 20,
      },
      {
        day: 6, title: 'Return to Kathmandu',
        description: `Morning bird walk at dawn. Drive or fly from Biratnagar back to Kathmandu (1-hour flight or 10-hour drive). Afternoon arrival.`,
        accommodation: 'Hotel in Kathmandu', meals: 'Breakfast at camp; dinner in Kathmandu', distanceKm: 50,
      },
      {
        day: 7, title: 'Shivapuri National Park Day Hike',
        description: `Day hike in Shivapuri Nagarjun National Park on Kathmandu's northern rim — red panda territory (early morning best for sightings), Himalayan black bear, leopard tracks, 177 bird species. Chisapani viewpoint for the Himalayan panorama. Return for evening departure.`,
        accommodation: 'Hotel in Kathmandu or depart', meals: 'Trail meals', distanceKm: 12,
      },
    ],
  },

  {
    slug: 'nepal-honeymoon-luxury-7-days',
    title: 'Nepal Luxury Honeymoon — 7 Days',
    excerpt: 'Nepal\'s most romantic week: a private heritage hotel in Kathmandu, a luxury mountain resort in Pokhara, spa days, private temple tours, a sunrise hot-air balloon over the Himalayas, and candlelit dinners.',
    days: 7,
    activities: ['RELAXATION', 'CULTURAL'],
    budget: 'LUXURY',
    difficulty: 'EASY',
    provinces: ['BAGMATI', 'GANDAKI'],
    heroImage: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&q=80',
    highlights: [
      'Hot air balloon over Kathmandu Valley at sunrise',
      'Private after-hours temple tour with a scholar guide',
      'Couples\' paragliding over Phewa Lake',
      'Fish Tail Lodge — the iconic floating resort on Phewa Lake',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Pokhara',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Arrival at Dwarika\'s Hotel',
        description: `Arrive Kathmandu. Check in to **Dwarika's Hotel** — a UNESCO-recognised heritage hotel built with rescued 5th–15th century woodwork from demolished Newari buildings. Welcome flower ceremony. Private meditation garden. Candlelit dinner at Krishnarpan (12-course Nepali tasting menu).`,
        accommodation: "Dwarika\'s Hotel, Kathmandu", meals: 'Welcome dinner at Krishnarpan',
      },
      {
        day: 2, title: 'Hot Air Balloon & Private Heritage Tour',
        description: `**Pre-dawn** — Hot air balloon over the Kathmandu Valley at sunrise (USD 250/person) — floating over temples, rice fields, and snow peaks. Landing champagne breakfast.\n\n**Afternoon** — Private scholar-guided tour of Patan's hidden temples, with exclusive access to courtyard ceremonies.`,
        accommodation: "Dwarika\'s Hotel", meals: 'Champagne balloon breakfast; private heritage lunch; dinner at hotel',
      },
      {
        day: 3, title: 'Bhaktapur & Spa Day',
        description: `Private car to Bhaktapur. Personal guide through the medieval city in the quiet morning. Photography, courtyard discoveries, pottery studio private session. Afternoon at Dwarika's Spa (Ayurvedic couple treatment, 3 hours).`,
        accommodation: "Dwarika\'s Hotel", meals: 'Hotel breakfast; private lunch in Bhaktapur; in-room dining',
      },
      {
        day: 4, title: 'Fly to Pokhara — Fish Tail Lodge',
        description: `Morning flight to Pokhara. Transfer by private boat across Phewa Lake to **Fish Tail Lodge** — Nepal's only floating resort, accessible only by wooden ferry, set on a private peninsula. Afternoon on the lake. Sunset at the World Peace Pagoda.`,
        accommodation: 'Fish Tail Lodge, Pokhara', meals: 'Hotel breakfast; lunch and dinner at lodge',
      },
      {
        day: 5, title: 'Couples\' Paragliding & Spa',
        description: `**Dawn** — Private jeep to Sarangkot for sunrise (lodge can arrange 5-star breakfast on the viewpoint). **Morning** — Side-by-side tandem paragliding over the lake. **Afternoon** — Couples' treatment at lodge spa. Private yoga session on the lake terrace at dusk.`,
        accommodation: 'Fish Tail Lodge', meals: 'All meals at lodge and viewpoint',
      },
      {
        day: 6, title: 'Begnas Lake Private Picnic',
        description: `Private driver to Begnas Lake. The lodge can arrange a private boat picnic on the lake with packed lunch, wine, and mountain views — no other tourists. Afternoon kayaking or paddle boarding. Return for candlelit dinner at lodge.`,
        accommodation: 'Fish Tail Lodge', meals: 'Private picnic lunch; romantic dinner at lodge',
      },
      {
        day: 7, title: 'Farewell Morning & Departure',
        description: `Last sunrise from the lodge terrace — Annapurna and Machhapuchhre in the early light. Private boat back to Lakeside. Flight to Kathmandu for international connections.`,
        accommodation: 'Depart', meals: 'Hotel breakfast; farewell lunch at Lakeside',
      },
    ],
  },
]

async function main() {
  console.log('🌏 Seeding Batch 4 — 7-day itineraries...\n')
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

  console.log(`\n✅ Batch 4 done — ${created} created, ${skipped} skipped`)
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
