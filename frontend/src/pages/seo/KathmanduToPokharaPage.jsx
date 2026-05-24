import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageSeo from '../../components/PageSeo'
import JsonLd from '../../components/JsonLd'
import GuidePromo from '../../components/GuidePromo'

const faqs = [
  {
    q: 'How long is Kathmandu to Pokhara by bus?',
    a: 'Tourist buses take 6–8 hours. Local buses from Gongabu (New Bus Park) take 8–9 hours. The route follows the Prithvi Highway — a mostly paved but winding mountain road. Allow extra time for occasional roadwork delays.',
  },
  {
    q: 'Is there a direct flight from Kathmandu to Pokhara?',
    a: 'Yes. Multiple airlines operate direct daily flights: Buddha Air, Yeti Airlines, and Shree Airlines among others. The flight takes just 25 minutes. On clear days, the mountain views from the left (A-seat) window are spectacular.',
  },
  {
    q: 'What is the road from Kathmandu to Pokhara like?',
    a: "The Prithvi Highway is mostly paved and in reasonable condition. It's a winding mountain road with river valleys and terraced hillsides. Expect some bumpy sections and occasional roadwork. Scenery is excellent throughout.",
  },
  {
    q: 'Can I do a day trip from Kathmandu to Pokhara?',
    a: "Not recommended. At 200km and 6–8 hours by road or 25 minutes by air, Pokhara is too far for a day trip. Pokhara itself deserves a minimum of 2–3 nights: Phewa Lake, the World Peace Pagoda, Sarangkot sunrise, and it's the gateway for Annapurna trekking.",
  },
  {
    q: 'When should I book Kathmandu to Pokhara tickets?',
    a: 'Tourist bus tickets: book 1–2 days in advance during peak season (October–November, March–April). Flights: book 2–4 weeks in advance for the best prices. Flight prices rise sharply in peak season and last-minute seats can be expensive or unavailable.',
  },
]

const transportOptions = [
  {
    mode: 'Tourist Bus',
    price: '$15–30',
    duration: '6–8 hours',
    comfort: '★★★☆☆',
    bestFor: 'Most travellers, scenic journey',
    colour: 'bg-blue-50 border-blue-200',
    headerColour: 'text-blue-800',
  },
  {
    mode: 'Local Bus',
    price: '$5–8',
    duration: '8–9 hours',
    comfort: '★★☆☆☆',
    bestFor: 'Budget travellers, flexible time',
    colour: 'bg-green-50 border-green-200',
    headerColour: 'text-green-800',
  },
  {
    mode: 'Flight',
    price: '$100–180',
    duration: '25 minutes',
    comfort: '★★★★★',
    bestFor: 'Time-poor travellers',
    colour: 'bg-amber-50 border-amber-200',
    headerColour: 'text-amber-800',
  },
  {
    mode: 'Private Car',
    price: '$80–150',
    duration: '6–7 hours',
    comfort: '★★★★☆',
    bestFor: 'Groups, families, flexible stops',
    colour: 'bg-purple-50 border-purple-200',
    headerColour: 'text-purple-800',
  },
]

