import { Router } from 'express'
import prisma from '../lib/prisma.js'

const router = Router()

// GET /api/blogs
router.get('/', async (req, res) => {
  try {
    const { search, tag, page = '1', limit = '12' } = req.query
    const where = { published: true }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } },
      ]
    }

    if (tag) {
      where.tags = { some: { tag: { slug: tag } } }
    }

    const skip = (parseInt(page) - 1) * parseInt(limit)
    const take = Math.min(parseInt(limit), 50)

    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        where,
        skip,
        take,
        orderBy: { publishedAt: 'desc' },
        select: {
          id: true,
          slug: true,
          title: true,
          excerpt: true,
          heroImage: true,
          publishedAt: true,
          tags: { select: { tag: { select: { name: true, slug: true } } } },
        },
      }),
      prisma.blog.count({ where }),
    ])

    res.json({ blogs, total, page: parseInt(page), limit: take })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch blogs' })
  }
})

// GET /api/blogs/:slug
router.get('/:slug', async (req, res) => {
  try {
    const blog = await prisma.blog.findUnique({
      where: { slug: req.params.slug, published: true },
      include: {
        tags: { include: { tag: true } },
      },
    })

    if (!blog) return res.status(404).json({ error: 'Blog not found' })

    res.json(blog)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch blog' })
  }
})

export default router
