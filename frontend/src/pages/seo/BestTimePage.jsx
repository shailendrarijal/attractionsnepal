import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageSeo from '../../components/PageSeo'
import JsonLd from '../../components/JsonLd'
import GuidePromo from '../../components/GuidePromo'

const faqs = [
  {
    q: 'What is the best month to visit Nepal?',
    a: 'October is widely considered the best single month — skies are crystal clear after the monsoon, temperatures are comfortable, Dashain festival fills the country with celebration, and trekking conditions are perfect. November runs a close second with similar weather and fewer crowds.',
  },
  {
    q: 'When is Nepal cheapest to visit?',
    a: 'The monsoon season (June to September) offers the lowest prices — flights and hotels can be 30–40% cheaper, trails are quiet, and the landscapes are lush green. The trade-off is daily afternoon rain, cloud cover on mountain views, and leeches on forest trails.',
  },
  {
    q: 'Can I trek in Nepal during winter?',
    a: 'Yes — lower altitude treks like the Annapurna foothills, Chitwan safari, and Kathmandu valley sightseeing are excellent in winter (December–February). High passes on the Everest and Annapurna circuit can be snowbound and very cold. Everest Base Camp is doable but requires preparation for -20°C nights.',
  },
  {
    q: "When are Nepal's major festivals?",
    a: 'The biggest festivals are Dashain (October, 15 days) and Tihar (November, 5 days) — the equivalent of Christmas and New Year. Holi (March) and Indra Jatra (September) in Kathmandu are spectacular for visitors. Buddha Jayanti (May full moon) at Lumbini and Boudhanath is deeply moving.',
  },
]

const seasons = [
  {
    name: 'Spring',
    months: 'March – May',
    colour: 'bg-pink-50 border-pink-200',
    headerColour: 'text-pink-800',
    weather: 'Warming temperatures, occasional afternoon clouds at altitude. Rhododendrons bloom at 2,000–4,000m creating spectacular pink and red forest displays.',
    bestFor: 'Trekking (Annapurna, Everest), Holi festival, birdwatching, wildlife safaris before the heat peaks.',
    avoidIf: 'You dislike some haze and occasional afternoon showers on the higher trails in late May.',
  },
  {
    name: 'Monsoon',
    months: 'June – September',
    colour: 'bg-green-50 border-green-200',
    headerColour: 'text-green-800',
    weather: 'Daily rainfall, especially afternoons. Landscapes are lush and intensely green. Mountain views often obscured by cloud. Landslides possible on mountain roads.',
    bestFor: 'Budget travel (30–40% cheaper), rain-shadow treks (Mustang, Dolpo), Terai wildlife safaris early season, photography of green valleys.',
    avoidIf: 'You\'re planning high mountain treks, want clear mountain panoramas, or are sensitive to humidity and leeches on forest trails.',
  },
  {
    name: 'Autumn',
    months: 'October – November',
    colour: 'bg-amber-50 border-amber-200',
    headerColour: 'text-amber-800',
    weather: 'The best weather window: crystal clear skies, cool stable temperatures, excellent visibility to the high peaks. Peak trekking season with well-stocked teahouses.',
    bestFor: 'Trekking (all routes at their best), Dashain and Tihar festivals, photography, paragliding in Pokhara, Kathmandu sightseeing.',
    avoidIf: 'Solitude on the trail — October is the busiest month and popular teahouses fill quickly without advance booking.',
  },
  {
    name: 'Winter',
    months: 'December – February',
    colour: 'bg-blue-50 border-blue-200',
    headerColour: 'text-blue-800',
    weather: 'Cold and dry at altitude — high passes can be snowbound. Kathmandu is mild (5–15°C). Low-altitude areas like Chitwan are pleasant and sunny.',
    bestFor: 'Budget travel with few crowds, Chitwan wildlife safaris, lower-altitude treks (Poon Hill), Kathmandu cultural visits, photography with snow on peaks.',
    avoidIf: 'You want to do high-altitude treks — Thorong La and similar high passes may be closed or dangerous due to snow and ice.',
  },
]

