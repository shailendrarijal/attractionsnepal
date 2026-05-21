import { Router } from 'express'
import { Resend } from 'resend'
import prisma from '../lib/prisma.js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const router = Router()
const __dir = dirname(fileURLToPath(import.meta.url))

// POST /api/newsletter/subscribe
router.post('/subscribe', async (req, res) => {
  const { email } = req.body
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email required' })
  }

  try {
    const existing = await prisma.subscriber.findUnique({ where: { email } })
    if (existing) return res.json({ message: 'Already subscribed!' })

    await prisma.subscriber.create({ data: { email } })

    // Send welcome email with checklist
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const templatePath = join(__dir, '../../../templates/welcome-email.html')
      let html = readFileSync(templatePath, 'utf-8')

      await resend.emails.send({
        from: 'Attractions Nepal <hello@attractionsnepal.com>',
        to: email,
        subject: 'Your Nepal Trip Planning Checklist 🏔️',
        html,
      })
    }

    res.json({ message: 'Subscribed! Check your inbox for your free checklist.' })
  } catch (err) {
    console.error('Newsletter error', err)
    res.status(500).json({ error: 'Subscription failed' })
  }
})

export default router
