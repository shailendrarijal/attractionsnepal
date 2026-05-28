import { Link } from 'react-router-dom'
import { useState } from 'react'
import api from '../../lib/api'

const categories = [
  { label: 'Temples',          slug: 'temple' },
  { label: 'Monasteries',      slug: 'monastery' },
  { label: 'Stupas',           slug: 'stupa' },
  { label: 'Palaces & Durbar', slug: 'durbar-palace' },
  { label: 'Museums & Sites',  slug: 'archaeological' },
  { label: 'Villages & Towns', slug: 'cultural-village' },
  { label: 'Trekking Routes',  slug: 'trek-route' },
  { label: 'National Parks',   slug: 'national-park' },
  { label: 'Viewpoints',       slug: 'hill-viewpoint' },
  { label: 'Mountain Views',   slug: 'mountain-view' },
  { label: 'Waterfalls',       slug: 'waterfall' },
  { label: 'Lakes',            slug: 'lake' },
  { label: 'Rivers',           slug: 'river' },
  { label: 'Hot Springs',      slug: 'hot-spring' },
  { label: 'Caves',            slug: 'cave' },
  { label: 'Adventure Sports', slug: 'adventure-sports' },
  { label: 'Amusement Parks',  slug: 'amusement-park' },
]

function FooterNewsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      await api.post('/newsletter/subscribe', { email })
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Newsletter</h3>
      <p className="text-sm text-gray-400 mb-3">Get the free Nepal trip checklist.</p>
      {status === 'success' ? (
        <p className="text-sm text-green-400">Subscribed! Check your inbox.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            disabled={status === 'loading'}
            className="flex-1 min-w-0 rounded px-3 py-2 text-sm bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="shrink-0 bg-green-700 hover:bg-green-600 disabled:opacity-60 text-white text-sm font-medium px-3 py-2 rounded transition-colors"
          >
            {status === 'loading' ? '…' : 'Join'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="mt-2 text-xs text-red-400">Failed — please try again.</p>
      )}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-3">
              <img src="/an_logo.png" alt="Attractions Nepal" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Your complete guide to Nepal's temples, treks, natural wonders, and hidden gems.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              This site contains affiliate links. We may earn a commission at no extra cost to you.
            </p>
          </div>

          {/* Categories col 1 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.slice(0, 9).map((c) => (
                <li key={c.slug}>
                  <Link to={`/category/${c.slug}`} className="text-sm hover:text-white transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories col 2 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">More</h3>
            <ul className="space-y-2">
              {categories.slice(9).map((c) => (
                <li key={c.slug}>
                  <Link to={`/category/${c.slug}`} className="text-sm hover:text-white transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Guides */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Travel Guides</h3>
            <ul className="space-y-2">
              <li><Link to="/visit-nepal"              className="text-sm hover:text-white transition-colors">Nepal Travel Guide</Link></li>
              <li><Link to="/nepal-trekking-guide"     className="text-sm hover:text-white transition-colors">Nepal Trekking Guide</Link></li>
              <li><Link to="/best-time-to-visit-nepal" className="text-sm hover:text-white transition-colors">Best Time to Visit</Link></li>
              <li><Link to="/nepal-visa-guide"         className="text-sm hover:text-white transition-colors">Nepal Visa Guide</Link></li>
              <li><Link to="/nepal-travel-cost"        className="text-sm hover:text-white transition-colors">Nepal Travel Cost</Link></li>
              <li><Link to="/kathmandu-to-pokhara"     className="text-sm hover:text-white transition-colors">Kathmandu to Pokhara</Link></li>
              <li><Link to="/nepal-packing-list"       className="text-sm hover:text-white transition-colors">Nepal Packing List</Link></li>
            </ul>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mt-6 mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/explore"       className="text-sm hover:text-white transition-colors">Map View</Link></li>
              <li><Link to="/plan-my-trip" className="text-sm text-primary-300 hover:text-white transition-colors font-medium">🗺️ Plan My Trip</Link></li>
              <li><Link to="/itineraries"  className="text-sm hover:text-white transition-colors">Itineraries</Link></li>
              <li><Link to="/blog"        className="text-sm hover:text-white transition-colors">Travel Blog</Link></li>
              <li><Link to="/stories"     className="text-sm hover:text-white transition-colors">Stories</Link></li>
              <li><Link to="/about"   className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-white transition-colors">Contact Us</Link></li>
              <li>
                <a
                  href="https://shailendra185.gumroad.com/l/jdvner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-amber-400 hover:text-amber-300 transition-colors font-medium"
                >
                  📖 Nepal Travel Guide PDF
                </a>
              </li>
              <li><Link to="/admin"   className="text-sm hover:text-white transition-colors">Admin</Link></li>
            </ul>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mt-6 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms"   className="text-sm hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <FooterNewsletter />
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} AttractionsNepal. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Information on this site is for general guidance only. Please verify details before travel.
          </p>
          <p className="text-xs text-gray-500">
            Powered by{' '}
            <a
              href="https://nashtech.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Nashtech
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
