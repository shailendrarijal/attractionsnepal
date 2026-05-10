import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import slugify from 'slugify'

const prisma = new PrismaClient()
const slug = (n) => slugify(n, { lower: true, strict: true })

const places = [
  {
    name: 'Kathmandu Durbar Square',
    category: 'DURBAR_PALACE',
    summary: 'A UNESCO World Heritage Site at the historic heart of Kathmandu containing over 50 ancient temples, palaces, and courtyards including the Hanuman Dhoka palace complex and the living-goddess Kumari Ghar.',
    story: `<p>Kathmandu Durbar Square (Basantapur Durbar Kshetra) is one of the most extraordinary open-air museums in the world. As the historic royal palace of the Malla kings and the early Shah dynasty, the square contains a dense concentration of pagoda temples, courtyards, and statues spanning almost a millennium of Newari craftsmanship.</p>
<p>The complex includes the Hanuman Dhoka Palace (where Prithvi Narayan Shah was crowned in 1768), the Kumari Ghar (home of the Living Goddess), the Taleju Temple, Kasthamandap — the ancient wooden pavilion that gave Kathmandu its name — and dozens of smaller temples dedicated to Hindu and Buddhist deities.</p>
<p>The 2015 Gorkha earthquake caused significant damage to several structures, including the Kasthamandap and Vatsala Temple, and restoration work backed by international heritage organisations continues today.</p>
<h3>Highlights</h3>
<ul>
  <li>Hanuman Dhoka Palace and the Old Royal Palace complex</li>
  <li>Kumari Ghar — glimpse the living goddess at her window</li>
  <li>Taleju Bhawani Temple (open to non-Hindus only during Indra Jatra festival)</li>
  <li>Kal Bhairav — the terrifying six-armed black stone deity</li>
  <li>Kasthamandap — restored pavilion built from a single tree</li>
</ul>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.7043,
    lng: 85.3074,
    elevation: 1308,
    entryFee: 'NPR 1,000 (foreigners) / NPR 500 (SAARC) / Free (Nepali citizens)',
    bestSeason: 'Oct–Dec, Feb–Apr',
    openingHours: '9:00 AM – 7:00 PM (ticketed zone)',
    howToGetThere: 'Located in the heart of old Kathmandu, 1 km from New Road. Easily reached by taxi, rickshaw, or on foot from Thamel (20–30 min walk). Look for the signs to Basantapur.',
    gygQuery: 'Kathmandu Durbar Square',
    bookingCity: 'Kathmandu',
    seoTitle: 'Kathmandu Durbar Square — UNESCO World Heritage Site Guide',
    seoDescription: 'Explore Kathmandu Durbar Square, a UNESCO World Heritage Site with 50+ ancient temples, the Hanuman Dhoka palace, and the living goddess Kumari. Visiting tips, entry fees, and history.',
    published: true,
    featured: true,
    publishedAt: new Date(),
  },
  {
    name: 'Swayambhunath Stupa',
    category: 'STUPA',
    summary: 'One of the oldest and most sacred Buddhist sites in the world, perched atop a hillock 3 km west of Kathmandu, famous for its golden spire, all-seeing Buddha eyes, and the resident monkeys that earn it the nickname "Monkey Temple".',
    story: `<p>Swayambhunath is a self-arisen stupa — according to legend, a lotus flower bloomed here before the Kathmandu Valley was drained of its primordial lake, and the light radiating from it was so great that gods came from afar to worship. The stupa is believed to be over 2,500 years old, making it one of the oldest religious sites in Nepal.</p>
<p>Designated a UNESCO World Heritage Site in 1979, the complex sits atop a hill reached by 365 stone steps (one for each day of the year) lined with stone statues of the Buddha and Bodhisattvas. The great white dome represents the world, and the gilded spire above it the 13 stages of enlightenment.</p>
<p>The four painted faces of the stupa — the all-seeing eyes of Buddha — have become one of the most recognisable symbols of Nepal, gazing out to the four cardinal directions over the entire valley.</p>
<h3>What to See</h3>
<ul>
  <li>The main stupa with its gleaming golden spire and painted Buddha eyes</li>
  <li>Harati Devi Temple — Hindu goddess of smallpox and mother of children</li>
  <li>Shantipur — a sealed chamber said to contain a powerful tantric deity</li>
  <li>Resident rhesus macaques (the "monkey" in Monkey Temple)</li>
  <li>Panoramic views over the Kathmandu Valley</li>
</ul>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.7150,
    lng: 85.2900,
    elevation: 1336,
    entryFee: 'NPR 200 (foreigners) / NPR 50 (SAARC) / Free (Nepali citizens)',
    bestSeason: 'Oct–Mar',
    openingHours: '5:00 AM – 8:00 PM daily',
    howToGetThere: 'About 3 km west of Thamel. Take a taxi (10 min, ~NPR 300) or walk through Chhetrapati and up the main pilgrim road. The eastern staircase of 365 steps is the traditional approach.',
    gygQuery: 'Swayambhunath Monkey Temple Kathmandu',
    bookingCity: 'Kathmandu',
    seoTitle: 'Swayambhunath Stupa (Monkey Temple) — Kathmandu Guide',
    seoDescription: 'Visit Swayambhunath Stupa, the ancient Monkey Temple of Kathmandu — a UNESCO World Heritage Site with the iconic Buddha eyes, golden spire, and resident macaques.',
    published: true,
    featured: true,
    publishedAt: new Date(),
  },
  {
    name: 'Bhaktapur Durbar Square',
    category: 'DURBAR_PALACE',
    summary: 'The most intact of the three medieval royal squares in the Kathmandu Valley and a UNESCO World Heritage Site, renowned for the 55-Window Palace, the Golden Gate, and the five-storey Nyatapola Temple — Nepal\'s tallest pagoda.',
    story: `<p>Bhaktapur — the "City of Devotees" — is the best-preserved medieval city in the Kathmandu Valley, and its Durbar Square is its crowning glory. Established as the capital of the Malla kingdom in the 12th century, the city flourished under King Yaksha Malla and reached its cultural peak between the 14th and 18th centuries.</p>
<p>The square contains architectural masterpieces that rank among the finest in Asia. The 55-Window Palace, built by King Bhupatindra Malla in the 18th century, features an extraordinary carved peacock-motif wooden lattice gallery. The Golden Gate (Sun Dhoka), considered the finest example of metalwork in Nepal, leads through to the Taleju courtyard.</p>
<p>The Nyatapola Temple, Bhaktapur's most famous landmark, is Nepal's tallest pagoda at 30 metres, built by King Bhupatindra Malla in just seven months in 1702. Five pairs of stone guardians on the staircase — warriors, elephants, lions, griffons, and goddesses — are said to be each ten times more powerful than the one below.</p>
<h3>Highlights</h3>
<ul>
  <li>Nyatapola Temple — Nepal's tallest pagoda (5 storeys, 30 m)</li>
  <li>55-Window Palace with stunning peacock woodcarvings</li>
  <li>Golden Gate (Sun Dhoka) — Nepal's finest metalwork</li>
  <li>Bhairavnath Temple and Pashupatinath Temple</li>
  <li>Newari pottery and traditional crafts in the surrounding lanes</li>
</ul>`,
    district: 'Bhaktapur',
    province: 'BAGMATI',
    lat: 27.6721,
    lng: 85.4281,
    elevation: 1334,
    entryFee: 'NPR 1,800 (foreigners) / NPR 500 (SAARC) / Free (Nepali citizens)',
    bestSeason: 'Oct–Apr',
    openingHours: '7:00 AM – 7:00 PM daily',
    howToGetThere: 'Bhaktapur is 13 km east of Kathmandu. Take a local bus from Ratna Park or Bagh Bazaar (NPR 25, 45 min), a microbus from Old Baneshwor, or a taxi (30–40 min, ~NPR 600–800). The ticket booth is at the main entrance gate.',
    gygQuery: 'Bhaktapur Durbar Square day trip',
    bookingCity: 'Kathmandu',
    seoTitle: 'Bhaktapur Durbar Square — Complete Visitor Guide',
    seoDescription: 'Discover Bhaktapur Durbar Square, Nepal\'s most intact medieval royal square and a UNESCO World Heritage Site. Home to the Nyatapola Temple, Golden Gate, and traditional Newari culture.',
    published: true,
    featured: true,
    publishedAt: new Date(),
  },
  {
    name: 'Nuwakot Durbar Square',
    category: 'DURBAR_PALACE',
    summary: 'An 18th-century fortified palace complex built by Prithvi Narayan Shah on a strategic ridge 70 km from Kathmandu, centred on the seven-storey Saat Tale Durbar palace overlooking the Trishuli River valley.',
    story: `<p>Nuwakot holds a pivotal place in Nepali history. It was from this hilltop fortress that Prithvi Narayan Shah, the "Father of Nepal," launched his campaign to unify the Kathmandu Valley's rival kingdoms in the 18th century. The strategic location, perched above the confluence of the Trishuli and Likhu rivers, commanded the trade and military routes between Tibet and the valley.</p>
<p>The centrepiece of the complex is the seven-storey Saat Tale Durbar, a striking pagoda palace that served as Prithvi Narayan Shah's primary residence and military headquarters. The Nuwakot palace complex includes several temples, courtyards, and defensive towers. It was severely damaged in the 2015 Gorkha earthquake, and restoration work is currently ongoing.</p>
<p>The town of Nuwakot itself retains much of its old character, with traditional Newari architecture, a weekly market, and spectacular views of the Ganesh Himal range to the north.</p>
<h3>What to See</h3>
<ul>
  <li>Saat Tale Durbar — the iconic seven-storey palace</li>
  <li>Bhairavnath Temple complex within the durbar grounds</li>
  <li>Taleju Bhawani Temple</li>
  <li>Views of the Trishuli River gorge and Ganesh Himal</li>
  <li>Traditional Newari bazaar street in Nuwakot town</li>
</ul>`,
    district: 'Nuwakot',
    province: 'BAGMATI',
    lat: 27.9138,
    lng: 85.1648,
    elevation: 1050,
    entryFee: 'NPR 100 (foreigners, approx.) / Free for Nepali citizens',
    bestSeason: 'Oct–Apr',
    openingHours: '9:00 AM – 5:00 PM (check locally as hours change during restoration)',
    howToGetThere: 'From Kathmandu, take a bus or jeep towards Trishuli/Dhading from Macchapokhari bus park (2.5–3 hrs). Get off at Nuwakot bazaar and walk up to the durbar (15 min). Alternatively, hire a taxi for a full-day trip (~NPR 4,000–5,000).',
    gygQuery: 'Nuwakot day trip Kathmandu',
    bookingCity: 'Kathmandu',
    seoTitle: 'Nuwakot Durbar — Prithvi Narayan Shah\'s Historic Palace',
    seoDescription: 'Visit Nuwakot Durbar Square, the 18th-century fortress palace of Nepal\'s unifier Prithvi Narayan Shah, 70 km from Kathmandu with views of the Trishuli River and Ganesh Himal.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Changu Narayan Temple',
    category: 'TEMPLE',
    summary: 'Nepal\'s oldest surviving temple dedicated to Vishnu, believed to date from the 4th century CE, perched on a forested hilltop in Bhaktapur district and a UNESCO World Heritage Site containing some of the finest Licchavi-era carvings in Asia.',
    story: `<p>Changu Narayan is Nepal's oldest Hindu temple, first mentioned in a stone inscription dated 464 CE — the earliest inscription found in the Kathmandu Valley. The temple, perched on a forested hilltop called Dolagiri at about 1,541 metres, is dedicated to Vishnu in his Narayan form and is one of four cardinal Narayan temples in the Kathmandu Valley that devotees are expected to visit together.</p>
<p>The two-storey gilded pagoda contains an extraordinary treasury of sculpture spanning 1,500 years. The 10th-century image of Vishnu Vikrantha showing the god in his cosmic stride, the 5th-century 10-armed Vishnu, and the superb Garuda statue in a prayer position in front of the main shrine are considered priceless examples of Licchavi and early Malla craftsmanship.</p>
<p>The hilltop village surrounding the temple has preserved many traditional Newari houses with intricate woodcarvings, and a small museum contains additional sculptures found in the area.</p>
<h3>Must-See Highlights</h3>
<ul>
  <li>5th-century stone inscription — the oldest in Nepal</li>
  <li>10-armed Vishnu Vikrantha sculpture (10th century)</li>
  <li>Garuda kneeling in devotion before the main shrine</li>
  <li>Chandeshwari Temple nearby</li>
  <li>Traditional Newari village with woodcarved houses</li>
</ul>`,
    district: 'Bhaktapur',
    province: 'BAGMATI',
    lat: 27.7163,
    lng: 85.4279,
    elevation: 1541,
    entryFee: 'NPR 300 (foreigners) / NPR 100 (SAARC) / Free (Nepali citizens)',
    bestSeason: 'Oct–Apr',
    openingHours: '6:00 AM – 7:00 PM daily',
    howToGetThere: 'From Bhaktapur Durbar Square, take a local bus or taxi to Changunarayan village (6 km, 15 min). Alternatively, hike from Bhaktapur through the Hanumante River valley (3–4 hrs). From Kathmandu, take a taxi or local bus to Bhaktapur then onwards.',
    gygQuery: 'Changu Narayan Temple Bhaktapur',
    bookingCity: 'Bhaktapur',
    seoTitle: 'Changu Narayan Temple — Nepal\'s Oldest Hindu Temple Guide',
    seoDescription: 'Visit Changu Narayan, Nepal\'s oldest temple (4th century CE) and UNESCO World Heritage Site in Bhaktapur, famous for exceptional Licchavi-era stone carvings and a 5th-century inscription.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Kopan Monastery',
    category: 'MONASTERY',
    summary: 'A renowned Tibetan Buddhist monastery of the FPMT tradition on a hilltop north of Boudhanath, internationally famous for its month-long meditation and Buddhism courses that have attracted thousands of students from around the world since 1971.',
    story: `<p>Kopan Monastery was established in 1969 by Lama Thubten Yeshe and Lama Zopa Rinpoche on a hilltop north of Boudhanath, looking out over the Kathmandu Valley. What began as a small community of Nepali monks studying Tibetan Buddhism grew into one of the most internationally recognised Buddhist teaching centres in Asia.</p>
<p>The famous Kopan November Course — a 28-day introduction to Buddhism and meditation — was first offered in 1971 and has since attracted practitioners from over 80 countries. The monastery now hosts hundreds of courses, retreats, and teachings throughout the year, and has helped establish dozens of Buddhist centres worldwide through its parent organisation, the Foundation for the Preservation of the Mahayana Tradition (FPMT).</p>
<p>The monastery complex includes a large prayer hall, meditation gardens, libraries, and comfortable accommodation for course participants. Visitors are welcome to walk the grounds and join the morning or evening prayers.</p>
<h3>Visiting Tips</h3>
<ul>
  <li>Morning and evening prayers are open to respectful visitors</li>
  <li>The monastery library has an extensive collection of Buddhist texts</li>
  <li>Short day visits possible; longer meditation courses require prior registration</li>
  <li>Panoramic views of Kathmandu Valley from the monastery gardens</li>
  <li>Book courses months in advance — they fill up quickly</li>
</ul>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.7425,
    lng: 85.3644,
    elevation: 1760,
    entryFee: 'Free (course fees apply for retreats)',
    bestSeason: 'Year-round; famous November month-long course',
    openingHours: '7:00 AM – 6:00 PM (visitor access)',
    howToGetThere: 'Located 2 km north of Boudhanath Stupa. Take a taxi from Kathmandu (20–25 min), or walk from Boudhanath (30–40 min uphill). Ask for "Kopan Monastery" or "Kapan Gumba".',
    gygQuery: 'Buddhist meditation Kathmandu',
    bookingCity: 'Kathmandu',
    seoTitle: 'Kopan Monastery Kathmandu — Buddhism Courses & Visiting Guide',
    seoDescription: 'Explore Kopan Monastery near Boudhanath, Kathmandu — a world-famous Tibetan Buddhist centre offering meditation courses, retreats, and peaceful hilltop views over the Kathmandu Valley.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Patan Durbar Square',
    category: 'DURBAR_PALACE',
    summary: 'A UNESCO World Heritage Site at the centre of Lalitpur (the City of Artisans), containing one of Nepal\'s most refined concentrations of Newari temples, including the exquisite stone Krishna Mandir and the outstanding Patan Museum.',
    story: `<p>Patan — also known as Lalitpur, "the Beautiful City" — is one of the oldest Buddhist cities in the world and has been called the most artistically rich city in Nepal. Its Durbar Square reflects a civilisation that elevated temple architecture, metalwork, woodcarving, and stone sculpture to extraordinary heights.</p>
<p>The Krishna Mandir, built entirely of stone in the Indian shikhara style by King Siddhinarasimha Malla in 1636, is the jewel of the square. Its two-storey base is decorated with detailed relief panels illustrating scenes from the Mahabharata and Ramayana. During Janmashtami (Krishna's birthday), thousands of pilgrims queue through the night to offer worship at the temple.</p>
<p>The Patan Museum, housed in a beautifully restored royal palace wing, is considered the finest museum of sacred Himalayan art in the world. Its galleries display extraordinary bronzes, stone carvings, and gold repoussé work from the Licchavi to Shah periods, with superb curatorial interpretation.</p>
<h3>Not to Miss</h3>
<ul>
  <li>Krishna Mandir — stone shikhara temple with Mahabharata reliefs</li>
  <li>Patan Museum — world-class Himalayan art collection</li>
  <li>Hiranya Varna Mahavihar (Golden Temple) — Buddhist monastery with gilded facade</li>
  <li>Kumbheshwor Temple — 5-storey pagoda with sacred tank</li>
  <li>Traditional metalwork workshops in the surrounding streets</li>
</ul>`,
    district: 'Lalitpur',
    province: 'BAGMATI',
    lat: 27.6727,
    lng: 85.3253,
    elevation: 1313,
    entryFee: 'NPR 1,000 (foreigners) / NPR 500 (SAARC) / NPR 30 (Nepali citizens)',
    bestSeason: 'Oct–Apr',
    openingHours: '9:00 AM – 5:00 PM daily (Patan Museum 9 AM – 5 PM)',
    howToGetThere: 'Patan Durbar Square is 5 km south of Kathmandu Durbar Square. Take a taxi from Thamel (15–20 min, ~NPR 300–400) or a local bus from Ratna Park. Also accessible by e-rickshaw from Jawalakhel.',
    gygQuery: 'Patan Durbar Square Lalitpur tour',
    bookingCity: 'Kathmandu',
    seoTitle: 'Patan Durbar Square Lalitpur — UNESCO Heritage Guide',
    seoDescription: 'Explore Patan Durbar Square in Lalitpur, a UNESCO World Heritage Site known for the Krishna Mandir, the Patan Museum, and the finest Newari art and architecture in Nepal.',
    published: true,
    featured: true,
    publishedAt: new Date(),
  },
  {
    name: 'Garden of Dreams',
    category: 'CULTURAL_VILLAGE',
    summary: 'A beautifully restored Edwardian neoclassical garden built in the 1920s by Field Marshal Kaiser Shumsher Rana, offering a rare tranquil oasis of manicured greenery, ponds, and pavilions in the heart of Thamel.',
    story: `<p>The Garden of Dreams (Swapna Bagaicha) was built between 1920 and 1925 by Field Marshal Kaiser Shumsher Jung Bahadur Rana, inspired by the Edwardian gardens of Europe. The 6,895-square-metre garden features six neo-classical pavilions named after Nepal's six seasons, ornamental ponds, pergolas, stone urns, and sweeping lawns — a remarkable piece of Rana-era architectural fantasy.</p>
<p>After decades of neglect and partial conversion into government offices, the garden was painstakingly restored between 2000 and 2006 through an Austrian Development Cooperation project, and reopened to the public as a museum garden. The restoration is widely celebrated as one of the finest heritage conservation achievements in Nepal.</p>
<p>Today the garden houses a café-restaurant and hosts cultural events. It functions as a popular retreat for Kathmandu residents and a peaceful alternative to the busy streets of Thamel immediately outside its walls.</p>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.7141,
    lng: 85.3148,
    elevation: 1316,
    entryFee: 'NPR 400 (foreigners) / NPR 150 (Nepali citizens)',
    bestSeason: 'Year-round; March–May for flowers',
    openingHours: '9:00 AM – 9:00 PM daily',
    howToGetThere: 'Located adjacent to Thamel, next to the Keshar Mahal (Ministry of Education building). A 5-minute walk from most Thamel hotels. Enter from Tridevi Marg.',
    gygQuery: 'Kathmandu sightseeing city tour',
    bookingCity: 'Kathmandu',
    seoTitle: 'Garden of Dreams Kathmandu — Visitor Guide',
    seoDescription: 'Visit the Garden of Dreams (Kaiser Mahal), a restored Edwardian garden in the heart of Thamel, Kathmandu — a peaceful escape with pavilions, ponds, and a café.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Narayanhiti Palace Museum',
    category: 'DURBAR_PALACE',
    summary: 'The former royal palace of Nepal\'s Shah dynasty, converted into a public museum in 2009, offering a rare look inside the opulent state rooms, throne hall, and the site of the tragic 2001 royal massacre.',
    story: `<p>Narayanhiti Palace was the official residence of Nepal's Shah kings from 1963 until the abolition of the monarchy in 2008. The name Narayanhiti comes from the Narayan Temple and the water spout (hiti) in the adjacent area. The current palace was built by King Mahendra in 1963, replacing an earlier structure, and was expanded under King Birendra.</p>
<p>The palace became globally known when the tragic Royal Massacre of June 1, 2001 took place in its billiard room, when Crown Prince Dipendra shot and killed nine members of the royal family, including King Birendra and Queen Aishwarya, before fatally shooting himself. This event effectively ended Nepal's dynasty, and King Gyanendra, the last king, converted the palace into a museum before leaving in 2008.</p>
<p>Today, guided tours take visitors through the richly decorated state rooms, the throne room, royal dining halls, and the room where the massacre occurred. The collection includes royal gifts from foreign heads of state, period furniture, royal regalia, and an extraordinary collection of ceremonial items.</p>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.7184,
    lng: 85.3196,
    elevation: 1316,
    entryFee: 'NPR 1,000 (foreigners) / NPR 500 (SAARC) / NPR 200 (Nepali citizens)',
    bestSeason: 'Year-round',
    openingHours: '10:30 AM – 3:30 PM (closed Tuesdays and public holidays)',
    howToGetThere: 'Located on Prithvi Path, in the centre of Kathmandu, a 10-minute walk from Thamel. The main gate faces the Darbar Marg area. Taxis and rickshaws available from anywhere in central Kathmandu.',
    gygQuery: 'Kathmandu palace museum tour',
    bookingCity: 'Kathmandu',
    seoTitle: 'Narayanhiti Palace Museum Kathmandu — Former Royal Palace Guide',
    seoDescription: 'Tour Narayanhiti Palace Museum, the former royal palace of Nepal\'s Shah dynasty in Kathmandu — now open to visitors revealing opulent state rooms, the throne hall, and royal history.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Chandragiri Hills',
    category: 'HILL_VIEWPOINT',
    summary: 'A hilltop resort at 2,551 m accessible by a scenic gondola cable car from Thankot, offering sweeping panoramic views of the Kathmandu Valley and the Himalayan range from Dhaulagiri to Everest on clear days.',
    story: `<p>Chandragiri Hills, rising to 2,551 metres on the southwestern rim of the Kathmandu Valley, offers some of the most spectacular Himalayan panoramas accessible from the capital city. The cable car, which opened in 2016, carries passengers 2.5 km from the Thankot base station to the summit in approximately 10 minutes, passing over forests and terraced farmland.</p>
<p>At the summit, the Bhaleshwar Mahadev Temple is an important Hindu pilgrimage site dedicated to Shiva. The hilltop complex includes a resort with accommodation, restaurants, children's activities, and well-maintained viewpoint platforms. On a clear day (especially in the post-monsoon autumn months), the entire white arc of the Himalaya from the Annapurna range in the west to Everest in the east is visible.</p>
<p>According to legend, Chandragiri is associated with the story of Gorakhnath and his disciple Matsyendranath, whose tradition gave rise to the Nath yogis of Nepal. The hilltop has been a pilgrimage site for centuries.</p>
<h3>Activities at the Summit</h3>
<ul>
  <li>Panoramic Himalayan views (Dhaulagiri to Everest on clear days)</li>
  <li>Bhaleshwar Mahadev Temple</li>
  <li>Horse riding, archery, and zip line</li>
  <li>Restaurant and accommodation at the hilltop resort</li>
</ul>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.6672,
    lng: 85.2058,
    elevation: 2551,
    entryFee: 'Cable car: approx. NPR 2,900 return (foreigners) / NPR 799 return (Nepali citizens)',
    bestSeason: 'Oct–Apr (clearest Himalayan views)',
    openingHours: '9:00 AM – 8:00 PM daily',
    howToGetThere: 'Take a taxi from Kathmandu city to Thankot base station (30–40 min, ~NPR 500–700), then the cable car. Alternatively, hire a day-trip vehicle. Ride-sharing apps (InDrive, Pathao) also serve the route.',
    gygQuery: 'Chandragiri Hills cable car Kathmandu',
    bookingCity: 'Kathmandu',
    seoTitle: 'Chandragiri Hills Cable Car — Kathmandu Himalayan Viewpoint',
    seoDescription: 'Ride the Chandragiri Hills cable car to 2,551 m for spectacular panoramic views of the Kathmandu Valley and Himalayas, plus the Bhaleshwar Mahadev temple and hilltop resort.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Thamel',
    category: 'CULTURAL_VILLAGE',
    summary: 'Kathmandu\'s legendary tourist hub — a vibrant neighbourhood of narrow lanes packed with trekking gear shops, bookshops, restaurants, rooftop bars, and guesthouses that has served as the gateway to Himalayan adventure since the 1970s.',
    story: `<p>Thamel has been the heartbeat of Kathmandu's tourism scene for over five decades. What was once a quiet residential neighbourhood north of the old city became a magnet for travellers on the Hippie Trail in the late 1960s, drawn by cheap accommodation, hash shops, and the legendary Freak Street (now in Basantapur). As trekking became Nepal's primary tourism industry, Thamel evolved into the indispensable logistical hub it remains today.</p>
<p>The neighbourhood is a sensory overload of colour, noise, and commerce — touts offering trekking packages, stacked outdoor gear stores selling everything from down jackets to ice axes, restaurants serving everything from dal bhat to wood-fired pizza, and bookshops stacked floor-to-ceiling with Himalayan literature and maps. Behind the commercial facade, Thamel retains pockets of old Kathmandu — temples in courtyards, traditional healers, and centuries-old hiti (water spouts).</p>
<p>For most travellers, Thamel is both the beginning and end of their Nepal journey — the place to organise treks, buy gear, exchange money, recover from mountains, and celebrate safe returns over cold Everest beer.</p>
<h3>What to Do in Thamel</h3>
<ul>
  <li>Gear up: Nepal's best selection of trekking and climbing equipment</li>
  <li>Browse bookshops — Himalayan literature, maps, and regional guides</li>
  <li>Eat well: Nepali, Tibetan, Indian, Italian, Japanese, and more</li>
  <li>Evening: rooftop bars, live traditional music venues</li>
  <li>Day trips: easy base for all Kathmandu Valley heritage sites</li>
</ul>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.7170,
    lng: 85.3113,
    elevation: 1316,
    entryFee: 'Free',
    bestSeason: 'Year-round; Oct–Nov and Mar–Apr peak trekking seasons',
    openingHours: 'Open 24 hours; shops 8:00 AM – 10:00 PM',
    howToGetThere: 'Thamel is in the heart of central Kathmandu. From the airport, take a taxi (30–45 min, NPR 700–1,000). From the bus parks at Ratna Park or Gongabu, taxi (10–15 min, NPR 200–300). Most hotels offer free airport pickup.',
    gygQuery: 'Kathmandu city tour Thamel',
    bookingCity: 'Kathmandu',
    seoTitle: 'Thamel Kathmandu — The Ultimate Traveller\'s Guide',
    seoDescription: 'Your complete guide to Thamel, Kathmandu\'s famous tourist hub — trekking gear, bookshops, restaurants, rooftop bars, and the perfect base for exploring Nepal.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'National Museum of Nepal',
    category: 'ARCHAEOLOGICAL',
    summary: 'Nepal\'s premier museum at Chhauni, founded in 1928, housing galleries of Buddhist and Hindu religious art, natural history, royal weaponry, ancient manuscripts, and over 2,000 years of Nepali civilisation spanning the Licchavi to modern eras.',
    story: `<p>The National Museum of Nepal was established in 1928 during the Rana period at the Chhauni army barracks, 2 km southwest of Thamel at the foot of Swayambhu hill. Over nearly a century, it has grown into the most comprehensive repository of Nepal's cultural, artistic, and natural heritage.</p>
<p>The main museum building contains four major sections: Art Gallery (featuring superb Hindu and Buddhist sculptures, paintings, and religious objects from the 4th to the 18th centuries), Historical Gallery (covering Nepal's political and military history), Natural History Museum (Nepal's biodiversity), and a Buddhist Art Gallery. The weaponry collection, accumulated by the Ranas over centuries of military campaigns, is particularly impressive.</p>
<p>Highlights include the extraordinary collection of stone sculptures from the Licchavi period, gilded bronze statues of extraordinary refinement, illuminated Buddhist manuscripts, royal portraits, and artefacts from the 2015 earthquake recovery.</p>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.7056,
    lng: 85.2890,
    elevation: 1310,
    entryFee: 'NPR 150 (foreigners) / NPR 40 (SAARC) / NPR 15 (Nepali citizens)',
    bestSeason: 'Year-round',
    openingHours: '10:30 AM – 3:30 PM (closed Tuesdays and public holidays)',
    howToGetThere: 'Located at Chhauni, 2 km southwest of Thamel near Swayambhunath. Take a taxi from Thamel (10 min, ~NPR 200) or walk from Swayambhunath (15 min downhill).',
    gygQuery: 'Kathmandu museum cultural tour',
    bookingCity: 'Kathmandu',
    seoTitle: 'National Museum of Nepal Kathmandu — Collection & Visitor Guide',
    seoDescription: 'Visit the National Museum of Nepal at Chhauni — the country\'s premier museum with galleries of Licchavi-era sculpture, Buddhist art, natural history, and Nepali royal history.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Budhanilkantha Temple',
    category: 'TEMPLE',
    summary: 'A sacred Vishnu temple housing a magnificent 5th-century Licchavi stone sculpture of the god reclining on the cosmic serpent Ananta in a large sacred pond, one of three similar Vishnu images in the Kathmandu Valley.',
    story: `<p>Budhanilkantha Temple contains one of the most remarkable sculptures in Asia — a 7-metre reclining stone figure of Lord Vishnu, lying on the coils of the eleven-headed cosmic serpent Ananta Shesha, floating on the "cosmic ocean" represented by a rectangular stone tank. Carved from a single massive black basalt boulder during the Licchavi period (approximately 5th century CE), the image is considered self-arisen from the earth.</p>
<p>The name Budhanilkantha is sometimes incorrectly translated as "Old Blue Throat" (confusing it with a Shiva epithet) — it more accurately derives from a local name meaning "the old god of the blue throat area." The image is actually Vishnu in his Jalasayana ("reclining on water") form, dressed each morning by priests in fine silk and marigold garlands.</p>
<p>According to a longstanding tradition, the Shah kings of Nepal were forbidden from visiting this temple, lest they die immediately after — a royal prohibition reportedly instituted after a dream warning. This unusual injunction was observed throughout the Shah dynasty's 250-year rule.</p>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.7774,
    lng: 85.3621,
    elevation: 1490,
    entryFee: 'Free (donations welcome)',
    bestSeason: 'Year-round; Haribodhini Ekadashi (Oct–Nov) draws large crowds',
    openingHours: '5:00 AM – 7:00 PM daily (non-Hindus may view from the entrance)',
    howToGetThere: 'Located 8 km north of Kathmandu city in Budhanilkantha. Take a taxi from Thamel (25–30 min, ~NPR 400–500) or a public bus from Maharajgunj. A pleasant combined trip with Shivapuri National Park.',
    gygQuery: 'Budhanilkantha Vishnu temple Kathmandu',
    bookingCity: 'Kathmandu',
    seoTitle: 'Budhanilkantha Temple — Reclining Vishnu of Kathmandu',
    seoDescription: 'Visit Budhanilkantha Temple and its extraordinary 5th-century reclining Vishnu sculpture, one of the most remarkable Licchavi-era artworks in Nepal, north of Kathmandu.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Dakshinkali Temple',
    category: 'TEMPLE',
    summary: 'One of the most important Tantric temples of Nepal dedicated to the fierce goddess Kali, set at the confluence of two streams in a forested gorge 22 km south of Kathmandu, renowned for the ritual animal sacrifices performed every Tuesday and Saturday.',
    story: `<p>Dakshinkali Temple sits at the southern end of the Kathmandu Valley in a dramatic gorge where two sacred streams meet. The main shrine houses an eight-armed black stone image of the goddess Kali in a fierce form, installed according to tradition by Sthithi Malla in the 14th century. Kali — the destroyer of evil, the goddess of time — is depicted with a garland of skulls, standing on the body of Shiva.</p>
<p>The temple is most active on Tuesdays and Saturdays, when the blood of sacrificed animals (traditionally goats, buffalo, chickens, and ducks) is offered to the goddess. The blood is believed to appease Kali and earn her blessings for health, prosperity, and protection. During the Dashain festival, hundreds of animals are sacrificed over several days as thousands of pilgrims queue through the night.</p>
<p>The surrounding forest is designated a protected area, and the drive from Kathmandu through the valley and forested hills to the temple is part of its appeal. The area around the temple has a small market of devotional items, flowers, and food stalls.</p>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.6101,
    lng: 85.2665,
    elevation: 1570,
    entryFee: 'Free (parking fees apply)',
    bestSeason: 'Year-round; Tuesdays & Saturdays for sacrifices; Dashain for major festival',
    openingHours: '6:00 AM – 12:00 PM and 2:00 PM – 6:00 PM (closed midday)',
    howToGetThere: 'Located 22 km south of Kathmandu. Take a bus from Ratna Park (1.5 hrs, NPR 40–50) or hire a taxi for a half-day trip (~NPR 1,500–2,000). Often combined with a visit to Pharping and its Vajrayana Buddhist sites.',
    gygQuery: 'Dakshinkali Temple Kathmandu day trip',
    bookingCity: 'Kathmandu',
    seoTitle: 'Dakshinkali Temple — Kathmandu\'s Tantric Kali Shrine',
    seoDescription: 'Visit Dakshinkali Temple, one of Nepal\'s most important Tantric shrines dedicated to goddess Kali, located 22 km south of Kathmandu in a sacred forest gorge.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Ichangu Narayan Temple',
    category: 'TEMPLE',
    summary: 'A peaceful 5th-century two-storey pagoda temple dedicated to Vishnu, one of the four cardinal Narayan temples of the Kathmandu Valley, set among rice fields 3 km northwest of Swayambhunath.',
    story: `<p>Ichangu Narayan is one of the four sacred Narayan (Vishnu) temples of the Kathmandu Valley that devotees visit together on a pilgrimage circuit — the others being Changu Narayan, Bisankhu Narayan, and Sheshnarayan Pharping. The temple is believed to date from the Licchavi period (approximately 5th century CE), though the current structure shows features from the later Malla period.</p>
<p>Unlike the more touristed Changu Narayan and Patan sites, Ichangu Narayan remains relatively unknown to foreign visitors, which gives it an atmosphere of quiet, authentic religious practice. The two-storey pagoda stands in a small courtyard with carved wooden struts, stone sculptures, and votive offerings. The surrounding area is a pleasant mixture of rice paddies, traditional Newari villages, and forested hills.</p>
<p>The temple is an excellent destination for those seeking a less-crowded pilgrimage experience or a gentle hike from Swayambhunath through traditional communities to the valley's western edge.</p>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.7263,
    lng: 85.2515,
    elevation: 1390,
    entryFee: 'Free',
    bestSeason: 'Oct–Apr',
    openingHours: 'Sunrise to sunset daily',
    howToGetThere: 'From Swayambhunath, walk northwest through the villages (45–60 min on foot) or take a taxi from Kathmandu (15–20 min). The temple is near Ichangu village, ask locals for directions.',
    gygQuery: 'Kathmandu Valley temple tour',
    bookingCity: 'Kathmandu',
    seoTitle: 'Ichangu Narayan Temple Kathmandu — Peaceful Vishnu Shrine',
    seoDescription: 'Discover Ichangu Narayan, one of the four cardinal Vishnu temples of the Kathmandu Valley — a peaceful 5th-century pagoda temple among rice fields west of Swayambhunath.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Siddhibinayak Temple Pharping',
    category: 'TEMPLE',
    summary: 'A sacred rock-carved Ganesh shrine near the Asura Cave in Pharping, one of Nepal\'s most revered Tantric pilgrimage sites where Guru Padmasambhava is said to have attained enlightenment, 18 km south of Kathmandu.',
    story: `<p>Pharping is one of the most spiritually charged locations in the Kathmandu Valley, a small village 18 km south of the capital that has been a pilgrimage destination for both Hindus and Buddhists for over a thousand years. The Siddhibinayak shrine — a sacred rock-carved Ganesh image — sits within the Asura Cave complex at the base of the cliff face.</p>
<p>The Asura Cave (also called Yanglesho Cave) is of enormous importance to Tibetan Buddhism: it is here that Guru Padmasambhava, the tantric master who brought Buddhism to Tibet, is said to have spent months in meditation practice before achieving a state of enlightened awareness in the 8th century. A stone footprint believed to be left by Padmasambhava is preserved near the cave entrance.</p>
<p>The area around Pharping contains an extraordinary concentration of holy sites — the Dakshinkali Temple is just 2 km away, the Yangleshö Tso Pema (Pharping Lake), the Sheshnarayan Temple (fourth of the valley's cardinal Narayan shrines), and several important Tibetan Buddhist monasteries.</p>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.6128,
    lng: 85.2645,
    elevation: 1569,
    entryFee: 'Free',
    bestSeason: 'Oct–Apr',
    openingHours: 'Sunrise to sunset daily',
    howToGetThere: 'Pharping is 18 km south of Kathmandu. Usually combined with Dakshinkali (2 km further south). Take a bus from Ratna Park or hire a taxi for a half-day trip (~NPR 1,500–2,000).',
    gygQuery: 'Pharping Buddhist sites Kathmandu',
    bookingCity: 'Kathmandu',
    seoTitle: 'Siddhibinayak Temple & Asura Cave Pharping — Pilgrimage Guide',
    seoDescription: 'Visit Siddhibinayak Temple and the Asura Cave in Pharping, 18 km from Kathmandu — where Guru Padmasambhava attained enlightenment and a sacred Ganesh shrine draws Hindu and Buddhist pilgrims.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Kailashnath Mahadev Shiva Statue',
    category: 'TEMPLE',
    summary: 'The world\'s second-tallest Shiva statue at 43.5 metres, standing dramatically on a hilltop along the Araniko Highway 20 km east of Kathmandu, visible from across the valley and completed in 2010 after 12 years of construction.',
    story: `<p>The Kailashnath Mahadev statue at Sanga is a remarkable feat of modern religious sculpture — a 143-foot (43.5 metre) figure of Lord Shiva in silver and white, standing atop a hill along the Araniko Highway that links Kathmandu to the Tibet border. The statue was conceived and built by sculptor Sagar Prajapati over 12 years, using locally sourced stone and traditional techniques.</p>
<p>Shiva is depicted in his benevolent Nilkantha form — the "blue-throated" god who swallowed the cosmic poison churned from the primordial ocean to protect all creation. The figure holds a trident (trishul), has a crescent moon in his matted hair, and the Ganges River is shown flowing from his locks. Smaller subsidiary shrines surround the base of the statue.</p>
<p>The hilltop setting provides panoramic views of the Kathmandu Valley, the Araniko Highway, and the distant Himalayas. The statue has quickly become a major pilgrimage site for Shiva devotees, especially during Maha Shivaratri when tens of thousands of sadhus and pilgrims converge here.</p>`,
    district: 'Bhaktapur',
    province: 'BAGMATI',
    lat: 27.6461,
    lng: 85.4743,
    elevation: 1480,
    entryFee: 'Free to view (small fee for inner complex)',
    bestSeason: 'Oct–Apr; Maha Shivaratri festival (Feb/Mar) for celebrations',
    openingHours: '7:30 AM – 6:00 PM daily',
    howToGetThere: 'Located at Sanga village on the Araniko Highway, 20 km east of Kathmandu. Take a bus towards Bhaktapur/Banepa from Koteshwor (30 min, NPR 25) and get off at Sanga, or hire a taxi (~NPR 600–800 one way). Easily combined with a Bhaktapur visit.',
    gygQuery: 'Bhaktapur Kathmandu Valley day trip',
    bookingCity: 'Kathmandu',
    seoTitle: 'Kailashnath Mahadev Shiva Statue Sanga — World\'s Tallest Shiva',
    seoDescription: 'Visit the Kailashnath Mahadev Shiva Statue at Sanga — the world\'s second-tallest Shiva statue at 43.5 metres, 20 km from Kathmandu with panoramic valley views.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Jamacho Stupa',
    category: 'STUPA',
    summary: 'A Buddhist stupa and monastery at the 2,067 m summit of Nagarjun Hill in Shivapuri Nagarjun National Park, offering panoramic 360-degree views of the Kathmandu Valley and a rewarding 3–4 hour forest hike from Kathmandu.',
    story: `<p>Jamacho Gumba sits atop Nagarjun Hill, the forested ridge on the northwestern edge of the Kathmandu Valley that forms part of Shivapuri Nagarjun National Park. At 2,067 metres, the summit stupa is the focal point of a pleasant day hike from the national park's Phulbari gate, just 6 km from Thamel — making it one of the most accessible wilderness experiences from central Kathmandu.</p>
<p>The trail climbs through subtropical oak, rhododendron, and pine forest — the kind of birding habitat that makes Shivapuri one of Nepal's premier birdwatching areas, with over 300 species recorded. The monastery at the summit is small but well-maintained, and monks are sometimes in residence.</p>
<p>The 360-degree panorama from the summit is one of the finest in the valley — the entire Kathmandu cityscape spread below, with the Himalayan arc from Annapurna to Gauri Shankar and Everest visible on clear autumn mornings. Prayer flags stream from the stupa in all directions.</p>
<h3>Hike Details</h3>
<ul>
  <li>Distance: ~6 km one way (Phulbari gate to summit)</li>
  <li>Time: 3–4 hours up, 2–3 hours down</li>
  <li>Difficulty: Moderate (steady ascent, good trail)</li>
  <li>Best time: Early morning for clearest mountain views</li>
  <li>Bring: Water, snacks, layers (cool at summit year-round)</li>
</ul>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.7451,
    lng: 85.2668,
    elevation: 2067,
    entryFee: 'NPR 750 (foreigners — national park fee) / NPR 50 (Nepali citizens)',
    bestSeason: 'Oct–Apr (Oct–Nov for clearest mountain views)',
    openingHours: '6:30 AM – 4:00 PM (park gate)',
    howToGetThere: 'Take a taxi to Phulbari Gate in Nagarjun (15 min from Thamel, ~NPR 300). The trail to the summit begins at the park gate. The gate is off the Ring Road near Balaju.',
    gygQuery: 'Nagarjun Hill Kathmandu hiking',
    bookingCity: 'Kathmandu',
    seoTitle: 'Jamacho Stupa Nagarjun Hill — Kathmandu\'s Best Viewpoint Hike',
    seoDescription: 'Hike to Jamacho Stupa on Nagarjun Hill in Shivapuri National Park — a rewarding 3-4 hour forest trail from central Kathmandu with panoramic Himalayan views from 2,067 m.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'One Tree Hill',
    category: 'HILL_VIEWPOINT',
    summary: 'A gentle hilltop viewpoint in the Ichangu area northwest of Swayambhunath offering sweeping views over the Kathmandu Valley and the Himalayan range, popular for sunrise and sunset visits with a swing attraction and café.',
    story: `<p>One Tree Hill — locally known as Single Tree Hill or Ek Rukh Danda — is a green hillock in the Nagarjun Municipality area northwest of Swayambhunath, offering a panoramic vantage point over the western Kathmandu Valley. Unlike the longer hikes required for Nagarkot, Chandragiri, or Nagarjun, One Tree Hill is accessible within a short drive or easy walk from central Kathmandu.</p>
<p>The hilltop is named for a lone tree that historically stood at its crest and served as a landmark for local communities. Today, the site has been developed with a small resort and café, a popular giant swing, and well-maintained viewpoint areas. The sunrise and sunset views from the hilltop, with the city spread below and the Himalayan backdrop above, have made it a popular spot for Kathmandu residents and photographers.</p>
<p>The area is surrounded by traditional Newari settlements and terraced farmland, and the walk up from the road takes only 20–30 minutes, making it an excellent option for a quick half-day excursion without committing to a full-day trek.</p>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.7211,
    lng: 85.2976,
    elevation: 1470,
    entryFee: 'Free (nominal fee for swing/resort facilities)',
    bestSeason: 'Oct–Apr; early morning for best Himalayan views',
    openingHours: 'Open access (resort 8:00 AM – 6:00 PM)',
    howToGetThere: 'Located near Ichangu, northwest of Swayambhunath. Take a taxi from Thamel (15 min, ~NPR 250–300) towards Ichangu village, then walk up the hill path (20–30 min).',
    gygQuery: 'Kathmandu Valley viewpoint sunrise',
    bookingCity: 'Kathmandu',
    seoTitle: 'One Tree Hill Kathmandu — Valley Viewpoint & Sunrise Spot',
    seoDescription: 'Visit One Tree Hill (Single Tree Hill) near Swayambhunath for panoramic Kathmandu Valley and Himalayan views — an easy half-day excursion perfect for sunrise and sunset.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'White Gumba',
    category: 'MONASTERY',
    summary: 'A striking white Drukpa Kagyu Buddhist monastery on a hillside north of Swayambhunath, known as the home of the "Kung Fu Nuns" — a community celebrated for practising martial arts and undertaking long-distance humanitarian cycling expeditions.',
    story: `<p>The White Gumba (Druk Amitabh Mountain, formally Druk Gawa Khilwa) is a Drukpa Kagyu monastery perched on a hillside in Nagarjun Municipality, visible as a white structure on the hillside north of Swayambhunath. It is the home community of the Drukpa nuns — a group that has gained international recognition as the "Kung Fu Nuns" for their practice of Kung Fu as a meditative discipline and means of self-empowerment.</p>
<p>The nuns of Druk Gawa Khilwa have led bicycle expeditions across the Himalayas for environmental and humanitarian causes, organised massive clean-up operations on sacred mountains, and run schools for underprivileged girls. His Holiness the 12th Gyalwang Drukpa, the head of the Drukpa lineage, has championed gender equality in Buddhist practice — a radical stance in traditional Himalayan Buddhism.</p>
<p>The monastery suffered significant damage in the 2015 earthquake and has been carefully restored. Public visiting hours are limited (primarily Sundays and Buddhist festivals), making a visit here a special experience for those who plan ahead.</p>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.7257,
    lng: 85.2612,
    elevation: 1450,
    entryFee: 'Small entrance fee (amount varies)',
    bestSeason: 'Year-round when open; Oct–Apr for best weather',
    openingHours: 'Primarily Sundays and Buddhist festivals (limited hours)',
    howToGetThere: 'Located north of Swayambhunath, near the Nagarjun area. Take a taxi from Thamel (15 min, ~NPR 300). Ask for "White Gumba" or "Druk Gawa Khilwa" — the white monastery on the hillside.',
    gygQuery: 'Kathmandu Buddhist monastery tour',
    bookingCity: 'Kathmandu',
    seoTitle: 'White Gumba (Druk Amitabh) — Home of the Kung Fu Nuns',
    seoDescription: 'Visit the White Gumba (Druk Amitabh Monastery) near Kathmandu — home of the famous Kung Fu Nuns, a Drukpa Kagyu Buddhist community known for martial arts and humanitarian expeditions.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
]

async function main() {
  console.log(`🌱 Seeding batch 1 — ${places.length} places...`)
  for (const p of places) {
    const s = slug(p.name)
    await prisma.place.upsert({
      where: { slug: s },
      update: {},
      create: { ...p, slug: s },
    })
    console.log(`  ✅ ${p.name}`)
  }
  console.log('🌱 Batch 1 complete!')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
