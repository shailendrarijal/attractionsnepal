import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageSeo from '../../components/PageSeo'
import JsonLd from '../../components/JsonLd'
import GuidePromo from '../../components/GuidePromo'
import { AmazonProductBoxLoader } from '../../components/AmazonProductBox'

const faqs = [
  {
    q: 'How long is the Annapurna Circuit trek?',
    a: 'The classic full circuit is 160–230km and takes 14–21 days, starting in Besisahar and ending in Nayapul (near Pokhara). A shorter version starting from Chame (accessible by road) takes 10–14 days. Many trekkers now skip the roadside sections by jeep, doing only the high-altitude segments (7–10 days for the Manang to Muktinath section).',
  },
  {
    q: 'Is Annapurna Circuit harder than EBC?',
    a: 'The Thorong La Pass (5,416m) crossing on Annapurna Circuit is higher than Everest Base Camp (5,364m) and is a single demanding day — a 1,600m climb followed by a 1,600m descent. Overall, Annapurna Circuit is often considered slightly harder than EBC due to the pass crossing, longer daily distances, and more varied terrain. Both require good fitness and acclimatisation.',
  },
  {
    q: 'What permits do I need for the Annapurna Circuit?',
    a: 'Two permits are required: (1) ACAP (Annapurna Conservation Area Permit): NPR 3,000. (2) TIMS (Trekkers\' Information Management System) card: NPR 2,000. Both are available at the Nepal Tourism Board office in Kathmandu (Pradarshani Marg) or at the TIMS counter in Pokhara. Get them before you start — checkpoint officials along the route will verify them.',
  },
  {
    q: 'Can I do the Annapurna Circuit without a guide?',
    a: 'Since April 2023, all trekking in conservation areas requires a licensed guide. The Annapurna Circuit passes through ACAP, so a guide is mandatory. However, the route is very well marked and infrastructure (teahouses, checkpoints) is excellent. Your guide will handle logistics, communicate with locals, and provide safety support — most trekkers find them a genuine enhancement rather than just a legal requirement.',
  },
  {
    q: 'What is the best time for the Annapurna Circuit?',
    a: 'October–November is peak season — clear skies, stable weather, and spectacular mountain views. March–May (spring) is the second-best time with rhododendrons in bloom at lower altitudes. Thorong La Pass can be closed by snow from December to February — check conditions before attempting. Monsoon (June–September) brings slippery trails, leeches, and cloud-covered views.',
  },
]

