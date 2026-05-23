/**
 * Batch 1 of 5 — 1-day itineraries (10 total)
 * Run from backend/: node prisma/seed-itineraries-batch1.js
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const ITINERARIES = [
  // ─── 1 ───────────────────────────────────────────────────────────────────
  {
    slug: 'kathmandu-spiritual-highlights-1-day',
    title: 'Kathmandu Spiritual Highlights in 1 Day',
    excerpt: 'The three most sacred sites in Kathmandu — Pashupatinath, Boudhanath, and Swayambhunath — in one powerful day that covers Hindu and Buddhist Nepal.',
    days: 1,
    activities: ['SPIRITUAL', 'CULTURAL'],
    budget: 'BUDGET',
    difficulty: 'EASY',
    provinces: ['BAGMATI'],
    heroImage: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1200&q=80',
    highlights: [
      'Morning aarti ceremony at Pashupatinath Temple',
      'Walk the kora around Boudhanath Stupa with monks',
      'Sunset views from Swayambhunath (Monkey Temple)',
      'Experience both Hindu and Buddhist sacred traditions',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Kathmandu',
    featured: true,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Sacred Kathmandu — Temples, Stupas & Sunset',
        description: `**Morning (6:30 AM) — Pashupatinath Temple**\n\nBegin at dawn at Pashupatinath, Nepal's holiest Hindu shrine on the banks of the Bagmati River. Arrive early to witness the morning aarti (fire ritual). Walk the ghats where cremation ceremonies take place — a profound, sobering encounter with the Hindu cycle of life. Foreign visitors cannot enter the main sanctum but can explore the surrounding temples and watch from the eastern bank.\n\n**Mid-Morning (9:30 AM) — Boudhanath Stupa**\n\nA 20-minute taxi ride brings you to Boudhanath, one of the largest stupas in the world and the heart of Tibetan Buddhist culture in Nepal. Walk the kora (circumambulation) clockwise with pilgrims and monks spinning prayer wheels. Explore the surrounding monasteries and stop for butter tea at one of the rooftop cafés.\n\n**Afternoon (12:30 PM) — Lunch in Boudha**\n\nEat at a café overlooking the stupa — daal bhat (lentil rice) or Tibetan momos are the local favourites.\n\n**Afternoon (2:00 PM) — Swayambhunath**\n\n360 stone steps lead to Swayambhunath, perched on a hilltop with panoramic views of the Kathmandu Valley. Known as the Monkey Temple, it blends Buddhist and Hindu iconography. Arrive by 4 PM to catch golden hour light on the golden spire.\n\n**Evening — Return & Rest**\n\nReturn to Thamel for dinner. Try a traditional Nepali restaurant for a thali set.`,
        accommodation: 'Guesthouse or hotel in Thamel',
        meals: 'Breakfast before start; lunch in Boudhanath; dinner in Thamel',
      },
    ],
  },

  // ─── 2 ───────────────────────────────────────────────────────────────────
  {
    slug: 'kathmandu-three-durbar-squares-1-day',
    title: 'Kathmandu\'s Three Durbar Squares in 1 Day',
    excerpt: 'A UNESCO World Heritage marathon — visit all three royal palace complexes of the Kathmandu Valley in a single action-packed day of medieval courtyards, wood-carved temples, and living goddesses.',
    days: 1,
    activities: ['CULTURAL'],
    budget: 'BUDGET',
    difficulty: 'EASY',
    provinces: ['BAGMATI'],
    heroImage: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&q=80',
    highlights: [
      'Kathmandu Durbar Square and Kumari (living goddess) courtyard',
      'Patan Durbar Square\'s Golden Temple and exquisite bronze work',
      'Bhaktapur\'s perfectly preserved medieval streetscape',
      'Three UNESCO World Heritage Sites in one day',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Bhaktapur',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Hanuman Dhoka → Patan → Bhaktapur',
        description: `**Morning (8:00 AM) — Kathmandu Durbar Square (Hanuman Dhoka)**\n\nStart at the historic heart of old Kathmandu. Explore Hanuman Dhoka palace, the nine-storey Basantapur Tower, and the temple of the Kumari (living goddess) — you may catch a glimpse of her at the courtyard window. Allocate 1.5–2 hours. Entry fee applies for foreigners.\n\n**Mid-Morning (10:00 AM) — Freak Street & Old Bazaar**\n\nWalk through the narrow alleys of Asan and Indra Chowk, where spice and bead merchants have traded for centuries. Sample local street snacks.\n\n**Midday (11:30 AM) — Taxi to Patan**\n\nA 20-minute ride south brings you to Lalitpur (Patan). Patan Durbar Square is considered the finest of the three for its pure Newari art and architecture — the Golden Temple (Hiranya Varna Mahavihar), the Krishna Mandir, and the Patan Museum are highlights. Allocate 2 hours.\n\n**Lunch (1:30 PM) — Patan**\n\nEat at a rooftop café overlooking the square. Patan has excellent vegetarian options.\n\n**Afternoon (3:00 PM) — Bus or taxi to Bhaktapur**\n\nBhaktapur is 30–40 minutes east and requires a separate entry fee (worth every paisa). The 55-Window Palace, Nyatapola Temple (Nepal's tallest pagoda), and the potters' square are unmissable. End the day with Bhaktapur's famous juju dhau (king curd) from a clay pot.\n\n**Evening — Return to Kathmandu**\n\nLocal buses run back to Kathmandu until around 7 PM.`,
        accommodation: 'Hotel in Thamel, Kathmandu',
        meals: 'Street snacks and café lunch; dinner in Thamel',
      },
    ],
  },

  // ─── 3 ───────────────────────────────────────────────────────────────────
  {
    slug: 'pokhara-lake-and-hills-1-day',
    title: 'Pokhara: Phewa Lake, Peace Pagoda & Sarangkot in 1 Day',
    excerpt: 'A perfect single day in Pokhara combining a sunrise viewpoint, a Himalayan lake by boat, a hilltop peace shrine, and the waterfall and caves of the lakeside.',
    days: 1,
    activities: ['RELAXATION', 'CULTURAL'],
    budget: 'BUDGET',
    difficulty: 'EASY',
    provinces: ['GANDAKI'],
    heroImage: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&q=80',
    highlights: [
      'Pre-dawn sunrise over the Annapurna range from Sarangkot',
      'Rowing across Phewa Lake to the Tal Barahi temple island',
      'The World Peace Pagoda gleaming above the lake',
      'Davis Falls and Gupteshwor Cave in the afternoon',
    ],
    startLocation: 'Pokhara',
    endLocation: 'Pokhara',
    featured: true,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Sunrise, Lake, Pagoda & Waterfalls',
        description: `**Pre-dawn (5:00 AM) — Sarangkot Sunrise**\n\nJeeps depart from Lakeside from around 4:30 AM. Sarangkot (1,592m) offers one of Nepal's most iconic views — the Annapurna massif, Machhapuchhre (Fishtail), and Dhaulagiri lit up in orange at sunrise. Return to Lakeside for breakfast by 8 AM.\n\n**Morning (9:00 AM) — Phewa Lake & Tal Barahi Temple**\n\nRent a wooden rowboat on Phewa Lake (the second largest lake in Nepal) and row to the Tal Barahi island temple in the middle of the lake. The reflections of the Annapurna range on the water are stunning on clear days. 1–2 hours on the lake.\n\n**Mid-Morning (11:00 AM) — World Peace Pagoda**\n\nYou can hike up through the forest (45 min) or take a boat across and short walk up. The gleaming white pagoda was built by Japanese monks and sits above the lake with views in every direction.\n\n**Lunch (12:30 PM) — Lakeside Restaurant**\n\nPokhara Lakeside has dozens of cafés. Try a thakali set meal for authentic flavour.\n\n**Afternoon (2:30 PM) — Davis Falls & Gupteshwor Cave**\n\nDavis Falls (Patale Chhango) is a waterfall that disappears underground into a gorge — especially dramatic in monsoon. Directly opposite, Gupteshwor Cave has a massive natural cavern with Hindu shrines inside.\n\n**Evening — Lakeside Stroll**\n\nWalk Lakeside's main strip as the mountains turn pink at dusk. Dinner at any lakeside restaurant.`,
        accommodation: 'Lakeside hotel or guesthouse, Pokhara',
        meals: 'Breakfast at Lakeside café; lunch at Lakeside restaurant; dinner at your choice',
      },
    ],
  },

  // ─── 4 ───────────────────────────────────────────────────────────────────
  {
    slug: 'nagarkot-sunrise-bhaktapur-1-day',
    title: 'Nagarkot Sunrise + Bhaktapur Medieval City — 1 Day',
    excerpt: 'Watch dawn break over the Himalayas from Nagarkot\'s hilltop then descend to Bhaktapur\'s perfectly preserved medieval city for a full afternoon of temples and curd.',
    days: 1,
    activities: ['RELAXATION', 'CULTURAL'],
    budget: 'BUDGET',
    difficulty: 'EASY',
    provinces: ['BAGMATI'],
    heroImage: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=1200&q=80',
    highlights: [
      'Sunrise Himalayan panorama including Everest on clear days',
      'Downhill bike ride or drive through terraced hills to Bhaktapur',
      "Bhaktapur\'s 55-Window Palace and Nyatapola Temple",
      'Juju dhau (king curd) — Bhaktapur\'s famous dessert',
    ],
    startLocation: 'Kathmandu',
    endLocation: 'Kathmandu (via Bhaktapur)',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Nagarkot Dawn → Bhaktapur Heritage',
        description: `**Pre-dawn (4:30 AM) — Drive to Nagarkot**\n\nNagarkot is 32 km east of Kathmandu (1–1.5 hours). Hire a taxi the night before to collect you at 4:30 AM. The 2,175m hilltop viewpoint offers one of the widest Himalayan panoramas accessible from Kathmandu — on a clear day you can see from Dhaulagiri in the west to Kanchenjunga in the east, with Everest (far right) visible as a dark pyramid.\n\n**Morning (7:30 AM) — Nagarkot Breakfast & Walk**\n\nAfter sunrise, have breakfast at one of the hilltop lodges. Take a short walk along the ridge path for changing angles on the mountains.\n\n**Late Morning (10:00 AM) — Descent to Bhaktapur**\n\nOption: hire a mountain bike at Nagarkot and cycle the 12 km downhill to Bhaktapur (2–2.5 hours, mostly downhill through terraced farmland). Or take a taxi (20 min).\n\n**Afternoon (12:00 PM) — Bhaktapur Durbar Square**\n\nBhaktapur requires a tourist entry fee. Spend the afternoon exploring: the **55-Window Palace** (a masterpiece of woodcarving), **Nyatapola Temple** (Nepal's tallest pagoda, 5 storeys), the pottery square in Tachupal Tole, and the excellent **Bhaktapur National Art Museum**.\n\n**Late Afternoon (3:30 PM) — Juju Dhau**\n\nFind a pottery shop near the square for Bhaktapur's signature king curd, served in unglazed clay pots. Best curd in Nepal.\n\n**Evening — Return to Kathmandu**\n\nBus or taxi back (30–45 min).`,
        accommodation: 'Hotel in Kathmandu or overnight at Nagarkot lodge (if arriving evening before)',
        meals: 'Sunrise breakfast at Nagarkot lodge; lunch in Bhaktapur; dinner in Kathmandu',
      },
    ],
  },

  // ─── 5 ───────────────────────────────────────────────────────────────────
  {
    slug: 'patan-art-architecture-1-day',
    title: 'Patan: Art, Architecture & the Golden Temple — 1 Day',
    excerpt: 'Patan (Lalitpur) is Nepal\'s city of art. Spend a full day immersed in its exquisite Durbar Square, the world-class Patan Museum, the Golden Temple, and the still-living craft workshops of its medieval streets.',
    days: 1,
    activities: ['CULTURAL'],
    budget: 'BUDGET',
    difficulty: 'EASY',
    provinces: ['BAGMATI'],
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80',
    highlights: [
      'Patan Durbar Square — finest Newari architecture in Nepal',
      'Patan Museum — best museum in Nepal (inside the royal palace)',
      'Hiranya Varna Mahavihar (Golden Temple) gilded courtyard',
      'Craft workshops: thangka painters, bronze casters, woodcarvers',
    ],
    startLocation: 'Patan (Lalitpur)',
    endLocation: 'Patan',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Art City Full Immersion',
        description: `**Morning (8:30 AM) — Patan Durbar Square**\n\nPatan Durbar Square (UNESCO) is consistently rated the most architecturally refined of the three Kathmandu Valley squares. Start with the **Krishna Mandir** — a 17th-century stone temple with 21 spires depicting scenes from the Mahabharata and Ramayana in stone bas-relief. Then visit the **Vishwanath Temple** and the **Char Narayan Temple**.\n\n**Mid-Morning (10:00 AM) — Patan Museum**\n\nInside the royal palace, the Patan Museum is the finest museum in Nepal for understanding Newari art and Hinduism. Budget 1.5 hours for its beautifully curated collection of bronze statues, ritual objects, and woodwork.\n\n**Lunch (12:00 PM) — Rooftop café at Durbar Square**\n\nSeveral cafés overlook the square. The views over the temples while eating daal bhat are unforgettable.\n\n**Afternoon (1:30 PM) — Golden Temple (Hiranya Varna Mahavihar)**\n\n10 minutes' walk from the square, the Golden Temple (1409 CE) is a Buddhist monastery with a stunning gilded façade and inner courtyard. Remove your shoes and leather items at the entrance.\n\n**Afternoon (2:30 PM) — Oku Bahal & Craft Workshops**\n\nWalk the medieval streets north of the square toward Oku Bahal. Stop at bronze casting and thangka painting workshops — many are still working cooperatives rather than tourist shops. You can buy directly from the artisans.\n\n**Late Afternoon (4:30 PM) — Mahabouddha Temple**\n\n10-minute walk east: the "Temple of a Thousand Buddhas" is covered entirely in terracotta tiles, each bearing a Buddha image — an extraordinary structure rebuilt after the 1934 earthquake.\n\n**Evening — Return to Kathmandu**\n\nTaxi or public bus from Patan Gate (20–30 min). Dinner in Thamel or Patan's own restaurant strip.`,
        accommodation: 'Hotel in Thamel or Patan',
        meals: 'Breakfast before arrival; lunch at Durbar Square café; dinner in Kathmandu',
      },
    ],
  },

  // ─── 6 ───────────────────────────────────────────────────────────────────
  {
    slug: 'chitwan-wildlife-day-safari-1-day',
    title: 'Chitwan National Park — Full Wildlife Day',
    excerpt: 'One intense, wildlife-packed day in Chitwan National Park: elephant grasslands at dawn, a jungle canoe safari, a walking safari for rhinos, and a Tharu cultural programme at sunset.',
    days: 1,
    activities: ['WILDLIFE'],
    budget: 'MIDRANGE',
    difficulty: 'EASY',
    provinces: ['BAGMATI'],
    heroImage: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1200&q=80',
    highlights: [
      'Dawn Jeep safari — one-horned rhinoceros and deer in the grasslands',
      'Dugout canoe ride on the Rapti River past gharial crocodiles',
      'Walking safari with armed naturalist guide',
      'Tharu stick-dance cultural programme in the evening',
    ],
    startLocation: 'Sauraha, Chitwan',
    endLocation: 'Sauraha, Chitwan',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Dawn Safari, Canoe Ride & Tharu Culture',
        description: `**Dawn (5:30 AM) — Jeep Safari**\n\nStart before sunrise for the best wildlife activity. Jeep safaris enter the park at first light when rhinos, deer, and birds are most active. The UNESCO-listed park has over 700 one-horned rhinos and is one of the best places in Asia to see them in the wild. Tiger sightings (68 tigers estimated) are rare but possible. Duration: 3–4 hours.\n\n**Morning (9:30 AM) — Breakfast & Rest**\n\nReturn to your lodge for breakfast. Rest during the warm midday hours.\n\n**Midday (11:00 AM) — Elephant Breeding Centre**\n\nVisit the government Elephant Breeding Centre near Sauraha to see calves and learn about the conservation programme. Short walk from the park entrance.\n\n**Afternoon (1:00 PM) — Dugout Canoe Safari**\n\nFloat silently down the Rapti River in a traditional dugout canoe. Gharial and marsh mugger crocodiles sun themselves on the banks. Kingfishers, storks, and herons line the waterway. Duration: 1.5–2 hours.\n\n**Afternoon (3:30 PM) — Walking Safari**\n\nAn armed park naturalist leads a 2-hour walking safari through grassland and sal forest. Rhino, spotted deer, langur monkeys, and hundreds of bird species. Closer encounters than a jeep allows.\n\n**Evening (7:00 PM) — Tharu Cultural Programme**\n\nTharu people are the indigenous community of the Terai. Watch their traditional stick dance (Deuda) and fire dance programme at a local cultural centre. Dinner at your lodge.`,
        accommodation: 'Jungle lodge or guesthouse in Sauraha',
        meals: 'Breakfast at lodge; lunch at local restaurant; dinner at lodge',
        distanceKm: 15,
      },
    ],
  },

  // ─── 7 ───────────────────────────────────────────────────────────────────
  {
    slug: 'bhaktapur-full-day-medieval-1-day',
    title: 'Bhaktapur: A Full Day in Nepal\'s Best-Preserved Medieval City',
    excerpt: 'Bhaktapur is Nepal\'s time machine. Spend a full unrushed day exploring its three main squares, hidden courtyards, woodcarving workshops, and the only town in Nepal where you can still see daily life lived entirely in a medieval urban framework.',
    days: 1,
    activities: ['CULTURAL'],
    budget: 'BUDGET',
    difficulty: 'EASY',
    provinces: ['BAGMATI'],
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80',
    highlights: [
      'Bhaktapur Durbar Square and the 55-Window Palace',
      'Nyatapola Temple — Nepal\'s tallest pagoda',
      'Tachupal Tole pottery square',
      'Dattatreya Square and the peacock window',
    ],
    startLocation: 'Bhaktapur',
    endLocation: 'Bhaktapur',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Three Squares, Temples & Artisan Workshops',
        description: `**Morning (8:00 AM) — Bhaktapur Durbar Square**\n\nPay the entry fee at the main gate (foreigners: NPR 1,500). Bhaktapur Durbar Square is smaller and less touristy than Kathmandu's, but arguably more atmospheric. Key sites: the **55-Window Palace** with its extraordinary woodcarved windows, the **Golden Gate** (Sun Dhoka) with its gilded torana, and the **Palace of 55 Windows** museum inside.\n\n**Mid-Morning (10:00 AM) — Nyatapola Temple (Taumadhi Square)**\n\n5-minute walk leads to Taumadhi Square where Nyatapola Temple (1702) towers 30 metres over the city. Nepal's tallest pagoda has never been damaged by earthquakes. Climb the steep stepped base for views. Café Nyatapola beside it has the best rooftop view in Bhaktapur.\n\n**Lunch (12:00 PM) — Juju Dhau**\n\nBhaktapur's king curd (juju dhau) in a clay pot is one of Nepal's finest culinary experiences. Many pottery shops near Taumadhi sell it.\n\n**Afternoon (1:30 PM) — Tachupal Tole (Pottery Square)**\n\nThe oldest square in Bhaktapur is still a working pottery centre. Sit and watch potters shape clay on the wheel, drying their work in the sun. A great place to buy affordable locally-made ceramics.\n\n**Afternoon (3:00 PM) — Dattatreya Square & Peacock Window**\n\nWalk east to the quiet Dattatreya Square with its unusual temple (serving both Hindu and Buddhist communities). Then find the famous **Peacock Window** on a side street — a stone masterpiece carved with extraordinary detail, often called the "Mona Lisa of Nepal."\n\n**Evening (5:00 PM) — Sunset from the city walls**\n\nWalk to the eastern edge of the old city for views over the Himalayan foothills at sunset.`,
        accommodation: 'Guesthouse in Bhaktapur old city or hotel in Kathmandu',
        meals: 'Breakfast before arrival; lunch in Taumadhi Square; juju dhau for dessert; dinner in Bhaktapur or Kathmandu',
      },
    ],
  },

  // ─── 8 ───────────────────────────────────────────────────────────────────
  {
    slug: 'bandipur-hilltop-village-1-day',
    title: 'Bandipur: Nepal\'s Most Beautiful Hilltop Village — 1 Day',
    excerpt: 'Bandipur is a Newari hilltown frozen in time, with no cars on its flagstone main street, stunning Himalayan views, and one of Nepal\'s most atmospheric bazaars. An easy day trip from Pokhara or Kathmandu.',
    days: 1,
    activities: ['CULTURAL', 'RELAXATION'],
    budget: 'BUDGET',
    difficulty: 'EASY',
    provinces: ['GANDAKI'],
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80',
    highlights: [
      'Car-free Newari bazaar street dating to 18th-century trading era',
      'Thani Mai hilltop viewpoint — Annapurna and Manaslu panorama',
      'Siddha Cave — one of South Asia\'s largest caves',
      'Traditional Newari architecture unspoiled by modernisation',
    ],
    startLocation: 'Bandipur (via Dumre, Prithvi Highway)',
    endLocation: 'Bandipur',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Bazaar, Cave & Himalayan Views',
        description: `**Getting there**\n\nBandipur is 140 km from Kathmandu or 60 km from Pokhara. Take any Prithvi Highway bus to **Dumre** junction, then a shared jeep 8 km up the hill to Bandipur (30 min). No cars enter the old town.\n\n**Morning (9:00 AM) — Tudikhel (Main Bazaar)**\n\nBandipur's main street is one of Nepal's finest examples of Newari town planning — a straight, stone-paved bazaar flanked by three-storey merchant houses with intricately carved wooden façades. Walk its entire length (500m) and duck into the alleys off the main drag.\n\n**Mid-Morning (10:30 AM) — Thani Mai Temple & Viewpoint**\n\nA 20-minute uphill walk leads to the hilltop Thani Mai Temple with an extraordinary 360° panorama: the Annapurna and Manaslu ranges dominate the north, with rolling foothills to the south.\n\n**Lunch (12:00 PM) — Local Restaurant**\n\nBandipur has several excellent family-run restaurants. The honey from local hives and buckwheat bread are local specialties.\n\n**Afternoon (1:30 PM) — Siddha Cave**\n\n25-minute walk downhill west of town. Siddha Cave is one of the largest caves in South Asia — 450 metres deep with massive stalactite and stalagmite formations. Bring a torch. A guide is recommended (available at the entrance).\n\n**Late Afternoon (4:00 PM) — Sunset at the bazaar**\n\nReturn to the main street and watch the mountains turn golden. Buy local honey and herbal teas to take home.\n\n**Evening — Return or overnight**\n\nShared jeeps run back to Dumre until 5 PM for onward buses. Alternatively, stay overnight at one of Bandipur's excellent heritage guesthouses.`,
        accommodation: 'Heritage guesthouse in Bandipur or return to Pokhara/Kathmandu',
        meals: 'Lunch at local restaurant; snacks and honey tasting on the bazaar',
      },
    ],
  },

  // ─── 9 ───────────────────────────────────────────────────────────────────
  {
    slug: 'lumbini-birthplace-buddha-1-day',
    title: 'Lumbini: Birthplace of the Buddha — 1 Day',
    excerpt: 'The holiest site in Buddhism — Lumbini is where Siddhartha Gautama was born in 563 BCE. A UNESCO World Heritage Site, its sacred garden, Maya Devi Temple, and monastery zone from 14 nations make for an unforgettable day.',
    days: 1,
    activities: ['SPIRITUAL', 'CULTURAL'],
    budget: 'BUDGET',
    difficulty: 'EASY',
    provinces: ['LUMBINI'],
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80',
    highlights: [
      'Maya Devi Temple — exact birthplace of the Buddha',
      'The Ashoka Pillar erected by Emperor Ashoka in 249 BCE',
      'Eternal Peace Flame burning since 1986',
      'Monasteries from China, Japan, Myanmar, Sri Lanka and more',
    ],
    startLocation: 'Lumbini (Bhairahawa)',
    endLocation: 'Lumbini',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Sacred Garden, Maya Devi Temple & Monastery Zone',
        description: `**Morning (7:00 AM) — Sacred Garden & Maya Devi Temple**\n\nArrive early before the crowds and heat. The **Sacred Garden** is the ancient core of Lumbini. Inside it stands the **Maya Devi Temple** built over the exact spot where Queen Maya Devi gave birth to Siddhartha Gautama. Inside the temple, a stone marker with a footprint and the nativity sculpture marks the birthplace. Remove shoes before entering.\n\nBeside the temple, the **Ashoka Pillar** (249 BCE) still stands where Emperor Ashoka planted it after his pilgrimage. The inscription in ancient Brahmi script confirms this as the birthplace.\n\nThe **Puskarini Pond** (sacred bathing pond) and the **Eternal Peace Flame** are within the garden.\n\n**Mid-Morning (10:00 AM) — Eastern Monastic Zone**\n\nLumbini's master plan (by Kenzo Tange) divides the monastery zone into Eastern (Theravada Buddhist countries) and Western (Mahayana Buddhist countries). Start with the **Myanmar Golden Temple**, the **Sri Lanka Monastery**, and the **Thai Royal Temple**.\n\n**Lunch (12:00 PM) — Lumbini Village or Guesthouse**\n\nEat at one of the monasteries' guesthouses or the Lumbini Garden Restaurant.\n\n**Afternoon (1:30 PM) — Western Monastic Zone**\n\nThe Western zone has **Chinese, Korean, Japanese, German** and other monasteries — each built in their home country's traditional architectural style. The **Great Drigung Kagyud Lotus Stupa** (Tibet) and the **World Peace Pagoda** (Japan) are the most photogenic.\n\n**Afternoon (3:30 PM) — Lumbini Museum**\n\nThe Lumbini Museum near the garden has archaeological finds from the site, including coins, terracotta figures, and inscriptions dating back 2,500 years.\n\n**Evening — Meditation at sunset**\n\nReturn to the Sacred Garden for the golden-hour quiet that descends over this most peaceful of places.`,
        accommodation: 'Monastery guesthouse in Lumbini or hotel in Bhairahawa',
        meals: 'Breakfast before arrival; lunch at monastery guesthouse or restaurant',
      },
    ],
  },

  // ─── 10 ──────────────────────────────────────────────────────────────────
  {
    slug: 'pokhara-paragliding-adventure-1-day',
    title: 'Pokhara Paragliding & Sarangkot Adventure Day',
    excerpt: 'Nepal\'s adventure capital in one adrenaline day — sunrise viewpoint, tandem paragliding over Phewa Lake with the Annapurna backdrop, white-water rafting on the Seti River, and a bungee sunset.',
    days: 1,
    activities: ['ADVENTURE'],
    budget: 'MIDRANGE',
    difficulty: 'EASY',
    provinces: ['GANDAKI'],
    heroImage: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80',
    highlights: [
      'Tandem paragliding from Sarangkot over Phewa Lake (30 min flight)',
      'Annapurna and Machhapuchhre as your paragliding backdrop',
      'Seti River white-water rafting (Grade III)',
      'Option to add zip-lining or bungee jumping in the afternoon',
    ],
    startLocation: 'Pokhara Lakeside',
    endLocation: 'Pokhara Lakeside',
    featured: false,
    published: true,
    dayPlans: [
      {
        day: 1,
        title: 'Paragliding, Rafting & Lakeside Sunset',
        description: `**Early Morning (5:30 AM) — Sarangkot Sunrise (Optional)**\n\nIf the weather is clear, start with a sunrise jeep trip to Sarangkot (1,592m) for the Himalayan panorama. This also gives your paragliding pilot a chance to assess conditions.\n\n**Morning (8:30 AM) — Tandem Paragliding**\n\nPokhara is one of the world's best paragliding destinations thanks to reliable thermals and the Himalayan backdrop. **Tandem flights** depart from Sarangkot and last 25–40 minutes, soaring over Phewa Lake with Machhapuchhre (6,993m) directly ahead. Book with a licensed operator (around USD 80–90). Acrophobia note: you hang in a harness, no experience needed, and pilots are professionals.\n\n**Mid-Morning (10:30 AM) — Debrief & Breakfast**\n\nYour landing zone is Phewa Lakeside. Recover with a big breakfast at a lakeside café.\n\n**Afternoon (1:00 PM) — Seti River Rafting**\n\nThe Seti River offers half-day Grade II–III white-water rafting from Pokhara (USD 25–35 per person). Expect fun rapids, cliff walls, and river beaches. No experience needed. Duration: 3–4 hours including transport.\n\n**Late Afternoon (5:00 PM) — Zip-line or Relax**\n\nPokhara has one of the world's steepest zip-lines (Hemja) — 1.8 km long at 140 km/h. Alternatively, rest at the lakeside and watch the mountains turn pink at sunset.\n\n**Evening — Lakeside dinner**\n\nEnd with dinner at one of Pokhara's excellent restaurants. The lakeside has everything from Dal Bhat to Italian pizza.`,
        accommodation: 'Lakeside hotel, Pokhara',
        meals: 'Breakfast at Lakeside café; lunch box during rafting; dinner at lakeside restaurant',
      },
    ],
  },
]

async function main() {
  console.log('🌏 Seeding Batch 1 — 1-day itineraries...\n')
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

  console.log(`\n✅ Batch 1 done — ${created} created, ${skipped} skipped`)
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
