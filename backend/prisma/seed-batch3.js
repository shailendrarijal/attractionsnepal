import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import slugify from 'slugify'

const prisma = new PrismaClient()
const slug = (n) => slugify(n, { lower: true, strict: true })

const places = [
  {
    name: 'Manjushree Park',
    category: 'CAVE',
    summary: 'A forested hillside park at Chobhar Gorge featuring a 33-foot Bodhisattva Manjushri statue, an ancient 1,250-metre cave system, and sweeping panoramic views over the Kathmandu Valley.',
    story: `<p>Manjushree Park is a scenic public park nestled along the Chobhar Gorge in Kirtipur Municipality, approximately 7 kilometres south of central Kathmandu. Named after the Bodhisattva Manjushri, the site holds deep mythological significance: local legend holds that it was Manjushri who, upon seeing a lotus flower blooming at the centre of an ancient lake, cut the Chobhar Gorge with his sword to drain the waters and reveal the fertile valley that became Kathmandu.</p>
<p>The park's most iconic feature is a massive 10-metre stone statue of Bodhisattva Manjushri, inaugurated in June 2019 by the Jalbinayak Community Forest Users' Group. The statue depicts Manjushri raising his sword aloft, commemorating the legendary act of draining the primordial lake. Below the statue lies an extensive cave system stretching 1,250 metres in total length, of which approximately 350 metres is open to public exploration. The caves feature two underground ponds — Mahadev Pond and Naya Pond — and are believed to have served as meditation chambers for Manjushri himself.</p>
<p>Visitors can enjoy picnic areas set among mature trees, guided cave exploration on three routes of varying length, and sweeping views of the Chobhar Gorge and the Jal Binayak Temple perched on the gorge wall. The nearby Taudaha Lake — a sacred wetland — makes for a natural combination visit.</p>
<h3>Highlights</h3>
<ul>
  <li>10-metre stone statue of Bodhisattva Manjushri inaugurated in 2019</li>
  <li>Cave system with 1,250 m total length and two underground ponds</li>
  <li>Panoramic views of Chobhar Gorge and the Kathmandu Valley</li>
  <li>Mythological site tied to the founding legend of Kathmandu Valley</li>
  <li>Short, medium, and long guided caving routes available</li>
  <li>Adjacent to Jal Binayak Temple and Taudaha Lake</li>
</ul>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.6587,
    lng: 85.2926,
    elevation: 1350,
    entryFee: 'NPR 100 (foreigners)',
    bestSeason: 'Oct–Dec, Feb–May',
    openingHours: '9:00 AM – 5:00 PM daily',
    howToGetThere: 'Take a taxi or local bus (route 13) to Chobhar from Kathmandu city centre (~30 min). The park entrance is near the Jal Binayak Temple at Chobhar Gorge.',
    gygQuery: 'Kathmandu day tour',
    bookingCity: 'Kathmandu',
    seoTitle: 'Manjushree Park & Chobhar Caves — Cave Trek Near Kathmandu',
    seoDescription: 'Explore Manjushree Park at Chobhar Gorge — home to a 10 m Manjushri statue, a 1,250 m ancient cave system, and panoramic valley views. A perfect half-day trip from Kathmandu.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Central Zoo Jawalakhel',
    category: 'NATIONAL_PARK',
    summary: "Nepal's only public zoo, home to 969 animals across 109 species — including the one-horned rhinoceros, snow leopard, and red panda — set in a historic 6-hectare park in Lalitpur managed by the National Trust for Nature Conservation.",
    story: `<p>The Central Zoo in Jawalakhel, Lalitpur, is Nepal's only public zoo and one of South Asia's most historically significant wildlife institutions. Established in 1932 as a private royal zoo under the Rana prime ministers, it was opened to the public in 1956 and placed under the management of the National Trust for Nature Conservation (NTNC) in 1995. The 6-hectare facility draws over one million visitors annually.</p>
<p>The zoo houses approximately 969 animals across 109 species, including 15 of Nepal's 38 endangered local species. Star residents include the one-horned rhinoceros, Bengal tiger, snow leopard, red panda, gharial crocodile, Himalayan black bear, and a rich collection of birds and reptiles. A dedicated aquarium showcases subtropical freshwater fish native to Nepal's river systems. The central ornamental pond, constructed in the 17th century during the reign of King Siddhi Narsingh Malla, predates the zoo itself and adds historic character to the grounds.</p>
<p>The zoo features a children's park, picnic areas shaded by mature trees, paddle boats, and a library focused on wildlife conservation. It plays an active role in captive breeding programmes for endangered Nepali species and provides environmental education for school groups. During the Bhoto Jatra festival, visitor numbers swell to as many as 34,000 in a single day.</p>
<h3>Highlights</h3>
<ul>
  <li>One-horned rhinoceros, snow leopard, and red panda</li>
  <li>109 species including 15 of Nepal's critically endangered animals</li>
  <li>17th-century ornamental Malla-era pond within the grounds</li>
  <li>Active captive breeding programme for endangered Nepali wildlife</li>
  <li>Freshwater aquarium with native Nepali river fish</li>
  <li>Children's park, picnic areas, and paddle boats</li>
</ul>`,
    district: 'Lalitpur',
    province: 'BAGMATI',
    lat: 27.6732,
    lng: 85.3109,
    elevation: 1338,
    entryFee: 'NPR 750 (foreigners) / NPR 200 (Nepali citizens)',
    bestSeason: 'Oct–Dec, Feb–May',
    openingHours: '10:00 AM – 5:00 PM (Tue–Sun, closed Monday)',
    howToGetThere: 'Located in Jawalakhel, Lalitpur — 3 km south of Patan Durbar Square. Easily reachable by taxi from Kathmandu (15–20 min) or by microbus from Ratna Park.',
    gygQuery: 'Patan Lalitpur tour',
    bookingCity: 'Kathmandu',
    seoTitle: 'Central Zoo Jawalakhel — Nepal\'s Only Public Zoo | Wildlife, Tickets & Tips',
    seoDescription: 'Visit the Central Zoo Jawalakhel in Lalitpur — home to snow leopards, rhinos, and red pandas. Get entry fees, opening hours, and wildlife conservation facts for Nepal\'s only public zoo.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Whoopee Land',
    category: 'AMUSEMENT_PARK',
    summary: 'A popular family amusement and water park on the southern rim of the Kathmandu Valley near Chobhar Gorge, featuring water slides, a wave pool, a lazy river, and dry rides for all ages.',
    story: `<p>Whoopee Land Amusement and Water Park is one of the most popular family entertainment destinations in the Kathmandu Valley, situated in the Chobhar area approximately 3.5 kilometres from Balkhu. The park combines water rides, amusement rides, and swimming facilities, making it a favourite weekend escape for Kathmandu families — especially during the hot pre-monsoon months when water attractions are most appealing.</p>
<p>The park features water slides ranging from gentle family chutes to steep thrilling drops, a wave pool, a lazy river circuit, and a main swimming pool. Dry amusement rides complement the water attractions, giving the park appeal across different age groups and weather conditions. Food stalls and tree-shaded rest areas let visitors relax between rides. The scenic setting near Chobhar Gorge provides an unusually picturesque backdrop for an urban amusement park.</p>
<p>Whoopee Land is particularly popular during the Dashain and Tihar holiday season and from April to June. Entry is priced by height rather than age. The park is open daily from 10:00 AM to 5:30 PM, though hours vary seasonally. Its proximity to Manjushree Park and Jal Binayak Temple makes it easy to combine with a morning temple visit.</p>
<h3>Highlights</h3>
<ul>
  <li>Water slides ranging from family-friendly to thrilling steep drops</li>
  <li>Wave pool and lazy river circuit</li>
  <li>Main swimming pool and children's splash area</li>
  <li>Dry amusement rides for non-water days</li>
  <li>Scenic location beside Chobhar Gorge</li>
  <li>Height-based pricing — ideal for families with children</li>
</ul>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.6618,
    lng: 85.2871,
    elevation: 1316,
    entryFee: 'NPR 750–1,200 (varies by season)',
    bestSeason: 'Apr–Jun, Sep–Nov',
    openingHours: '10:00 AM – 5:30 PM daily',
    howToGetThere: 'Located near Chobhar, ~8 km south of Kathmandu. Take a taxi from Kathmandu city centre (25–30 min) or a local bus towards Chobhar from Balkhu.',
    gygQuery: 'Kathmandu family activities',
    bookingCity: 'Kathmandu',
    seoTitle: 'Whoopee Land Kathmandu — Water Park & Amusement Rides Near Chobhar',
    seoDescription: 'Plan your visit to Whoopee Land — Kathmandu Valley\'s top family water park near Chobhar Gorge, with wave pools, water slides, and dry rides. Entry fees and tips inside.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Kathmandu Fun Park',
    category: 'AMUSEMENT_PARK',
    summary: "One of Kathmandu's oldest urban amusement parks at Bhrikuti Mandap near Tundikhel, offering classic rides — Ferris wheel, Columbus swing, train ride, skating rink — at very affordable prices.",
    story: `<p>Kathmandu Fun Park, located within the Bhrikuti Mandap exhibition grounds near Tundikhel, is one of the oldest and most beloved amusement parks in Nepal's capital. Situated at the heart of Kathmandu on Exhibition Road, the park offers affordable family entertainment that has delighted city residents for decades.</p>
<p>Attractions include a Ferris wheel, Columbus swing, train ride, tower game, car skating rink, boat games, and children's helicopter rides. More adventurous options include a small bungee jump for younger visitors and a horror house for thrill-seekers. Horse riding, food courts, and an outdoor picnic atmosphere round out the experience.</p>
<p>With admission priced at just NPR 60 for adults, it is one of the most accessible entertainment options in Kathmandu. Open daily from noon to 7:00 PM, it makes an ideal afternoon activity after morning sightseeing at nearby Tundikhel or Ratna Park. Its central location puts it within walking distance of most Kathmandu hotels.</p>
<h3>Highlights</h3>
<ul>
  <li>Classic Ferris wheel and Columbus swing</li>
  <li>Car skating rink and children's train ride</li>
  <li>Very affordable entry — NPR 60 for adults</li>
  <li>Central Kathmandu location near Tundikhel</li>
  <li>Food courts and horse riding on site</li>
  <li>Open daily noon to 7:00 PM</li>
</ul>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.7013,
    lng: 85.3186,
    elevation: 1340,
    entryFee: 'NPR 60 (adults) / NPR 30 (children)',
    bestSeason: 'Year-round',
    openingHours: '12:00 PM – 7:00 PM daily',
    howToGetThere: 'Located at Bhrikuti Mandap on Exhibition Road near Tundikhel, central Kathmandu. A 10–15 min walk from Thamel; easily reached by taxi, tempo, or on foot.',
    gygQuery: 'Kathmandu city tour',
    bookingCity: 'Kathmandu',
    seoTitle: 'Kathmandu Fun Park — Affordable Rides at Bhrikuti Mandap',
    seoDescription: 'Visit Kathmandu Fun Park at Bhrikuti Mandap near Tundikhel — classic rides including a Ferris wheel, Columbus swing, and skating rink at just NPR 60 entry. Perfect for families.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Muktinath Temple',
    category: 'TEMPLE',
    summary: 'A supremely sacred high-altitude pilgrimage site at 3,710 m in Mustang, equally venerated by Hindus and Tibetan Buddhists, featuring 108 sacred water spouts and an eternal natural flame that burns alongside flowing water.',
    story: `<p>Muktinath Temple is one of the most revered pilgrimage sites in the Himalayan world, located at 3,710 metres in the Muktinath Valley of Mustang District. The name means "Lord of Salvation" (Mukti = liberation, Nath = lord). It is unique in being simultaneously sacred to both Hindus and Tibetan Buddhists. For Vaishnavite Hindus it is one of the 108 Divya Desams — the only one outside India. For Tibetan Buddhists it is known as Chumig Gyatsa ("Hundred Waters"), associated with Avalokiteshvara and believed to be a meditation site of Guru Padmasambhava.</p>
<p>The main pagoda-style temple dedicated to Vishnu is surrounded by 108 sacred water spouts (Mukti Dharas) shaped as cow heads, from which icy glacial water flows continuously. Pilgrims believe bathing under all 108 spouts purifies them of sin and assists in attaining moksha. Within the complex the Jwala Mai Temple contains a remarkable natural phenomenon: an eternal flame fed by natural gas burning alongside flowing water — a combination considered extraordinarily sacred in both traditions.</p>
<p>Situated just below the legendary Thorong La Pass (5,416 m) on the Annapurna Circuit, Muktinath is accessible by road from Jomsom airport (linked to Pokhara by flight) or by multi-day trek. The surrounding landscape of high-altitude desert backed by the Annapurna and Dhaulagiri massifs makes this one of the most dramatically beautiful temple settings anywhere on Earth.</p>
<h3>Highlights</h3>
<ul>
  <li>108 sacred water spouts (Mukti Dharas) — bathing under all 108 is believed to grant moksha</li>
  <li>Jwala Mai Temple with an eternal natural flame burning beside flowing water</li>
  <li>The only Divya Desam (Vishnu shrine) located outside India</li>
  <li>Sacred to both Vaishnavite Hindus and Tibetan Buddhists</li>
  <li>Dramatic high-altitude desert landscape below Thorong La</li>
  <li>Views of Annapurna, Dhaulagiri, and Nilgiri peaks</li>
</ul>`,
    district: 'Mustang',
    province: 'GANDAKI',
    lat: 28.8167,
    lng: 83.8717,
    elevation: 3710,
    entryFee: 'NPR 3,000 ACAP permit (foreigners); temple entry free',
    bestSeason: 'Mar–Jun, Sep–Dec',
    openingHours: 'Open daily (permit required)',
    howToGetThere: 'Fly Pokhara–Jomsom (30 min), then jeep or motorbike to Ranipauwa (~18 km, 1.5 hrs). Alternatively trek from Jomsom (2 days) or complete the Annapurna Circuit via Thorong La. Road access from Beni via Jomsom is possible in a sturdy 4WD.',
    trekDays: 2,
    trekDifficulty: 'MODERATE',
    trekMaxElevation: 3762,
    trekDistance: 18,
    trekStartPoint: 'Jomsom (2,720 m)',
    trekEndPoint: 'Muktinath (3,710 m)',
    trekHighlights: ['Kali Gandaki Gorge — deepest gorge on Earth', 'Kagbeni — gateway to Upper Mustang', 'Thorong La Pass (5,416 m) from Annapurna Circuit', '108 sacred spouts at Muktinath', 'High-altitude Mustang desert landscape'],
    gygQuery: 'Muktinath tour Pokhara',
    bookingCity: 'Pokhara',
    seoTitle: 'Muktinath Temple Guide — Sacred High-Altitude Pilgrimage in Mustang',
    seoDescription: 'Complete guide to Muktinath Temple at 3,710 m in Mustang — 108 holy water spouts, eternal flame, Hindu & Buddhist pilgrimage site. How to get there, permits, and best time to visit.',
    published: true,
    featured: true,
    publishedAt: new Date(),
  },
  {
    name: 'Gosaikunda Lake',
    category: 'LAKE',
    summary: 'A sacred glacial alpine lake at 4,380 m in Langtang National Park, revered by Hindus as the abode of Lord Shiva, drawing tens of thousands of pilgrims for the Janai Purnima festival and offering spectacular views of the Langtang and Ganesh Himal ranges.',
    story: `<p>Gosaikunda is a high-altitude glacial lake at 4,380 metres within Langtang National Park in Rasuwa District. It is the most revered of a sacred cluster of alpine lakes and holds profound significance for Hindus: according to mythology, the lake was created when Lord Shiva thrust his trident into the glacier, releasing sacred water to quench his thirst after consuming the deadly poison Halahala during the cosmic churning (Samudra Manthan). A rock formation in the centre of the lake is venerated as Shiva himself.</p>
<p>The lake draws tens of thousands of Hindu pilgrims annually during the Janai Purnima festival (full moon of Shrawan, usually August), when devotees trek for days through the mountains to take a ritual holy dip in its sacred waters. For trekkers it is one of Nepal's most rewarding moderate alpine experiences — the trail passes through subtropical forests, rhododendron woodlands, alpine meadows, and open ridges with panoramic views of the Langtang, Ganesh Himal, and Manaslu ranges.</p>
<p>The lake is frozen roughly from November through May. The standard trek departs from Dhunche (1,960 m) or Sundarijal and takes 5–7 days round trip. The trail passes through Sing Gompa (3,330 m) with its famous yak-cheese factory, and the Lauribina La pass (4,609 m) opens a link to the Helambu region for those on extended itineraries.</p>
<h3>Highlights</h3>
<ul>
  <li>Sacred alpine lake at 4,380 m — rock formation in the centre venerated as Lord Shiva</li>
  <li>Massive Janai Purnima pilgrimage in August draws tens of thousands of devotees</li>
  <li>Panoramic views of Langtang, Ganesh Himal, and Manaslu ranges</li>
  <li>Cluster of sacred lakes: Saraswati Kunda, Bhairav Kunda, and Surya Kunda</li>
  <li>Sing Gompa yak-cheese factory and views en route</li>
  <li>Option to cross Lauribina La (4,609 m) and continue to Helambu</li>
</ul>`,
    district: 'Rasuwa',
    province: 'BAGMATI',
    lat: 28.0833,
    lng: 85.4167,
    elevation: 4380,
    entryFee: 'NPR 3,000 Langtang National Park permit (foreigners)',
    bestSeason: 'Apr–May, Sep–Nov',
    openingHours: 'Open year-round; lake frozen Nov–May',
    howToGetThere: 'Drive Kathmandu–Dhunche (3–4 hrs, 112 km via Trishuli highway), then trek to Gosaikunda (2–3 days). Alternatively start from Sundarijal (northeast Kathmandu) for a 5–7 day loop through Helambu.',
    trekDays: 6,
    trekDifficulty: 'HARD',
    trekMaxElevation: 4609,
    trekDistance: 65,
    trekStartPoint: 'Dhunche (1,960 m)',
    trekEndPoint: 'Gosaikunda (4,380 m)',
    trekHighlights: ['Gosaikunda sacred lake (4,380 m)', 'Lauribina La Pass (4,609 m)', 'Sing Gompa yak-cheese factory', 'Helambu valley extension', 'Rhododendron forests in spring'],
    gygQuery: 'Gosaikunda trek Nepal',
    bookingCity: 'Kathmandu',
    seoTitle: 'Gosaikunda Lake Trek — Sacred Alpine Lake in Langtang National Park',
    seoDescription: 'Discover Gosaikunda Lake at 4,380 m in Langtang National Park — a sacred Hindu pilgrimage destination and stunning trek destination. Trek guide, permits, best season, and pilgrimage tips.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Lumbini Sacred Garden',
    category: 'ARCHAEOLOGICAL',
    summary: 'The UNESCO World Heritage birthplace of Siddhartha Gautama (the Buddha, ~563 BCE) in southern Nepal — home to the Maya Devi Temple, the Ashoka Pillar, the sacred Puskarani pond, and over 30 international Buddhist monasteries spanning traditions from Korea to Cambodia.',
    story: `<p>Lumbini is one of the holiest sites on Earth — the birthplace of Siddhartha Gautama, the historical Buddha, born here around 563 BCE to Queen Maya Devi and King Suddhodana. Located in the Terai plains of Rupandehi District, approximately 27 kilometres from the Indian border, the site was inscribed as a UNESCO World Heritage Site in 1997. For the world's 500 million Buddhists, Lumbini ranks among the four most sacred pilgrimage sites — alongside Bodh Gaya (enlightenment), Sarnath (first sermon), and Kushinagar (parinirvana).</p>
<p>The Lumbini Development Zone (4.8 km × 1.6 km) is organised into three areas: the Sacred Garden at its heart, flanked by the East Monastic Zone (Theravada traditions) and the West Monastic Zone (Mahayana and Vajrayana traditions), all connected by a central canal and tree-lined pathways. The Sacred Garden contains the Maya Devi Temple marking the exact birthplace, the Ashoka Pillar erected in 249 BCE, the sacred Puskarani pond where the newborn Buddha was bathed, and ruins of ancient stupas and viharas.</p>
<p>Over 30 international monasteries have been built in the monastic zones by Buddhist communities from Korea, China, Japan, Thailand, Myanmar, Sri Lanka, Vietnam, Cambodia, Germany, France, and beyond. Silent electric vehicles carry visitors between zones. The annual Buddha Jayanti festival (full moon of Baisakh, usually May) draws pilgrims from across South and Southeast Asia. Plan at least one full day — two days to do justice to both the Sacred Garden and the monastery zones.</p>
<h3>Highlights</h3>
<ul>
  <li>Maya Devi Temple — marks the precise birthplace of Gautama Buddha</li>
  <li>Ashoka Pillar (249 BCE) — oldest inscription in Nepal, authenticating the site</li>
  <li>Sacred Puskarani pond where the newborn Buddha was bathed</li>
  <li>30+ international monasteries representing Buddhist traditions from 20+ nations</li>
  <li>Ruins of ancient stupas and viharas spanning the 3rd century BCE to medieval period</li>
  <li>Annual Buddha Jayanti pilgrimage festival each May</li>
</ul>`,
    district: 'Rupandehi',
    province: 'LUMBINI',
    lat: 27.4814,
    lng: 83.2758,
    elevation: 75,
    entryFee: 'NPR 500 (foreigners) / NPR 100 (SAARC) / Free (Nepali citizens)',
    bestSeason: 'Oct–Feb',
    openingHours: 'Sacred Garden 6:00 AM – 6:00 PM; individual monasteries vary',
    howToGetThere: 'Fly Kathmandu–Bhairahawa (Gautam Buddha Airport, 25 min) then taxi to Lumbini (22 km, 30 min). Or bus from Kathmandu to Bhairahawa (10–11 hrs) then local transport. From Pokhara: 4–5 hrs by bus.',
    gygQuery: 'Lumbini day tour',
    bookingCity: 'Lumbini',
    seoTitle: 'Lumbini Sacred Garden — UNESCO World Heritage Birthplace of the Buddha',
    seoDescription: 'Visit Lumbini, the UNESCO World Heritage birthplace of Gautama Buddha in Nepal — explore the Maya Devi Temple, Ashoka Pillar, and 30+ international Buddhist monasteries. Travel guide inside.',
    published: true,
    featured: true,
    publishedAt: new Date(),
  },
  {
    name: 'Maya Devi Temple Lumbini',
    category: 'TEMPLE',
    summary: 'The most sacred structure in Lumbini, housing the ancient ruins and Marker Stone that pinpoint the exact birthplace of Gautama Buddha (~563 BCE), with the Nativity Sculpture of Queen Maya Devi and the adjacent Puskarani nativity pond.',
    story: `<p>The Maya Devi Temple is the sacred epicentre of Lumbini and the most historically important structure at the Buddha's birthplace. Named after Queen Maya Devi, mother of Siddhartha Gautama, the complex has been identified through excavation as the very spot of the Buddha's birth. The earliest timber shrine on the site has been radiocarbon dated to around 550 BCE — among the earliest Buddhist shrines discovered in South Asia. Emperor Ashoka constructed a brick temple here in 249 BCE, and UNESCO and Durham University excavations from 2010 onward have revealed multiple successive layers of construction.</p>
<p>The present temple structure is a modern climate-controlled building with translucent roof panels protecting the in-situ archaeological ruins. At its heart, clearly visible through protective glass, is the Marker Stone — a sandstone slab marking the precise spot of the Buddha's birth. Adjacent to it is the celebrated Nativity Sculpture: a bas-relief carving of Queen Maya Devi gripping a Sal tree branch while giving birth, attended by Brahma and Indra. The sacred Puskarani pond (Nativity Pond) where the newborn received his first ritual bath still lies beside the temple, filled with water.</p>
<p>Shoes must be removed before entering. Photography within the innermost shrine is restricted. Pilgrims from every Buddhist nation circumambulate the ruins, burn incense, and leave offerings at the Marker Stone — creating an atmosphere of quiet, multi-faith reverence.</p>
<h3>Highlights</h3>
<ul>
  <li>The Marker Stone — authenticated precise birthplace of Gautama Buddha</li>
  <li>Earliest shrine layer dated to ~550 BCE, among the oldest in South Asia</li>
  <li>Nativity Sculpture: Queen Maya Devi giving birth under a Sal tree</li>
  <li>In-situ ruins of Emperor Ashoka's 249 BCE brick temple visible inside</li>
  <li>Sacred Puskarani nativity pond immediately adjacent</li>
  <li>UNESCO World Heritage Site at the heart of the Lumbini complex</li>
</ul>`,
    district: 'Rupandehi',
    province: 'LUMBINI',
    lat: 27.4696,
    lng: 83.2759,
    elevation: 75,
    entryFee: 'Included in Lumbini zone entry (NPR 500 foreigners)',
    bestSeason: 'Oct–Feb',
    openingHours: '6:00 AM – 6:00 PM daily',
    howToGetThere: 'Located within the Sacred Garden of the Lumbini Development Zone. Enter through the main gate and follow the central canal south to the Sacred Garden. Electric vehicles available.',
    gygQuery: 'Lumbini Maya Devi Temple',
    bookingCity: 'Lumbini',
    seoTitle: 'Maya Devi Temple Lumbini — Exact Birthplace of Gautama Buddha',
    seoDescription: "Explore the Maya Devi Temple in Lumbini — home to the Marker Stone, Nativity Sculpture, and Ashoka-era ruins that mark the Buddha's exact birthplace. Visiting guide and historical context.",
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Ashoka Pillar Lumbini',
    category: 'ARCHAEOLOGICAL',
    summary: 'A 6-metre pink sandstone pillar erected by Emperor Ashoka in 249 BCE bearing Nepal\'s oldest inscription in Brahmi script — the primary historical evidence authenticating Lumbini as the birthplace of Gautama Buddha.',
    story: `<p>The Ashoka Pillar at Lumbini is one of the most significant archaeological monuments in Nepal and among the most important epigraphic records of ancient South Asian history. Erected by the Mauryan Emperor Ashoka in 249 BCE during his personal pilgrimage to the birthplace of the Buddha, the pink Chunar sandstone pillar stands approximately 6 metres tall. Its inscription — written in Pali using Brahmi script — is the oldest surviving inscription in Nepal and the primary historical evidence authenticating Lumbini as the true birthplace of Gautama Buddha.</p>
<p>The inscription reads, in translation: <em>"King Piyadasi (Ashoka), beloved of the gods, in the 29th year of his reign, came himself and worshipped here, because this is where the Buddha Shakyamuni was born. He caused a stone wall to be built around the place and erected this stone pillar to mark the spot of the Nativity. He declared the village of Lumbini free from taxes…"</em></p>
<p>The pillar was lost from public knowledge for centuries and was rediscovered in December 1896 by General Khadga Shamsher Rana and German archaeologist Alois Anton Führer. The discovery definitively settled the long-debated question of Lumbini's location. The pillar now stands just outside the Maya Devi Temple, still bearing its Brahmi inscription, protected by a simple railing.</p>
<h3>Highlights</h3>
<ul>
  <li>Erected by Emperor Ashoka in 249 BCE during his personal pilgrimage</li>
  <li>Nepal's oldest surviving inscription in Brahmi script</li>
  <li>Primary archaeological authentication of Lumbini as Buddha's birthplace</li>
  <li>Pink Chunar sandstone, approximately 6 m tall</li>
  <li>Rediscovered in 1896 after centuries of obscurity</li>
  <li>Adjacent to the Maya Devi Temple within the Sacred Garden</li>
</ul>`,
    district: 'Rupandehi',
    province: 'LUMBINI',
    lat: 27.4698,
    lng: 83.2756,
    elevation: 75,
    entryFee: 'Included in Lumbini zone entry (NPR 500 foreigners)',
    bestSeason: 'Oct–Feb',
    openingHours: '6:00 AM – 6:00 PM daily',
    howToGetThere: 'Located within the Sacred Garden of the Lumbini Development Zone, immediately adjacent to the Maya Devi Temple.',
    gygQuery: 'Lumbini guided tour',
    bookingCity: 'Lumbini',
    seoTitle: "Ashoka Pillar Lumbini — Nepal's Oldest Inscription and Historical Landmark",
    seoDescription: "Discover the Ashoka Pillar at Lumbini — a 2,270-year-old sandstone column bearing Nepal's oldest inscription and the definitive proof of the Buddha's birthplace. History, visiting tips.",
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'World Peace Pagoda Lumbini',
    category: 'STUPA',
    summary: 'A gleaming white Japanese-built Buddhist stupa inaugurated in 2001 as a symbol of world peace at the northern axis of the Lumbini Development Zone, featuring four gilded Buddha statues and daily prayers by resident Nipponzan-Myohoji monks.',
    story: `<p>The World Peace Pagoda in Lumbini is a gleaming white Buddhist stupa constructed by the Japanese Nipponzan-Myohoji Buddhist order and inaugurated in November 2001. Standing at the northern axis of the Lumbini Master Plan — with the Maya Devi Temple at the southern end — the pagoda serves as the visual anchor of the entire development zone. The structure follows the classic Shanti Stupa (Peace Pagoda) design, similar pagodas having been built by the Nipponzan-Myohoji order on every continent as symbols of world peace and nuclear disarmament.</p>
<p>The purely white circular structure rises on a raised platform accessible by broad stone staircases from four cardinal directions. At each of the four cardinal points, a gilded statue of the Buddha is enshrined in a different mudra, representing key moments in the Buddha's life: birth, enlightenment, the first sermon, and parinirvana. The simplicity and luminosity of the white structure against the open Terai sky creates a striking impression, especially at dawn and dusk.</p>
<p>The pagoda is maintained by resident Japanese monks who conduct daily prayers. Visitors are welcome to meditate and attend services. As the northernmost point on the Lumbini axis, it is a natural starting point for exploring the zone south toward the monastic areas and ultimately the Sacred Garden.</p>
<h3>Highlights</h3>
<ul>
  <li>Pristine white stupa inaugurated in 2001 by Nipponzan-Myohoji Buddhist order</li>
  <li>Four gilded Buddha statues at the cardinal points representing key life moments</li>
  <li>Northern anchor of the entire Lumbini Development Zone master plan</li>
  <li>Daily prayers conducted by resident Japanese monks — visitors welcome</li>
  <li>Panoramic sunrise and sunset views across the Terai plains</li>
  <li>Similar Peace Pagodas exist on every continent as world peace symbols</li>
</ul>`,
    district: 'Rupandehi',
    province: 'LUMBINI',
    lat: 27.4989,
    lng: 83.2763,
    elevation: 75,
    entryFee: 'Free',
    bestSeason: 'Oct–Feb',
    openingHours: 'Open daily (dawn to dusk)',
    howToGetThere: 'Located at the northern end of the Lumbini Development Zone, accessible by electric vehicle from the main entrance or a 20-min walk north from the monastic zones.',
    gygQuery: 'Lumbini Peace Pagoda',
    bookingCity: 'Lumbini',
    seoTitle: 'World Peace Pagoda Lumbini — Japanese Buddhist Stupa & Pilgrimage Guide',
    seoDescription: "Visit the World Peace Pagoda (Shanti Stupa) in Lumbini — a gleaming white Japanese stupa with four gilded Buddhas at the birthplace of Gautama Buddha. Free entry, daily prayers.",
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Korean Buddhist Temple Lumbini',
    category: 'MONASTERY',
    summary: "One of the tallest and most ornate monasteries in Lumbini's West Monastic Zone — the Dae Sung Shakya Sa — featuring three floors of traditional Korean curved rooflines, vibrant murals, and short-term meditation retreat programmes.",
    story: `<p>The Dae Sung Shakya Sa (Korean Buddhist Temple) is one of the most architecturally striking monasteries in Lumbini's West Monastic Zone. Representing South Korea's Mahayana Buddhist tradition, the temple is among the tallest structures in the entire Lumbini complex, with three floors featuring dramatically curved rooflines covered in traditional Korean tube tiles — green and red dominant colours with golden details throughout.</p>
<p>The interior is lavishly decorated with deep-hued murals covering prayer hall walls and ornate ceiling frescoes depicting scenes from the Buddha's life and Buddhist cosmology. The meditation halls are serene and open to visitors. Unlike purely exhibition monasteries, Dae Sung Shakya Sa is a functioning religious community where resident monks and nuns conduct daily rituals.</p>
<p>One notable feature is the monastery's retreat hospitality programme: serious meditators can stay for short retreats with board and meals provided, subject to prior arrangement. This makes it one of the few Lumbini monasteries offering an immersive residential experience beyond a simple visual tour.</p>
<h3>Highlights</h3>
<ul>
  <li>One of the tallest monasteries in the Lumbini complex</li>
  <li>Traditional Korean three-floor curved rooflines in green, red, and gold</li>
  <li>Ornate interior murals and ceiling frescoes of the Buddha's life</li>
  <li>Active monastic community with daily rituals</li>
  <li>Short-term meditation retreat stays with meals available</li>
  <li>West Monastic Zone, within walking distance of the Chinese monastery</li>
</ul>`,
    district: 'Rupandehi',
    province: 'LUMBINI',
    lat: 27.4851,
    lng: 83.2698,
    elevation: 75,
    entryFee: 'Free',
    bestSeason: 'Oct–Feb',
    openingHours: '8:00 AM – 5:00 PM daily',
    howToGetThere: 'Located in the West Monastic Zone of the Lumbini Development Zone. Enter from the main gate and take the electric vehicle or walk west of the central canal.',
    gygQuery: 'Lumbini monastery tour',
    bookingCity: 'Lumbini',
    seoTitle: 'Korean Buddhist Temple Lumbini (Dae Sung Shakya Sa) — Visitor Guide',
    seoDescription: "Visit the Korean Buddhist Temple (Dae Sung Shakya Sa) in Lumbini's West Monastic Zone — ornate Korean architecture, vibrant murals, and meditation retreat stays. Free entry.",
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Chinese Buddhist Temple Lumbini',
    category: 'MONASTERY',
    summary: "The Zhong Hua Chinese Buddhist Monastery in Lumbini's West Monastic Zone — the first Buddhist temple outside China to receive official Chinese government approval (1998) — featuring imperial Forbidden City-style architecture, a vast symmetrical courtyard, and a giant seated Buddha.",
    story: `<p>The Zhong Hua Chinese Buddhist Monastery (China Temple) is one of the most recognised and photographed monasteries in Lumbini, situated in the West Monastic Zone. Completed in 1998 by the Chinese Buddhist Association, it holds the distinction of being the first Buddhist temple built outside China with official Chinese government approval. Its architecture evokes imperial Chinese temple design — sweeping pagoda-style roofs, red lacquered pillars, and golden decorative elements reminiscent of the Forbidden City in Beijing.</p>
<p>The main prayer hall is approached through a vast, manicured courtyard bordered by symmetrical gardens and reflective ponds. Inside, a giant seated Buddha statue dominates the space, flanked by attendant figures and intricate gilded carvings. The monastery's layout emphasises balance and symmetry in every direction — a core principle of Chinese Buddhist sacred architecture. Meditation pathways wind through the garden, providing spaces for circumambulation and quiet reflection.</p>
<p>As a functioning monastery maintained by resident monks conducting daily rituals, the Zhong Hua complex represents East Asian Mahayana Buddhism and serves as a cultural and religious bridge between Nepal and China. Its commanding architecture makes it a visual centrepiece of the West Monastic Zone.</p>
<h3>Highlights</h3>
<ul>
  <li>First Buddhist temple outside China with Chinese government approval (1998)</li>
  <li>Imperial-style architecture evoking Beijing's Forbidden City</li>
  <li>Vast symmetrical courtyard with reflective ponds and manicured gardens</li>
  <li>Giant seated Buddha statue in the main prayer hall</li>
  <li>Red lacquered pillars and golden pagoda rooflines</li>
  <li>Active Mahayana monastic community with daily rituals</li>
</ul>`,
    district: 'Rupandehi',
    province: 'LUMBINI',
    lat: 27.4848,
    lng: 83.2693,
    elevation: 75,
    entryFee: 'Free',
    bestSeason: 'Oct–Feb',
    openingHours: '8:00 AM – 5:00 PM daily',
    howToGetThere: 'Located in the West Monastic Zone, Lumbini Development Zone. Follow the main canal west from the main entrance; accessible by electric vehicle from the entrance gate.',
    gygQuery: 'Lumbini monastery tour',
    bookingCity: 'Lumbini',
    seoTitle: 'Chinese Buddhist Temple Lumbini (Zhong Hua Monastery) — Visitor Guide',
    seoDescription: "Explore the Zhong Hua Chinese Buddhist Monastery in Lumbini — the first Chinese-government-approved temple outside China, featuring Forbidden City-style architecture. Free entry.",
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Thai Buddhist Temple Lumbini',
    category: 'MONASTERY',
    summary: "The Royal Thai Buddhist Monastery (Wat Thai Lumbini) in Lumbini's East Monastic Zone — a stunning white marble and gold Theravada temple funded by the Thai government, featuring traditional sloping rooflines, lotus gardens, and vivid Jataka tale murals.",
    story: `<p>The Royal Thai Buddhist Monastery (Wat Thai Lumbini) is one of the most visually spectacular temples in Lumbini's East Monastic Zone. Funded by the Thai government and representing the Theravada Buddhist tradition of Southeast Asia, it is built in traditional Thai temple style — gleaming white marble adorned with golden embellishments, layered sloping roofs, and ornate spire-like prangs characteristic of classical Thai wat architecture.</p>
<p>Adjacent to the main white marble prayer hall stands a blue-roofed meditation centre with serene interior spaces. The grounds are surrounded by manicured gardens, lotus ponds, and pathways ideal for walking meditation. Inside, golden Buddha statues preside over prayer halls decorated with vibrant murals depicting scenes from the Jataka tales (stories of the Buddha's previous lives) and key events in Buddhist history.</p>
<p>As a Theravada monastery in the East Zone, the Royal Thai Monastery sits alongside institutions from Myanmar and Sri Lanka, representing the Southern school of Buddhism dominant across mainland Southeast Asia. It is considered one of the most architecturally sophisticated contributions to the Lumbini international monastic landscape.</p>
<h3>Highlights</h3>
<ul>
  <li>Gleaming white marble structure with traditional Thai gold embellishments</li>
  <li>Classic Thai sloping rooflines and ornate spire (prang) architecture</li>
  <li>Vivid Jataka tale murals and the life-of-Buddha paintings</li>
  <li>Lotus ponds and manicured walking-meditation gardens</li>
  <li>Funded by the Royal Thai Government as a Theravada landmark</li>
  <li>Blue-roofed meditation centre adjacent to the main temple</li>
</ul>`,
    district: 'Rupandehi',
    province: 'LUMBINI',
    lat: 27.4868,
    lng: 83.2821,
    elevation: 75,
    entryFee: 'Free',
    bestSeason: 'Oct–Feb',
    openingHours: '8:00 AM – 5:00 PM daily',
    howToGetThere: 'Located in the East Monastic Zone, Lumbini Development Zone. Follow the central canal east from the main entrance; accessible by electric vehicle.',
    gygQuery: 'Lumbini monastery tour',
    bookingCity: 'Lumbini',
    seoTitle: 'Thai Buddhist Temple Lumbini (Wat Thai Lumbini) — Visitor Guide',
    seoDescription: "Explore the Royal Thai Buddhist Monastery at Lumbini — a stunning white marble and gold Theravada temple with lotus gardens and Jataka murals in Nepal's sacred Buddhist zone.",
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Myanmar Buddhist Temple Lumbini',
    category: 'MONASTERY',
    summary: "The Myanmar Golden Temple in Lumbini's East Monastic Zone — one of the oldest and most striking monasteries in the complex, featuring a radiant gilded Bagan-inspired shikhara tower and the Lokamani Pula Pagoda modelled on Yangon's Shwedagon.",
    story: `<p>The Myanmar Golden Temple (Myanmar Golden Monastery) is one of the oldest and most distinctive monastic structures in Lumbini's East Monastic Zone. Built in traditional Burmese religious architectural style, the complex is immediately identifiable by its radiant gilded exterior, tiered pagoda towers, and ornate woodwork. The main prayer hall is topped by a dramatic corncob-shaped shikhara tower inspired by the temples of Bagan, Myanmar — an architectural form unique among all the Lumbini monasteries.</p>
<p>Within the complex stands the Lokamani Pula Pagoda, a large gilded stupa in the southern Burmese style reportedly inspired by the Shwedagon Pagoda of Yangon — one of the most sacred Buddhist sites in the world. The pagoda's golden exterior gleams brilliantly in the Terai sunlight and serves as a visible landmark across the East Zone. Three prayer halls, detailed carvings, and an atmosphere of active devotion complete the experience.</p>
<p>Its striking golden architecture — juxtaposed against the flat green landscape of the Terai — creates one of the most memorable visual impressions among all of Lumbini's international monasteries. The combination of the Bagan-inspired tower and the Shwedagon-inspired pagoda makes it a unique architectural ambassador of Myanmar's rich Buddhist heritage.</p>
<h3>Highlights</h3>
<ul>
  <li>Radiant gold facade and Bagan-inspired corncob shikhara tower</li>
  <li>Lokamani Pula Pagoda — modelled on Yangon's Shwedagon</li>
  <li>One of the oldest structures in the Lumbini Monastic Zone</li>
  <li>Three prayer halls with intricate gilded carvings and woodwork</li>
  <li>Active Theravada monastic community with resident Burmese monks</li>
  <li>Most brilliantly gilded exterior of any Lumbini monastery</li>
</ul>`,
    district: 'Rupandehi',
    province: 'LUMBINI',
    lat: 27.4855,
    lng: 83.2818,
    elevation: 75,
    entryFee: 'Free',
    bestSeason: 'Oct–Feb',
    openingHours: '8:00 AM – 5:00 PM daily',
    howToGetThere: 'Located in the East Monastic Zone of the Lumbini Development Zone. Accessible by electric vehicle from the main entrance or a short walk east of the central canal.',
    gygQuery: 'Lumbini monastery tour',
    bookingCity: 'Lumbini',
    seoTitle: 'Myanmar Golden Temple Lumbini — Burmese Buddhist Monastery Guide',
    seoDescription: "Explore the Myanmar Golden Temple at Lumbini — a dazzling Bagan-style gilded monastery with the Lokamani Pula Pagoda modelled on Yangon's Shwedagon. Free entry.",
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Sri Lanka Buddhist Temple Lumbini',
    category: 'MONASTERY',
    summary: "The Sri Lanka Maha Vihara in Lumbini's East Monastic Zone — a grand Theravada monastery with a moated design, domed stupa, golden seated Buddha, and colorful murals depicting Buddhism's arrival in Sri Lanka over 2,000 years ago.",
    story: `<p>The Sri Lanka Maha Vihara is one of the significant Theravada Buddhist monasteries in Lumbini's East Monastic Zone, built by the Sri Lankan Buddhist community to honour the birthplace of Gautama Buddha. The architecture reflects traditional Sri Lankan design: earthy brick and stone that harmonise with the surrounding landscape rather than competing with it. The main structure features a raised platform topped by a traditional domed stupa, beneath which sits a beautifully gilded seated Buddha in a meditative posture.</p>
<p>The complex is characterised by a grand moated design, with the main shrine surrounded by water channels evoking the ancient monastery complexes of Anuradhapura and Polonnaruwa in Sri Lanka. Interior walls are adorned with elaborate colourful murals depicting the life of the Buddha and the history of Buddhism's spread to Sri Lanka — where it has been practised continuously for over 2,000 years since King Ashoka's son Mahinda brought the Dhamma to the island. Open-air corridors and prayer flags create a contemplative atmosphere throughout the grounds.</p>
<p>As a Theravada institution in the East Zone, the Sri Lanka Maha Vihara is part of a cluster of South and Southeast Asian Buddhist institutions alongside the Thai and Myanmar monasteries. It is an active religious institution with resident monks participating fully in the ceremonial life of the Lumbini community.</p>
<h3>Highlights</h3>
<ul>
  <li>Traditional Sri Lankan Buddhist architecture with moated complex design</li>
  <li>Domed stupa with golden seated Buddha in meditation posture</li>
  <li>Colourful murals of the Buddha's life and Buddhism's arrival in Sri Lanka</li>
  <li>Open-air corridors and prayer flags for contemplative walking</li>
  <li>Active Theravada community with resident Sri Lankan monks</li>
  <li>Evokes the ancient monastery complexes of Anuradhapura</li>
</ul>`,
    district: 'Rupandehi',
    province: 'LUMBINI',
    lat: 27.4845,
    lng: 83.2825,
    elevation: 75,
    entryFee: 'Free',
    bestSeason: 'Oct–Feb',
    openingHours: '8:00 AM – 5:00 PM daily',
    howToGetThere: 'Located in the East Monastic Zone, Lumbini Development Zone. Accessible by electric vehicle from the main entrance or walk east of the central canal.',
    gygQuery: 'Lumbini monastery tour',
    bookingCity: 'Lumbini',
    seoTitle: 'Sri Lanka Maha Vihara Lumbini — Theravada Buddhist Monastery Guide',
    seoDescription: "Visit the Sri Lanka Maha Vihara at Lumbini — a grand moated Theravada monastery with a domed stupa, golden Buddha, and murals of Buddhism's 2,000-year history in Sri Lanka. Free entry.",
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'German Buddhist Temple Lumbini',
    category: 'MONASTERY',
    summary: "The Great Drigung Kagyud Lotus Stupa in Lumbini's West Monastic Zone — founded by the German Tara Foundation and the Drigung Kagyu lineage of Tibetan Buddhism, featuring a unique hollow lotus stupa with a gilded interior and active meditation retreat programmes.",
    story: `<p>The Great Drigung Kagyud Lotus Stupa, commonly known as the German Lotus Stupa or German Temple, is one of the most architecturally distinctive structures in Lumbini's West Monastic Zone. Despite its "German" popular name — reflecting that its founding initiative came from the Tara Foundation based in Germany — the stupa is built in classical Tibetan Vajrayana style, representing the Drigung Kagyu lineage of Tibetan Buddhism. The project was conceived in 1999 under the guidance of Venerable Drubpon Sonam Jorphel Rinpoche.</p>
<p>The architecture departs entirely from the conventional monastery-hall format. Instead it takes the form of a large lotus stupa — unique among Lumbini's monasteries — with a hollow interior accessible to visitors. The foundation contains a glass-covered opening revealing a Buddha statue within. The interior is richly decorated with gold, carved wood, and intricate Tibetan Buddhist paintings on the ceiling conveying messages of peace, non-violence, and compassion. An extensive garden with meditation pathways surrounds the stupa.</p>
<p>The Drigung Kagyu lineage of Tibetan Buddhism is renowned for its emphasis on intensive meditation practice and retreat. The Great Lotus Stupa serves as both a monument and a living retreat centre; resident monks continue the Drigung Kagyu tradition in this uniquely sacred location at the birthplace of the Buddha.</p>
<h3>Highlights</h3>
<ul>
  <li>Unique lotus stupa design — unlike any other monastery in Lumbini</li>
  <li>Glass-revealed gilded Buddha statue visible within the stupa foundation</li>
  <li>Ceiling covered with intricate Tibetan Buddhist paintings and gold carvings</li>
  <li>Represents the Drigung Kagyu lineage of Tibetan Vajrayana Buddhism</li>
  <li>Founded in 1999 by the German Tara Foundation and Drigung Kagyu masters</li>
  <li>Active meditation retreat centre with resident Tibetan monks</li>
</ul>`,
    district: 'Rupandehi',
    province: 'LUMBINI',
    lat: 27.4838,
    lng: 83.2680,
    elevation: 75,
    entryFee: 'Free',
    bestSeason: 'Oct–Feb',
    openingHours: '8:00 AM – 5:00 PM daily',
    howToGetThere: 'Located in the West Monastic Zone (Plot WB4), Lumbini Development Zone. Accessible by electric vehicle from the main entrance or walk west of the central canal.',
    gygQuery: 'Lumbini monastery tour',
    bookingCity: 'Lumbini',
    seoTitle: 'German Lotus Stupa Lumbini (Great Drigung Kagyud) — Visitor Guide',
    seoDescription: "Explore the German Lotus Stupa at Lumbini — a unique hollow lotus-shaped Tibetan Vajrayana stupa founded by the German Tara Foundation with golden murals and meditation retreats. Free entry.",
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Vietnamese Buddhist Temple Lumbini',
    category: 'MONASTERY',
    summary: "The Linh Son Monastery in Lumbini's West Monastic Zone — a beautifully landscaped Vietnamese Mahayana Buddhist temple featuring traditional curved rooftops, lotus ponds, a large standing Buddha statue, and an active monastic community.",
    story: `<p>The Linh Son Monastery (Vietnam Phat Quoc Tu) is the Vietnamese Buddhist temple in Lumbini's West Monastic Zone, representing the Mahayana Buddhist tradition of Vietnam. The monastery is affiliated with the Linh Son Buddhist Association, a global Vietnamese Buddhist organisation with centres across multiple continents. Its architectural style follows traditional Vietnamese Buddhist temple design, characterised by gracefully curved multi-tiered rooftops, rich wooden carvings, and an integration of natural beauty into the complex through lush gardens and lotus ponds.</p>
<p>The grounds of the Linh Son Monastery are notably beautiful even by the high standards of Lumbini's international monasteries. Lotus ponds, flowering gardens, and softly scented incense create a sensory environment of peace and natural elegance. The main prayer hall houses traditional Vietnamese Buddhist altar arrangements with multiple Buddha figures and bodhisattva statues. A large standing Buddha statue is among the temple's visual highlights, and colourful wall carvings tell stories from Buddhist scripture.</p>
<p>Located on Vishnupura Road in the West Monastic Zone, the monastery operates from 8:00 AM to 5:00 PM daily and functions as an active monastic community where Vietnamese Buddhist rituals, chanting, and meditation practices are maintained.</p>
<h3>Highlights</h3>
<ul>
  <li>Traditional Vietnamese curved multi-tiered rooftops and wooden carvings</li>
  <li>Lush lotus ponds and flowering gardens with an incense-scented atmosphere</li>
  <li>Large standing Buddha statue as the centrepiece of the complex</li>
  <li>Colourful Buddhist scripture wall art and carvings</li>
  <li>Active Vietnamese monastic community with daily rituals and chanting</li>
  <li>Part of the global Linh Son Buddhist Association network</li>
</ul>`,
    district: 'Rupandehi',
    province: 'LUMBINI',
    lat: 27.4832,
    lng: 83.2674,
    elevation: 75,
    entryFee: 'Free',
    bestSeason: 'Oct–Feb',
    openingHours: '8:00 AM – 5:00 PM daily',
    howToGetThere: 'Located on Vishnupura Road in the West Monastic Zone, Lumbini Development Zone. Accessible by electric vehicle from the main entrance.',
    gygQuery: 'Lumbini monastery tour',
    bookingCity: 'Lumbini',
    seoTitle: 'Vietnamese Buddhist Temple Lumbini (Linh Son Monastery) — Visitor Guide',
    seoDescription: "Visit the Linh Son Vietnamese Mahayana Monastery at Lumbini — beautiful lotus gardens, curved rooftops, standing Buddha statue, and active Vietnamese monks. Free entry.",
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Cambodian Buddhist Temple Lumbini',
    category: 'MONASTERY',
    summary: "An extraordinary Angkor Wat-inspired Theravada monastery in Lumbini's East Monastic Zone, featuring dramatic naga serpent corner figures, intricate Khmer-style carvings, and a golden Buddha seated beneath an artificial Bodhi tree.",
    story: `<p>The Cambodian Monastery at Lumbini is one of the most visually dramatic temples in the East Monastic Zone. Designed in the style of Cambodia's iconic Angkor Wat complex, the monastery brings the aesthetic vocabulary of ancient Khmer Buddhist architecture to the plains of southern Nepal. The complex is enclosed by a square railing topped at each corner by spectacular serpentine naga figures whose tails interlink — an element drawn directly from Angkor's iconic naga balustrades guarding the approaches to the temple.</p>
<p>The main temple uses dragon motifs, elaborate floral carvings, and iconographic elements characteristic of Khmer Buddhist and Hindu-Buddhist temple art. Inside the main hall, a large golden Buddha statue sits beneath an artificial Bodhi tree, recreating the tableau of the Buddha's enlightenment under the original Bodhi tree in Bodh Gaya. The surrounding walls feature relief carvings and painted panels from Buddhist scripture and Cambodian cultural tradition. The craftsmanship is among the most impressive in the Lumbini monastic zone.</p>
<p>Cambodia's Theravada Buddhist tradition is represented here alongside the Thai, Myanmar, and Sri Lankan monasteries in the East Zone. The monastery serves as a cultural bridge between the birthplace of Buddhism in Nepal and one of Southeast Asia's most deeply Buddhist nations, where the Angkor period produced some of the world's greatest Buddhist monuments.</p>
<h3>Highlights</h3>
<ul>
  <li>Angkor Wat-inspired Khmer architecture — unique in Nepal</li>
  <li>Dramatic naga serpent corner figures with interlinking tails</li>
  <li>Golden Buddha statue beneath an artificial Bodhi tree in the main hall</li>
  <li>Intricate dragon and floral Khmer carvings throughout the complex</li>
  <li>One of the most visually dramatic monasteries in the Lumbini zone</li>
  <li>Represents Cambodia's ancient Theravada tradition and Angkor heritage</li>
</ul>`,
    district: 'Rupandehi',
    province: 'LUMBINI',
    lat: 27.4840,
    lng: 83.2832,
    elevation: 75,
    entryFee: 'Free',
    bestSeason: 'Oct–Feb',
    openingHours: '8:00 AM – 5:00 PM daily',
    howToGetThere: 'Located in the East Monastic Zone, Lumbini Development Zone. Accessible by electric vehicle from the main entrance or walk east of the central canal.',
    gygQuery: 'Lumbini monastery tour',
    bookingCity: 'Lumbini',
    seoTitle: 'Cambodian Buddhist Temple Lumbini — Angkor-Inspired Monastery Guide',
    seoDescription: "Discover the Cambodian Monastery at Lumbini — a spectacular Angkor Wat-inspired Theravada temple with naga figures, Khmer carvings, and a golden Buddha under a Bodhi tree. Free entry.",
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
]

async function main() {
  console.log(`🌱 Seeding batch 3 — ${places.length} places...`)
  for (const p of places) {
    await prisma.place.upsert({
      where: { slug: slug(p.name) },
      update: {},
      create: {
        ...p,
        slug: slug(p.name),
      },
    })
    console.log(`  ✅ ${p.name}`)
  }
  console.log('🌱 Batch 3 complete!')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
