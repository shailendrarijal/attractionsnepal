import { describe, it, expect, vi, beforeEach } from 'vitest'
import request from 'supertest'
import app from '../app.js'

// ── Mock Prisma ──────────────────────────────────────────────────────────────
vi.mock('../lib/prisma.js', () => {
  const prisma = {
    place: {
      findMany: vi.fn(),
      count:    vi.fn(),
      findUnique: vi.fn(),
    },
  }
  return { default: prisma }
})

// Import AFTER mock is registered
const { default: prisma } = await import('../lib/prisma.js')

const SAMPLE_PLACE = {
  id: 1,
  slug: 'pashupatinath-temple',
  name: 'Pashupatinath Temple',
  category: 'TEMPLE',
  summary: 'Sacred Hindu temple on the banks of the Bagmati river.',
  district: 'Kathmandu',
  province: 'Bagmati',
  heroImage: null,
  featured: true,
  publishedAt: new Date('2024-01-01'),
  lat: 27.71,
  lng: 85.34,
  elevation: null,
  bestSeason: 'Oct–Apr',
  trekDays: null,
  trekDifficulty: null,
}

beforeEach(() => {
  vi.clearAllMocks()
})

// ── List places ──────────────────────────────────────────────────────────────
describe('GET /api/places', () => {
  it('returns places and total', async () => {
    prisma.place.findMany.mockResolvedValue([SAMPLE_PLACE])
    prisma.place.count.mockResolvedValue(1)

    const res = await request(app).get('/api/places')
    expect(res.status).toBe(200)
    expect(res.body.places).toHaveLength(1)
    expect(res.body.total).toBe(1)
    expect(res.body.places[0].name).toBe('Pashupatinath Temple')
  })

  it('passes search filter to Prisma', async () => {
    prisma.place.findMany.mockResolvedValue([])
    prisma.place.count.mockResolvedValue(0)

    await request(app).get('/api/places?search=pokhara')

    const call = prisma.place.findMany.mock.calls[0][0]
    expect(call.where.OR).toBeDefined()
  })

  it('passes category filter to Prisma', async () => {
    prisma.place.findMany.mockResolvedValue([])
    prisma.place.count.mockResolvedValue(0)

    await request(app).get('/api/places?category=TEMPLE')

    const call = prisma.place.findMany.mock.calls[0][0]
    expect(call.where.category).toBe('TEMPLE')
  })

  it('caps limit at 100', async () => {
    prisma.place.findMany.mockResolvedValue([])
    prisma.place.count.mockResolvedValue(0)

    await request(app).get('/api/places?limit=999')

    const call = prisma.place.findMany.mock.calls[0][0]
    expect(call.take).toBe(100)
  })

  it('returns 500 when Prisma throws', async () => {
    prisma.place.findMany.mockRejectedValue(new Error('DB error'))
    prisma.place.count.mockRejectedValue(new Error('DB error'))

    const res = await request(app).get('/api/places')
    expect(res.status).toBe(500)
    expect(res.body).toHaveProperty('error')
  })
})

// ── Single place ─────────────────────────────────────────────────────────────
describe('GET /api/places/:slug', () => {
  it('returns place by slug', async () => {
    prisma.place.findUnique.mockResolvedValue({
      ...SAMPLE_PLACE,
      sections: [],
      tags: [],
    })

    const res = await request(app).get('/api/places/pashupatinath-temple')
    expect(res.status).toBe(200)
    expect(res.body.slug).toBe('pashupatinath-temple')
  })

  it('returns 404 when not found', async () => {
    prisma.place.findUnique.mockResolvedValue(null)

    const res = await request(app).get('/api/places/nonexistent-place')
    expect(res.status).toBe(404)
    expect(res.body).toHaveProperty('error', 'Place not found')
  })
})
