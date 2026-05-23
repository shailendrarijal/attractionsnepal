import { Router } from 'express'
import { Resend } from 'resend'
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

// ── POST /api/itineraries/:slug/email ────────────────────────────────────────
// Body: { name, email, selectedDays: { "1": planId, "2": planId, … } }
// Sends the itinerary (with user-selected day plans) to the given email address
// and subscribes them to the newsletter if they haven't subscribed already.
router.post('/:slug/email', async (req, res) => {
  const { name, email, selectedDays = {} } = req.body

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email required' })
  }
  const safeName = (name || 'Traveller').toString().trim().replace(/[<>]/g, '').slice(0, 80)

  try {
    const itinerary = await prisma.itinerary.findUnique({
      where: { slug: req.params.slug, published: true },
      include: {
        dayPlans: {
          orderBy: [{ day: 'asc' }, { order: 'asc' }],
        },
      },
    })

    if (!itinerary) return res.status(404).json({ error: 'Itinerary not found' })

    // Group plans by day, pick selected or primary
    const dayGroups = {}
    for (const plan of itinerary.dayPlans) {
      if (!dayGroups[plan.day]) dayGroups[plan.day] = []
      dayGroups[plan.day].push(plan)
    }

    const dayNumbers = Object.keys(dayGroups).map(Number).sort((a, b) => a - b)

    function pickPlan(dayNum) {
      const plans = dayGroups[dayNum] ?? []
      const primary = plans.find((p) => !p.isAlternative) ?? plans[0]
      const selId = selectedDays[String(dayNum)]
      return plans.find((p) => p.id === selId) ?? primary
    }

    // Build day-by-day HTML
    const DAY_COLORS = [
      '#003893', '#1a56db', '#0e7490', '#065f46', '#7c3aed',
      '#be185d', '#b45309', '#047857', '#1d4ed8', '#9d174d',
      '#0369a1', '#6d28d9', '#0f766e', '#92400e', '#064e3b',
    ]

    const daysHtml = dayNumbers.map((dayNum, idx) => {
      const plan = pickPlan(dayNum)
      if (!plan) return ''
      const color = DAY_COLORS[idx % DAY_COLORS.length]
      // Strip markdown bold markers for email plain text rendering
      const cleanDesc = (plan.description || '')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n\n/g, '</p><p style="margin:8px 0;font-size:14px;line-height:1.6;color:#444;">')
        .replace(/\n/g, '<br>')

      return `
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;border-radius:12px;overflow:hidden;border:1px solid #E0D8CC;">
          <tr>
            <td style="background:${color};padding:12px 16px;">
              <span style="color:white;font-weight:700;font-size:15px;">Day ${dayNum} — ${plan.title}</span>
              ${plan.distanceKm || plan.maxElevation ? `<span style="color:rgba(255,255,255,0.7);font-size:12px;margin-left:12px;">${[plan.distanceKm ? `${plan.distanceKm} km` : '', plan.maxElevation ? `${plan.maxElevation.toLocaleString()}m` : ''].filter(Boolean).join(' · ')}</span>` : ''}
            </td>
          </tr>
          <tr>
            <td style="padding:16px;background:#fff;">
              <p style="margin:8px 0;font-size:14px;line-height:1.6;color:#444;">${cleanDesc}</p>
              ${plan.accommodation ? `<p style="margin:8px 0;font-size:13px;color:#555;">🏨 <strong>Stay:</strong> ${plan.accommodation}</p>` : ''}
              ${plan.meals ? `<p style="margin:8px 0;font-size:13px;color:#555;">🍽️ <strong>Meals:</strong> ${plan.meals}</p>` : ''}
            </td>
          </tr>
        </table>`
    }).join('')

    // Badge helpers
    const ACTIVITY_LABELS = {
      TREKKING: '🥾 Trekking', CULTURAL: '🏛️ Cultural', SPIRITUAL: '🕉️ Spiritual',
      ADVENTURE: '🪂 Adventure', WILDLIFE: '🐘 Wildlife', RELAXATION: '🧘 Relaxation',
    }
    const BUDGET_LABELS = { BUDGET: 'Budget', MIDRANGE: 'Mid-range', LUXURY: 'Luxury' }

    const badgesHtml = [
      ...(itinerary.activities || []).map((a) => `<span style="background:#EEF2FF;color:#3730a3;padding:3px 10px;border-radius:999px;font-size:12px;margin-right:6px;white-space:nowrap;">${ACTIVITY_LABELS[a] ?? a}</span>`),
      itinerary.budget ? `<span style="background:#F0FDF4;color:#166534;padding:3px 10px;border-radius:999px;font-size:12px;margin-right:6px;">${BUDGET_LABELS[itinerary.budget] ?? itinerary.budget}</span>` : '',
    ].join('')

    const highlightsHtml = (itinerary.highlights || []).length > 0
      ? `<table width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;background:#F0FDF4;border:1px solid #BBF7D0;border-radius:12px;">
          <tr><td style="padding:16px;">
            <p style="font-weight:700;color:#065f46;margin:0 0 10px;font-size:15px;">✨ Trip Highlights</p>
            ${itinerary.highlights.map((h) => `<p style="margin:5px 0;font-size:13px;color:#374151;">✓ ${h}</p>`).join('')}
          </td></tr>
        </table>` : ''

    const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F8F5F0;font-family:'Helvetica Neue',Arial,sans-serif;color:#1C1C2E;">

  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#003893;">
    <tr>
      <td style="padding:28px 24px;text-align:center;">
        <p style="margin:0;color:white;font-size:22px;font-weight:700;">🏔️ Attractions Nepal</p>
        <p style="margin:6px 0 0;color:#93c5fd;font-size:13px;">Your personalised travel itinerary</p>
      </td>
    </tr>
  </table>

  <!-- Hero block -->
  ${itinerary.heroImage ? `<img src="${itinerary.heroImage}" alt="${itinerary.title}" width="100%" style="display:block;max-height:240px;object-fit:cover;">` : ''}

  <!-- Body -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td style="padding:32px 24px;max-width:600px;margin:0 auto;display:block;">

        <p style="color:#555;font-size:14px;margin:0 0 6px;">Hi ${safeName},</p>
        <p style="color:#555;font-size:14px;margin:0 0 24px;">Here's your Nepal itinerary from <a href="https://attractionsnepal.com" style="color:#003893;">AttractionsNepal.com</a>. Save this email — it's your complete day-by-day guide.</p>

        <h1 style="color:#003893;font-size:24px;font-weight:700;margin:0 0 6px;">${itinerary.title}</h1>
        <p style="color:#777;font-size:13px;margin:0 0 6px;">
          📍 ${itinerary.startLocation ?? ''}${itinerary.startLocation && itinerary.endLocation && itinerary.startLocation !== itinerary.endLocation ? ` → ${itinerary.endLocation}` : ''}
          &nbsp;·&nbsp; 📅 ${itinerary.days} ${itinerary.days === 1 ? 'day' : 'days'}
        </p>
        <p style="margin:4px 0 12px;">${badgesHtml}</p>
        <p style="font-size:15px;line-height:1.7;color:#374151;margin:0 0 8px;">${itinerary.excerpt}</p>

        ${highlightsHtml}

        <h2 style="font-size:18px;font-weight:700;color:#1C1C2E;margin:28px 0 16px;border-top:2px solid #E0D8CC;padding-top:20px;">📅 Your Day-by-Day Plan</h2>
        ${daysHtml}

        <!-- CTA -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0;background:#003893;border-radius:12px;">
          <tr>
            <td style="padding:24px;text-align:center;">
              <p style="color:white;font-size:15px;font-weight:600;margin:0 0 14px;">Ready to make it real?</p>
              <a href="https://attractionsnepal.com/itineraries/${itinerary.slug}" style="display:inline-block;background:#DC143C;color:white;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;">View &amp; Customise Online →</a>
            </td>
          </tr>
        </table>

        <!-- Explore more -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#FEF9F0;border:1px solid #FDE68A;border-radius:12px;margin-bottom:24px;">
          <tr>
            <td style="padding:16px;">
              <p style="font-weight:700;color:#92400e;margin:0 0 8px;font-size:14px;">🗺️ Explore More</p>
              <p style="font-size:13px;color:#555;margin:0;"><a href="https://attractionsnepal.com/itineraries" style="color:#003893;">Browse all 50+ itineraries</a> · <a href="https://attractionsnepal.com/places" style="color:#003893;">Discover places</a> · <a href="https://attractionsnepal.com/plan-my-trip" style="color:#003893;">Plan another trip</a></p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#1C1C2E;margin-top:16px;">
    <tr>
      <td style="padding:20px 24px;text-align:center;color:#6B7280;font-size:11px;">
        <p style="margin:0;">© ${new Date().getFullYear()} AttractionsNepal.com</p>
        <p style="margin:4px 0 0;">You received this because you requested it on our website.</p>
      </td>
    </tr>
  </table>
</body>
</html>`

    // Send email
    if (!process.env.RESEND_API_KEY) {
      console.warn('[itinerary-email] RESEND_API_KEY not set — email skipped')
      return res.json({ message: 'Itinerary sent!' })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Attractions Nepal <noreply@attractionsnepal.com>',
      to: email,
      subject: `Your Nepal Itinerary: ${itinerary.title} 🏔️`,
      html,
    })

    // Silently subscribe to newsletter
    try {
      const existing = await prisma.subscriber.findUnique({ where: { email } })
      if (!existing) {
        await prisma.subscriber.create({ data: { email, confirmed: true } })
        console.log(`[itinerary-email] new subscriber: ${email}`)
      }
    } catch (subErr) {
      console.warn('[itinerary-email] newsletter subscribe failed:', subErr?.message)
    }

    console.log(`[itinerary-email] sent "${itinerary.title}" to ${email}`)
    res.json({ message: 'Itinerary sent! Check your inbox.' })
  } catch (err) {
    console.error('[itinerary-email] error:', err)
    res.status(500).json({ error: 'Failed to send itinerary email' })
  }
})

export default router
