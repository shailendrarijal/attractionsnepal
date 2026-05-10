import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import slugify from 'slugify'

const prisma = new PrismaClient()
const slug = (n) => slugify(n, { lower: true, strict: true })

const places = [
  {
    name: 'Halesi Mahadev Temple',
    category: 'CAVE',
    summary: 'Halesi Mahadev, also known as Halesi-Maratika Caves, is one of eastern Nepal\'s most sacred pilgrimage sites venerated simultaneously by Hindus, Buddhists, and the indigenous Kirat people — often called the Pashupatinath of eastern Nepal. Hindus revere the cave as an abode of Shiva, while Tibetan Buddhists identify it as Maratika, where Guru Padmasambhava attained immortality. The cave complex in Khotang district draws pilgrims from across Nepal and Tibet.',
    story: `<p>Deep in the hills of Khotang district, the Halesi-Maratika cave complex is one of Nepal's most spiritually layered pilgrimage sites. For Hindus, the natural cavern formations are regarded as the abode of Shiva himself, who is said to have hidden here when pursued by the demon Bhasmasura. The main cave, 193 feet in diameter, contains a natural Shivalinga that has drawn devotees for centuries, particularly on Shivaratri when pilgrims flock from across eastern Nepal and the Indian plains.</p>
<p>For Tibetan Buddhists and followers of Vajrayana traditions, Halesi holds equally profound significance. The cave is identified as Maratika — the site where Padmasambhava (Guru Rinpoche) meditated and performed rituals to achieve immortality alongside his consort Mandarava. The Thrangu Tashi Yangtse Monastery, founded above the cave complex, attracts Buddhist pilgrims from Tibet, Bhutan, and across the Himalayan world. This rare confluence of Hinduism, Buddhism, and indigenous Kirat worship makes Halesi a place of extraordinary religious plurality.</p>
<h3>Highlights</h3>
<ul>
  <li>Three main sacred caves: Halesi, Shiva, and Vishnu caves with natural formations</li>
  <li>Natural Shivalinga worshipped continuously for centuries</li>
  <li>Maratika — sacred site where Guru Padmasambhava attained immortality</li>
  <li>Thrangu Tashi Yangtse Monastery above the cave complex</li>
  <li>Major pilgrimage during Shivaratri drawing thousands of Hindu devotees</li>
  <li>Unique confluence of Hindu, Buddhist, and Kirat religious traditions</li>
</ul>`,
    district: 'Khotang',
    province: 'KOSHI',
    lat: 27.2458,
    lng: 86.6214,
    elevation: 1750,
    entryFee: 'NPR 200 (foreigners)',
    bestSeason: 'Oct–Dec, Feb–Apr',
    openingHours: 'Open daily (cave accessible 6 AM–6 PM)',
    howToGetThere: 'Fly Kathmandu–Rumjatar (35 min) then drive/walk 2 hrs to Halesi. Or bus from Kathmandu to Diktel (2 days) then local transport. The site is 4 km from Halesi Bazaar in Khotang district.',
    gygQuery: 'Halesi Mahadev Temple Nepal',
    bookingCity: 'Kathmandu',
    seoTitle: 'Halesi Mahadev Cave Temple — Sacred Pilgrimage Site in Eastern Nepal',
    seoDescription: 'Discover Halesi Mahadev Temple in Khotang — eastern Nepal\'s most sacred cave complex venerated by Hindus, Buddhists, and Kirat people. The site where Padmasambhava attained immortality.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Dolakha Bhimsen Temple',
    category: 'TEMPLE',
    summary: 'The Dolakha Bhimsen Temple is one of the most mysteriously revered temples in Nepal, famous for the phenomenon of its deity\'s idol sweating blood — believed to presage national calamities. Located in the ancient bazaar town of Dolakha, the temple is also the site of a remarkable annual festival and an important stop on the route to Jiri and the lower Everest approach.',
    story: `<p>Dolakha Bhimsen Temple sits at the heart of the ancient hilltop bazaar town of Dolakha in Dolakha district, at approximately 1,550 metres elevation. The temple is dedicated to Bhimsen, the second of the Pandava brothers from the Mahabharata, who is venerated in Nepal as the deity of trade and merchants. The Newari trading community of Dolakha has worshipped here for centuries, and the temple's unusual architecture — combining Newari pagoda style with Tantric elements — reflects the sophisticated religious culture of this old trading town.</p>
<p>The temple is famous throughout Nepal for a startling natural phenomenon: on certain auspicious occasions and before major national disasters, the stone idol of Bhimsen is said to sweat blood. This phenomenon has been documented in historical records and is associated with events such as the 1934 earthquake and the 2001 royal massacre. Devotees make the journey specifically to witness or seek the deity's protection, making Dolakha one of the most emotionally resonant pilgrimage destinations in the eastern hills.</p>
<h3>Highlights</h3>
<ul>
  <li>Famous for the sweating-blood phenomenon believed to presage national disasters</li>
  <li>Unique Newari pagoda-style architecture in ancient Dolakha bazaar</li>
  <li>One of Nepal's most important Bhimsen temples for the merchant community</li>
  <li>Annual chariot procession festival drawing pilgrims from across the region</li>
  <li>Historic bazaar town setting with traditional stone-paved streets</li>
  <li>Gateway to the Rolwaling Valley and Solu Khumbu trekking regions</li>
</ul>`,
    district: 'Dolakha',
    province: 'BAGMATI',
    lat: 27.6612,
    lng: 86.0644,
    elevation: 1550,
    entryFee: 'Free',
    bestSeason: 'Oct–Dec, Feb–May',
    openingHours: '5:00 AM – 7:00 PM daily',
    howToGetThere: 'Bus from Kathmandu to Charikot (5–6 hrs) then local transport to Dolakha Bazaar (30 min). Alternatively, take a tourist bus to Jiri and get off at Charikot junction.',
    gygQuery: 'Dolakha Nepal temples',
    bookingCity: 'Kathmandu',
    seoTitle: 'Dolakha Bhimsen Temple — The Sweating Idol of Eastern Nepal',
    seoDescription: 'Visit Dolakha Bhimsen Temple — one of Nepal\'s most mysteriously revered shrines, famous for its bleeding-sweat phenomenon and stunning Newari architecture in the eastern hills.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Namo Buddha Monastery',
    category: 'MONASTERY',
    summary: 'Namo Buddha Monastery is a large and active Tibetan Buddhist monastery at the sacred Namobuddha hill in Kavrepalanchok, one of the three most sacred Buddhist sites in Nepal. The site commemorates the legendary act of a Bodhisattva prince who sacrificed his body to feed a starving tigress and her cubs, and the monastery complex has grown into one of the most important Kagyu monastic centers in the Himalayan world.',
    story: `<p>Namo Buddha Monastery sits atop the sacred Namobuddha hill at approximately 1,750 metres in Kavrepalanchok district, about 38 kilometres east of Kathmandu. The site is one of the three most holy Buddhist pilgrimage sites in Nepal alongside Swayambhunath and Boudhanath, and is especially revered in the Tibetan Buddhist world. The name derives from the Sanskrit "Namo Buddhaya" (I bow to the Buddha), and the hill is said to be the site where the Bodhisattva prince Mahasattva sacrificed his body to feed a starving tigress and her cubs in a past life — an event commemorated in the Jataka tales.</p>
<p>The monastery itself is a sprawling complex built in traditional Tibetan style under the guidance of Thrangu Rinpoche. It features a large prayer hall with ornate murals and gilded statues, a stupa marking the spot of the Bodhisattva's sacrifice, monks' quarters, a shedra (monastic college), and retreat facilities. The resident community of monks and nuns follows the Kagyu lineage of Tibetan Buddhism. The monastery runs teaching programs open to international students, making it an accessible place for meditation retreats.</p>
<h3>Highlights</h3>
<ul>
  <li>One of the three holiest Buddhist pilgrimage sites in Nepal</li>
  <li>Stupa marking where the Bodhisattva prince sacrificed himself for a tigress</li>
  <li>Large Kagyu monastery complex with ornate murals and gilded statues</li>
  <li>Shedra (monastic college) and international retreat programs</li>
  <li>Hilltop location with panoramic views of surrounding Kavrepalanchok hills</li>
  <li>Easy day trip from Kathmandu (38 km) combined with Dhulikhel visit</li>
</ul>`,
    district: 'Kavrepalanchok',
    province: 'BAGMATI',
    lat: 27.5787,
    lng: 85.5323,
    elevation: 1750,
    entryFee: 'Free',
    bestSeason: 'Oct–Dec, Feb–May',
    openingHours: '6:00 AM – 6:00 PM daily',
    howToGetThere: 'Drive from Kathmandu via Banepa and Dhulikhel (1.5–2 hrs, 38 km). Shared jeeps run from Dhulikhel to Namobuddha. Can also be reached by the Namobuddha trekking trail from Panauti or Dhulikhel (3–4 hrs on foot).',
    gygQuery: 'Namobuddha monastery day trip Kathmandu',
    bookingCity: 'Kathmandu',
    seoTitle: 'Namo Buddha Monastery — Sacred Buddhist Pilgrimage Site Near Kathmandu',
    seoDescription: 'Visit Namo Buddha Monastery in Kavrepalanchok — one of Nepal\'s three holiest Buddhist sites with a Kagyu monastery, ancient stupa, and meditation retreats. 38 km from Kathmandu.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Bisket Jatra Bhaktapur',
    category: 'CULTURAL_VILLAGE',
    summary: 'Taumadhi Square in Bhaktapur is the epicenter of Bisket Jatra, Nepal\'s most dramatic New Year chariot festival celebrated each April. Massive wooden chariots bearing deities Akash Bhairav and Bhadrakali are pulled through the ancient city\'s streets in a spectacular tug-of-war between competing city factions, culminating in the ceremonial raising and toppling of a 25-metre wooden pole (lingo) to mark the start of Nepal Sambat new year.',
    story: `<p>Bisket Jatra is among Nepal's most spectacular festivals, transforming Bhaktapur into a living theatre of ancient Newari tradition each April. The festival's centerpiece is the construction of two towering wooden chariots — one bearing Akash Bhairav and the other Bhadrakali — which are hauled through the narrow medieval streets by competing teams of devotees from Bhaktapur's upper and lower city wards. The chariot procession creates a vibrant, chaotic energy as thousands of devotees pull in opposite directions, believing that victory for their side will bring good fortune for the coming year.</p>
<p>The festival reaches its climax at Lyasinkhel, where a 25-metre lingo (ceremonial pole) is raised and then toppled to mark the new year. Two long cloth serpents attached to the pole represent the serpent demons Harikantha and Mahakali slain by a prince to break an ancient curse. When the lingo falls on the auspicious day, Nepal Sambat new year officially begins. The entire week-long celebration — including the illuminated chariot, deity processions, and religious rites — draws tens of thousands of spectators from across Nepal and abroad.</p>
<h3>Highlights</h3>
<ul>
  <li>Massive wooden chariot processions of Akash Bhairav and Bhadrakali deities</li>
  <li>Ceremonial raising and toppling of the 25-metre lingo (festival pole)</li>
  <li>Competitive chariot-pulling between upper and lower Bhaktapur ward teams</li>
  <li>Set against UNESCO-listed Taumadhi Square with the Nyatapola Temple backdrop</li>
  <li>Week-long celebrations with deity displays and traditional Newari music</li>
  <li>Marks the beginning of Nepal Sambat New Year (mid-April)</li>
</ul>`,
    district: 'Bhaktapur',
    province: 'BAGMATI',
    lat: 27.6716,
    lng: 85.4298,
    elevation: 1401,
    entryFee: 'NPR 1,500 (Bhaktapur zone entry for foreigners)',
    bestSeason: 'April (Bisket Jatra festival only)',
    openingHours: 'Festival: mid-April for 9 days; Taumadhi Square: always accessible',
    howToGetThere: 'From Kathmandu, take a local bus or microbus from Kalanki or Ratna Park to Bhaktapur (1 hr). From there walk 10 min to Taumadhi Square. Taxis available from Kathmandu (45 min).',
    gygQuery: 'Bhaktapur Bisket Jatra festival tour',
    bookingCity: 'Kathmandu',
    seoTitle: 'Bisket Jatra Bhaktapur — Nepal\'s Most Dramatic New Year Chariot Festival',
    seoDescription: 'Witness Bisket Jatra in Bhaktapur — Nepal\'s spectacular New Year chariot festival with massive deity chariots, a 25-metre ceremonial pole, and ancient Newari traditions at Taumadhi Square.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Asan Bazaar Kathmandu',
    category: 'CULTURAL_VILLAGE',
    summary: 'Asan Bazaar is the historic commercial heart of old Kathmandu — a vibrant intersection of six ancient trade roads where the Annapurna Pokhari shrine sits at the centre, surrounded by centuries-old merchant buildings, traditional Newari architecture, and the bustle of one of Nepal\'s oldest continuously operating markets.',
    story: `<p>Asan Bazaar sits at the intersection of six ancient trade routes in the heart of old Kathmandu, and has functioned as the city's central marketplace for over a thousand years. The intersection is dominated by the Annapurna Pokhari — a small open-air shrine to the goddess Annapurna — where devotees make offerings of grain, spices, and flowers every morning. The market's radiating lanes specialize in different goods: spices, dried fruit, metalwork, thangkas, and grain — a trading specialization that dates to the medieval Newar merchant guilds.</p>
<p>The buildings surrounding Asan are among the finest examples of traditional Newari architecture in Kathmandu, with intricate carved wood windows, overhanging upper floors, and narrow ground-floor shops that open directly onto the lanes. The bazaar comes alive before dawn when wholesalers begin trading and temple priests perform the first puja of the day, and it remains bustling until evening. Major festivals, particularly Indra Jatra, transform Asan into a processional route as deity chariots pass through the ancient lanes.</p>
<h3>Highlights</h3>
<ul>
  <li>Historic six-road intersection at the heart of old Kathmandu for 1,000+ years</li>
  <li>Annapurna Pokhari shrine with daily dawn offerings</li>
  <li>Traditional Newari merchant buildings with carved wood windows</li>
  <li>Spice market, grain trade, thangka shops and metalwork stalls</li>
  <li>Processional route for Indra Jatra and other major festivals</li>
  <li>Living example of medieval Newar commercial and religious culture</li>
</ul>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.7075,
    lng: 85.3111,
    elevation: 1310,
    entryFee: 'Free',
    bestSeason: 'Oct–Apr',
    openingHours: 'Market: 6:00 AM – 8:00 PM daily; Annapurna shrine: always open',
    howToGetThere: 'Walk 10–15 min northeast from Thamel through Chhetrapati and Thahiti. Or walk 10 min north from Kathmandu Durbar Square through Indrachowk. Asan is signposted from both.',
    gygQuery: 'Kathmandu old bazaar walking tour',
    bookingCity: 'Kathmandu',
    seoTitle: 'Asan Bazaar Kathmandu — The Ancient Heart of Nepal\'s Capital',
    seoDescription: 'Explore Asan Bazaar in Kathmandu — a 1,000-year-old market intersection with the Annapurna shrine, traditional Newari architecture, and vibrant daily market life in old Kathmandu.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Changu Narayan Temple',
    category: 'TEMPLE',
    summary: 'Changu Narayan is Nepal\'s oldest temple — a UNESCO World Heritage Site dedicated to Vishnu, perched on a hilltop at 1,541 m in Bhaktapur district. Dating to the 4th century CE, it contains some of the finest examples of Licchavi-era stone sculpture in existence, including the celebrated 5th-century Vishnu Vikrantha carving that is considered a masterpiece of South Asian art.',
    story: `<p>Changu Narayan Temple, perched on a forest-covered hilltop at 1,541 metres above the Manohara River valley, is Nepal's oldest surviving temple and one of its most important artistic treasures. Dedicated to Vishnu in his form as Narayan, the temple was originally built in the 4th century CE during the Licchavi period and has been expanded and embellished by successive Malla and Shah kings. It was designated a UNESCO World Heritage Site in 1979 as part of the Kathmandu Valley listing.</p>
<p>The temple courtyard is an extraordinary open-air museum of Licchavi-era sculpture, with stone carvings dating back 1,500 years lining the pathways. The most celebrated piece is the 5th-century Vishnu Vikrantha relief depicting Vishnu in his "Vamana" (dwarf) avatar, considered a masterpiece of Licchavi stone carving. Other highlights include the Garuda kneeling in supplication before Vishnu's door, a multi-armed Vishnu Vishwarupa, and the oldest stone inscription in Nepal dating to 464 CE recording the deeds of King Manadeva.</p>
<h3>Highlights</h3>
<ul>
  <li>Nepal's oldest surviving temple — founded in the 4th century CE</li>
  <li>UNESCO World Heritage Site with 1,500-year-old Licchavi stone sculptures</li>
  <li>5th-century Vishnu Vikrantha carving — a masterpiece of South Asian art</li>
  <li>Nepal's oldest stone inscription (464 CE) of King Manadeva</li>
  <li>Gilded peacock window, Garuda statue, and golden double-roofed pagoda</li>
  <li>Hilltop setting with views over the Bhaktapur and Kathmandu Valley</li>
</ul>`,
    district: 'Bhaktapur',
    province: 'BAGMATI',
    lat: 27.7110,
    lng: 85.4249,
    elevation: 1541,
    entryFee: 'NPR 300 (foreigners)',
    bestSeason: 'Oct–Dec, Feb–May',
    openingHours: '6:00 AM – 7:00 PM daily',
    howToGetThere: 'From Bhaktapur Durbar Square, take a local bus or taxi to Changu Narayan village (8 km, 20 min). From Kathmandu it\'s about 20 km; take bus to Bhaktapur then local transport. A scenic 3-hr trek from Nagarkot also reaches the temple.',
    gygQuery: 'Changu Narayan Temple Bhaktapur tour',
    bookingCity: 'Kathmandu',
    seoTitle: "Changu Narayan Temple — Nepal's Oldest Temple & UNESCO Heritage Site",
    seoDescription: "Visit Changu Narayan Temple in Bhaktapur — Nepal's oldest temple (4th century CE), a UNESCO World Heritage Site with priceless Licchavi stone sculptures and a 464 CE inscription.",
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Budhanilkantha Temple',
    category: 'TEMPLE',
    summary: 'Budhanilkantha Temple houses one of Nepal\'s most extraordinary religious images — a 5-metre reclining Vishnu carved from a single black stone, lying in a recessed pool fed by natural springs at the northern foot of the Shivapuri Hills. Dating to the Licchavi period (7th–8th century CE), the statue is one of the largest stone sculptures in Nepal and a major pilgrimage site for Vaishnavite Hindus.',
    story: `<p>Budhanilkantha Temple, located 8 kilometres north of Kathmandu at the foot of the Shivapuri Hills, shelters one of Nepal's most breathtaking religious sculptures. The 5-metre reclining Vishnu — known as the Jalashayana Narayan (Vishnu sleeping on the cosmic ocean) — is carved from a single block of black basalt stone brought from a quarry in the Terai. Lying in a recessed water tank fed by natural springs, the statue depicts Vishnu in cosmic repose on the coils of the serpent Ananta, with 11 heads of the serpent forming a canopy over his head. It is believed to date to the 7th or 8th century CE, making it one of Nepal's oldest surviving sculptures.</p>
<p>A notable tradition surrounding the temple is that the King of Nepal is forbidden from visiting it. According to a divine proclamation, if the king were to look upon the sleeping Vishnu, he would die — since the king himself is considered an incarnation of Vishnu, it would be akin to the god beholding his own image. This prohibition has been observed by Nepalese kings for centuries. Non-Hindu visitors may view the statue from the surrounding walkway but cannot enter the inner sanctum.</p>
<h3>Highlights</h3>
<ul>
  <li>5-metre reclining Vishnu carved from a single black basalt stone (7th–8th century CE)</li>
  <li>Lying in a natural spring-fed pool — the Jalashayana Narayan pose</li>
  <li>One of Nepal's oldest and largest stone sculptures</li>
  <li>Kings of Nepal traditionally forbidden from visiting</li>
  <li>Daily morning puja and festival celebrations for Haribodini Ekadashi</li>
  <li>Peaceful forest setting at the foot of Shivapuri Nagarjun National Park</li>
</ul>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.7717,
    lng: 85.3614,
    elevation: 1370,
    entryFee: 'Free (non-Hindus view from walkway)',
    bestSeason: 'Oct–Dec, Feb–May',
    openingHours: '4:00 AM – 9:00 PM daily',
    howToGetThere: 'Located 8 km north of central Kathmandu on the Budhanilkantha road. Take a local bus from Ratna Park towards Budhanilkantha (30–40 min) or taxi from Thamel (20 min).',
    gygQuery: 'Budhanilkantha sleeping Vishnu Kathmandu',
    bookingCity: 'Kathmandu',
    seoTitle: "Budhanilkantha Temple — Nepal's Reclining Vishnu in a Sacred Spring Pool",
    seoDescription: 'Discover Budhanilkantha Temple in Kathmandu — a 5-metre reclining Vishnu carved from a single black stone, lying in a spring-fed pool at the foot of Shivapuri Hills. Licchavi era, free entry.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Dakshinkali Temple',
    category: 'TEMPLE',
    summary: 'Dakshinkali Temple is one of Nepal\'s most powerful goddess temples, dedicated to Kali in her most fierce form, situated in a dramatic forested gorge at the confluence of two streams 22 km south of Kathmandu. The temple is famous for animal sacrifice rituals performed on Tuesdays and Saturdays, drawing thousands of Hindu devotees seeking the goddess\'s blessings for protection and good fortune.',
    story: `<p>Dakshinkali Temple occupies a remote and atmospherically powerful site at the confluence of the Bagmati and Balkhu rivers in Pharping VDC, approximately 22 kilometres south of Kathmandu. The temple is dedicated to Kali — the fierce black goddess of time, death, and transformation — in her most formidable aspect. The inner sanctum is carved into a natural rock at the base of a steep hillside, and the idol of Kali faces south (dakshina = south), which is associated with the direction of death in Hindu cosmology, hence the name Dakshinkali.</p>
<p>The temple is best known for the animal sacrifice rituals performed every Tuesday and Saturday, when hundreds of devotees bring goats, chickens, and buffaloes to be sacrificed in the goddess's honour. The blood offerings are believed to earn Kali's protection, removal of illness, and fulfillment of wishes. While the ritual is not for the faint-hearted, it is a profound expression of Nepal's living tantric Hindu tradition, and the communal meal prepared from the sacrificed animals creates a festive atmosphere around the temple.</p>
<h3>Highlights</h3>
<ul>
  <li>One of Nepal's most powerful Kali shrines in a dramatic forested gorge</li>
  <li>Animal sacrifice rituals every Tuesday and Saturday</li>
  <li>South-facing Kali idol carved into natural rock</li>
  <li>Thousands of devotees on auspicious festival days</li>
  <li>Scenic drive through Pharping valley near Chobar and Kirtipur</li>
  <li>Adjacent picnic area and forested walking trails</li>
</ul>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.6180,
    lng: 85.2703,
    elevation: 1550,
    entryFee: 'Free',
    bestSeason: 'Oct–Apr (Tuesdays and Saturdays most active)',
    openingHours: '4:00 AM – 7:00 PM (Tue & Sat from 4 AM)',
    howToGetThere: 'From Kathmandu, take a local bus from Ratna Park to Dakshinkali (1 hr, 22 km) or taxi (35–40 min). Alternatively hire a taxi for a half-day tour combined with Pharping, Asura Cave, and Chobar.',
    gygQuery: 'Dakshinkali Temple Kathmandu day tour',
    bookingCity: 'Kathmandu',
    seoTitle: 'Dakshinkali Temple — Nepal\'s Most Powerful Kali Shrine South of Kathmandu',
    seoDescription: "Visit Dakshinkali Temple 22 km south of Kathmandu — Nepal's famous Kali goddess shrine in a forested gorge known for animal sacrifice rituals every Tuesday and Saturday.",
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Kirtipur',
    category: 'CULTURAL_VILLAGE',
    summary: 'Kirtipur is one of the best-preserved medieval Newari hilltop towns in the Kathmandu Valley — an independent city-state that famously resisted Prithvi Narayan Shah\'s conquest three times before finally falling in 1767. Today its stone-paved lanes, ancient temples, carved wood architecture, and panoramic views of the Kathmandu Valley make it one of the most rewarding off-the-beaten-path destinations near the capital.',
    story: `<p>Kirtipur sits on a twin-hilltop ridge 5 kilometres southwest of central Kathmandu, rising above the valley floor at approximately 1,395 metres. It was one of the three Malla kingdoms of the Kathmandu Valley alongside Kathmandu and Lalitpur, and its hilltop fortifications made it the last stronghold to resist Prithvi Narayan Shah's unification campaign. The city fell in 1767 after a prolonged siege — historical accounts record that Prithvi Narayan Shah ordered the noses and lips cut off of all male residents as punishment for their stubborn resistance, a traumatic event still remembered in Kirtipur's cultural identity.</p>
<p>Walking through Kirtipur today reveals an extraordinary density of traditional Newari architecture. The Chilancho Stupa (one of Nepal's oldest Buddhist stupas), the Uma Maheshwor Temple, the Bagh Bhairav Temple, and numerous courtyard shrines punctuate the stone-paved streets. The town's two hilltops are connected by a brick-paved path lined with ancient temples, and the views from the ridge sweep across the entire Kathmandu Valley including the Himalayan panorama to the north.</p>
<h3>Highlights</h3>
<ul>
  <li>Best-preserved medieval Newari hilltop town in the Kathmandu Valley</li>
  <li>Famous for three-fold resistance to Prithvi Narayan Shah's conquest</li>
  <li>Chilancho Stupa — one of Nepal's oldest Buddhist stupas</li>
  <li>Uma Maheshwor Temple and Bagh Bhairav Temple</li>
  <li>Stone-paved lanes and traditional Newari architecture unchanged for centuries</li>
  <li>Panoramic views of the Kathmandu Valley and Himalayan ranges</li>
</ul>`,
    district: 'Kathmandu',
    province: 'BAGMATI',
    lat: 27.6769,
    lng: 85.2794,
    elevation: 1395,
    entryFee: 'Free',
    bestSeason: 'Oct–May',
    openingHours: 'Town accessible 24/7; temples 6 AM–7 PM',
    howToGetThere: 'Take a local bus from Ratna Park or New Bus Park towards Kirtipur (30–40 min, 5 km from central Kathmandu). Micro-buses and tempo also run frequently. Easily combined with a Chobar/Taudaha Lake visit.',
    gygQuery: 'Kirtipur Newari town Kathmandu walking tour',
    bookingCity: 'Kathmandu',
    seoTitle: 'Kirtipur — Nepal\'s Historic Hilltop Newari Town Near Kathmandu',
    seoDescription: 'Explore Kirtipur — a beautifully preserved medieval Newari hilltop town 5 km from Kathmandu, famous for its resistance to conquest, ancient temples, and sweeping Himalayan views.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Nuwakot Durbar',
    category: 'DURBAR_PALACE',
    summary: 'Nuwakot Durbar is a seven-storied palace-fortress of Prithvi Narayan Shah in Nuwakot district, built as the strategic military headquarters for the unification of Nepal in the 18th century. The imposing tower stands above the confluence of the Trishuli and Likhu rivers, and the complex includes temples, battlements, and historic buildings that document the birth of modern Nepal.',
    story: `<p>Nuwakot Durbar is a seven-storey fortress-palace located in the town of Nuwakot, approximately 75 kilometres northwest of Kathmandu in the Trishuli river valley. Built by King Prithvi Narayan Shah in the early 18th century, it served as the primary military headquarters during his campaign to unify the many kingdoms of Nepal under a single rule. The palace stands on a hilltop commanding views of the Trishuli River confluence and the surrounding hills, and its strategic position made it an ideal base for the decades-long unification campaign.</p>
<p>The palace complex consists of the Saat Tale Durbar (Seven-Storey Palace), the Bhairav Temple, the Taleju Bhawani Temple, battlements, and associated royal structures. The seven-storey tower is particularly impressive for its scale and state of preservation, with wooden latticed windows on each floor and traditional Newari craftsmanship throughout. The Taleju Bhawani Temple, an important royal goddess shrine similar to those in the Kathmandu Valley Durbar Squares, underscores Nuwakot's importance as a functioning royal capital.</p>
<h3>Highlights</h3>
<ul>
  <li>Seven-storey palace-fortress of Prithvi Narayan Shah (18th century)</li>
  <li>Strategic headquarters for Nepal's unification campaign</li>
  <li>Taleju Bhawani Temple — royal goddess shrine with Newari craftsmanship</li>
  <li>Commanding hilltop views over the Trishuli River confluence</li>
  <li>Well-preserved complex documenting the birth of modern Nepal</li>
  <li>Scenic drive through the Trishuli valley from Kathmandu</li>
</ul>`,
    district: 'Nuwakot',
    province: 'BAGMATI',
    lat: 27.9888,
    lng: 85.1550,
    elevation: 1128,
    entryFee: 'NPR 200 (foreigners)',
    bestSeason: 'Oct–May',
    openingHours: '9:00 AM – 5:00 PM (closed Tuesdays)',
    howToGetThere: 'Drive from Kathmandu via Trishuli highway (75 km, 2–2.5 hrs). Regular buses from Kathmandu\'s Machha Pokhari bus station to Bidur/Nuwakot (3 hrs). A taxi or private car is recommended for flexibility.',
    gygQuery: 'Nuwakot palace heritage tour Nepal',
    bookingCity: 'Kathmandu',
    seoTitle: "Nuwakot Durbar — Prithvi Narayan Shah's Seven-Storey Fortress Palace",
    seoDescription: "Visit Nuwakot Durbar — the seven-storey fortress-palace built by Prithvi Narayan Shah as Nepal's unification headquarters. A UNESCO tentative heritage site 75 km from Kathmandu.",
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Manakamana Temple',
    category: 'TEMPLE',
    summary: 'Manakamana Temple is one of Nepal\'s most visited Hindu pilgrimage sites, perched at 1,302 m on a ridge in Gorkha district. Dedicated to the wish-fulfilling goddess Bhagwati, it is reached by Nepal\'s first cable car — a 10-minute gondola ride over the dramatic Marsyangdi river gorge — and draws millions of devotees annually who believe the goddess grants wishes.',
    story: `<p>Manakamana Temple sits on a forested ridge at 1,302 metres above sea level in Gorkha district, overlooking the deep gorge of the Marsyangdi River and commanding views of the Himalayan ranges to the north including Manaslu, Baudha, and Himalchuli. Dedicated to Bhagwati — the goddess Parvati in her wish-fulfilling form (Mana = wish, Kamana = desire) — the temple is one of Nepal's most beloved and widely visited pilgrimage sites. The goddess is particularly associated with the granting of wishes for children, prosperity, and protection.</p>
<p>The cable car from Kurintar (on the Prithvi Highway) makes Manakamana one of Nepal's most accessible high-altitude temples, turning what was once a gruelling 3-hour climb into a breathtaking 10-minute gondola ride over the Marsyangdi gorge. The cable car was built by Swiss engineering firm Doppelmayr and inaugurated in 1998 — the first in Nepal. The cable car ride itself, with its vertiginous views of the gorge and the Himalayan panorama, has become an attraction in its own right.</p>
<h3>Highlights</h3>
<ul>
  <li>One of Nepal's most popular pilgrimage sites for the wish-fulfilling goddess Bhagwati</li>
  <li>Nepal's first cable car — a breathtaking 10-min gondola over the Marsyangdi gorge</li>
  <li>Panoramic views of Manaslu, Baudha, Himalchuli, and surrounding ranges</li>
  <li>Major festivals: Navaratri (Oct), Chaitra Dashain (Mar–Apr)</li>
  <li>Traditional animal sacrifices and red cloth offerings by devotees</li>
  <li>Conveniently located on the Kathmandu–Pokhara Prithvi Highway</li>
</ul>`,
    district: 'Gorkha',
    province: 'GANDAKI',
    lat: 28.0522,
    lng: 84.6870,
    elevation: 1302,
    entryFee: 'Cable car: NPR 1,070 (return, foreigners)',
    bestSeason: 'Oct–Dec, Feb–May',
    openingHours: 'Cable car 9:00 AM – 5:00 PM daily; temple 5 AM – 7 PM',
    howToGetThere: 'Drive from Kathmandu to Kurintar on the Prithvi Highway (95 km, ~2 hrs). The cable car lower station is at Kurintar; take the gondola to Manakamana village. Alternatively direct tourist buses from Kathmandu stop at Kurintar.',
    gygQuery: 'Manakamana Temple cable car Gorkha',
    bookingCity: 'Pokhara',
    seoTitle: 'Manakamana Temple — Nepal\'s Wish-Fulfilling Goddess & First Cable Car',
    seoDescription: 'Visit Manakamana Temple in Gorkha — one of Nepal\'s most beloved pilgrimage sites for the wish-fulfilling goddess Bhagwati, reached by Nepal\'s first cable car over the Marsyangdi gorge.',
    published: true,
    featured: true,
    publishedAt: new Date(),
  },
  {
    name: 'Phulchoki Hill',
    category: 'HILL_VIEWPOINT',
    summary: 'Phulchoki is the highest point on the rim of the Kathmandu Valley at 2,762 m, offering spectacular panoramic views of the entire valley floor and the Himalayan arc from Dhaulagiri to Kanchenjunga. The hill is also a premier birdwatching site with over 260 bird species recorded, and its forests of rhododendron, oak, and bamboo are spectacular in spring when the hillsides blaze with blossom.',
    story: `<p>Phulchoki — meaning "place of flowers" in Nepali — rises to 2,762 metres at the southern rim of the Kathmandu Valley in Lalitpur district, making it the highest point on the valley's encircling hills. From its summit, the entire bowl of the Kathmandu Valley spreads out below, with the rooftops, stupas, and temples of Kathmandu, Patan, and Bhaktapur visible on clear days. The Himalayan panorama to the north is extraordinary — on a clear autumn or winter morning, the full arc from Dhaulagiri in the west to Kanchenjunga in the east can be seen, with Everest, Lhotse, and the Annapurna and Langtang ranges filling the horizon.</p>
<p>For birdwatchers, Phulchoki is one of Nepal's finest sites, with over 260 species recorded including the rare spiny babbler (Nepal's only endemic bird), various pheasants, flycatchers, laughingthrushes, and raptors. The forests of oak, rhododendron, bamboo, and alder change dramatically with the seasons — from the pink-and-red rhododendron blaze of March–April to the lush green monsoon forest and the golden autumn colours of October–November. A small Phulchoki Mai temple at the summit is the focus of an annual pilgrimage.</p>
<h3>Highlights</h3>
<ul>
  <li>Highest point on the Kathmandu Valley rim at 2,762 m</li>
  <li>360° panorama: full Himalayan arc from Dhaulagiri to Kanchenjunga</li>
  <li>Over 260 bird species — one of Nepal's top birdwatching sites</li>
  <li>Nepal's only endemic bird: the spiny babbler found here</li>
  <li>Spectacular rhododendron forests blazing pink and red in March–April</li>
  <li>Phulchoki Mai temple at summit — annual pilgrimage destination</li>
</ul>`,
    district: 'Lalitpur',
    province: 'BAGMATI',
    lat: 27.5944,
    lng: 85.3800,
    elevation: 2762,
    entryFee: 'Free',
    bestSeason: 'Oct–Dec, Mar–May',
    openingHours: 'Open year-round (road open 6 AM – 6 PM)',
    howToGetThere: 'Drive from Patan (Godavari road) to Phulchoki — about 15 km south of Kathmandu. A paved road goes most of the way to the summit (4WD recommended). Can also be hiked from Godavari (3–4 hrs up).',
    gygQuery: 'Phulchoki birdwatching Kathmandu Valley',
    bookingCity: 'Kathmandu',
    seoTitle: 'Phulchoki Hill — Highest Kathmandu Valley Viewpoint & Birdwatching Site',
    seoDescription: 'Hike or drive to Phulchoki Hill (2,762 m) — the highest point on the Kathmandu Valley rim with panoramic Himalayan views, 260+ bird species, and spring rhododendron forests.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Palanchowk Bhagawati Temple',
    category: 'TEMPLE',
    summary: 'Palanchowk Bhagawati is one of Nepal\'s most revered shakti pitha goddess temples, perched on a hilltop above the Indrawati River in Kavrepalanchok district. The goddess Bhagawati here is said to be one of 64 manifestations of the mother goddess, and the temple draws enormous crowds during Navaratri festival and is particularly venerated for its powers of wish fulfillment.',
    story: `<p>Palanchowk Bhagawati Temple stands on a steep forested hilltop above the Indrawati River in Kavrepalanchok district, approximately 50 kilometres east of Kathmandu. The temple is one of the most important shakti pithas (sacred seats of the goddess) in Nepal, dedicated to a powerful form of the mother goddess Bhagawati whose presence at this spot is believed to date to the Licchavi period. The Indrawati river valley below and the surrounding hills create a dramatically beautiful setting for the temple complex.</p>
<p>The temple is especially active during the Navaratri festival season (October and April), when hundreds of thousands of pilgrims make the steep climb up the stone steps to the hilltop shrine. Animal sacrifices, particularly of goats and buffalo, are made to the goddess on these occasions. The temple is also visited by devotees seeking the goddess's blessing for newly married couples, newborn children, and those facing serious illness. A large annual fair (mela) takes place on the Indrawati riverbank below the temple during major festivals.</p>
<h3>Highlights</h3>
<ul>
  <li>One of Nepal's most powerful shakti pitha goddess temples</li>
  <li>Dramatic hilltop setting above the Indrawati River gorge</li>
  <li>Hundreds of thousands of pilgrims during Navaratri festival</li>
  <li>Annual river fair (mela) on the Indrawati below the temple</li>
  <li>Traditional stone staircase climb with prayer flags and offerings</li>
  <li>Combined easily with Dhulikhel and Namo Buddha on an eastern valley day trip</li>
</ul>`,
    district: 'Kavrepalanchok',
    province: 'BAGMATI',
    lat: 27.6519,
    lng: 85.6008,
    elevation: 1180,
    entryFee: 'Free',
    bestSeason: 'Oct–Apr (Navaratri season most vibrant)',
    openingHours: '5:00 AM – 7:00 PM daily',
    howToGetThere: 'Drive from Kathmandu on the Arniko Highway to Palanchowk (50 km, 1.5 hrs). Turn off at Dolalghat bridge and follow signs to Palanchowk Bhagawati. Local buses from Ratna Park to Banepa then Dolalghat available.',
    gygQuery: 'Palanchowk temple Kavrepalanchok Nepal',
    bookingCity: 'Kathmandu',
    seoTitle: 'Palanchowk Bhagawati Temple — Shakti Pitha Goddess Shrine in Kavrepalanchok',
    seoDescription: 'Visit Palanchowk Bhagawati Temple in Kavrepalanchok — one of Nepal\'s most powerful shakti pitha goddess shrines above the Indrawati River, 50 km from Kathmandu. Major pilgrimage site.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Khumbu Icefall',
    category: 'MOUNTAIN_VIEW',
    summary: 'The Khumbu Icefall is one of the world\'s most dramatic and dangerous glacial features — a chaotic, ever-moving river of seracs, crevasses, and towering ice blocks that forms the first major obstacle on the South Col route to the summit of Mount Everest. Visible from Everest Base Camp and Gorak Shep, the icefall\'s scale and raw power make it one of the most awe-inspiring natural spectacles on Earth.',
    story: `<p>The Khumbu Icefall forms where the Khumbu Glacier begins its descent from the Western Cwm — a hanging valley at approximately 6,100 metres — down towards Everest Base Camp at 5,364 metres. The glacier drops roughly 600 metres over a 2-kilometre stretch, creating an extremely broken, unstable field of ice towers (seracs), deep crevasses, and ice bridges that can collapse without warning. For Everest climbers, the icefall must be traversed multiple times during acclimatization rotations, and it is statistically the most dangerous section of the South Col route — responsible for a disproportionate share of Everest fatalities.</p>
<p>From Everest Base Camp, trekkers can witness the icefall at close range — listening to its deep groans and cracking sounds as thousands of tonnes of ice creep downward several metres each day. The Icefall Doctors, a team of Sherpa specialists, fix the route through the icefall each pre-season with aluminum ladders and ropes, creating a passable if precarious path for climbing teams. The spectacle of headlamps dotting the icefall before dawn — as climbing teams make their 3 AM crossings to beat the sun's warming effect — is one of the iconic images of high-altitude mountaineering.</p>
<h3>Highlights</h3>
<ul>
  <li>One of the world's most dramatic glacial features — visible from EBC</li>
  <li>First major obstacle on the South Col route to Everest's summit</li>
  <li>Towering seracs, deep crevasses, and constantly shifting ice terrain</li>
  <li>Icefall Doctors fix ladders and ropes each pre-season</li>
  <li>Pre-dawn headlamp processions of climbing teams — an iconic mountaineering image</li>
  <li>Audible groans and ice-cracking sounds from the living glacier</li>
</ul>`,
    district: 'Solukhumbu',
    province: 'KOSHI',
    lat: 27.9759,
    lng: 86.8598,
    elevation: 5486,
    entryFee: 'Included in Sagarmatha National Park permit (NPR 3,000 foreigners)',
    bestSeason: 'Mar–May, Sep–Nov',
    openingHours: 'Accessible as part of EBC trek',
    howToGetThere: 'Fly Kathmandu–Lukla (35 min) then trek 8 days to Everest Base Camp via Namche Bazaar, Tengboche, Dingboche, and Gorak Shep. The icefall is visible and audible from EBC.',
    trekDays: 14,
    trekDifficulty: 'HARD',
    trekMaxElevation: 5550,
    trekDistance: 130,
    trekStartPoint: 'Lukla (2,860 m)',
    trekEndPoint: 'Everest Base Camp (5,364 m)',
    trekHighlights: ['Khumbu Icefall views from EBC', 'Kala Patthar sunrise (5,643 m)', 'Namche Bazaar Sherpa capital', 'Tengboche Monastery with Everest backdrop', 'Gokyo Lakes extension possible'],
    gygQuery: 'Everest Base Camp trek Khumbu',
    bookingCity: 'Kathmandu',
    seoTitle: 'Khumbu Icefall — The Most Dramatic Glacier on the Everest Trek Route',
    seoDescription: 'Witness the Khumbu Icefall on the Everest Base Camp Trek — a chaotic river of seracs and crevasses at 5,486 m, the most awe-inspiring and dangerous feature on the world\'s highest mountain.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Lukla Airport',
    category: 'CULTURAL_VILLAGE',
    summary: 'Tenzing-Hillary Airport at Lukla is the world\'s most thrilling airport and the gateway to the Everest region, perched on a cliff edge at 2,860 m in the Solukhumbu district. Its 527-metre runway ending in a sheer drop — and beginning at a cliff face — makes every landing and takeoff a truly memorable experience, and the airport processes thousands of trekkers each year en route to Everest Base Camp.',
    story: `<p>Tenzing-Hillary Airport in Lukla — named in honour of Sir Edmund Hillary and Tenzing Norgay Sherpa — was built by Hillary himself in 1964 to serve the growing Everest trekking industry and facilitate development in the Khumbu region. The airport sits at 2,860 metres on a shelf cut into a steep hillside, with a 527-metre runway that slopes upward at a 12-degree gradient from south to north. Planes land uphill and take off downhill toward a sheer 600-metre cliff drop — making it consistently rated among the world's most dangerous and thrilling airports.</p>
<p>Lukla itself is a bustling Sherpa trading village that comes alive with the trekking season. The main street is lined with teahouses, gear shops, bakeries, and internet cafés catering to the thousands of trekkers who pass through each spring and autumn season. The airport's operation depends entirely on good weather — delays and cancellations due to cloud, fog, or wind are common, and many trekkers build extra days into their Kathmandu schedule for weather contingencies. For the Sherpa community, the airport has been transformative, connecting Khumbu to the national economy and enabling rapid development.</p>
<h3>Highlights</h3>
<ul>
  <li>World's most thrilling airport with 527-metre runway on a mountain ledge</li>
  <li>Named after Tenzing Norgay and Sir Edmund Hillary</li>
  <li>Built by Hillary himself in 1964 to serve the Khumbu region</li>
  <li>Gateway to the Everest Base Camp trek and Khumbu region</li>
  <li>Bustling Sherpa village with teahouses, gear shops, and bakeries</li>
  <li>Frequent weather delays — plan buffer days in Kathmandu</li>
</ul>`,
    district: 'Solukhumbu',
    province: 'KOSHI',
    lat: 27.6869,
    lng: 86.7295,
    elevation: 2860,
    entryFee: 'Free (airport; flight ticket required)',
    bestSeason: 'Mar–May, Oct–Nov',
    openingHours: 'Flights operate dawn to dusk (weather permitting)',
    howToGetThere: 'Daily Twin Otter and helicopter flights from Kathmandu (Tribhuvan Airport) to Lukla. Flight time 35–40 min. Book well in advance for spring (Mar–May) and autumn (Oct–Nov) peak seasons.',
    gygQuery: 'Lukla flight Everest trek Nepal',
    bookingCity: 'Kathmandu',
    seoTitle: "Lukla Airport (Tenzing-Hillary) — Gateway to Everest & World's Thrilling Airport",
    seoDescription: "Fly into Lukla's Tenzing-Hillary Airport — the world's most thrilling airport at 2,860 m with a 527-metre runway on a cliff edge, the gateway to the Everest Base Camp trek.",
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Dingboche',
    category: 'MOUNTAIN_VIEW',
    summary: 'Dingboche is a high-altitude acclimatization village at 4,410 m on the Everest Base Camp trek route, offering some of the finest mountain views in Nepal with Ama Dablam (6,812 m) dominating the skyline and direct views to the Lhotse face and Island Peak. The village\'s stone walls and terraced barley fields surrounded by snowcapped giants create one of the most iconic high-altitude Himalayan landscapes.',
    story: `<p>Dingboche sits at 4,410 metres in the Imja Khola valley, a side valley branching east from the main Khumbu valley below Lobuche. It is one of the most beautiful acclimatization stops on the Everest Base Camp trek, where trekkers typically spend two nights to allow their bodies to adjust to the altitude before ascending to Lobuche and Gorak Shep. The village consists of stone teahouses, lodges, and agricultural plots surrounded by some of the most dramatic mountain scenery anywhere on Earth.</p>
<p>From Dingboche, the views are extraordinarily intimate. Ama Dablam — perhaps the world's most perfectly proportioned mountain — towers directly to the south, its graceful ridgelines and hanging glacier visible in breathtaking detail. To the east, the jagged ridge of Island Peak (Imja Tse, 6,189 m) provides a popular trekking peak option, while the massive south face of Lhotse fills the horizon to the north. The acclimatization day hike to Nangkartshang Peak (5,100 m) above Dingboche provides a challenging half-day outing and panoramic views extending to Makalu.</p>
<h3>Highlights</h3>
<ul>
  <li>Spectacular close-up views of Ama Dablam (6,812 m) — the most beautiful mountain in Khumbu</li>
  <li>Acclimatization base for Island Peak (6,189 m) climbers</li>
  <li>Day hike to Nangkartshang Peak (5,100 m) for acclimatization</li>
  <li>Views of Lhotse south face, Makalu, and Island Peak</li>
  <li>Traditional stone-walled Sherpa barley fields at high altitude</li>
  <li>Key overnight stop on both the EBC and Island Peak routes</li>
</ul>`,
    district: 'Solukhumbu',
    province: 'KOSHI',
    lat: 27.8959,
    lng: 86.8310,
    elevation: 4410,
    entryFee: 'Included in Sagarmatha National Park permit',
    bestSeason: 'Mar–May, Sep–Nov',
    openingHours: 'Accessible as part of EBC trek',
    howToGetThere: 'Fly Kathmandu–Lukla then trek 6 days via Namche Bazaar, Tengboche, and Pangboche. Dingboche is a further 2 hrs above Pangboche in the Imja Khola side valley.',
    gygQuery: 'Everest Base Camp trek Dingboche acclimatization',
    bookingCity: 'Kathmandu',
    seoTitle: 'Dingboche — High-Altitude Village with Ama Dablam Views on the EBC Trek',
    seoDescription: 'Stay in Dingboche at 4,410 m on the Everest Base Camp trek — a stunning acclimatization village with close-up views of Ama Dablam, Lhotse, and Island Peak in the Solukhumbu.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Gorak Shep',
    category: 'MOUNTAIN_VIEW',
    summary: 'Gorak Shep is the last inhabited settlement before Everest Base Camp at 5,164 m — the highest-altitude overnight stop on the classic EBC trek route, serving as the launch point for both the Base Camp walk and the iconic Kala Patthar sunrise viewpoint at 5,643 m.',
    story: `<p>Gorak Shep is a cluster of stone teahouses and lodges at 5,164 metres, situated on a dry lake bed just below the Khumbu Glacier. It is the highest-altitude overnight settlement accessible to trekkers on the Everest Base Camp route, and most EBC trekkers spend two nights here — one to visit Everest Base Camp in the afternoon, and one early start the following morning to summit Kala Patthar before dawn and witness the most famous Himalayan sunrise view on Earth.</p>
<p>At 5,164 metres, Gorak Shep sits above a significant portion of Earth's atmosphere, and altitude sickness is a real concern for many trekkers at this elevation. The settlements receive some of the most extreme weather in the trekking world — temperatures can drop to -25°C at night even in the trekking seasons, and wind is fierce. The teahouses are basic but the views from every window are extraordinary: the Khumbu Glacier flows past on one side, Pumori (7,161 m) and Changtse (7,583 m) rise to the north, and the summit pyramid of Everest is visible to the northeast on clear days.</p>
<h3>Highlights</h3>
<ul>
  <li>Highest overnight settlement on the EBC trek at 5,164 m</li>
  <li>Launch point for Everest Base Camp (3 km, 1.5 hrs return)</li>
  <li>Launch point for Kala Patthar sunrise viewpoint (5,643 m)</li>
  <li>Close-up views of Pumori, Changtse, and the Khumbu Glacier</li>
  <li>Everest summit pyramid visible to the northeast</li>
  <li>Most extreme conditions of any overnight stop on the EBC route</li>
</ul>`,
    district: 'Solukhumbu',
    province: 'KOSHI',
    lat: 28.0008,
    lng: 86.8319,
    elevation: 5164,
    entryFee: 'Included in Sagarmatha National Park permit',
    bestSeason: 'Mar–May, Sep–Nov',
    openingHours: 'Accessible as part of EBC trek',
    howToGetThere: 'Fly Kathmandu–Lukla, trek 9–10 days via Namche, Tengboche, Dingboche, and Lobuche to reach Gorak Shep. Gorak Shep is 2.5 hrs above Lobuche on the Khumbu Glacier moraine.',
    trekDays: 14,
    trekDifficulty: 'HARD',
    trekMaxElevation: 5643,
    trekDistance: 130,
    trekStartPoint: 'Lukla (2,860 m)',
    trekEndPoint: 'Gorak Shep / Kala Patthar (5,643 m)',
    trekHighlights: ['Kala Patthar sunrise with Everest views (5,643 m)', 'Everest Base Camp at 5,364 m', 'Khumbu Glacier and Icefall', 'Pumori north face views', 'Extreme altitude experience above 5,000 m'],
    gygQuery: 'Everest Base Camp Gorak Shep trek',
    bookingCity: 'Kathmandu',
    seoTitle: 'Gorak Shep — The Last Stop Before Everest Base Camp at 5,164 m',
    seoDescription: 'Stay at Gorak Shep (5,164 m) — the final overnight stop before Everest Base Camp, launch point for Kala Patthar sunrise and the highest teahouses in the Khumbu on the EBC trek.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Shree Antu',
    category: 'HILL_VIEWPOINT',
    summary: 'Shree Antu (Antu Danda) is a superb sunrise viewpoint in Ilam district at 2,328 m offering one of the finest views of the Kanchenjunga massif in Nepal, combined with the rolling green tea gardens of Ilam stretching below — one of eastern Nepal\'s most beautiful and least-visited viewpoints.',
    story: `<p>Shree Antu, also known as Antu Danda ("Antu Hill"), rises to 2,328 metres in the eastern reaches of Ilam district, very close to the Indian border with Sikkim. The hilltop has been developed as a modest eco-resort and viewpoint offering one of Nepal's finest sunrise panoramas. The view sweeps from the Kanchenjunga massif (8,586 m) — the world's third-highest mountain — across the entire Himalayan arc of eastern Nepal including Makalu, Chamlang, and Jannu, with the green hills of Darjeeling visible in the distance on clear days.</p>
<p>The approach to Shree Antu passes through some of Ilam's most beautiful tea country. The rolling hills blanketed in tea gardens, punctuated by the rounded shapes of shade trees, create an almost dreamlike green landscape entirely unlike the dramatic grey-and-white Himalayan terrain further north. Sunrise at Antu Danda, when the first golden light strikes the Kanchenjunga snowfields and the mist fills the valleys below, is considered one of eastern Nepal's most beautiful natural spectacles and a well-kept secret compared to the busier viewpoints of Nagarkot or Sarangkot.</p>
<h3>Highlights</h3>
<ul>
  <li>One of Nepal's finest Kanchenjunga (8,586 m) viewpoints</li>
  <li>Panoramic eastern Himalayan sunrise vista at 2,328 m</li>
  <li>Views extend to Darjeeling and the hills of Sikkim/India</li>
  <li>Set amid Ilam's rolling tea garden landscape</li>
  <li>Eco-resort and overnight lodge available at the summit</li>
  <li>Off-the-beaten-path destination away from the tourist mainstream</li>
</ul>`,
    district: 'Ilam',
    province: 'KOSHI',
    lat: 26.9841,
    lng: 88.0186,
    elevation: 2328,
    entryFee: 'Free (resort accommodation available separately)',
    bestSeason: 'Oct–Dec, Feb–May',
    openingHours: 'Open year-round (best for sunrise)',
    howToGetThere: 'Drive from Ilam Bazaar (25 km, 1 hr on rough road) or from Phikkal. From Kathmandu, fly or bus to Bhadrapur/Birtamod then drive to Ilam (2 hrs) then to Antu. Jeep hire recommended from Ilam Bazaar.',
    gygQuery: 'Ilam tea gardens Kanchenjunga view eastern Nepal',
    bookingCity: 'Kathmandu',
    seoTitle: 'Shree Antu (Antu Danda) — Kanchenjunga Sunrise Viewpoint in Ilam Tea Country',
    seoDescription: 'Visit Shree Antu (2,328 m) in Ilam — one of Nepal\'s finest sunrise viewpoints with panoramic Kanchenjunga and eastern Himalaya views above the beautiful tea garden country of Ilam.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
  {
    name: 'Tatopani Hot Springs Mustang',
    category: 'HOT_SPRING',
    summary: 'The Tatopani hot springs on the Annapurna Circuit in Myagdi district are one of the most rewarding stops on Nepal\'s most famous trekking route — natural geothermal pools at 1,189 m on the banks of the Kali Gandaki River where weary trekkers soak their aching muscles after days at high altitude. The name Tatopani simply means "hot water" in Nepali.',
    story: `<p>Tatopani village sits in the deep Kali Gandaki gorge at 1,189 metres, near the southern end of the Annapurna Circuit trek route. The village has welcomed trekkers since the early days of Himalayan tourism, and its natural hot spring pools fed by geothermal activity beneath the riverbed have been a beloved resting point for generations of trekkers descending from the high passes of the Annapurna Circuit. The pools are positioned right beside the Kali Gandaki River, creating an atmospheric setting where trekkers soak in steaming mineral water while listening to the rush of the glacial river.</p>
<p>The springs produce water at approximately 58°C which is channelled into bathing pools at a more comfortable temperature. After days or weeks at altitude — crossing the Thorong La pass at 5,416 metres, enduring cold nights in Manang or Muktinath, and carrying heavy packs over rough terrain — the therapeutic effect of the hot springs is profound. The village itself has good lodge and restaurant infrastructure catering to the Annapurna Circuit crowd, and orange trees in the garden of many lodges provide fresh fruit after weeks on trail food. The old Annapurna Circuit route through Tatopani has been partially rerouted due to road construction, but the springs remain a classic stop.</p>
<h3>Highlights</h3>
<ul>
  <li>Natural geothermal hot spring pools beside the Kali Gandaki River</li>
  <li>Classic rest stop on the Annapurna Circuit trek route</li>
  <li>Water at ~58°C with therapeutic mineral content</li>
  <li>Warm subtropical climate after weeks at high altitude</li>
  <li>Orange groves and fresh fruit available in village lodges</li>
  <li>Gateway to the Poon Hill and Ghorepani region to the east</li>
</ul>`,
    district: 'Myagdi',
    province: 'GANDAKI',
    lat: 28.5333,
    lng: 83.6583,
    elevation: 1189,
    entryFee: 'NPR 100–200 (pool entry)',
    bestSeason: 'Oct–Dec, Feb–May',
    openingHours: 'Pools open 6:00 AM – 8:00 PM daily',
    howToGetThere: 'From Pokhara, drive to Beni then follow the Myagdi road to Tatopani (4–5 hrs by jeep). On the Annapurna Circuit trek, Tatopani is reached after crossing Thorong La and descending through Muktinath, Jomsom, and Ghasa.',
    trekDays: 14,
    trekDifficulty: 'MODERATE',
    trekMaxElevation: 5416,
    trekDistance: 160,
    trekStartPoint: 'Besisahar (760 m)',
    trekEndPoint: 'Nayapul / Pokhara',
    trekHighlights: ['Thorong La Pass (5,416 m)', 'Muktinath Temple', 'Tatopani hot springs', 'Kali Gandaki Gorge (world\'s deepest)', 'Poon Hill sunrise'],
    gygQuery: 'Annapurna Circuit Trek Tatopani hot springs',
    bookingCity: 'Pokhara',
    seoTitle: 'Tatopani Hot Springs Mustang — Geothermal Pools on the Annapurna Circuit',
    seoDescription: 'Relax in Tatopani hot springs on the Annapurna Circuit trek — natural geothermal pools beside the Kali Gandaki River at 1,189 m, the perfect reward after crossing Thorong La.',
    published: true,
    featured: false,
    publishedAt: new Date(),
  },
]

async function main() {
  console.log(`🌱 Seeding batch 9 — ${places.length} places...`)
  for (const p of places) {
    await prisma.place.upsert({
      where: { slug: slug(p.name) },
      update: {},
      create: { ...p, slug: slug(p.name) },
    })
    console.log(`  ✅ ${p.name}`)
  }
  console.log('🌱 Batch 9 complete!')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
