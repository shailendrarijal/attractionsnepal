// TODO: add affiliate tracking params when approved

const PROVIDERS = [
  {
    name: 'World Nomads',
    url: 'https://www.worldnomads.com/travel-insurance/',
    // TODO: add affiliate tracking params when approved
  },
  {
    name: 'SafetyWing',
    url: 'https://safetywing.com/nomad-insurance/',
    // TODO: add affiliate tracking params when approved
  },
]

export default function TravelInsuranceCTA() {
  return (
    <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl shrink-0" aria-hidden="true">🛡️</span>
        <div>
          <h3 className="font-display font-bold text-gray-900 text-lg leading-tight">
            Travel Insurance — Don't Trek Without It
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Helicopter evacuation from high altitude can cost $10,000+. Make sure you're covered.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {PROVIDERS.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-5 py-3 transition-colors shadow-sm"
          >
            <span>{name}</span>
            <span className="text-amber-200">— Get a Quote →</span>
          </a>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-3 text-center">
        We may earn a commission if you purchase — at no extra cost to you.
      </p>
    </div>
  )
}
