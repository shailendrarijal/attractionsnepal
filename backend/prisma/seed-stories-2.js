import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const stories = [
  {
    slug: 'teej-festival-parvati-shiva',
    title: 'Teej: The Festival of Women\'s Devotion',
    category: 'FESTIVAL',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Teej.jpg/1280px-Teej.jpg',
    excerpt: 'Teej is Nepal\'s most vibrant women\'s festival — a day of fasting, red saris, dancing, and prayers for a husband\'s long life. Its roots lie in Parvati\'s fierce austerities to win Shiva as her husband, a devotion so intense the gods themselves had to intervene.',
    relatedPlaceSlugs: ['pashupatinath-temple'],
    content: `## Parvati's Longing for Shiva

After Sati's death, Shiva withdrew into deep meditation on Mount Kailash, indifferent to the world. The goddess was reborn as **Parvati**, daughter of the mountain king Himavan and his wife Mena. From childhood, Parvati was drawn to Shiva with an inexplicable love — she recognised in him her eternal consort from her previous life.

But Shiva, immersed in meditation, paid her no attention. Parvati began serving him — bringing flowers, sweeping his meditation seat, offering water. Still he did not look up.

## The Austerities

Parvati's mother Mena pleaded with her to give up on the ash-smeared ascetic and marry a more suitable god. Parvati refused. She retreated to the forest and undertook **tapasya** (austerities) of extraordinary intensity — standing on one foot, surviving on fallen leaves, then on only water, then on nothing at all. For thousands of years she fasted and meditated, her single-pointed devotion fixed on Shiva.

The god Kama (desire) was sent to pierce Shiva with a love arrow to awaken him. Shiva opened his third eye and burned Kama to ash. Still Parvati continued her austerities.

Finally, the creator Brahma and the gods appealed to Shiva: Parvati's tapasya had purified her beyond all comparison; she was the only one worthy to be his consort and to help anchor his cosmic energy. Shiva relented. He came to Parvati in disguise to test her one final time — then revealed himself and accepted her as his wife.

## The Traditions of Teej

**Teej** (also called Haritalika Teej) is observed on the third day of the bright fortnight of Bhadra (August–September). It commemorates Parvati's victory through devotion.

**Dar** — the evening before Teej, women feast extravagantly before the fast begins. Families prepare rich sweets and delicacies. Women visit each other's homes, singing and dancing.

**The Fast** — on Teej day itself, married women observe a strict nirjala (waterless) fast for their husband's long life, health, and prosperity. Unmarried women fast praying for a good husband. The fast lasts 24 hours without a drop of water.

**Red saris and singing** — women dress in brilliant red (the colour of marriage and good fortune), wear red bangles and gold jewellery, and gather at temples — especially **Pashupatinath** in Kathmandu — to sing Teej songs. These songs, passed down through generations, tell of the joys and hardships of married life with candid humour and emotion.

**Bathing in holy rivers** — on the following day (Rishi Panchami), women bathe in sacred rivers to purify themselves of any sins committed unknowingly during the previous year.

Teej is one of the few festivals that is entirely women-led — a day when women reclaim public space through song, dance, and collective devotion, while also expressing a deep cultural belief in the power of a wife's prayers to sustain her family.`,
    seoTitle: 'Teej Festival Nepal: The Story of Parvati\'s Devotion to Shiva',
    seoDescription: 'The myth behind Teej — how Parvati fasted and meditated for thousands of years to win Shiva as her husband, and why Nepali women still fast on this day.',
  },
  {
    slug: 'holi-holika-prahlad',
    title: 'Holi: The Festival of Colours',
    category: 'FESTIVAL',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Holika_dhan.jpg/1280px-Holika_dhan.jpg',
    excerpt: 'Before the colours, there was fire. Holi begins with the burning of Holika — a demoness who tried to kill the devotee Prahlad by holding him in flames. His faith in Vishnu made him fireproof; she burned instead. The following morning, the world erupted in joyful colour.',
    relatedPlaceSlugs: [],
    content: `## The Devotee the Demon King Could Not Break

King **Hiranyakashipu** was a powerful asura who had obtained a boon making him nearly indestructible — he could not be killed by man or beast, by day or night, inside or outside, on land or in the air, by any weapon. Drunk on this invincibility, he declared himself a god and ordered all beings in his kingdom to worship him instead of Vishnu.

His own son **Prahlad** refused. Despite being an asura prince, Prahlad was a devoted Vaishnava — his love for Vishnu was unshakeable from birth. No amount of threats, punishments, or torture could make him recant. Hiranyakashipu tried to have him trampled by elephants, thrown from a cliff, drowned, and poisoned. Prahlad survived each time through divine protection.

## Holika and the Fire

In desperation, Hiranyakashipu turned to his sister **Holika**, who possessed a magical shawl that made her immune to fire. The plan was simple: Holika would sit in a bonfire holding Prahlad in her lap. He would burn; she would be unharmed.

They entered the fire. But the gods intervened — a wind caught Holika's shawl and wrapped it around Prahlad instead. Holika, stripped of her protection, was burned to ash. Prahlad walked out unharmed, chanting Vishnu's name.

## Vishnu as Narasimha

Enraged, Hiranyakashipu confronted Prahlad and mockingly asked where his Vishnu was. *"Is he in this pillar?"* he demanded, striking a column in his palace. The pillar split open — and out emerged **Narasimha**, Vishnu's half-man half-lion avatar. Narasimha placed Hiranyakashipu across his lap (neither on land nor in the air), at the threshold of the palace (neither inside nor outside), at dusk (neither day nor night), and tore him apart with his lion claws (no weapon) — satisfying every condition of the boon.

## The Morning of Colours

The morning after Holika's burning, the people of the kingdom celebrated with joy — throwing coloured powders and water at each other, liberated from the tyrant's oppression. This became Holi: the day the world chose colour over darkness.

## Holi in Nepal

Nepal celebrates Holi with particular energy in Kathmandu and the Terai:

- **Holika Dahan** (bonfire night) — bonfires are lit the evening before Holi, symbolising the burning of evil
- **Fagu Purnima** — Holi falls on the full moon of Falgun (February–March), one of the last days of winter
- **Colours and water** — the next morning, streets erupt with coloured powder (abir/gulal) and water balloons; the revelry lasts all day
- **Bhang and sweets** — traditional preparations of bhang (cannabis-infused drink) and special sweets mark the day

In the Kathmandu Valley, Holi is celebrated a day earlier than in the Terai, following the traditional Newari calendar. In Bhaktapur, a tall ceremonial pole (Chir) erected in the Durbar Square is burned as Holika.

Holi is one of the few festivals in Nepal where social hierarchies temporarily dissolve — neighbours douse neighbours with colour regardless of age, caste, or position. The message of Prahlad endures: devotion and joy are indestructible.`,
    seoTitle: 'Holi in Nepal: The Story of Holika, Prahlad, and the Festival of Colours',
    seoDescription: 'The myth behind Holi — Prahlad\'s unshakeable faith surviving the fire, and why Nepal celebrates with bonfires and colours every Falgun.',
  },
  {
    slug: 'ramayana-nepali-epic',
    title: 'The Ramayana: Nepal\'s Sacred Epic',
    category: 'SCRIPTURE',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/R%C4%81ma_slays_R%C4%81va%E1%B9%87a.png',
    excerpt: 'The Ramayana is not merely a story — it is a guide to dharma, a portrait of ideal conduct, and a living mythology. Nepal\'s deep connection to the epic runs through Janakpur (Sita\'s birthplace), the festivals of Dashain and Ram Navami, and daily temple worship.',
    relatedPlaceSlugs: ['janaki-mandir'],
    content: `## The Composition

The Ramayana was composed by the sage **Valmiki**, who according to tradition received the story directly from the divine messenger Narada. It consists of approximately 24,000 verses arranged in seven books (kandas). The central narrative is the story of Prince Rama of Ayodhya — considered the seventh avatar of Vishnu — his exile, the abduction of his wife Sita by the demon king Ravana of Lanka, and the war to rescue her.

## The Seven Books

**Bala Kanda** — Rama's birth, childhood, and the breaking of Shiva's bow at Sita's swayamvara in Mithila (present-day Janakpur, Nepal). Rama and Sita are married.

**Ayodhya Kanda** — Rama is about to be crowned king when his stepmother Kaikeyi activates two boons she holds over King Dasharatha — Rama must be exiled for fourteen years and her son Bharata crowned instead. Rama accepts without complaint. Sita and Lakshmana insist on accompanying him. The grief kills Dasharatha.

**Aranya Kanda** — Life in the forest. The demoness Surpanakha is mutilated by Lakshmana after she attacks Sita. Her brother Ravana, seeking revenge and entranced by descriptions of Sita's beauty, plans the abduction.

**Kishkindha Kanda** — Rama allies with the monkey king Sugriva after helping him defeat his brother Vali. Hanuman is introduced. The search for Sita begins.

**Sundara Kanda** — Hanuman's solo journey to Lanka, his discovery of Sita in the Ashoka grove, his encounter with Ravana, and the burning of Lanka. Considered the most devotionally powerful section — many Nepalis recite the Sundara Kanda on Saturdays.

**Yuddha Kanda** — The bridge to Lanka, the war, the deaths of Ravana's generals and sons, and finally the defeat of Ravana by Rama's divine arrow. Sita is rescued.

**Uttara Kanda** — The return to Ayodhya, Rama's coronation, and the later chapters including Sita's banishment (considered by many scholars to be a later addition to the original text).

## Nepal's Connection

Nepal's bond with the Ramayana is rooted in geography. **Janakpur** in the Madhesh province is identified as **Mithila** — the kingdom of Sita's father Janaka. The Janaki Mandir stands at the spot where Sita is believed to have been born. Every year, the wedding of Rama and Sita is re-enacted at the **Vivah Panchami** festival, drawing hundreds of thousands.

**Ram Navami** (Rama's birthday) is celebrated across Nepal with temple processions and Ramayana recitations. The epic is also deeply embedded in the **Dashain** festival through the story of Rama's victory over Ravana.

In Nepali homes, Hanuman is the most personally beloved deity of the Ramayana — protector, problem-solver, utterly devoted. His image guards doorways, shops, and vehicles across the country.`,
    seoTitle: 'The Ramayana: Nepal\'s Sacred Epic and Its Connection to Janakpur',
    seoDescription: 'An overview of the Ramayana\'s seven books and Nepal\'s deep connection to the epic through Janakpur, Dashain, and daily religious life.',
  },
  {
    slug: 'mahabharata-epic-dharma',
    title: 'The Mahabharata: The Epic of Dharma',
    category: 'SCRIPTURE',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Kurukshetra.jpg',
    excerpt: 'The Mahabharata is the longest epic in the world — ten times the length of the Iliad and Odyssey combined. At its heart is the Kurukshetra war between cousins, and the Bhagavad Gita spoken on the battlefield. The Pandavas\' journey to heaven passed through the Nepal Himalayas.',
    relatedPlaceSlugs: ['muktinath-temple'],
    content: `## The Scope of the Epic

Composed by the sage **Vyasa** (also known as Krishna Dvaipayana), the Mahabharata contains roughly 100,000 verses — making it the longest known epic poem in the world. It includes within it the **Bhagavad Gita**, the **Vishnu Sahasranama**, and numerous subsidiary stories and philosophical treatises. The epic is traditionally said to contain everything — *"what is here is found elsewhere; what is not here is nowhere."*

## The Central Conflict

The Mahabharata centres on the struggle for the throne of Hastinapura between two sets of cousins: the five **Pandavas** (Yudhishthira, Bhima, Arjuna, Nakula, Sahadeva) and the hundred **Kauravas** led by Duryodhana. The Pandavas' father was King Pandu; the Kauravas' father was the blind king Dhritarashtra.

The conflict escalates through a rigged dice game in which Yudhishthira loses his kingdom, his brothers, and his wife Draupadi — who is publicly humiliated. The Pandavas are exiled for twelve years plus one year incognito. When they return, Duryodhana refuses to give them even five villages. War becomes inevitable.

## The Bhagavad Gita

On the battlefield of **Kurukshetra**, as the armies face each other, Arjuna is overcome with grief at the prospect of killing his kinsmen. He refuses to fight. His charioteer — revealed to be Lord Vishnu in the form of **Krishna** — delivers the Bhagavad Gita: 700 verses on duty, the immortality of the soul, the three paths to liberation (knowledge, devotion, action), and the nature of God. It remains one of the world's most read philosophical texts.

## The War and Its Aftermath

The eighteen-day battle of Kurukshetra ends with the Pandavas' victory, but at tremendous cost — virtually every warrior on both sides dies, including the Pandavas' sons and beloved teacher Drona. Yudhishthira, the eldest, rules a kingdom emptied of its warrior class.

## The Himalayan Connection

After ruling for decades, the Pandavas renounced the throne and undertook their final journey — the **Mahaprasthana** (great journey) — walking northward through the Himalayas toward heaven. The route passed through what is now Nepal.

**Muktinath** in the Mustang district is identified in tradition with the journey's path — pilgrims still seek liberation (moksha) there as the Pandavas sought it before them. The entire Himalayan range is considered the domain of Shiva, and the Pandavas' northward march through it symbolises the soul's journey toward liberation.

## The Mahabharata in Nepali Culture

The epic permeates Nepali life through:
- **Dashain** — the 15-day festival draws on both the Ramayana (Rama's victory) and Mahabharata (the goddess Durga's role)
- **Krishna Janmashtami** — celebrating the birth of the Bhagavad Gita's narrator
- **Bisket Jatra** in Bhaktapur, which re-enacts elements of mythological warfare
- **Gharti and Kshetri surnames** — many Nepali families trace their lineage to Mahabharata warriors`,
    seoTitle: 'The Mahabharata: The Epic of Dharma and its Nepal Connections',
    seoDescription: 'An overview of the Mahabharata, the Bhagavad Gita, and the Pandavas\' final Himalayan journey through Nepal toward liberation.',
  },
  {
    slug: 'four-yugas-ten-avatars-vishnu',
    title: 'The Four Yugas and the Ten Avatars of Vishnu',
    category: 'MYTHOLOGY',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Vishnu_Avatars.jpg',
    excerpt: 'Hindu cosmology divides time into four great ages — Satya, Treta, Dwapara, and Kali Yuga — each shorter and more corrupt than the last. In each age, Vishnu descends to earth as an avatar to restore dharma. Nine have come; the tenth is yet to arrive.',
    relatedPlaceSlugs: ['muktinath-temple', 'boudhanath-stupa'],
    content: `## The Cosmic Cycle of Time

Hindu cosmology conceives of time not as a line but as a wheel. One complete cycle — a **Mahayuga** — consists of four yugas (ages) totalling 4,320,000 human years. We are currently in the **Kali Yuga**, the final and most degenerate age, which began in 3102 BCE according to traditional reckoning.

## The Four Yugas

**Satya Yuga** (Krita Yuga) — the Golden Age. Lasting 1,728,000 years. Dharma walks on four legs. Humans are virtuous, long-lived, and spiritually aware. There is no disease, falsehood, or conflict. The divine is directly accessible.

**Treta Yuga** — the Silver Age. Lasting 1,296,000 years. Dharma loses one leg. Ritual and sacrifice become necessary to maintain order. The Ramayana takes place in this age — Rama's perfect conduct represents the ideal of an age when dharma is still mostly intact but requires effort to maintain.

**Dwapara Yuga** — the Bronze Age. Lasting 864,000 years. Dharma loses another leg. The Mahabharata and Krishna's life occur here. Greed, conflict, and moral ambiguity characterise the age. Even the gods must choose sides.

**Kali Yuga** — the Iron Age. Lasting 432,000 years. Dharma stands on only one leg. Dishonesty, materialism, conflict, and spiritual ignorance increase. Lifespans shorten, virtue declines. We are roughly 5,100 years into this age.

After Kali Yuga ends, the cycle begins again with a new Satya Yuga.

## The Dashavatara — Ten Avatars of Vishnu

In each age, Vishnu descends to restore balance:

**1. Matsya (Fish)** — saved the first man Manu and the Vedas from a great flood by pulling their boat to safety.

**2. Kurma (Tortoise)** — provided his shell as the base for Mount Mandara during Samudra Manthan.

**3. Varaha (Boar)** — the earth was submerged by the demon Hiranyaksha; Varaha dived into the cosmic ocean, killed the demon, and lifted the earth on his tusks.

**4. Narasimha (Man-Lion)** — half man, half lion; killed Hiranyakashipu to save the devotee Prahlad.

**5. Vamana (Dwarf)** — the demon king Mahabali had conquered all three worlds. Vamana appeared as a dwarf brahmin and asked for three steps of land. Given permission, he grew to cosmic size and covered earth and heaven in two steps — the third step pressed Mahabali to the underworld.

**6. Parashurama (Rama with an axe)** — a brahmin warrior who destroyed the corrupt Kshatriya class twenty-one times over to restore dharmic order.

**7. Rama** — the prince of Ayodhya, perfect man and ideal king, who defeated Ravana and demonstrated righteous conduct.

**8. Krishna** — the most beloved avatar; teacher of the Bhagavad Gita, slayer of Kamsa, and the complete (purna) avatar containing all divine qualities.

**9. Buddha** — Gautama Buddha is included in the traditional Vaishnava list as an avatar, interpreted as Vishnu descending to compassionately redirect those following the wrong path.

**10. Kalki** — yet to come. At the end of Kali Yuga, Kalki will appear riding a white horse, wielding a flaming sword, and will destroy evil and the corrupt world order — ushering in a new Satya Yuga.

In Nepal, all ten avatars are worshipped, with Krishna, Rama, and Narasimha having dedicated temples. The concept of the yugas is woven into how Nepalis understand current events, social decline, and the long arc of cosmic justice.`,
    seoTitle: 'The Four Yugas and Dashavatara: Ten Avatars of Vishnu Explained',
    seoDescription: 'How Hindu cosmology divides time into four great ages, and the ten avatars of Vishnu who descend in each age to restore dharma — from Matsya to Kalki.',
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
console.log('Batch 2 done — 5 stories')
