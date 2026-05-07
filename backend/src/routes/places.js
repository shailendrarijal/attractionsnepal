import { Router } from 'express'
import prisma from '../lib/prisma.js'

const router = Router()

// GET /api/places — list published places with optional filters
router.get('/', async (req, res) => {
  try {
    const {
      category,
      province,
      district,
      featured,
      search,
      page = '1',
      limit = '20',
    } = req.query

    const where = { published: true }
    if (category) where.category = category
    if (province) where.province = province
    if (district) where.district = { equals: district, mode: 'insensitive' }
    if (featured === 'true') where.featured = true
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { district: { contains: search, mode: 'insensitive' } },
        { summary: { contains: search, mode: 'insensitive' } },
      ]
    }

    const skip = (parseInt(page) - 1) * parseInt(limit)
    const take = Math.min(parseInt(limit), 100)

    const [places, total] = await Promise.all([
      prisma.place.findMany({
        where,
        skip,
        take,
        orderBy: [{ featured: 'desc' }, { publishedAt: 'desc' }],
        select: {
          id: true,
          slug: true,
          name: true,
          category: true,
          summary: true,
          district: true,
          province: true,
          heroImage: true,
          featured: true,
          publishedAt: true,
          lat: true,
          lng: true,
          elevation: true,
          bestSeason: true,
          trekDays: true,
          trekDifficulty: true,
        },
      }),
      prisma.place.count({ where }),
    ])

    res.json({ places, total, page: parseInt(page), limit: take })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch places' })
  }
})

// GET /api/places/:slug — single place with all relations
router.get('/:slug', async (req, res) => {
  try {
    const place = await prisma.place.findUnique({
      where: { slug: req.params.slug, published: true },
      include: {
        sections: { orderBy: { order: 'asc' } },
        tags: { include: { tag: true } },
      },
    })

    if (!place) return res.status(404).json({ error: 'Place not found' })

    res.json(place)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch place' })
  }
})

export default router
