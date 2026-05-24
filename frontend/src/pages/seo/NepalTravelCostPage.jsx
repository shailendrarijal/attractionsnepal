import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageSeo from '../../components/PageSeo'
import JsonLd from '../../components/JsonLd'
import GuidePromo from '../../components/GuidePromo'

const faqs = [
  {
    q: 'Is Nepal cheap to travel?',
    a: 'Yes — Nepal is one of the most affordable destinations in Asia. Budget travellers can get by on $25–50/day including accommodation, food, and local transport. Even mid-range travel offering 3-star hotels and restaurant meals costs $60–120/day, which is excellent value for a Himalayan destination.',
  },
  {
    q: 'How much cash should I bring to Nepal?',
    a: 'Plan for $50–100/day depending on your travel style. ATMs are widely available in Kathmandu and Pokhara, and at main trekking hubs like Namche Bazaar and Lukla. For remote treks, withdraw plenty of cash before heading out as ATMs are scarce or unreliable above certain altitudes.',
  },
  {
    q: 'Do I need to tip in Nepal?',
    a: 'Tipping is not mandatory in Nepal but is genuinely appreciated. A rough guide: 10% at tourist restaurants, $5–10/day for trekking guides, $3–5/day for porters. For drivers and hotel staff, rounding up the bill or leaving a small amount is the norm.',
  },
  {
    q: 'Is Nepal trekking expensive?',
    a: 'Trekking permits cost $40–75 in total depending on the area. The main costs are your guide ($25–35/day) and teahouse accommodation ($5–20/night). Food on the trail costs $5–15 per meal. A 14-day Everest Base Camp trek budget is roughly $800–1,200 excluding flights.',
  },
  {
    q: 'What is the cheapest way to travel Nepal?',
    a: 'Take local buses over tourist buses, stay in guesthouses or teahouses, eat dal bhat at local restaurants (unlimited refills for $3–6), and plan your own itinerary rather than booking packaged tours. Travel during monsoon season (June–September) for 30–40% cheaper flights and accommodation.',
  },
]

const budgetTiers = [
  {
    tier: 'Budget',
    range: '$25–50 / day',
    colour: 'bg-green-50 border-green-200',
    headerColour: 'text-green-800',
    items: [
      'Guesthouses & hostels: $5–15/night',
      'Dal bhat at local restaurants: $3–6',
      'Local buses for transport',
      'Self-guided sightseeing',
      'Street food & bakery meals',
    ],
  },
  {
    tier: 'Mid-range',
    range: '$60–120 / day',
    colour: 'bg-blue-50 border-blue-200',
    headerColour: 'text-blue-800',
    items: [
      '3-star hotels: $40–80/night',
      'Tourist restaurants: $15–30/day',
      'Tourist buses + occasional taxis',
      'Guided city tours & day trips',
      'Entry fees to heritage sites',
    ],
  },
  {
    tier: 'Luxury',
    range: '$200+ / day',
    colour: 'bg-amber-50 border-amber-200',
    headerColour: 'text-amber-800',
    items: [
      "Boutique hotels (Dwarika's, Tiger Mountain Lodge): $150–500/night",
      'Fine dining & rooftop restaurants',
      'Private car & personal guide',
      'Helicopter excursions to Everest',
      'Luxury tented camps in Chitwan',
    ],
  },
]

const trekkingCosts = [
  { item: 'Annapurna Conservation Area Permit (ACAP)', cost: 'NPR 3,000 (~$23)' },
  { item: 'TIMS card', cost: 'NPR 2,000–4,000 (~$15–30)' },
  { item: 'Sagarmatha (Everest) National Park permit', cost: 'NPR 3,000 (~$23)' },
  { item: 'Langtang National Park permit', cost: 'NPR 3,000 (~$23)' },
  { item: 'Trekking guide', cost: '$25–35 / day' },
  { item: 'Porter', cost: '$15–25 / day' },
  { item: 'Teahouse accommodation', cost: '$5–20 / night (higher at altitude)' },
  { item: 'Teahouse meals', cost: '$5–15 / meal' },
]

