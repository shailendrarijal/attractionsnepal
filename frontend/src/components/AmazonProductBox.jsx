import { useAmazonProducts } from '../hooks/useAmazonProducts'

// ── Presentational component ──────────────────────────────────────────────────
// Accepts a title string and products array: [{name, icon, note, url}]

export default function AmazonProductBox({ title = 'Recommended Gear', products = [] }) {
  if (!products?.length) return null

  return (
    <div className="my-8 rounded-2xl border border-orange-100 bg-orange-50 p-6">
      <div className="flex items-center justify-between mb-1">
        <h2 className="font-display font-bold text-lg text-gray-900">{title}</h2>
        <span className="text-xs text-gray-400 bg-white border border-gray-200 px-2 py-1 rounded-full shrink-0 ml-3">
          via Amazon
        </span>
      </div>
      <p className="text-xs text-gray-500 mb-4">
        Genuine recommendations — gear we'd pack for Nepal ourselves.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        {products.map(({ name, icon, note, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex flex-col gap-1 p-3 bg-white rounded-xl border border-orange-200 hover:border-orange-400 hover:shadow-sm transition-all group"
          >
            <span className="text-2xl">{icon}</span>
            <span className="text-sm font-semibold text-gray-800 group-hover:text-orange-700 transition-colors leading-snug">
              {name}
            </span>
            {note && <span className="text-xs text-gray-500 leading-snug">{note}</span>}
            <span className="mt-auto pt-2 text-xs font-semibold text-orange-600 group-hover:text-orange-800 transition-colors">
              Shop on Amazon →
            </span>
          </a>
        ))}
      </div>

      <p className="text-xs text-gray-400">
        As an Amazon Associate we earn from qualifying purchases. Prices and availability may vary.
      </p>
    </div>
  )
}

// ── Data-fetching wrapper ─────────────────────────────────────────────────────
// Use this in pages — pass context="TREKKING" | "WILDLIFE" | "GENERAL"
// Renders nothing while loading or if the group is not found / inactive

export function AmazonProductBoxLoader({ context, title }) {
  const { data, isError } = useAmazonProducts(context)
  if (!data || isError) return null
  return (
    <AmazonProductBox
      title={title ?? data.title}
      products={Array.isArray(data.products) ? data.products : []}
    />
  )
}
