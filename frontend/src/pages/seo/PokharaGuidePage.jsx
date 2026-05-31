import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageSeo from '../../components/PageSeo'
import JsonLd from '../../components/JsonLd'
import GuidePromo from '../../components/GuidePromo'
import { AmazonProductBoxLoader } from '../../components/AmazonProductBox'

const faqs = [
  {
    q: 'How many days should I spend in Pokhara?',
    a: '2–3 days covers the main attractions comfortably: Phewa Lake boating, Sarangkot sunrise, paragliding, Davis Falls, and the World Peace Pagoda. 4–5 days if you want to do a short trek in the Annapurna foothills (Poon Hill, Australian Camp) or relax more at the lakeside. Most travellers use Pokhara as a base before or after the Annapurna Circuit.',
  },
  {
    q: 'How do I get from Kathmandu to Pokhara?',
    a: 'Three options: (1) Tourist bus — 6–7 hours, $10–15, runs daily from Thamel. Scenic but rough road. (2) Local bus — 6–8 hours, $5–8, from the Kathmandu bus park. (3) Flight — 25 minutes, $100–150 one way. Flights save time and offer stunning Himalayan views. Worth the extra cost if you\'re short on time. See our full guide: ',
  },
  {
    q: 'Is Pokhara worth visiting?',
    a: "Absolutely yes. Pokhara is Nepal's most relaxed major destination — far less chaotic than Kathmandu, with a beautiful lakeside setting and direct views of the Annapurna and Machhapuchhre (Fish Tail) peaks. The paragliding is world-class, the food scene is excellent, and it's the perfect base for some of Nepal's most rewarding short treks.",
  },
  {
    q: 'What is the best area to stay in Pokhara?',
    a: "Lakeside (Baidam) is the tourist hub — most restaurants, cafes, gear shops, and guest houses are here. It's lively but can feel touristy. Damside at the southern end is quieter and slightly cheaper. For budget stays, the old Pokhara Bazaar area has fewer tourists. Most travellers prefer Lakeside for its convenience and atmosphere.",
  },
  {
    q: 'What is the best time to visit Pokhara?',
    a: 'October–November is the best time — crystal clear mountain views, perfect temperatures (20–25°C days). March–April is excellent too, with spring flowers and equally clear skies. December–February is cold but still fine for lakeside activities (mountains are visible). Monsoon (June–September) brings almost daily rain, cloud-covered mountains, and lush green landscapes — some people love the off-season tranquility.',
  },
]

