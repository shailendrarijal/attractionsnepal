/**
 * migrate-contact-fields.js
 *
 * 1. Strips contact info (website/phone/email) that was wrongly appended to
 *    howToGetThere in the previous session.
 * 2. Populates the new dedicated website, phone, email fields.
 * 3. Creates missing places (Mini Great Wall Bandipur, The Cliff Kushma, etc.)
 *
 * Run: node prisma/migrate-contact-fields.js
 */

import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// ─── Helper: strip contact block appended to howToGetThere ───────────────────
// Removes the trailing "\n\nWebsite: ...\nPhone: ...\nEmail: ..." block we
// mistakenly added.
function stripContactBlock(text) {
  if (!text) return text
  // Remove everything from the first blank line that precedes Website:/Phone:/Email:
  return text
    .replace(/\n{1,2}(?:Website|Phone|Email|Operat)[^\n]*(?:\n(?:Website|Phone|Email)[^\n]*)*/gi, '')
    .trimEnd()
}

// ─── Contact data for every place we need to fix/set ─────────────────────────
// Format: { slug, website?, phone?, email?, howToGetThere? }
// howToGetThere is only included when the clean text differs from what's in DB.
const contactUpdates = [
  // ── Major religious sites ──────────────────────────────────────────────────
  {
    slug: 'pashupatinath-temple',
    website: 'https://www.pashupatinathtemple.org',
    phone: '+977-1-4470440',
  },
  {
    slug: 'swayambhunath-stupa',
    phone: '+977-1-4271538',
  },
  {
    slug: 'boudhanath-stupa',
    website: 'https://www.boudha.com',
    phone: '+977-1-4470251',
  },
  {
    slug: 'kathmandu-durbar-square',
    phone: '+977-1-4256909',
  },
  {
    slug: 'patan-durbar-square',
    website: 'https://www.lalitpur.gov.np',
    phone: '+977-1-5521578',
  },
  {
    slug: 'bhaktapur-durbar-square',
    website: 'https://bhaktapurmunicipality.gov.np',
    phone: '+977-1-6612220',
  },

  // ── Museums ────────────────────────────────────────────────────────────────
  {
    slug: 'aircraft-museum-kathmandu',
    phone: '+977-1-4467905',
  },
  {
    slug: 'lumbini-museum',
    website: 'https://lumbini.museum',
    phone: '+977-71-580236',
  },
  {
    slug: 'geology-museum-kathmandu',
    website: 'https://www.dmgnepal.gov.np',
    phone: '+977-1-4416132',
  },
  {
    slug: 'numismatic-museum-kathmandu',
    phone: '+977-1-4256909',
  },
  {
    slug: 'mithila-cultural-museum-janakpur',
    phone: '+977-41-520433',
  },
  {
    slug: 'bhairahawa-regional-museum',
    phone: '+977-71-524680',
  },
  {
    slug: 'tribhuvan-museum',
    phone: '+977-1-4256909',
  },
  {
    slug: 'tharu-cultural-museum-and-research-centre',
    phone: '+977-56-580246',
  },
  {
    slug: 'sherpa-culture-museum',
    website: 'https://www.himalayantrustnepal.org',
  },
  {
    slug: 'nepal-police-museum',
    phone: '+977-1-4414747',
  },
  {
    slug: 'nepal-army-museum',
    phone: '+977-1-4228894',
  },
  {
    slug: 'postal-museum-nepal',
    phone: '+977-1-4229682',
  },
  {
    slug: 'pokhara-regional-museum',
    phone: '+977-61-521424',
  },

  // Already updated in previous session - just ensure contact fields are set
  {
    slug: 'national-museum-of-nepal',
    website: 'https://www.nationalmuseumnepal.gov.np',
    phone: '+977-1-4271504',
  },
  {
    slug: 'narayanhiti-palace-museum',
    website: 'https://www.narayanhitipalacemuseum.org.np',
    phone: '+977-1-4419689',
  },
  {
    slug: 'natural-history-museum-kathmandu',
    website: 'https://nhm.tribhuvan.edu.np',
    phone: '+977-1-4330133',
  },
  {
    slug: 'patan-museum',
    website: 'https://www.patanmuseum.gov.np',
    phone: '+977-1-5521492',
  },
  {
    slug: 'international-mountain-museum',
    website: 'https://www.internationalmountainmuseum.org',
    phone: '+977-61-535833',
  },

  // ── Libraries ──────────────────────────────────────────────────────────────
  {
    slug: 'kaiser-library',
    phone: '+977-1-4411318',
  },
  {
    slug: 'nepal-national-library',
    website: 'https://nationallibrary.gov.np',
    phone: '+977-1-5521132',
  },
  {
    slug: 'bir-library-kathmandu',
    phone: '+977-1-4241316',
  },
  {
    slug: 'tribhuvan-university-central-library',
    website: 'https://tucl.edu.np',
    phone: '+977-1-4331303',
  },

  // ── National Parks & Wildlife Reserves ────────────────────────────────────
  {
    slug: 'chitwan-national-park',
    website: 'https://dnpwc.gov.np',
    phone: '+977-56-580245',
  },
  {
    slug: 'sagarmatha-national-park',
    website: 'https://dnpwc.gov.np',
    phone: '+977-38-520002',
  },
  {
    slug: 'bardiya-national-park',
    website: 'https://dnpwc.gov.np',
    phone: '+977-84-450401',
  },
  {
    slug: 'koshi-tappu-wildlife-reserve',
    website: 'https://dnpwc.gov.np',
    phone: '+977-25-532040',
  },
  {
    slug: 'shivapuri-nagarjun-national-park',
    website: 'https://dnpwc.gov.np',
    phone: '+977-1-4359920',
  },
  {
    slug: 'rara-lake-national-park',
    website: 'https://dnpwc.gov.np',
    phone: '+977-87-520107',
  },
  {
    slug: 'shey-phoksundo-lake',
    website: 'https://dnpwc.gov.np',
    phone: '+977-87-550018',
  },
  {
    slug: 'shuklaphanta-national-park',
    website: 'https://dnpwc.gov.np',
    phone: '+977-99-521261',
  },
  {
    slug: 'parsa-national-park',
    website: 'https://dnpwc.gov.np',
    phone: '+977-51-521271',
  },
  {
    slug: 'national-botanical-garden',
    website: 'https://www.botanicalgarden.gov.np',
    phone: '+977-1-4350689',
  },
  {
    slug: 'annapurna-conservation-area',
    website: 'https://www.ntnc.org.np',
    phone: '+977-61-465195',
  },

  // ── Monasteries ────────────────────────────────────────────────────────────
  {
    slug: 'kopan-monastery',
    website: 'https://kopanmonastery.com',
    phone: '+977-1-4822268',
    email: 'retreats@kopan-nunnery.com',
  },
  {
    slug: 'tengboche-monastery',
    website: 'https://www.tengboche.org',
  },
  {
    slug: 'namobuddha',
    website: 'https://www.namobuddha.org',
    phone: '+977-11-661058',
  },
  {
    slug: 'namo-buddha-monastery',
    website: 'https://www.namobuddha.org',
    phone: '+977-11-661058',
  },
  {
    slug: 'ka-nying-shedrub-ling-monastery',
    website: 'https://shedrub.org',
    phone: '+977-1-4470139',
  },
  {
    slug: 'pullahari-monastery',
    website: 'https://pullahari.org',
    phone: '+977-1-4821066',
  },
  {
    slug: 'druk-amitabh-monastery',
    website: 'https://www.drukamitabha.org',
  },

  // ── Lumbini temples ────────────────────────────────────────────────────────
  {
    slug: 'lumbini-sacred-garden',
    website: 'https://www.lumbinidevtrust.gov.np',
    phone: '+977-71-580236',
  },
  {
    slug: 'maya-devi-temple',
    website: 'https://www.lumbinidevtrust.gov.np',
    phone: '+977-71-580236',
  },
  {
    slug: 'thai-buddhist-temple-lumbini',
    website: 'https://www.watthai-lumbini.org',
  },
  {
    slug: 'sri-lanka-buddhist-temple-lumbini',
    website: 'https://www.mahamevnawa.lk',
  },
  {
    slug: 'shanti-van-lumbini',
    website: 'https://www.lumbinidevtrust.gov.np',
    phone: '+977-71-580236',
  },

  // ── Temples ────────────────────────────────────────────────────────────────
  {
    slug: 'janaki-mandir',
    phone: '+977-41-520003',
  },
  {
    slug: 'dakshinkali-temple',
    phone: '+977-1-4371006',
  },
  {
    slug: 'manakamana-temple',
    website: 'https://www.manakamana.com.np',
    phone: '+977-65-560009',
  },
  {
    slug: 'muktinath-temple',
    phone: '+977-69-440040',
  },

  // ── Leisure & Adventure ────────────────────────────────────────────────────
  {
    slug: 'garden-of-dreams',
    website: 'https://www.gardenofdreams.org.np',
    phone: '+977-1-4428438',
  },
  {
    slug: 'chandragiri-hills',
    website: 'https://www.chandragiricable.com',
    phone: '+977-1-4371007',
  },
  {
    slug: 'bungee-jumping-the-last-resort',
    website: 'https://www.thelastresort.com.np',
    phone: '+977-1-4701031',
  },
  {
    slug: 'zip-flyer-pokhara',
    website: 'https://www.highgroundadventures.com',
    phone: '+977-61-465185',
  },
  {
    slug: 'paragliding-sarangkot-pokhara',
    website: 'https://www.frontierparagliding.com',
    phone: '+977-61-466076',
  },
  {
    slug: 'manakamana-cable-car',
    website: 'https://www.manakamana.com.np',
    phone: '+977-65-560025',
  },

  // Amusement parks (already updated in previous session)
  {
    slug: 'kathmandu-fun-park',
    website: 'https://www.kathmandufunpark.com',
    phone: '+977-1-4113232',
  },
  {
    slug: 'central-zoo-kathmandu',
    website: 'https://www.nepalnationalzoo.gov.np',
    phone: '+977-1-5521491',
  },

  // ── Treks ──────────────────────────────────────────────────────────────────
  {
    slug: 'annapurna-conservation-area',
    website: 'https://www.ntnc.org.np',
    phone: '+977-61-465195',
  },
  {
    slug: 'annapurna-circuit-trek',
    website: 'https://www.ntnc.org.np',
    phone: '+977-61-465195',
  },
  {
    slug: 'annapurna-base-camp-trek',
    website: 'https://www.ntnc.org.np',
    phone: '+977-61-465195',
  },
  {
    slug: 'langtang-valley-trek',
    website: 'https://dnpwc.gov.np',
    phone: '+977-10-540028',
  },

  // ── Lakes ──────────────────────────────────────────────────────────────────
  {
    slug: 'phewa-lake',
    website: 'https://pokharatourism.org',
    phone: '+977-61-463390',
  },

  // ── Dharahara ──────────────────────────────────────────────────────────────
  {
    slug: 'dharahara',
    website: 'https://www.kathmandumetro.gov.np',
    phone: '+977-1-4256909',
  },

  // ── Rock climbing / biking ─────────────────────────────────────────────────
  {
    slug: 'rock-climbing-nagarjun-forest',
    website: 'https://www.nepalmountaineering.org',
    phone: '+977-1-4411525',
  },
  {
    slug: 'mountain-biking-kathmandu-valley',
    website: 'https://www.himalayansingletrack.com',
    phone: '+977-1-4700139',
  },
]

