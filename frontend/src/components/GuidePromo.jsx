const GUMROAD_URL = 'https://shailendra185.gumroad.com/l/jdvner'

const BULLETS = [
  'Top 10 lists: treks, temples, lakes & adventures',
  'Culture, festivals & etiquette guide',
  '100 essential Nepali phrases',
  'Visa, transport & practical travel info',
]

export default function GuidePromo({ variant = 'banner' }) {
  if (variant === 'inline') {
    return (
      <div className="my-10 rounded-2xl overflow-hidden border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 flex flex-col sm:flex-row gap-0">
        <div className="sm:w-36 shrink-0 bg-amber-100 flex items-center justify-center p-4">
          <img
            src="/cover_image.png"
            alt="Nepal Travel Guide cover"
            className="w-24 sm:w-full rounded-lg shadow-md object-cover"
          />
        </div>
        <div className="flex-1 p-5 flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">Free Bonus with Every Visit</p>
          <h3 className="font-display font-bold text-gray-900 text-lg leading-snug mb-2">
            The Complete Nepal Travel Guide PDF
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Everything you need to plan your Nepal trip — temples, treks, festivals, and local secrets — in one beautifully designed PDF.
          </p>
          <a
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 transition-colors shadow"
          >
            Get the Guide →
          </a>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-nepal-green/10 via-amber-50 to-orange-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden bg-white shadow-xl ring-1 ring-amber-100 flex flex-col lg:flex-row">
          {/* Cover image */}
          <div className="lg:w-72 shrink-0 bg-amber-900 flex items-center justify-center p-8 lg:p-10">
            <img
              src="/cover_image.png"
              alt="Nepal Travel Guide cover"
              className="rounded-xl shadow-2xl w-48 lg:w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider px-3 py-1 mb-4">
              📖 New Release
            </span>
            <h2 className="font-display text-3xl font-bold text-gray-900 leading-tight mb-3">
              The Complete Nepal<br className="hidden sm:block" /> Travel Guide
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              A beautifully designed PDF packed with everything you need to plan an unforgettable trip to Nepal — from Himalayan treks to ancient temples.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={GUMROAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold px-8 py-3.5 transition-colors shadow-lg text-base"
              >
                Get the Guide Now →
              </a>
              <span className="text-sm text-gray-500">Instant PDF download · No subscription</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
