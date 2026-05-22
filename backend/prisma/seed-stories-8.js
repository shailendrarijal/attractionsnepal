import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const stories = [
  {
    slug: 'char-binayak-kathmandu-valley',
    title: 'Char Binayak: The Four Ganesha Guardians of the Kathmandu Valley',
    category: 'PILGRIMAGE',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Ganesha_Basohli_miniature_circa_1730_Dubost_p73.jpg',
    excerpt: 'Four ancient Ganesh shrines guard the four directions of the Kathmandu Valley. Visiting all four — Chandra Binayak, Surya Binayak, Jal Binayak, and Karu Binayak — in a single pilgrimage is believed to remove all obstacles and protect every aspect of life.',
    relatedPlaceSlugs: [],
    content: `## Ganesh as the Remover of Obstacles

**Ganesha** (Ganesh, Ganapati, Vinayak, Binayak) is the elephant-headed son of Shiva and Parvati — the first deity invoked before any undertaking, the remover of obstacles, and the lord of beginnings. No puja, wedding, journey, business venture, or construction project begins in Nepal without first honouring Ganesh.

His name **Binayak** (from Sanskrit *Vinayaka* — he who leads, he who removes obstacles) is the form most commonly used in Nepal's Newar tradition. He is depicted with an elephant head, a large belly, four arms, and his vehicle — the small mouse (mushak) — who can slip through any obstacle no matter how small the gap.

## The Four Binayaks

Just as four Narayan temples guard the valley as Vishnu, and four Ashta Matrikas are placed at cardinal boundaries, **four Binayak (Ganesh) temples** guard the four directions of the Kathmandu Valley, each associated with a specific domain of protection:

### Chandra Binayak (East) — Healer of Diseases

**Chandra Vinayak** (Chandra Binayak) is located at Chhapagaon village in Lalitpur district, in the eastern sector of the valley. This Ganesh is associated with **Chandra** (the moon) and is specifically worshipped for healing from illness. Devotees suffering from chronic ailments, skin diseases, and difficult-to-cure conditions come to this shrine seeking relief.

The deity is carved in stone and has been worshipped for centuries. The presiding Ganesh here is believed to have particular power over ailments that modern medicine struggles to explain — the category of misfortune that Nepalis call *dosh* (affliction caused by planetary or karmic factors).

### Surya Binayak (Southeast) — Remover of All Obstacles

**Surya Binayak** at Bhaktapur is one of the most visited Ganesh temples in the Kathmandu Valley. Located on a hillock near the Bagmati river at the edge of Bhaktapur, this Ganesh is associated with **Surya** (the sun) and is considered especially powerful for removing obstacles blocking success, career, marriage, or any important life endeavour.

The temple sees enormous crowds on every Wednesday (Ganesh's sacred day) and on the fourth day of the bright fortnight (Ganesh Chaturthi). The uphill walk through forest to reach the shrine is itself considered a form of devotional effort.

### Jal Binayak (Southwest) — Protector of Travellers

**Jal Binayak** (Jala Vinayak) is located at Chovar, at the point where the Bagmati river cuts through the valley rim — the very gorge that Manjushree is said to have created with his sword. The deity here is carved from a single massive rock at the river's edge and is associated with **Jal** (water), protection during journeys across water, and protection from floods.

Chovar is itself a sacred location — the place where the valley's mythic lake drained. The Jal Binayak temple stands at this cosmically significant spot, making it one of the most powerful Ganesh shrines in the valley.

### Karu Binayak (North) — Bestower of Prosperity

**Karu Binayak** (sometimes called Ichangu Vinayak or Vikrant Vinayak depending on local tradition) is in the northern part of the valley, associated with material prosperity, business success, and the removal of financial obstacles.

## The Complete Pilgrimage

Visiting all four Binayaks in a single day — the **Char Binayak yatra** — is one of the most meritorious acts a devotee can perform. The journey encompasses all four directions, all four aspects of human welfare (health, success, safe travel, prosperity), and offers the entire valley's Ganesha blessing in one act of devotion.

Wednesday is considered the most auspicious day for Ganesh worship. Ganesh Chaturthi (the fourth day of Bhadra's bright fortnight) draws the largest crowds to all four shrines simultaneously.`,
    seoTitle: 'Char Binayak: The Four Ganesh Temples of Kathmandu Valley',
    seoDescription: 'The four Binayak (Ganesh) temples guarding the Kathmandu Valley — Chandra Binayak, Surya Binayak, Jal Binayak, and Karu Binayak — and their significance.',
  },
  {
    slug: 'asta-matrika-kathmandu',
    title: 'Asta Matrika: The Eight Mother Goddesses of Kathmandu',
    category: 'DEITY',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Mahishasura-Mardini_Durga.jpg',
    excerpt: 'Eight fierce mother goddesses — the Asta Matrika — guard the eight directions of the Kathmandu Valley, placed at its boundaries to protect the city from demons and disease. Each is a distinct emanation of Durga\'s power, and together they form a complete cosmic shield.',
    relatedPlaceSlugs: ['kathmandu-durbar-square', 'pashupatinath-temple'],
    content: `## The Origin of the Matrikas

In Hindu cosmology, when the gods faced demons too powerful to defeat alone, their combined powers and energies took on female forms — the **Matrikas** (divine mothers). These fierce goddesses are understood as the concentrated shakti (divine energy) of the male gods, manifesting in the most powerful, uncompromising form possible.

The **Asta Matrika** (eight mother goddesses) are worshipped across South Asia, but in the Kathmandu Valley they hold a uniquely central role in the city's sacred geography. They are not merely objects of worship — they are the valley's protective force field, stationed at its perimeter to prevent evil from entering.

## The Eight Goddesses

Each Matrika is an emanation of a specific male god's power in its feminine, unrestrained form:

**1. Brahmayani** — The shakti of Brahma, the creator. She rides a swan (or goose), carries a water pot, rosary, and Brahma's attributes. She represents the primordial creative energy.

**2. Maheshwari (Maheswari)** — The shakti of Shiva (Maheshwara). She rides a bull (Nandi), carries a trident, damaru (small drum), and shows the gestures of protection and blessing. The most serene of the eight.

**3. Kumari** — The shakti of Kartikeya (Kumar/Skanda), the god of war. She rides a peacock, carries a spear and cock (rooster). Not to be confused with the living Kumari goddess — this is the divine form.

**4. Vaishnavi** — The shakti of Vishnu. She rides Garuda (the eagle), carries a conch, chakra (disc), mace, and lotus. Her blue-black complexion reflects Vishnu's own colour.

**5. Varahi** — The shakti of Varaha (Vishnu's boar avatar). She has a boar's head and human body, carries various weapons. She is considered particularly powerful against evil spirits and black magic.

**6. Indrayani (Aindri)** — The shakti of Indra, king of the gods. She rides an elephant (Indra's vehicle Airavata), carries a thunderbolt (vajra), and has multiple arms.

**7. Chamunda (Chamundi)** — Perhaps the most fearsome of the eight. She is the form that Durga took to kill the demons Chanda and Munda. Emaciated, garland of skulls, seated on a corpse — she represents the most extreme form of divine destruction.

**8. Mahalakshmi** — The eighth is sometimes listed as Mahalakshmi or Tripura Sundari, depending on the tradition. She represents the complete integration of all divine feminine power.

## Sacred Placement in the Valley

In the Kathmandu Valley tradition, the Asta Matrikas are placed at the eight directional points of the city — the four cardinal and four intermediate directions — forming a **yantra** (sacred diagram) on the landscape itself. Their shrines mark the boundary of sacred space.

Key Matrika temples in Kathmandu include:
- **Lumadhi** (Indrachwok area) — a major Matrika complex
- **Nava Durga temples** in Bhaktapur — a related tradition with nine forms
- Matrika images carved into the struts of major temples including **Pashupatinath**

## Kumari and the Matrika Tradition

The tradition of the living **Kumari** (living goddess) is deeply connected to the Matrika concept. The Kumari is understood as a living vessel of the goddess energy — specifically Durga/Taleju — inhabiting a young girl who has been selected through rigorous ritual criteria. The Matrikas and the Kumari together represent the complete spectrum of divine feminine energy in the valley: the cosmic fixed guardians at the boundaries, and the living, mobile divine power at the centre.

## The Dashain Connection

During **Dashain** — the festival of Durga worship — the Asta Matrika receive special worship on the eighth night (Maha Ashtami), when the boundary between the human and divine is at its most permeable. This is the night when the goddess is at the peak of her power, having fought the demon army for seven days, and the Matrikas are honoured as her most formidable aspects.`,
    seoTitle: 'Asta Matrika: The Eight Mother Goddesses Protecting Kathmandu',
    seoDescription: 'Who are the Asta Matrika — the eight divine mother goddesses placed at the boundaries of the Kathmandu Valley to protect the city from evil.',
  },
  {
    slug: 'shaligram-kali-gandaki-vishnu',
    title: 'Shaligram: Vishnu in a Stone, Found Only in the Kali Gandaki',
    category: 'TRADITION',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/The_Muktinath_Temple.jpg/1280px-The_Muktinath_Temple.jpg',
    excerpt: 'In the Kali Gandaki river gorge near Muktinath, devotees collect black ammonite fossils called Shaligram. These smooth, spiral-marked stones are considered direct manifestations of Vishnu himself — the only form of Vishnu that requires no consecration ceremony, sacred from the moment of discovery.',
    relatedPlaceSlugs: ['muktinath-temple'],
    content: `## What is a Shaligram

**Shaligram** (also spelled Saligrama or Shalagram) are black or dark grey ammonite fossils — the fossilised remains of ancient cephalopod molluscs — found in the bed of the **Kali Gandaki river** in the Mustang and Myagdi districts of Nepal. They range in size from a marble to a grapefruit, are usually smooth and rounded from river polishing, and are marked with spiral patterns from the fossil's internal structure.

To Hindu devotees, these are not merely interesting geological specimens. They are **svayambhu** manifestations of **Vishnu** — self-arising sacred objects that are considered identical to the deity himself.

## Why the Kali Gandaki

The Kali Gandaki carves one of the deepest gorges in the world as it cuts through the Himalayas between Annapurna and Dhaulagiri, both over 8,000 metres. The river descends from Tibet through the rain shadow of Mustang, passing through ancient Tethys Sea sediments that were once the floor of the ocean before the subcontinent collided with Asia.

The ammonites preserved in these sediments date from the Cretaceous and Jurassic periods — 65 to 145 million years old. The river continually erodes the riverbed, releasing new Shaligrams that tumble downstream.

The specific association with the Kali Gandaki and Vishnu is ancient. The area around **Muktinath** is one of the most sacred Vishnu pilgrimage sites in the Himalayan world. In Vaishnavite theology, the coincidence of a sacred river, a major Vishnu temple, and the presence of these sacred stones is not accidental — it is a convergence of divine intent.

## Sacred Without Consecration

What makes Shaligram uniquely significant in Hindu practice is this: **a Shaligram requires no prana pratishtha** (consecration ceremony) to be a living deity. Most Hindu images — stone sculptures, metal idols, painted forms — must undergo an elaborate ritual in which the deity is invoked into the form through ceremony, sacred fire, mantras, and the priest's intention.

Shaligrams are exempt from this requirement. They are considered to already contain the divine presence by their very nature. This makes them accessible to households that cannot afford a formal installation ceremony, and portable for those who travel or migrate.

## Types and Markings

Shaligrams are classified by their markings, colouration, number of spirals (chakras), and other features, with different types associated with different forms of Vishnu:

- **Single spiral (chakra)** — Lakshminarayan
- **Two spirals** — Vishnu with Lakshmi
- **Four spirals** — Chaturbhuja (four-armed Vishnu)
- **Gold or reddish tinge** — considered especially auspicious
- **Sudarshana markings** — resembling Vishnu's discus

Vaishnavite priests and scholars have elaborate classification systems distinguishing dozens of types.

## Daily Worship

In traditional Brahmin and Vaishnava households across Nepal and India, the Shaligram is worshipped daily:

- Bathed in water (the water is considered sacred — **Shaligram jal**)
- Offered tulsi (holy basil) leaves — considered essential for Vishnu worship
- Anointed with sandalwood paste
- Offered flowers, incense, and a lamp
- The water used for bathing is consumed as *charnamrit* (sacred foot-nectar)

The Shaligram is often kept wrapped in cloth or in a small wooden box when not being worshipped, and passed down through generations as one of a household's most sacred possessions.

## The Pilgrimage to Muktinath

Pilgrims to **Muktinath** — one of Nepal's Char Dham and a site venerated by both Hindus and Tibetan Buddhists — almost invariably visit the Kali Gandaki riverbed to search for Shaligrams. The act of finding one during a pilgrimage is considered extraordinarily auspicious — as if Vishnu himself has chosen to come home with you.

The most prized discoveries are those found at the bend of the river near **Damodar Kunda** or the Muktinath area, where the fossil content is highest and the pilgrimage merit of the location is greatest.`,
    seoTitle: 'Shaligram: The Sacred Vishnu Fossils of the Kali Gandaki River',
    seoDescription: 'Why the black ammonite fossils called Shaligram, found only in the Kali Gandaki river, are worshipped as direct manifestations of Vishnu in Nepal.',
  },
  {
    slug: 'sacred-plants-nepali-puja',
    title: 'Sacred Plants of Nepal: Tulsi, Kush, Peepal, Parijat, Kamal, and Tejpatta',
    category: 'RITUAL',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Tulsi_or_Tulasi_Holy_basil.jpg/1280px-Tulsi_or_Tulasi_Holy_basil.jpg',
    excerpt: 'Every plant used in Nepali puja has a story. Tulsi is Vishnu\'s consort in plant form. Kush grass enables ancestors to receive offerings. The Peepal tree is where the Buddha was enlightened. Parijat emerged from the churning of the ocean. Each plant is a living bridge to the divine.',
    relatedPlaceSlugs: [],
    content: `## Plants as Divine Presences

In Nepal's Hindu and Buddhist traditions, certain plants are not merely natural objects — they are considered direct presences of the divine, vehicles through which sacred energy flows into the material world. Using the wrong leaf in a puja is not merely incorrect; it is believed to diminish or redirect the ritual's effect. Using the right one creates a direct channel.

## Tulsi (Holy Basil) — Vishnu's Consort

**Tulsi** (*Ocimum tenuiflorum* — holy basil) is the most sacred plant in Nepali and Indian Hindu tradition. She is not merely associated with Vishnu — she is understood as his **devoted consort in plant form**.

The myth: **Vrinda** was a devoted woman whose piety made her husband Jalandhar invincible. Vishnu, to help the gods, deceived Vrinda by disguising himself as her husband. When she discovered the deception, her chastity broken, Jalandhar's invincibility shattered. Vishnu, moved by her grief and devotion, transformed her into the Tulsi plant — keeping her eternally close to him. All Vishnu worship must include Tulsi; the god will not accept offerings presented without her.

Tulsi plants are grown in almost every traditional Nepali household in a special pedestal (**Tulsi mancha**). Every morning, women water the plant, offer incense and a lamp, and circumambulate it. During Kartik month (October–November), the Tulsi mancha is lit with a butter lamp every evening. The **Tulsi Vivah** ceremony — marrying the Tulsi plant to Vishnu — marks the end of the Hindu marriage-inauspicious period and the opening of the wedding season.

## Kush Grass — The Ancestor's Antenna

**Kush** (Darbha grass, *Desmostachya bipinnata* or *Eragrostis cynosuroides*) is a sharp-edged sacred grass used in almost every Vedic ritual but most essentially in **Shraddha** (ancestral rites) and death ceremonies.

Kush grass acts as a **conductor** between the living and the dead — a ritual technology for transmitting offerings across the boundary between worlds. Priests performing Shraddha hold Kush grass rings on their fingers; the offerings placed on Kush are believed to be receivable by the ancestors. The Garuda Purana specifies that Shraddha offerings laid on the ground without Kush grass do not reach the ancestors at all.

The grass's sharpness is also protective — Kush laid at the threshold of a ritual space creates a boundary that spirits cannot cross.

## Peepal Tree — The Tree of Enlightenment and Ancestors

The **Peepal tree** (*Ficus religiosa* — sacred fig) is among the most venerated trees in South Asia. Its associations span Hinduism, Buddhism, and Jainism:

- **For Buddhists**: The Peepal is the **Bodhi tree** — the exact species under which Siddhartha Gautama attained enlightenment at Bodh Gaya. Every Peepal tree is therefore a descendant or echo of that original enlightenment.
- **For Hindus**: Vishnu is said to reside in the Peepal on Saturdays. The tree is also associated with Brahma (roots), Vishnu (trunk), and Shiva (crown). Cutting a Peepal is believed to bring misfortune.
- **For ancestors**: The Peepal is believed to be inhabited by the spirits of the recently deceased. This is why Shraddha offerings are made at Peepal trees, and why the tree should never be disturbed at night — ancestral spirits congregate there.

In Nepal, Peepal trees at crossroads and intersections are almost always accompanied by a small shrine. People tie threads around their trunks while making vows, and women circumambulate them while fasting.

## Parijat (Night Jasmine) — From the Cosmic Ocean

**Parijat** (*Nyctanthes arbor-tristis* — night-flowering jasmine, also called Coral jasmine) emerged from the **Samudra Manthan** (churning of the cosmic ocean) as one of its divine treasures. Its white flowers with orange stems bloom and fall overnight, carpeting the ground at dawn — hence its other name, "tree of sorrow" (*arbor-tristis*), because the flowers fall as if weeping by day.

In the Mahabharata, a celestial Parijat tree existed in Indra's heaven. Krishna, at Satyabhama's insistence, stole the tree from Indra and brought it to earth. The tree was eventually returned to heaven.

Parijat flowers are used in **Vishnu and Krishna puja** — their delicate beauty and heavenly origin make them among the most prized offerings. The flowers must be used fresh and must have fallen naturally from the tree; picking them is considered inappropriate.

## Kamal (Lotus) — The Symbol of Enlightenment

The **lotus** (*Nelumbo nucifera*) is the most universal symbol in both Hindu and Buddhist iconography. Growing from muddy water to produce an immaculate flower that repels dirt and water, the lotus represents:

- **Spiritual liberation**: the soul rising from the mud of samsara to bloom in purity
- **Lakshmi**: the goddess of prosperity was born seated on a lotus
- **Brahma**: the creator god sits on a lotus that emerges from Vishnu's navel
- **The Buddha**: depicted seated on a lotus throne

Lotus petals and leaves are used in puja across Nepal. Lotus motifs appear in virtually every temple, stupa, and religious painting. The lotus pond at **Lumbini** near the Mayadevi Temple marks where Queen Mayadevi bathed before giving birth to the Buddha.

## Tejpatta (Bay Leaf) — Fragrance and Protection

**Tejpatta** (*Cinnamomum tamala* — Indian bay leaf, also called Malabar leaf) is a fragrant leaf used both in Nepali cooking and in ritual contexts. Its sharp, clove-like fragrance is believed to be pleasing to the deities and to create a purified ritual atmosphere.

Tejpatta leaves are used in:
- **Havan (sacred fire ceremony)**: added to the fire with ghee as an aromatic offering
- **Puja**: placed as one of the five or ten leaf offerings alongside tulsi, bel leaves, etc.
- **Ayurvedic preparations**: used in ritual healing contexts

The combination of fragrance and fire purification makes Tejpatta an integral part of the complete puja leaf set, ensuring all the senses — smell, sight, sound, touch — are engaged in the ritual.

## The Five Sacred Leaves (Panchapatra)

Together with **Bel** (Bilva, sacred to Shiva) and **Durba** (a short grass), these plants form the core leaf offerings in Nepali puja. The specific combination varies by deity:

- **Vishnu worship**: Tulsi is essential; lotus petals preferred
- **Shiva worship**: Bel leaves are essential; Durba and Kush supplementary
- **Durga/Shakti worship**: Aparajita (blue pea flower) and various seasonal flowers
- **Ancestor rites (Shraddha)**: Kush is non-negotiable

Each plant is a living text — carrying within it a story, a relationship with the divine, and a technology for making that relationship accessible through ritual.`,
    seoTitle: 'Sacred Plants in Nepali Puja: Tulsi, Kush, Peepal, Parijat, Kamal, Tejpatta',
    seoDescription: 'The significance of sacred plants in Nepal\'s Hindu rituals — why Tulsi is Vishnu\'s consort, why Kush reaches ancestors, and the divine origin of the lotus and Parijat.',
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
console.log('Batch 8 done — 4 stories')
