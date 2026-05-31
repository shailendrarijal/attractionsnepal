import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageSeo from '../../components/PageSeo'
import JsonLd from '../../components/JsonLd'
import GuidePromo from '../../components/GuidePromo'

const faqs = [
  {
    q: 'Do I need a guide to trek in Nepal?',
    a: 'Since April 2023, solo trekking is no longer permitted in Nepal\'s national parks and conservation areas — which covers almost all popular trekking routes including Everest, Annapurna, and Langtang. A licensed guide is mandatory. The regulation was introduced following the deaths of several solo trekkers. Guides cost $25–35 per day and most experienced trekkers consider them worth the money for safety, local knowledge, and support.',
  },
  {
    q: 'Where do I get a TIMS card?',
    a: 'The TIMS (Trekkers\' Information Management System) card is available from: (1) Nepal Tourism Board office in Kathmandu (Pradarshani Marg, near Bhrikuti Mandap) — open Sun–Fri 9am–5pm. (2) TIMS counters at Pokhara Tourism Council office (for Annapurna-region treks). (3) Your trekking agency — they can obtain it on your behalf. Cost: NPR 2,000 for individual trekkers, NPR 1,000 when booked through an agency.',
  },
  {
    q: 'How much do Nepal trekking permits cost?',
    a: 'Permit costs vary by region: TIMS card: NPR 2,000. Sagarmatha (Everest) NP: NPR 3,000. ACAP (Annapurna): NPR 3,000. MCAP (Manaslu): NPR 3,000. Langtang NP: NPR 3,000. Upper Mustang restricted area: $500 (10 days). Upper Dolpo restricted area: $500 (10 days). Manaslu restricted area: $70 (Sept–Nov), $50 (other months). All fees are per person.',
  },
  {
    q: 'Can I get trekking permits on arrival in Nepal?',
    a: 'Yes — most permits can be arranged after arriving in Nepal. The Nepal Tourism Board office in Kathmandu issues TIMS cards and national park permits. Sagarmatha NP permits can also be obtained at Monjo (on the trail to EBC). However, getting permits in Kathmandu is strongly recommended to avoid delays at checkpoints and to ensure your guide has everything in order before you start.',
  },
  {
    q: 'What happens if I trek without a permit?',
    a: 'Checkpoints along all major trekking routes check permits thoroughly. If caught without a valid permit, you face fines and possible deportation. Teahouse owners are also required to record all guests — trekking without proper documentation is increasingly difficult. The practical and legal consequences are significant enough that no reputable guide will trek without proper permits.',
  },
]

const permits = [
  {
    name: 'TIMS Card',
    area: 'All trekking routes',
    cost: 'NPR 2,000 (individual) / NPR 1,000 (agency)',
    where: 'Nepal Tourism Board, Kathmandu or Pokhara Tourism Council',
    notes: 'Required for virtually all trekking in Nepal. Get this first.',
    colour: 'bg-blue-50 border-blue-100',
  },
  {
    name: 'Sagarmatha National Park',
    area: 'Everest Base Camp, Gokyo, Three Passes',
    cost: 'NPR 3,000',
    where: 'Nepal Tourism Board in Kathmandu or Monjo checkpoint',
    notes: 'Required for EBC and all treks in the Khumbu region.',
    colour: 'bg-emerald-50 border-emerald-100',
  },
  {
    name: 'ACAP (Annapurna)',
    area: 'Annapurna Circuit, ABC, Poon Hill, Mardi Himal',
    cost: 'NPR 3,000',
    where: 'Nepal Tourism Board (Kathmandu) or ACAP office (Pokhara)',
    notes: 'Covers the entire Annapurna Conservation Area.',
    colour: 'bg-emerald-50 border-emerald-100',
  },
  {
    name: 'Langtang National Park',
    area: 'Langtang Valley, Gosaikunda, Helambu',
    cost: 'NPR 3,000',
    where: 'Nepal Tourism Board, Kathmandu',
    notes: 'Also covers Gosaikunda and Helambu treks.',
    colour: 'bg-emerald-50 border-emerald-100',
  },
  {
    name: 'MCAP (Manaslu)',
    area: 'Manaslu Circuit',
    cost: 'NPR 3,000',
    where: 'Nepal Tourism Board, Kathmandu',
    notes: 'Also requires restricted area permit — see below.',
    colour: 'bg-amber-50 border-amber-100',
  },
  {
    name: 'Upper Mustang Restricted Area',
    area: 'Lo Manthang and the Forbidden Kingdom',
    cost: '$500 for 10 days ($50/day after)',
    where: 'Nepal Tourism Board, Kathmandu only',
    notes: 'Requires a licensed guide. One of the most expensive permits — but Upper Mustang is extraordinary.',
    colour: 'bg-red-50 border-red-100',
  },
  {
    name: 'Upper Dolpo Restricted Area',
    area: 'Inner Dolpo, Shey Phoksundo Lake',
    cost: '$500 for 10 days ($50/day after)',
    where: 'Nepal Tourism Board, Kathmandu only',
    notes: 'Remote and expensive — for experienced trekkers only.',
    colour: 'bg-red-50 border-red-100',
  },
  {
    name: 'Manaslu Restricted Area',
    area: 'Manaslu Circuit (inner section)',
    cost: '$70/week (Sept–Nov), $50/week (other months)',
    where: 'Nepal Tourism Board, Kathmandu only',
    notes: 'Combined with MCAP. A licensed guide is mandatory.',
    colour: 'bg-red-50 border-red-100',
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
  headline: 'Nepal Trekking Permits 2025 — Complete Guide (TIMS, Costs & Where to Get Them)',
  description: 'Complete guide to Nepal trekking permits: TIMS card, national park permits, restricted area permits, costs and where to get them in Kathmandu.',
  url: 'https://attractionsnepal.com/nepal-trekking-permits',
  publisher: { '@type': 'Organization', name: 'AttractionsNepal', url: 'https://attractionsnepal.com' },
}

function FaqAccordion({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 overflow-hidden">
      {items.map((item, i) => (
        <div key={i} className="bg-white">
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors">
            <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{item.q}</span>
            <span className="shrink-0 text-primary-700 text-xl leading-none">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && <div className="px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed">{item.a}</div>}
        </div>
      ))}
    </div>
  )
}

