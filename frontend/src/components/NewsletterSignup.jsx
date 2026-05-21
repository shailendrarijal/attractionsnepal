import { useState } from 'react'
import api from '../lib/api'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      const res = await api.post('/newsletter/subscribe', { email })
      setMessage(res.data.message || 'Subscribed!')
      setStatus('success')
      setEmail('')
    } catch (err) {
      setMessage(err.response?.data?.error || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section
      style={{ background: 'linear-gradient(135deg, #14532d 0%, #15803d 50%, #166534 100%)' }}
      className="py-16 px-4"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-4xl mb-3">🏔️</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
          Get the Free Nepal Trip Checklist
        </h2>
        <p className="mt-3 text-green-200 text-base sm:text-lg">
          Join 10,000+ travelers. No spam, unsubscribe anytime.
        </p>

        {status === 'success' ? (
          <div className="mt-8 inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-xl px-6 py-4 text-base font-medium">
            <span className="text-xl">🎉</span>
            Check your inbox! Your checklist is on its way.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              disabled={status === 'loading'}
              className="flex-1 px-5 py-3 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-green-300 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-yellow-400 hover:bg-yellow-300 disabled:opacity-60 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors shrink-0 text-base"
            >
              {status === 'loading' ? 'Subscribing…' : 'Send Me the Checklist'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-3 text-red-300 text-sm">{message}</p>
        )}
      </div>
    </section>
  )
}
