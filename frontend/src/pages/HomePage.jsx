import { Link } from 'react-router-dom'
import { usePlaces, usePlace } from '../hooks/usePlaces'
import { useBlogs, useBlog } from '../hooks/useBlogs'
import PlaceCard from '../components/PlaceCard'
import BlogCard from '../components/BlogCard'
import PageSeo from '../components/PageSeo'
import JsonLd from '../components/JsonLd'
import NewsletterSignup from '../components/NewsletterSignup'
import GuidePromo from '../components/GuidePromo'

/** Skeleton card — same aspect ratio as PlaceCard so no layout shift when data loads */
function PlaceCardSkeleton() {
  return (
    <div className="aspect-[4/3] rounded-2xl bg-gray-200 animate-pulse" />
  )
}

function BlogCardSkeleton() {
  return (
    <div className="rounded-2xl bg-white shadow-sm overflow-hidden animate-pulse">
      <div className="aspect-[16/9] bg-gray-200" />
      <div className="p-5 space-y-3">
        <div className="h-3 w-1/3 bg-gray-200 rounded" />
        <div className="h-5 w-3/4 bg-gray-200 rounded" />
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-2/3 bg-gray-200 rounded" />
      </div>
    </div>
  )
}

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

const STATS = [
  { value: '330+', label: 'Attractions listed' },
  { value: '50+',  label: 'Ready-made itineraries' },
  { value: '7',    label: 'Provinces covered' },
  { value: '50+',  label: 'Travel guides & stories' },
]

const PROVINCES = [
  {
    value: 'BAGMATI',
    label: 'Bagmati',
    icon: '🏛️',
    blurb: 'The Kathmandu Valley — Durbar Squares, Pashupatinath, Boudhanath, and the beating cultural heart of Nepal.',
  },
  {
    value: 'GANDAKI',
    label: 'Gandaki',
    icon: '🏔️',
    blurb: "Pokhara's lakes and the Annapurna range — the country's trekking and adventure-sports capital.",
  },
  {
    value: 'LUMBINI',
    label: 'Lumbini',
    icon: '☸️',
    blurb: 'The birthplace of the Buddha, sacred gardens, ancient stupas, and the warm plains of the western Terai.',
  },
  {
    value: 'KOSHI',
    label: 'Koshi',
    icon: '🍃',
    blurb: 'Rolling tea gardens in Ilam, Himalayan viewpoints, and routes toward Kanchenjunga in the far east.',
  },
  {
    value: 'MADHESH',
    label: 'Madhesh',
    icon: '🛕',
    blurb: "Janakpur's Mithila temples and the fertile Terai plains along Nepal's southern border.",
  },
  {
    value: 'KARNALI',
    label: 'Karnali',
    icon: '🏞️',
    blurb: "Nepal's wildest, least-visited frontier — remote treks, Rara Lake, and untouched Himalayan valleys.",
  },
  {
    value: 'SUDURPASHCHIM',
    label: 'Sudurpashchim',
    icon: '🌲',
    blurb: 'The far west — Khaptad, Api Himal, and some of the country\'s most untouched wilderness.',
  },
]

export default function HomePage() {
  const { data: featuredData, isLoading: featuredLoading } = usePlaces({ featured: 'true', limit: 6 })
  const { data: blogData, isLoading: blogLoading } = useBlogs({ limit: 3 })

  // Silent warm-up: as soon as the featured places / blog posts resolve, fire
  // a real place-detail and blog-detail request (the same hooks and cache
  // keys PlacePage/BlogPage use) in the background. On the free Render plan
  // both the API process and its DB connection pool go cold after 15 minutes
  // idle — this warms the exact query shape a visitor is about to hit next,
  // and if they click through to this specific place/post it's already
  // cached. Nothing from these two hooks is rendered.
  const warmPlaceSlug = featuredData?.places?.[0]?.slug
  const warmBlogSlug = blogData?.blogs?.[0]?.slug
  usePlace(warmPlaceSlug)
  useBlog(warmBlogSlug)

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

      {/* Hero — search lives in the header now, so this stays short and gets
          real content in front of visitors faster. */}
      <section className="hero-gradient text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-green-300 mb-3">
            Explore. Discover. Experience.
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Discover Nepal's<br />
            <span className="text-green-300">Hidden Wonders</span>
          </h1>
          <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
            From ancient temples to Himalayan peaks, explore every attraction Nepal has to offer.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/explore" className="btn-primary bg-white text-primary-800 hover:bg-gray-100">
              🗺️ Browse the Map
            </Link>
            <Link to="/plan-my-trip" className="btn-secondary bg-transparent border-white text-white hover:bg-primary-700">
              ✨ Plan My Trip
            </Link>
            <Link to="/blog" className="btn-secondary bg-transparent border-white text-white hover:bg-primary-700">
              📖 Read Travel Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary-900 text-white py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl sm:text-4xl font-bold text-green-300">{s.value}</p>
              <p className="mt-1 text-xs sm:text-sm text-primary-100">{s.label}</p>
            </div>
          ))}
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

      {/* Explore by Province */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-500 mb-1">
              Seven Provinces, One Nepal
            </p>
            <h2 className="text-2xl font-display font-bold text-gray-900">Explore by Province</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROVINCES.map((p) => (
              <Link
                key={p.value}
                to={`/explore?province=${p.value}`}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 hover:shadow-md hover:ring-primary-200 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{p.icon}</span>
                  <h3 className="font-display font-bold text-gray-900">{p.label}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{p.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured places */}
      <section className="py-14 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-gray-900">Featured Attractions</h2>
            <Link to="/explore" className="text-sm font-medium text-primary-700 hover:underline">
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLoading
              ? Array.from({ length: 6 }).map((_, i) => <PlaceCardSkeleton key={i} />)
              : featuredData?.places?.map((place, idx) => (
                  <PlaceCard key={place.id} place={place} priority={idx === 0} />
                ))
            }
          </div>
        </div>
      </section>

      {/* Guide promo */}
      <GuidePromo />

      {/* Blog section */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary-500 mb-1">
                Stories from the Heart of Nepal.
              </p>
              <h2 className="text-2xl font-display font-bold text-gray-900">Travel Guides & Stories</h2>
            </div>
            <Link to="/blog" className="text-sm font-medium text-primary-700 hover:underline">
              All articles →
            </Link>
          </div>

          {blogLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => <BlogCardSkeleton key={i} />)}
            </div>
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
            <a
              href="https://shailendra185.gumroad.com/l/jdvner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 transition-colors"
            >
              📖 Get the Travel Guide
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
