import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const stories = [
  {
    slug: 'janaki-mandir-ram-sita-wedding',
    title: 'Janaki Mandir: Where Sita Was Born and Married Rama',
    category: 'PILGRIMAGE',
    excerpt: 'Janakpur in Nepal\'s Madhesh is ancient Mithila — the kingdom of King Janaka where Sita was found as a baby in a furrow of ploughed earth. The Janaki Mandir marks where she was born, and every year the entire city re-enacts her wedding to Rama at Vivah Panchami.',
    relatedPlaceSlugs: ['janaki-mandir'],
    content: `## King Janaka and the Furrow

**King Janaka** of Mithila was known throughout the ancient world as both a great warrior-king and a deeply philosophical sage — one of the few Kshatriyas held to have attained true spiritual knowledge. One day, while ploughing a field as part of a sacred agricultural ritual to invoke rain, his plough struck something in the earth. He stopped and dug: from the furrow emerged a baby girl, glowing with a supernatural light.

Janaka named her **Sita** — from *sita*, the Sanskrit word for "furrow." She had no biological parents; she was born from the earth itself, a daughter of **Bhumi Devi** (the earth goddess). Janaka and his wife Sunaina raised her as their beloved daughter. She grew into a woman of extraordinary beauty, wisdom, and character.

## The Swayamvara

When Sita came of age, Janaka organised a **swayamvara** — a ceremony where a princess could choose her husband from assembled suitors by garlanding him. But Janaka set an impossible condition: the suitor must lift and string **Shiva's bow** (Pinaka), an enormous divine weapon that no ordinary man could even move.

Kings and princes from across the land had come. One by one, they failed even to lift the bow. Then Rama, son of King Dasharatha of Ayodhya, arrived with his brother Lakshmana under the guidance of the sage Vishwamitra. Rama lifted the bow effortlessly, strung it — and in doing so, snapped it in half with the force of the stringing. The sound shook the earth.

Sita approached Rama with the garland. Their eyes met. The ceremony that would shape the next age of the world was complete.

## Janakpur — The City of the Wedding

**Janakpur** (Janakpurdham) in Nepal's Madhesh Province is identified with ancient **Mithila** — the capital of Janaka's kingdom. The city's name means "city of Janaka."

The **Janaki Mandir** — a magnificent white palace-temple built in 1910 CE in the Indo-Mughal style by Queen Vrisha Bhanu of Tikamgarh — stands at the spot traditionally identified as Sita's birth and home. It houses a golden image of Sita, worshipped as the principal deity.

The temple complex includes:
- The main mandir with its domes and intricately carved white facade
- **Vivah Mandap** — the wedding pavilion where Rama and Sita's wedding is ritually re-enacted
- Ponds and gardens surrounding the complex
- Dozens of smaller shrines throughout the city

## Vivah Panchami

Every year on the **fifth day (Panchami) of the bright fortnight of Margashirsha** (November–December), Janakpur hosts **Vivah Panchami** — the re-enactment of Rama and Sita's wedding.

Priests and devotees carry images of Rama in a procession from Ayodhya (represented by a designated temple in Janakpur) across the city to the Janaki Mandir, where the full wedding ceremony is performed. Hundreds of thousands of pilgrims attend from Nepal and India. The city is decorated, fireworks mark the ceremony, and the mood is one of collective joy — as if the wedding is happening for the first time, again.

Janakpur also hosts a network of over 70 ponds (**pokhari**) surrounding the temple complex, each associated with specific Ramayana episodes. The city is itself a Ramayana landscape — walking it is walking through the story.`,
    seoTitle: 'Janaki Mandir Janakpur: Sita\'s Birthplace and Vivah Panchami',
    seoDescription: 'The story of Sita\'s birth from a furrow, Rama\'s swayamvara victory, and the Janaki Mandir in Janakpur where their wedding is re-enacted every year.',
  },
  {
    slug: 'ashta-chiranjeevi-eight-immortals',
    title: 'The Eight Immortals: Guardians Until Kalki Arrives',
    category: 'MYTHOLOGY',
    excerpt: 'Eight beings in Hindu tradition have been granted immortality — not as a reward, but as a duty. They roam the earth through every age, preserving dharma\'s thread, and will gather to assist Kalki, Vishnu\'s tenth avatar, when he comes to end the Kali Yuga.',
    relatedPlaceSlugs: [],
    content: `## The Concept of Chiranjivi

**Chiranjivi** (from Sanskrit: *chiram* — long, *jivi* — lived) refers to beings who are immortal within the current cosmic cycle — who will not die until the end of the Kali Yuga, when the world is dissolved and remade. They are not eternal in the absolute sense (only the divine is that), but they persist through all ages as living links between the divine and human worlds.

The **Ashta Chiranjivi** — the eight immortals — are a group recited as a morning prayer in many Hindu households:

*Ashwatthama Bali Vyaso Hanumanashcha Vibhishanah*
*Kripacharya cha Parashuramam Saptaite Chiranjivinah*

(Seven are listed here; Markandeya or Jambavan is sometimes added as the eighth.)

## The Eight

**1. Ashwatthama** — Son of the warrior-teacher Drona, he fought on the Kaurava side in the Mahabharata. After the war, he used the Brahmastra weapon against the Pandavas' unborn heir (Parikshit), an act so heinous that Krishna removed the gem from his forehead and cursed him to wander the earth forever, his wound never healing, bearing the pain of his transgression until the end of the Kali Yuga.

**2. Mahabali** — The noble asura king who gave everything — including his own head — when Vishnu in the form of Vamana (the dwarf) asked for three steps of land and then grew to fill the cosmos. Rewarded for his extraordinary generosity and dharmic conduct, Bali was given sovereignty over Patala (the underworld) and immortality. He is believed to visit his people once a year during Onam (celebrated in Kerala).

**3. Vyasa (Krishna Dvaipayana)** — The sage who compiled the four Vedas, wrote the eighteen Puranas, and composed the Mahabharata. Vyasa is believed to still be alive, continuing his work of preserving sacred knowledge. He is venerated on Guru Purnima, which is also called Vyasa Purnima.

**4. Hanuman** — The devoted servant of Rama asked only one boon: to live as long as Rama's story was told. Since the Ramayana has never ceased to be told, Hanuman is alive. He is believed to appear at sincere Ramayana recitations and to help those in genuine distress who call on him.

**5. Vibhishana** — Ravana's younger brother, who opposed his brother's adharma, defected to Rama's side, and was crowned king of Lanka after Ravana's defeat. Given immortality by Rama, he is believed to rule Lanka still, maintaining dharmic order.

**6. Kripacharya** — The royal teacher (acharya) of the Kuru princes, including both Pandavas and Kauravas. He survived the Kurukshetra war and was given immortality so that knowledge of the ancient martial and philosophical traditions would not be lost.

**7. Parashurama** — The brahmin warrior who exterminated the corrupt Kshatriya class twenty-one times over. He is believed to be meditating in the Mahendra mountains. He appears in the Ramayana (testing Rama after the swayamvara) and in the Mahabharata (as Bhishma's and Karna's teacher). He awaits Kalki to help teach him the warrior arts.

**8. Markandeya (or Jambavan)** — Markandeya, the sage who was destined to die young but defeated Yama through his devotion to Shiva; Jambavan, the bear who fought in Rama's army and later tested Krishna by wrestling him. Both appear in lists depending on the tradition followed.

## Their Role in the Kalki Prophecy

When **Kalki** — the tenth avatar of Vishnu — appears at the end of the Kali Yuga on his white horse, the eight immortals will recognise him and gather to help him. Parashurama will teach him martial skills; Hanuman will fight alongside him; the others will provide counsel, knowledge, and support. Together they will help end the age of corruption and usher in the new Satya Yuga.

The Ashta Chiranjivi remind us that even in the darkest age, ancient wisdom is not entirely absent — it walks among us, patient, waiting.`,
    seoTitle: 'The Eight Immortals (Ashta Chiranjeevi) of Hindu Tradition',
    seoDescription: 'Who are the eight immortal beings of Hindu tradition, why they were given immortality, and their role in assisting Kalki at the end of the Kali Yuga.',
  },
  {
    slug: 'nepali-life-rituals-samskaras',
    title: 'The Rituals of a Nepali Life: From Birth to Old Age',
    category: 'TRADITION',
    excerpt: 'A traditional Nepali life is marked by a series of sacred ceremonies — samskaras — from the naming of a newborn to the celebration of an 84th birthday. Each ritual marks a transition, invokes blessings, and ties the individual to family, community, and the divine.',
    relatedPlaceSlugs: [],
    content: `## The Samskara Tradition

In Hindu tradition, **samskaras** are the rites of passage that sanctify the major transitions of life — purifying the individual, marking the change in social role, and invoking divine blessings at each threshold. Nepali Hindus observe a rich set of these ceremonies, many with Newar variations unique to the Kathmandu Valley.

## After Birth: Chhaiti Puja and Nwaran

In the immediate days after birth, a ceremony called **Chhaiti Puja** (or **Sutkeri puja**) is performed on the sixth night after the baby's birth. This night is considered vulnerable — the spirit world is particularly close to newborns — and prayers are offered to Shashti Devi (the protector of children) to guard the child through its first week.

On the **11th day** (or according to family tradition, on the 11th, 12th, or 21st day), the **Nwaran** ceremony — the naming ceremony — takes place. The family astrologer casts the baby's horoscope, determines an auspicious first syllable based on the birth star (nakshatra), and suggests a name beginning with that sound. The baby's head is shaved for the first time; dahi (yoghurt) and chura (beaten rice) are eaten to mark the occasion, and the baby is formally introduced to family and community.

## Pasni: The Rice-Feeding Ceremony

At approximately **5–6 months** for boys (5 months for even-birth-order boys, 6 for odd) and **5–7 months** for girls, the **Pasni** (or Annaprashan) marks the baby's first taste of solid food — specifically, cooked rice.

The ceremony is held at home or at a temple. An elderly family member — ideally a grandfather — places the first grain of rice in the baby's mouth with a golden ring or golden spoon. The child is surrounded by objects representing different life paths — books, soil, money, sweets — and whatever the baby reaches for first is joyfully interpreted as a sign of their future path.

## Bratabanda and Guni Cholo

For Brahmin and Chhetri boys, **Bratabanda** (also called Janai Purnima in some contexts, or Bartabandha) is the most important ceremony of childhood — the investiture of the sacred thread (janai). The boy undergoes ritual purification, has his head shaved, and receives the three-stranded thread over his shoulder. This ceremony marks his entry into studentship (brahmacharya) and his formal entry into religious practice.

For Newar girls, the equivalent is **Ihi** (also called Guni Cholo or Ehee) — a ceremony unique to Newar culture in which young girls are ritually "married" to the Bel fruit (the wood-apple, considered immortal and associated with Vishnu) before they reach puberty. This pre-puberty marriage to an immortal ensures that in Hindu cosmology, a Newar woman can never be considered a "widow" — even if her human husband dies, her first husband (the Bel fruit) is immortal. The ceremony protects her from the social stigma of widowhood.

## Bibah: The Wedding

The **Bibah** (wedding) is the most elaborate ceremony in a Nepali life. Weddings typically span multiple days and include:
- **Betrothal ceremony** (Lagun): an astrologer determines an auspicious date
- **Mehendi** (henna) for the bride
- The main wedding ceremony with the sacred fire (agni) as witness — seven circumambulations of the fire (saptapadi), each representing a vow
- **Sindoor** (red powder) placed in the part of the bride's hair by the groom — the most definitive marker of a married Hindu woman
- **Exchange of garlands** (var-mala)

## Chaurasi Puja: The 84th Year Celebration

When a person crosses their **84th birthday** — completing 12 full cycles of the 7-year (7 planets × 12 zodiac signs = 84) astrological cycle — they are celebrated with the **Chaurasi Puja**. This ceremony acknowledges that the person has lived long enough to transcend the full cycle of planetary influence.

The elder is treated like royalty — carried in a chariot, worshipped with flowers and tika by all family members, and fed dahi chiura (yoghurt and beaten rice — the food of auspicious occasions). A full religious ceremony thanks the gods for the elder's long life.

In Nepal, **dahi chiura** — yoghurt and beaten rice — runs through all these ceremonies as the food of celebration and blessings: simple, white, pure, and ancient.`,
    seoTitle: 'Nepali Life Rituals: Nwaran, Pasni, Bratabanda, Bibah and Chaurasi Puja',
    seoDescription: 'The sacred life-cycle ceremonies of Nepal — from the naming of a newborn (Nwaran) to the 84th birthday celebration (Chaurasi Puja) — their meaning and traditions.',
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
console.log('Batch 6 done — 3 stories')
