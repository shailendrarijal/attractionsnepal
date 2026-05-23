import { Router } from 'express'
import { rateLimit } from 'express-rate-limit'
import { Resend } from 'resend'

const router = Router()

// ── Rate limiter: 5 submissions per IP per hour ───────────────────────────────
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many messages sent. Please try again later.' },
})

// ── Spam keyword patterns ─────────────────────────────────────────────────────
const SPAM_PATTERNS = [
  /\b(viagra|cialis|casino|lottery|winner|prize|crypto|bitcoin|investment|loan)\b/i,
  /https?:\/\//g,   // any URL in the message body is suspicious for a contact form
]

function looksLikeSpam(text) {
  const urlMatches = (text.match(/https?:\/\//g) || []).length
  if (urlMatches > 1) return true                      // more than one URL → spam
  return SPAM_PATTERNS.some((p) => p.test(text))
}

// ── POST /api/contact ─────────────────────────────────────────────────────────
router.post('/', contactLimiter, async (req, res) => {
  const { name, email, subject, message, _trap, _loadedAt } = req.body

  // 1. Honeypot — bots fill hidden fields; humans never see it
  if (_trap) {
    // Return 200 so bots don't know they were rejected
    return res.json({ message: 'Message sent!' })
  }

  // 2. Timing check — legitimate humans take > 3 seconds to fill a form
  const elapsed = Date.now() - Number(_loadedAt || 0)
  if (_loadedAt && elapsed < 3000) {
    return res.json({ message: 'Message sent!' })
  }

  // 3. Input validation
  if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
    return res.status(400).json({ error: 'Please enter your name.' })
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }
  if (!subject || typeof subject !== 'string' || subject.trim().length < 3 || subject.trim().length > 150) {
    return res.status(400).json({ error: 'Please enter a subject (3–150 characters).' })
  }
  if (!message || typeof message !== 'string' || message.trim().length < 20 || message.trim().length > 3000) {
    return res.status(400).json({ error: 'Message must be between 20 and 3000 characters.' })
  }

  // 4. Spam content check
  if (looksLikeSpam(message) || looksLikeSpam(subject)) {
    return res.json({ message: 'Message sent!' })   // silent reject
  }

  // 5. Sanitise
  const safeName    = name.trim().replace(/[<>]/g, '')
  const safeSubject = subject.trim().replace(/[<>]/g, '')
  const safeMessage = message.trim().replace(/[<>]/g, '')

  // 6. Send via Resend
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY not set — contact email not sent')
    return res.status(500).json({ error: 'Mail service not configured.' })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Attractions Nepal <noreply@attractionsnepal.com>',
      to:   'shailendrarijal@gmail.com',
      replyTo: email,
      subject: `[Contact] ${safeSubject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1C1C2E">
          <div style="background:#003893;padding:20px 24px;border-radius:8px 8px 0 0">
            <h2 style="color:#fff;margin:0;font-size:18px">New Contact Message — AttractionsNepal.com</h2>
          </div>
          <div style="background:#FAF7F2;padding:24px;border:1px solid #E0D8CC;border-top:none;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr>
                <td style="padding:8px 0;color:#555;width:80px;vertical-align:top"><strong>From</strong></td>
                <td style="padding:8px 0">${safeName}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#555;vertical-align:top"><strong>Email</strong></td>
                <td style="padding:8px 0"><a href="mailto:${email}" style="color:#003893">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#555;vertical-align:top"><strong>Subject</strong></td>
                <td style="padding:8px 0">${safeSubject}</td>
              </tr>
            </table>
            <hr style="border:none;border-top:1px solid #E0D8CC;margin:16px 0"/>
            <p style="font-size:14px;color:#555;margin:0 0 8px">Message:</p>
            <p style="font-size:15px;line-height:1.6;white-space:pre-wrap;margin:0">${safeMessage}</p>
          </div>
          <p style="font-size:11px;color:#999;text-align:center;margin-top:12px">
            Sent via attractionsnepal.com contact form · Reply to this email to respond directly to ${safeName}
          </p>
        </div>
      `,
    })

    res.json({ message: 'Message sent!' })
  } catch (err) {
    console.error('Contact email error:', err)
    res.status(500).json({ error: 'Failed to send message. Please try again.' })
  }
})

export default router
