import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageSeo from '../../components/PageSeo'
import JsonLd from '../../components/JsonLd'
import GuidePromo from '../../components/GuidePromo'

const faqs = [
  {
    q: 'Do I need a visa for Nepal?',
    a: 'Most nationalities require a visa for Nepal. Citizens of India do not need a visa at all. Citizens of Maldives and some other SAARC nations receive free visas. Check with the Nepal Embassy for your specific nationality.',
  },
  {
    q: 'Can I get a Nepal visa on arrival?',
    a: 'Yes. Most nationalities can get a visa on arrival at Tribhuvan International Airport in Kathmandu and at main land border crossings including Birgunj, Belhiya (Bhairahawa), Kakarvitta, Mahendranagar, Kodari/Tatopani, and Rasuwagadhi. Chinese nationals cannot get a visa on arrival and must apply in advance through the embassy.',
  },
  {
    q: 'How long does the Nepal visa application take at the airport?',
    a: 'The visa on arrival process typically takes 30–60 minutes depending on the queue. Having the exact USD fee in cash and a passport photo ready speeds things up. Peak season (October–November) queues can be longer.',
  },
  {
    q: 'Can I extend my Nepal visa?',
    a: 'Yes. Visa extensions are processed at the Department of Immigration in Kalikasthan, Kathmandu (near Dillibazar). You can extend your visa up to a maximum stay of 150 days per calendar year. A USD 3/day overstay fine applies if you overstay without extension.',
  },
  {
    q: 'What currency do I need to pay for the Nepal visa?',
    a: 'USD cash. Exact change is strongly recommended as change may not always be available. Credit and debit cards are not accepted for the visa fee at the airport. ATMs are available near the arrival hall if you need cash.',
  },
  {
    q: 'Is Nepal e-visa available?',
    a: 'Yes. You can apply for a Nepal e-visa before your trip at nepalimmigration.gov.np. Print your confirmation and bring it with you — the visa sticker is collected on arrival at the airport. E-visa saves time in the queue.',
  },
]

const quickFacts = [
  { label: 'Visa on arrival', value: 'Yes (most nations)' },
  { label: 'Indians', value: 'Free (no visa needed)' },
  { label: '15 days', value: 'USD 30' },
  { label: '30 days', value: 'USD 50' },
  { label: '90 days', value: 'USD 125' },
  { label: 'E-visa', value: 'Available online' },
]