const attractions = [
  { name: 'Phewa Lake', icon: '⛵', desc: 'Nepal\'s second-largest lake and Pokhara\'s centrepiece. Rent a wooden rowboat to reach Tal Barahi Temple on a tiny island, or simply drift and watch Machhapuchhre\'s reflection in the water at dawn.', tip: 'Hire a boat for NPR 300–500/hour from the lakeside ghats. Mornings are calmest.' },
  { name: 'Sarangkot Sunrise', icon: '🌄', desc: 'The classic Pokhara experience — wake at 4:30am and drive 30 minutes to the Sarangkot viewpoint (1,592m) for sunrise over the entire Annapurna and Dhaulagiri ranges. Machhapuchhre turns golden as the sun rises.', tip: 'Go on your first morning in Pokhara before clouds build. Shared jeep from Lakeside: NPR 300–400.' },
  { name: 'Paragliding', icon: '🪂', desc: 'Pokhara is one of the best paragliding destinations in the world. Launch from Sarangkot and soar for 30–45 minutes above Phewa Lake with Annapurna behind you. Tandem flights with experienced pilots are available for all skill levels.', tip: 'Book directly with companies on Lakeside rather than through hotel intermediaries. Cost: $60–90 per flight including photos/video.' },
  { name: 'Davis Falls', icon: '💧', desc: 'A dramatic waterfall where the Pardi Khola river abruptly disappears underground through a rocky gorge. Most spectacular during and just after monsoon when water levels are high.', tip: 'Combined well with nearby Gupteshwor Cave (NPR 100 entry), which follows the underground river beneath Davis Falls.' },
  { name: 'World Peace Pagoda', icon: '🕊️', desc: 'A gleaming white Buddhist stupa on a ridge south of Phewa Lake. Built by Japanese Buddhist monks, it offers 360-degree views of the lake, city, and Annapurna range. The 45-minute climb through forest is rewarding.', tip: 'Take a boat across Phewa Lake (NPR 100) to the south shore, then hike up. Combine with the return walk down the other side.' },
  { name: 'Begnas Lake', icon: '🏞️', desc: 'A quieter, less touristy lake 15km east of Pokhara. Excellent for kayaking, birdwatching, and simply escaping the Lakeside crowds. A half-day trip by taxi or bike from Pokhara.', tip: 'Rent a bicycle in Lakeside and cycle to Begnas for a peaceful day out. The road passes through quiet Gurung villages.' },
  { name: 'Pokhara Regional Museum', icon: '🏛️', desc: 'Excellent insight into the ethnic groups of the Gandaki region — Gurung, Magar, Thakali, and Tibetan cultures. Well-curated and often uncrowded. Located near the old Pokhara Bazaar.', tip: 'NPR 100 entry. Budget 1–1.5 hours. Combine with a walk through the old bazaar area, which feels much more authentic than Lakeside.' },
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
  headline: 'Pokhara Travel Guide 2025 — Things to Do, Getting There, Best Time',
  description: 'Complete Pokhara travel guide: Phewa Lake, Sarangkot sunrise, paragliding, Davis Falls, how to get there and where to stay.',
  url: 'https://attractionsnepal.com/pokhara-travel-guide',
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

export default function PokharaGuidePage() {
  return (
    <>
      <PageSeo
        title="Pokhara Travel Guide 2025 — Things to Do, Getting There & Where to Stay"
        description="Complete Pokhara travel guide: Phewa Lake, Sarangkot sunrise, paragliding, Davis Falls, World Peace Pagoda, how to get there and where to stay."
        canonicalPath="/pokhara-travel-guide"
        type="article"
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      <section className="hero-gradient text-white py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Nepal City Guide</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">Pokhara Travel Guide</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Nepal's most beautiful lake city, framed by the Annapurna Himalaya. Paraglide above Phewa Lake, watch sunrise over the mountains, and trek into the hills before dinner.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
            <span>🏙️ Gandaki Province</span><span>·</span>
            <span>⛰️ 820m elevation</span><span>·</span>
            <span>✈️ 25 min from Kathmandu</span><span>·</span>
            <span>🪂 World-class paragliding</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">

        <section className="mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Best season', value: 'Oct–Nov, Mar–May' },
              { label: 'Elevation', value: '820m' },
              { label: 'Recommended stay', value: '3–5 days' },
              { label: 'Distance from KTM', value: '200km / 6–7 hrs by bus' },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl bg-blue-50 p-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{label}</p>
                <p className="mt-1 font-semibold text-gray-900 text-sm">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Top Things to Do in Pokhara</h2>
          <p className="text-gray-600 mb-5">From lakeside sunrises to world-class paragliding — Pokhara punches well above its weight.</p>
          <div className="space-y-4">
            {attractions.map(({ name, icon, desc, tip }) => (
              <div key={name} className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-5">
                <div className="flex gap-4">
                  <span className="text-2xl shrink-0">{icon}</span>
                  <div>
                    <h3 className="font-display font-bold text-gray-900 mb-1">{name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-2">{desc}</p>
                    <div className="flex items-start gap-2 bg-amber-50 rounded-xl px-3 py-2">
                      <span className="text-amber-500 shrink-0">💡</span>
                      <p className="text-xs text-amber-800">{tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Short Treks from Pokhara</h2>
          <p className="text-gray-600 mb-4">Pokhara is the gateway to the Annapurna region. Even without committing to the full circuit, excellent day and multi-day hikes start right from the city.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'Poon Hill (Ghorepani)', days: '4 days', desc: 'The most popular short trek — panoramic sunrise view of Dhaulagiri, Annapurna South, and Machhapuchhre from 3,210m.' },
              { name: 'Australian Camp', days: '1–2 days', desc: 'Easy trek through Gurung villages with superb Annapurna views. Perfect for first-time trekkers or those with limited time.' },
              { name: 'Mardi Himal', days: '5–7 days', desc: 'A quieter, off-the-beaten-path trek with close-up views of Machhapuchhre and Mardi Himal peak.' },
              { name: 'Khopra Ridge', days: '7–9 days', desc: 'Remote alternative to Poon Hill with fewer crowds and a wilder Himalayan atmosphere.' },
            ].map(({ name, days, desc }) => (
              <div key={name} className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-5">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-semibold text-gray-900">{name}</h3>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full shrink-0 ml-2">{days}</span>
                </div>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            All treks from Pokhara require permits. See our <Link to="/nepal-trekking-permits" className="text-primary-700 hover:underline">permits guide →</Link>
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Getting to Pokhara</h2>
          <div className="space-y-3">
            {[
              { mode: '✈️ Flight', detail: '25 minutes from Kathmandu. NPR 12,000–20,000 ($90–150) one way. Best choice if time is short — window seat on the left side for Himalayan views.' },
              { mode: '🚌 Tourist bus', detail: '6–7 hours from Thamel, Kathmandu. $10–15. Comfortable AC coaches, scenic but winding road. Recommended for budget travellers.' },
              { mode: '🚌 Local bus', detail: '6–8 hours from Kathmandu bus park. NPR 600–900. Cheaper but more crowded and slower. Not recommended for those prone to motion sickness.' },
              { mode: '🚗 Private car/taxi', detail: '5–6 hours. $80–120 per car. Worth it for groups of 3–4 or those with lots of gear. Can stop at viewpoints along the way.' },
            ].map(({ mode, detail }) => (
              <div key={mode} className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                <span className="font-semibold text-gray-900 text-sm w-28 shrink-0">{mode}</span>
                <p className="text-sm text-gray-600">{detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm">
            <Link to="/kathmandu-to-pokhara" className="text-primary-700 hover:underline font-medium">Full guide: Kathmandu to Pokhara →</Link>
          </p>
        </section>

        <AmazonProductBoxLoader context="GENERAL" title="Travel Gear for Pokhara" />

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </section>

        <section className="mb-14 p-6 rounded-2xl bg-green-50 border border-green-100">
          <h3 className="font-bold text-gray-900 mb-3">📚 Related Guides</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/kathmandu-to-pokhara"   className="btn-secondary text-sm">Kathmandu to Pokhara →</Link>
            <Link to="/annapurna-circuit-trek" className="btn-secondary text-sm">Annapurna Circuit →</Link>
            <Link to="/nepal-trekking-permits" className="btn-secondary text-sm">Trekking Permits →</Link>
            <Link to="/best-time-to-visit-nepal" className="btn-secondary text-sm">Best Time to Visit →</Link>
            <Link to="/nepal-travel-cost"      className="btn-secondary text-sm">Nepal Travel Cost →</Link>
          </div>
        </section>

        <GuidePromo variant="inline" />
      </div>
    </>
  )
}
