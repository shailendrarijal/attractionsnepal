import { describe, it, expect, vi, beforeEach } from 'vitest'
import request from 'supertest'
import app from '../app.js'

// ── Mock Prisma ──────────────────────────────────────────────────────────────
vi.mock('../lib/prisma.js', () => {
  const prisma = {
    blog: {
      findMany:   vi.fn(),
      count:      vi.fn(),
      findUnique: vi.fn(),
    },
  }
  return { default: prisma }
})

const { default: prisma } = await import('../lib/prisma.js')

const SAMPLE_BLOG = {
  id: 1,
  slug: 'everest-base-camp-trek-complete-guide',
  title: 'Everest Base Camp Trek — Complete Guide',
  excerpt: 'Everything you need to know about the EBC trek.',
  heroImage: null,
  publishedAt: new Date('2024-06-01'),
  tags: [{ tag: { name: 'Trekking', slug: 'trekking' } }],
}

beforeEach(() => {
  vi.clearAllMocks()
})

// ── List blogs ───────────────────────────────────────────────────────────────
describe('GET /api/blogs', () => {
  it('returns blogs and total', async () => {
    prisma.blog.findMany.mockResolvedValue([SAMPLE_BLOG])
    prisma.blog.count.mockResolvedValue(1)

    const res = await request(app).get('/api/blogs')
    expect(res.status).toBe(200)
    expect(res.body.blogs).toHaveLength(1)
    expect(res.body.total).toBe(1)
    expect(res.body.blogs[0].title).toContain('Everest')
  })

  it('passes search to Prisma where clause', async () => {
    prisma.blog.findMany.mockResolvedValue([])
    prisma.blog.count.mockResolvedValue(0)

    await request(app).get('/api/blogs?search=everest')

    const call = prisma.blog.findMany.mock.calls[0][0]
    expect(call.where.OR).toBeDefined()
  })

  it('uses default page=1 and limit=12', async () => {
    prisma.blog.findMany.mockResolvedValue([])
    prisma.blog.count.mockResolvedValue(0)

    await request(app).get('/api/blogs')

    const call = prisma.blog.findMany.mock.calls[0][0]
    expect(call.skip).toBe(0)
    expect(call.take).toBe(12)
  })

  it('paginates correctly on page 2', async () => {
    prisma.blog.findMany.mockResolvedValue([])
    prisma.blog.count.mockResolvedValue(0)

    await request(app).get('/api/blogs?page=2&limit=12')

    const call = prisma.blog.findMany.mock.calls[0][0]
    expect(call.skip).toBe(12)
    expect(call.take).toBe(12)
  })

  it('caps limit at 50', async () => {
    prisma.blog.findMany.mockResolvedValue([])
    prisma.blog.count.mockResolvedValue(0)

    await request(app).get('/api/blogs?limit=999')

    const call = prisma.blog.findMany.mock.calls[0][0]
    expect(call.take).toBe(50)
  })

  it('returns 500 when Prisma throws', async () => {
    prisma.blog.findMany.mockRejectedValue(new Error('DB error'))
    prisma.blog.count.mockRejectedValue(new Error('DB error'))

    const res = await request(app).get('/api/blogs')
    expect(res.status).toBe(500)
  })
})

// ── Single blog ──────────────────────────────────────────────────────────────
describe('GET /api/blogs/:slug', () => {
  it('returns blog by slug', async () => {
    prisma.blog.findUnique.mockResolvedValue({ ...SAMPLE_BLOG, tags: [] })

    const res = await request(app).get('/api/blogs/everest-base-camp-trek-complete-guide')
    expect(res.status).toBe(200)
    expect(res.body.slug).toBe('everest-base-camp-trek-complete-guide')
  })

  it('returns 404 when not found', async () => {
    prisma.blog.findUnique.mockResolvedValue(null)

    const res = await request(app).get('/api/blogs/does-not-exist')
    expect(res.status).toBe(404)
    expect(res.body).toHaveProperty('error', 'Blog not found')
  })
})
