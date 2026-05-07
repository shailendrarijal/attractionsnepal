import { Router } from 'express'
import prisma from '../lib/prisma.js'

const router = Router()

router.get('/', async (_req, res) => {
  try {
    const tags = await prisma.tag.findMany({
      orderBy: { name: 'asc' },
    })
    res.json(tags)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch tags' })
  }
})

export default router
