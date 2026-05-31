import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageSeo from '../../components/PageSeo'
import JsonLd from '../../components/JsonLd'
import GuidePromo from '../../components/GuidePromo'
import { AmazonProductBoxLoader } from '../../components/AmazonProductBox'

const faqs = [
  {
    q: 'How hard is the Everest Base Camp trek?',
    a: 'EBC is a challenging but non-technical trek. You need good general fitness — the ability to walk 6–8 hours per day for 12–14 consecutive days carrying a day pack. The biggest challenge is altitude, not terrain. Many otherwise fit people struggle above 4,000m regardless of their fitness level. Train for 3–4 months beforehand: long walks, stairs, weekend hikes with a pack.',
  },
  {
    q: 'How much does the Everest Base Camp trek cost?',
    a: 'Budget $1,200–2,000 for the trek itself (excluding flights to Nepal). This covers: Lukla flights ($400–500 return), permits (Sagarmatha NP permit NPR 3,000 + TIMS card NPR 2,000), teahouse accommodation ($5–25/night), food ($30–50/day on the trail), guide ($25–35/day), and porter ($20–25/day). Doing it without a guide saves money but is now legally restricted in national park areas.',
  },
  {
    q: 'Do I need a guide for EBC?',
    a: 'Since April 2023, solo trekking is no longer permitted in Nepal\'s national parks and conservation areas. For EBC, which passes through Sagarmatha National Park, you are legally required to trek with a licensed guide. Guides cost $25–35 per day. They provide safety, local knowledge, and support — most experienced trekkers consider them worth every dollar.',
  },
  {
    q: 'What permits do I need for Everest Base Camp?',
    a: 'Two permits are required: (1) Sagarmatha National Park Entry Permit: NPR 3,000 (obtainable at the Nepal Tourism Board in Kathmandu or at the park entrance in Monjo). (2) TIMS (Trekkers\' Information Management System) card: NPR 2,000 for individual trekkers (get this in Kathmandu). Your guide agency will usually sort these for you.',
  },
  {
    q: 'What is the best time for the Everest Base Camp trek?',
    a: 'October–November is the best time — clear skies, stable weather, and ideal temperatures. March–May (spring) is the second-best window — rhododendrons bloom and visibility is excellent. December–February is cold and windy but doable at lower elevations. Monsoon (June–September) makes the trek very difficult — trails are slippery, leeches are active below treeline, and views are obscured.',
  },
  {
    q: 'How do I get to Lukla?',
    a: 'Almost all EBC trekkers fly from Kathmandu to Tenzing-Hillary Airport in Lukla — one of the world\'s most dramatic airport approaches. Flights are ~40 minutes and cost $180–250 one way. Book well in advance for October and April. Flights are frequently delayed or cancelled due to weather — build buffer days into your itinerary. A small number of trekkers choose the longer overland route via Jiri (adds 5–7 days each way).',
  },
]

