import { Router } from 'express'
import prisma from '../lib/prisma.js'

const router = Router()

// ── helpers ──────────────────────────────────────────────────────────────────

// Fields returned in list view (no dayPlans)
const LIST_SELECT = {
  id: true, slug: true, title: true, excerpt: true,
  days: true, activities: true, budget: true, difficulty: true,
  provinces: true, heroImage: true, highlights: true,
  startLocation: true, endLocation: true,
  published: true, featured: true, publishedAt: true,
  tags: { select: { tag: { select: { id: true, name: true, slug: true } } } },
}

// ── GET /api/itineraries ─────────────────────────────────────────────────────
router.get('/', async (req, res) => {
  try {
    const {
      days, daysMin, daysMax,
      activity, budget, difficulty, province,
      placeSlug,
      search, featured,
      limit = '20', offset = '0',
    } = req.query

    const where = { published: true }

    if (days)    where.days = Number(days)
    if (daysMin || daysMax) {
      where.days = {}
      if (daysMin) where.days.gte = Number(daysMin)
      if (daysMax) where.days.lte = Number(daysMax)
    }
    if (activity)   where.activities = { has: activity }
    if (budget)     where.budget     = budget
    if (difficulty) where.difficulty = difficulty
    if (province)   where.provinces  = { has: province }
    if (featured === 'true') where.featured = true
    if (placeSlug) {
      where.dayPlans = { some: { places: { some: { place: { slug: placeSlug } } } } }
    }
    if (search) {
      where.OR = [
        { title:   { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } },
      ]
    }

    const [itineraries, total] = await Promise.all([
      prisma.itinerary.findMany({
        where,
        select: LIST_SELECT,
        orderBy: [{ featured: 'desc' }, { publishedAt: 'desc' }],
        take: Number(limit),
        skip: Number(offset),
      }),
      prisma.itinerary.count({ where }),
    ])

    res.json({ itineraries, total })
  } catch (err) {
    console.error('[itineraries] list error:', err)
    res.status(500).json({ error: 'Failed to fetch itineraries' })
  }
})

// ── GET /api/itineraries/:slug ───────────────────────────────────────────────
router.get('/:slug', async (req, res) => {
  try {
    const itinerary = await prisma.itinerary.findUnique({
      where: { slug: req.params.slug },
      include: {
        dayPlans: {
          orderBy: [{ day: 'asc' }, { order: 'asc' }],
          include: {
            places: {
              orderBy: { order: 'asc' },
              include: {
                place: {
                  select: {
                    id: true, slug: true, name: true,
                    category: true, district: true, province: true,
                    heroImage: true, summary: true,
                  },
                },
              },
            },
          },
        },
        tags: { include: { tag: true } },
      },
    })

    if (!itinerary || !itinerary.published) {
      return res.status(404).json({ error: 'Itinerary not found' })
    }

    res.json(itinerary)
  } catch (err) {
    console.error('[itineraries] detail error:', err)
    res.status(500).json({ error: 'Failed to fetch itinerary' })
  }
})

export default router
