import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const stories = [
  {
    slug: 'mit-mitini-sworn-friendship',
    title: 'Mit and Mitini: Nepal\'s Sacred Bond of Sworn Friendship',
    category: 'TRADITION',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Best_friends_%281934%29%2C_by_Romualdo_Locatelli.jpg/1280px-Best_friends_%281934%29%2C_by_Romualdo_Locatelli.jpg',
    excerpt: 'Mit and Mitini are the Nepali tradition of choosing a non-blood sibling — a sworn friend elevated to family. The relationship is formalised at a temple, treated as binding across generations, and carries real social obligations of mutual support and loyalty.',
    relatedPlaceSlugs: [],
    content: `## A Bond Beyond Blood

Most societies have ways of recognising deep friendships that feel like family. Nepal formalised this through the institution of **Mit** (for men) and **Mitini** (for women) — sworn friends who choose each other as fictive siblings, creating a bond with the weight of family obligation.

The word *mit* likely derives from *mitra* (Sanskrit for friend, ally, and one of the names of the sun god). The relationship elevates friendship beyond sentiment into social structure.

## The Ceremony

Becoming Mit or Mitini is not merely a promise between friends — it is a religious ceremony conducted at a **temple** or sacred site. The two individuals:

- Bring offerings (flowers, fruits, incense, oil lamps)
- Worship the deity together before the idol
- Exchange garlands (in some traditions)
- Receive tika from a priest or elder
- Make verbal vows of mutual support and loyalty
- Share a meal together — often dahi chiura (yoghurt and beaten rice), the food of sacred occasions

After this ceremony, the two individuals address each other's families as their own: the Mit's mother is called *Ama* (mother), his siblings are addressed as brothers and sisters, and children of Mit/Mitini pairs often continue the bond into the next generation.

## Social Obligations

The Mit/Mitini relationship carries genuine social weight:

- At weddings, the Mit or Mitini has specific ceremonial roles — sitting beside the family during rituals, helping with preparations
- At funerals, the Mit observes mourning rites alongside blood relatives
- During festivals — especially Bhai Tika — Mitini pairs exchange tika just as siblings do
- Financial and practical help during difficulty is expected, not optional
- The relationship is explicitly non-romantic; romantic involvement between Mits is treated with the same gravity as between siblings

## Who Chooses a Mit

The choice of a Mit is significant. People choose someone they trust completely, admire, and want bound to their family across time. In some communities, particularly in hilly regions, certain friendships are designated as Mit from childhood — parents choosing compatible families to unite.

For people who move far from their home districts or have lost family members, Mit relationships provide a substitute family structure in new places. This makes the tradition particularly valuable in Nepal's migrant communities — both domestic migrants moving to Kathmandu, and those working abroad.

## The Tradition Today

While urbanisation and changing social patterns have reduced the formality of the Mit ceremony in some communities, the concept remains deeply understood across Nepal. Someone introduced as a friend's *mit* is immediately treated with family-level courtesy. The word conveys: this person matters in a way that goes beyond ordinary friendship, and the relationship has been consecrated.`,
    seoTitle: 'Mit and Mitini: Nepal\'s Tradition of Sacred Sworn Friendship',
    seoDescription: 'How the Nepali tradition of Mit and Mitini creates sworn non-blood siblings through a temple ceremony, with real social obligations across generations.',
  },
  {
    slug: 'devghat-sacred-confluence',
    title: 'Devghat: Where Rivers Meet and Souls Find Liberation',
    category: 'PILGRIMAGE',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Devghat_Baati.jpg/1280px-Devghat_Baati.jpg',
    excerpt: 'Devghat sits at the confluence of the Seti and Trishuli rivers — where they become the Narayani. Hindus believe dying here grants moksha (liberation). Elderly Nepalis come to spend their final days beside the water, and every Makar Sankranti draws hundreds of thousands of pilgrims.',
    relatedPlaceSlugs: ['devghat'],
    content: `## The Sacred Confluence

**Devghat** (Deoghat) sits in Tanahun district at the confluence of the **Seti Gandaki** and **Trishuli rivers**, where they join to form the **Narayani River** — one of Nepal's most important waterways, which eventually flows into the Ganges in India.

In Hindu geography, the confluence of rivers (sangam) is considered especially sacred — a meeting place where divine energies concentrate. The most famous sangam in the Hindu world is at Prayagraj (Allahabad) in India, where the Ganga, Yamuna, and the mythical Saraswati meet. Devghat holds a similar position in Nepal's spiritual landscape: a place where sacred waters converge and where the boundary between ordinary life and moksha (liberation) becomes thin.

## The Promise of Liberation

The central belief at Devghat is ancient: **those who die at the Narayani confluence at Devghat attain moksha** — liberation from the cycle of rebirth — regardless of their accumulated karma. This belief has led generations of elderly Nepalis to come to Devghat to spend their final years or months, seeking to depart from this life at the most auspicious possible spot.

The ashrams and dharmashalas (pilgrim rest houses) along the Devghat riverbank are full of elderly residents who have come, often from distant villages and districts, to complete their lives here. They live simply — praying, bathing in the sacred confluence, tending to the temples, listening to scripture. When they die, their bodies are cremated at the river's edge.

## The Makar Sankranti Pilgrimage

Every year on **Makar Sankranti** (January 14–15 in the Gregorian calendar) — the day the sun enters Capricorn (Makara), one of the most auspicious solar transitions — Devghat hosts one of Nepal's largest religious gatherings: the **Devghat Mahotsav**.

Hundreds of thousands of pilgrims converge from across Nepal and from India. They take a holy dip at the confluence, perform shraddha (ancestral rites) for deceased family members, and worship at the dozens of temples lining the riverbank. The air fills with the sound of conch shells, bhajans (devotional songs), and the smell of incense.

Key temples at Devghat include shrines to **Narayan (Vishnu)**, **Shiva**, **Sita Ram**, and various Shakti goddesses, as well as a famous **Dattatreya** temple. The site has been a continuous pilgrimage destination for centuries — ancient texts mention it as one of the most powerful pilgrimage places in the Nepal-Tibet-India region.

## The Rishis of Devghat

Devghat is associated with several important sages from Hindu mythology. The sage **Durvasa** — known for his volatile temper and powerful curses — is said to have meditated here. The sage **Dattatreya** — an avatar considered to combine Brahma, Vishnu, and Shiva — has a major presence at the site.

These associations reinforce Devghat's character as a place where extraordinary spiritual concentration is possible — where the intensity of tapasya (austerities) performed through the ages has infused the place with an accumulated spiritual power that benefits all who come.`,
    seoTitle: 'Devghat: Nepal\'s Sacred Confluence and Pilgrimage of Liberation',
    seoDescription: 'Why Devghat at the Narayani river confluence is considered a gateway to moksha — the beliefs, the Makar Sankranti pilgrimage, and why elderly Nepalis come here to die.',
  },
  {
    slug: 'char-dham-nepal',
    title: 'Char Dham of Nepal: The Four Sacred Pilgrimages',
    category: 'PILGRIMAGE',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Pashupatinath_Temple-2020.jpg/1280px-Pashupatinath_Temple-2020.jpg',
    excerpt: 'Nepal has its own Char Dham — four sacred sites whose combined pilgrimage is believed to lead to liberation. Unlike India\'s Char Dham scattered across four corners of the subcontinent, Nepal\'s are all within the country: Pashupatinath, Muktinath, Manakamana, and Baraha Kshetra.',
    relatedPlaceSlugs: ['pashupatinath-temple', 'muktinath-temple', 'manakamana-temple'],
    content: `## The Concept of Char Dham

**Char Dham** (four abodes) is the concept of four sacred pilgrimage sites whose combined visit constitutes a complete spiritual journey. The most famous Char Dham is India's — Badrinath (north), Dwarka (west), Puri (east), and Rameswaram (south) — the four sites established by Adi Shankaracharya in the 8th century CE.

Nepal has its own Char Dham tradition, with four sites of supreme importance within the country's borders. Completing all four is believed to wash away accumulated sin, fulfil dharmic duty, and move the pilgrim significantly toward liberation.

## Pashupatinath — Lord of All Living Beings

**Pashupatinath Temple** in Kathmandu is Nepal's most sacred site and the pre-eminent Shiva temple in the entire Himalayan region. The main linga (sacred form of Shiva) within the inner sanctum is a **Chaturmukha Linga** — a four-faced Shiva representing the four directions, with a fifth face on top pointing toward the sky.

The temple is listed as a UNESCO World Heritage Site and is believed to have stood in some form since at least the 5th century CE, though oral tradition pushes the date back much further. Only Hindus may enter the main temple; non-Hindu visitors observe from across the Bagmati river.

**Pashupati** means "lord of all living beings (pashus)" — Shiva as the protector of all souls, animal and human, still bound by the earthly cycle (pashu = one who is bound).

## Muktinath — The Place of Liberation

**Muktinath** in the Mustang district at 3,710 metres is one of the most sacred sites in the Himalayan world — revered equally by Hindus and Tibetan Buddhists. For Hindus, Muktinath is a **Vishnu temple** (Muktinath = "lord of liberation"), where the fire, water, and earth elements manifest together in a miraculous natural phenomenon: **108 water spouts**, a **natural flame** (fed by natural gas), and a **natural spring** — all at the same sacred complex.

Bathing in all 108 water spouts is believed to wash away sins accumulated over many lifetimes. Muktinath is also identified as one of the **108 Divya Desams** (sacred Vishnu temples) venerated in Tamil Vaishnava tradition, making it one of the few sites in Nepal to have sacred status in South Indian religious culture as well.

The Shaligram fossils found in the nearby **Kali Gandaki river** are considered direct manifestations of Vishnu — pilgrims collect them as sacred objects representing the deity.

## Manakamana — The Wish-Fulfilling Goddess

**Manakamana Temple** sits on a ridge in Gorkha district, accessible by cable car from the Trisuli valley. The goddess **Manakamana** — whose name means "heart's desire" — is one of Nepal's most beloved deities, worshipped as an aspect of **Bhagawati** (Durga).

The temple's origin legend holds that a queen of the Gorkha kingdom possessed divine powers through her devotion. After her death, she manifested as the goddess at this spot. Devotees climb to the temple (or take the cable car) to make specific wishes, often accompanied by animal sacrifices, and believe the goddess grants sincere requests with remarkable reliability.

The temple sees perhaps more regular devotees than any other site in Nepal — on weekends and auspicious days, the cable car lines stretch for hours.

## Baraha Kshetra — The Boar Incarnation

**Baraha Kshetra** (also called Barahakshetra) in Sunsari district in eastern Nepal is the fourth Char Dham site. This is the sacred place where **Varaha** — Vishnu's boar avatar — is believed to have emerged from the earth to slay the demon Hiranyaksha who had submerged the world in the cosmic ocean.

The confluence of the Koshi and Saptakoshi rivers here is considered among the holiest spots in the Terai. The site is particularly important for eastern Nepal and receives large numbers of pilgrims during Makar Sankranti and other auspicious occasions.

Together, these four sites represent Shiva (Pashupatinath), Vishnu (Muktinath and Baraha Kshetra), and Shakti (Manakamana) — the complete divine trinity of Nepal's Hindu cosmos.`,
    seoTitle: 'Char Dham of Nepal: Pashupatinath, Muktinath, Manakamana, Baraha Kshetra',
    seoDescription: 'Nepal\'s four sacred Char Dham pilgrimage sites — Pashupatinath, Muktinath, Manakamana, and Baraha Kshetra — and why completing them leads to liberation.',
  },
  {
    slug: 'char-narayan-kathmandu-valley',
    title: 'Char Narayan: The Four Vishnu Temples of Kathmandu Valley',
    category: 'PILGRIMAGE',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Nepal_-_Changu_Narayan_%283566057331%29.jpg',
    excerpt: 'Four ancient Vishnu (Narayan) temples guard the four directions of the Kathmandu Valley. Visiting all four — Changu Narayan, Bishankhu Narayan, Shesh Narayan, and Ichangu Narayan — is considered a complete act of Vishnu worship, protecting the pilgrim and the valley.',
    relatedPlaceSlugs: ['changu-narayan'],
    content: `## Vishnu as Valley Guardian

The Kathmandu Valley is understood in Newar religious geography as a **mandala** — a sacred diagram representing the cosmos. Like a mandala, it has a centre and four directional guardians. Four ancient Narayan (Vishnu) temples mark the four cardinal directions of the valley, placed there — according to tradition — to protect it from demons, natural disasters, and cosmic imbalance.

Together they are the **Char (Four) Narayan** — and visiting all four in a single pilgrimage is considered an act of immense merit.

## Changu Narayan (East) — Nepal's Oldest Temple

**Changu Narayan** sits on a hilltop in Bhaktapur district, overlooking the eastern part of the valley. It is Nepal's oldest surviving temple — inscriptions within the complex date to the 5th century CE (the Licchavi period), and the site is believed to have been sacred since far earlier.

The temple houses a remarkable collection of ancient stone sculptures, including some of the finest examples of Licchavi-era craftsmanship in existence: a 5th-century Vishnu image showing him as Vishwarupa (the cosmic form), a figure of Garuda kneeling in devotion, and intricate multi-armed forms of Vishnu in various manifestations.

Changu Narayan is a UNESCO World Heritage Site and represents Nepal's living artistic and spiritual heritage. The main deity is **Changu Narayan** — Vishnu in the form of a ten-armed cosmic lord.

## Bishankhu Narayan (South)

**Bishankhu Narayan** is located in a rocky forest in Godawari, Lalitpur district, in the southern part of the valley. The temple is cut into a natural rock face; the inner sanctum requires devotees to crawl through a narrow opening, symbolic of rebirth.

Legend holds that this is where Vishnu defeated the demon **Bhasmasura** — a demon who had received the boon that whatever he touched with his right hand would turn to ash. Vishnu, in the form of a beautiful woman (Mohini), tricked Bhasmasura into placing his own hand on his head, destroying himself.

The temple is reached through forest trails and retains a quiet, timeless atmosphere.

## Ichangu Narayan (West)

**Ichangu Narayan** sits on a small hill at Ichangu village in the western part of the valley, near Thankot. The temple is associated with the Licchavi period and is particularly revered by the Newar community of the western valley.

The deity here is Vishnu as **Sesh Narayan** in some traditions, but the primary designation is Ichangu Narayan. The temple sees large gatherings during Haribodini Ekadashi (when Vishnu is believed to awaken from his cosmic sleep) and on other Vaishnava festival days.

## Shesh Narayan (North/South-West)

**Shesh Narayan** is located at Pharping in Lalitpur district, in a spectacular setting at the base of a cliff with natural springs. The deity rests on **Shesh** (the thousand-headed cosmic serpent) — the form of Vishnu resting on the waters between cosmic cycles.

Pharping is also the location of the **Yanglesho Cave**, one of Guru Rinpoche (Padmasambhava's) most important meditation sites, making Shesh Narayan temple part of a broader sacred landscape honoured by both Hindus and Buddhists.

The spring waters at Shesh Narayan are considered particularly sacred for removing obstacles (Vishnu as remover of hindrances) and for healing.

## The Complete Pilgrimage

Nepali families traditionally undertake the Char Narayan pilgrimage on auspicious occasions — completing a wish, preparing for an important life event, or simply fulfilling a vow. Visiting all four in a day is considered especially meritorious, as it encompasses all four directions and offers the entire valley's spiritual protection in a single act of devotion.`,
    seoTitle: 'Char Narayan: The Four Vishnu Temples Guarding Kathmandu Valley',
    seoDescription: 'The four ancient Narayan (Vishnu) temples guarding the Kathmandu Valley — Changu Narayan, Bishankhu Narayan, Ichangu Narayan, Shesh Narayan — and their significance.',
  },
]

for (const s of stories) {
  await prisma.story.upsert({
    where: { slug: s.slug },
    update: s,
    create: { ...s, published: true, publishedAt: new Date() },
  })
  console.log('✓', s.title)
}

await prisma.$disconnect()
console.log('Batch 7 done — 4 stories')
