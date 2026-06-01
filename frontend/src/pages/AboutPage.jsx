import { Link } from 'react-router-dom'
import PageSeo from '../components/PageSeo'
import JsonLd from '../components/JsonLd'

const STATS = [
  { value: '330+', label: 'Places documented' },
  { value: '32',   label: 'Trekking routes' },
  { value: '30+',  label: 'Travel itineraries' },
  { value: '77',   label: 'Districts covered' },
]

const VALUES = [
  {
    icon: '🗺️',
    title: 'Accuracy first',
    body: 'Every listing is researched from primary sources — local knowledge, official tourism boards, and on-the-ground accounts. When we\'re unsure, we say so.',
  },
  {
    icon: '🏔️',
    title: 'Beyond the highlights',
    body: 'Nepal is far more than Everest and Kathmandu. We put the same care into a hidden waterfall in Bajura as we do Pashupatinath Temple.',
  },
  {
    icon: '🌱',
    title: 'Responsible travel',
    body: 'We encourage visiting with respect for local communities, ecosystems, and cultural heritage — with practical tips on permits, fees, and sustainable practices.',
  },
  {
    icon: '🔄',
    title: 'Always improving',
    body: 'Nepal changes — trails get rerouted, fees update, new places open. We actively update listings and welcome corrections from readers who\'ve been there recently.',
  },
]

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AttractionsNepal',
  url: 'https://attractionsnepal.com',
  logo: 'https://attractionsnepal.com/an_logo.png',
  description: 'A free, independent travel guide to Nepal\'s 330+ destinations.',
  foundingDate: '2023',
  founder: {
    '@type': 'Person',
    name: 'Shailendra Rijal',
    jobTitle: 'Founder',
  },
  sameAs: [
    'https://www.pinterest.com/attractionsnepal',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: 'https://attractionsnepal.com/contact',
  },
}

export default function AboutPage() {
  return (
    <>
      <PageSeo
        title="About Us — AttractionsNepal"
        description="AttractionsNepal is a free, independent travel guide to Nepal's 330+ destinations — from Everest Base Camp to hidden village temples. Built by Shailendra Rijal."
        canonicalPath="/about"
      />
      <JsonLd data={orgJsonLd} />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">
            About AttractionsNepal
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A free, independent guide to everything worth exploring in Nepal — built by a Nepali who wanted the world to see beyond the obvious.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-green-50 border-b border-green-100">
        <div className="mx-auto max-w-4xl px-4">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {STATS.map(s => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-bold text-green-700">{s.value}</dt>
                <dd className="mt-1 text-sm text-gray-600">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Avatar / initials fallback */}
            <div className="shrink-0">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-green-600 to-emerald-800 flex items-center justify-center shadow-lg">
                <span className="text-white font-display font-bold text-3xl">SR</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 mb-1">Founder</p>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-1">Shailendra Rijal</h2>
              <p className="text-sm text-gray-500 mb-4">Nepal · Based in Australia</p>
              <div className="prose prose-base max-w-none text-gray-700 space-y-3">
                <p>
                  I grew up in Nepal surrounded by temples, mountains, and stories that most travellers never get to hear. When I moved to Australia, I kept getting asked the same question: "I want to visit Nepal — where should I go beyond Everest?" And every time, I struggled to point people to a single resource that captured the full picture.
                </p>
                <p>
                  Every existing guide covered the same ten places. The hidden waterfall that takes three hours to reach. The medieval village that time forgot. The viewpoint that locals know but no one writes about. None of it was documented in any way a traveller could actually use.
                </p>
                <p>
                  So I built AttractionsNepal — a structured, honest, free guide to all of Nepal. Not just the famous sites, but the 77 districts, the forgotten temples, the remote trekking routes, the local food, the stories behind the places. Everything I'd want to tell a friend who was finally getting to visit my country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-5">Our mission</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Nepal is one of the most extraordinary countries on Earth — eight of the world's ten tallest mountains, living goddess traditions stretching back centuries, jungle wildlife reserves bordering the Terai, and thousands of temples, monasteries, and cultural villages that most travellers never hear about.
            </p>
            <p className="mt-4">
              AttractionsNepal exists to change that. We're building the most complete, practical, and honest travel guide to Nepal — completely free, with no paywalls or sponsored rankings. Whether you have three days in Kathmandu or three months to trek the remote west, our goal is to help you plan the trip you actually want.
            </p>
            <p className="mt-4">
              The site is entirely independent — not affiliated with any government tourism body, hotel chain, or travel agency. Recommendations are based on research and merit, not commercial arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-8 text-center">How we work</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map(v => (
              <div key={v.title} className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="py-14 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">What we cover</h2>
          <p className="text-gray-600 mb-5 leading-relaxed">
            Each place listing includes practical details, local tips, maps, photos, and curated recommendations — written for travellers, not algorithms.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: '📍', text: '330+ places across all 77 districts' },
              { icon: '🥾', text: '32 trekking routes with difficulty ratings' },
              { icon: '🗺️', text: '30+ curated multi-day itineraries' },
              { icon: '📝', text: 'Travel blogs and cultural stories' },
              { icon: '🕌', text: 'Temples, monasteries, and sacred sites' },
              { icon: '🏞️', text: 'National parks, waterfalls, and lakes' },
              { icon: '🧳', text: 'Visa, packing, cost & permit guides' },
              { icon: '🌦️', text: 'Best time to visit for every region' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100">
                <span className="text-xl">{icon}</span>
                <span className="text-sm text-gray-700">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate disclosure */}
      <section className="py-10 bg-amber-50 border-y border-amber-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-semibold text-amber-900 mb-2">💛 Affiliate disclosure</h2>
          <p className="text-sm text-amber-800 leading-relaxed">
            Some links on this site — to tours, hotels, and gear — are affiliate links. If you book or buy through them we may earn a small commission at no extra cost to you. This is what keeps the site free. Affiliate relationships never influence which places we recommend or how we describe them.
          </p>
        </div>
      </section>

      {/* Connect */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Get involved</h2>
            <p className="text-gray-600">
              Nepal is vast — we couldn't document all of it without community help. Spotted an error? Know a place we've missed? We genuinely want to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/contact"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-green-50 border border-green-100 hover:border-green-300 hover:shadow-sm transition-all text-center"
            >
              <span className="text-3xl">✉️</span>
              <span className="font-semibold text-gray-900">Send us a message</span>
              <span className="text-xs text-gray-500">Corrections, suggestions, or just to say hello</span>
            </Link>
            <a
              href="https://www.pinterest.com/attractionsnepal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-red-50 border border-red-100 hover:border-red-300 hover:shadow-sm transition-all text-center"
            >
              <span className="text-3xl">📌</span>
              <span className="font-semibold text-gray-900">Follow on Pinterest</span>
              <span className="text-xs text-gray-500">Travel inspiration and destination guides</span>
            </a>
            <Link
              to="/itineraries"
              className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-blue-50 border border-blue-100 hover:border-blue-300 hover:shadow-sm transition-all text-center"
            >
              <span className="text-3xl">🗺️</span>
              <span className="font-semibold text-gray-900">Plan your trip</span>
              <span className="text-xs text-gray-500">Browse our Nepal itineraries</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
