import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageSeo from '../../components/PageSeo'
import JsonLd from '../../components/JsonLd'
import GuidePromo from '../../components/GuidePromo'
import { AmazonProductBoxLoader } from '../../components/AmazonProductBox'

const faqs = [
  {
    q: 'What is the best time to visit Chitwan National Park?',
    a: 'October–March is the best time. The dry winter months (November–February) offer the best wildlife viewing as animals congregate around water sources and vegetation is thinner, making animals easier to spot. February–March has excellent birdwatching as migratory birds are present. Avoid the monsoon (June–September) when much of the park floods and wildlife is very hard to see.',
  },
  {
    q: 'Will I see a tiger in Chitwan?',
    a: 'Tiger sightings are possible but not guaranteed — Chitwan has around 100+ Bengal tigers, but the park is large (932 sq km) and tigers are naturally elusive. Your best chance is on a jeep safari at dawn or dusk near known tiger territories. Guests on longer stays (3+ nights) have a significantly higher chance. One-horned rhinos are far more commonly seen — Chitwan has one of the world\'s highest densities.',
  },
  {
    q: 'How many days do I need in Chitwan?',
    a: 'Two nights / three days is the minimum to do the main activities properly — a jeep safari, canoe ride, jungle walk, and cultural show. Three nights gives a more relaxed pace and better wildlife odds. Some travellers spend 4–5 nights, especially birdwatchers. Most people visit en route between Kathmandu and Pokhara.',
  },
  {
    q: 'How do I get to Chitwan from Kathmandu?',
    a: 'Several options: (1) Tourist bus: 5–6 hours, $12–18, from Thamel to Sauraha. (2) Express bus to Bharatpur then taxi: similar time, slightly cheaper. (3) Flight to Bharatpur airport: 25 minutes, $80–120 — then a 30-minute taxi to Sauraha. Most resorts arrange transfers if booked in advance.',
  },
  {
    q: 'Is Chitwan expensive?',
    a: "Chitwan ranges from budget to luxury. Budget guesthouses in Sauraha start at $15–25/night. Mid-range jungle lodges inside or adjacent to the buffer zone run $60–150/night with activities included. Luxury river lodges and tree houses start at $200+/night. The national park entry fee for foreigners is NPR 1,500/day. Activities (jeep safari: $30–50, canoe: $10–15) are added on top of accommodation for budget stays.",
  },
]

const wildlife = [
  { name: 'One-Horned Rhinoceros', icon: '🦏', count: '700+', note: 'Chitwan has the world\'s largest population. Frequently seen on jeep safaris and even from the village edge.' },
  { name: 'Bengal Tiger', icon: '🐅', count: '100+', note: 'Present but elusive. Dawn and dusk jeep safaris near water give the best chance.' },
  { name: 'Asian Elephant', icon: '🐘', count: '50+', note: 'Wild herds roam the park. Elephant bathing experiences with rescued elephants available in Sauraha.' },
  { name: 'Gharial Crocodile', icon: '🐊', count: '150+', note: 'Critically endangered. Sunbathing on the Rapti River banks — Chitwan is a global conservation success story for this species.' },
  { name: 'Leopard', icon: '🐆', count: '60+', note: 'Present but very rarely seen. Camera traps confirm their presence throughout the park.' },
  { name: 'Sloth Bear', icon: '🐻', count: 'Present', note: 'Mostly nocturnal. Occasionally seen on dawn drives near fruiting trees.' },
  { name: 'Birds', icon: '🦅', count: '500+ species', note: 'One of the richest birding sites in Asia. Bengal florican, giant hornbill, and many raptors.' },
  { name: 'Spotted Deer', icon: '🦌', count: 'Abundant', note: 'Seen constantly on safaris — often used as a "tiger indicator" by watching where they look and listen.' },
]

