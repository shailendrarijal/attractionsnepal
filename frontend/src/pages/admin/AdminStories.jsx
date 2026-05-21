import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { adminGetStories, adminDeleteStory } from '../../lib/api'

const CATEGORY_LABELS = {
  MYTHOLOGY:  'Mythology',
  FESTIVAL:   'Festivals',
  TRADITION:  'Traditions',
  SCRIPTURE:  'Scripture',
  DEITY:      'Deities',
  PILGRIMAGE: 'Pilgrimage',
  RITUAL:     'Rituals',
}

export default function AdminStories() {
  const qc = useQueryClient()
  const { data, isLoading } = useQuery({
    queryKey: ['admin-stories'],
    queryFn: () => adminGetStories({ limit: 100 }),
  })

  const del = useMutation({
    mutationFn: adminDeleteStory,
    onSuccess: () => qc.invalidateQueries(['admin-stories']),
  })

  function handleDelete(id, title) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return
    del.mutate(id)
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold text-gray-900">Stories</h1>
        <Link to="/admin/stories/new" className="btn-primary">+ New Story</Link>
      </div>

      {isLoading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Title</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Category</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Date</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data?.stories?.map((story) => (
                <tr key={story.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{story.title}</td>
                  <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">
                    {CATEGORY_LABELS[story.category] ?? story.category}
                  </td>
                  <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">
                    {story.publishedAt
                      ? new Date(story.publishedAt).toLocaleDateString()
                      : '—'}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`badge ${story.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {story.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 justify-end">
                      <Link
                        to={`/stories/${story.slug}`}
                        target="_blank"
                        className="text-xs text-gray-500 hover:text-primary-700"
                      >
                        View
                      </Link>
                      <Link
                        to={`/admin/stories/${story.id}/edit`}
                        className="text-xs font-medium text-primary-700 hover:underline"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(story.id, story.title)}
                        className="text-xs font-medium text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!data?.stories?.length && (
            <p className="text-gray-500 text-center py-10">
              No stories yet.{' '}
              <Link to="/admin/stories/new" className="text-primary-700 underline">Write one →</Link>
            </p>
          )}
        </div>
      )}
    </div>
  )
}
