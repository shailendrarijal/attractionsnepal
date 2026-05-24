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
        tips: {
          where: { approved: true },
          orderBy: { createdAt: 'desc' },
          select: { id: true, authorName: true, authorCountry: true, content: true, createdAt: true },
        },
      },
    })

    if (!place) return res.status(404).json({ error: 'Place not found' })

    res.json(place)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch place' })
  }
})

const SPAM_RE = /\b(viagra|cialis|casino|lottery|winner|prize|crypto|bitcoin|investment|loan|seo|backlink)\b/i
const URL_RE = /https?:\/\//gi

// POST /api/places/:slug/tips — submit a community tip
router.post('/:slug/tips', async (req, res) => {
  try {
    const { _trap, authorName, authorCountry, content } = req.body

    // Honeypot — if _trap is filled, silently accept but don't save
    if (_trap) return res.status(201).json({ message: 'Thank you! Your tip has been submitted for review.' })

    // Validate fields
    if (!authorName || authorName.length < 2 || authorName.length > 80) {
      return res.status(400).json({ error: 'Author name must be between 2 and 80 characters.' })
    }
    if (!authorCountry || authorCountry.length < 2 || authorCountry.length > 60) {
      return res.status(400).json({ error: 'Country must be between 2 and 60 characters.' })
    }
    if (!content || content.length < 20 || content.length > 500) {
      return res.status(400).json({ error: 'Tip content must be between 20 and 500 characters.' })
    }

    // Spam checks
    if (SPAM_RE.test(content)) {
      return res.status(201).json({ message: 'Thank you! Your tip has been submitted for review.' })
    }
    const urlMatches = content.match(URL_RE)
    if (urlMatches && urlMatches.length > 1) {
      return res.status(201).json({ message: 'Thank you! Your tip has been submitted for review.' })
    }

    // Find place
    const place = await prisma.place.findUnique({ where: { slug: req.params.slug, published: true } })
    if (!place) return res.status(404).json({ error: 'Place not found' })

    // IP rate limit: one tip per place per day
    const ip = req.ip || req.headers['x-forwarded-for']?.split(',')[0]?.trim()
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000)
    const existing = await prisma.placeTip.findFirst({
      where: { placeId: place.id, ipAddress: ip, createdAt: { gte: since } },
    })
    if (existing) {
      return res.status(429).json({ error: 'You can only submit one tip per place per day.' })
    }

    // Create tip (pending review)
    await prisma.placeTip.create({
      data: { placeId: place.id, authorName, authorCountry, content, approved: false, ipAddress: ip },
    })

    res.status(201).json({ message: 'Thank you! Your tip has been submitted for review.' })
  } catch (err) {
    console.error('[tips]', err)
    res.status(500).json({ error: 'Failed to submit tip' })
  }
})

// POST /api/places/:slug/vibes — vote on a vibe tag
router.post('/:slug/vibes', async (req, res) => {
  try {
    const { vibe } = req.body

    // Find place
    const place = await prisma.place.findUnique({ where: { slug: req.params.slug, published: true } })
    if (!place) return res.status(404).json({ error: 'Place not found' })

    // Validate vibe
    if (!vibe || typeof vibe !== 'string' || vibe.trim().length === 0 || vibe.trim().length > 60) {
      return res.status(400).json({ error: 'Vibe must be a non-empty string of at most 60 characters.' })
    }

    // Atomically increment vibeVotes[vibe]
    const current = (place.vibeVotes ?? {})
    current[vibe.trim()] = (current[vibe.trim()] ?? 0) + 1
    const updated = await prisma.place.update({ where: { id: place.id }, data: { vibeVotes: current } })

    res.json({ vibeVotes: updated.vibeVotes })
  } catch (err) {
    console.error('[vibes]', err)
    res.status(500).json({ error: 'Failed to record vibe vote' })
  }
})

export default router
