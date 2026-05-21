import { Router } from 'express'
import slugify from 'slugify'
import prisma from '../lib/prisma.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()
router.use(requireAuth)

function makeSlug(name) {
  return slugify(name, { lower: true, strict: true })
}

// ─── Places ──────────────────────────────────────────────────────────────────

router.get('/places', async (req, res) => {
  try {
    const { page = '1', limit = '50' } = req.query
    const skip = (parseInt(page) - 1) * parseInt(limit)
    const take = Math.min(parseInt(limit), 100)

    const [places, total] = await Promise.all([
      prisma.place.findMany({
        skip,
        take,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          slug: true,
          name: true,
          category: true,
          district: true,
          published: true,
          featured: true,
          createdAt: true,
        },
      }),
      prisma.place.count(),
    ])

    res.json({ places, total })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch places' })
  }
})

router.post('/places', async (req, res) => {
  try {
    const { name, tags, sections, ...rest } = req.body
    if (!name) return res.status(400).json({ error: 'name is required' })

    const slug = makeSlug(name)

    const place = await prisma.place.create({
      data: {
        name,
        slug,
        ...rest,
        publishedAt: rest.published ? new Date() : null,
        tags: tags?.length
          ? {
              create: tags.map((tagId) => ({
                tag: { connect: { id: tagId } },
              })),
            }
          : undefined,
        sections: sections?.length
          ? { create: sections }
          : undefined,
      },
      include: { sections: true, tags: { include: { tag: true } } },
    })

    res.status(201).json(place)
  } catch (err) {
    if (err.code === 'P2002') {
      return res.status(409).json({ error: 'Slug already exists' })
    }
    console.error(err)
    res.status(500).json({ error: 'Failed to create place' })
  }
})

router.get('/places/:id', async (req, res) => {
  try {
    const place = await prisma.place.findUnique({
      where: { id: req.params.id },
      include: { sections: { orderBy: { order: 'asc' } }, tags: { include: { tag: true } } },
    })
    if (!place) return res.status(404).json({ error: 'Not found' })
    res.json(place)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch place' })
  }
})

router.put('/places/:id', async (req, res) => {
  try {
    const { tags, sections, ...rest } = req.body

    if (rest.published && !rest.publishedAt) {
      rest.publishedAt = new Date()
    }

    const place = await prisma.$transaction(async (tx) => {
      if (sections !== undefined) {
        await tx.placeSection.deleteMany({ where: { placeId: req.params.id } })
      }
      if (tags !== undefined) {
        await tx.placeTag.deleteMany({ where: { placeId: req.params.id } })
      }

      return tx.place.update({
        where: { id: req.params.id },
        data: {
          ...rest,
          tags: tags?.length
            ? { create: tags.map((tagId) => ({ tag: { connect: { id: tagId } } })) }
            : undefined,
          sections: sections?.length ? { create: sections } : undefined,
        },
        include: { sections: { orderBy: { order: 'asc' } }, tags: { include: { tag: true } } },
      })
    })

    res.json(place)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to update place' })
  }
})

router.delete('/places/:id', async (req, res) => {
  try {
    await prisma.place.delete({ where: { id: req.params.id } })
    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to delete place' })
  }
})

// ─── Blogs ───────────────────────────────────────────────────────────────────

router.get('/blogs', async (req, res) => {
  try {
    const { page = '1', limit = '50' } = req.query
    const skip = (parseInt(page) - 1) * parseInt(limit)
    const take = Math.min(parseInt(limit), 100)

    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        skip,
        take,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          slug: true,
          title: true,
          published: true,
          publishedAt: true,
          createdAt: true,
        },
      }),
      prisma.blog.count(),
    ])

    res.json({ blogs, total })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch blogs' })
  }
})

router.post('/blogs', async (req, res) => {
  try {
    const { title, tags, ...rest } = req.body
    if (!title) return res.status(400).json({ error: 'title is required' })

    const slug = makeSlug(title)
    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        ...rest,
        publishedAt: rest.published ? new Date() : null,
        tags: tags?.length
          ? { create: tags.map((tagId) => ({ tag: { connect: { id: tagId } } })) }
          : undefined,
      },
      include: { tags: { include: { tag: true } } },
    })

    res.status(201).json(blog)
  } catch (err) {
    if (err.code === 'P2002') {
      return res.status(409).json({ error: 'Slug already exists' })
    }
    console.error(err)
    res.status(500).json({ error: 'Failed to create blog' })
  }
})

