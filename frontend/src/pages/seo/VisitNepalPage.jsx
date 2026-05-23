import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageSeo from '../../components/PageSeo'
import JsonLd from '../../components/JsonLd'
import GuidePromo from '../../components/GuidePromo'

const faqs = [
  {
    q: 'Do I need a visa to visit Nepal?',
    a: 'Most nationalities can get a tourist visa on arrival at Tribhuvan International Airport or land border crossings. A 15-day visa costs USD 30, 30-day USD 50, and 90-day USD 125. Citizens of India do not require a visa.',
  },
  {
    q: 'What is the currency in Nepal?',
    a: 'The Nepali Rupee (NPR). USD 1 ≈ NPR 133. ATMs are widely available in Kathmandu and Pokhara. Card acceptance is limited outside major cities so carry cash for treks and rural areas.',
  },
  {
    q: 'Is Nepal safe for tourists?',
    a: 'Nepal is generally very safe for tourists. Petty theft exists in busy tourist areas like Thamel — use standard precautions. Natural hazards (earthquakes, landslides during monsoon) are the main risk. Always get travel insurance that covers helicopter evacuation for trekking.',
  },
  {
    q: 'What language do people speak in Nepal?',
    a: 'Nepali is the official language. English is widely spoken in tourist areas, hotels, and trekking regions. In remote areas a few phrases of Nepali go a long way.',
  },
  {
    q: 'What are the must-see places in Nepal?',
    a: 'Kathmandu Valley (Pashupatinath, Boudhanath, Swayambhunath, the three durbar squares), Pokhara (gateway to Annapurna treks), Chitwan National Park (wildlife safari), and the Everest and Annapurna trekking regions.',
  },
]

const quickFacts = [
  { label: 'Capital', value: 'Kathmandu' },
  { label: 'Currency', value: 'Nepali Rupee (NPR)' },
  { label: 'Language', value: 'Nepali' },
  { label: 'Time Zone', value: 'UTC+5:45' },
  { label: 'Visa', value: 'On arrival for most nationalities' },
  { label: 'Dialling Code', value: '+977' },
]

const topThingsToDo = [
  { label: 'Explore Ancient Temples', slug: 'temple', desc: 'Discover centuries-old Hindu and Buddhist temples across the Kathmandu Valley and beyond.' },
  { label: 'Trek the Himalayas', slug: 'trek-route', desc: 'Walk the legendary trails to Everest Base Camp, Annapurna Circuit, and Langtang Valley.' },
  { label: 'Visit National Parks', slug: 'national-park', desc: 'Spot rhinos, tigers, and elephants on a wildlife safari in Chitwan or Bardia.' },
  { label: 'Discover Sacred Stupas', slug: 'stupa', desc: 'Circumambulate the world-famous Boudhanath stupa and other sacred Buddhist monuments.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Nepal Travel Guide 2025 — Everything You Need to Visit Nepal',
  description: 'Complete Nepal travel guide: visa requirements, best places to visit, trekking, culture, food, and practical tips for planning your Nepal trip.',
  url: 'https://attractionsnepal.com/visit-nepal',
  publisher: {
    '@type': 'Organization',
    name: 'AttractionsNepal',
    url: 'https://attractionsnepal.com',
  },
}

function FaqAccordion({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 overflow-hidden">
      {items.map((item, i) => (
        <div key={i} className="bg-white">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{item.q}</span>
            <span className="shrink-0 text-primary-700 text-xl leading-none">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function VisitNepalPage() {
  return (
    <>
      <PageSeo
        title="Nepal Travel Guide 2025 — Everything You Need to Visit Nepal"
        description="Complete Nepal travel guide: visa requirements, best places to visit, trekking, culture, food, and practical tips for planning your Nepal trip."
        canonicalPath="/visit-nepal"
        type="article"
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Complete Travel Guide</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Your Complete Guide to Visiting Nepal
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            From visa requirements and currency to must-see temples and the best treks in the Himalayas — everything you need to plan your Nepal adventure in 2025.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">

        {/* Quick facts */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Nepal at a Glance</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {quickFacts.map(({ label, value }) => (
              <div key={label} className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{label}</p>
                <p className="font-semibold text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top things to do */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Top Things to Do in Nepal</h2>
          <p className="text-gray-600 mb-6">
            Nepal packs an extraordinary variety of experiences into a small country — ancient heritage, Himalayan adventure, and vibrant wildlife all within reach.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {topThingsToDo.map(({ label, slug, desc }) => (
              <Link
                key={slug}
                to={`/category/${slug}`}
                className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6 hover:shadow-md hover:ring-primary-200 transition-all group"
              >
                <h3 className="font-semibold text-primary-800 group-hover:text-primary-700 text-lg mb-2">{label}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
                <span className="mt-3 inline-block text-xs font-semibold text-primary-700">Browse listings →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* About Nepal */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Why Visit Nepal?</h2>
          <div className="prose prose-base max-w-none text-gray-700">
            <p>
              Nepal is home to eight of the world's fourteen 8,000-metre peaks, including Mount Everest, the highest point on Earth. Yet the country offers far more than mountain scenery — its cities and valleys contain some of Asia's most remarkable religious and cultural heritage, with over 130 UNESCO-listed monuments in the Kathmandu Valley alone.
            </p>
            <p>
              For trekkers, the network of mountain trails is unrivalled anywhere in the world. For culture lovers, ancient cities like Bhaktapur and Patan preserve mediaeval architecture and living traditions largely unchanged for centuries. For wildlife enthusiasts, the lowland Terai region harbours one-horned rhinos, Bengal tigers, and Gangetic river dolphins.
            </p>
            <p>
              Nepal is also one of the most affordable travel destinations in Asia. Quality guesthouses, local food, and domestic transport cost a fraction of what travellers pay in neighbouring countries, making it accessible for all budgets.
            </p>
          </div>
        </section>

        {/* Best time box */}
        <section className="mb-14 rounded-2xl bg-primary-800 text-white p-8">
          <h2 className="font-display text-xl font-bold mb-3">Best Time to Visit Nepal</h2>
          <p className="text-white/80 mb-4">
            The two peak seasons are <strong className="text-white">October–November</strong> (clear post-monsoon skies, perfect trekking) and <strong className="text-white">March–April</strong> (rhododendrons in bloom, warm days). Both are excellent for sightseeing and trekking.
          </p>
          <Link
            to="/best-time-to-visit-nepal"
            className="inline-block bg-white text-primary-800 font-semibold rounded-full px-5 py-2.5 text-sm hover:bg-amber-50 transition-colors"
          >
            Full month-by-month guide →
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </section>

        {/* Guide promo */}
        <GuidePromo variant="inline" />
      </div>
    </>
  )
}
