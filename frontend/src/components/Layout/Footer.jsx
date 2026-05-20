import { Link } from 'react-router-dom'

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

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏔️</span>
              <span className="font-display text-lg font-bold text-white">AttractionsNepal</span>
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

          {/* Explore + Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/explore" className="text-sm hover:text-white transition-colors">Map View</Link></li>
              <li><Link to="/blog"    className="text-sm hover:text-white transition-colors">Travel Blog</Link></li>
              <li><Link to="/admin"   className="text-sm hover:text-white transition-colors">Admin</Link></li>
            </ul>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mt-6 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms"   className="text-sm hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
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
