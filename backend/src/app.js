import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import routes from './routes/index.js'

const app = express()

app.use(helmet())
const allowedOrigins = [
  ...(process.env.FRONTEND_URL || 'http://localhost:5173')
    .split(',')
    .map((s) => s.trim()),
  'https://attractionsnepal.com',
  'https://www.attractionsnepal.com',
]

app.use(cors({ origin: allowedOrigins, credentials: true }))

// General API rate limit: 300 req / 15 min
app.use(
  '/api',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
  })
)

// Tighter limit for admin + auth routes: 60 req / 15 min for admin
app.use('/api/admin', rateLimit({ windowMs: 15 * 60 * 1000, max: 60 }))

// Tightest limit for login: 10 attempts / 15 min
app.use(
  '/api/auth/login',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many login attempts. Please try again later.' },
  })
)

app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

app.get('/health', (_req, res) =>
  res.json({ status: 'ok', env: process.env.NODE_ENV })
)

app.get('/sitemap.xml', async (_req, res) => {
  try {
    const prisma = (await import('./lib/prisma.js')).default
    const SITE = process.env.SITE_URL || 'https://attractionsnepal.com'
    const now  = new Date().toISOString()

    const [places, blogs, stories] = await Promise.all([
      prisma.place.findMany({
        where: { published: true },
        select: { slug: true, updatedAt: true },
      }),
      prisma.blog.findMany({
        where: { published: true },
        select: { slug: true, updatedAt: true },
      }),
      prisma.story.findMany({
        where: { published: true },
        select: { slug: true, updatedAt: true },
      }),
    ])

    const url = (path, lastmod, priority = '0.7', freq = 'weekly') =>
      `  <url>
    <loc>${SITE}${path}</loc>
    <lastmod>${(lastmod ?? new Date()).toISOString().split('T')[0]}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${url('/', null, '1.0', 'daily')}
${url('/explore', null, '0.9', 'daily')}
${url('/blog', null, '0.8', 'weekly')}
${url('/stories', null, '0.8', 'weekly')}
${places.map((p) => url(`/places/${p.slug}`, p.updatedAt, '0.8')).join('\n')}
${blogs.map((b) => url(`/blog/${b.slug}`, b.updatedAt, '0.7')).join('\n')}
${stories.map((s) => url(`/stories/${s.slug}`, s.updatedAt, '0.7')).join('\n')}
</urlset>`

    res.header('Content-Type', 'application/xml')
    res.header('Cache-Control', 'public, max-age=3600')
    res.send(xml)
  } catch (err) {
    console.error('Sitemap error', err)
    res.status(500).send('Sitemap generation failed')
  }
})

app.use((_req, res) => res.status(404).json({ error: 'Not found' }))

app.use((err, _req, res, _next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

export default app
