import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const stories = [
  {
    slug: 'kukur-tihar-dog-worship',
    title: 'Kukur Tihar: Why Dogs Are Worshipped',
    category: 'FESTIVAL',
    excerpt: 'On the second day of Tihar, every dog in Nepal — stray or pet — receives a garland of marigolds, a tika on its forehead, and a feast. Dogs are sacred as messengers of Yamaraj, the god of death, who uses them to guide souls through the underworld.',
    relatedPlaceSlugs: [],
    content: `## Dogs and the God of Death

In Hindu tradition, **Yamaraj** — the lord of death and dharma — keeps two four-eyed dogs as his companions. These dogs, known in the scriptures as **Shyama** and **Sabala**, serve as messengers and scouts for Yamaraj's realm. They roam the border between the living world and the land of the dead, watching over souls and guiding them to Yamaraj's court for judgement.

Because dogs are messengers of Yama, they are considered to have the ability to perceive things invisible to humans — including the approach of death, restless spirits, and supernatural presences. A dog howling at night is widely believed across Nepal to signal the presence of spirits or Yamaraj's approach.

## The Mahabharata Connection

The Mahabharata provides the most famous dog story in Hindu scripture. At the end of the epic, the Pandavas undertook their **Mahaprasthana** — the final journey toward heaven through the Himalayas. One by one, Draupadi and each of the five brothers fell and died along the way, unable to sustain the climb.

Only **Yudhishthira**, the eldest and most righteous, made it to the gates of heaven — accompanied by a dog who had joined the journey and refused to leave him. Indra, the king of the gods, arrived in his chariot to take Yudhishthira to heaven but said the dog could not come.

Yudhishthira refused to enter heaven without the dog. He had never abandoned a devoted being in life, and he would not start now. The dog then revealed itself to be **Yamaraj** in disguise — the entire episode was a final test of Yudhishthira's virtue. He had passed.

## Kukur Tihar

On the **second day of Tihar** (the festival of lights, falling in Kartik/October–November), Nepal honours dogs with a ceremony called **Kukur Tihar**.

Every dog — whether a beloved family pet or a street dog sleeping outside a shop — is:
- **Garlanded** with marigolds and seasonal flowers
- **Given a tika** of red vermilion on the forehead
- **Offered a feast** of meat, egg, milk, dog biscuits, and other special foods

Photographs of garlanded street dogs circulate widely on this day — one of the most heartwarming visible traditions in Nepal.

The logic is devotional: if dogs guard the threshold between life and death and serve Yamaraj faithfully, honouring them earns their goodwill — and by extension, Yamaraj's protection. A well-fed, garlanded dog is a blessing at your threshold.

In a country where many street dogs live hard lives, Kukur Tihar is also a moment of collective compassion — a reminder, through ancient theology, that all beings deserve to be seen.`,
    seoTitle: 'Kukur Tihar: Why Nepal Worships Dogs on the Second Day of Tihar',
    seoDescription: 'Why dogs are garlanded and worshipped during Kukur Tihar in Nepal — the mythology of Yamaraj\'s dogs and the Mahabharata story of Yudhishthira.',
  },
  {
    slug: 'kaag-tihar-crow-worship',
    title: 'Kaag Tihar: The Worship of Crows',
    category: 'FESTIVAL',
    excerpt: 'On the first morning of Tihar, before any human has eaten, Nepali households put out food for crows. These black birds are considered messengers of Yamaraj and carry news between the living and the dead — a crow\'s arrival brings word from the ancestors.',
    relatedPlaceSlugs: [],
    content: `## Crows as Divine Messengers

In Hindu and Nepali tradition, the **crow** (kaag) occupies a unique spiritual position. While in many Western traditions the crow is an omen of ill luck, in Nepal it serves as a **messenger between the world of the living and the realm of the dead**.

Crows are associated with **Yamaraj**, the god of death, and are believed to carry news from deceased ancestors to their living families. When a crow lands on a house and calls, some Nepalis believe it carries a message from someone who has passed. This is why offerings to crows and offerings to ancestors (shraddha) are connected — feeding a crow is, in some sense, feeding the dead.

## The First Morning of Tihar

**Kaag Tihar** (crow worship day) falls on the **first day of Tihar**, before sunrise. It is the earliest ritual of the five-day festival.

Each household prepares offerings of:
- Rice
- Meat
- Fruits
- Sweet rice pudding (kheer)

These are placed on the roof or in the courtyard before the family has eaten. The family waits to hear a crow call — this is considered an auspicious sign that the ancestors have received the offering and are watching over the family during the festival season.

## Crows and Shraddha

The connection between crows and ancestors runs deeper than Tihar. During **Shraddha** — the annual ancestral rites performed in the month of Ashwin (September–October) — Nepali Hindus offer food specifically for crows as part of the ritual. It is believed that ancestors inhabit the crow temporarily to accept food from their descendants.

If a crow eats the shraddha offering, the ritual is considered successful. If crows ignore the food, it may suggest the ritual needs to be performed more carefully or that additional prayers are needed.

## The Raven in the Vedas

In the Vedic tradition, the crow (kakola or vayasa) appears as a figure who sits at the thresholds of important transitions. In the Garuda Purana — the text recited after death — crows and other birds are described as capable of carrying the prayers of the living to the deceased.

Kaag Tihar honours this ancient relationship — acknowledging that the boundary between the living and the dead is not impenetrable, and that the noisy black bird perched on the rooftop might be carrying something more than seeds.`,
    seoTitle: 'Kaag Tihar: The Significance of Crow Worship in Nepal\'s Tihar Festival',
    seoDescription: 'Why Nepali households feed crows before eating on the first day of Tihar — the mythology of crows as messengers of Yamaraj and ancestors.',
  },
  {
    slug: 'gaai-tihar-cow-worship',
    title: 'Gaai Tihar: The Worship of the Sacred Cow',
    category: 'FESTIVAL',
    excerpt: 'The cow is Nepal\'s national animal and among its most sacred beings. On the third day of Tihar, cows are garlanded, fed sweets, and worshipped as the earthly form of Lakshmi and Kamdhenu, the divine wish-fulfilling cow who sustains all life.',
    relatedPlaceSlugs: [],
    content: `## The Cow in Hindu Cosmology

The cow holds a place in Hindu thought unlike any other animal. She is described as containing all the gods within her body — Lakshmi in her feet, Saraswati in her voice, the sun and moon in her eyes, Yamaraj in her tail, and all rivers in her urine and dung. To mistreat a cow is therefore an offence against all of divinity.

**Kamdhenu** (also called Surabhi) is the cosmic wish-fulfilling cow who emerged from the churning of the ocean (Samudra Manthan). She can produce whatever her devotees need — food, wealth, or any desire — from her endless bounty. She is the mother of all cows and represents the principle of divine abundance.

## The Cow as Lakshmi

The cow is also understood as an earthly form of **Lakshmi**, the goddess of prosperity. A household that keeps and honours a cow is believed to have Lakshmi's blessing permanently present. Her dung — used to plaster and purify floors in traditional homes — is considered cleansing rather than unclean, because it comes from a sacred body.

In Nepal, the cow was historically so sacred that killing one was a crime equal in severity to killing a human. Nepal was officially the world's only Hindu kingdom until 2008, and throughout that time the cow was protected by royal decree.

## Gaai Tihar

On the **third day of Tihar** — which also coincides with **Laxmi Puja** night — the cow is worshipped in the morning:

- Cows are bathed and groomed
- Garlands of marigolds and seasonal flowers are placed around their necks
- A tika of red vermilion is applied to their foreheads
- They are fed special sweets — kheer, fruits, grass — before the family eats
- Their hooves may be painted yellow with turmeric

In Kathmandu's older neighbourhoods, the **Nepal Sambat New Year** also falls on the third day of Tihar, adding further celebrations to the day.

## The National Animal

The cow has been Nepal's **national animal** since the country first established the designation. Even today, when Nepal is a secular republic, the cow is not slaughtered within the country (beef is not available at Nepali restaurants serving traditional food, though some establishments catering to international visitors may import it).

This protection is not merely legal — it reflects a genuine cultural reverence for the cow as mother, as provider, as the living symbol of abundance. Gaai Tihar is the one day when this reverence is made fully visible, with flower garlands and sweets making explicit what is always quietly understood.`,
    seoTitle: 'Gaai Tihar: The Significance of Cow Worship in Nepal',
    seoDescription: 'Why cows are worshipped on the third day of Tihar in Nepal — the mythology of Kamdhenu, Lakshmi, and the sacred status of the cow.',
  },
  {
    slug: 'lakshmi-samudra-manthan-tihar',
    title: 'Lakshmi: From the Cosmic Ocean to the Goddess of Prosperity',
    category: 'MYTHOLOGY',
    excerpt: 'When Lakshmi rose from the churning of the cosmic ocean, all beings stood in awe. She chose Vishnu as her eternal consort and became the goddess of wealth, beauty, and good fortune. On Laxmi Puja night during Tihar, every lamp lit in Nepal is an invitation for her to enter.',
    relatedPlaceSlugs: [],
    content: `## Born from the Ocean

When the gods and demons churned the cosmic ocean of milk (Samudra Manthan), the treasures that emerged included the divine physician Dhanvantari, the wish-fulfilling cow Kamdhenu, the divine horse Uchchaihshravas, the divine elephant Airavata, and several deadly poisons — but the most celebrated emergence was **Lakshmi**.

She rose from the waters seated on a lotus, radiant and fully formed, bearing lotuses in her hands. She was dressed in red, adorned with gold, and glowing with a light that made the three worlds fall silent in admiration. Gods, demons, sages, and humans all stood transfixed.

Each being hoped she would choose them. The demons hoped. The gods hoped. But Lakshmi's gaze fell on **Vishnu** — the preserver, the upholder of dharma — and she garlanded him. Since that moment, she has been his eternal consort and inseparable companion. She is found on his chest (on the mark called Shrivatsa), at his feet, and in his every incarnation: as Sita with Rama, as Rukmini with Krishna.

## The Nature of Lakshmi

Lakshmi is not a simple goddess of money. She represents:

- **Wealth (Dhana Lakshmi)** — gold, material resources
- **Grain (Dhanya Lakshmi)** — agricultural abundance
- **Courage (Veera Lakshmi)** — strength and valour
- **Wisdom (Vidya Lakshmi)** — knowledge and education
- **Success (Vijaya Lakshmi)** — victory in endeavours
- **Progeny (Santan Lakshmi)** — the blessing of children
- **Patience (Dhairya Lakshmi)** — perseverance
- **Good fortune (Aishwarya Lakshmi)** — general prosperity

These eight forms are the **Ashta Lakshmi** — the eight Lakshmis worshipped especially on Fridays and during Tihar.

## Laxmi Puja Night

On the **third night of Tihar** (Laxmi Puja), the night of the new moon of Kartik, Lakshmi is believed to wander the earth visiting homes. She is drawn to **light, cleanliness, and joy** — and repelled by dirt and darkness.

Nepali households prepare for her visit:
- **Oil lamps (diyas)** are lit on every windowsill, doorstep, staircase, and rooftop — hundreds per house
- **Rangoli (colour patterns)** are drawn at the entrance in rice flour or coloured powder
- **Homes are deep-cleaned** for days before the festival
- **Prayers (puja)** are performed to her image with flowers, sweets, and incense
- **Coins and notes** are placed before her image, blessed, and kept as the year's first consecrated wealth

The Kathmandu Valley on Laxmi Puja night becomes a sea of lights visible from the surrounding hills. Modern homes now also add electric string lights, but the traditional diyas — small clay bowls of mustard oil with cotton wicks — remain the true invitation to the goddess.

The belief is simple and ancient: Lakshmi will only enter a home that is clean, lit, and filled with happiness. By making those conditions, you make yourself a worthy host.`,
    seoTitle: 'Lakshmi Puja Tihar Nepal: The Story of the Goddess of Prosperity',
    seoDescription: 'How Lakshmi rose from the churning of the cosmic ocean and why oil lamps lit on Laxmi Puja night during Tihar are her invitation to enter the home.',
  },
  {
    slug: 'bhai-tika-yamuna-yamaraj',
    title: 'Bhai Tika: The Bond Between Brother and Sister',
    category: 'FESTIVAL',
    excerpt: 'On the fifth and final day of Tihar, sisters apply a seven-coloured tika to their brothers\' foreheads and pray for their long life. The festival traces back to Yamuna, the river goddess, who refused to let her brother Yamaraj die and wrested a promise of longevity from the god of death himself.',
    relatedPlaceSlugs: [],
    content: `## Yamuna and Yamaraj

**Yamaraj** is the god of death and dharmic judgment — the being who weighs every soul's actions and determines their fate after death. He rules Yamaloka (the realm of the dead) with his twin sister **Yamuna** (the sacred river goddess, also called Yami).

According to the story behind Bhai Tika, Yamuna heard that Yamaraj's appointed day of death was approaching. Even the god of death must, in the cosmic cycle, eventually pass on. Yamuna refused to accept this. She said: *"You are my brother — I will not let you die."*

She prepared a special tika using seven colours — symbolic of all the forces of protection in the cosmos — applied it to his forehead, garlanded him with marigolds and the fragrant **makhamali** (globe amaranth), and fed him sweet foods. She surrounded him with an oil-lamp circle and invoked every divine protection she knew.

Such was the power of a sister's love and prayer that Yamaraj was moved. He granted her: **"Any brother whose sister applies this tika to him on this day will have his life extended. I shall not take him before his time."**

## The Fifth Day of Tihar

**Bhai Tika** falls on the **fifth and final day of Tihar**, the day after Laxmi Puja. It is one of the most emotionally significant days in the Nepali calendar.

The ceremony:

**Sisters** prepare a **tika of seven colours** — typically containing rice grains, yoghurt (dahi), red powder (sindoor), blue vitriol (tutiya), mustard oil, white powder, and sometimes turmeric. Each colour has protective symbolism.

**The tika is applied** with five fingers to the brother's forehead, while prayers are recited for his long life, good health, and success.

**Makhamali flower garlands** are placed around the brother's neck — the globe amaranth is believed to maintain freshness for months, symbolising the enduring nature of the sister's wish.

**Oil lamps** are lit in a circle around the brother as he sits — a protective fire circle keeping ill fortune at bay.

**Gifts are exchanged** — brothers give sisters money, gifts, or sweets; sisters feed brothers special foods.

## For Sisters Without Brothers

Sisters who have no living brothers perform the ritual for the **Bel tree** (the wood-apple tree, sacred to both Shiva and to feminine energy) or for a **God** — recognising that the impulse to protect and bless transcends the literal relationship.

Bhai Tika is a festival of extraordinary tenderness in Nepal's public life — one of the few times when men openly receive care, are garlanded and fed, and sit quietly while their sisters pray over them. In a country where the sibling relationship is considered among life's most sacred bonds, this day gives it its fullest expression.`,
    seoTitle: 'Bhai Tika: The Story of Yamuna, Yamaraj, and Nepal\'s Brother-Sister Festival',
    seoDescription: 'Why sisters apply seven-coloured tika to their brothers on Bhai Tika — the myth of Yamuna protecting Yamaraj from death during Tihar.',
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
console.log('Batch 4 done — 5 stories')
