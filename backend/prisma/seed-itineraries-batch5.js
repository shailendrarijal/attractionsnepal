/**
 * Batch 5 of 5 — 14-day itineraries (10 total)
 * Run from backend/: node prisma/seed-itineraries-batch5.js
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ITINERARIES = [
  {
    slug: 'grand-nepal-tour-14-days',
    title: 'Grand Nepal Tour — 14 Days',
    excerpt: 'The complete Nepal experience in two weeks: Kathmandu heritage, Pokhara lakes, Chitwan jungle, Lumbini pilgrimage, and a trek to the Annapurna foothills — covering everything Nepal has to offer.',
    days: 14,
    activities: ['CULTURAL', 'WILDLIFE', 'TREKKING', 'SPIRITUAL'],
    budget: 'MIDRANGE',
    difficulty: 'MODERATE',
    provinces: ['BAGMATI', 'GANDAKI', 'LUMBINI'],
    heroImage: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1200&q=80',
    highlights: [
      'All 3 Durbar Squares, Pashupatinath, Boudhanath, and Swayambhunath',
      'Poon Hill sunrise over the Annapurna range',
      'Chitwan rhino safari and Tharu culture',
      'Lumbini — birthplace of the Buddha',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Kathmandu',
    featured: true,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Kathmandu Arrival & Thamel',
        description: `Arrive Kathmandu. Check in and rest. Evening stroll through Thamel. Pashupatinath evening aarti.`,
        accommodation: 'Hotel in Thamel', meals: 'Dinner in Thamel',
      },
      {
        day: 2, title: 'Pashupatinath, Boudhanath & Swayambhunath',
        description: `Full Kathmandu sacred sites day. Morning Pashupatinath, midday Boudhanath kora, afternoon Swayambhunath sunset.`,
        accommodation: 'Hotel in Thamel', meals: 'All meals',
      },
      {
        day: 3, title: 'Kathmandu Durbar Square & Patan',
        description: `Hanuman Dhoka, Kumari courtyard, Indra Chowk bazaar. Afternoon: Patan Durbar Square and Patan Museum.`,
        accommodation: 'Hotel in Thamel', meals: 'All meals',
      },
      {
        day: 4, title: 'Nagarkot Sunrise & Bhaktapur',
        description: `4:30 AM to Nagarkot for Himalayan sunrise. Hike or drive to Changu Narayan (Nepal's oldest temple). Afternoon: Bhaktapur medieval city, Nyatapola Temple, juju dhau.`,
        accommodation: 'Hotel in Thamel or Bhaktapur', meals: 'All meals', distanceKm: 8,
      },
      {
        day: 5, title: 'Kathmandu to Chitwan',
        description: `Tourist bus to Sauraha, Chitwan (5–6 hours). Afternoon: canoe on Rapti River. Evening: Tharu cultural programme.`,
        accommodation: 'Jungle lodge, Sauraha', meals: 'Breakfast in Kathmandu; dinner at lodge',
      },
      {
        day: 6, title: 'Chitwan Full Safari Day',
        description: `Dawn jeep safari (4 hours). Elephant Breeding Centre. Afternoon walking safari. Sunset canoe.`,
        accommodation: 'Jungle lodge, Sauraha', meals: 'All meals at lodge', distanceKm: 20,
      },
      {
        day: 7, title: 'Chitwan to Lumbini',
        description: `Morning bird walk. Drive to Lumbini (3–4 hours). Check in at monastery guesthouse. Evening: walk the Sacred Garden at dusk.`,
        accommodation: 'Monastery guesthouse, Lumbini', meals: 'Breakfast at lodge; dinner at guesthouse',
      },
      {
        day: 8, title: 'Lumbini Pilgrimage',
        description: `Full day: Maya Devi Temple, Ashoka Pillar, Eastern and Western monastery zones. Tilaurakot day trip (27 km west — Buddha's childhood palace).`,
        accommodation: 'Monastery guesthouse, Lumbini', meals: 'Vegetarian meals', distanceKm: 55,
      },
      {
        day: 9, title: 'Lumbini to Pokhara',
        description: `Morning bus or private car to Pokhara (3–4 hours). Check in Lakeside. Afternoon: rowboat on Phewa Lake. World Peace Pagoda sunset.`,
        accommodation: 'Lakeside hotel, Pokhara', meals: 'Breakfast at guesthouse; dinner at Lakeside',
      },
      {
        day: 10, title: 'Sarangkot Sunrise & Paragliding',
        description: `Pre-dawn Sarangkot (5 AM). Tandem paragliding (morning). Davis Falls and Gupteshwor Cave (afternoon). International Mountain Museum.`,
        accommodation: 'Lakeside hotel, Pokhara', meals: 'All meals',
      },
      {
        day: 11, title: 'Pokhara to Nayapul — Trek Begins',
        description: `Drive to Nayapul. Trek: Nayapul → Birethanti → Tikhedunga (1,540m). 3 hours.`,
        accommodation: 'Teahouse, Tikhedunga', meals: 'Trail meals', distanceKm: 8, maxElevation: 1540,
      },
      {
        day: 12, title: 'Ulleri → Ghorepani',
        description: `Ulleri staircase (3,280 steps) and rhododendron forest to Ghorepani (2,860m). Optional: Poon Hill sunset preview. 5–6 hours.`,
        accommodation: 'Teahouse, Ghorepani', meals: 'Trail meals', distanceKm: 13, maxElevation: 2860,
      },
      {
        day: 13, title: 'Poon Hill Sunrise → Ghandruk',
        description: `Poon Hill sunrise (3,210m) — 12 Himalayan peaks. Descend via Tadapani to Ghandruk (1,940m). 6–7 hours.`,
        accommodation: 'Teahouse, Ghandruk', meals: 'Trail meals', distanceKm: 17, maxElevation: 3210,
      },
      {
        day: 14, title: 'Ghandruk → Nayapul → Pokhara → Kathmandu',
        description: `Descent to Nayapul (3 hours). Taxi to Pokhara. Flight or bus back to Kathmandu for international departure.`,
        accommodation: 'Depart', meals: 'Trail breakfast; dinner in Pokhara or Kathmandu', distanceKm: 10,
      },
    ],
  },

  {
    slug: 'everest-base-camp-trek-14-days',
    title: 'Everest Base Camp Trek — 14 Days',
    excerpt: 'The world\'s most iconic trek — from the thrilling Lukla landing to Everest Base Camp (5,364m) and Kala Patthar (5,545m), the highest easily-accessible viewpoint on earth. A life-defining journey.',
    days: 14,
    activities: ['TREKKING'],
    budget: 'MIDRANGE',
    difficulty: 'EXTREME',
    provinces: ['KOSHI'],
    heroImage: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=1200&q=80',
    highlights: [
      'Kala Patthar (5,545m) — the definitive Everest view',
      'Everest Base Camp (5,364m) — Khumbu icefall up close',
      'Tengboche Monastery in the most dramatic setting in Nepal',
      'Namche Bazaar — Sherpa capital at 3,440m',
    ],
    startLocation: 'Lukla (fly from Kathmandu)',
    endLocation: 'Lukla (fly back to Kathmandu)',
    featured: true,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Fly to Lukla → Phakding',
        description: `Early morning flight to Lukla (2,840m). Trek to Phakding (2,652m). 3 hours, 9 km.`,
        accommodation: 'Teahouse, Phakding', meals: 'Trail meals', distanceKm: 9, maxElevation: 2840,
      },
      {
        day: 2, title: 'Phakding → Namche Bazaar',
        description: `Enter Sagarmatha National Park at Monjo. Final steep climb to Namche (3,440m). First Everest view near the top. 5–6 hours, 11 km.`,
        accommodation: 'Teahouse, Namche', meals: 'Trail meals', distanceKm: 11, maxElevation: 3440,
      },
      {
        day: 3, title: 'Namche Acclimatization Day',
        description: `Rest day for altitude. Hike to Everest View Hotel ridge (3,880m) for Everest, Lhotse, Ama Dablam views. Visit Khumjung village and Hillary School.`,
        accommodation: 'Teahouse, Namche', meals: 'Trail meals', distanceKm: 8, maxElevation: 3880,
      },
      {
        day: 4, title: 'Namche → Tengboche',
        description: `Traverse and climb through silver birch forest to Tengboche Monastery (3,867m) — the most dramatically sited monastery in Nepal, surrounded by Everest, Ama Dablam, Nuptse. Evening puja. 5–6 hours, 10 km.`,
        accommodation: 'Teahouse, Tengboche', meals: 'Trail meals', distanceKm: 10, maxElevation: 3867,
      },
      {
        day: 5, title: 'Tengboche → Dingboche',
        description: `Pass Pangboche (ancient monastery with yeti scalp relic). Enter the high-altitude Imja Valley. Dingboche (4,410m) with stunning Ama Dablam and Island Peak views. 5 hours, 12 km.`,
        accommodation: 'Teahouse, Dingboche', meals: 'Trail meals', distanceKm: 12, maxElevation: 4410,
      },
      {
        day: 6, title: 'Dingboche Acclimatization',
        description: `Essential rest day. Hike to Nagarjun Hill (5,100m) above Dingboche for acclimatization and views of Makalu, Lhotse, Ama Dablam, Island Peak. Short day: 3–4 hours.`,
        accommodation: 'Teahouse, Dingboche', meals: 'Trail meals', distanceKm: 6, maxElevation: 5100,
      },
      {
        day: 7, title: 'Dingboche → Lobuche',
        description: `Climb to the Khumbu glacier moraine. Pass the mountaineers' memorial at Thukla (4,620m). Arrive Lobuche (4,940m). 4–5 hours, 9 km.`,
        accommodation: 'Teahouse, Lobuche', meals: 'Trail meals', distanceKm: 9, maxElevation: 4940,
      },
      {
        day: 8, title: 'Lobuche → Gorak Shep → EBC',
        description: `Arrive at Gorak Shep (5,170m). Drop bags and continue to **Everest Base Camp (5,364m)** — the Khumbu Icefall looms above, coloured tents of expeditions spread across the moraine. 7–8 hours total, 11 km.`,
        accommodation: 'Teahouse, Gorak Shep', meals: 'Trail meals', distanceKm: 11, maxElevation: 5364,
      },
      {
        day: 9, title: 'Kala Patthar Sunrise → Descent to Pangboche',
        description: `**Pre-dawn (4 AM)**: Climb Kala Patthar (5,545m) — Everest in full: north face, Hillary Step, South Col. The definitive Everest view. Descend all the way to Pangboche (3,930m). 8–9 hours.`,
        accommodation: 'Teahouse, Pangboche', meals: 'Trail meals', distanceKm: 18, maxElevation: 5545,
      },
      {
        day: 10, title: 'Pangboche → Namche',
        description: `Long descent back through Tengboche and Phunki Tenga to Namche (3,440m). 7–8 hours, 14 km. Celebrate with hot shower and pizza in Namche.`,
        accommodation: 'Teahouse, Namche', meals: 'Trail meals', distanceKm: 14, maxElevation: 3930,
      },
      {
        day: 11, title: 'Namche → Lukla',
        description: `Final descent from Namche to Lukla (2,840m). 6–7 hours, 18 km. Last teahouse dinner and celebration with fellow trekkers.`,
        accommodation: 'Teahouse, Lukla', meals: 'Trail meals', distanceKm: 18, maxElevation: 3440,
      },
      {
        day: 12, title: 'Fly Lukla → Kathmandu',
        description: `Morning flight back to Kathmandu. Afternoon: hot shower, massage, real food. Celebratory dinner in Thamel — you've done EBC.`,
        accommodation: 'Hotel in Thamel', meals: 'Celebration dinner in Thamel',
      },
      {
        day: 13, title: 'Kathmandu Rest & Shopping',
        description: `Rest day: massage, Thamel gear shops (buy your EBC summit certificate frame and patches), Boudhanath thanksgiving kora, Patan Durbar Square if energy allows.`,
        accommodation: 'Hotel in Thamel', meals: 'All meals',
      },
      {
        day: 14, title: 'Departure Day',
        description: `Final Kathmandu morning. Pashupatinath or Boudhanath for a final offering. Transfer to Tribhuvan International Airport for departure.`,
        accommodation: 'Depart', meals: 'Breakfast; airport meals',
      },
    ],
  },

  {
    slug: 'annapurna-circuit-trek-14-days',
    title: 'Annapurna Circuit Trek — 14 Days',
    excerpt: 'One of the world\'s great trekking routes — circumnavigating the entire Annapurna massif over the Thorong La Pass (5,416m), crossing from the lush Modi Khola valley to the arid Tibetan-influenced Mustang plateau.',
    days: 14,
    activities: ['TREKKING'],
    budget: 'BUDGET',
    difficulty: 'EXTREME',
    provinces: ['GANDAKI'],
    heroImage: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80',
    highlights: [
      'Thorong La Pass (5,416m) — one of the world\'s highest trekking passes',
      'Muktinath Temple (3,710m) — sacred to Hindu and Buddhist pilgrims',
      'Manang Valley — high-altitude acclimatization with yak herders',
      'Kagbeni — gateway to the forbidden kingdom of Mustang',
    ],
    startLocation: 'Besisahar (Kathmandu/Pokhara)',
    endLocation: 'Nayapul / Pokhara',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Kathmandu → Besisahar → Ngadi',
        description: `Bus from Kathmandu to Besisahar (4 hours). Trek or jeep to Ngadi (930m). Circuit begins.`,
        accommodation: 'Teahouse, Ngadi', meals: 'Trail meals', maxElevation: 930,
      },
      {
        day: 2, title: 'Ngadi → Bahundanda → Chamje',
        description: `Cross suspension bridges over the Marsyangdi River through terraced lowland villages. 5–6 hours, 14 km.`,
        accommodation: 'Teahouse, Chamje', meals: 'Trail meals', distanceKm: 14, maxElevation: 1410,
      },
      {
        day: 3, title: 'Chamje → Bagarchhap → Chame',
        description: `Valley narrows to a gorge. Enter pine forest and higher altitude. First Himalayan views. Arrive Chame (2,670m). 6 hours, 17 km.`,
        accommodation: 'Teahouse, Chame', meals: 'Trail meals', distanceKm: 17, maxElevation: 2670,
      },
      {
        day: 4, title: 'Chame → Pisang',
        description: `Dramatic cliff walls and the first views of the Annapurna II (7,937m) and Lamjung Himal. Arrive Upper Pisang (3,310m) for the best views. 5 hours, 13 km.`,
        accommodation: 'Teahouse, Upper Pisang', meals: 'Trail meals', distanceKm: 13, maxElevation: 3310,
      },
      {
        day: 5, title: 'Pisang → Manang (High Route)',
        description: `Take the high route via Ghyaru and Ngawal (ridge villages, extraordinary Annapurna III and Gangapurna views). Arrive Manang (3,519m). 5–6 hours. Manang is the last major settlement before the pass.`,
        accommodation: 'Teahouse, Manang', meals: 'Trail meals', distanceKm: 15, maxElevation: 3519,
      },
      {
        day: 6, title: 'Manang Acclimatization Day',
        description: `**Essential rest day**. Hike to Ice Lake (4,600m) above Manang for glacial lake and Annapurna views. Altitude lecture at Himalayan Rescue Association clinic. 4 hours round trip.`,
        accommodation: 'Teahouse, Manang', meals: 'Trail meals', distanceKm: 10, maxElevation: 4600,
      },
      {
        day: 7, title: 'Manang → Thorong Phedi',
        description: `Short but important acclimatization day: Manang → Yak Kharka → Thorong Phedi (4,450m). Sleep as high as possible before the pass. 4–5 hours, 10 km.`,
        accommodation: 'Teahouse, Thorong Phedi', meals: 'Trail meals', distanceKm: 10, maxElevation: 4450,
      },
      {
        day: 8, title: 'Thorong La Pass & Muktinath',
        description: `**3–4 AM start**: cross **Thorong La Pass (5,416m)** in darkness. Reach the summit at dawn — cairns, prayer flags, and a sea of Himalayan peaks. Descend 1,600m to **Muktinath (3,710m)** — the sacred temple with eternal flame and 108 water spouts. 7–9 hours.`,
        accommodation: 'Guesthouse, Muktinath', meals: 'Trail meals', distanceKm: 20, maxElevation: 5416,
      },
      {
        day: 9, title: 'Muktinath → Kagbeni → Jomsom',
        description: `Descend through the arid Mustang landscape past Kagbeni (medieval walled village, gateway to Upper Mustang). Continue to Jomsom (2,720m). Wind increases dramatically in the afternoon. 5 hours, 17 km.`,
        accommodation: 'Hotel, Jomsom', meals: 'Trail meals', distanceKm: 17, maxElevation: 3710,
      },
      {
        day: 10, title: 'Jomsom → Marpha → Ghasa',
        description: `Pass through Marpha — the "apple capital of Nepal" with apple brandy and dried fruit. Continue down the Kali Gandaki gorge (world's deepest gorge between Dhaulagiri and Annapurna). Arrive Ghasa. 5–6 hours, 17 km.`,
        accommodation: 'Teahouse, Ghasa', meals: 'Trail meals', distanceKm: 17, maxElevation: 2720,
      },
      {
        day: 11, title: 'Ghasa → Tatopani (Hot Springs)',
        description: `Descend to Tatopani (1,190m) — "Tato" means hot, "pani" means water. Natural hot springs in the middle of the village after 11 days of trekking. Soak for as long as you want. 5 hours, 13 km.`,
        accommodation: 'Guesthouse, Tatopani', meals: 'Trail meals', distanceKm: 13, maxElevation: 2090,
      },
      {
        day: 12, title: 'Tatopani → Ghorepani',
        description: `Steep climb from the valley floor back up through forest to Ghorepani (2,860m). The hardest day of the second half. 6–7 hours, 15 km. Reward: Poon Hill tomorrow.`,
        accommodation: 'Teahouse, Ghorepani', meals: 'Trail meals', distanceKm: 15, maxElevation: 2860,
      },
      {
        day: 13, title: 'Poon Hill Sunrise → Ghandruk',
        description: `Poon Hill (3,210m) sunrise — you've earned it. Descend via Tadapani to Ghandruk (1,940m). 6 hours, 17 km.`,
        accommodation: 'Teahouse, Ghandruk', meals: 'Trail meals', distanceKm: 17, maxElevation: 3210,
      },
      {
        day: 14, title: 'Ghandruk → Nayapul → Pokhara',
        description: `Final descent to Nayapul (3 hours). Taxi to Pokhara. Celebration dinner. Optional: stay overnight or fly to Kathmandu.`,
        accommodation: 'Hotel, Pokhara', meals: 'Trail breakfast; celebration dinner', distanceKm: 10,
      },
    ],
  },

  {
    slug: 'nepal-cultural-pilgrimage-14-days',
    title: 'Nepal Cultural & Pilgrimage Grand Tour — 14 Days',
    excerpt: 'Two weeks following Nepal\'s sacred geography from the Hindu heartland of Kathmandu to Buddhist Lumbini, the mountain temple of Muktinath, Gosaikunda\'s sacred lake, and the animist traditions of remote hill communities.',
    days: 14,
    activities: ['CULTURAL', 'SPIRITUAL', 'TREKKING'],
    budget: 'MIDRANGE',
    difficulty: 'MODERATE',
    provinces: ['BAGMATI', 'GANDAKI', 'LUMBINI'],
    heroImage: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1200&q=80',
    highlights: [
      'Gosaikunda Sacred Lake (4,380m) — pilgrimage destination for 100,000s',
      'Muktinath Temple — highest pilgrimage site in Nepal',
      'Full Lumbini exploration including Tilaurakot and Devadaha',
      'Pashupatinath and the complete Kathmandu sacred circuit',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Kathmandu',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Kathmandu — Hindu Sacred Circuit',
        description: `Pashupatinath (morning aarti), Boudhanath (kora), Swayambhunath (sunset). Evening: evening aarti at Pashupatinath.`,
        accommodation: 'Hotel in Thamel', meals: 'All meals',
      },
      {
        day: 2, title: 'Kathmandu Heritage',
        description: `Kathmandu Durbar Square, Patan, and Bhaktapur. Three UNESCO sites in one day.`,
        accommodation: 'Hotel in Thamel', meals: 'All meals',
      },
      {
        day: 3, title: 'Dakshinkali & Pharping',
        description: `Tantric goddess temple at Dakshinkali (Tuesdays/Saturdays are sacrifice days). Guru Rinpoche's cave at Pharping — where Tibetan Buddhism began.`,
        accommodation: 'Hotel in Thamel', meals: 'All meals',
      },
      {
        day: 4, title: 'Drive to Syabrubesi — Gosaikunda Trek Begins',
        description: `Drive to Syabrubesi (2,240m, 6 hours). Permits at Dhunche. Trek: Syabrubesi → Sing Gompa (3,250m). 5 hours through rhododendron forest.`,
        accommodation: 'Teahouse, Sing Gompa', meals: 'Trail meals', distanceKm: 14, maxElevation: 3250,
      },
      {
        day: 5, title: 'Sing Gompa → Gosaikunda Lake',
        description: `Trek to **Gosaikunda (4,380m)** — a sacred alpine lake created, according to Hindu mythology, when Shiva struck the Himalayas with his trident to release water after drinking poison. 300,000 pilgrims come at the Janai Purnima festival. Crystal-clear lake ringed by snow peaks. 4–5 hours.`,
        accommodation: 'Teahouse, Gosaikunda', meals: 'Trail meals', distanceKm: 10, maxElevation: 4380,
      },
      {
        day: 6, title: 'Gosaikunda Rituals & Return to Syabrubesi',
        description: `Dawn: ritual bathing in the sacred lake. Return descend to Syabrubesi (7 hours, 24 km). Bus or jeep back toward Kathmandu.`,
        accommodation: 'Hotel in Kathmandu or Dhunche', meals: 'Trail meals', distanceKm: 24,
      },
      {
        day: 7, title: 'Kathmandu → Pokhara → Jomsom (Fly)',
        description: `Bus to Pokhara (7 hours) or fly (25 min). Evening flight or early morning flight next day to Jomsom.`,
        accommodation: 'Hotel in Pokhara', meals: 'All meals',
      },
      {
        day: 8, title: 'Jomsom → Muktinath Pilgrimage',
        description: `Trek: Jomsom → Kagbeni → Muktinath (3,710m). 108 sacred water spouts, eternal flame, Vishnu temple and Jwala Mai shrine. One of the holiest sites on earth for both Hindus and Buddhists. 6 hours.`,
        accommodation: 'Guesthouse, Muktinath', meals: 'Trail meals', distanceKm: 22, maxElevation: 3710,
      },
      {
        day: 9, title: 'Muktinath Sunrise Rituals & Return',
        description: `3:30 AM: ritual bath in the 108 water spouts (traditional pilgrimage practice). Sunrise puja at the Vishnu temple. Return to Jomsom by jeep or on foot. Afternoon flight to Pokhara.`,
        accommodation: 'Hotel, Pokhara', meals: 'Trail meals; dinner in Pokhara', distanceKm: 22,
      },
      {
        day: 10, title: 'Pokhara Sacred Sites',
        description: `Bindhyabasini hilltop temple, Tal Barahi island temple on Phewa Lake, Devi's Falls and Gupteshwor Cave, World Peace Pagoda sunset meditation.`,
        accommodation: 'Hotel, Pokhara', meals: 'All meals',
      },
      {
        day: 11, title: 'Pokhara → Lumbini (Manakamana Stop)',
        description: `Bus east to Manakamana cable car (wish-granting goddess temple). Then bus to Lumbini (total 7–8 hours). Arrive at monastery guesthouse.`,
        accommodation: 'Monastery guesthouse, Lumbini', meals: 'Temple snacks; dinner at guesthouse',
      },
      {
        day: 12, title: 'Lumbini Sacred Garden',
        description: `Full day: Maya Devi Temple, Ashoka Pillar, monastery zones. Both Eastern (Theravada) and Western (Mahayana) zones by bicycle.`,
        accommodation: 'Monastery guesthouse, Lumbini', meals: 'Vegetarian meals',
      },
      {
        day: 13, title: 'Tilaurakot & Devadaha',
        description: `Tilaurakot (Kapilavastu palace ruins, 27 km west), Kudan, Nigrodharam. Afternoon: Devadaha (birthplace of Maya Devi). Return to guesthouse.`,
        accommodation: 'Monastery guesthouse, Lumbini', meals: 'Vegetarian meals', distanceKm: 65,
      },
      {
        day: 14, title: 'Return to Kathmandu',
        description: `Morning puja at Maya Devi Temple. Bus to Bhairahawa, flight to Kathmandu (45 min). Final Boudhanath kora as thanksgiving. Departure.`,
        accommodation: 'Depart', meals: 'Breakfast; airport meals',
      },
    ],
  },

  {
    slug: 'luxury-nepal-14-days',
    title: 'Luxury Nepal in 14 Days',
    excerpt: 'Nepal without compromise: private planes to mountain airstrips, Himalayan helicopter excursions, the country\'s finest lodges and resorts, private guided heritage tours, and the ultimate in high-altitude comfort.',
    days: 14,
    activities: ['CULTURAL', 'WILDLIFE', 'RELAXATION', 'TREKKING'],
    budget: 'LUXURY',
    difficulty: 'MODERATE',
    provinces: ['BAGMATI', 'GANDAKI', 'KOSHI'],
    heroImage: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=1200&q=80',
    highlights: [
      'Helicopter tour to Everest Base Camp with summit landing',
      "Dwarika\'s Hotel — Nepal\'s most celebrated heritage property",
      'Tiger Tops Tharu Lodge — pioneer of Chitwan luxury ecotourism',
      'Private mountaineering guide on the Annapurna circuit',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Kathmandu',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1, title: "Arrive at Dwarika\'s Hotel",
        description: `Transfer from airport to Dwarika's Hotel — UNESCO award-winning heritage property. Candlelit Krishnarpan dinner (12-course Nepali tasting menu, reservations essential).`,
        accommodation: "Dwarika\'s Hotel", meals: 'Welcome dinner at Krishnarpan',
      },
      {
        day: 2, title: 'Hot Air Balloon & Private Kathmandu Tour',
        description: `Sunrise hot-air balloon over Kathmandu Valley (USD 250/person). Private Patan and Kathmandu heritage tour with a senior archaeologist guide. Afternoon spa treatment at the hotel.`,
        accommodation: "Dwarika\'s Hotel", meals: 'All meals',
      },
      {
        day: 3, title: 'Helicopter to Everest Base Camp',
        description: `Chartered helicopter flight Kathmandu → Everest Base Camp (5,364m) → land at Kala Patthar viewpoint (5,545m) → fly over glaciers → return via Namche. 5–6 hours total. USD 900–1,500 per person. The only way to see EBC in a day.`,
        accommodation: "Dwarika\'s Hotel", meals: 'Hotel meals',
      },
      {
        day: 4, title: 'Bhaktapur Private Day',
        description: `Private medieval Bhaktapur with exclusive early morning entry (before 8 AM, before crowds). Nyatapola Temple at dawn, pottery master class, private Newari lunch in a family home. Afternoon: Changu Narayan temple.`,
        accommodation: "Dwarika\'s Hotel", meals: 'Private family lunch; hotel dinner',
      },
      {
        day: 5, title: 'Fly to Pokhara — Fish Tail Lodge',
        description: `Private plane to Pokhara. Transfer by private boat to Fish Tail Lodge. Afternoon spa. Sunset at World Peace Pagoda.`,
        accommodation: 'Fish Tail Lodge, Pokhara', meals: 'All meals at lodge',
      },
      {
        day: 6, title: 'Helicopter to Annapurna Base Camp',
        description: `Private helicopter to ABC (4,130m) — land inside the sanctuary amphitheatre for 30 minutes surrounded by the full Annapurna massif. Return to Pokhara via Chhomrong. Afternoon couples spa at lodge.`,
        accommodation: 'Fish Tail Lodge', meals: 'All meals at lodge',
      },
      {
        day: 7, title: 'Begnas Lake Private Day & Paragliding',
        description: `Private picnic on Begnas Lake. Afternoon: private tandem paragliding with Pokhara's most experienced pilots. Farewell dinner at Fish Tail Lodge.`,
        accommodation: 'Fish Tail Lodge', meals: 'Picnic lunch; lodge dinner',
      },
      {
        day: 8, title: 'Fly to Chitwan — Tiger Tops Tharu Lodge',
        description: `Private plane to Bharatpur. Transfer to Tiger Tops Tharu Lodge in Chitwan. The lodge that invented luxury ecotourism in Nepal. Afternoon: private boat safari on the Rapti River.`,
        accommodation: 'Tiger Tops Tharu Lodge', meals: 'All meals at lodge',
      },
      {
        day: 9, title: 'Chitwan Exclusive Safaris',
        description: `Private jeep safari with the lodge's senior naturalist. Private walking safari in the afternoon (no groups). Evening: private Tharu dinner on the lodge terrace.`,
        accommodation: 'Tiger Tops Tharu Lodge', meals: 'All meals at lodge',
      },
      {
        day: 10, title: 'Chitwan Elephant & Canoe',
        description: `Morning elephant ride to Elephant Breeding Centre. Afternoon private canoe on the Narayani River — Gangetic dolphin territory.`,
        accommodation: 'Tiger Tops Tharu Lodge', meals: 'All meals at lodge',
      },
      {
        day: 11, title: 'Return to Kathmandu — Nagarjun Forest Resort',
        description: `Private plane to Kathmandu. Check in to Nagarjun Forest Resort or Pavilions Himalayas. Private meditation session. Thamel farewell dinner.`,
        accommodation: 'Luxury resort, Kathmandu outskirts', meals: 'All meals',
      },
      {
        day: 12, title: 'Lumbini Helicopter Day Trip',
        description: `Private helicopter to Lumbini (45 min). Full day at the Sacred Garden and monastery zone with a private Buddhist scholar guide. Return by helicopter.`,
        accommodation: 'Luxury resort', meals: 'Hotel meals',
      },
      {
        day: 13, title: 'Kathmandu: Private Cooking & Arts',
        description: `Private Newari cooking masterclass with a celebrated Kathmandu chef. Afternoon: private thangka painting experience with a master artist in Boudhanath. Farewell dinner at the best restaurant in Kathmandu.`,
        accommodation: 'Luxury hotel or Dwarika\'s', meals: 'Cooking class lunch; farewell dinner',
      },
      {
        day: 14, title: 'Departure',
        description: `Final morning Boudhanath kora. Private transfer to Tribhuvan International Airport.`,
        accommodation: 'Depart', meals: 'Hotel breakfast',
      },
    ],
  },

  {
    slug: 'nepal-adventure-fortnight-14-days',
    title: 'Nepal Adventure Fortnight — 14 Days',
    excerpt: 'Two weeks of back-to-back adventure: bungee, rafting, mountain biking, paragliding, zip-lining, the full Annapurna Circuit trek over Thorong La Pass, and a white-water kayaking expedition on the Kali Gandaki.',
    days: 14,
    activities: ['ADVENTURE', 'TREKKING'],
    budget: 'MIDRANGE',
    difficulty: 'EXTREME',
    provinces: ['BAGMATI', 'GANDAKI'],
    heroImage: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80',
    highlights: [
      'Thorong La Pass (5,416m) — the world\'s most trekked high pass',
      'Bhote Koshi bungee (160m) and canyon swing',
      'Kali Gandaki multi-day kayaking expedition',
      'Paragliding, zip-line, and whitewater in Pokhara',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Pokhara',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Kathmandu — Pre-trek Gear & Bhote Koshi Bungee',
        description: `Gear up in Thamel. Afternoon: drive to Bhote Koshi gorge for bungee (160m) and canyon swing (optional).`,
        accommodation: 'Hotel, Thamel', meals: 'All meals',
      },
      {
        day: 2, title: 'Trisuli Rafting + Drive to Besisahar',
        description: `Half-day Trisuli rafting en route. Continue to Besisahar (Annapurna Circuit start). Trek permits.`,
        accommodation: 'Guesthouse, Besisahar', meals: 'Trail meals', distanceKm: 50,
      },
      {
        day: 3, title: 'Besisahar → Chamje',
        description: `Trek begins along the Marsyangdi River. Terraced lowlands to forest gorge. 17 km.`,
        accommodation: 'Teahouse, Chamje', meals: 'Trail meals', distanceKm: 17, maxElevation: 1410,
      },
      {
        day: 4, title: 'Chamje → Pisang',
        description: `Enter the upper circuit — pine forest, cliff faces, Annapurna II views. 15 km.`,
        accommodation: 'Teahouse, Pisang', meals: 'Trail meals', distanceKm: 15, maxElevation: 3310,
      },
      {
        day: 5, title: 'Pisang → Manang (High Route)',
        description: `Ridge route via Ghyaru and Ngawal — best views on the circuit. Arrive Manang. 15 km.`,
        accommodation: 'Teahouse, Manang', meals: 'Trail meals', distanceKm: 15, maxElevation: 3519,
      },
      {
        day: 6, title: 'Manang Acclimatization — Ice Lake Hike',
        description: `Rest day: hike to Ice Lake (4,600m) for glacial lake and acclimatization. 10 km.`,
        accommodation: 'Teahouse, Manang', meals: 'Trail meals', distanceKm: 10, maxElevation: 4600,
      },
      {
        day: 7, title: 'Manang → Thorong Phedi',
        description: `Short acclimatization hike to Thorong Phedi (4,450m). Critical for pass attempt.`,
        accommodation: 'Teahouse, Thorong Phedi', meals: 'Trail meals', maxElevation: 4450,
      },
      {
        day: 8, title: 'Thorong La Pass → Muktinath',
        description: `3 AM start: cross Thorong La (5,416m) at dawn. Descend to Muktinath (3,710m). Epic 9-hour crossing. The circuit's defining day.`,
        accommodation: 'Guesthouse, Muktinath', meals: 'Trail meals', distanceKm: 20, maxElevation: 5416,
      },
      {
        day: 9, title: 'Muktinath → Marpha (Apple Capital)',
        description: `Descend through Kagbeni and Jomsom to Marpha — apple brandy, dried apricots, apple pie at every teahouse. 17 km.`,
        accommodation: 'Teahouse, Marpha', meals: 'Trail meals', distanceKm: 17, maxElevation: 3710,
      },
      {
        day: 10, title: 'Marpha → Tatopani via Kali Gandaki Kayaking',
        description: `Optional: half-day kayaking on the upper Kali Gandaki river (Grade III). Then walk or jeep to Tatopani (1,190m) for hot springs. 13 km or jeep.`,
        accommodation: 'Guesthouse, Tatopani', meals: 'Trail meals', distanceKm: 30, maxElevation: 2720,
      },
      {
        day: 11, title: 'Tatopani → Ghorepani',
        description: `Hard climb from hot springs back up to Ghorepani (2,860m). 15 km.`,
        accommodation: 'Teahouse, Ghorepani', meals: 'Trail meals', distanceKm: 15, maxElevation: 2860,
      },
      {
        day: 12, title: 'Poon Hill → Nayapul → Pokhara',
        description: `Poon Hill sunrise then fast descent to Nayapul (via Ulleri). Return to Pokhara.`,
        accommodation: 'Hotel, Pokhara', meals: 'Trail meals; celebration dinner', distanceKm: 17, maxElevation: 3210,
      },
      {
        day: 13, title: 'Pokhara: Paragliding & Zip-line',
        description: `Sarangkot sunrise. Tandem paragliding (USD 85). Hemja zip-line (world's steepest, 1.8 km). Afternoon Seti River rafting.`,
        accommodation: 'Hotel, Pokhara', meals: 'All meals',
      },
      {
        day: 14, title: 'Pokhara Mountain Biking & Departure',
        description: `Final morning: mountain bike trail around the southern Phewa Lake forest (3 hours). Flight to Kathmandu for international connections.`,
        accommodation: 'Depart', meals: 'Breakfast; airport meals',
      },
    ],
  },

  {
    slug: 'langtang-gosaikunda-helambu-14-days',
    title: 'Langtang, Gosaikunda & Helambu Circuit — 14 Days',
    excerpt: 'Nepal\'s least-crowded major trekking circuit — combining Langtang Valley, the sacred Gosaikunda lakes, and the Helambu cultural region in one seamless 14-day loop from Kathmandu.',
    days: 14,
    activities: ['TREKKING', 'SPIRITUAL', 'CULTURAL'],
    budget: 'BUDGET',
    difficulty: 'HARD',
    provinces: ['BAGMATI'],
    heroImage: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80',
    highlights: [
      'Kyanjin Gompa (3,870m) under Langtang Lirung',
      'Gosaikunda Sacred Lake (4,380m)',
      'Crossing the Laurebina La Pass (4,610m)',
      'Helambu — beautiful Sherpa and Tamang cultural villages',
    ],
    startLocation: 'Syabrubesi (Kathmandu)',
    endLocation: 'Kathmandu (via Sundarijal)',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Kathmandu → Syabrubesi',
        description: `Drive from Kathmandu to Syabrubesi (2,240m): 6–7 hours. Permits at Dhunche.`,
        accommodation: 'Guesthouse, Syabrubesi', meals: 'Breakfast in Kathmandu; dinner at guesthouse', distanceKm: 120,
      },
      {
        day: 2, title: 'Syabrubesi → Lama Hotel',
        description: `Trek along the Langtang River gorge through rhododendron and bamboo forest. 5–6 hours, 14 km.`,
        accommodation: 'Teahouse, Lama Hotel', meals: 'Trail meals', distanceKm: 14, maxElevation: 2380,
      },
      {
        day: 3, title: 'Lama Hotel → Langtang Village',
        description: `Forest opens to high pastures. Langtang Village (3,430m) rebuilt after 2015 earthquake. Memorial chorten. 5 hours, 12 km.`,
        accommodation: 'Teahouse, Langtang Village', meals: 'Trail meals', distanceKm: 12, maxElevation: 3430,
      },
      {
        day: 4, title: 'Langtang → Kyanjin Gompa',
        description: `Short walk through yak pastures to Kyanjin Gompa (3,870m). Cheese factory, ancient monastery, glacier views. 3 hours.`,
        accommodation: 'Teahouse, Kyanjin', meals: 'Trail meals', distanceKm: 7, maxElevation: 3870,
      },
      {
        day: 5, title: 'Kyanjin Ri Ascent & Rest',
        description: `Optional: climb Kyanjin Ri (4,773m) for a 360° panorama including Shishapangma (Tibet). Return and rest at Kyanjin.`,
        accommodation: 'Teahouse, Kyanjin', meals: 'Trail meals', distanceKm: 6, maxElevation: 4773,
      },
      {
        day: 6, title: 'Kyanjin → Lama Hotel (Return)',
        description: `Descend back through the valley. 5 hours, 19 km.`,
        accommodation: 'Teahouse, Lama Hotel', meals: 'Trail meals', distanceKm: 19,
      },
      {
        day: 7, title: 'Lama Hotel → Thulo Syabru → Sing Gompa',
        description: `Leave the main Langtang valley and cross to the Gosaikunda trail via Thulo Syabru (2,210m) and up to Sing Gompa (3,250m). 6 hours.`,
        accommodation: 'Teahouse, Sing Gompa', meals: 'Trail meals', distanceKm: 16, maxElevation: 3250,
      },
      {
        day: 8, title: 'Sing Gompa → Gosaikunda',
        description: `Climb to the sacred Gosaikunda Lake (4,380m). Hindu pilgrimage destination for Janai Purnima festival. 4–5 hours.`,
        accommodation: 'Teahouse, Gosaikunda', meals: 'Trail meals', distanceKm: 10, maxElevation: 4380,
      },
      {
        day: 9, title: 'Gosaikunda → Laurebina La → Ghopte',
        description: `Cross Laurebina La Pass (4,610m) — highest point of the route. Descent through alpine pastures to Ghopte (3,430m). 5 hours.`,
        accommodation: 'Teahouse, Ghopte', meals: 'Trail meals', distanceKm: 11, maxElevation: 4610,
      },
      {
        day: 10, title: 'Ghopte → Tharepati → Melamchi Ghyang',
        description: `Enter the Helambu region — Sherpa and Tamang villages. Descend to Melamchi Ghyang (2,530m). 5 hours.`,
        accommodation: 'Teahouse, Melamchi Ghyang', meals: 'Trail meals', distanceKm: 12, maxElevation: 3490,
      },
      {
        day: 11, title: 'Melamchi Ghyang → Tarkeghyang',
        description: `Walk through classic Helambu villages with traditional Sherpa architecture and apple orchards. Tarkeghyang (2,590m) is the most scenic village. 4 hours.`,
        accommodation: 'Teahouse, Tarkeghyang', meals: 'Trail meals', distanceKm: 9, maxElevation: 2590,
      },
      {
        day: 12, title: 'Tarkeghyang → Sermathang → Kakani',
        description: `Continue through apple and pear orchards with views of the Kathmandu Valley hills. 4–5 hours.`,
        accommodation: 'Teahouse, Kakani area', meals: 'Trail meals', distanceKm: 11,
      },
      {
        day: 13, title: 'Kakani → Sundarijal',
        description: `Final descent through Shivapuri National Park (red panda habitat) to Sundarijal on the outskirts of Kathmandu. 4–5 hours.`,
        accommodation: 'Hotel, Kathmandu', meals: 'Trail breakfast; welcome dinner in Kathmandu', distanceKm: 14,
      },
      {
        day: 14, title: 'Kathmandu Rest & Departure',
        description: `Rest day in Kathmandu — massage, shopping, Boudhanath final kora. International departure.`,
        accommodation: 'Depart', meals: 'All meals',
      },
    ],
  },

  {
    slug: 'nepal-comprehensive-discovery-14-days',
    title: 'Nepal Comprehensive Discovery — 14 Days',
    excerpt: 'For first-time visitors who want to see, feel, and understand Nepal completely: culture, nature, trekking, wildlife, spirituality, and adventure — all the dimensions of this extraordinary country in two weeks.',
    days: 14,
    activities: ['CULTURAL', 'TREKKING', 'WILDLIFE', 'ADVENTURE', 'SPIRITUAL'],
    budget: 'MIDRANGE',
    difficulty: 'MODERATE',
    provinces: ['BAGMATI', 'GANDAKI', 'LUMBINI'],
    heroImage: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=1200&q=80',
    highlights: [
      'Complete Kathmandu heritage circuit',
      'Poon Hill trek and Annapurna views',
      'Chitwan wildlife safaris',
      'Lumbini pilgrimage and Pokhara adventure',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Kathmandu',
    featured: true,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Kathmandu Arrival',
        description: `Arrive, settle in. Evening walk in Thamel. Boudhanath stupa at dusk.`,
        accommodation: 'Hotel, Thamel', meals: 'Dinner in Thamel',
      },
      {
        day: 2, title: 'Kathmandu Sacred Sites',
        description: `Pashupatinath (morning), Boudhanath (kora), Swayambhunath (sunset).`,
        accommodation: 'Hotel, Thamel', meals: 'All meals',
      },
      {
        day: 3, title: 'Three Durbar Squares',
        description: `Kathmandu Durbar Square, Patan (Durbar Square + Museum), Bhaktapur (Nyatapola + pottery square).`,
        accommodation: 'Hotel, Thamel', meals: 'All meals',
      },
      {
        day: 4, title: 'Nagarkot Sunrise & Changu Narayan',
        description: `Pre-dawn Nagarkot, hike to Changu Narayan temple, afternoon Bhaktapur.`,
        accommodation: 'Hotel, Thamel', meals: 'All meals', distanceKm: 8,
      },
      {
        day: 5, title: 'Kathmandu → Pokhara',
        description: `Tourist bus to Pokhara (7 hours). Lakeside check-in. Rowboat on Phewa Lake.`,
        accommodation: 'Lakeside hotel, Pokhara', meals: 'Breakfast in Kathmandu; dinner at Pokhara',
      },
      {
        day: 6, title: 'Sarangkot Sunrise, Paragliding & Zip-line',
        description: `5 AM Sarangkot. Tandem paragliding (morning). Afternoon: Hemja zip-line (140 km/h).`,
        accommodation: 'Lakeside hotel, Pokhara', meals: 'All meals',
      },
      {
        day: 7, title: 'Poon Hill Trek Day 1',
        description: `Drive to Nayapul, trek to Ghorepani (2,860m) via Tikhedunga and Ulleri. 6–7 hours.`,
        accommodation: 'Teahouse, Ghorepani', meals: 'Trail meals', distanceKm: 16, maxElevation: 2860,
      },
      {
        day: 8, title: 'Poon Hill Sunrise → Return to Pokhara',
        description: `Poon Hill sunrise (3,210m). Descend to Nayapul. Return to Pokhara (afternoon).`,
        accommodation: 'Lakeside hotel, Pokhara', meals: 'Trail meals; dinner at Lakeside', distanceKm: 14, maxElevation: 3210,
      },
      {
        day: 9, title: 'Pokhara → Chitwan',
        description: `Drive to Sauraha, Chitwan (3 hours). Afternoon: canoe safari and orientation walk.`,
        accommodation: 'Jungle lodge, Sauraha', meals: 'Breakfast in Pokhara; dinner at lodge',
      },
      {
        day: 10, title: 'Chitwan Full Safari',
        description: `Dawn jeep safari, Elephant Breeding Centre, walking safari, evening Tharu dance.`,
        accommodation: 'Jungle lodge, Sauraha', meals: 'All meals at lodge', distanceKm: 20,
      },
      {
        day: 11, title: 'Chitwan → Lumbini',
        description: `Morning bird walk. Drive to Lumbini (3–4 hours west).`,
        accommodation: 'Monastery guesthouse, Lumbini', meals: 'Breakfast at lodge; dinner at guesthouse',
      },
      {
        day: 12, title: 'Lumbini Pilgrimage',
        description: `Sacred Garden, monastery zones (30+ monasteries from 14 nations), Lumbini Museum.`,
        accommodation: 'Monastery guesthouse, Lumbini', meals: 'Vegetarian meals',
      },
      {
        day: 13, title: 'Lumbini → Kathmandu (via Manakamana)',
        description: `Bus north: stop at Manakamana cable car (wish-granting goddess, cable car ride). Continue to Kathmandu.`,
        accommodation: 'Hotel, Thamel', meals: 'Breakfast; temple snacks; dinner in Thamel',
      },
      {
        day: 14, title: 'Kathmandu Farewell & Departure',
        description: `Final morning: Boudhanath kora, shopping, last Newari meal. Transfer to Tribhuvan International Airport.`,
        accommodation: 'Depart', meals: 'Breakfast; farewell lunch',
      },
    ],
  },

  {
    slug: 'nepal-family-grand-14-days',
    title: 'Nepal Family Grand Tour — 14 Days',
    excerpt: 'Nepal for the whole family: monkeys at Swayambhunath, elephants at Chitwan, pottery workshops, a gentle mountain trek, a cable car to a hilltop temple, and a rowboat ride to a lake island — all at a pace kids can enjoy.',
    days: 14,
    activities: ['CULTURAL', 'WILDLIFE'],
    budget: 'MIDRANGE',
    difficulty: 'EASY',
    provinces: ['BAGMATI', 'GANDAKI', 'LUMBINI'],
    heroImage: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&q=80',
    highlights: [
      '200+ monkeys at Swayambhunath (a hit with all ages)',
      'Elephant encounters at Chitwan Breeding Centre',
      'Manakamana cable car ride over the Himalayan foothills',
      'Gentle 2-day Ghandruk family trek with mountain views',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Kathmandu',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Kathmandu Arrival & Swayambhunath',
        description: `Afternoon arrival. Swayambhunath for the monkeys — children love the 200+ resident rhesus macaques. Easy climb up 365 steps with great views.`,
        accommodation: 'Family hotel, Thamel', meals: 'Dinner in Thamel',
      },
      {
        day: 2, title: 'Boudhanath & Patan',
        description: `Boudhanath Stupa's massive prayer wheel kora (children can spin the prayer wheels). Afternoon Patan for the Patan Museum's bronze deity collection (surprisingly interesting for older children).`,
        accommodation: 'Family hotel, Thamel', meals: 'All meals',
      },
      {
        day: 3, title: 'Bhaktapur Pottery & Juju Dhau',
        description: `Bhaktapur pottery square: kids make clay pots on the wheel. Nyatapola Temple's stone guardian statues fascinate children. Juju dhau (king curd) in clay pots for dessert.`,
        accommodation: 'Family hotel, Thamel', meals: 'All meals',
      },
      {
        day: 4, title: 'Manakamana Cable Car',
        description: `3-hour drive to Manakamana cable car (Prithvi Highway). 10-minute cable car ride over forested hills to the hilltop goddess temple at 1,302m. Views of mountains and valleys. Drive to Pokhara (2 hours more).`,
        accommodation: 'Family hotel, Pokhara Lakeside', meals: 'Breakfast in Kathmandu; temple snacks; dinner in Pokhara',
      },
      {
        day: 5, title: 'Pokhara Lake Day',
        description: `Rent a pedal boat or rowboat on Phewa Lake — children can take turns rowing. Row to the island temple. Afternoon: Butterfly Museum (300+ species, one of Asia's largest), Gupteshwor Cave, Davis Falls.`,
        accommodation: 'Family hotel, Pokhara', meals: 'All meals',
      },
      {
        day: 6, title: 'Pokhara → Ghandruk Trek Day 1',
        description: `Drive to Phedi. Trek to Dhampus (1,650m) — first mountain views. Continue to Landruk (1,565m). 5 hours. Family-appropriate trail with mountain views throughout.`,
        accommodation: 'Teahouse, Landruk', meals: 'Trail meals', distanceKm: 11, maxElevation: 1650,
      },
      {
        day: 7, title: 'Landruk → Ghandruk',
        description: `Trek to Ghandruk (1,940m). Gurung museum (friendly for families), weaving demonstrations, spectacular mountain views. Return to Pokhara by jeep from Ghandruk (1.5 hours). Or stay overnight.`,
        accommodation: 'Teahouse, Ghandruk or return to Pokhara', meals: 'Trail meals', distanceKm: 9, maxElevation: 1940,
      },
      {
        day: 8, title: 'Pokhara Rest Day',
        description: `International Mountain Museum (good for all ages — model mountains, expedition stories). Afternoon: swimming at a Lakeside hotel pool. Sunset at World Peace Pagoda.`,
        accommodation: 'Family hotel, Pokhara', meals: 'All meals',
      },
      {
        day: 9, title: 'Pokhara → Chitwan',
        description: `Drive or tourist bus to Sauraha, Chitwan (3 hours). Afternoon: orientation walk on the park boundary — deer, peacocks, monitor lizards.`,
        accommodation: 'Jungle lodge, Sauraha', meals: 'Breakfast in Pokhara; dinner at lodge',
      },
      {
        day: 10, title: 'Chitwan: Elephants & Canoe',
        description: `Elephant Breeding Centre: calves and handlers — the day's highlight for children. Afternoon: canoe on the Rapti River (safe for children 5+, calm water with crocodiles on the banks).`,
        accommodation: 'Jungle lodge, Sauraha', meals: 'All meals at lodge',
      },
      {
        day: 11, title: 'Chitwan Jeep Safari',
        description: `Dawn jeep safari for wild rhinos (children 5+ welcome). The open-top jeep, forest sounds, and sudden rhino encounters create lifelong memories. Evening: Tharu cultural programme.`,
        accommodation: 'Jungle lodge, Sauraha', meals: 'All meals at lodge', distanceKm: 20,
      },
      {
        day: 12, title: 'Chitwan → Lumbini',
        description: `Drive west to Lumbini (3–4 hours). Birthplace of the Buddha — a meaningful destination for children old enough to understand history and religion.`,
        accommodation: 'Monastery guesthouse, Lumbini', meals: 'Breakfast at lodge; dinner at guesthouse',
      },
      {
        day: 13, title: 'Lumbini & Return to Kathmandu',
        description: `Morning: Maya Devi Temple and international monastery zone by bicycle (children love cycling between the ornate buildings). Afternoon bus to Kathmandu (6 hours) or fly from Bhairahawa.`,
        accommodation: 'Hotel, Thamel', meals: 'Breakfast at guesthouse; dinner in Thamel',
      },
      {
        day: 14, title: 'Kathmandu Farewell',
        description: `Final Thamel shopping (pashmina, wooden toys, brass bells). Swayambhunath for one last monkey visit. International departure.`,
        accommodation: 'Depart', meals: 'Breakfast; airport meals',
      },
    ],
  },

  {
    slug: 'nepal-off-beaten-path-14-days',
    title: 'Nepal Off the Beaten Path — 14 Days',
    excerpt: 'Beyond Kathmandu and Pokhara: Koshi Tappu\'s wild water buffalo, Ilam\'s tea gardens, the hidden temples of Gorkha, Bandipur\'s car-free Newari town, and the Tansen Silver City — a Nepal most tourists never see.',
    days: 14,
    activities: ['CULTURAL', 'WILDLIFE', 'TREKKING'],
    budget: 'BUDGET',
    difficulty: 'MODERATE',
    provinces: ['KOSHI', 'BAGMATI', 'GANDAKI', 'LUMBINI'],
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80',
    highlights: [
      'Koshi Tappu — wild water buffalo and migratory birds',
      'Ilam tea gardens — Nepal\'s finest tea region',
      'Bandipur — Nepal\'s most beautiful car-free hilltop town',
      'Tansen — a hilltop silver-craft city almost unknown to tourists',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Kathmandu',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1, title: 'Kathmandu Highlights',
        description: `Pashupatinath, Boudhanath, Swayambhunath. Get the standard Kathmandu landmarks done efficiently.`,
        accommodation: 'Hotel, Thamel', meals: 'All meals',
      },
      {
        day: 2, title: 'Kathmandu → Biratnagar → Koshi Tappu',
        description: `Fly to Biratnagar in eastern Nepal (1 hour). Drive to Koshi Tappu Wildlife Reserve (2 hours). Sunset boat ride.`,
        accommodation: 'Wildlife camp, Koshi Tappu', meals: 'Breakfast in Kathmandu; dinner at camp',
      },
      {
        day: 3, title: 'Koshi Tappu: Wild Buffalo & Birds',
        description: `Dawn canoe safari: wild Asian water buffalo (rarest in Nepal). 500+ bird species including Bengal florican. Afternoon jeep safari.`,
        accommodation: 'Wildlife camp, Koshi Tappu', meals: 'All meals at camp', distanceKm: 20,
      },
      {
        day: 4, title: 'Koshi Tappu → Ilam Tea Gardens',
        description: `Drive or local bus to Ilam (4 hours) — Nepal's premier tea-growing region in the eastern hills. Walk through tea gardens, watch plucking (if in season), taste fresh-processed Ilam tea.`,
        accommodation: 'Guesthouse, Ilam', meals: 'Trail meals', distanceKm: 100,
      },
      {
        day: 5, title: 'Ilam Hills & Return',
        description: `Morning walk in the Ilam hills — rhododendron forests, cardamom plantations, views of Kanchenjunga on clear days. Afternoon bus to Biratnagar, evening flight to Kathmandu.`,
        accommodation: 'Hotel, Thamel', meals: 'All meals',
      },
      {
        day: 6, title: 'Kathmandu → Gorkha',
        description: `Drive to Gorkha (4 hours) — the birthplace of the Gurkha soldiers and home of King Prithvi Narayan Shah. The Gorkha Palace (Gorkha Durbar) sits on a hilltop with an extraordinary 360° Himalayan panorama (Manaslu, Ganesh Himal, Annapurna II).`,
        accommodation: 'Guesthouse, Gorkha', meals: 'Breakfast in Kathmandu; dinner in Gorkha',
      },
      {
        day: 7, title: 'Gorkha Palace & Cave Temples',
        description: `Morning: Gorkha Durbar (hilltop palace and Kali temple, 45-minute climb). Afternoon: Tallokot viewpoint and the Upallokot shrine. Evening: Manakamana cable car (15 km south) optional detour.`,
        accommodation: 'Guesthouse, Gorkha', meals: 'All meals',
      },
      {
        day: 8, title: 'Gorkha → Bandipur',
        description: `Drive to Bandipur (1.5 hours). Nepal's finest car-free hilltop Newari town. Bazaar walk, Thani Mai hilltop viewpoint (Annapurna and Manaslu panorama), Siddha Cave.`,
        accommodation: 'Heritage guesthouse, Bandipur', meals: 'All meals',
      },
      {
        day: 9, title: 'Bandipur → Pokhara',
        description: `Morning sunrise walk on the Bandipur ridge. Drive to Pokhara (1.5 hours via Dumre). Afternoon lakeside and World Peace Pagoda.`,
        accommodation: 'Lakeside hotel, Pokhara', meals: 'Breakfast at Bandipur; dinner at Pokhara',
      },
      {
        day: 10, title: 'Pokhara → Tansen (Silver City)',
        description: `Drive south to Tansen (3 hours) — a hilltop Newari town on the Palpa ridge almost unknown to foreign tourists. Famous for its Dhaka textile (hand-woven on traditional looms) and metalwork. Tansen Durbar, Shrinagar Hill viewpoint with views to the Terai.`,
        accommodation: 'Hotel, Tansen', meals: 'Breakfast in Pokhara; dinner in Tansen',
      },
      {
        day: 11, title: 'Tansen Craft Exploration',
        description: `Full day: wander Tansen's old bazaar, watch Dhaka weavers on traditional looms, visit metalworkers producing Tansen's famous dhungro (bronze water pots). Rani Mahal (ruins of a Rana palace on a riverside cliff, 12 km south).`,
        accommodation: 'Hotel, Tansen', meals: 'All meals',
      },
      {
        day: 12, title: 'Tansen → Lumbini',
        description: `Drive to Lumbini (3 hours). Birthplace of the Buddha — the perfect counterpoint to all the Hinduism seen so far.`,
        accommodation: 'Monastery guesthouse, Lumbini', meals: 'Breakfast at Tansen; dinner at guesthouse',
      },
      {
        day: 13, title: 'Lumbini Full Day',
        description: `Maya Devi Temple, Ashoka Pillar, monastery zones, Tilaurakot day trip. Full immersion in the Buddhist world.`,
        accommodation: 'Monastery guesthouse, Lumbini', meals: 'Vegetarian meals', distanceKm: 55,
      },
      {
        day: 14, title: 'Return to Kathmandu',
        description: `Bus from Bhairahawa to Kathmandu (8 hours) or fly (45 min). Farewell dinner in Thamel. International departure.`,
        accommodation: 'Depart', meals: 'Breakfast; dinner in Kathmandu',
      },
    ],
  },
]

async function main() {
  console.log('🌏 Seeding Batch 5 — 14-day itineraries...\n')
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

  console.log(`\n✅ Batch 5 done — ${created} created, ${skipped} skipped`)
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