export default function TrekkingPermitsPage() {
  return (
    <>
      <PageSeo
        title="Nepal Trekking Permits 2025 — TIMS Card, Costs & Where to Get Them"
        description="Complete guide to Nepal trekking permits: TIMS card, Sagarmatha, ACAP, Langtang, Upper Mustang and restricted area permits — costs and where to buy."
        canonicalPath="/nepal-trekking-permits"
        type="article"
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      <section className="hero-gradient text-white py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Nepal Trekking Guide</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">Nepal Trekking Permits</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Every trekking route in Nepal requires permits. Here's exactly which ones you need, what they cost, and where to get them — updated for 2025.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">

        {/* Guide requirement */}
        <section className="mb-10">
          <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6">
            <h2 className="font-display font-bold text-lg text-amber-900 mb-2">⚠️ Guide Requirement (2023)</h2>
            <p className="text-sm text-amber-800 leading-relaxed">
              Since April 2023, solo trekking is no longer permitted in Nepal's national parks and conservation areas. A licensed guide is now legally required for virtually all major trekking routes — Everest, Annapurna, Langtang, Manaslu, and all restricted areas. Your guide will carry the permits and handle checkpoints. Most reputable guide agencies arrange all permits as part of their service.
            </p>
          </div>
        </section>

        {/* Permit cards */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">All Nepal Trekking Permits</h2>
          <p className="text-gray-600 mb-5">Colour-coded by type: <span className="text-blue-700 font-medium">Blue = universal</span>, <span className="text-emerald-700 font-medium">Green = national park/conservation</span>, <span className="text-red-700 font-medium">Red = restricted area</span></p>
          <div className="space-y-4">
            {permits.map(({ name, area, cost, where, notes, colour }) => (
              <div key={name} className={`rounded-2xl border p-5 ${colour}`}>
                <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                  <h3 className="font-display font-bold text-gray-900">{name}</h3>
                  <span className="text-sm font-bold text-gray-900 bg-white px-3 py-0.5 rounded-full border border-gray-200 shrink-0">{cost}</span>
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Covers: {area}</p>
                <p className="text-sm text-gray-700 mb-1">📍 Where: {where}</p>
                <p className="text-sm text-gray-600 italic">{notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Where to get */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Where to Get Permits in Kathmandu</h2>
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6">
            <div className="space-y-4">
              {[
                {
                  name: 'Nepal Tourism Board (NTB)',
                  address: 'Pradarshani Marg, Bhrikuti Mandap, Kathmandu',
                  hours: 'Sunday–Friday, 9am–5pm (closed Saturday and public holidays)',
                  issues: 'TIMS cards, all national park permits, and most restricted area permits',
                  note: 'The main government office for all trekking permits. Bring 2 passport photos and your passport.',
                },
                {
                  name: 'TIMS Counter — Pokhara Tourism Council',
                  address: 'Damside, Pokhara Lakeside',
                  hours: 'Sunday–Friday, 9am–5pm',
                  issues: 'TIMS cards and ACAP permits for Annapurna-region treks starting from Pokhara',
                  note: 'Convenient for trekkers who fly directly to Pokhara.',
                },
              ].map(({ name, address, hours, issues, note }) => (
                <div key={name} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
                  <p className="text-sm text-gray-600">📍 {address}</p>
                  <p className="text-sm text-gray-600">🕐 {hours}</p>
                  <p className="text-sm text-gray-600">📋 Issues: {issues}</p>
                  <p className="text-xs text-gray-500 mt-1 italic">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to bring */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">What to Bring to Get Permits</h2>
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6">
            <ul className="space-y-2">
              {[
                'Passport (original — officials will check it)',
                '2 passport-size photos (colour, white background)',
                'Cash in Nepali Rupees (NPR) — most offices don\'t accept cards',
                'Your trekking itinerary (approximate dates and route)',
                'If using an agency: they handle all of this for you',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-primary-700 font-bold shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </section>

        <section className="mb-14 p-6 rounded-2xl bg-green-50 border border-green-100">
          <h3 className="font-bold text-gray-900 mb-3">📚 Related Guides</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/nepal-trekking-guide"   className="btn-secondary text-sm">Nepal Trekking Guide →</Link>
            <Link to="/everest-base-camp-trek" className="btn-secondary text-sm">EBC Trek Guide →</Link>
            <Link to="/annapurna-circuit-trek" className="btn-secondary text-sm">Annapurna Circuit →</Link>
            <Link to="/nepal-visa-guide"       className="btn-secondary text-sm">Nepal Visa Guide →</Link>
            <Link to="/nepal-travel-cost"      className="btn-secondary text-sm">Nepal Travel Cost →</Link>
          </div>
        </section>

        <GuidePromo variant="inline" />
      </div>
    </>
  )
}
