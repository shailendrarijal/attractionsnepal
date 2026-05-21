import { Router } from 'express'
import prisma from '../lib/prisma.js'

const router = Router()

// GET /api/stories
router.get('/', async (req, res) => {
  try {
    const { category, search, page = '1', limit = '20' } = req.query
    const where = { published: true }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } },
      ]
    }

    if (category) {
      where.category = category
    }

    const skip = (parseInt(page) - 1) * parseInt(limit)
    const take = Math.min(parseInt(limit), 50)

    const [stories, total] = await Promise.all([
      prisma.story.findMany({
        where,
        skip,
        take,
        orderBy: { publishedAt: 'desc' },
        select: {
          id: true,
          slug: true,
          title: true,
          excerpt: true,
          category: true,
          heroImage: true,
          publishedAt: true,
          relatedPlaceSlugs: true,
        },
      }),
      prisma.story.count({ where }),
    ])

    res.json({ stories, total, page: parseInt(page), limit: take })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch stories' })
  }
})

// GET /api/stories/:slug
router.get('/:slug', async (req, res) => {
  try {
    const story = await prisma.story.findUnique({
      where: { slug: req.params.slug, published: true },
      include: {
        tags: { include: { tag: true } },
      },
    })

    if (!story) return res.status(404).json({ error: 'Story not found' })

    res.json(story)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch story' })
  }
})

export default router
