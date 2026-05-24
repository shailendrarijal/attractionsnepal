/**
 * Adds 17 new places discovered via YouTube channel research.
 * Sources: @nepal8thwonder, @Ghumante, @TRAVERART, @sirjanasizzu
 *
 * Also updates relatedPlaceSlugs on relevant Story records.
 *
 * Run: node prisma/seed-youtube-places.js
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const NEW_PLACES = [
  // ── @nepal8thwonder ──────────────────────────────────────────────────────────

  {
    slug: 'bhairav-kunda-lake',
    name: 'Bhairav Kunda Lake',
    category: 'LAKE',
    district: 'Sindhupalchok',
    province: 'BAGMATI',
    lat: 28.12,
    lng: 86.01,
    elevation: 4250,
    summary:
      'Bhairav Kunda is a sacred alpine lake at 4,250 m in northern Sindhupalchok, near the Nepal–China border. Revered by Hindus and Buddhists alike and known locally as Ama Chhemen (Mother\'s Pond), it draws pilgrims each Janai Purnima for ritual bathing. Surrounded by the Rolwaling, Gaurishankar, and Jugal ranges, it remains one of Kathmandu\'s least-known high-altitude gems.',
    story: `## Bhairav Kunda Lake: The Sacred Mirror of Sindhupalchok

High in the remote northern reaches of Sindhupalchok district, tucked against the Nepal–Tibet border, Bhairav Kunda is one of the most spiritually potent and visually dramatic high-altitude lakes in the country. At 4,250 metres, the lake sits well above the treeline in a cirque of dramatic cliffs and alpine meadows, framed by the snow-covered ridges of the Rolwaling, Gaurishankar, and Jugal Himal ranges.

The lake takes its name from Bhairav, the fierce tantric manifestation of Lord Shiva who represents destruction and protection in equal measure. Local tradition holds that the divine form of Bhairav can be glimpsed in the lake\'s reflection. In the Newari tradition, the lake is also known as Ama Chhemen — the Mother\'s Pond — a name that speaks to deep-rooted reverence for nature as a maternal, life-giving force.

Each year on the full moon of Shrawan (Janai Purnima, typically August), streams of pilgrims from across Nepal make the challenging journey to Bhairav Kunda for ritual bathing in its holy waters. The belief that the lake cleanses accumulated sins and grants divine protection gives the trek an almost otherworldly atmosphere during festival season, with prayer flags, incense, and the murmur of mantras rising into the thin air.

The approach from Bagam village makes for a manageable day hike, passing through Chagam and Chokar Mokar — small Tamang settlements where the pace of life has scarcely changed for generations. Outside of pilgrimage season, the lake is eerily quiet, and trekkers who make the effort are rewarded with panoramic Himalayan vistas and a profound sense of solitude.`,
    bestSeason: 'Jun–Sep (pilgrimage), Oct–Nov (clear views)',
    howToGetThere: 'Drive to Bagam village in Sindhupalchok (~4 hrs from Kathmandu), then trek 5–6 hrs to the lake.',
    youtubeUrl: 'https://www.youtube.com/watch?v=7CbprjNrqss',
    seoTitle: 'Bhairav Kunda Lake Sindhupalchok | Sacred Alpine Lake Nepal',
    seoDescription: 'Bhairav Kunda is a sacred high-altitude lake at 4,250 m in Sindhupalchok. Known as Ama Chhemen, it draws Hindu and Buddhist pilgrims each Janai Purnima.',
    trekHighlights: ['Janai Purnima pilgrimage', 'Gaurishankar Himal views', 'Tamang villages', 'Ama Chhemen sacred lake'],
  },

  {
    slug: 'jugal-himal-base-camp',
    name: 'Jugal Himal Base Camp',
    category: 'TREK_ROUTE',
    district: 'Sindhupalchok',
    province: 'BAGMATI',
    lat: 28.08,
    lng: 85.72,
    elevation: 4500,
    trekDays: 3,
    trekDifficulty: 'MODERATE',
    trekMaxElevation: 4500,
    trekDistance: 35.0,
    trekStartPoint: 'Chautara',
    trekEndPoint: 'Chautara',
    trekHighlights: ['Dorje Lhakpa views', 'Ne-Pemachal meadow', 'Sungma Waterfall', 'Tamang & Sherpa villages'],
    summary:
      'Jugal Himal Base Camp is one of the closest Himalayan base camps to Kathmandu — 140 km northeast in Sindhupalchok at 4,500 m. The 3-day trek winds through Tamang and Sherpa villages past the sacred Sungma Waterfall to commanding views of Dorje Lhakpa, Phurbi Chyachu, and other peaks. Ideal for trekkers wanting raw, uncrowded Himalayan scenery close to Kathmandu.',
    story: `## Jugal Himal Base Camp: Kathmandu\'s Wild Backyard

With most trekkers focused on the Everest, Annapurna, or Langtang circuits, the Jugal Himal range has remained one of Nepal\'s best-kept trekking secrets. The base camp is among the most rewarding short treks available within just a few hours of Kathmandu. Lying between the Langtang region to the west and the Rolwaling Himal to the east, the Jugal range forms a formidable wall of snow and ice across the northern skyline of Sindhupalchok district.

The trek typically begins from Chautara (1,418 m), the district headquarters, and climbs through the villages of Tembathang (2,330 m) and Chendang (2,630 m), where the roar of the Sungma Waterfall greets trekkers. The trail continues through subalpine forest to Ne-Pemachal at around 3,500 metres — a meadow many consider one of the most beautiful spots in central Nepal — before reaching base camp at 4,500 metres.

At base camp, the glacier views are spectacular: Dorje Lhakpa (6,966 m), Phurbi Chyachu (6,637 m), and Gyalzen Peak (6,151 m) — the highest in the Jugal range — dominate the skyline. The solitude here is extraordinary; most days, the only sounds are wind, water, and the creak of ice.

The trek passes through primarily Sherpa-inhabited villages, offering an authentic cultural encounter away from the crowds of more commercial routes. The recently opened climbing permits for peaks in the range are beginning to attract mountaineers, but Jugal Himal remains a place where you can genuinely feel alone in the Himalaya.`,
    bestSeason: 'Oct–Nov, Mar–May',
    howToGetThere: 'Drive to Chautara (3 hrs from Kathmandu via Melamchi). Trek begins from the district headquarters.',
    youtubeUrl: 'https://www.youtube.com/watch?v=YrNLcFQu0wI',
    seoTitle: 'Jugal Himal Base Camp Trek | 3-Day Trek from Kathmandu',
    seoDescription: 'Trek to Jugal Himal Base Camp (4,500 m) in just 3 days from Kathmandu. One of Nepal\'s closest and most uncrowded base camp experiences in Sindhupalchok.',
  },

  {
    slug: 'tsho-rolpa-glacial-lake',
    name: 'Tsho Rolpa Glacial Lake',
    category: 'LAKE',
    district: 'Dolakha',
    province: 'BAGMATI',
    lat: 27.90,
    lng: 86.48,
    elevation: 4580,
    summary:
      "Tsho Rolpa is Nepal\'s largest glacial lake — a vast expanse of ice-blue water at 4,580 m in the heart of the Rolwaling Valley, Dolakha. Stretching 3.5 km in length beneath the panorama of Gaurishankar Himal (7,134 m), it lies within the Gaurishankar Conservation Area and is reached by a remote 10–12 day trek through Sherpa villages and pine forests rarely seen by tourists.",
    story: `## Tsho Rolpa: Nepal\'s Greatest Glacial Lake

Deep inside the Rolwaling Valley of Dolakha district, far from the well-worn trails of Everest and Annapurna, Tsho Rolpa sits in magnificent isolation. At 4,580 metres above sea level, this is Nepal\'s largest glacial lake — a body of strikingly turquoise water 3.5 km long, 1.6 km wide, and 132 metres deep, enclosed by the icy ramparts of the Gaurishankar Conservation Area.

The Rolwaling Valley is often called Nepal\'s forgotten Himalaya. Despite lying just west of the Khumbu region, it sees only a tiny fraction of the trekkers who flood the Everest trail. The approach from Charikot (near Dolakha) follows the Tama Koshi River deep into the mountains, passing through the Sherpa village of Beding (3,690 m) and the meadows of Na (4,183 m) before the final ascent to the lake. The route is genuinely wild — no crowded teahouse corridor, just forests, glacial streams, and huge mountain walls.

At the lake itself, the experience is humbling. Icebergs calve from the glacier at the lake\'s upper end, floating silently across the water as the faces of Gaurishankar and Chobuje reflect on the surface. Scientists have been monitoring Tsho Rolpa for decades as a glacial lake outburst flood (GLOF) risk site — a sobering reminder of how dramatically the Himalayas are changing in the era of climate change.

For trekkers willing to commit to 10–12 days, Tsho Rolpa rewards with scenery that few people on earth have witnessed firsthand — a pristine high-altitude world that feels as remote and profound as anywhere in Nepal.`,
    bestSeason: 'Oct–Nov, Mar–May',
    howToGetThere: 'Drive to Charikot (5 hrs from Kathmandu), then trek via Simigaon and Beding. The full trek takes 10–12 days return.',
    entryFee: 'Gaurishankar Conservation Area permit required (NPR 3,000 foreigners)',
    youtubeUrl: 'https://www.youtube.com/watch?v=a4Tc_VCIPW0',
    seoTitle: "Tsho Rolpa Glacial Lake | Nepal\'s Largest Glacial Lake, Dolakha",
    seoDescription: "Trek to Tsho Rolpa, Nepal\'s largest glacial lake at 4,580 m in the Rolwaling Valley, Dolakha. Remote 10-12 day journey through wilderness Sherpa country.",
    trekHighlights: ["Nepal\'s largest glacial lake", 'Gaurishankar Himal views', 'Beding Sherpa village', 'Rolwaling wilderness'],
  },

  {
    slug: 'panchakunda-lake-annapurna-north',
    name: 'Panchakunda Lake (Annapurna North)',
    category: 'LAKE',
    district: 'Myagdi',
    province: 'GANDAKI',
    lat: 28.73,
    lng: 83.67,
    elevation: 4060,
    summary:
      'Panchakunda Lake sits at 4,060 m on the remote northern approach to Annapurna I in Myagdi district. Revered by Hindu and Buddhist pilgrims and set near a Shiva temple, the turquoise lake is reached by a full camping trek through Magar and Gurung villages with no teahouses. A true wilderness experience beneath the unforgiving north face of the world\'s tenth-highest mountain.',
    story: `## Panchakunda Lake: The Wild North Face of Annapurna

Most trekkers know Annapurna from the south — the gentle walk through rhododendron forests to the crowded teahouse circuit ending at Base Camp. But there is another Annapurna, approached from the north through the remote valleys of Myagdi district, where the mountain reveals a completely different face: raw, vertical, and overwhelmingly powerful.

The journey begins from Narchyang village (1,340 m), a six-hour drive from Pokhara, and immediately enters a world of total wilderness. The trail climbs through dense bamboo and rhododendron forest past the dramatic Futfute Waterfall and through isolated Magar and Gurung settlements where few foreigners have ever passed. There are no teahouses — trekkers must carry camping equipment and be self-sufficient.

At 4,060 metres, Panchakunda Lake appears like a jewel in a high alpine bowl. The turquoise waters are considered sacred; a small Shiva temple sits at the lake\'s edge, and the site draws Hindu and Buddhist pilgrims who believe the waters have purifying properties. On clear days, the sheer north face of Annapurna I (8,091 m) looms directly above, framed by the flanks of Nilgiri South (6,839 m).

Above the lake, the historic Maurice Herzog Trail continues to the Annapurna North Base Camp (4,190–4,300 m) — the starting point of the 1950 French expedition that made Annapurna the first 8,000-metre peak ever climbed. Standing here in the silence of these high meadows, with the immensity of Annapurna filling the sky, is one of the most profound experiences Nepal has to offer.`,
    bestSeason: 'Oct–Nov, Apr–May',
    howToGetThere: 'Drive from Pokhara to Narchyang (6 hrs). Full camping trek, 5–7 days return. No teahouses — carry all supplies.',
    youtubeUrl: 'https://www.youtube.com/watch?v=7CaYrFtM2K4',
    seoTitle: 'Panchakunda Lake Annapurna North | Remote Trek Myagdi Nepal',
    seoDescription: "Trek to Panchakunda Lake (4,060 m) on Annapurna\'s wild north face in Myagdi. A full camping trek past the Maurice Herzog trail to Annapurna North Base Camp.",
    trekHighlights: ['Annapurna North face views', 'Maurice Herzog trail', 'Sacred Shiva lake', 'Futfute Waterfall'],
  },

  {
    slug: 'ruby-valley-trek',
    name: 'Ruby Valley Trek',
    category: 'TREK_ROUTE',
    district: 'Dhading',
    province: 'BAGMATI',
    lat: 28.21,
    lng: 84.72,
    elevation: 4020,
    trekDays: 7,
    trekDifficulty: 'MODERATE',
    trekMaxElevation: 4020,
    trekDistance: 70.0,
    trekStartPoint: 'Borang / Arughat',
    trekEndPoint: 'Borang / Arughat',
    trekHighlights: ['Singla Pass at 4,020 m', 'Janai Purnima shamanic festival', 'Manaslu & Langtang views', 'Ruby mineral deposits'],
    summary:
      'The Ruby Valley Trek threads between Langtang National Park and Manaslu Conservation Area through Dhading district, crossing the mineral-rich Singla Pass (4,020 m). The high panorama stretches from Langtang Lirung to Manaslu and Ganesh Himal. Largely undiscovered by foreign trekkers, the trail passes through Tamang homestay villages where ancient shamanic traditions and the Janai Purnima fair still flourish.',
    story: `## Ruby Valley Trek: Nepal\'s Gemstone Trail

Tucked into the hilly terrain of Dhading district — just a few hours from Kathmandu — the Ruby Valley is one of central Nepal\'s most overlooked trekking regions. Sandwiched between Langtang National Park to the north and the Manaslu Conservation Area to the west, this valley sits at the geographic heart of Nepal in a landscape shaped by the Ganesh Himal and its flanking ridges.

The valley gets its name from the ruby deposits found in the surrounding hills — mineralogical treasure hidden beneath a surface of terraced fields and rhododendron forest. The high point of the trek, Singla Pass at approximately 4,020 metres, marks the watershed between the Dhading and Nuwakot districts and is the spiritual focal point of the region. Each year during Janai Purnima (August full moon), Bombos and Jhakris — traditional shamans — gather at Singla for ceremonies in which disciples learn from their masters, a living tradition rarely witnessed by outsiders.

The trail passes through the Tamang hub of Sertung (around 600 households), where a Buddhist stupa and a local Buddha Park make pleasant stopping points. The village of Borang serves as the usual trekking start, while the windswept meadows of Machet Kharka (3,500 m) offer jaw-dropping views of Manaslu (8,163 m), Langtang Lirung (7,300 m), and the Ganesh Himal peaks.

For trekkers seeking a genuinely off-the-beaten-path experience within easy reach of Kathmandu, the Ruby Valley delivers on every front: cultural authenticity, wildlife, remarkable scenery, and almost total solitude on the trail.`,
    bestSeason: 'Oct–Nov, Mar–May',
    howToGetThere: 'Drive from Kathmandu to Arughat or Borang (5–6 hrs). The trek can be linked to the Manaslu Circuit for a longer adventure.',
    youtubeUrl: 'https://www.youtube.com/watch?v=MPPfQz8A7CI',
    seoTitle: 'Ruby Valley Trek Dhading | Off the Beaten Path Nepal Trek',
    seoDescription: 'Trek the Ruby Valley in Dhading between Langtang and Manaslu. Cross Singla Pass (4,020 m) through Tamang villages with views of Manaslu and Langtang Lirung.',
  },

  {
    slug: 'khumai-danda',
    name: 'Khumai Danda',
    category: 'HILL_VIEWPOINT',
    district: 'Kaski',
    province: 'GANDAKI',
    lat: 28.32,
    lng: 83.93,
    elevation: 3245,
    summary:
      "Khumai Danda is a spectacular viewpoint at 3,245 m in Kaski district, offering some of the closest and most dramatic views of Machhapuchhre (Fishtail, 6,993 m). The 4-day trek from Pokhara through Gurung and Magar villages culminates in sunrise panoramas of the entire Annapurna range, then descends to Kharpani hot springs for the perfect finish.",
    story: `## Khumai Danda: Machhapuchhre Up Close

From Pokhara\'s lakeside, the sacred Fishtail peak of Machhapuchhre dominates the northern skyline — tantalisingly close yet always seeming distant. Khumai Danda, a trekking destination in the Machhapuchhre Rural Municipality of Kaski district, changes that perspective entirely. At 3,245 metres, this forested ridgeline rises directly beneath the mountain\'s southern walls, placing trekkers closer to Machhapuchhre than virtually any other route accessible from Pokhara.

The four-day trek begins from Ghachok village (1,494 m), a short drive from Pokhara, and climbs through dense rhododendron and oak forest, passing through the mid-altitude settlement of Chichimle before reaching Khumai Danda. The diversity of communities along the trail — Gurung, Tamang, Magar, Damai, and others — makes the cultural journey as rich as the mountain scenery.

The highlight is the pre-dawn hike from Khumai Danda to Korchan Danda (3,700 m), where sunrise ignites the peaks in gold and pink. Locals consider this the finest sunrise viewpoint in all of Kaski district, with Machhapuchhre, Annapurna South, Himchuli, and Mardi Himal all visible in a single panoramic sweep.

The final day\'s descent to Kharpani hot springs (1,330 m) provides the perfect coda — natural hot spring pools where tired legs find relief. From there a short drive returns trekkers to Pokhara. This is Nepal\'s hidden Pokhara trek: uncrowded, culturally rich, and breathtaking.`,
    bestSeason: 'Oct–May (avoid monsoon Jul–Sep)',
    howToGetThere: 'Drive to Ghachok village (30 min from Pokhara). The 4-day loop returns via Kharpani hot springs.',
    youtubeUrl: 'https://www.youtube.com/watch?v=MPPfQz8A7CI',
    seoTitle: 'Khumai Danda Trek Pokhara | Best Machhapuchhre Viewpoint Kaski',
    seoDescription: "Trek to Khumai Danda (3,245 m) near Pokhara for the closest views of Machhapuchhre\'s iconic Fishtail peak. 4-day loop with Kharpani hot springs descent.",
    trekHighlights: ['Machhapuchhre close-up views', 'Sunrise from Korchan Danda', 'Gurung and Magar villages', 'Kharpani hot spring descent'],
  },

  {
    slug: 'badimalika-temple',
    name: 'Badimalika Temple',
    category: 'TEMPLE',
    district: 'Bajura',
    province: 'SUDURPASHCHIM',
    lat: 29.28,
    lng: 81.72,
    elevation: 4200,
    summary:
      "Badimalika Temple is one of Far-Western Nepal\'s holiest Shakti pilgrimage sites, dedicated to Goddess Bhagwati and perched at 4,200 m in Bajura district. According to Hindu tradition, the left shoulder of Goddess Sati fell here, making it one of the great Shaktipeeths of the subcontinent. Thousands of pilgrims make the rugged multi-day journey each Janai Purnima to reach this remote but profoundly sacred shrine above the clouds.",
    story: `## Badimalika Temple: The Goddess on the Roof of Far-West Nepal

In the remote mountains of Bajura district, where the rivers of the Karnali carve deep gorges through the Sudurpashchim hills, Badimalika Temple stands at 4,200 metres as one of the most significant — and least visited — pilgrimage sites in the entire Himalaya. To reach it requires commitment: a multi-day trek through terrain that changes from subtropical river valleys to bare alpine ridgelines, with few facilities and no crowds.

The temple is dedicated to Goddess Bhagwati, a fierce form of the divine feminine, and holds a place among the great Shaktipeeths of the Hindu world. The mythology is ancient and powerful: when the grief-stricken god Shiva carried the body of his deceased wife Sati across the cosmos, the gods intervened by dismembering her corpse to free Shiva from his mourning. Each body part fell to earth and became a sacred site. At Badimalika, it is said, the left shoulder of Goddess Sati came to rest — giving the place a divine potency that draws pilgrims from Bajura, Doti, Kalikot, Bajhang, Baitadi, and beyond.

The annual Janai Purnima festival (full moon of August) transforms this remote ridgeline into a sea of humanity. Flag-bearers from Kalikot, Bajura, and Doti carry sacred banners along ancient trails that have served as pilgrimage pathways for centuries, while shamans and priests perform rituals that blend high-mountain Hinduism with older Himalayan spiritual traditions.

Nearby Tribenipatan, a lush grassland at around 3,840 metres on the Bajura–Kalikot border, serves as an acclimatisation and purification stop on the route. Its meadows and small wetlands, set against views of Api and Saipal peaks, make for a hauntingly beautiful alpine camping ground. Together, Badimalika and Tribenipatan represent Far-Western Nepal at its most wild, sacred, and unspoiled.`,
    bestSeason: 'May–Jun, Aug (Janai Purnima), Sep–Oct',
    howToGetThere: 'Fly to Bajura or take a long road journey from Nepalgunj. Trek 2–3 days from Martadi (district HQ). Very basic facilities — camping recommended.',
    entryFee: 'Free (temple donations welcome)',
    youtubeUrl: 'https://www.youtube.com/watch?v=87HXLeFBFiw',
    seoTitle: 'Badimalika Temple Bajura | Shakti Pilgrimage Far-West Nepal',
    seoDescription: 'Badimalika Temple (4,200 m) in Bajura is a sacred Shaktipiith where Goddess Sati\'s shoulder fell. One of Nepal\'s most remote and revered Hindu pilgrimage sites.',
  },

  {
    slug: 'mai-pokhari-ilam',
    name: 'Mai Pokhari',
    category: 'LAKE',
    district: 'Ilam',
    province: 'KOSHI',
    lat: 26.90,
    lng: 87.92,
    elevation: 2100,
    summary:
      "Mai Pokhari is a sacred star-shaped lake and Ramsar wetland at 2,100 m in the hills of Ilam district, Eastern Nepal. Venerated as the abode of Goddess Mai by both Hindus and the indigenous Limbu community, its nine sacred corners are each dedicated to different deities. A biodiversity hotspot sheltering over 300 bird species, the lake and its botanical garden are the perfect companion to a visit to Nepal\'s famous tea gardens.",
    story: `## Mai Pokhari: East Nepal\'s Sacred Star Lake

About 15 kilometres north of Ilam Bazaar, where the hills of eastern Nepal rise into lush, mist-veiled tea country, lies one of the region\'s most enchanting natural and spiritual sites. Mai Pokhari is a star-shaped lake — nine corners, each consecrated to a different deity — sitting at 2,100 metres in an embrace of ancient rhododendron, oak, and pine forest.

The Limbu community, the indigenous people of eastern Nepal, regard the lake with profound reverence. According to their tradition, Goddess Mai resides in the water. Each year on the full moon day of Mangsir (November/December), the lake becomes the centre of a major festival featuring traditional music, the Chyabrung drum, and the spiralling dances of the Kelang and Yakthung Sili — living cultural performances that link the present to centuries of Kiranti heritage.

The Hindu Mahabharata also references this region: the Pandava brothers are said to have wandered in this area during their exile, and the lake\'s spiritual character is described in ancient texts. This layered sacredness — drawing from both Limbu and Hindu traditions — makes Mai Pokhari one of Nepal\'s most culturally complex sacred sites.

Designated a Ramsar Wetland of International Importance in 2008, Mai Pokhari is also a biodiversity sanctuary of the highest order. More than 300 species of birds have been recorded here, including rare Himalayan species. The lake is the only known habitat in Nepal for the Himalayan newt (Tylototriton verrucosus). The adjacent Mai Pokhari Botanical Garden, with its orchid house and rock garden, adds an additional dimension for nature lovers. As a day trip from Ilam — Nepal\'s tea capital — Mai Pokhari is unmissable.`,
    bestSeason: 'Mar–May (rhododendron), Oct–Dec (clear skies)',
    howToGetThere: 'Drive 15 km north of Ilam Bazaar (about 45 min by jeep on a winding road). Day trip from Ilam town.',
    entryFee: 'NPR 50 (approx.)',
    youtubeUrl: 'https://www.youtube.com/watch?v=B5OKje9b6aU',
    seoTitle: 'Mai Pokhari Ilam | Sacred Star Lake & Ramsar Wetland Nepal',
    seoDescription: 'Visit Mai Pokhari, a sacred star-shaped lake at 2,100 m near Ilam tea gardens. Ramsar wetland, Limbu cultural festival site, and home to 300+ bird species.',
  },

  // ── @Ghumante ─────────────────────────────────────────────────────────────────

  {
    slug: 'nar-phu-valley',
    name: 'Nar Phu Valley',
    category: 'TREK_ROUTE',
    district: 'Manang',
    province: 'GANDAKI',
    lat: 28.72,
    lng: 84.22,
    elevation: 5320,
    trekDays: 12,
    trekDifficulty: 'HARD',
    trekMaxElevation: 5320,
    trekDistance: 90.0,
    trekStartPoint: 'Koto (Annapurna Circuit)',
    trekEndPoint: 'Manang (Annapurna Circuit)',
    trekHighlights: ['Ancient Tibetan villages Phu & Nar', 'Kang La Pass 5,320 m', 'Tashi Lhakhang Gompa', 'Restricted-area permit zone'],
    summary:
      "Nar Phu Valley is a restricted-access trekking area in northern Manang, sheltering two of Nepal\'s most isolated Tibetan-influenced villages — Phu (4,080 m) and Nar (4,110 m). Closed to foreigners until 2002, the valley preserves ancient Bon and Tibetan Buddhist culture virtually untouched by modernity. The circuit\'s high point is Kang La Pass (5,320 m) with sweeping Annapurna views.",
    story: `## Nar Phu Valley: Nepal\'s Last Closed Kingdom

Hidden in the northern folds of Manang district, beyond the main Annapurna Circuit trail and behind a restricted entry permit barrier, Nar Phu Valley is Nepal\'s most authentic Tibetan cultural enclave still standing on Nepali soil. For decades, the valley was completely off-limits to outsiders — it was only in 2002 that the government opened it to foreign trekkers with special permits — and the isolation has been both its challenge and its gift.

The two main villages, Phu (4,080 m) and Nar (4,110 m), cling to the cliffs above narrow gorges where the Phu Khola carves through the rock. Stone houses stacked in tiered formations, narrow lanes threaded between walls of mani stones and prayer wheels, and the scent of juniper smoke rising from gompa courtyards: this is a landscape that has barely changed in centuries. The people here speak their own dialect, a close relative of Tibetan, and practice a blend of Bon and Tibetan Buddhism that predates the introduction of Nepalese culture to the region.

The trek into Nar Phu typically branches off the Annapurna Circuit at Koto and follows a narrowing canyon for two days before opening dramatically into the valley. Phu, the more remote of the two villages, feels like stepping into medieval Tibet: its ancient monastery, the Tashi Lhakhang Gompa, contains centuries-old thangkas and statues guarded by monks who seem unfazed by the occasional visiting trekker.

The circuit culminates in the crossing of Kang La Pass (5,320 m), a high-altitude col connecting the valley back to the main Manang area. From the pass, the views of Annapurna II, Annapurna III, Gangapurna, and Tilicho Peak are breathtaking — a final panorama that seals Nar Phu\'s status as one of the most rewarding trekking experiences in all of Nepal.`,
    bestSeason: 'Sep–Nov, Mar–May',
    howToGetThere: 'Reach Koto village on the main Annapurna Circuit road. Nar Phu requires a special restricted area permit (approx USD 100/week) on top of ACAP permit.',
    entryFee: 'Restricted Area Permit: USD 90/week + ACAP (NPR 3,000 foreigners)',
    youtubeUrl: 'https://www.youtube.com/watch?v=uea5-JRCGJk',
    seoTitle: 'Nar Phu Valley Trek Nepal | Hidden Tibetan Villages Manang',
    seoDescription: "Trek Nepal\'s restricted Nar Phu Valley to the ancient Tibetan villages of Phu and Nar in Manang. Cross Kang La Pass (5,320 m). Special permit required.",
  },

  // ── @TRAVERART ────────────────────────────────────────────────────────────────

  {
    slug: 'milarepa-cave-bhraka',
    name: 'Milarepa Cave (Bhraka Village)',
    category: 'CAVE',
    district: 'Manang',
    province: 'GANDAKI',
    lat: 28.62,
    lng: 84.22,
    elevation: 4250,
    summary:
      "Milarepa Cave in Bhraka (Braga) village, Manang, is one of the most revered Buddhist pilgrimage sites on the Annapurna Circuit, where the 11th-century Tibetan yogi Milarepa is said to have meditated. Bhraka village itself is over 1,000 years old and its 600-year-old gompa contains hundreds of ancient Buddha statues. An essential acclimatisation day hike from Manang.",
    story: `## Milarepa Cave: Where the Yogi Sang to the Mountains

In the 11th and 12th centuries, Jetsun Milarepa wandered the high places of the Himalayas — living in caves, composing songs of enlightenment, and becoming one of Tibetan Buddhism\'s most beloved figures. He is said to have meditated in many caves across the mountains, and one of the most significant is found above the ancient village of Bhraka (also called Braga) in the Manang district of Nepal.

Bhraka itself is extraordinary: a cluster of stone houses stacked against a steep cliff at 3,470 metres, with narrow alleys and doorways worn smooth by generations of hands and feet. The village is believed to have been continuously inhabited for over a thousand years, predating even the Annapurna Circuit. The Bhraka Monastery (Braka Gompa), built around 600 years ago, is one of the most important Buddhist institutions in the region, housing hundreds of ancient Buddha statues and a prayer hall whose walls are covered in remarkable thangka paintings.

The hike to Milarepa Cave from Bhraka reaches approximately 4,250 metres — a significant ascent that the experience justifies entirely. The cave itself is small and simple: a natural rock shelter with prayer flags, butter lamps, and the soft murmur of pilgrims in prayer. Monks and devotees from across the Buddhist world make the journey specifically to meditate here, drawn by the accumulated spiritual power of centuries of practice.

For trekkers on the Annapurna Circuit using Manang as an acclimatisation stop, a day hike to Milarepa Cave and Bhraka is the single most enriching side excursion available — combining Himalayan architecture, ancient spiritual tradition, and views of Annapurna II, Gangapurna, and Tilicho Peak that are among the finest in Nepal.`,
    bestSeason: 'Sep–Nov, Mar–May',
    howToGetThere: 'From Manang village (Annapurna Circuit), trek 30 min to Bhraka village, then hike 2–3 hrs uphill to the cave. No extra permit required.',
    entryFee: 'Donation to monastery (NPR 100–200)',
    youtubeUrl: 'https://www.youtube.com/watch?v=LKSsCPK6dGs',
    seoTitle: 'Milarepa Cave Bhraka Manang | Buddhist Pilgrimage Annapurna Circuit',
    seoDescription: "Visit Milarepa Cave above Bhraka (Braga) village in Manang — a sacred site where Tibet\'s great yogi meditated. Day hike from the Annapurna Circuit\'s Manang acclimatisation stop.",
  },

  {
    slug: 'dona-lake-manang',
    name: 'Dona Lake (Dona Tal)',
    category: 'LAKE',
    district: 'Manang',
    province: 'GANDAKI',
    lat: 28.54,
    lng: 84.13,
    elevation: 4200,
    summary:
      'Dona Lake (Dona Tal) is a C-shaped glacial lake at 4,200 m in the lower reaches of Manang district — a serene off-the-beaten-path alternative to crowded Annapurna Circuit highlights. The turquoise waters reflect views of Manaslu (8,163 m), Annapurna II (7,937 m), and Lamjung Himal. Accessible via a 3–4 hour trek from Nasong village, it holds local cultural significance as a lake believed to bring good fortune.',
    story: `## Dona Lake: Manang\'s Quiet Secret

In the lower reaches of Manang district, where the Annapurna Circuit\'s main trail draws thousands of trekkers each year, there are still corners that see only a handful of visitors per season. Dona Lake — Dona Tal in Nepali — is one of them: a C-shaped glacial lake tucked into the alpine landscape of Nasong Rural Municipality at 4,200 metres, accessible via a quiet side trail that most trekkers never notice.

TraverArt, the travel filmmaking duo Sarthak and Smriti, documented this journey in a travel vlog that quickly became one of their most-watched videos — a testament to the lake\'s visual magnetism. The footage shows crystal-clear blue-green water against a backdrop of towering peaks, with not another soul in sight. The lake\'s unusual C-shape makes it instantly recognisable from the slopes above.

The trek to Dona Lake from Nasong village covers 6–7 km and takes 3–4 hours each way, passing through rhododendron forest and high alpine meadows before emerging above the treeline. The panoramic rewards are considerable: on a clear day, Manaslu (8,163 m), Annapurna II (7,937 m), and Lamjung Himal (6,986 m) form a continuous white wall across the northern horizon.

For local Manangi communities, the lake carries cultural significance — believed to bring good fortune to those who visit respectfully. The remote Nachei Gaun village nearby is one of the least-touristed settlements in the entire Annapurna Conservation Area, offering a rare window into traditional high-altitude mountain life completely unaffected by tourist infrastructure.`,
    bestSeason: 'Oct–Nov, Apr–Jun',
    howToGetThere: 'Drive from Besisahar to Nasong village (accessible by jeep). Trek 3–4 hrs from Nasong. ACAP permit required.',
    entryFee: 'ACAP permit (NPR 3,000 foreigners)',
    youtubeUrl: 'https://www.youtube.com/watch?v=4ptF1NCa3Co',
    seoTitle: 'Dona Lake Manang Nepal | Hidden Glacial Lake Annapurna Region',
    seoDescription: 'Dona Lake (Dona Tal) is a hidden C-shaped glacial lake at 4,200 m in Manang. 3-4 hour trek from Nasong village with Manaslu and Annapurna II views.',
  },

  {
    slug: 'ice-lake-kicho-tal-manang',
    name: 'Ice Lake (Kicho Tal)',
    category: 'LAKE',
    district: 'Manang',
    province: 'GANDAKI',
    lat: 28.68,
    lng: 84.09,
    elevation: 4620,
    summary:
      'Ice Lake (Kicho Tal) is a high alpine lake at 4,620 m above Manang village on the Annapurna Circuit, offering spectacular views of Annapurna II, Annapurna III, and Gangapurna. A favourite acclimatisation day hike from Manang, the 1,100 m ascent leads to twin lake bodies marked by a stupa and prayer flags. Its characteristic icy surface and raw Himalayan backdrop make it one of the most dramatic lake experiences in Nepal.',
    story: `## Ice Lake: The Frozen Mirror Above Manang

The Annapurna Circuit through Manang is one of Nepal\'s great classic treks, but the main trail only hints at what lies above. From the teahouses of Manang village (3,500 m), a strenuous but enormously rewarding day hike climbs 1,100 metres of vertical gain through alpine pasture and rocky moraine to reach Ice Lake — Kicho Tal — perched at 4,620 metres in a natural amphitheatre of Himalayan peaks.

The lake sits in a world of ice and stone. Even in summer, the water temperature is close to freezing, and in winter and early spring the lake surface freezes solid — hence its name. The stillness here is absolute: no trees, no insects, only wind across water and the creak of glacier ice. Two lake bodies make up the complex: Lower Ice Lake and Upper Ice Lake, the latter marked by a lonely stupa and prayer flags that whip in the thin mountain wind.

The mountain panorama from the upper lake is extraordinary. Annapurna II (7,937 m), Annapurna III (7,555 m), and Gangapurna (7,455 m) fill the northern horizon, their glaciers and ice faces glowing white against the deep blue of the high-altitude sky. Trekkers doing the Annapurna Circuit typically use this hike as their acclimatisation day before the push to Thorong La Pass — a practical necessity that happens also to be one of the finest day hikes in Nepal.

TRAVERART documented their own ascent to Ice Lake as part of a longer Manang travel series, capturing both the physical challenge of the climb and the otherworldly silence that greets you at the top. The footage helped a new generation of Nepali and international viewers understand that the Annapurna region contains far more than just the main circuit route.`,
    bestSeason: 'Sep–Nov, Mar–May',
    howToGetThere: 'Day hike from Manang village on the Annapurna Circuit. Steep ascent of 1,100 m — allow 5–6 hrs return. Start early to avoid afternoon cloud.',
    youtubeUrl: 'https://www.youtube.com/watch?v=LKSsCPK6dGs',
    seoTitle: 'Ice Lake Kicho Tal Manang | Best Acclimatisation Hike Annapurna Circuit',
    seoDescription: 'Ice Lake (Kicho Tal) sits at 4,620 m above Manang on the Annapurna Circuit. Day hike with views of Annapurna II, III, and Gangapurna — the classic acclimatisation trek.',
  },

  // ── @sirjanasizzu ─────────────────────────────────────────────────────────────

  {
    slug: 'tilachan-lake-rolpa',
    name: 'Tilachan Lake',
    category: 'LAKE',
    district: 'Rolpa',
    province: 'LUMBINI',
    lat: 28.50,
    lng: 82.73,
    elevation: 3800,
    summary:
      'Tilachan Lake is a high-altitude gem straddling the Rolpa–Baglung border within the Dhorpatan region of western Nepal, offering sweeping panoramas across six districts including Pyuthan, Gulmi, and East Rukum. Long used by seasonal herders, the lake sits in Sunchhahari Rural Municipality and remains one of western Nepal\'s most raw and undiscovered destinations — exactly the kind of place that defines Nepal\'s wilderness travel.',
    story: `## Tilachan Lake: Rolpa\'s Heaven on the Ridgeline

In the hills above the Dhorpatan region, where Rolpa and Baglung meet in a tangle of high ridges, seasonal meadows, and sky-wide views, Tilachan Lake quietly waits for those willing to seek it out. Sirjana Sizzu — one of Nepal\'s most adventurous solo female travel vloggers — was among the first to bring this lake to national attention, describing it simply as "heaven" in a video that resonated with hundreds of thousands of viewers hungry for Nepal\'s undiscovered places.

The lake sits within Sunchhahari Rural Municipality-1 of Rolpa district, at altitude high enough to serve as a landmark on the border between Baglung and Rolpa. On clear days the viewshed is extraordinary: the hills of six districts including Pyuthan, Gulmi, and East Rukum roll away in every direction, with the Dhaulagiri massif forming a white wall to the north.

For generations, the lake has been the domain of transhumant herders — families who migrate seasonally to these high pastures with their cattle and yaks, spending the warm months in a lifestyle little changed since ancient times. The trails to the lake are still primarily those made by livestock, crossing narrow gorges and rustic wooden bridges.

This is precisely the charm of Tilachan: it has not yet been packaged, branded, or developed. Reaching it requires real effort and a genuine spirit of adventure — and the lake rewards that effort with solitude, stunning views, and the feeling of standing somewhere genuinely off the map.`,
    bestSeason: 'Apr–Jun, Oct–Nov',
    howToGetThere: 'Drive to Libang (Rolpa district HQ), then by local transport and on foot to the Sunchhahari area. Basic homestays available; camping recommended.',
    youtubeUrl: 'https://www.youtube.com/watch?v=HHLvqKqoogs',
    seoTitle: 'Tilachan Lake Rolpa Nepal | Hidden High Altitude Lake West Nepal',
    seoDescription: 'Tilachan Lake in Rolpa is one of western Nepal\'s most undiscovered high-altitude destinations. Sweeping views across 6 districts near the Dhorpatan region.',
  },

  {
    slug: 'salpa-pokhari',
    name: 'Salpa Pokhari',
    category: 'LAKE',
    district: 'Bhojpur',
    province: 'KOSHI',
    lat: 27.32,
    lng: 87.21,
    elevation: 3672,
    summary:
      "Salpa Pokhari is a sacred lake at 3,672 m in Bhojpur district, forming the spiritual heart of the Mundum Trail — a cultural trekking route through the ancient Kirat Rai homeland. Pilgrims gather here on three annual full-moon days, believing the lake grants wishes. The Mundum Trail connecting Bhojpur, Khotang, Solukhumbu, and Sankhuwasabha is emerging as Nepal\'s most significant indigenous cultural trek.",
    story: `## Salpa Pokhari: The Sacred Lake of the Kirat Rai

In the high ridge country where the districts of Bhojpur, Khotang, Solukhumbu, and Sankhuwasabha meet, Salpa Pokhari sits at 3,672 metres as one of eastern Nepal\'s most spiritually charged landscapes. This is the heartland of the Kirat Rai people — one of Nepal\'s oldest indigenous nations — and the lake is embedded in their Mundum oral tradition, a cosmological and ethical guide that predates Hinduism and Buddhism in these hills.

The word "Mundum" encompasses the entire Kirat Rai cosmology: their origin stories, laws, rituals, and relationship with the natural world. The Mundum Trail, which passes through Salpa Pokhari, is not merely a trekking route but a pilgrimage through Kirat sacred geography — a walk through the living spiritual landscape of a 3,000-year-old civilisation.

Salpa Pokhari is visited by pilgrims on the full-moon days of Baisakh (May), Shrawan/Janai Purnima (August), and Mangsir (December). These gatherings bring together Kirat Rai, Sherpa, Rai, and Hindu devotees in a festival atmosphere that is one of eastern Nepal\'s most authentic and least-touristed cultural events.

The surrounding trek — from Chakhewa Bhanjyang through Maiyung (Hans Pokhari), Salpa Bhanjyang, and up to Silichung Peak (4,153 m) — is an immersion in landscapes that few outsiders have witnessed: cloud-forest ridgelines, ancient shepherd routes, and views of the Khumbu and Arun ranges. Sirjana Sizzu\'s multi-episode documentary of the Mundum Trail introduced this route to a new generation of Nepali viewers, sparking a quiet revival of interest in the indigenous Kirat homeland.`,
    bestSeason: 'Oct–Nov, Mar–May, Aug (Janai Purnima pilgrimage)',
    howToGetThere: 'Fly to Tumlingtar (Koshi Province) or drive to Hile/Dhankuta. Trek via Bhojpur or Khotang. The Mundum Trail is a 7–10 day route.',
    youtubeUrl: 'https://www.youtube.com/watch?v=TmuiPOLDwvY',
    seoTitle: 'Salpa Pokhari Bhojpur | Kirat Rai Sacred Lake Mundum Trail Nepal',
    seoDescription: 'Salpa Pokhari (3,672 m) is the sacred heart of the Mundum Trail through the Kirat Rai homeland in Bhojpur. Pilgrims gather here three times a year to have their wishes granted.',
  },

  {
    slug: 'sinja-valley',
    name: 'Sinja Valley',
    category: 'ARCHAEOLOGICAL',
    district: 'Jumla',
    province: 'KARNALI',
    lat: 29.12,
    lng: 82.22,
    elevation: 2500,
    summary:
      "Sinja Valley in Jumla is the birthplace of the Nepali language and former summer capital of the Khasa Malla Kingdom (12th–14th centuries) — a medieval trans-Himalayan empire. Archaeological excavations have uncovered palace ruins, ancient temples, and the earliest known Devanagari inscriptions from the 13th century. The valley is on Nepal\'s UNESCO World Heritage Tentative List and is one of the country\'s most significant yet least-visited historical sites.",
    story: `## Sinja Valley: Where the Nepali Language Was Born

In the heart of Karnali Province, along the banks of the Sinja River at roughly 2,500 metres, lies one of the most historically significant valleys in the entire history of Nepal — and in the linguistic history of South Asia. Sinja Valley was the summer capital of the Khasa Malla Kingdom, the great medieval empire that unified and ruled much of trans-Himalayan western Nepal from the 12th to 14th centuries CE.

The Khasa Mallas extended their reach from the Karnali basin across the high Himalayan passes into Tibet and down into the Gangetic plains of northern India. Their administrative, legal, and cultural achievements were remarkable for their era, and many aspects of Nepali law, architecture, and religious practice trace their roots to this dynasty. When the kingdom fragmented into twenty-two petty states in the 14th century, those states eventually became the building blocks of modern Nepal.

The valley\'s most profound contribution is linguistic. Scholars and inscriptions confirm that the Nepali language — spoken today by tens of millions as Nepal\'s national language — evolved and standardised in the Sinja Valley. The earliest known examples of written Devanagari script, dating to the 13th century, were found inscribed on stone cliffs here and in nearby Dullu. For this reason, linguists and historians regard Sinja as the birthplace of the Nepali language.

Underground pipes, monolithic stone columns, palace foundations, and temple ruins have all been documented by archaeologists. The valley was added to Nepal\'s UNESCO World Heritage Tentative List in 2008. Yet astonishingly, it receives only a tiny trickle of visitors. Sirjana Sizzu\'s multi-episode documentary brought the valley to the attention of a new generation of Nepali viewers, many of whom had never been taught that the language they speak was born in these remote hills of Karnali.`,
    bestSeason: 'Sep–Nov, Apr–Jun',
    howToGetThere: "Fly to Jumla (via Kathmandu) then drive/trek south-east. The valley is about 2–3 hrs' drive/trek from Jumla town. Most visitors combine with Rara Lake.",
    entryFee: 'Free',
    youtubeUrl: 'https://www.youtube.com/watch?v=JgKQrhnNPXc',
    seoTitle: 'Sinja Valley Jumla | Birthplace of Nepali Language & Khasa Malla Kingdom',
    seoDescription: "Sinja Valley in Jumla is where the Nepali language was born. The summer capital of the Khasa Malla Kingdom (12th–14th century), it\'s on Nepal\'s UNESCO tentative list.",
  },

  {
    slug: 'ramaroshan-wetland',
    name: 'Ramaroshan Wetland',
    category: 'LAKE',
    district: 'Achham',
    province: 'SUDURPASHCHIM',
    lat: 29.10,
    lng: 81.51,
    elevation: 2500,
    summary:
      'Ramaroshan is a breathtaking highland wetland complex in Achham district featuring 12 high-altitude lakes and 18 alpine meadows spread across elevations from 1,400 to 3,792 m. The two main wetlands lie at 2,500 m surrounded by rocky cliffs, seasonal wildflowers, and views of Api and Saipal peaks. This biodiversity-rich site at the junction of three districts is one of Far-Western Nepal\'s most extraordinary natural landscapes.',
    story: `## Ramaroshan: The Land of Twelve Lakes

In the high country of Achham district, where far-western Nepal folds into a succession of ridges and river valleys that few outsiders have ever traversed, the Ramaroshan Wetland Complex spreads across a landscape of breathtaking ecological richness. Here, at elevations ranging from 1,400 to 3,792 metres, twelve glacially formed lakes and eighteen patches of alpine meadow create a mosaic of habitat unlike anything else in the Sudurpashchim hills.

The two principal wetlands — Rama and Roshan — sit at approximately 2,500 metres and give the complex its name. The largest, Jigale Lake, is shaped like the letter C, while Taune Lake, the smallest, glitters like a jewel in a hollow of rock and grass. Stiff rocky cliffs frame the wetlands on multiple sides, and during spring and early summer the meadows erupt in wildflowers that attract butterflies, birds, and the occasional snow leopard from the higher ridges.

Ramaroshan sits at the meeting point of three districts — Achham, Bajura, and Kalikot — a liminal location that has given it a somewhat boundary-defying character. It lies 42 km from Mangalsen, Achham\'s district headquarters, accessible via a combination of road and trail.

In recent years, tourists from more than 46 countries have visited Ramaroshan, drawn by its combination of biodiversity, landscape beauty, and deep cultural connections to the peoples of the western hills. The site offers some of the finest birdwatching in the region and the clearest window into the alpine ecology of Sudurpashchim Province — a province that remains, to most of the world, deliciously undiscovered.`,
    bestSeason: 'Apr–Jun, Sep–Nov',
    howToGetThere: 'Drive from Sanfebagar or Mangalsen (Achham district HQ) — about 42 km, partly on dirt roads. Local jeeps available. Basic homestays in the area.',
    youtubeUrl: 'https://www.youtube.com/watch?v=VX4LhQARfA4',
    seoTitle: 'Ramaroshan Wetland Achham | 12 Lakes Far-West Nepal',
    seoDescription: 'Ramaroshan in Achham features 12 high-altitude lakes and 18 alpine meadows up to 3,792 m. One of Far-Western Nepal\'s most biodiverse and least-visited natural landscapes.',
  },

  {
    slug: 'bukipatan-highland-meadow',
    name: 'Bukipatan Highland Meadow',
    category: 'HILL_VIEWPOINT',
    district: 'Baglung',
    province: 'GANDAKI',
    lat: 28.51,
    lng: 82.90,
    elevation: 4190,
    summary:
      "Bukipatan is a high alpine meadow at 4,190 m within Nepal\'s only hunting reserve — the Dhorpatan Hunting Reserve in Baglung district. Named for the buki flowers that blanket its grasslands in summer, the meadow is reached by a 5.5-hour trek from Dhorpatan Valley through rhododendron forest. It offers sweeping views of the Dhaulagiri massif and is emerging as a favourite monsoon trekking destination.",
    story: `## Bukipatan: The Flower Meadow Above Dhorpatan

Within Nepal\'s only hunting reserve — the vast and austere Dhorpatan Hunting Reserve in Baglung district — a hidden meadow sits quietly at the edge of the accessible world. Bukipatan, at around 4,190 metres, is named for the buki flowers that transform its grasslands into a natural painting each summer: acres of blooms spread across an open upland landscape beneath the glacier-etched walls of the Dhaulagiri range.

Reaching Bukipatan from Dhorpatan Valley involves a 5.5-kilometre trek through some of the most dramatic forest in western Nepal: rhododendron groves, glacial streams, and rocky terrain where wildlife thrives in the protected reserve. For generations, herders from Baglung, Rukum, Rolpa, Dolpa, and neighbouring districts have migrated seasonally to these meadows with their sheep, goats, horses, and cattle — a transhumant tradition that has shaped the landscape and culture of the western hills for centuries. By mid-October, the families descend and Bukipatan falls silent under its first snows.

The landscape experience here is raw and entirely non-commercial. There are no teahouses, no vendors, and outside of high season, no other visitors. What there is: a 360-degree panorama of one of the most isolated corners of Gandaki Province, the deep quietude of high altitude, and a sense of being genuinely far from the world.

Recent years have brought a modest but growing stream of Nepali domestic trekkers to Bukipatan, drawn by the Nepal 8th Wonder video that first documented the monsoon-season ascent in vivid 4K. The Gandaki Province government has begun allocating infrastructure funds to the area, suggesting that Bukipatan\'s relative anonymity may not last much longer.`,
    bestSeason: 'Jun–Aug (flowers in bloom), Oct–Nov (clear views)',
    howToGetThere: 'Drive from Baglung or Burtibang to Dhorpatan Valley (6–8 hrs). Trek 5.5 km (5–6 hrs) uphill to Bukipatan. No facilities — camping only.',
    youtubeUrl: 'https://www.youtube.com/watch?v=EnWiFkoBxRg',
    seoTitle: 'Bukipatan Highland Meadow | Dhorpatan Hunting Reserve Baglung Nepal',
    seoDescription: "Bukipatan (4,190 m) is a flower-filled highland meadow in Nepal\'s Dhorpatan Hunting Reserve, Baglung. Trek 5.5 km from Dhorpatan Valley for Dhaulagiri views.",
  },
]

// Story → new place slug links
const STORY_PLACE_LINKS = {
  'sati-death-guheswori':          ['bhairav-kunda-lake', 'panchakunda-lake-annapurna-north', 'badimalika-temple'],
  'samudra-manthan-gosaikunda':    ['bhairav-kunda-lake', 'tsho-rolpa-glacial-lake', 'panchakunda-lake-annapurna-north', 'ice-lake-kicho-tal-manang'],
  'durga-mahishasura-navaratri':   ['badimalika-temple'],
  'raktabeej-kali-kalinchowk':     ['badimalika-temple'],
  'mahabharata-epic-dharma':       ['mai-pokhari-ilam', 'sinja-valley'],
  'chhath-puja-sun-god':           ['mai-pokhari-ilam'],
  'siddhartha-gautama-buddha':     ['milarepa-cave-bhraka'],
  'four-yugas-ten-avatars-vishnu': ['sinja-valley'],
  'nepali-life-rituals-samskaras': ['salpa-pokhari'],
  'origin-naag-panchami':          ['salpa-pokhari'],
}

async function main() {
  console.log(`\nCreating ${NEW_PLACES.length} new places…\n`)

  let created = 0
  let skipped = 0

  for (const placeData of NEW_PLACES) {
    const existing = await prisma.place.findUnique({ where: { slug: placeData.slug } })

    if (existing) {
      console.log(`  ⚠️  SKIP (exists) — ${placeData.name}`)
      skipped++
      continue
    }

    await prisma.place.create({
      data: {
        slug: placeData.slug,
        name: placeData.name,
        category: placeData.category,
        district: placeData.district,
        province: placeData.province,
        lat: placeData.lat ?? null,
        lng: placeData.lng ?? null,
        elevation: placeData.elevation ?? null,
        summary: placeData.summary,
        story: placeData.story,
        bestSeason: placeData.bestSeason ?? null,
        howToGetThere: placeData.howToGetThere ?? null,
        entryFee: placeData.entryFee ?? null,
        youtubeUrl: placeData.youtubeUrl,
        seoTitle: placeData.seoTitle ?? null,
        seoDescription: placeData.seoDescription ?? null,
        trekDays: placeData.trekDays ?? null,
        trekDifficulty: placeData.trekDifficulty ?? null,
        trekMaxElevation: placeData.trekMaxElevation ?? null,
        trekDistance: placeData.trekDistance ?? null,
        trekStartPoint: placeData.trekStartPoint ?? null,
        trekEndPoint: placeData.trekEndPoint ?? null,
        trekHighlights: placeData.trekHighlights ?? [],
        images: [],
        published: false,
        featured: false,
      },
    })

    console.log(`  ✅  CREATED — ${placeData.name} (${placeData.slug})`)
    created++
  }

  console.log(`\n────────────────────────────────────────`)
  console.log(`  Created : ${created}`)
  console.log(`  Skipped : ${skipped}`)

  // ── Update story relatedPlaceSlugs ─────────────────────────────────────────
  console.log(`\nUpdating story relatedPlaceSlugs…\n`)

  let storiesUpdated = 0

  for (const [storySlug, newPlaceSlugs] of Object.entries(STORY_PLACE_LINKS)) {
    const story = await prisma.story.findUnique({
      where: { slug: storySlug },
      select: { id: true, relatedPlaceSlugs: true },
    })

    if (!story) {
      console.log(`  ⚠️  Story not found: ${storySlug}`)
      continue
    }

    const existing = new Set(story.relatedPlaceSlugs)
    const toAdd    = newPlaceSlugs.filter((s) => !existing.has(s))

    if (toAdd.length === 0) {
      console.log(`  ℹ️  No new links needed — ${storySlug}`)
      continue
    }

    await prisma.story.update({
      where: { slug: storySlug },
      data: { relatedPlaceSlugs: [...story.relatedPlaceSlugs, ...toAdd] },
    })

    console.log(`  ✅  ${storySlug}`)
    console.log(`       added: ${toAdd.join(', ')}`)
    storiesUpdated++
  }

  console.log(`\n────────────────────────────────────────`)
  console.log(`  Stories updated: ${storiesUpdated}`)
  console.log(`\nDone! Review and publish new places from the Admin panel.`)
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
