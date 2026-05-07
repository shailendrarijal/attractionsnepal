import { Link } from 'react-router-dom'

const PLACEHOLDER = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80'

export default function BlogCard({ blog }) {
  const date = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
    : null

  return (
    <Link
      to={`/blog/${blog.slug}`}
      className="card group flex flex-col hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={blog.heroImage ?? PLACEHOLDER}
          alt={blog.title}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-1 p-4">
        {blog.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2">
            {blog.tags.slice(0, 3).map(({ tag }) => (
              <span key={tag.slug} className="badge bg-primary-50 text-primary-700">
                {tag.name}
              </span>
            ))}
          </div>
        )}

        <h3 className="font-semibold text-gray-900 text-base leading-snug group-hover:text-primary-700 transition-colors line-clamp-2 flex-1">
          {blog.title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{blog.excerpt}</p>

        {date && (
          <p className="mt-3 text-xs text-gray-400">{date}</p>
        )}
      </div>
    </Link>
  )
}
