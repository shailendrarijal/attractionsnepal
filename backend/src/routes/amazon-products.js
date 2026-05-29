import { Router } from 'express'
import prisma from '../lib/prisma.js'

const router = Router()

// GET /api/amazon-products — list all active groups
router.get('/', async (_req, res) => {
  try {
    const groups = await prisma.amazonProductGroup.findMany({
      where: { active: true },
      orderBy: { context: 'asc' },
    })
    res.json(groups)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch product groups' })
  }
})

// GET /api/amazon-products/:context — get one group by context key
router.get('/:context', async (req, res) => {
  try {
    const group = await prisma.amazonProductGroup.findUnique({
      where: { context: req.params.context.toUpperCase() },
    })
    if (!group || !group.active) return res.status(404).json({ error: 'Not found' })
    res.json(group)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch product group' })
  }
})

export default router