router.get('/blogs/:id', async (req, res) => {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id: req.params.id },
      include: { tags: { include: { tag: true } } },
    })
    if (!blog) return res.status(404).json({ error: 'Not found' })
    res.json(blog)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch blog' })
  }
})

router.put('/blogs/:id', async (req, res) => {
  try {
    const { tags, ...rest } = req.body

    if (rest.published && !rest.publishedAt) {
      rest.publishedAt = new Date()
    }

    const blog = await prisma.$transaction(async (tx) => {
      if (tags !== undefined) {
        await tx.blogTag.deleteMany({ where: { blogId: req.params.id } })
      }
      return tx.blog.update({
        where: { id: req.params.id },
        data: {
          ...rest,
          tags: tags?.length
            ? { create: tags.map((tagId) => ({ tag: { connect: { id: tagId } } })) }
            : undefined,
        },
        include: { tags: { include: { tag: true } } },
      })
    })

    res.json(blog)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to update blog' })
  }
})

router.delete('/blogs/:id', async (req, res) => {
  try {
    await prisma.blog.delete({ where: { id: req.params.id } })
    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to delete blog' })
  }
})

// ─── Stories ─────────────────────────────────────────────────────────────────

router.get('/stories', async (req, res) => {
  try {
    const { page = '1', limit = '50' } = req.query
    const skip = (parseInt(page) - 1) * parseInt(limit)
    const take = Math.min(parseInt(limit), 100)

    const [stories, total] = await Promise.all([
      prisma.story.findMany({
        skip,
        take,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          slug: true,
          title: true,
          category: true,
          published: true,
          publishedAt: true,
          createdAt: true,
        },
      }),
      prisma.story.count(),
    ])

    res.json({ stories, total })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch stories' })
  }
})

router.post('/stories', async (req, res) => {
  try {
    const { title, tags, ...rest } = req.body
    if (!title) return res.status(400).json({ error: 'title is required' })

    const slug = makeSlug(title)
    const story = await prisma.story.create({
      data: {
        title,
        slug,
        ...rest,
        publishedAt: rest.published ? new Date() : null,
        tags: tags?.length
          ? { create: tags.map((tagId) => ({ tag: { connect: { id: tagId } } })) }
          : undefined,
      },
      include: { tags: { include: { tag: true } } },
    })

    res.status(201).json(story)
  } catch (err) {
    if (err.code === 'P2002') {
      return res.status(409).json({ error: 'Slug already exists' })
    }
    console.error(err)
    res.status(500).json({ error: 'Failed to create story' })
  }
})

router.get('/stories/:id', async (req, res) => {
  try {
    const story = await prisma.story.findUnique({
      where: { id: req.params.id },
      include: { tags: { include: { tag: true } } },
    })
    if (!story) return res.status(404).json({ error: 'Not found' })
    res.json(story)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch story' })
  }
})

router.put('/stories/:id', async (req, res) => {
  try {
    const { tags, ...rest } = req.body

    if (rest.published && !rest.publishedAt) {
      rest.publishedAt = new Date()
    }

    const story = await prisma.$transaction(async (tx) => {
      if (tags !== undefined) {
        await tx.storyTag.deleteMany({ where: { storyId: req.params.id } })
      }
      return tx.story.update({
        where: { id: req.params.id },
        data: {
          ...rest,
          tags: tags?.length
            ? { create: tags.map((tagId) => ({ tag: { connect: { id: tagId } } })) }
            : undefined,
        },
        include: { tags: { include: { tag: true } } },
      })
    })

    res.json(story)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to update story' })
  }
})

router.delete('/stories/:id', async (req, res) => {
  try {
    await prisma.story.delete({ where: { id: req.params.id } })
    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to delete story' })
  }
})

// ─── Tags ────────────────────────────────────────────────────────────────────

router.post('/tags', async (req, res) => {
  try {
    const { name } = req.body
    if (!name) return res.status(400).json({ error: 'name required' })
    const slug = makeSlug(name)
    const tag = await prisma.tag.create({ data: { name, slug } })
    res.status(201).json(tag)
  } catch (err) {
    if (err.code === 'P2002') return res.status(409).json({ error: 'Tag already exists' })
    console.error(err)
    res.status(500).json({ error: 'Failed to create tag' })
  }
})

router.delete('/tags/:id', async (req, res) => {
  try {
    await prisma.tag.delete({ where: { id: req.params.id } })
    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to delete tag' })
  }
})

export default router
