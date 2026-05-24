import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { adminGetTips, adminApproveTip, adminDeleteTip } from '../../lib/api'

export default function AdminTips() {
  const qc = useQueryClient()
  const [filter, setFilter] = useState('pending') // 'pending' | 'all'

  const { data, isLoading } = useQuery({
    queryKey: ['admin-tips', filter],
    queryFn: () => adminGetTips({ filter }),
  })

  const approve = useMutation({
    mutationFn: adminApproveTip,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['admin-tips'] }),
  })

  const reject = useMutation({
    mutationFn: adminDeleteTip,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['admin-tips'] }),
  })

  function handleApprove(id) {
    approve.mutate(id)
  }

  function handleReject(id, preview) {
    if (!confirm(`Reject and delete this tip? "${preview}" — This cannot be undone.`)) return
    reject.mutate(id)
  }

  const tips = data?.tips ?? []

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold text-gray-900">
          Community Tips — Moderation Queue
        </h1>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'pending'
                ? 'bg-primary-700 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-primary-700 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
        </div>
      </div>

      {isLoading ? (
        <p className="text-gray-500">Loading...</p>
      ) : tips.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-12 text-center">
          <p className="text-2xl mb-2">🎉</p>
          <p className="text-gray-500">No pending tips</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Place</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Author</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Tip</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Date</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {tips.map((tip) => (
                <tr key={tip.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                    {tip.place ? (
                      <Link
                        to={`/places/${tip.place.slug}`}
                        target="_blank"
                        className="text-primary-700 hover:underline"
                      >
                        {tip.place.name}
                      </Link>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-600 hidden sm:table-cell whitespace-nowrap">
                    <span className="font-medium">{tip.authorName}</span>
                    {tip.authorCountry && (
                      <span className="text-gray-400 ml-1">({tip.authorCountry})</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-700 max-w-xs">
                    <span title={tip.content}>
                      {tip.content?.length > 100
                        ? tip.content.slice(0, 100) + '…'
                        : tip.content}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400 hidden md:table-cell whitespace-nowrap">
                    {tip.createdAt
                      ? new Date(tip.createdAt).toLocaleDateString()
                      : '—'}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 justify-end">
                      {tip.approved ? (
                        <span className="badge bg-green-100 text-green-700">Approved</span>
                      ) : (
                        <button
                          onClick={() => handleApprove(tip.id)}
                          disabled={approve.isPending}
                          className="text-xs font-medium text-green-700 hover:underline disabled:opacity-50"
                        >
                          Approve
                        </button>
                      )}
                      <button
                        onClick={() => handleReject(tip.id, tip.content?.slice(0, 40))}
                        disabled={reject.isPending}
                        className="text-xs font-medium text-red-600 hover:underline disabled:opacity-50"
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
