import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import routes from './routes/index.js'

const app = express()
const PORT = process.env.PORT || 3000

// ─── Security ────────────────────────────────────────────────────────────────
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

// Rate limiting — be generous for a public site
app.use(
  '/api',
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
  })
)

// Stricter limit on admin routes
app.use(
  '/api/admin',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
)

// ─── Body parsing ────────────────────────────────────────────────────────────
app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ extended: true }))

// ─── Routes ──────────────────────────────────────────────────────────────────
app.use('/api', routes)

// Health check — Render uses this
app.get('/health', (req, res) => res.json({ status: 'ok', env: process.env.NODE_ENV }))

// 404
app.use((req, res) => res.status(404).json({ error: 'Not found' }))

// Error handler
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT} [${process.env.NODE_ENV}]`)
})
