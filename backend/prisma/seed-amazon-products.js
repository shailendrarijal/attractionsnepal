import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const TAG = process.env.AMAZON_ASSOCIATE_TAG || 'attnepal-22'

function searchUrl(query) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${TAG}&linkCode=ur2`
}

const groups = [
  {
    context: 'TREKKING',
    title: 'Essential Trekking Gear for Nepal',
    products: [
      { name: 'Trekking Poles',              icon: '🥢', note: 'Collapsible, carbon or aluminium', url: searchUrl('collapsible trekking poles hiking carbon') },
      { name: 'Down Jacket',                 icon: '🧥', note: '600-fill+ for 4,000m+',            url: searchUrl('packable down jacket hiking ultralight') },
      { name: 'Trekking Boots',              icon: '🥾', note: 'Waterproof, ankle support',        url: searchUrl('waterproof trekking boots hiking ankle support') },
      { name: 'Water Filter',                icon: '💧', note: 'Sawyer Squeeze or similar',        url: searchUrl('Sawyer squeeze water filter hiking') },
      { name: 'Headlamp',                    icon: '🔦', note: 'Min 300 lumens + spare batteries', url: searchUrl('Black Diamond headlamp 400 lumens') },
      { name: 'Sleeping Bag −10°C',          icon: '🛏️', note: 'Essential for high altitude',      url: searchUrl('sleeping bag -10 degree hiking lightweight') },
      { name: 'Moisture-Wicking Base Layer', icon: '👕', note: 'Merino wool or synthetic',         url: searchUrl('merino wool base layer trekking') },
      { name: 'Trekking Backpack 50L',       icon: '🎒', note: 'Osprey, Deuter or similar',        url: searchUrl('trekking backpack 50L waterproof') },
    ],
  },
  {
    context: 'WILDLIFE',
    title: 'What to Bring on Safari',
    products: [
      { name: 'Compact Binoculars', icon: '🔭', note: 'For birdwatching and wildlife',   url: searchUrl('compact binoculars birdwatching waterproof') },
      { name: 'Safari Sun Hat',     icon: '🧢', note: 'Wide brim, UPF 50+',              url: searchUrl('safari sun hat UPF 50 wide brim') },
      { name: 'Insect Repellent',   icon: '🦟', note: 'DEET-based for Terai jungle',     url: searchUrl('DEET insect repellent travel jungle') },
      { name: 'Quick-Dry Clothing', icon: '👕', note: 'Essential in humid jungle',       url: searchUrl('quick dry hiking shirt UPF protection') },
    ],
  },
  {
    context: 'GENERAL',
    title: 'Nepal Travel Accessories',
    products: [
      { name: 'Universal Travel Adapter', icon: '🔌', note: 'Nepal uses Type C/D/M',          url: searchUrl('universal travel adapter all countries') },
      { name: 'Power Bank 20,000mAh',     icon: '🔋', note: 'Essential in mountain teahouses', url: searchUrl('power bank 20000mAh compact travel') },
      { name: 'Packing Cubes',            icon: '🧳', note: 'Compress and organise your bag',  url: searchUrl('packing cubes set travel organizer') },
      { name: 'Travel First Aid Kit',     icon: '🩹', note: 'Blisters, antiseptic, rehydration', url: searchUrl('travel first aid kit compact hiking') },
    ],
  },
]

async function main() {
  for (const group of groups) {
    await prisma.amazonProductGroup.upsert({
      where: { context: group.context },
      update: { title: group.title, products: group.products },
      create: group,
    })
    console.log(`✓ ${group.context}`)
  }
  console.log('Amazon product groups seeded.')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
