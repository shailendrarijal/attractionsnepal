import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const stories = [
  {
    slug: 'samudra-manthan-gosaikunda',
    title: 'Samudra Manthan and the Sacred Gosaikunda',
    category: 'MYTHOLOGY',
    excerpt: 'The churning of the cosmic ocean brought forth both nectar and poison. When Shiva drank the deadly halahala to save creation, he cooled his burning throat in the icy waters of Gosaikunda — making it one of Nepal\'s most sacred lakes.',
    relatedPlaceSlugs: ['gosaikunda'],
    content: `## The Churning of the Cosmic Ocean

In the beginning of a new cosmic age, the gods (devas) found themselves weakened and stripped of their immortality by the curse of the sage Durvasa. Seeking a way to regain the divine nectar of immortality — amrita — they approached Lord Vishnu, who advised them to churn the great ocean of milk, Kshira Sagara.

But the task was too immense for the gods alone. Vishnu counselled them to seek a temporary alliance with the asuras (demons), promising them a share of the nectar. Using Mount Mandara as a churning rod and the great serpent Vasuki as a rope, both sides began the cosmic churning.

## The Poison That Threatened Creation

As the churning began, the first thing to emerge was not nectar but Halahala — a poison so potent it could destroy all three worlds. The gods and demons fled in terror. Even Brahma and Vishnu were powerless against it.

In desperation, all beings turned to Lord Shiva, the great ascetic and destroyer of evil. Without hesitation, Shiva scooped the entire ocean of poison into his hands and swallowed it. His consort Parvati, alarmed, pressed her hand against his throat to stop the poison from reaching his stomach. The halahala lodged in Shiva's throat, turning it permanently blue — earning him the name **Neelakantha**, the blue-throated one.

## Shiva at Gosaikunda

Though the poison was contained, it burned within Shiva with terrible heat. To cool himself, Shiva struck the Himalayan mountains with his trident, creating a series of high-altitude lakes. The most sacred of these is **Gosaikunda**, sitting at 4,380 metres in the Langtang region of Nepal.

Legend holds that the lake was formed directly from Shiva's trident strike, and that a **Shivalinga** — the sacred symbol of Shiva — rests submerged at its bottom. The water itself is said to carry the divine coolness that soothed Shiva's burning throat.

## The Pilgrimage of Janai Purnima

Every year on the full moon of Shrawan (July–August), tens of thousands of Hindu devotees make the arduous pilgrimage to Gosaikunda for the festival of **Janai Purnima**. Brahmin and Chhetri men renew their sacred thread (janai) in the lake's waters, while devotees of all castes take a holy dip believed to wash away sins and grant liberation.

The trek passes through Helambu and Langtang, rising through rhododendron forests into alpine meadows, with Gosaikunda shimmering like a mirror below the snow peaks. On the night of the full moon, the lakeshore fills with pilgrims, sadhus, and oil lamps — one of Nepal's most atmospheric religious gatherings.

## The Treasures That Followed

After Shiva swallowed the poison and the churning resumed, fourteen divine treasures emerged from the ocean — including Lakshmi (goddess of prosperity), the divine physician Dhanvantari carrying the nectar of immortality, Kamadhenu the wish-fulfilling cow, and finally the amrita itself. The full story of what happened to the nectar forms the foundation of many other festivals and myths across the subcontinent.

Gosaikunda stands as a permanent reminder that the greatest act of the churning was not the amrita, but Shiva's selfless sacrifice — swallowing poison so that all of creation could survive.`,
    seoTitle: 'Samudra Manthan & Gosaikunda — The Story of Shiva\'s Sacrifice',
    seoDescription: 'How the churning of the cosmic ocean led Shiva to swallow poison and cool himself in Gosaikunda, Nepal\'s sacred Himalayan lake.',
  },
  {
    slug: 'sati-death-guheswori',
    title: 'The Death of Sati and the Origin of Guheswori',
    category: 'MYTHOLOGY',
    excerpt: 'When Sati sacrificed herself in grief and Shiva carried her body across the world in anguish, Vishnu\'s Sudarshana Chakra split her remains into 51 sacred sites. One of the most revered — Guheswori in Kathmandu — marks where her reproductive organ fell.',
    relatedPlaceSlugs: ['pashupatinath-temple'],
    content: `## Sati and Daksha

Sati was the daughter of Daksha, the powerful king of the gods, and the first wife of Lord Shiva. Their marriage had been born against Daksha's wishes — he considered Shiva an ascetic wanderer unworthy of his daughter. Despite his disapproval, Sati's love for Shiva was absolute.

## The Great Insult

Daksha organised a grand yajna (fire ceremony) and invited all the gods — conspicuously excluding Shiva. Sati, hearing of the ceremony, wished to attend despite Shiva's warning that going uninvited was an act of dishonour. She went nonetheless, hoping to reason with her father.

Instead, Daksha publicly denounced Shiva in front of the assembly — calling him a wandering beggar, a madman who smears himself with ash and frequents cremation grounds, unfit to be his son-in-law. Unable to bear the humiliation of her husband, Sati immolated herself in the sacred fire.

## Shiva's Grief and the Wandering

When news reached Shiva, his grief turned to rage. He destroyed the ceremony, killed Daksha, and then retrieved Sati's body from the flames. In inconsolable anguish, Shiva wandered all three worlds carrying her body on his shoulders, his grief so immense it threatened cosmic stability.

## Vishnu's Intervention

Seeing that Shiva's mourning was unending and the universe was in peril, Lord Vishnu followed him discreetly and used his **Sudarshana Chakra** — the spinning discus weapon — to cut Sati's body into pieces as Shiva carried it. As each piece fell to earth, Shiva gradually released his grief.

The places where Sati's body parts landed became the **51 Shakti Peethas** — among the most sacred pilgrimage sites in South Asia. Each site is a living temple where the goddess is worshipped in a specific form, and each is also associated with a Bhairava (a fierce form of Shiva) who guards it.

## Guheswori — The Peetha in Kathmandu

In Kathmandu, Sati's **reproductive organ (yoni)** is said to have fallen at the site now known as **Guheswori** (also spelled Guhyeshwari), located just east of the Pashupatinath temple complex beside the Bagmati river.

The goddess here is worshipped as **Guheswori** — "the goddess of the secret" — a powerful tantric deity. The temple is notable for its unusual form: unlike most Hindu temples that house an image of the deity, the sanctum sanctorum at Guheswori contains a **water-filled pit** with a gold serpent, representing the yoni directly.

Non-Hindus are not permitted inside the inner sanctum, preserving the temple's intense tantric sanctity. The site is considered one of the most powerful Shakti Peethas in Nepal and draws devotees seeking blessings for fertility, protection, and liberation.

## The Rebirth as Parvati

Sati was later reborn as Parvati, the daughter of the mountain king Himavan. Her love for Shiva endured across lifetimes — she undertook severe tapasya (austerities) to win him back, eventually succeeding and reuniting with him as his eternal consort. Their reunion is celebrated across Nepal in the festival of Teej.`,
    seoTitle: 'The Death of Sati and Guheswori Temple Kathmandu',
    seoDescription: 'The myth of Sati\'s self-immolation, Shiva\'s grief, and how Vishnu\'s discus created the 51 Shakti Peethas — including Guheswori in Kathmandu.',
  },
  {
    slug: 'durga-mahishasura-navaratri',
    title: 'Durga Slays Mahishasura: The Story of Navaratri',
    category: 'FESTIVAL',
    excerpt: 'The buffalo demon Mahishasura had conquered the heavens and could not be slain by any man or god. The combined divine energy of the Trimurti gave birth to Durga — a warrior goddess who fought him for nine days and nights before finally beheading him.',
    relatedPlaceSlugs: [],
    content: `## The Demon Who Conquered Heaven

Mahishasura, the buffalo demon, had performed such intense penance that Brahma granted him a fearsome boon: he could not be killed by any man or any god. Armed with this protection, Mahishasura assembled a vast army and launched a war against the heavens, defeating Indra and the entire host of devas.

The gods fled from Svarga and roamed the earth in despair, stripped of their realms and powers. They gathered before Brahma, who led them to Vishnu and Shiva. As the three great gods heard the account of Mahishasura's atrocities, their collective anger manifested as radiant light — and from this combined divine energy, a goddess took form.

## The Birth of Durga

Each god contributed to her creation: Shiva gave her his trident, Vishnu his Sudarshana Chakra, Indra his thunderbolt, Yama his staff, Varuna his conch, Agni his spear, Vayu his bow and arrows, Surya his rays to fill her pores, and the Himalayas gave her a lion as her mount. The gods also gave her their most precious weapons and ornaments.

This goddess — radiant, armed, and ferocious — was **Durga**: the invincible one. Her name means "the one who is difficult to approach."

## Nine Days of Battle

Durga rode into battle against Mahishasura's vast army. For nine days and nights, the war raged. The demon general after general fell before her. Mahishasura himself shape-shifted repeatedly — appearing as a buffalo, then a lion, then a man, then an elephant — to escape her. Each time, Durga met the new form with a new weapon.

On the **tenth day**, she finally pierced Mahishasura with her trident and beheaded him as he emerged from the buffalo form. The heavens erupted in celebration. Flowers rained from the sky, drums thundered, and the gods reclaimed their realm.

## Navaratri in Nepal

The nine nights of battle are commemorated as **Navaratri** — literally "nine nights." In Nepal, this festival is observed as part of the larger **Dashain** celebration, the most important Hindu festival of the year.

During Navaratri, Durga is worshipped in nine different forms — the **Navadurga** — each representing a different aspect of the goddess:

1. **Shailaputri** — daughter of the mountains
2. **Brahmacharini** — the ascetic
3. **Chandraghanta** — wearing a crescent moon
4. **Kushmanda** — creator of the universe
5. **Skandamata** — mother of Kartikeya
6. **Katyayani** — the warrior
7. **Kalaratri** — the dark night
8. **Mahagauri** — the radiant white
9. **Siddhidatri** — granter of boons

In Kathmandu, the Kumari (living goddess) plays a central role during Dashain, and the Hanuman Dhoka palace square hosts royal rituals dating back centuries. Thousands of animals are sacrificed at Durga temples, particularly at **Dakshinkali** and the Kot courtyard, as offerings to the goddess who once sacrificed her own energy to save the world.

## Bijaya Dashami

The tenth day — **Bijaya Dashami** ("victorious tenth") — celebrates Durga's final victory. Elders place tika (a mixture of rice, red powder, and yoghurt) on the foreheads of family members, along with jamara (yellow grass shoots grown in darkness for nine days). This tika is considered Durga's blessing, carried from the goddess to her devotees through the eldest family member.`,
    seoTitle: 'Durga and Mahishasura: The Story Behind Navaratri and Dashain',
    seoDescription: 'How the goddess Durga was created from divine energy to slay the buffalo demon Mahishasura — the myth behind Nepal\'s Navaratri and Dashain festival.',
  },
  {
    slug: 'rama-ravana-bijaya-dashami',
    title: 'Rama\'s Victory Over Ravana: The Story of Bijaya Dashami',
    category: 'FESTIVAL',
    excerpt: 'When the demon king Ravana abducted Sita, Prince Rama of Ayodhya built an army of monkeys, crossed the ocean to Lanka, and waged a great war to rescue her. His victory on the tenth day of Ashwin is celebrated across Nepal as Bijaya Dashami.',
    relatedPlaceSlugs: ['janaki-mandir'],
    content: `## The Exile and the Abduction

Prince Rama of Ayodhya, eldest son of King Dasharatha, was exiled to the forest for fourteen years through a court intrigue. He went willingly, accompanied by his devoted wife Sita and his loyal brother Lakshmana. In the Dandaka forest, the demon king **Ravana** of Lanka became obsessed with Sita's beauty.

Ravana sent a golden deer to lure Rama away, then approached Sita in the disguise of a wandering sage. When Sita crossed the protective line Lakshmana had drawn, Ravana abducted her and carried her through the sky to his island kingdom of Lanka.

## The Alliance with the Monkeys

Searching desperately, Rama and Lakshmana encountered **Hanuman** — the son of the wind god and minister to Sugriva, the exiled monkey king. Hanuman became Rama's devoted servant and ally. With the monkey army (Vanara Sena), Rama helped Sugriva reclaim his kingdom; in return, Sugriva pledged his entire army to find Sita.

Hanuman leapt across the ocean to Lanka in a single bound, found Sita imprisoned in the Ashoka grove, and returned with proof of her location. He also burned much of Lanka with his tail before escaping.

## The Bridge and the Battle

Rama's army arrived at the southern tip of India facing the vast ocean. The squirrels and bears and monkeys built a great bridge — **Rama Setu** — stretching across the sea to Lanka. Crossing it, Rama's forces engaged Ravana's demon army in an epic war.

Great warriors fell on both sides. Ravana's son Indrajit used his serpent-arrow to render both Rama and Lakshmana unconscious. Hanuman flew to the Himalayas to fetch the **Sanjeevani herb** — legend says he could not identify the specific plant, so he carried the entire mountain back to Lanka. The brothers were revived.

Finally, on the **tenth day of the battle**, Rama invoked the **Aditya Hridayam** (a hymn to the Sun) as instructed by the sage Agastya, gained divine power, and launched his Brahmastra — a divine weapon given by Brahma. The arrow struck Ravana in his navel (the source of his immortality) and killed him.

## Bijaya Dashami in Nepal

**Bijaya Dashami** — Victory Tenth — commemorates this triumph of dharma over evil, of Rama's righteousness over Ravana's arrogance. In Nepal it coincides with and completes Navaratri; the same tika applied by elders carries the blessing of both Durga's nine-day victory and Rama's tenth-day triumph.

Key traditions:
- **Tika and jamara** — elders apply the red tika with five fingers on younger family members' foreheads, along with the yellow jamara
- **Gifts and new clothes** — juniors receive money and blessings from elders
- **Return of diaspora** — more Nepalis travel home for Dashain than for any other festival; it is the great homecoming
- **Vehicle worship** — tools, vehicles, and weapons are blessed as symbols of Rama's weapons being honoured after victory

In Janakpur — the birthplace of Sita — the festival holds special significance, with Ramayana recitations and temple processions lasting the entire fortnight.`,
    seoTitle: 'Rama vs Ravana: The Story Behind Bijaya Dashami in Nepal',
    seoDescription: 'The Ramayana story of Rama\'s war against Ravana and how his victory on the tenth day is celebrated as Bijaya Dashami across Nepal.',
  },
  {
    slug: 'origin-naag-panchami',
    title: 'The Origin of Naag Panchami',
    category: 'MYTHOLOGY',
    excerpt: 'On the fifth day of the bright fortnight of Shrawan, Nepalis paste images of serpents above their doorways and offer milk and rice. This ancient tradition traces back to the belief that serpent kings protect the land from floods, drought, and evil.',
    relatedPlaceSlugs: [],
    content: `## Serpents in Hindu Cosmology

In Hindu and Buddhist tradition, the **Nagas** — divine serpents — occupy a unique place in the cosmos. They are neither fully good nor fully evil, but primordial forces tied to water, fertility, and the underworld. The great serpent **Shesha** (also called Ananta) holds the entire earth on his hoods, while **Vasuki** served as the churning rope in Samudra Manthan. **Takshaka**, the king of serpents, rules the subterranean realm of Nagaloka.

Nagas control rainfall and rivers. When they are pleased, the rains come in time and crops flourish. When angered — by pollution, disrespect, or the killing of a snake — they can bring drought, floods, and disease.

## The Story of Astika and King Janamejaya

The most important myth behind Naag Panchami comes from the Mahabharata. King **Janamejaya** of Hastinapur launched a massive serpent sacrifice (Sarpa Satra) to avenge his father Parikshit, who had been killed by the snake king Takshaka.

The sacrifice was so powerful that serpents from all over the world began falling into the fire against their will. The snake mother **Manasa** watched her kin die in thousands. Her son **Astika**, a brahmin by birth (his father was the sage Jaratkaru), had the power to halt the ritual.

At the moment Takshaka himself was being pulled into the flames, Astika arrived and cried out: *"Excellent! Excellent! Excellent!"* — a brahmin's words of blessing that could not be withdrawn. Janamejaya, bound by dharma to honour a brahmin's words, was forced to stop the sacrifice.

Astika had saved the serpent race. In gratitude, the Nagas blessed him and declared that whoever worshipped them on the fifth day of Shrawan would be protected from snake bites and would receive the Nagas' blessings.

## The Tradition in Nepal

**Naag Panchami** falls on the fifth day (Panchami) of the bright fortnight of Shrawan (July–August) — the height of the monsoon season, when snakes emerge from their flooded underground homes.

On this day, Nepali households:
- **Paste a printed image of the Nagas** above the main doorway — eight serpents arranged in a specific pattern, representing the eight great Naga kings
- **Offer milk and rice** (snake food in mythology) at the doorstep and at known anthills (believed to be snake entrances)
- **Do not dig the earth** — to avoid disturbing underground serpents
- **Worship at Naga temples** — ponds and wells where Nagas are believed to reside

In the Kathmandu Valley, the festival has particular significance because the valley itself was once a lake (according to the Swayambhu Purana) that was home to a great Naga king. Draining the lake brought Nagas to the surface, and their appeasement has been woven into valley culture ever since.

Farmers especially honour the Nagas during Shrawan, seeking protection for their fields and prayers for adequate — but not excessive — monsoon rains.`,
    seoTitle: 'The Origin and Significance of Naag Panchami in Nepal',
    seoDescription: 'Why Nepalis worship serpents on Naag Panchami — the mythology of the Nagas, the story of Astika, and the traditions of snake worship in Nepal.',
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
console.log('Batch 1 done — 5 stories')
