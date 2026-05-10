import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const CATEGORIES = [
  { label: 'Temples',          value: 'TEMPLE' },
  { label: 'Monasteries',      value: 'MONASTERY' },
  { label: 'Stupas',           value: 'STUPA' },
  { label: 'Palaces & Durbar', value: 'DURBAR_PALACE' },
  { label: 'Museums & Sites',  value: 'ARCHAEOLOGICAL' },
  { label: 'Villages & Towns', value: 'CULTURAL_VILLAGE' },
  { label: 'Trekking Routes',  value: 'TREK_ROUTE' },
  { label: 'National Parks',   value: 'NATIONAL_PARK' },
  { label: 'Viewpoints',       value: 'HILL_VIEWPOINT' },
  { label: 'Mountain Views',   value: 'MOUNTAIN_VIEW' },
  { label: 'Waterfalls',       value: 'WATERFALL' },
  { label: 'Lakes',            value: 'LAKE' },
  { label: 'Rivers',           value: 'RIVER' },
  { label: 'Hot Springs',      value: 'HOT_SPRING' },
  { label: 'Caves',            value: 'CAVE' },
  { label: 'Adventure Sports', value: 'ADVENTURE_SPORTS' },
  { label: 'Amusement Parks',  value: 'AMUSEMENT_PARK' },
]

function categorySlug(val) {
  return val.toLowerCase().replace(/_/g, '-')
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [catOpen, setCatOpen] = useState(false)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  function handleSearch(e) {
    e.preventDefault()
    if (search.trim()) {
      navigate(`/explore?search=${encodeURIComponent(search.trim())}`)
      setSearch('')
      setMobileOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🏔️</span>
            <span className="font-display text-xl font-bold text-primary-800">
              AttractionsNepal
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {/* Categories dropdown */}
            <div className="relative" onMouseLeave={() => setCatOpen(false)}>
              <button
                onMouseEnter={() => setCatOpen(true)}
                className="text-sm font-medium text-gray-700 hover:text-primary-700 transition-colors flex items-center gap-1"
              >
                Categories
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {catOpen && (
                <div className="absolute left-0 top-full mt-1 w-56 rounded-xl bg-white shadow-lg ring-1 ring-gray-100 py-1 z-50 max-h-[80vh] overflow-y-auto">
                  {CATEGORIES.map((c) => (
                    <Link
                      key={c.value}
                      to={`/category/${categorySlug(c.value)}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                      onClick={() => setCatOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/explore"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-primary-700' : 'text-gray-700 hover:text-primary-700'}`
              }
            >
              Explore Map
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-primary-700' : 'text-gray-700 hover:text-primary-700'}`
              }
            >
              Blog
            </NavLink>
          </div>

          {/* Search */}
          <form onSubmit={handleSearch} className="hidden sm:flex flex-1 max-w-xs">
            <div className="relative w-full">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search places..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-1.5 pl-9 pr-4 text-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </form>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search places..."
              className="flex-1 rounded-l-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none"
            />
            <button type="submit" className="rounded-r-lg bg-primary-700 px-3 text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          <Link to="/explore" className="block py-2 text-sm font-medium text-gray-700" onClick={() => setMobileOpen(false)}>
            Explore Map
          </Link>
          <Link to="/blog" className="block py-2 text-sm font-medium text-gray-700" onClick={() => setMobileOpen(false)}>
            Blog
          </Link>
          <div className="pt-1 border-t border-gray-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 py-2">Categories</p>
            <div className="grid grid-cols-2 gap-1">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.value}
                  to={`/category/${categorySlug(c.value)}`}
                  className="block py-1.5 text-sm text-gray-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
