import { useState, useRef, useEffect } from 'react'
import { sendContactMessage } from '../lib/api'
import PageSeo from '../components/PageSeo'

const SUBJECTS = [
  'General enquiry',
  'Suggest a place',
  'Report incorrect information',
  'Advertising / partnership',
  'Travel guide feedback',
  'Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const loadedAt = useRef(Date.now())  // bot timing check — captured on mount

  // Reset loadedAt whenever the form resets to success state
  useEffect(() => {
    if (status === 'idle') loadedAt.current = Date.now()
  }, [status])

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      await sendContactMessage({
        ...form,
        _trap:     '',            // honeypot — always empty from real users
        _loadedAt: loadedAt.current,
      })
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err?.response?.data?.error || 'Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <PageSeo
        title="Contact Us — Attractions Nepal"
        description="Get in touch with the Attractions Nepal team. Ask a question, suggest a place, or report an issue."
        canonicalPath="/contact"
      />

      {/* Header */}
      <section className="hero-gradient text-white py-14">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h1 className="font-display text-4xl font-bold">Get in Touch</h1>
          <p className="mt-3 text-green-100">
            Have a question, a suggestion, or spotted something wrong? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">

          {status === 'success' ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Message sent!</h2>
              <p className="text-gray-600 mb-6">We'll get back to you as soon as we can.</p>
              <button
                onClick={() => setStatus('idle')}
                className="btn-primary"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* Honeypot — visually off-screen; filled only by bots */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none', tabIndex: -1 }}>
                <label htmlFor="_trap">Leave this blank</label>
                <input
                  id="_trap"
                  name="_trap"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    maxLength={100}
                    placeholder="Jane Smith"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    maxLength={200}
                    placeholder="jane@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white"
                >
                  <option value="">Select a topic…</option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  maxLength={3000}
                  placeholder="Tell us what's on your mind…"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 resize-y"
                />
                <p className="mt-1 text-xs text-gray-400 text-right">
                  {form.message.length} / 3000
                </p>
              </div>

              {status === 'error' && (
                <p className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>

              <p className="text-xs text-gray-400 text-center">
                We typically respond within 1–2 business days.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
