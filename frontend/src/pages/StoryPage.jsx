import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useStory } from '../hooks/useStories'
import LoadingSpinner from '../components/LoadingSpinner'
import PageSeo from '../components/PageSeo'
import AdBanner from '../components/AdBanner'
import JsonLd from '../components/JsonLd'
import { autoLinkPlaces } from '../utils/autoLinkPlaces'
import { Analytics } from '../utils/analytics'

const CATEGORY_LABELS = {
  MYTHOLOGY:  'Mythology',
  FESTIVAL:   'Festivals',
  TRADITION:  'Traditions',
  SCRIPTURE:  'Scripture',
  DEITY:      'Deities',
  PILGRIMAGE: 'Pilgrimage',
  RITUAL:     'Rituals',
}

const CATEGORY_GRADIENTS = {
  MYTHOLOGY:  'from-indigo-800 to-purple-700',
  FESTIVAL:   'from-orange-600 to-rose-600',
  TRADITION:  'from-teal-700 to-emerald-600',
  SCRIPTURE:  'from-amber-700 to-yellow-600',
  DEITY:      'from-violet-700 to-fuchsia-600',
  PILGRIMAGE: 'from-primary-800 to-primary-600',
  RITUAL:     'from-red-800 to-orange-700',
}

export default function StoryPage() {
  const { slug } = useParams()
  const { data: story, isLoading, error } = useStory(slug)

  if (isLoading) return <LoadingSpinner />

  if (error || !story) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-5xl mb-4">📖</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Story not found</h1>
        <p className="text-gray-500 mb-6">This story may have moved or doesn't exist.</p>
        <Link to="/stories" className="btn-primary">Back to Stories</Link>
      </div>
    )
  }

  const date = story.publishedAt
    ? new Date(story.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
    : null

  const gradient = CATEGORY_GRADIENTS[story.category] ?? 'from-gray-700 to-gray-500'
  const label    = CATEGORY_LABELS[story.category]    ?? story.category

  // Fire GA story_view once per load
  useEffect(() => {
    Analytics.storyView(story.slug, story.title, story.category)
  }, [story.slug]) // eslint-disable-line react-hooks/exhaustive-deps

  const linkedContent = autoLinkPlaces(story.content, story.relatedPlaceSlugs)

  const stripUndefined = (obj) => JSON.parse(JSON.stringify(obj))

  const storyJsonLd = stripUndefined({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: story.title,
    description: story.seoDescription ?? story.excerpt,
    url: `https://attractionsnepal.com/stories/${story.slug}`,
    image: story.heroImage ?? undefined,
    datePublished: story.publishedAt,
    publisher: {
      '@type': 'Organization',
      name: 'Attractions Nepal',
      url: 'https://attractionsnepal.com',
    },
  })

  return (
    <>
      <PageSeo
        title={story.seoTitle ?? story.title}
        description={story.seoDescription ?? story.excerpt}
        image={story.heroImage}
        canonicalPath={`/stories/${story.slug}`}
      />
      <JsonLd data={storyJsonLd} />

      {/* Hero */}
      <div className="relative h-64 sm:h-80 lg:h-[440px] overflow-hidden">
        {story.heroImage ? (
          <>
            <img
              src={story.heroImage}
              alt={story.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
          </>
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block badge bg-primary-600/90 text-white mb-3">
              {label}
            </span>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {story.title}
            </h1>
            {date && <p className="mt-2 text-gray-300 text-sm">{date}</p>}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Excerpt */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed border-l-4 border-primary-400 pl-4 italic">
          {story.excerpt}
        </p>

        {/* Top ad */}
        <AdBanner size="leaderboard" />

        {/* Body */}
        <div className="prose prose-base lg:prose-lg max-w-none">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{linkedContent}</ReactMarkdown>
        </div>

        {/* Mid ad */}
        <AdBanner size="rectangle" />

        {/* Related Places */}
        {story.relatedPlaceSlugs?.length > 0 && (
          <div className="mt-12 p-6 rounded-2xl bg-green-50 border border-green-100">
            <h3 className="font-bold text-gray-900 mb-3">Places in This Story</h3>
            <div className="flex flex-wrap gap-2">
              {story.relatedPlaceSlugs.map((s) => (
                <Link
                  key={s}
                  to={`/places/${s}`}
                  onClick={() => Analytics.relatedPlaceClick(s, story.slug)}
                  className="text-sm font-medium text-primary-700 hover:underline"
                >
                  → {s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {story.tags?.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {story.tags.map(({ tag }) => (
              <span key={tag.slug} className="badge bg-primary-50 text-primary-700">
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Footer nav */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
          <Link to="/stories" className="text-sm font-medium text-primary-700 hover:underline">
            ← All Stories
          </Link>
          <Link to="/explore" className="btn-primary">
            Explore Places →
          </Link>
        </div>
      </div>
    </>
  )
}
