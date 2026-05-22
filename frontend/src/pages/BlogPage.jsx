import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { useBlog } from '../hooks/useBlogs'
import LoadingSpinner from '../components/LoadingSpinner'
import PageSeo from '../components/PageSeo'
import AdBanner from '../components/AdBanner'
import JsonLd from '../components/JsonLd'
import GuidePromo from '../components/GuidePromo'

const PLACEHOLDER = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80'

export default function BlogPage() {
  const { slug } = useParams()
  const { data: blog, isLoading, error } = useBlog(slug)

  if (isLoading) return <LoadingSpinner />

  if (error || !blog) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-5xl mb-4">📝</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Article not found</h1>
        <Link to="/blog" className="btn-primary mt-4">Back to Blog</Link>
      </div>
    )
  }

  const date = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
    : null

  const stripUndefined = (obj) => JSON.parse(JSON.stringify(obj))

  const blogJsonLd = stripUndefined({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.seoDescription ?? blog.excerpt,
    url: `https://attractionsnepal.com/blog/${blog.slug}`,
    image: blog.heroImage ?? undefined,
    datePublished: blog.publishedAt,
    publisher: {
      '@type': 'Organization',
      name: 'Attractions Nepal',
      url: 'https://attractionsnepal.com',
    },
  })

  return (
    <>
      <PageSeo
        title={blog.seoTitle ?? blog.title}
        description={blog.seoDescription ?? blog.excerpt}
        image={blog.heroImage}
        canonicalPath={`/blog/${blog.slug}`}
      />
      <JsonLd data={blogJsonLd} />

      {/* Hero */}
      <div className="relative h-64 sm:h-80 lg:h-[420px] bg-gray-900 overflow-hidden">
        <img
          src={blog.heroImage ?? PLACEHOLDER}
          alt={blog.title}
          className="absolute inset-0 h-full w-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="mx-auto max-w-3xl">
            {blog.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {blog.tags.map(({ tag }) => (
                  <span key={tag.slug} className="badge bg-primary-700/80 text-white">
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {blog.title}
            </h1>
            {date && <p className="mt-2 text-gray-400 text-sm">{date}</p>}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-lg text-gray-600 mb-8 leading-relaxed border-l-4 border-primary-400 pl-4">
          {blog.excerpt}
        </p>

        {/* Top ad — before content */}
        <AdBanner size="leaderboard" />

        <div className="prose prose-base lg:prose-lg max-w-none">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{blog.content}</ReactMarkdown>
        </div>

        {/* Mid ad — after content */}
        <AdBanner size="rectangle" />

        {/* Guide promo — readers finishing an article are warm leads */}
        <GuidePromo variant="inline" />

        {/* Related places */}
        {blog.relatedPlaceSlugs?.length > 0 && (
          <div className="mt-12 p-6 rounded-2xl bg-green-50 border border-green-100">
            <h3 className="font-bold text-gray-900 mb-3">🗺️ Places Mentioned in This Article</h3>
            <div className="flex flex-wrap gap-2">
              {blog.relatedPlaceSlugs.map((s) => (
                <Link
                  key={s}
                  to={`/places/${s}`}
                  className="text-sm font-medium text-primary-700 hover:underline"
                >
                  → {s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
          <Link to="/blog" className="text-sm font-medium text-primary-700 hover:underline">
            ← All articles
          </Link>
          <Link to="/explore" className="btn-primary">
            Explore Places →
          </Link>
        </div>
      </div>
    </>
  )
}