// ─── New places to create ─────────────────────────────────────────────────────
const newPlaces = [
  {
    name: 'Mini Great Wall of Bandipur',
    slug: 'mini-great-wall-bandipur',
    category: 'HILL_VIEWPOINT',
    summary:
      'A scenic stone-paved ridgeline trail above Bandipur bazaar that locals call the "Mini Great Wall" — offering sweeping views of the Marsyangdi Valley and snow-capped Himalayan peaks.',
    story: `## Mini Great Wall of Bandipur

Perched above the preserved Newari hilltop town of Bandipur, the so-called "Mini Great Wall" is a narrow stone-paved path that winds along a ridgeline northwest of the bazaar. Though built simply as a local walking track, its elevated position, mountain backdrop, and resemblance to a fortified wall have made it a favourite photo stop for visitors.

### The Walk

The path is roughly 1.5 km long and takes 30–40 minutes to traverse at a leisurely pace. It begins just beyond the Bindhyabasini Temple area and follows the ridge toward Siddha Cave. Along the way, stone steps and low walls line both sides, with uninterrupted views of the Marsyangdi River valley below and peaks including Machhapuchhre, Lamjung Himal, and Annapurna II on clear days.

### Best Time to Visit

Early morning — before 8 AM — is ideal for the clearest mountain views and softer light for photography. The golden hour at sunset is equally rewarding. Avoid midday haze in warmer months.

### What to Combine

Bandipur itself is a delight: a car-free Newari bazaar largely unchanged since the 18th century. Siddha Cave (the largest cave in Nepal) is a 30-minute walk further along the ridge. Viewpoint restaurants on the main bazaar serve excellent dal bhat with valley views.`,
    district: 'Tanahun',
    province: 'GANDAKI',
    lat: 27.9416,
    lng: 84.4131,
    elevation: 1030,
    bestSeason: 'Oct–May',
    openingHours: 'Open 24 hours (outdoor trail)',
    howToGetThere:
      'Bandipur is 140 km west of Kathmandu on the Pokhara highway. Take a Pokhara-bound bus from Kathmandu to Dumre (NPR 350, 3 hrs), then a local jeep up to Bandipur (30 min, NPR 150). The trail starts near the Bindhyabasini Temple, a 5-minute walk from the main bazaar.',
    entryFee: 'Free',
    gygQuery: 'Bandipur',
    bookingCity: 'Bandipur',
    published: true,
    featured: false,
    publishedAt: new Date(),
    seoTitle: 'Mini Great Wall of Bandipur — Ridge Walk with Himalayan Views',
    seoDescription:
      'Walk the "Mini Great Wall" above Bandipur — a scenic stone ridge trail with views of Annapurna, Machhapuchhre, and the Marsyangdi Valley.',
  },
  {
    name: 'The Cliff Kushma',
    slug: 'the-cliff-kushma',
    category: 'ADVENTURE_SPORTS',
    summary:
      'Home to the world\'s longest and highest suspension bridge and one of Asia\'s highest bungee jumps, Kushma is an adventure capital in the Parbat district with dramatic gorge scenery.',
    story: `## The Cliff Kushma

Kushma, a small town in the Parbat district of western Nepal, has emerged as one of Nepal's most exciting adventure destinations — famous for its sky-high suspension bridges and sheer cliff experiences above the Kali Gandaki River gorge.

### Kushma–Gyadi Suspension Bridge

At 343 metres long and hanging 228 metres above the Kali Gandaki River, the Kushma–Gyadi Bridge was once certified as the world's longest and highest suspension bridge. It's a 30-minute walk from Kushma bazaar. The crossing itself is a knee-trembling experience even for the brave — the bridge sways in the wind and the river glimmers far below.

### Bungee Jumping

The bungee platform near the bridge is one of Asia's highest, with jumps from around 228 metres. It is operated seasonally (Oct–May) by local adventure companies. Advance booking is strongly recommended.

### Kushma Bungee & Swing

In addition to the main bungee, a canyon swing and zipline experience are available at the same site, allowing visitors to choose their own level of thrill.

### Getting There

Kushma is accessible from Pokhara in 3–4 hours by bus or jeep. The adventure sites are managed by local operators who can arrange transfers from Pokhara Lakeside.`,
    district: 'Parbat',
    province: 'GANDAKI',
    lat: 28.1011,
    lng: 83.6786,
    elevation: 889,
    bestSeason: 'Oct–May',
    openingHours: 'Daily: 7:00 AM – 5:00 PM (bridge); bungee by appointment',
    howToGetThere:
      'Kushma is 72 km from Pokhara. Take a bus or jeep from Pokhara New Bus Park to Kushma (3–4 hrs, NPR 300). From Kushma bazaar, the suspension bridge is a 30-minute walk downhill.',
    entryFee: 'Bridge entry: NPR 200; Bungee: NPR 8,000–15,000 (varies by operator)',
    website: 'https://www.kushmaadventure.com',
    phone: '+977-67-420010',
    gygQuery: 'Kushma bungee',
    bookingCity: 'Pokhara',
    published: true,
    featured: false,
    publishedAt: new Date(),
    seoTitle: "The Cliff Kushma — World's Highest Suspension Bridge & Bungee",
    seoDescription:
      "Kushma in Parbat district is home to Nepal's most thrilling cliff adventure — the world's longest suspension bridge and one of Asia's highest bungee jumps.",
  },
  {
    name: 'Kalinchowk',
    slug: 'kalinchowk',
    category: 'HILL_VIEWPOINT',
    summary:
      'A sacred Himalayan viewpoint at 3,842 m in Dolakha district, famous for its Kalinchowk Bhagwati Temple and a cable car to the summit with panoramic views of Gaurishankar, Langtang, and dozens of Himalayan peaks.',
    story: `## Kalinchowk

Kalinchowk, at 3,842 metres in the Dolakha district of Bagmati Province, is one of Nepal's most accessible high-altitude destinations. Renowned for both its religious significance and breathtaking mountain views, it draws pilgrims and trekkers alike, especially during the winter months when the summit is blanketed in snow.

### Kalinchowk Bhagwati Temple

The Kalinchowk Bhagwati Temple at the summit is one of Nepal's most revered shrines, dedicated to the goddess Bhagwati. Hundreds of thousands of devotees — particularly from Kathmandu Valley — make the pilgrimage here, especially during the Hindu festivals of Chaitra Dashain and Bada Dashain. The temple itself is small but the spiritual atmosphere, enhanced by the mist and altitude, is powerful.

### Cable Car

A modern cable car operates from Charikot town (the district headquarters at 1,800 m) to just below the summit. The 2.8 km cable car ride takes approximately 12 minutes and eliminates the previous 3–4 hour uphill hike, making the destination far more accessible.

### Mountain Views

On clear days (early morning, October–December), the panorama from Kalinchowk is spectacular — Gauri Shankar (7,134 m), Melungtse, Numbur, and the entire Langtang range dominate the horizon, with the Kathmandu Valley haze visible to the west.

### Snow & Winter Appeal

Kalinchowk is one of the closest places to Kathmandu where visitors can reliably see and play in snow (December–February). This has made it enormously popular as a weekend escape for Kathmandu families during the winter months — it's wise to book accommodation in Charikot well in advance on weekends.`,
    district: 'Dolakha',
    province: 'BAGMATI',
    lat: 27.7481,
    lng: 86.0559,
    elevation: 3842,
    bestSeason: 'Oct–Dec, Mar–May (snow: Dec–Feb)',
    openingHours: 'Cable car: 6:30 AM – 4:30 PM daily; temple open from dawn',
    howToGetThere:
      'Charikot (the base town) is 130 km east of Kathmandu on the BP Highway. Take a direct bus from Kathmandu Old Bus Park to Charikot (5–6 hrs, NPR 400) or hire a private vehicle (4 hrs). From Charikot, take the cable car to the summit.',
    entryFee: 'Cable car: approx. NPR 1,200 return (foreigners); NPR 600 (nationals)',
    website: 'https://kalinchowkcablecar.com.np',
    phone: '+977-49-420018',
    gygQuery: 'Kalinchowk',
    bookingCity: 'Kathmandu',
    published: true,
    featured: false,
    publishedAt: new Date(),
    seoTitle: 'Kalinchowk — Sacred Summit & Himalayan Views from 3,842 m',
    seoDescription:
      'Kalinchowk in Dolakha offers stunning Himalayan panoramas, a revered Bhagwati temple, and a cable car to 3,842 m — the closest snow destination to Kathmandu.',
  },
  {
    name: 'Dolalghat',
    slug: 'dolalghat',
    category: 'ADVENTURE_SPORTS',
    summary:
      'A popular river adventure hub at the confluence of the Indrawati and Sun Koshi rivers, 70 km from Kathmandu — the classic starting point for rafting and kayaking expeditions into the Sun Koshi gorge.',
    story: `## Dolalghat

Dolalghat sits at the confluence of the Indrawati and Sun Koshi rivers, roughly 70 km east of Kathmandu on the Araniko Highway toward the Chinese border. For rafters and kayakers, it marks the beginning of one of Nepal's classic whitewater journeys — the Sun Koshi run.

### Sun Koshi Rafting

The Sun Koshi is considered one of the world's top ten rafting rivers. The classic route begins at Dolalghat and runs 270 km downstream to Chatara in the Terai over 8–10 days, passing through steep forested gorges and Class IV–V rapids. Shorter runs of 2–3 days are also possible, finishing near Harkapur.

### Day Trips from Kathmandu

Dolalghat's proximity to Kathmandu (2 hrs by road) makes it ideal for day rafting trips. Several Kathmandu-based adventure operators run day or overnight raft packages, typically including transport, meals, and camping at riverside beaches.

### Bhotekoshi Option

Just 15 km further up the highway at Balephi, the Bhotekoshi River offers some of the steepest commercial rafting in Nepal — Class IV–V in a narrow gorge. The Last Resort bungee platform is also on the Bhotekoshi.

### Fishing & Camping

Outside the monsoon season (July–August), riverside camping near Dolalghat with fishing in the Sun Koshi is a popular activity for Kathmandu weekenders.`,
    district: 'Kavrepalanchok',
    province: 'BAGMATI',
    lat: 27.6623,
    lng: 85.7381,
    elevation: 640,
    bestSeason: 'Oct–Jun (avoid Jul–Sep monsoon)',
    openingHours: 'No fixed hours (outdoor river site)',
    howToGetThere:
      'Dolalghat is 70 km east of Kathmandu on the Araniko Highway. Take a local bus from Ratna Park to Dolalghat (2 hrs, NPR 150) or hire a private vehicle. Most rafting operators provide transfers from Thamel.',
    entryFee: 'Free to visit; rafting packages NPR 2,000–8,000/day depending on operator',
    gygQuery: 'Sun Koshi rafting Nepal',
    bookingCity: 'Kathmandu',
    published: true,
    featured: false,
    publishedAt: new Date(),
    seoTitle: 'Dolalghat — Sun Koshi Rafting & River Adventures near Kathmandu',
    seoDescription:
      'Dolalghat at the Sun Koshi–Indrawati confluence is the launching point for Nepal\'s best multi-day rafting expeditions, just 2 hours from Kathmandu.',
  },
  {
    name: 'Sinduligadhi',
    slug: 'sinduligadhi',
    category: 'HILL_VIEWPOINT',
    summary:
      'A historic hill fort and panoramic viewpoint in Sindhuli district, site of the legendary 1767 Battle of Sindhuli Gadhi where Nepali forces famously defeated the British East India Company.',
    story: `## Sinduligadhi (Sindhuli Gadhi)

Sinduligadhi — also known as Sindhuli Gadhi — is a historic hill fortress in the Sindhuli district of Madhesh Province, standing at around 1,500 metres above sea level. It occupies a commanding ridge above the Kamala River valley and is one of Nepal's most significant military history sites.

### The Battle of Sindhuli Gadhi (1767)

Sinduligadhi is renowned for the decisive Battle of Sindhuli Gadhi in November 1767, in which Nepali forces under the command of King Prithvi Narayan Shah defeated a well-armed British East India Company force that had marched from Bengal at the invitation of the Kathmandu Valley kings. This Nepali victory is considered a defining moment in the nation's sovereignty and independence. The site is now a source of great national pride.

### The Fort & Museum

The restored fortress walls and bastions can be explored on foot. A small museum near the site commemorates the battle with artefacts, weapons, and historical displays. The Nepal Army maintains the site.

### Panoramic Views

From the top of the ridge, the Mahabharat Range stretches east and west, while the Terai plains and Churia Hills are visible to the south. On clear mornings, Himalayan peaks including Gauri Shankar can be seen to the north.

### Getting There

The site is accessible from Sindhuli Bazaar, the district headquarters, which is connected to Kathmandu by the BP Highway (130 km, 4–5 hrs).`,
    district: 'Sindhuli',
    province: 'MADHESH',
    lat: 27.2800,
    lng: 85.9700,
    elevation: 1500,
    bestSeason: 'Oct–May',
    openingHours: 'Daily: 8:00 AM – 5:00 PM',
    howToGetThere:
      'Sindhuli Bazaar is 130 km from Kathmandu via the BP Highway. Take a direct bus from Kathmandu Old Bus Park to Sindhuli (5 hrs, NPR 350). From Sindhuli Bazaar, hire a local jeep or motorbike taxi to the gadhi site (20 min).',
    entryFee: 'NPR 100 (foreigners); NPR 50 (nationals)',
    phone: '+977-47-520014',
    gygQuery: 'Sindhuli Nepal',
    bookingCity: 'Kathmandu',
    published: true,
    featured: false,
    publishedAt: new Date(),
    seoTitle: 'Sinduligadhi — Nepal\'s Historic Battle Fort & Hilltop Viewpoint',
    seoDescription:
      'Sinduligadhi is the site of Nepal\'s famous 1767 victory over the British East India Company. Explore the fortress ruins and enjoy sweeping Himalayan views in Sindhuli.',
  },
  {
    name: 'Sukute Beach',
    slug: 'sukute-beach',
    category: 'ADVENTURE_SPORTS',
    summary:
      'A sandy river beach on the banks of the Sun Koshi River in Sindhupalchok, 80 km from Kathmandu — the most popular riverside camping and rafting destination in Nepal.',
    story: `## Sukute Beach

Sukute Beach is a wide sandy riverbank on the Sun Koshi River in Sindhupalchok district, roughly 80 km east of Kathmandu along the Araniko Highway. Despite being nowhere near an ocean, the name "beach" is apt — broad stretches of clean golden sand line the river here, making it the most popular riverside escape for Kathmandu Valley residents.

### Rafting & Kayaking

The Sun Koshi at Sukute offers excellent day and half-day rafting on Class II–IV rapids, suitable for beginners and intermediate paddlers. Several professional adventure operators — including Nepal River Runner, Borderless Adventure, and Adventure Extreme — run regular day-trips from Kathmandu that include transport, gear, professional guides, and riverside lunch.

### Riverside Camping

Overnight camping at Sukute is hugely popular, especially on weekends. Equipped camps with tents, meals, and campfire evenings are set up directly on the sandy beach. The sound of the river and clear night skies (far from Kathmandu's light pollution) make for a memorable stay.

### Bungee & Zipline

Several operators at Sukute offer a zipline across the river gorge and a small bungee swing platform — suitable for those seeking a shorter thrill without committing to a full bungee jump.

### Other Activities

- Volleyball, cricket, and football on the beach
- Freshwater fishing
- Cliff jumping at designated safe spots
- Yoga and meditation sessions (some camps offer morning sessions)`,
    district: 'Sindhupalchok',
    province: 'BAGMATI',
    lat: 27.7106,
    lng: 85.8274,
    elevation: 640,
    bestSeason: 'Oct–Jun (avoid Jul–Sep monsoon)',
    openingHours: 'No fixed hours (outdoor beach); camps operate 24 hrs during season',
    howToGetThere:
      'Sukute is 80 km east of Kathmandu on the Araniko Highway (1.5–2 hrs by car). Most visitors join a package trip departing from Thamel. If travelling independently, take a bus from Ratna Park toward the Chinese border and get off at Sukute Bazaar (NPR 200).',
    entryFee: 'Free to access the beach; camping packages NPR 1,500–3,500/person',
    website: 'https://www.nepalriverrunner.com',
    phone: '+977-1-4700139',
    gygQuery: 'Sukute beach rafting Nepal',
    bookingCity: 'Kathmandu',
    published: true,
    featured: false,
    publishedAt: new Date(),
    seoTitle: 'Sukute Beach — Sun Koshi Rafting & Riverside Camping near Kathmandu',
    seoDescription:
      "Nepal's most popular riverside escape — Sukute Beach on the Sun Koshi offers day rafting, overnight camping, bungee, and zipline just 2 hours from Kathmandu.",
  },
  {
    name: 'Narayani River Water Sports',
    slug: 'narayani-river-water-sports',
    category: 'ADVENTURE_SPORTS',
    summary:
      'Thrilling water sports on the Narayani River bordering Chitwan National Park — including motorboat safaris, river surfing, kayaking, and canoeing through some of the most biodiverse river habitat in South Asia.',
    story: `## Narayani River Water Sports

The Narayani River forms the western boundary of Chitwan National Park and flows from the confluence of the Kali Gandaki and Trishuli rivers southward through the Terai. It is one of Nepal's largest rivers and the setting for a growing range of water-based adventures tied to the Chitwan tourism hub.

### Motorboat Safaris

Motorboat trips on the Narayani are an excellent complement to the land-based jungle safaris that Chitwan is famous for. From the river you can spot Gharial crocodiles basking on sandbanks, Gangetic dolphins surfacing in the deeper channels, and — if fortunate — elephants, rhinos, and deer crossing at the water's edge. Sauraha-based operators run morning and afternoon departures.

### Canoe Trips

Quieter canoe trips down the Rapti River (which joins the Narayani) allow for closer wildlife encounters without the noise of a motor. These are typically 1–2 hour trips through the national park buffer zone, highly recommended for birdwatchers.

### River Surfing & Kayaking

Seasonal river surfing on natural wave features in the Narayani is gaining popularity. Stand-up paddleboarding (SUP) and sea kayaking classes are available through operators in Sauraha and Bharatpur.

### Practical Info

All water activities in the Narayani adjacent to Chitwan National Park require a licensed operator. Most Sauraha lodges can arrange bookings directly, or contact the Chitwan Tourism Board in Bharatpur.`,
    district: 'Chitwan',
    province: 'BAGMATI',
    lat: 27.5791,
    lng: 84.5065,
    elevation: 150,
    bestSeason: 'Oct–May',
    openingHours: 'Operators typically depart 6:00 AM – 7:00 AM and 3:00 PM – 4:00 PM',
    howToGetThere:
      'Sauraha is the main gateway. From Kathmandu, take a tourist bus to Sauraha (4–5 hrs, NPR 700) or fly to Bharatpur (25 min) then taxi to Sauraha (30 min). River sports operators are based along the Sauraha waterfront.',
    entryFee: 'Motorboat safari: NPR 1,500–2,500/person; canoe: NPR 800–1,200/person',
    website: 'https://www.chitwanpark.org',
    phone: '+977-56-580237',
    gygQuery: 'Chitwan river safari',
    bookingCity: 'Chitwan',
    published: true,
    featured: false,
    publishedAt: new Date(),
    seoTitle: 'Narayani River Water Sports — Boat Safaris & Kayaking in Chitwan',
    seoDescription:
      'Explore the Narayani River bordering Chitwan National Park by motorboat, canoe, or kayak — spot gharials, dolphins, rhinos and elephants from the water.',
  },
]

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('=== Phase 1: Apply contact fields & clean howToGetThere ===\n')

  let updated = 0
  let notFound = 0

  for (const item of contactUpdates) {
    const place = await prisma.place.findUnique({ where: { slug: item.slug } })
    if (!place) {
      console.warn(`  ⚠  Not found: ${item.slug}`)
      notFound++
      continue
    }

    const cleaned = stripContactBlock(place.howToGetThere)

    await prisma.place.update({
      where: { slug: item.slug },
      data: {
        howToGetThere: cleaned ?? place.howToGetThere,
        ...(item.website !== undefined && { website: item.website }),
        ...(item.phone   !== undefined && { phone:   item.phone   }),
        ...(item.email   !== undefined && { email:   item.email   }),
      },
    })

    console.log(`  ✅ ${item.slug}`)
    updated++
  }

  console.log(`\nPhase 1 done — ${updated} updated, ${notFound} not found\n`)

  // ─── Phase 2: Create missing places ──────────────────────────────────────
  console.log('=== Phase 2: Create missing places ===\n')

  let created = 0
  let skipped = 0

  for (const place of newPlaces) {
    const existing = await prisma.place.findUnique({ where: { slug: place.slug } })
    if (existing) {
      console.log(`  ⏭  Already exists: ${place.slug}`)
      skipped++
      continue
    }

    await prisma.place.create({ data: place })
    console.log(`  ✅ Created: ${place.name}`)
    created++
  }

  console.log(`\nPhase 2 done — ${created} created, ${skipped} skipped\n`)
  console.log('=== All done ===')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