const itinerary = [
  { day: '1–2', place: 'Kathmandu', note: 'Permits, gear check, fly to Lukla (2,860m)', elevation: '2,860m' },
  { day: '3',   place: 'Lukla → Phakding', note: '8km, 3–4 hours, descend along Dudh Koshi river', elevation: '2,610m' },
  { day: '4',   place: 'Phakding → Namche Bazaar', note: '11km, 5–6 hours, biggest climb of the trek, cross Hillary Suspension Bridge', elevation: '3,440m' },
  { day: '5',   place: 'Namche Acclimatisation Day', note: 'Rest day — hike to Everest View Hotel for first Everest view', elevation: '3,440m' },
  { day: '6',   place: 'Namche → Tengboche', note: '10km, 5–6 hours, pass through Kyangjuma, Tengboche Monastery', elevation: '3,860m' },
  { day: '7',   place: 'Tengboche → Dingboche', note: '12km, 5–6 hours, Imja Khola valley, panoramic mountain views', elevation: '4,410m' },
  { day: '8',   place: 'Dingboche Acclimatisation', note: 'Hike to Nagarjun Hill for Makalu, Lhotse, Island Peak views', elevation: '4,410m' },
  { day: '9',   place: 'Dingboche → Lobuche', note: '8km, 4–5 hours, cross Thukla Pass memorial to fallen climbers', elevation: '4,940m' },
  { day: '10',  place: 'Lobuche → Gorakshep → EBC', note: 'Reach Everest Base Camp (5,364m) — the moment you\'ve been working towards', elevation: '5,364m' },
  { day: '11',  place: 'Kala Patthar → Pheriche', note: 'Pre-dawn hike to Kala Patthar (5,545m) for the best Everest view, then descend fast', elevation: '4,240m' },
  { day: '12–13', place: 'Descent to Lukla', note: 'Long but satisfying descent, following the same route down', elevation: '2,860m' },
  { day: '14',  place: 'Fly back to Kathmandu', note: 'Weather permitting — always keep a buffer day', elevation: '' },
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
  headline: 'Everest Base Camp Trek — Complete Guide 2025',
  description: 'Complete guide to the Everest Base Camp trek: route, itinerary, cost, permits, difficulty and what to expect.',
  url: 'https://attractionsnepal.com/everest-base-camp-trek',
  publisher: { '@type': 'Organization', name: 'AttractionsNepal', url: 'https://attractionsnepal.com' },
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
            <div className="px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function EverestBaseCampPage() {
  return (
    <>
      <PageSeo
        title="Everest Base Camp Trek — Complete Guide 2025 (Route, Cost, Permits)"
        description="Everything you need to know about the Everest Base Camp trek: 14-day itinerary, permits, costs, best time, difficulty, and how to prepare."
        canonicalPath="/everest-base-camp-trek"
        type="article"
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Nepal Trekking Guide</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Everest Base Camp Trek
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            The world's most iconic trek. Stand at 5,364m at the foot of the world's highest mountain. Here's everything you need to plan it.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
            <span>📏 130km round trip</span>
            <span>·</span>
            <span>📅 12–16 days</span>
            <span>·</span>
            <span>🏔️ Max 5,545m (Kala Patthar)</span>
            <span>·</span>
            <span>💪 Challenging</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">

        {/* Quick facts */}
        <section className="mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Trek duration', value: '12–16 days' },
              { label: 'Max elevation', value: '5,545m (Kala Patthar)' },
              { label: 'Best season', value: 'Oct–Nov, Mar–May' },
              { label: 'Estimated cost', value: '$1,200–2,000' },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl bg-blue-50 p-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{label}</p>
                <p className="mt-1 font-semibold text-gray-900 text-sm">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Trek Highlights</h2>
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6">
            <ul className="space-y-2">
              {[
                'Standing at Everest Base Camp (5,364m) — the starting point of all Everest summit attempts',
                'Sunrise from Kala Patthar (5,545m) — the classic Everest photograph viewpoint',
                'Tengboche Monastery — the highest monastery in the world, with Everest as a backdrop',
                'Namche Bazaar — the Sherpa capital, a thriving mountain town with bakeries and gear shops',
                'Hillary Suspension Bridge — the iconic swaying bridge at 3,000m above the Dudh Koshi gorge',
                'Sherpa culture — staying in teahouses run by Sherpa families, learning their history',
                'Views of eight 8,000m peaks including Lhotse, Makalu, Cho Oyu, and Ama Dablam',
              ].map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Itinerary */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Standard Itinerary (14 days)</h2>
          <p className="text-gray-600 mb-5">This is the classic EBC route. Experienced guides may adjust pacing based on your acclimatisation.</p>
          <div className="overflow-hidden rounded-2xl ring-1 ring-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 w-16">Day</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Section</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Notes</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700">Altitude</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {itinerary.map(({ day, place, note, elevation }) => (
                  <tr key={day} className={elevation === '5,364m' ? 'bg-amber-50' : ''}>
                    <td className="px-4 py-3 font-semibold text-primary-700">{day}</td>
                    <td className="px-4 py-3 font-semibold text-gray-900">{place}</td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{note}</td>
                    <td className="px-4 py-3 text-right text-gray-600 font-medium">{elevation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Altitude sickness */}
        <section className="mb-14 rounded-2xl bg-red-50 border border-red-200 p-6">
          <h2 className="font-display text-xl font-bold text-red-900 mb-3">⚠️ Altitude Sickness — Take This Seriously</h2>
          <p className="text-sm text-red-800 leading-relaxed mb-3">
            Acute Mountain Sickness (AMS) affects a significant proportion of EBC trekkers. Symptoms include headache, nausea, dizziness, fatigue, and loss of appetite. Severe AMS (HACE/HAPE) can be fatal.
          </p>
          <ul className="space-y-2 text-sm text-red-800">
            <li className="flex items-start gap-2"><span className="shrink-0 font-bold">•</span> Never ascend if you have symptoms. "Climb high, sleep low" is the rule.</li>
            <li className="flex items-start gap-2"><span className="shrink-0 font-bold">•</span> The two acclimatisation days (Namche and Dingboche) are non-negotiable — do not skip them.</li>
            <li className="flex items-start gap-2"><span className="shrink-0 font-bold">•</span> Consult your doctor about Diamox (acetazolamide) before departure.</li>
            <li className="flex items-start gap-2"><span className="shrink-0 font-bold">•</span> Buy travel insurance that includes emergency helicopter evacuation — costs can exceed $10,000 without it.</li>
            <li className="flex items-start gap-2"><span className="shrink-0 font-bold">•</span> If in doubt, descend. Altitude sickness resolves quickly at lower elevations.</li>
          </ul>
        </section>

        <AmazonProductBoxLoader context="TREKKING" title="Essential Gear for EBC Trek" />

        {/* Cost breakdown */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Cost Breakdown</h2>
          <div className="overflow-hidden rounded-2xl ring-1 ring-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Item</th>
                  <th className="text-right px-5 py-3 font-semibold text-gray-700">Approx. Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {[
                  ['Flights Kathmandu–Lukla (return)', '$400–500'],
                  ['Sagarmatha National Park permit', 'NPR 3,000 (~$22)'],
                  ['TIMS card', 'NPR 2,000 (~$15)'],
                  ['Licensed guide (12 days)', '$300–420'],
                  ['Porter (optional, 12 days)', '$240–300'],
                  ['Teahouse accommodation (12 nights)', '$60–300'],
                  ['Food on trail (12 days)', '$360–600'],
                  ['Travel insurance (with heli-evac)', '$80–150'],
                  ['Gear & equipment', '$200–600'],
                ].map(([item, cost]) => (
                  <tr key={item}>
                    <td className="px-5 py-3 text-gray-700">{item}</td>
                    <td className="px-5 py-3 text-right font-semibold text-gray-900">{cost}</td>
                  </tr>
                ))}
                <tr className="bg-green-50">
                  <td className="px-5 py-3 font-bold text-gray-900">Total estimate</td>
                  <td className="px-5 py-3 text-right font-bold text-green-700">$1,500–2,800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">Excluding international flights to Nepal. Budget end possible if you share a guide and carry your own pack.</p>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </section>

        {/* Related guides */}
        <section className="mb-14 p-6 rounded-2xl bg-green-50 border border-green-100">
          <h3 className="font-bold text-gray-900 mb-3">📚 Related Guides</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/nepal-trekking-permits"   className="btn-secondary text-sm">Permits Guide →</Link>
            <Link to="/nepal-packing-list"       className="btn-secondary text-sm">Packing List →</Link>
            <Link to="/best-time-to-visit-nepal" className="btn-secondary text-sm">Best Time to Visit →</Link>
            <Link to="/nepal-travel-cost"        className="btn-secondary text-sm">Nepal Travel Cost →</Link>
            <Link to="/annapurna-circuit-trek"   className="btn-secondary text-sm">Annapurna Circuit →</Link>
            <Link to="/nepal-trekking-guide"     className="btn-secondary text-sm">Trekking Guide →</Link>
          </div>
        </section>

        <GuidePromo variant="inline" />
      </div>
    </>
  )
}
