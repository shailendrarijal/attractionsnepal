import { useState } from 'react'
import api from '../lib/api'

function relativeDate(dateStr) {
  if (!dateStr) return ''
  const diff = Date.now() - new Date(dateStr).getTime()
  const minutes = Math.floor(diff / 60000)
  if (minutes < 60) return `${minutes || 1} minute${minutes !== 1 ? 's' : ''} ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days} day${days !== 1 ? 's' : ''} ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months} month${months !== 1 ? 's' : ''} ago`
  const years = Math.floor(months / 12)
  return `${years} year${years !== 1 ? 's' : ''} ago`
}

export default function CommunityTips({ placeSlug, placeName, initialTips = [] }) {
  const [tips, setTips] = useState(initialTips)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: '', country: '', content: '', _trap: '' })
  const [status, setStatus] = useState('idle') // 'idle'|'submitting'|'done'|'error'
  const [errorMsg, setErrorMsg] = useState('')

  function setField(key, val) {
    setForm((f) => ({ ...f, [key]: val }))
  }

  const contentLen = form.content.length

  async function handleSubmit(e) {
    e.preventDefault()
    if (contentLen < 20 || status === 'submitting') return
    setStatus('submitting')
    setErrorMsg('')

    try {
      await api.post(`/places/${placeSlug}/tips`, {
        authorName: form.name,
        authorCountry: form.country,
        content: form.content,
        _trap: form._trap,
      })
      setStatus('done')
      setShowForm(false)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.response?.data?.error ?? 'Something went wrong. Please try again.')
    }
  }

  return (
    <div>
      <h2 className="font-display font-bold text-xl text-gray-900 mb-4">
        💬 Visitor Tips
      </h2>

      {/* Tips list */}
      {tips.length === 0 && status !== 'done' ? (
        <p className="text-gray-500 text-sm italic mb-4">
          Be the first to leave a tip for future visitors
        </p>
      ) : (
        <div className="space-y-4 mb-6">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="relative p-5 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <span className="absolute top-3 left-4 text-5xl text-gray-200 font-serif leading-none select-none">
                &ldquo;
              </span>
              <p className="italic text-gray-700 text-sm relative z-10 pt-4 pl-2">
                {tip.content}
              </p>
              <p className="mt-3 text-xs text-gray-400">
                &mdash; {tip.authorName}, {tip.authorCountry}
                {tip.createdAt && (
                  <span className="ml-2">&middot; {relativeDate(tip.createdAt)}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Success message */}
      {status === 'done' && (
        <div className="mb-4 rounded-lg bg-green-50 text-green-700 px-4 py-3 text-sm">
          Your tip has been submitted for review. We'll publish it shortly.
        </div>
      )}

      {/* Toggle button */}
      {!showForm && status !== 'done' && (
        <button
          onClick={() => setShowForm(true)}
          className="btn-secondary text-sm"
        >
          Add a tip
        </button>
      )}

      {/* Submission form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4 bg-white rounded-2xl border border-gray-200 p-5">
          {/* Honeypot */}
          <input
            name="_trap"
            value={form._trap}
            onChange={(e) => setField('_trap', e.target.value)}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label className="label">Your tip *</label>
            <textarea
              value={form.content}
              onChange={(e) => setField('content', e.target.value)}
              className="input"
              rows={4}
              maxLength={500}
              required
              placeholder={`e.g. Arrive before 7am to beat the crowds and catch the morning ceremony...`}
            />
            <p className={`text-xs mt-1 ${contentLen > 500 ? 'text-red-500' : 'text-gray-400'}`}>
              {contentLen}/500
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">Your name *</label>
              <input
                value={form.name}
                onChange={(e) => setField('name', e.target.value)}
                className="input"
                required
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="label">Your country *</label>
              <input
                value={form.country}
                onChange={(e) => setField('country', e.target.value)}
                className="input"
                required
                placeholder="Your country"
              />
            </div>
          </div>

          {status === 'error' && (
            <p className="text-sm text-red-600">{errorMsg}</p>
          )}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={contentLen < 20 || status === 'submitting'}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Submitting...' : 'Submit tip →'}
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