const highlights = [
  { name: 'Thorong La Pass (5,416m)', desc: 'The dramatic high point of the circuit — one of the world\'s great trekking achievements. Most trekkers start the 8–10 hour crossing at 4am to clear the pass before afternoon winds.' },
  { name: 'Manang Valley', desc: 'A stunning high-altitude valley at 3,500m. The mandatory acclimatisation stop before the pass, with excellent side hikes to Gangapurna Lake and Ice Lake.' },
  { name: 'Muktinath Temple', desc: 'A sacred site for both Hindus and Buddhists, with 108 water spouts and an eternal flame. The descent from Thorong La to Muktinath is one of trekking\'s great contrasts.' },
  { name: 'Pisang & Braga', desc: 'Ancient Tibetan-style villages clinging to cliffs above the Marsyangdi River — some of the most photogenic settlements in the Himalayas.' },
  { name: 'Annapurna II & IV views', desc: 'The upper Marsyangdi Valley provides some of the most dramatic close-up Himalayan scenery in Nepal — walls of ice and rock towering above the trail.' },
  { name: 'Tatopani hot springs', desc: 'On the southern descent, natural hot spring pools provide perfect relief for aching muscles after crossing the pass. A highlight that EBC doesn\'t offer.' },
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
  headline: 'Annapurna Circuit Trek — Complete Guide 2025',
  description: 'Everything about the Annapurna Circuit trek: route, Thorong La Pass, permits, cost, best time and how it compares to Everest Base Camp.',
  url: 'https://attractionsnepal.com/annapurna-circuit-trek',
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

export default function AnnapurnaCircuitPage() {
  return (
    <>
      <PageSeo
        title="Annapurna Circuit Trek — Complete Guide 2025 (Route, Thorong La, Permits)"
        description="Complete guide to the Annapurna Circuit trek: Thorong La Pass, full route itinerary, permits, cost, best time and comparison with EBC."
        canonicalPath="/annapurna-circuit-trek"
        type="article"
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      <section className="hero-gradient text-white py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Nepal Trekking Guide</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">Annapurna Circuit Trek</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Circumnavigate the entire Annapurna massif, cross the world-famous Thorong La Pass, and descend into the arid Mustang plateau. One of the great long-distance treks on Earth.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
            <span>📏 160–230km</span><span>·</span>
            <span>📅 14–21 days</span><span>·</span>
            <span>🏔️ Thorong La 5,416m</span><span>·</span>
            <span>💪 Challenging</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">

        <section className="mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Trek duration', value: '14–21 days' },
              { label: 'Highest point', value: '5,416m Thorong La' },
              { label: 'Best season', value: 'Oct–Nov, Mar–May' },
              { label: 'Estimated cost', value: '$900–1,800' },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl bg-purple-50 p-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{label}</p>
                <p className="mt-1 font-semibold text-gray-900 text-sm">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Why the Annapurna Circuit?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Annapurna Circuit has long been considered one of the world's top ten treks. Unlike EBC, which follows a single valley out and back, the Circuit is a true circumnavigation — you begin in subtropical jungle, climb through rhododendron forests, cross a high mountain pass, and descend into the arid, Tibetan-influenced landscapes of Mustang. The diversity of terrain, culture, and climate is extraordinary.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The trek has changed significantly in the last decade as roads have been built into the valley. Many trekkers now take a jeep or bus past the roadside lower sections, starting at Chame or Dharapani to focus on the high-altitude highlights. This is a perfectly reasonable approach that saves 4–5 days without missing the best scenery.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Route Highlights</h2>
          <p className="text-gray-600 mb-5">Key stops on the classic circuit, travelling clockwise (recommended direction).</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ name, desc }) => (
              <div key={name} className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-5">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Crossing Thorong La Pass</h2>
          <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6">
            <p className="text-gray-700 leading-relaxed mb-3">
              Thorong La Pass (5,416m) is the climax of the circuit and one of the highest trekking passes regularly crossed in the world. It's a genuine mountain crossing — not just a high viewpoint — and requires good preparation.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold shrink-0">•</span> Start at 3:30–4:00am from Thorong Phedi or High Camp (4,925m)</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold shrink-0">•</span> Allow 6–8 hours to the pass, then 3–4 hours descent to Muktinath</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold shrink-0">•</span> The pass is closed November–February by snow — check conditions</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold shrink-0">•</span> Spend an acclimatisation day in Manang (3,519m) before attempting</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold shrink-0">•</span> Emergency shelters exist on the ascent — use them if the weather turns</li>
            </ul>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Cost Breakdown</h2>
          <div className="overflow-hidden rounded-2xl ring-1 ring-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Item</th>
                  <th className="text-right px-5 py-3 font-semibold text-gray-700">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {[
                  ['Bus Kathmandu to Besisahar', 'NPR 400–700 (~$3–5)'],
                  ['ACAP permit', 'NPR 3,000 (~$22)'],
                  ['TIMS card', 'NPR 2,000 (~$15)'],
                  ['Licensed guide (14 days)', '$350–490'],
                  ['Porter (optional)', '$280–350'],
                  ['Teahouse accommodation (14 nights)', '$70–350'],
                  ['Food on trail (14 days)', '$420–700'],
                  ['Travel insurance (with heli-evac)', '$80–150'],
                  ['Jeep shortcuts (optional)', '$30–80'],
                ].map(([item, cost]) => (
                  <tr key={item}>
                    <td className="px-5 py-3 text-gray-700">{item}</td>
                    <td className="px-5 py-3 text-right font-semibold text-gray-900">{cost}</td>
                  </tr>
                ))}
                <tr className="bg-green-50">
                  <td className="px-5 py-3 font-bold text-gray-900">Total estimate</td>
                  <td className="px-5 py-3 text-right font-bold text-green-700">$900–1,800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">Annapurna Circuit is generally cheaper than EBC — no flights to Lukla required.</p>
        </section>

        <AmazonProductBoxLoader context="TREKKING" title="Essential Gear for Annapurna Circuit" />

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </section>

        <section className="mb-14 p-6 rounded-2xl bg-green-50 border border-green-100">
          <h3 className="font-bold text-gray-900 mb-3">📚 Related Guides</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/nepal-trekking-permits" className="btn-secondary text-sm">Permits Guide →</Link>
            <Link to="/nepal-packing-list"     className="btn-secondary text-sm">Packing List →</Link>
            <Link to="/everest-base-camp-trek" className="btn-secondary text-sm">EBC vs Annapurna →</Link>
            <Link to="/pokhara-travel-guide"   className="btn-secondary text-sm">Pokhara Guide →</Link>
            <Link to="/nepal-trekking-guide"   className="btn-secondary text-sm">Trekking Guide →</Link>
          </div>
        </section>

        <GuidePromo variant="inline" />
      </div>
    </>
  )
}
