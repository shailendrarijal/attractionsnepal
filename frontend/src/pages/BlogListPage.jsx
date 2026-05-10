import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useBlogs } from '../hooks/useBlogs'
import BlogCard from '../components/BlogCard'
import LoadingSpinner from '../components/LoadingSpinner'
import PageSeo from '../components/PageSeo'

const PER_PAGE = 12

function Pagination({ page, total, perPage, onPage }) {
  const totalPages = Math.ceil(total / perPage)
  if (totalPages <= 1) return null

  // Show at most 7 page buttons: first, last, current ±2, and ellipses
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= page - 2 && i <= page + 2)
    ) {
      pages.push(i)
    }
  }

  // Insert ellipsis markers
  const items = []
  for (let i = 0; i < pages.length; i++) {
    if (i > 0 && pages[i] - pages[i - 1] > 1) {
      items.push('…')
    }
    items.push(pages[i])
  }

  return (
    <nav aria-label="Blog pagination" className="flex items-center justify-center gap-1 mt-12 flex-wrap">
      {/* Prev */}
      <button
        onClick={() => onPage(page - 1)}
        disabled={page === 1}
        className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Previous page"
      >
        ← Prev
      </button>

      {/* Page numbers */}
      {items.map((item, i) =>
        item === '…' ? (
          <span key={`ellipsis-${i}`} className="px-2 py-2 text-gray-400 text-sm select-none">…</span>
        ) : (
          <button
            key={item}
            onClick={() => onPage(item)}
            aria-current={item === page ? 'page' : undefined}
            className={`min-w-[2.25rem] px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              item === page
                ? 'bg-primary-700 text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {item}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPage(page + 1)}
        disabled={page === totalPages}
        className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Next page"
      >
        Next →
      </button>
    </nav>
  )
}

export default function BlogListPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [search, setSearch]   = useState(searchParams.get('search') ?? '')
  const appliedSearch          = searchParams.get('search') ?? ''
  const page                   = Math.max(1, parseInt(searchParams.get('page') ?? '1', 10))

  const { data, isLoading } = useBlogs({
    ...(appliedSearch && { search: appliedSearch }),
    page,
    limit: PER_PAGE,
  })

  const total      = data?.total ?? 0
  const totalPages = Math.ceil(total / PER_PAGE)

  function handleSearch(e) {
    e.preventDefault()
    const p = {}
    if (search.trim()) p.search = search.trim()
    setSearchParams(p)   // reset to page 1
  }

  function goToPage(p) {
    const params = {}
    if (appliedSearch) params.search = appliedSearch
    if (p > 1) params.page = String(p)
    setSearchParams(params)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function clearSearch() {
    setSearch('')
    setSearchParams({})
  }

  return (
    <>
      <PageSeo
        title={`Nepal Travel Blog${page > 1 ? ` — Page ${page}` : ''}`}
        description="Nepal travel guides, trekking itineraries, cultural insights, mythology and practical tips for every type of traveller."
        canonicalPath={page > 1 ? `/blog?page=${page}` : '/blog'}
      />

      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-100 py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Nepal Travel Blog
          </h1>
          <p className="mt-2 text-gray-600">
            Itineraries, trekking guides, mythology, festivals and cultural deep-dives.
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
            {appliedSearch && (
              <button type="button" onClick={clearSearch} className="btn-secondary">
                Clear
              </button>
            )}
          </form>
        </div>
      </div>

      {/* Results meta */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        {!isLoading && data && (
          <p className="text-sm text-gray-500 mb-6">
            {appliedSearch
              ? <>{total} {total === 1 ? 'article' : 'articles'} matching <strong>"{appliedSearch}"</strong></>
              : <>{total} articles{totalPages > 1 ? ` · Page ${page} of ${totalPages}` : ''}</>
            }
          </p>
        )}
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        {isLoading ? (
          <LoadingSpinner />
        ) : data?.blogs?.length ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            <Pagination
              page={page}
              total={total}
              perPage={PER_PAGE}
              onPage={goToPage}
            />
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">📝</p>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {appliedSearch ? 'No results found' : 'No articles yet'}
            </h2>
            <p className="text-gray-500">
              {appliedSearch
                ? `No articles match "${appliedSearch}". Try a different search term.`
                : 'Travel guides are coming soon!'}
            </p>
            {appliedSearch && (
              <button onClick={clearSearch} className="btn-primary mt-4">Clear search</button>
            )}
          </div>
        )}
      </div>
    </>
  )
}
