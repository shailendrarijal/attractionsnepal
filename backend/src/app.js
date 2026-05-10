import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import routes from './routes/index.js'

const app = express()

app.use(helmet())
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL || 'http://localhost:5173',
      'https://attractionsnepal.com',
      'https://www.attractionsnepal.com',
    ],
    credentials: true,
  })
)

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

app.use((_req, res) => res.status(404).json({ error: 'Not found' }))

app.use((err, _req, res, _next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

export default app
