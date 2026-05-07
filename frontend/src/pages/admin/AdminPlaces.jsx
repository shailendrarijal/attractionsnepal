import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { adminGetPlaces, adminDeletePlace } from '../../lib/api'

export default function AdminPlaces() {
  const qc = useQueryClient()
  const { data, isLoading } = useQuery({
    queryKey: ['admin-places'],
    queryFn: () => adminGetPlaces({ limit: 100 }),
  })

  const del = useMutation({
    mutationFn: adminDeletePlace,
    onSuccess: () => qc.invalidateQueries(['admin-places']),
  })

  function handleDelete(id, name) {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return
    del.mutate(id)
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold text-gray-900">Places</h1>
        <Link to="/admin/places/new" className="btn-primary">+ Add Place</Link>
      </div>

      {isLoading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Name</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Category</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">District</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data?.places?.map((place) => (
                <tr key={place.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{place.name}</td>
                  <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">
                    {place.category.replace(/_/g, ' ')}
                  </td>
                  <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{place.district}</td>
                  <td className="px-4 py-3">
                    <span className={`badge ${place.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {place.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 justify-end">
                      <Link
                        to={`/places/${place.slug}`}
                        target="_blank"
                        className="text-xs text-gray-500 hover:text-primary-700"
                      >
                        View
                      </Link>
                      <Link
                        to={`/admin/places/${place.id}/edit`}
                        className="text-xs font-medium text-primary-700 hover:underline"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(place.id, place.name)}
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
          {!data?.places?.length && (
            <p className="text-gray-500 text-center py-10">No places yet. <Link to="/admin/places/new" className="text-primary-700 underline">Add one →</Link></p>
          )}
        </div>
      )}
    </div>
  )
}
