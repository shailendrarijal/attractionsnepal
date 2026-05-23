import { Link } from 'react-router-dom'

const PLACEHOLDER = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80'

export default function BlogCard({ blog }) {
  const date = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
    : null

  return (
    <Link
      to={`/blog/${blog.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
    >
      {/* Background image */}
      <img
        src={blog.heroImage ?? PLACEHOLDER}
        alt={blog.title}
        loading="lazy"
        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      {/* Tags — top left */}
      {blog.tags?.length > 0 && (
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {blog.tags.slice(0, 2).map(({ tag }) => (
            <span key={tag.slug} className="badge bg-primary-700/80 text-white text-xs">
              {tag.name}
            </span>
          ))}
        </div>
      )}

      {/* Title + date — bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-display font-bold text-white text-base leading-snug line-clamp-2 group-hover:text-green-200 transition-colors">
          {blog.title}
        </h3>
        {date && (
          <p className="mt-1.5 text-xs text-gray-400">{date}</p>
        )}
      </div>
    </Link>
  )
}
