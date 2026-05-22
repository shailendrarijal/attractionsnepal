import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const stories = [
  {
    slug: 'lakhe-dance-indra-jatra',
    title: 'The Lakhe Dance: Guardian Demon of Indra Jatra',
    category: 'TRADITION',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sweta_bhairava_krt.jpg',
    excerpt: 'The Lakhe — a fearsome demon in an elaborate mask and costume — dances through Kathmandu\'s streets during Indra Jatra. But this demon is no villain: he was tamed by the goddess and now protects the city, his wild dance keeping evil forces away from the valley.',
    relatedPlaceSlugs: ['kathmandu-durbar-square'],
    content: `## The Origin of the Lakhe

The **Lakhe** is a demon figure central to the Newar cultural tradition of Kathmandu Valley. According to local legend, the Lakhe was a powerful demon who terrorised the valley — eating humans, destroying crops, and disrupting community life.

In some versions of the story, the Lakhe was tamed by the **Kumari** (the living goddess) or by Durga herself. After being subdued, the demon pledged to protect the valley and its people. In exchange for regular worship and the opportunity to dance — which is his nature — he would use his fearsome power to frighten away evil forces rather than cause harm.

In other retellings, the Lakhe is associated with the forest and wild nature — a spirit of untamed places that needs to be ritually included in city life so that the boundary between civilisation and wilderness remains negotiated rather than hostile.

## The Costume and Dance

The Lakhe costume is one of the most spectacular in Nepal's festival traditions:

- A large, terrifying **mask** with bulging eyes, fangs, and wild hair (often made of black or red horsehair)
- A **shaggy body costume** in red and black representing the demon's wild nature
- **Heavy anklet bells** that clang with each step
- The dancer holds no weapons — his only tool is his body

The **Lakhe dance** itself is improvised and wild — the dancer lurches, spins, and chases spectators (especially children), who scream and scatter with delight. The dance is simultaneously scary and comedic, dangerous and protective. The Lakhe chases away the evil it represents, personifying the very forces it expels.

## Indra Jatra

The Lakhe dance is a central feature of **Indra Jatra**, Kathmandu's most important public festival, held for eight days in Bhadra (August–September). The festival honours **Indra**, the king of the gods, and marks the end of the monsoon season.

According to the founding myth, Indra descended to earth to steal the **Parijat flower** (a divine night-blooming plant) for his mother Dakini. He was caught by the people of Kathmandu and imprisoned. His mother came to retrieve him and, in compensation for the disruption, promised to take with her all those who had died during the preceding monsoon season — ensuring their souls would reach the heavenly realm. Indra Jatra celebrates this bargain.

During the festival:
- The **Kumari** (living goddess) is taken through the city in a chariot, blessing the crowds
- The **Indra Jatra** chariot carries images of Kumari, Ganesh, and Bhairava
- The **Lakhe** dances through the streets and Durbar Square
- **Mahadeva** and **Kumar** (Kartikeya) masked dances are also performed
- Tongba (fermented millet drink) flows freely, and the city stays alive through the night

## The Living Tradition

The Lakhe dance is performed by specific Newar communities whose families have held the right and responsibility for generations. The role of Lakhe dancer is both an honour and a spiritual duty — the dancer undergoes ritual purification before wearing the mask and is understood to be temporarily inhabited by the Lakhe's energy during the performance.

In a city increasingly shaped by modernity and migration, the sight of the Lakhe lurching through Kathmandu's ancient streets is a reminder that the wild has always lived alongside the civilised — and that keeping it ritually present is what keeps it benevolent.`,
    seoTitle: 'The Lakhe Dance: Story and Significance in Kathmandu\'s Indra Jatra',
    seoDescription: 'The myth and tradition of the Lakhe demon dance during Indra Jatra in Kathmandu — how a fearsome demon was tamed to become the valley\'s guardian.',
  },
  {
    slug: 'hanuman-kathmandu-durbar-square',
    title: 'Hanuman: The Devoted Servant and His Temple at Kathmandu Durbar Square',
    category: 'DEITY',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Hanuman_singing.jpg',
    excerpt: 'At the entrance to Kathmandu\'s royal palace stands a Hanuman statue so thick with vermilion and oil that his features have long been obscured — offered by devotees for centuries. Hanuman\'s story is one of absolute devotion: a being who found his highest nature in service to Rama.',
    relatedPlaceSlugs: ['kathmandu-durbar-square', 'pashupatinath-temple'],
    content: `## The Birth of Hanuman

**Hanuman** was born to **Anjana**, an apsara (celestial being) who had been cursed to take the form of a female monkey, and **Kesari**, a monkey chieftain. His divine father was **Vayu**, the wind god, who carried the divine essence that would make Hanuman powerful beyond measure.

As an infant, Hanuman mistook the rising sun for a ripe red fruit and leapt toward it to eat it. The god Indra struck him with his thunderbolt, injuring his jaw — giving him the name Hanuman ("the one with a broken jaw" or, more poetically, "the one whose jaw was stuck"). But Vayu, angered by the injury to his son, withdrew from the world, causing all living things to suffocate. The gods appeased Vayu with boons that made Hanuman effectively invincible.

## Powers and Gifts

Hanuman received extraordinary gifts from the gods:
- **From Brahma**: freedom from weapons in battle
- **From Indra**: immunity to his thunderbolt
- **From Agni**: immunity to fire
- **From Varuna**: immunity to water
- **From Surya**: power to change his size at will, from minute to cosmic

As a child, Hanuman studied the scriptures directly from the sun god Surya, who recognised his extraordinary nature. He became both a great scholar and a peerless warrior — but these powers lay dormant until Rama called them forth.

## Service to Rama

When Hanuman encountered Rama searching for Sita, something awoke in him. This was not merely a task — this was his dharma. Hanuman became Rama's most devoted servant, and in that devotion found his own highest nature.

His greatest acts in the Ramayana:
- **Discovering Sita** in Lanka — leaping the ocean, finding her in the Ashoka grove, offering her Rama's ring, bringing back her message
- **Burning Lanka** — caught and set on fire by Ravana's soldiers, Hanuman used his burning tail to set Lanka ablaze before escaping
- **The Sanjeevani** — when Lakshmana lay dying from Indrajit's arrow, Hanuman flew to the Dronagiri mountain in the Himalayas. Unable to identify the specific healing herb, he lifted the entire mountain and carried it to Lanka

When Rama asked what reward Hanuman wanted after the war, Hanuman asked only to live as long as Rama's story was told.

## Hanuman Dhoka, Kathmandu

The **Hanuman Dhoka** ("Hanuman Gate") is the main entrance to the old royal palace in Kathmandu Durbar Square. A stone statue of Hanuman — placed there in 1672 CE by King Pratap Malla — guards the entrance. The statue is covered in a thick coat of red vermilion (sindoor) and mustard oil applied by devotees over centuries; his original features are almost entirely obscured.

A ceremonial red umbrella shades him perpetually. The royal family of Nepal traditionally sought Hanuman's blessing before military campaigns and important state decisions — the palace gate named for him signified that the kingdom was under his protection.

Across Nepal, **Hanuman shrines** appear at the corners of streets, at the base of peepal trees, and beside temple gates. His image — either as a standing figure with folded hands, or tearing open his chest to reveal Rama and Sita within his heart — is omnipresent.

He is loved not because he is invincible, but because he chose to serve when he could have ruled.`,
    seoTitle: 'Hanuman: Story, Powers, and the Hanuman Dhoka of Kathmandu',
    seoDescription: 'The story of Hanuman\'s birth, his extraordinary powers, his service to Rama, and the significance of the red-coated Hanuman statue at Kathmandu Durbar Square.',
  },
  {
    slug: 'garuda-garuda-purana-death-rituals',
    title: 'Garuda and the Garuda Purana: Rituals of Death in Nepal',
    category: 'DEITY',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Garuda_by_Hyougushi_in_Delhi.jpg',
    excerpt: 'Garuda is Vishnu\'s great eagle vehicle — half man, half bird, enemy of serpents, carrier of the divine. But it is the Garuda Purana, recited for 13 days after a Hindu death in Nepal, that makes him central to every family\'s encounter with mortality.',
    relatedPlaceSlugs: ['pashupatinath-temple'],
    content: `## Garuda's Birth and Nature

**Garuda** was born to the sage **Kashyapa** and his wife **Vinata**. Before his birth, Vinata had made a bet with her co-wife Kadru (mother of the serpents) and lost — she became Kadru's slave. Garuda, determined to free his mother, asked the serpents what price they wanted for her release. They said: bring us the amrita (nectar of immortality) from heaven.

Garuda flew to heaven. He overpowered Indra's armies, put out the ring of fire protecting the amrita with the water of rivers, reduced the spinning blade-wheel to nothing by shrinking himself, and blinded the two serpent guardians with a cloud of dust. He seized the pot of amrita and flew back.

On his way, he encountered **Vishnu**, who was moved by Garuda's devotion to his mother and his sheer power. Vishnu offered him a boon. Garuda asked to be immortal without drinking the amrita himself. Vishnu agreed — and in turn asked Garuda to be his vehicle (vahana). Garuda accepted, but placed the amrita on a blade of kush grass for the serpents rather than giving it to them directly (Indra retrieved it before the serpents could drink it fully).

## Garuda as Vishnu's Mount

In Hindu iconography, **Vishnu rides on Garuda's back** — the preserver god carried by the king of birds through the three worlds. Garuda is depicted as a powerful golden eagle-man, with the wings and beak of an eagle and the body of a man. He is the natural enemy of serpents (Nagas), and his shadow is said to drive them away.

Garuda represents **swiftness, courage, and liberation** — the qualities that allow a soul to rise above the cycle of rebirth.

## The Garuda Purana

The **Garuda Purana** is one of the eighteen major Puranas (sacred texts) of Hinduism. In the text, Garuda asks Vishnu about the nature of death, the journey of the soul, the afterlife, and how living beings can attain liberation. Vishnu answers in full.

The text describes:
- What happens to the soul immediately after death (it begins a journey on the **Vaitarani river** to Yamaraj's court)
- How Yamaraj judges the soul's accumulated karma
- The various heavenly and hellish realms where souls experience the fruits of their actions
- The rites that the living can perform to help the deceased soul pass safely
- The path to moksha (final liberation)

## The 13-Day Recitation in Nepal

When a Hindu dies in Nepal, the **Garuda Purana** is traditionally recited in the home of the deceased for the **13 days** of ritual mourning. This period is called **Kriya** or **Tehrahi**.

During these 13 days:
- Family members observe restrictions on food (often eating only one simple meal)
- A **brahmin priest** recites sections of the Garuda Purana daily
- The soul is believed to still be near the home, receiving the benefit of the recitation
- On the **13th day**, the main Shraddha ceremony is performed, formally releasing the soul

The recitation serves as both comfort for the living (understanding the journey the departed has begun) and as a gift to the soul (the merit of sacred hearing accumulating around it as it travels).

At **Pashupatinath**, the cremation ghats on the Bagmati River are where countless such journeys begin every day — and the Garuda Purana's verses accompany every one.`,
    seoTitle: 'Garuda, the Garuda Purana, and Nepal\'s 13-Day Death Rituals',
    seoDescription: 'The story of Garuda — Vishnu\'s eagle mount — and why the Garuda Purana is recited for 13 days after a Hindu death in Nepal.',
  },
  {
    slug: 'chhath-puja-sun-god',
    title: 'Chhath Puja: Devotion to the Sun God',
    category: 'RITUAL',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/JanakpurChhathParvaFestival.jpg/1280px-JanakpurChhathParvaFestival.jpg',
    excerpt: 'Chhath is one of the most ancient and physically demanding festivals in Nepal and India — devotees fast for 36 hours, standing waist-deep in rivers at sunrise and sunset to offer arghya to the sun. It is a direct, priest-free act of gratitude to the source of all life.',
    relatedPlaceSlugs: [],
    content: `## Surya — The Sun God

**Surya** (the sun) is one of the oldest deities in the Vedic tradition, predating many of the later Hindu pantheon. He is described in the Rigveda as the eye of the cosmos, the soul of all that moves and stands still, the provider of light, warmth, and the energy that sustains life on earth.

Surya travels across the sky in a golden chariot pulled by seven horses (representing the seven colours of light and the seven days of the week). His charioteer is **Aruna**, the god of dawn. He is father to **Karna** (of the Mahabharata), **Yama** (god of death), **Yami** (the Yamuna river), and the physician twins Ashvini Kumara.

## The Connection to Karna

One of the most beloved stories connected to Chhath is that of **Karna**, the tragic hero of the Mahabharata. Born to the princess Kunti before her marriage, through her use of the divine mantra given by the sage Durvasa, Karna was the son of Surya. Kunti set him adrift on a river, where he was found and raised by a charioteer family.

Throughout his life, Karna honoured his father Surya with daily prayers standing in river water — the **Surya Arghya** — which gave him divine protection. No weapon could harm him while he performed this worship. The tradition of standing in water to offer prayers to the sun is said to have its roots in Karna's devotion.

**Draupadi** is also connected to Chhath — according to some traditions, she observed a similar fast during the Pandavas' exile to gain strength for the difficult years ahead.

## The Chhath Ritual

Chhath is observed on the **sixth day of Kartik's bright fortnight** (October–November), but the rituals span four days:

**Day 1 — Nahay Khay**: Devotees bathe in the river, bring home the sacred water, cook sattvic food (often bottle gourd and rice), and eat one simple meal.

**Day 2 — Kharna**: A day-long fast ends at sunset with the preparation of **rasiao kheer** (rice pudding made with jaggery) and rotis (flatbreads). This is shared with family and offered to the sun.

**Day 3 — Sandhya Arghya (Evening Offering)**: The most intense day. Devotees, having fasted since the previous evening, gather at rivers and ponds as the sun sets. They stand in the water holding offerings of fruits, sugarcane, and thekua (a special fried wheat cake) in bamboo baskets. As the sun dips below the horizon, they raise the offerings toward the sinking light — this is the **Sandhya Arghya**.

**Day 4 — Usha Arghya (Morning Offering)**: Before dawn, devotees return to the water. They stand in the cold river as the sky lightens, waiting for the first visible light of the sun above the horizon. When it appears, they raise their offerings again — the **Usha Arghya** — completing the four-day cycle.

## Chhath in Nepal

Chhath is especially significant in Nepal's **Madhesh (Terai) region**, where the festival is one of the most important of the year. Nepalis of Maithili, Bhojpuri, and Awadhi heritage celebrate it with particular intensity — rivers and ponds are crowded with tens of thousands of devotees.

Kathmandu's **Bagmati and Tukucha rivers**, and the ponds of Rani Pokhari and Ranipokhari, also fill with worshippers. The festival requires no temple, no priest, and no intermediary — just the sun, the water, and the devotee. This directness is part of its ancient appeal.`,
    seoTitle: 'Chhath Puja Nepal: The Story and Ritual of Sun Worship',
    seoDescription: 'The origins of Chhath Puja — Surya the sun god, Karna\'s devotion, and the four-day ritual of standing in rivers at sunrise and sunset in Nepal.',
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
console.log('Batch 5 done — 4 stories')