const visaFees = [
  { duration: '15 days', fee: '$30', notes: 'Single or multiple entry' },
  { duration: '30 days', fee: '$50', notes: 'Single or multiple entry' },
  { duration: '90 days', fee: '$125', notes: 'Single or multiple entry' },
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
  headline: 'Nepal Visa Guide 2025 — Requirements, Fees & How to Apply',
  description: 'Complete Nepal visa guide: who needs a visa, fees (USD 30/50/125), how to get a visa on arrival or e-visa, documents required, and extension tips.',
  url: 'https://attractionsnepal.com/nepal-visa-guide',
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

export default function NepalVisaGuidePage() {
  return (
    <>
      <PageSeo
        title="Nepal Visa Guide 2025 — Requirements, Fees & How to Apply"
        description="Complete Nepal visa guide: who needs a visa, fees (USD 30/50/125), how to get a visa on arrival or e-visa, documents required, and extension tips."
        canonicalPath="/nepal-visa-guide"
        type="article"
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Nepal Travel Planning</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Nepal Visa Guide 2025
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Everything you need to know about Nepal visa requirements, fees, and how to apply — whether you're getting a visa on arrival, an e-visa, or applying at an embassy.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">

        {/* Quick facts */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Nepal Visa at a Glance</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {quickFacts.map(({ label, value }) => (
              <div key={label} className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{label}</p>
                <p className="font-semibold text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who needs a visa */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Who Needs a Visa?</h2>
          <div className="prose prose-base max-w-none text-gray-700">
            <p>
              Most nationalities require a tourist visa to enter Nepal. The good news is that for most travellers, getting a visa is straightforward — either on arrival at the airport or through the online e-visa system before you depart.
            </p>
            <p>
              <strong>No visa required:</strong> Citizens of India do not need a visa to enter Nepal. Citizens of Maldives and several other SAARC nations receive free visas on arrival.
            </p>
            <p>
              <strong>Visa on arrival available:</strong> Most other nationalities can obtain a tourist visa on arrival at Tribhuvan International Airport or at designated land border crossings. Bring passport-size photos and USD cash.
            </p>
            <p>
              <strong>Embassy visa required:</strong> Chinese nationals cannot obtain a visa on arrival and must apply in advance through a Nepal Embassy or consulate. A few other nationalities may also be ineligible — check with your nearest Nepal Embassy before travelling.
            </p>
          </div>
        </section>

        {/* Types of visa */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Types of Nepal Visa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6">
              <h3 className="font-display font-bold text-lg text-primary-800 mb-2">Visa on Arrival</h3>
              <p className="text-sm text-gray-600 mb-3">
                Available at Tribhuvan International Airport (Kathmandu) and land border crossings at Birgunj, Belhiya (Bhairahawa), Kakarvitta, Mahendranagar, Kodari/Tatopani, and Rasuwagadhi.
              </p>
              <p className="text-xs text-gray-500">Bring passport photos and USD cash (exact amount).</p>
            </div>
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6">
              <h3 className="font-display font-bold text-lg text-primary-800 mb-2">Nepal E-Visa</h3>
              <p className="text-sm text-gray-600 mb-3">
                Apply online before travel at <strong>nepalimmigration.gov.np</strong>. Print your confirmation and bring it with you. Collect the visa sticker on arrival at the airport. Saves time in the queue.
              </p>
              <p className="text-xs text-gray-500">Recommended if you want to avoid queuing at the airport.</p>
            </div>
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6">
              <h3 className="font-display font-bold text-lg text-primary-800 mb-2">Embassy Visa</h3>
              <p className="text-sm text-gray-600 mb-3">
                Required for Chinese nationals and other nationalities ineligible for visa on arrival. Apply at your nearest Nepal Embassy or consulate well in advance of travel.
              </p>
              <p className="text-xs text-gray-500">Allow several working days for processing.</p>
            </div>
          </div>
        </section>

        {/* Fees table */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Visa Fees & Duration</h2>
          <div className="overflow-hidden rounded-2xl ring-1 ring-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Duration</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Fee (USD)</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {visaFees.map(({ duration, fee, notes }) => (
                  <tr key={duration}>
                    <td className="px-5 py-3 font-semibold text-gray-900">{duration}</td>
                    <td className="px-5 py-3 text-primary-700 font-bold">{fee}</td>
                    <td className="px-5 py-3 text-gray-600">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-500">All fees in USD cash. Multiple entry is available for all durations.</p>
        </section>

        {/* Documents required */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Documents Required</h2>
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6">
            <ul className="space-y-3">
              {[
                'Valid passport with at least 6 months remaining validity',
                'Two recent passport-size photos',
                'Completed arrival card (provided on the aircraft or at the border)',
                'Visa fee in USD cash — exact change strongly recommended',
                'E-visa applicants: printed confirmation of your approved e-visa application',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-primary-700 mt-0.5 shrink-0 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Extending your visa */}
        <section className="mb-14 rounded-2xl bg-amber-50 border border-amber-200 p-8">
          <h2 className="font-display text-xl font-bold text-amber-900 mb-3">Extending Your Visa</h2>
          <p className="text-amber-800 mb-3">
            Visa extensions are processed at the <strong>Department of Immigration</strong>, Kalikasthan, Kathmandu (near Dillibazar). The office is open Sunday–Friday.
          </p>
          <ul className="space-y-2">
            {[
              'Maximum stay: 150 days per calendar year',
              'Overstay fine: USD 3 per day — keep track of your visa expiry date',
              'Bring your passport, passport photo, and extension fee',
              'Extensions can be arranged on the same day in most cases',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-amber-800">
                <span className="shrink-0 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Pro tips */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Pro Tips</h2>
          <div className="prose prose-base max-w-none text-gray-700">
            <p>
              <strong>Bring USD cash.</strong> The visa fee must be paid in USD. ATMs are available near the arrival hall at Kathmandu airport if you need cash, but it's faster to bring the right amount from home. Exact change is recommended.
            </p>
            <p>
              <strong>E-visa saves queuing time.</strong> Both the visa on arrival and e-visa are straightforward. The e-visa simply means you have a shorter queue at the designated e-visa counter on arrival. The process is essentially the same for both.
            </p>
            <p>
              <strong>Keep your entry receipt.</strong> You'll receive a receipt when you pay for your visa. Keep this safe — it may be requested at the departure gate when you leave Nepal.
            </p>
            <p>
              <strong>Photos matter.</strong> Bring 2 passport-size photos even if applying for e-visa. Some counters request a physical photo regardless.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </section>

        {/* CTA */}
        <section className="mb-14 text-center">
          <p className="text-gray-600 mb-4">Ready to plan your Nepal trip? Start with the best attractions and itineraries.</p>
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
