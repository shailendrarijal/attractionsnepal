import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStories } from '../hooks/useStories'
import LoadingSpinner from '../components/LoadingSpinner'
import PageSeo from '../components/PageSeo'

const CATEGORY_LABELS = {
  MYTHOLOGY:  'Mythology',
  FESTIVAL:   'Festivals',
  TRADITION:  'Traditions',
  SCRIPTURE:  'Scripture',
  DEITY:      'Deities',
  PILGRIMAGE: 'Pilgrimage',
  RITUAL:     'Rituals',
}

const CATEGORIES = Object.keys(CATEGORY_LABELS)

// Distinct gradient per category so hero-less cards still feel unique
const CATEGORY_GRADIENTS = {
  MYTHOLOGY:  'from-indigo-800 to-purple-700',
  FESTIVAL:   'from-orange-600 to-rose-600',
  TRADITION:  'from-teal-700 to-emerald-600',
  SCRIPTURE:  'from-amber-700 to-yellow-600',
  DEITY:      'from-violet-700 to-fuchsia-600',
  PILGRIMAGE: 'from-primary-800 to-primary-600',
  RITUAL:     'from-red-800 to-orange-700',
}

function StoryCard({ story }) {
  const date = story.publishedAt
    ? new Date(story.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
    : null

  const gradient = CATEGORY_GRADIENTS[story.category] ?? 'from-gray-700 to-gray-500'
  const label    = CATEGORY_LABELS[story.category]    ?? story.category

  return (
    <Link
      to={`/stories/${story.slug}`}
      className="card group flex flex-col hover:shadow-md transition-shadow"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] overflow-hidden">
        {story.heroImage ? (
          <img
            src={story.heroImage}
            alt={story.title}
            loading="lazy"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <span className="text-4xl opacity-60">📖</span>
          </div>
        )}
        {/* Category badge over image */}
        <span className="absolute top-3 left-3 badge bg-primary-700/90 text-white text-xs font-semibold">
          {label}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-semibold text-gray-900 text-base leading-snug group-hover:text-primary-700 transition-colors line-clamp-2 flex-1">
          {story.title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{story.excerpt}</p>

        {date && (
          <p className="mt-3 text-xs text-gray-400">{date}</p>
        )}
      </div>
    </Link>
  )
}

export default function StoryListPage() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [search, setSearch]                 = useState('')
  const [appliedSearch, setAppliedSearch]   = useState('')

  const { data, isLoading } = useStories({
    ...(activeCategory  && { category: activeCategory }),
    ...(appliedSearch   && { search: appliedSearch }),
  })

  const stories = data?.stories ?? data ?? []

  function handleSearch(e) {
    e.preventDefault()
    setAppliedSearch(search.trim())
  }

  function clearSearch() {
    setSearch('')
    setAppliedSearch('')
  }

  return (
    <>
      <PageSeo
        title="Stories of Nepal — Myths, Festivals & Traditions"
        description="Explore Nepal's mythological tales, festival legends, sacred scriptures, deity lore, pilgrimage histories, and ancient traditions."
        canonicalPath="/stories"
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-950 to-primary-900 py-12 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-300 mb-2">Sacred Narratives</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">Stories of Nepal</h1>
          <p className="mt-3 text-indigo-200 max-w-xl mx-auto">
            Mythological tales, festival legends, deity lore, ancient traditions and pilgrimage histories
            that have shaped the Himalayan soul.
          </p>

          {/* Search */}
          <form onSubmit={handleSearch} className="mt-6 flex max-w-md mx-auto gap-2">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search stories..."
              className="input flex-1"
            />
            <button type="submit" className="btn-primary">Search</button>
            {appliedSearch && (
              <button type="button" onClick={clearSearch} className="btn-secondary">
                Clear
              </button>
            )}
          </form>
        </div>
      </div>

      {/* Category filters */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            <button
              onClick={() => setActiveCategory(null)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === null
                  ? 'bg-primary-700 text-white border-primary-700'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-primary-400 hover:text-primary-700'
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  activeCategory === cat
                    ? 'bg-primary-700 text-white border-primary-700'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-primary-400 hover:text-primary-700'
                }`}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 pb-16">
        {isLoading ? (
          <LoadingSpinner />
        ) : stories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">📖</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {appliedSearch || activeCategory ? 'No stories found' : 'No stories yet'}
            </h2>
            <p className="text-gray-500">
              {appliedSearch
                ? `No stories match "${appliedSearch}". Try a different search term.`
                : activeCategory
                  ? `No ${CATEGORY_LABELS[activeCategory]} stories published yet.`
                  : 'Stories are coming soon!'}
            </p>
            {(appliedSearch || activeCategory) && (
              <button
                onClick={() => { clearSearch(); setActiveCategory(null) }}
                className="btn-primary mt-4"
              >
                Clear filters
              </button>
            )}
          </div>
        )}
      </div>
    </>
  )
}
