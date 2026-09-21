import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import slugify from 'slugify'
import { readFileSync } from 'fs'

const prisma = new PrismaClient()

function slug(name) {
  return slugify(name, { lower: true, strict: true })
}

async function main() {
  const filePath = process.argv[2]
  if (!filePath) {
    console.error('Usage: node prisma/add-place.js <path-to-json>')
    process.exit(1)
  }

  const data = JSON.parse(readFileSync(filePath, 'utf-8'))

  const required = ['name', 'category', 'summary', 'story', 'district', 'province']
  const missing = required.filter((field) => !data[field])
  if (missing.length) {
    console.error(`Missing required fields: ${missing.join(', ')}`)
    process.exit(1)
  }

  const { tags = [], sections = [], ...rest } = data
  const placeSlug = slug(data.name)

  const tagIds = await Promise.all(
    tags.map(async (name) => {
      const tag = await prisma.tag.upsert({
        where: { slug: slug(name) },
        update: {},
        create: { name, slug: slug(name) },
      })
      return tag.id
    })
  )

  const place = await prisma.place.upsert({
    where: { slug: placeSlug },
    update: {},
    create: {
      ...rest,
      slug: placeSlug,
      published: rest.published ?? false,
      publishedAt: rest.published ? new Date() : null,
      tags: {
        create: tagIds.map((tagId) => ({ tag: { connect: { id: tagId } } })),
      },
      sections: { create: sections },
    },
  })

  console.log(`✅ Added place (draft): ${place.name} — /places/${place.slug}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