const scenicStops = [
  {
    name: 'Manakamana',
    time: '~1 hour stop',
    desc: 'A hilltop Hindu temple reached by a scenic cable car over the Trishuli Gorge. Dedicated to the goddess Bhagwati and hugely popular with Nepali pilgrims.',
  },
  {
    name: 'Bandipur',
    time: '~2 hours stop (recommended)',
    desc: 'A beautifully preserved medieval Newari hilltop town with no motorised vehicles on the main street. Excellent mountain views, traditional architecture, and quiet guesthouses.',
  },
  {
    name: 'Abu Khaireni Junction',
    time: 'Brief stop / viewpoint',
    desc: "The point on the Prithvi Highway where the Annapurna massif first becomes dramatically visible. On clear days, the snow peaks ahead signal that you're approaching Pokhara.",
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
  headline: 'Kathmandu to Pokhara 2025 — All Transport Options Compared',
  description: 'How to get from Kathmandu to Pokhara: tourist bus, local bus, flight, and private car compared by price, time, and comfort.',
  url: 'https://attractionsnepal.com/kathmandu-to-pokhara',
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

export default function KathmanduToPokharaPage() {
  return (
    <>
      <PageSeo
        title="Kathmandu to Pokhara 2025 — All Transport Options Compared"
        description="How to get from Kathmandu to Pokhara: tourist bus, local bus, flight, and private car compared by price, time, and comfort."
        canonicalPath="/kathmandu-to-pokhara"
        type="article"
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Nepal Transport Guide</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Kathmandu to Pokhara: All Options Compared
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Tourist bus, local bus, flight, or private car — here's everything you need to choose the best way to travel from Kathmandu to Pokhara in 2025.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">

        {/* Options comparison */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Options at a Glance</h2>
          <div className="overflow-hidden rounded-2xl ring-1 ring-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Mode</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Price</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Duration</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Comfort</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {transportOptions.map(({ mode, price, duration, comfort, bestFor }) => (
                  <tr key={mode}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{mode}</td>
                    <td className="px-4 py-3 text-primary-700 font-semibold">{price}</td>
                    <td className="px-4 py-3 text-gray-700">{duration}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{comfort}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed option cards */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Each Option in Detail</h2>
          <div className="space-y-5">
            {/* Tourist Bus */}
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-bold text-lg text-blue-800">Tourist Bus</h3>
                <span className="text-sm font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">$15–30</span>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                The most popular choice for travellers. Comfortable air-conditioned coaches depart from Kantipath or designated tourist bus parks in Kathmandu, usually at 7:00–8:00am.
              </p>
              <ul className="space-y-1">
                {[
                  'Duration: 6–8 hours depending on stops and traffic',
                  'Companies: Greenline, Prithvi Yatayat, and various tourist deluxe services',
                  'Book through your guesthouse or a tourist agency — book 1–2 days ahead in peak season',
                  'Road is mostly paved but winding — bring motion sickness tablets if needed',
                  'Stops for lunch at roadside restaurants along the way',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-primary-700 shrink-0 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Local Bus */}
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-bold text-lg text-green-800">Local Bus</h3>
                <span className="text-sm font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">$5–8</span>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Departs from Gongabu (New Bus Park), north of Kathmandu. Crowded, often standing room, but a genuinely authentic experience and excellent value.
              </p>
              <ul className="space-y-1">
                {[
                  'Duration: 8–9 hours (more stops, slower pace)',
                  'Departs frequently throughout the morning — no advance booking needed',
                  'Best for budget travellers with flexible schedules',
                  'Luggage goes on the roof rack — keep valuables with you',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-primary-700 shrink-0 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Flight */}
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-bold text-lg text-amber-800">Flight</h3>
                <span className="text-sm font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full">$100–180</span>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Just 25 minutes in the air. On clear days, the views of the Annapurna and Manaslu ranges are breathtaking — some say the flight alone is worth the cost.
              </p>
              <ul className="space-y-1">
                {[
                  'Airlines: Buddha Air, Yeti Airlines, Shree Airlines — all operate multiple daily flights',
                  'Pokhara Regional International Airport recently expanded and modernised',
                  "Sit on the left side (A seat) for the best Himalaya views — you'll see Annapurna, Dhaulagiri, and Machhapuchhre",
                  'Mountain flights can be delayed or cancelled in poor weather — build flexibility into your plans',
                  'Book 2–4 weeks in advance for best prices, especially in peak season',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-primary-700 shrink-0 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Private Car */}
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-bold text-lg text-purple-800">Private Car / Taxi</h3>
                <span className="text-sm font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full">$80–150</span>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Full flexibility to stop wherever you want along the way. Ideal for families, groups, or anyone wanting to visit Manakamana or Bandipur en route.
              </p>
              <ul className="space-y-1">
                {[
                  'Duration: 6–7 hours direct, longer with stops',
                  'Book through your hotel or a trusted agency for vetted drivers',
                  'Price is per vehicle — good value for groups of 3–4',
                  'Driver usually knows the road well and can suggest stop options',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-primary-700 shrink-0 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Scenic stops */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Scenic Stops Along the Way</h2>
          <p className="text-gray-600 mb-6">
            If you have time, these stops transform the journey from a transit into a highlight of your Nepal trip.
          </p>
          <div className="space-y-4">
            {scenicStops.map(({ name, time, desc }) => (
              <div key={name} className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-5 flex gap-4">
                <div className="shrink-0 w-20 text-center">
                  <p className="font-bold text-gray-900 text-sm">{name}</p>
                  <p className="text-xs text-gray-500 mt-1">{time}</p>
                </div>
                <p className="flex-1 text-sm text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Which should you choose */}
        <section className="mb-14 rounded-2xl bg-primary-800 text-white p-8">
          <h2 className="font-display text-xl font-bold mb-4">Which Option Should You Choose?</h2>
          <div className="space-y-2">
            {[
              { label: 'Time-poor', rec: 'Fly. 25 minutes and spectacular views.' },
              { label: 'Best value + comfort', rec: 'Tourist bus. Comfortable, scenic, and social.' },
              { label: 'Tightest budget', rec: 'Local bus from Gongabu. Slow but cheap.' },
              { label: 'Group or family', rec: 'Private car. Flexible stops and door-to-door.' },
              { label: 'Want to make stops', rec: 'Private car or tourist bus — ask your bus company about Manakamana/Bandipur options.' },
            ].map(({ label, rec }) => (
              <div key={label} className="flex gap-3 text-sm">
                <span className="text-amber-400 font-semibold shrink-0">{label}:</span>
                <span className="text-white/80">{rec}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </section>

        {/* CTA */}
        <section className="mb-14 text-center">
          <p className="text-gray-600 mb-4">Planning your Pokhara visit? Browse the best things to do in and around Pokhara.</p>
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