const activities = [
  { name: 'Jeep Safari', duration: '3–4 hours', price: '$30–50', desc: 'The core Chitwan experience. Dawn and dusk drives into the core zone of the national park. Best for tiger, rhino, and elephant sightings. Morning drives are generally more productive.' },
  { name: 'Canoe Ride', duration: '1–2 hours', price: '$10–15', desc: 'A silent dugout canoe trip down the Rapti River. Exceptional for gharial and mugger crocodile sightings, kingfishers, herons, and river dolphins (rare but possible). A completely different experience from a jeep safari.' },
  { name: 'Jungle Walk', duration: '2–3 hours', price: '$15–25', desc: 'Walk into the buffer zone with an armed guard and naturalist guide. Closer to nature than any vehicle — you\'ll learn to read tracks, droppings, and bird calls. Rhino encounters on foot are surprisingly common and unforgettable.' },
  { name: 'Elephant Bathing', duration: '45–60 min', price: '$10–15', desc: 'Help wash rescued elephants in the river at Sauraha. The elephants are rescues, not used for riding — this is considered an ethical wildlife activity.' },
  { name: 'Bird Walk', duration: '2–3 hours', price: '$15–20', desc: 'An early morning walk through grassland and forest edges with a specialist birding guide. Chitwan\'s 500+ species make this one of Asia\'s premier birding experiences.' },
  { name: 'Tharu Cultural Show', duration: '1 hour', price: '$5–10', desc: 'An evening performance of traditional Tharu stick dancing and music in Sauraha. The Tharu people are indigenous to the Terai and have lived alongside wildlife here for centuries.' },
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
  headline: 'Chitwan National Park Guide 2025 — Safari, Wildlife & How to Visit',
  description: 'Complete guide to Chitwan National Park: safari activities, wildlife including tigers and rhinos, best time to visit, how to get there and costs.',
  url: 'https://attractionsnepal.com/chitwan-national-park',
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

export default function ChitwanGuidePage() {
  return (
    <>
      <PageSeo
        title="Chitwan National Park Guide 2025 — Safari, Wildlife, Best Time & How to Visit"
        description="Complete guide to Chitwan National Park: tigers, rhinos, jeep safaris, canoe rides, best time to visit and how to get there from Kathmandu."
        canonicalPath="/chitwan-national-park"
        type="article"
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      <section className="hero-gradient text-white py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Nepal Wildlife Guide</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">Chitwan National Park</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Nepal's premier wildlife destination — home to Bengal tigers, one-horned rhinos, and 500+ bird species. A UNESCO World Heritage Site in Nepal's tropical Terai.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
            <span>🌿 UNESCO World Heritage Site</span><span>·</span>
            <span>🦏 700+ rhinos</span><span>·</span>
            <span>🐅 100+ tigers</span><span>·</span>
            <span>932 km² park area</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">

        <section className="mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Best season', value: 'Oct–March' },
              { label: 'Park entry fee', value: 'NPR 1,500/day' },
              { label: 'Recommended stay', value: '2–3 nights' },
              { label: 'Base town', value: 'Sauraha village' },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl bg-green-50 p-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{label}</p>
                <p className="mt-1 font-semibold text-gray-900 text-sm">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Wildlife You Can See</h2>
          <p className="text-gray-600 mb-5">Chitwan protects an extraordinary diversity of Asian megafauna in its sal forest, grassland, and riverine habitat.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {wildlife.map(({ name, icon, count, note }) => (
              <div key={name} className="flex gap-3 p-4 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-gray-900 text-sm">{name}</p>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">{count}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Activities & Safaris</h2>
          <p className="text-gray-600 mb-5">Most lodges and tour operators in Sauraha offer packaged activity combinations.</p>
          <div className="space-y-4">
            {activities.map(({ name, duration, price, desc }) => (
              <div key={name} className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display font-bold text-gray-900">{name}</h3>
                  <div className="flex gap-2 shrink-0 text-xs">
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">⏱ {duration}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full">{price}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <AmazonProductBoxLoader context="WILDLIFE" title="What to Bring on Safari" />

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </section>

        <section className="mb-14 p-6 rounded-2xl bg-green-50 border border-green-100">
          <h3 className="font-bold text-gray-900 mb-3">📚 Related Guides</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/best-time-to-visit-nepal" className="btn-secondary text-sm">Best Time to Visit →</Link>
            <Link to="/nepal-travel-cost"        className="btn-secondary text-sm">Nepal Travel Cost →</Link>
            <Link to="/nepal-visa-guide"         className="btn-secondary text-sm">Nepal Visa Guide →</Link>
            <Link to="/itineraries"              className="btn-secondary text-sm">Nepal Itineraries →</Link>
          </div>
        </section>

        <GuidePromo variant="inline" />
      </div>
    </>
  )
}
