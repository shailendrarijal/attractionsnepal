import { Link } from 'react-router-dom'
import PageSeo from '../components/PageSeo'

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
    body: 'Every place listing is researched from primary sources — local knowledge, official tourism boards, and on-the-ground accounts. When we're unsure, we say so.',
  },
  {
    icon: '🏔️',
    title: 'Beyond the highlights',
    body: 'Nepal is far more than Everest and Kathmandu. We put the same care into documenting a hidden waterfall in Bajura as we do Pashupatinath Temple.',
  },
  {
    icon: '🌱',
    title: 'Responsible travel',
    body: 'We encourage visiting with respect for local communities, ecosystems, and cultural heritage. Practical tips on entry fees, permit requirements, and sustainable practices are included wherever relevant.',
  },
  {
    icon: '🔄',
    title: 'Always improving',
    body: 'Nepal changes — trails get rerouted, entry fees update, new places open. We actively update listings and welcome corrections from readers who've been there recently.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageSeo
        title="About Us"
        description="AttractionsNepal is a free, independent travel guide to Nepal's 330+ destinations — from Everest Base Camp to hidden village temples. Learn about our mission and how we work."
        canonicalPath="/about"
      />

      {/* Hero */}
      <section className="hero-gradient text-white py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-display text-4xl font-bold">About AttractionsNepal</h1>
          <p className="mt-3 text-green-100 text-lg">
            A free, independent guide to everything worth exploring in Nepal.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Our mission</h2>
            <p>
              Nepal is one of the most extraordinary countries on earth — eight of the world's
              ten tallest mountains, living goddess traditions that stretch back centuries, jungle
              wildlife reserves bordering the Terai, and thousands of temples, monasteries, and
              cultural villages that most travellers never hear about.
            </p>
            <p className="mt-4">
              AttractionsNepal exists to change that. We're building the most complete,
              practical, and honest travel guide to Nepal — completely free, with no
              paywalls or sponsored rankings. Whether you have three days in Kathmandu or
              three months to trek the remote west, our goal is to help you plan the trip
              you actually want.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-green-50 border-y border-green-100">
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

      {/* Who we are */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Who we are</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              AttractionsNepal was founded by Shailendra Rijal, a Nepal enthusiast based in
              Australia. Frustrated by travel guides that covered the same ten places and
              left the rest of the country's extraordinary destinations undocumented, he
              began building a comprehensive, structured database of Nepal's places — from
              the busiest Kathmandu squares to the remotest highland meadows in Humla and
              Dolpa.
            </p>
            <p className="mt-4">
              The site is an independent project, not affiliated with any government tourism
              body, hotel chain, or travel agency. Recommendations are based on research and
              merit, not commercial arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-8 text-center">
            How we work
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map(v => (
              <div key={v.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">What we cover</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Each place listing on AttractionsNepal includes:
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside text-gray-700">
              <li>Practical details — how to get there, entry fees, opening hours</li>
              <li>Best season and trekking information where relevant</li>
              <li>Curated dining options near the attraction</li>
              <li>Recommended tours and experiences from vetted providers</li>
              <li>Interactive map and GPS coordinates</li>
              <li>SEO-optimised descriptions written for clarity, not keyword stuffing</li>
            </ul>
            <p className="mt-4">
              Beyond individual places, we publish long-form travel guides covering
              visa requirements, travel costs, packing lists, the best time to visit,
              and point-to-point journey guides between major cities.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliate disclosure */}
      <section className="py-10 bg-amber-50 border-y border-amber-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-semibold text-amber-900 mb-2">Affiliate disclosure</h2>
          <p className="text-sm text-amber-800 leading-relaxed">
            Some links on this site — particularly to tours, experiences, and hotels —
            are affiliate links. If you book through them we may earn a small commission
            at no extra cost to you. This helps keep the site free. Affiliate relationships
            never influence which places we recommend or how we describe them.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">
            Got a question or spotted an error?
          </h2>
          <p className="text-gray-600 mb-6">
            We actively welcome corrections, local knowledge, and suggestions for places
            we should add. Nepal is vast — we couldn't have done this without community help.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
