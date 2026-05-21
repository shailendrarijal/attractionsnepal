import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const stories = [
  {
    slug: 'raktabeej-kali-kalinchowk',
    title: 'Raktabeej, Kali, and the Sacred Kalinchowk Temple',
    category: 'MYTHOLOGY',
    excerpt: 'The demon Raktabeej had a fatal boon: every drop of his blood that hit the ground spawned a new demon. Durga\'s armies were overwhelmed — until she transformed into the fearsome Kali, who drank every drop before it could fall. Kalinchowk in Dolakha is where this energy resides.',
    relatedPlaceSlugs: ['kalinchowk'],
    content: `## The Undefeatable Demon

Among the generals of the demon army that Durga fought during her nine-day battle, **Raktabeej** ("blood-seed") was the most terrifying. He possessed a boon that made him seemingly impossible to kill: every drop of his blood that struck the earth would instantly give rise to a new demon identical to him.

When Durga and her warrior forms — including Kali, Chamunda, and the seven Matrikas — attacked Raktabeej, they found that for every wound they inflicted, thousands of new Raktabeejas rose from the battlefield. The ground ran with blood, and with it rose an endless army. The gods despaired.

## Durga Becomes Kali

Seeing the situation, **Durga** transformed herself into her most ferocious form — **Kali** (also called Chamunda in some traditions). Dark as a storm cloud, wearing a garland of severed heads, her tongue extended and blood-red, armed with sword and skull-cup, Kali embodied destruction without restraint.

Her strategy was precise: as the other goddesses wounded Raktabeej, **Kali spread her tongue across the entire battlefield** and drank every drop of blood before it could touch the ground. She caught the demon's wounds directly in her mouth, preventing any new demon from being born. Finally, with no blood left to regenerate him, Raktabeej was slain.

## Kali's Uncontrolled Fury

But even after Raktabeej's death, Kali's blood-rage did not subside. She continued to dance across the battlefield, her laughter shaking the cosmos, trampling whatever lay in her path. The gods were terrified. Only one being could stop her.

**Shiva** lay down in her path. When Kali's foot landed on her own husband, she was shocked out of her frenzy — her tongue extended in embarrassment (the iconic image of Kali standing on Shiva with tongue out represents this moment of self-realisation). The cosmic order was restored.

## Kalinchowk — The Temple of the Black Goddess

**Kalinchowk** in Dolakha district, sitting at approximately 3,842 metres on a high ridge in the Jugal Himalayan range, is one of Nepal's most revered Kali shrines. The goddess here is worshipped as **Kalinchowk Bhagawati** — an emanation of Durga/Kali — who is believed to protect the surrounding region and answer prayers with particular swiftness.

The temple is especially crowded during:
- **Dashain** — the nine nights of Durga worship
- **Chaite Dashain** — the spring equivalent of Dashain in Chaitra
- **Full moon days** — when pilgrims make the steep hike or take the cable car to offer worship

The ridge offers panoramic views of Gaurishankar, Melungtse, and other peaks. The combination of high-altitude wilderness and fierce goddess energy makes Kalinchowk one of the most distinctive pilgrimage sites in the Bagmati region.

Devotees believe that the goddess at Kalinchowk is particularly responsive to sincere prayers — and that she tests her devotees as Kali tests the cosmos: with intensity that ultimately purifies.`,
    seoTitle: 'Raktabeej, Goddess Kali, and Kalinchowk Temple Nepal',
    seoDescription: 'The myth of demon Raktabeej and how Durga became Kali to defeat him — and the connection to Kalinchowk temple in Dolakha, Nepal.',
  },
  {
    slug: 'swayambhu-manjushree-kathmandu-valley',
    title: 'Swayambhu: How the Kathmandu Valley Was Born',
    category: 'MYTHOLOGY',
    excerpt: 'Long before Kathmandu existed, the valley was a great lake. From its waters rose a lotus of blazing light — the self-manifested (Swayambhu) flame of primordial Buddha. The bodhisattva Manjushree drained the lake with a single sword stroke, making the valley habitable.',
    relatedPlaceSlugs: ['swayambhunath'],
    content: `## The Lake and the Lotus

According to the **Swayambhu Purana**, one of the most important texts of Newar Buddhism, the Kathmandu Valley was once a vast lake called **Nagadaha** — the lake of serpents. The Nagas (divine serpents) dwelt in its depths, and its waters were pure and still.

Aeons ago, a miraculous lotus rose from the centre of this lake. At its heart burned a radiant, self-arising flame — the **Swayambhu Jyoti** ("self-existent light"). This was understood by the sages to be the visible manifestation of the primordial Adi-Buddha (the original, uncreated Buddha nature), without beginning or form, appearing spontaneously from pure consciousness.

The lotus and its flame attracted pilgrims from distant lands. The bodhisattva **Vipashyi** (one of the seven Buddhas of antiquity) came and scattered seeds at the spot, predicting that one day a great shrine would stand there.

## Manjushree Drains the Lake

The bodhisattva **Manjushree** — embodiment of divine wisdom, typically depicted holding a flaming sword that cuts through ignorance — heard of the sacred flame. He journeyed from his abode on the five-peaked mountain Panchashirsha (identified with Wutai Shan in China) to see it.

Manjushree wanted to make the Swayambhu flame accessible to all beings, not just those who could cross the lake. With his **Chandrahrasa sword** (the moon-bright blade), he struck the southern edge of the valley at **Chovar Gorge**. The lake drained through this cut, and the valley floor emerged — fertile, sheltered by mountains, watered by the rivers that remained.

Manjushree settled people in this new valley and established civilisation there. The hill that once bore the sacred lotus now stood on dry ground — and on it was built the great stupa of **Swayambhunath**, encasing the eternal flame.

## The Naga King's Refuge

When the lake drained, its Naga king **Karkotaka** was left without a home. Manjushree promised him that the valley would always honour the Nagas — their worship would be maintained, and the lake's spirit would never be entirely absent. The serpent shrines throughout Kathmandu, and the festival of Naag Panchami, honour this ancient covenant.

## Swayambhunath Today

The **Swayambhunath Stupa** stands on its hill 77 metres above the valley floor, visible from much of Kathmandu. Its whitewashed dome represents the world; the gilded tower above it bears the all-seeing eyes of the Buddha on four sides, watching all directions. Thirteen rings taper to a spire representing the thirteen steps to enlightenment.

For Newar Buddhists, Swayambhunath is the most sacred site in the valley — older than Boudhanath, predating recorded history. Both Hindus and Buddhists worship here, reflecting Nepal's deep tradition of religious synthesis. Shiva is also venerated at the site, with a Harati temple on the grounds.

The hill is populated by hundreds of rhesus monkeys — so revered and protected that the site is also known to tourists as the **Monkey Temple**.`,
    seoTitle: 'Swayambhu and Manjushree: How Kathmandu Valley Was Created',
    seoDescription: 'The Buddhist creation myth of Kathmandu Valley — how the sacred lake was drained by Manjushree\'s sword and Swayambhunath was built on the primordial lotus hill.',
  },
  {
    slug: 'siddhartha-gautama-buddha',
    title: 'Siddhartha Gautama: The Prince Who Became the Buddha',
    category: 'SCRIPTURE',
    excerpt: 'Born a prince in Lumbini, sheltered from suffering his entire childhood, Siddhartha Gautama encountered old age, sickness, and death in a single afternoon. He walked away from his throne, his wife, and his infant son to find an answer to suffering — and under a Bodhi tree in India, he found it.',
    relatedPlaceSlugs: ['lumbini'],
    content: `## The Prophecy at Birth

In the sixth century BCE, Queen **Mayadevi** of the Shakya kingdom gave birth to a son in a garden at **Lumbini** (in present-day Rupandehi district, Nepal), while travelling to her father's home. The child was named **Siddhartha Gautama** — "he who achieves his goal."

A court sage named Asita came to see the newborn and wept — not from grief, but because he saw the signs of greatness on the child's body and knew he would either become a **Chakravartin** (universal monarch) or a fully enlightened Buddha. The sage wept because he himself was too old to live to see the enlightenment.

## The Sheltered Prince

Siddhartha's father, King **Shuddhodana**, wanted his son to be a great king rather than a wandering ascetic. He built three palaces for the prince — for different seasons — and surrounded him with beauty, pleasure, and youth. Siddhartha married the beautiful **Yashodhara** and had a son named **Rahula**.

But no walls could keep out the truth forever.

## The Four Sights

On four separate chariot rides outside the palace walls, Siddhartha encountered:

1. An **old man** — bent and walking with a stick, his youth entirely consumed
2. A **sick man** — racked with disease, lying in misery
3. A **corpse** — being carried to cremation by mourners
4. A **wandering ascetic** — serene and at peace, who had renounced the world to seek liberation

The first three revealed to Siddhartha that suffering — aging, sickness, death — was inescapable for all beings. The fourth suggested that an answer might exist.

## The Great Renunciation

At 29, Siddhartha left the palace in the middle of the night. He left behind his kingdom, his wife and sleeping son, all comfort and security. He cut off his hair with his sword, exchanged his royal robes for a robe of rags, and began his search for liberation.

He studied under the greatest meditation masters of his time but found their highest states did not answer his question. He then practised extreme asceticism with five companions — starving himself nearly to death — but found this equally fruitless.

## Enlightenment

Accepting a bowl of rice milk from a village girl named Sujata, Siddhartha sat beneath a **Bodhi tree** (a fig tree) at Bodh Gaya in present-day Bihar, India, and resolved not to rise until he attained enlightenment. Through the night he was attacked by **Mara** (the demon of illusion) — first with armies of fear and temptation, then by his daughters of desire.

As dawn broke, Siddhartha attained complete awakening. He became the **Buddha** — the Awakened One. He had understood the nature of suffering, its cause (craving and ignorance), its cessation (nirvana), and the path leading to its cessation (the Noble Eightfold Path).

## Buddha Jayanti in Nepal

**Buddha Jayanti** (also called Vesak) commemorates the Buddha's birth, enlightenment, and death — all said to have occurred on the same full moon day of Baisakh (April–May). In Nepal, the day is a national holiday.

Lumbini receives hundreds of thousands of visitors. At Swayambhunath and Boudhanath stupas in Kathmandu, monks and lay people circumambulate, light butter lamps, offer flowers, and recite sutras. The message Siddhartha carried out of that garden — that suffering has an end — remains the living heart of Nepal's Buddhist tradition.`,
    seoTitle: 'Siddhartha Gautama: Birth in Lumbini and the Path to Enlightenment',
    seoDescription: 'The story of Prince Siddhartha\'s birth in Lumbini, the four sights that changed his life, his renunciation, and his enlightenment as the Buddha.',
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
console.log('Batch 3 done — 3 stories')