const monthHighlights = [
  {
    month: 'October',
    badge: 'bg-amber-500',
    highlights: ['Peak trekking season — all routes open and at their best', 'Dashain festival: Nepal\'s biggest national celebration', 'Crystal-clear mountain views after monsoon rains wash the air', 'Warm days (~22°C in Kathmandu), cool nights'],
  },
  {
    month: 'March',
    badge: 'bg-pink-500',
    highlights: ['Rhododendron forests in full bloom on mountain trails', 'Holi festival of colours in Kathmandu and Pokhara', 'Comfortable trekking temperatures before summer heat', 'Good wildlife visibility in Chitwan before the grass is cut'],
  },
  {
    month: 'December',
    badge: 'bg-blue-500',
    highlights: ['Clear, dry skies with excellent mountain views', 'Quiet trails — few other trekkers on lower-altitude routes', 'Kathmandu Durbar Squares look beautiful in winter light', 'Excellent birding in Koshi Tappu Wildlife Reserve'],
  },
  {
    month: 'June',
    badge: 'bg-green-600',
    highlights: ['Lowest prices of the year: 30–40% cheaper flights and hotels', 'Lush, intensely green Himalayan landscapes', 'Mustang and Dolpo rain-shadow treks at their best', 'Fewer tourists — more authentic local experiences'],
  },
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
  headline: 'Best Time to Visit Nepal 2025 — Month by Month Guide',
  description: 'When is the best time to visit Nepal? Compare all seasons and months for trekking, wildlife, festivals, and sightseeing to plan the perfect trip.',
  url: 'https://attractionsnepal.com/best-time-to-visit-nepal',
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

export default function BestTimePage() {
  return (
    <>
      <PageSeo
        title="Best Time to Visit Nepal 2025 — Month by Month Guide"
        description="When is the best time to visit Nepal? Compare all seasons and months for trekking, wildlife, festivals, and sightseeing to plan the perfect trip."
        canonicalPath="/best-time-to-visit-nepal"
        type="article"
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Nepal Travel Planning</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">
            When is the Best Time to Visit Nepal?
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Nepal has four distinct seasons, each with its own appeal. Whether you're trekking, attending a festival, or watching wildlife, here's how to pick the perfect time for your trip.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">

        {/* Season grid */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Nepal's Four Seasons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {seasons.map(({ name, months, colour, headerColour, weather, bestFor, avoidIf }) => (
              <div key={name} className={`rounded-2xl border p-6 ${colour}`}>
                <div className="mb-3">
                  <h3 className={`font-display font-bold text-xl ${headerColour}`}>{name}</h3>
                  <p className="text-sm text-gray-500 font-medium">{months}</p>
                </div>
                <p className="text-sm text-gray-700 mb-3">{weather}</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-0.5">Best for</p>
                    <p className="text-sm text-gray-700">{bestFor}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-0.5">Avoid if</p>
                    <p className="text-sm text-gray-700">{avoidIf}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Month highlights */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Key Months at a Glance</h2>
          <p className="text-gray-600 mb-6">
            Four months stand out as particularly good for specific travel styles.
          </p>
          <div className="space-y-4">
            {monthHighlights.map(({ month, badge, highlights }) => (
              <div key={month} className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-5 flex gap-4">
                <div className={`shrink-0 w-14 h-14 rounded-xl ${badge} flex items-center justify-center text-white font-bold text-sm text-center leading-tight`}>
                  {month}
                </div>
                <ul className="flex-1 space-y-1.5">
                  {highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary-700 mt-0.5 shrink-0">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Quick recommendation */}
        <section className="mb-14 rounded-2xl bg-primary-800 text-white p-8">
          <h2 className="font-display text-xl font-bold mb-3">Our Recommendation</h2>
          <p className="text-white/80 mb-2">
            <strong className="text-white">First-time visitors:</strong> book for October–November. You'll get perfect trekking weather, clear mountain views, and the chance to experience Dashain, Nepal's biggest festival.
          </p>
          <p className="text-white/80">
            <strong className="text-white">Budget travellers:</strong> June–July offers the biggest savings and a dramatically different, lush Nepal — just pack a rain jacket and embrace the monsoon.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </section>

        {/* CTA */}
        <section className="mb-14 text-center">
          <p className="text-gray-600 mb-4">Ready to start planning? Browse Nepal's top attractions by category.</p>
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 rounded-full bg-primary-700 hover:bg-primary-800 text-white font-semibold px-7 py-3 transition-colors shadow"
          >
            Explore All Attractions →
          </Link>
        </section>

        {/* Guide promo */}
        <GuidePromo variant="inline" />
      </div>
    </>
  )
}
