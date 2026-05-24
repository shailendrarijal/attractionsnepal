import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { adminGetItineraries, adminDeleteItinerary } from '../../lib/api'

export default function AdminItineraries() {
  const qc = useQueryClient()
  const { data, isLoading } = useQuery({
    queryKey: ['admin-itineraries'],
    queryFn: () => adminGetItineraries({ limit: 100 }),
  })

  const del = useMutation({
    mutationFn: adminDeleteItinerary,
    onSuccess: () => qc.invalidateQueries(['admin-itineraries']),
  })

  function handleDelete(id, title) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return
    del.mutate(id)
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold text-gray-900">Itineraries</h1>
        <Link to="/admin/itineraries/new" className="btn-primary">+ New Itinerary</Link>
      </div>

      {isLoading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Title</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Days</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Activities</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data?.itineraries?.map((itinerary) => (
                <tr key={itinerary.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{itinerary.title}</td>
                  <td className="px-4 py-3 text-gray-500">{itinerary.days} days</td>
                  <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">
                    {itinerary.activities?.length
                      ? itinerary.activities.map((a) => a.toLowerCase().replace(/_/g, ' ')).join(', ')
                      : '—'}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`badge ${itinerary.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {itinerary.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 justify-end">
                      <Link
                        to={`/itineraries/${itinerary.slug}`}
                        target="_blank"
                        className="text-xs text-gray-500 hover:text-primary-700"
                      >
                        View
                      </Link>
                      <Link
                        to={`/admin/itineraries/${itinerary.id}/edit`}
                        className="text-xs font-medium text-primary-700 hover:underline"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(itinerary.id, itinerary.title)}
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
          {!data?.itineraries?.length && (
            <p className="text-gray-500 text-center py-10">
              No itineraries yet.{' '}
              <Link to="/admin/itineraries/new" className="text-primary-700 underline">Create one →</Link>
            </p>
          )}
        </div>
      )}
    </div>
  )
}