const sampleCosts = [
  {
    trip: '7-day Kathmandu + Pokhara',
    budget: '$350',
    midrange: '$700',
    luxury: '$2,500+',
  },
  {
    trip: '14-day Everest Base Camp trek',
    budget: '$1,200',
    midrange: '$2,500',
    luxury: '$8,000+',
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
  headline: 'Nepal Travel Cost 2025 — Budget, Mid-Range & Luxury Breakdown',
  description: 'How much does Nepal cost? Complete daily budget breakdown for budget ($25–50), mid-range ($60–120), and luxury ($200+) travellers including trekking permit fees.',
  url: 'https://attractionsnepal.com/nepal-travel-cost',
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

export default function NepalTravelCostPage() {
  return (
    <>
      <PageSeo
        title="Nepal Travel Cost 2025 — Budget, Mid-Range & Luxury Breakdown"
        description="How much does Nepal cost? Complete daily budget breakdown for budget ($25–50), mid-range ($60–120), and luxury ($200+) travellers including trekking permit fees."
        canonicalPath="/nepal-travel-cost"
        type="article"
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Nepal Travel Planning</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">
            How Much Does Nepal Cost in 2025?
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Nepal is one of Asia's best value destinations. From budget backpacking to luxury lodges, here's a complete breakdown of what to expect to spend each day.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">

        {/* Budget tier cards */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Daily Budget by Travel Style</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {budgetTiers.map(({ tier, range, colour, headerColour, items }) => (
              <div key={tier} className={`rounded-2xl border p-6 ${colour}`}>
                <div className="mb-3">
                  <h3 className={`font-display font-bold text-xl ${headerColour}`}>{tier}</h3>
                  <p className="text-sm font-semibold text-gray-600 mt-0.5">{range}</p>
                </div>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gray-400 shrink-0 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Trekking costs */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Trekking Costs & Permit Fees</h2>
          <p className="text-gray-600 mb-6">
            Trekking is the main additional expense for most visitors. Permits are mandatory for all major trekking routes and must be obtained before you set out.
          </p>
          <div className="overflow-hidden rounded-2xl ring-1 ring-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Item</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {trekkingCosts.map(({ item, cost }) => (
                  <tr key={item}>
                    <td className="px-5 py-3 text-gray-700">{item}</td>
                    <td className="px-5 py-3 font-semibold text-primary-700">{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Best ways to save money */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Best Ways to Save Money in Nepal</h2>
          <div className="space-y-4">
            {[
              { title: 'Eat where locals eat', desc: 'Dal bhat — the traditional rice, lentil, and vegetable meal — costs $3–6 at local restaurants, comes with unlimited refills, and is genuinely the most nutritious meal you can eat in Nepal.' },
              { title: 'Take local buses', desc: 'Local buses cost $5–8 from Kathmandu to Pokhara versus $15–30 for tourist buses. They take a bit longer and are more crowded but get you there for a fraction of the price.' },
              { title: 'Book domestic flights early', desc: 'Flights between Kathmandu and Pokhara or Lukla (for Everest) can be $80–180+. Book 4–6 weeks in advance for the best fares, especially for peak season travel.' },
              { title: 'Hire through a registered agency', desc: 'Booking a guide or porter through a registered trekking agency ensures fair wages and proper insurance, and is often no more expensive than arranging independently.' },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-5">
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sample total trip costs */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Sample Total Trip Costs</h2>
          <div className="overflow-hidden rounded-2xl ring-1 ring-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Trip</th>
                  <th className="text-left px-5 py-3 font-semibold text-green-700">Budget</th>
                  <th className="text-left px-5 py-3 font-semibold text-blue-700">Mid-range</th>
                  <th className="text-left px-5 py-3 font-semibold text-amber-700">Luxury</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {sampleCosts.map(({ trip, budget, midrange, luxury }) => (
                  <tr key={trip}>
                    <td className="px-5 py-3 text-gray-700 font-medium">{trip}</td>
                    <td className="px-5 py-3 text-green-700 font-bold">{budget}</td>
                    <td className="px-5 py-3 text-blue-700 font-bold">{midrange}</td>
                    <td className="px-5 py-3 text-amber-700 font-bold">{luxury}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-500">Costs are approximate and exclude international flights. Trekking costs include guide and permit fees.</p>
        </section>

        {/* Itineraries CTA */}
        <section className="mb-14 rounded-2xl bg-primary-800 text-white p-8">
          <h2 className="font-display text-xl font-bold mb-3">Ready to Plan Your Nepal Trip?</h2>
          <p className="text-white/80 mb-4">
            Browse our ready-made itineraries for Kathmandu, Pokhara, Everest Base Camp trek, and more — with day-by-day breakdowns to help you budget accurately.
          </p>
          <Link
            to="/itineraries"
            className="inline-block bg-white text-primary-800 font-semibold rounded-full px-5 py-2.5 text-sm hover:bg-amber-50 transition-colors"
          >
            Browse Nepal Itineraries →
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
