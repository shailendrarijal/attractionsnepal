import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { usePlaces } from '../hooks/usePlaces'
import { useBlogs } from '../hooks/useBlogs'
import PlaceCard from '../components/PlaceCard'
import BlogCard from '../components/BlogCard'
import LoadingSpinner from '../components/LoadingSpinner'
import PageSeo from '../components/PageSeo'
import JsonLd from '../components/JsonLd'
import NewsletterSignup from '../components/NewsletterSignup'

const CATEGORIES = [
  { label: 'Temples',          slug: 'temple',           icon: '🛕' },
  { label: 'Monasteries',      slug: 'monastery',        icon: '🏯' },
  { label: 'Stupas',           slug: 'stupa',            icon: '☸️' },
  { label: 'Palaces',          slug: 'durbar-palace',    icon: '🏛️' },
  { label: 'Museums & Sites',  slug: 'archaeological',   icon: '🏺' },
  { label: 'Villages & Towns', slug: 'cultural-village', icon: '🏘️' },
  { label: 'Trekking',         slug: 'trek-route',       icon: '🥾' },
  { label: 'National Parks',   slug: 'national-park',    icon: '🌿' },
  { label: 'Viewpoints',       slug: 'hill-viewpoint',   icon: '👁️' },
  { label: 'Mountain Views',   slug: 'mountain-view',    icon: '🏔️' },
  { label: 'Waterfalls',       slug: 'waterfall',        icon: '💦' },
  { label: 'Lakes',            slug: 'lake',             icon: '🏖️' },
  { label: 'Rivers',           slug: 'river',            icon: '🏞️' },
  { label: 'Hot Springs',      slug: 'hot-spring',       icon: '♨️' },
  { label: 'Caves',            slug: 'cave',             icon: '🪨' },
  { label: 'Adventure',        slug: 'adventure-sports', icon: '🪂' },
  { label: 'Amusement Parks',  slug: 'amusement-park',   icon: '🎡' },
]

export default function HomePage() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const { data: featuredData, isLoading: featuredLoading } = usePlaces({ featured: 'true', limit: 6 })
  const { data: blogData, isLoading: blogLoading } = useBlogs({ limit: 3 })

  function handleSearch(e) {
    e.preventDefault()
    if (search.trim()) navigate(`/explore?search=${encodeURIComponent(search.trim())}`)
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Attractions Nepal',
    url: 'https://attractionsnepal.com',
    description: "Discover Nepal's best places, myths, festivals, and travel guides",
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://attractionsnepal.com/explore?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <PageSeo
        description="Discover Nepal's top temples, trekking routes, monasteries, national parks, and natural wonders. Plan your perfect Nepal trip."
        canonicalPath="/"
      />
      <JsonLd data={websiteJsonLd} />

      {/* Hero */}
      <section className="hero-gradient text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Discover Nepal's<br />
            <span className="text-green-300">Hidden Wonders</span>
          </h1>
          <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
            From ancient temples to Himalayan peaks, explore every attraction Nepal has to offer.
          </p>

          <form onSubmit={handleSearch} className="mt-8 flex max-w-xl mx-auto shadow-xl rounded-full overflow-hidden">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search places, districts, or categories..."
              className="flex-1 px-6 py-4 text-gray-900 text-base focus:outline-none"
            />
            <button
              type="submit"
              className="bg-nepal-gold hover:bg-yellow-500 px-6 py-4 font-semibold text-gray-900 transition-colors shrink-0"
            >
              Search
            </button>
          </form>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/explore" className="text-sm text-green-200 hover:text-white underline underline-offset-2">
              🗺️ Browse the map
            </Link>
            <span className="text-green-600">·</span>
            <Link to="/blog" className="text-sm text-green-200 hover:text-white underline underline-offset-2">
              📖 Read travel guides
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to={`/category/${c.slug}`}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 shadow-sm hover:shadow-md ring-1 ring-gray-100 hover:ring-primary-200 transition-all text-center group"
              >
                <span className="text-3xl">{c.icon}</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary-700 transition-colors">
                  {c.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured places */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900">Featured Attractions</h2>
            <Link to="/explore" className="text-sm font-medium text-primary-700 hover:underline">
              View all →
            </Link>
          </div>

          {featuredLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredData?.places?.map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Blog section */}
      <section className="py-14 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900">Travel Guides & Stories</h2>
            <Link to="/blog" className="text-sm font-medium text-primary-700 hover:underline">
              All articles →
            </Link>
          </div>

          {blogLoading ? (
            <LoadingSpinner />
          ) : blogData?.blogs?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogData.blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">Coming soon — travel guides are on the way!</p>
          )}
        </div>
      </section>

      {/* Newsletter signup */}
      <NewsletterSignup />

      {/* CTA banner */}
      <section className="bg-primary-800 text-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold">Ready to Explore Nepal?</h2>
          <p className="mt-3 text-primary-200">
            Use our interactive map to discover attractions by location, or browse by category.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/explore" className="btn-primary bg-white text-primary-800 hover:bg-gray-100">
              🗺️ Open the Map
            </Link>
            <Link to="/category/trek-route" className="btn-secondary bg-transparent border-white text-white hover:bg-primary-700">
              🥾 Browse Treks
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
