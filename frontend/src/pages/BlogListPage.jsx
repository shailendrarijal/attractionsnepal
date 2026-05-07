import { useState } from 'react'
import { useBlogs } from '../hooks/useBlogs'
import BlogCard from '../components/BlogCard'
import LoadingSpinner from '../components/LoadingSpinner'
import PageSeo from '../components/PageSeo'

export default function BlogListPage() {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  const { data, isLoading } = useBlogs({ search: query, limit: 24 })

  function handleSearch(e) {
    e.preventDefault()
    setQuery(search.trim())
  }

  return (
    <>
      <PageSeo
        title="Travel Blog"
        description="Nepal travel guides, trekking itineraries, cultural insights, and practical tips for every type of traveller."
        canonicalPath="/blog"
      />

      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-100 py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Nepal Travel Blog
          </h1>
          <p className="mt-2 text-gray-600">
            Itineraries, trekking guides, cultural deep-dives, and travel tips for Nepal.
          </p>

          <form onSubmit={handleSearch} className="mt-6 flex max-w-md mx-auto gap-2">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="input flex-1"
            />
            <button type="submit" className="btn-primary">Search</button>
          </form>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <LoadingSpinner />
        ) : data?.blogs?.length ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
            {data.total > data.blogs.length && (
              <p className="text-center text-gray-500 mt-10 text-sm">
                Showing {data.blogs.length} of {data.total} articles
              </p>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">📝</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {query ? 'No results found' : 'No articles yet'}
            </h2>
            <p className="text-gray-500">
              {query
                ? `No articles match "${query}". Try a different search term.`
                : 'Travel guides are coming soon!'}
            </p>
          </div>
        )}
      </div>
    </>
  )
}
