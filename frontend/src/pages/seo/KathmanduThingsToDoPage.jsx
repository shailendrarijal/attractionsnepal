import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageSeo from '../../components/PageSeo'
import JsonLd from '../../components/JsonLd'
import GuidePromo from '../../components/GuidePromo'
import { AmazonProductBoxLoader } from '../../components/AmazonProductBox'

const faqs = [
  {
    q: 'How many days do I need in Kathmandu?',
    a: '3 days is the minimum to see the key sites — Pashupatinath, Boudhanath, Swayambhunath, and a Durbar Square. 4–5 days lets you add Bhaktapur, a day hike, and proper exploration of Thamel. Most travellers arrive and depart from Kathmandu, so factor in those days separately.',
  },
  {
    q: 'Is Kathmandu safe for tourists?',
    a: 'Yes, Kathmandu is generally safe for tourists. Petty theft and scams (particularly around Thamel tourist areas) are the main risk — keep valuables secure and be sceptical of "free" offers from strangers. Air pollution can be poor, especially October–April, so a good face mask is recommended. The city is seismically active — know where to go in an earthquake.',
  },
  {
    q: 'What is the best area to stay in Kathmandu?',
    a: "Thamel is the main tourist hub — centrally located, packed with guesthouses, restaurants, gear shops, and easy to walk most places. Lazimpat and Durbarmarg offer quieter, more upmarket options. Patan (Lalitpur) across the river is a great alternative — less chaotic, closer to Patan Durbar Square, and has excellent restaurants.",
  },
  {
    q: 'Is Kathmandu walkable?',
    a: "Kathmandu's old city (Thamel, Asan, and the Durbar Square area) is walkable, though roads are narrow and traffic chaotic. Boudhanath and Pashupatinath are 5–8km from Thamel — best reached by taxi or auto-rickshaw ($2–4). Swayambhunath is a 30-minute walk uphill from Thamel. Use ride-hailing apps (Pathao, inDrive) for convenience and fixed prices.",
  },
  {
    q: 'Do I need to pay entry fees at Kathmandu temples?',
    a: 'Most major sites charge foreign visitors an entry fee. Kathmandu Durbar Square: NPR 1,000. Pashupatinath: NPR 1,000. Boudhanath: NPR 400. Swayambhunath: NPR 200. Bhaktapur Durbar Square: NPR 1,800 (includes all Bhaktapur sites). These fees fund conservation — keep your ticket as you may be asked to show it at different entry points within the same complex.',
  },
]

const highlights = [
  {
    name: 'Pashupatinath Temple',
    icon: '🕌',
    desc: 'Nepal\'s most sacred Hindu temple, set on the banks of the Bagmati River. Witness the evening Aarti ritual and Hindu cremation ghats — a profound, deeply human experience.',
    tip: 'Hindus only inside the main temple. Non-Hindus can observe from the eastern bank — the views and atmosphere are equally moving.',
    link: '/category/temple',
    fee: 'NPR 1,000',
    time: '2–3 hours',
  },
  {
    name: 'Boudhanath Stupa',
    icon: '☸️',
    desc: 'One of the largest stupas in the world and the heart of Tibetan Buddhism in Nepal. The all-seeing eyes of Buddha gaze from the giant white dome, surrounded by monasteries and prayer flags.',
    tip: 'Visit at dawn or dusk when monks perform kora (circumambulation) — the atmosphere is magical. Dozens of rooftop cafes surround the stupa.',
    link: '/category/stupa',
    fee: 'NPR 400',
    time: '2–3 hours',
  },
  {
    name: 'Swayambhunath (Monkey Temple)',
    icon: '🐒',
    desc: 'A 2,500-year-old hilltop stupa overlooking the Kathmandu Valley. Sacred to both Hindus and Buddhists, and famously inhabited by hundreds of resident rhesus monkeys.',
    tip: 'Climb the 365 steps to the top for panoramic valley views. Best in the morning before clouds roll in. Watch your belongings around the monkeys.',
    link: '/category/stupa',
    fee: 'NPR 200',
    time: '1.5–2 hours',
  },
  {
    name: 'Kathmandu Durbar Square',
    icon: '🏰',
    desc: 'The historic royal palace square — a UNESCO World Heritage Site packed with ancient temples, the palace of the Living Goddess (Kumari), and ornate pagodas. Heavily damaged in the 2015 earthquake but under active restoration.',
    tip: 'Hire a local guide here for 1–2 hours ($10–15) — the history and iconography is incredibly rich and easy to miss without context.',
    link: '/category/durbar-palace',
    fee: 'NPR 1,000',
    time: '2–3 hours',
  },
  {
    name: 'Bhaktapur Durbar Square',
    icon: '🏯',
    desc: 'The best-preserved medieval city in Nepal, just 13km from Kathmandu. The 55-Window Palace, Nyatapola Temple, and pottery square make this one of the most photogenic places in Asia.',
    tip: 'Take a taxi or local bus from Kathmandu. The NPR 1,800 entry fee covers all of Bhaktapur for the day — it\'s worth every rupee.',
    link: '/category/durbar-palace',
    fee: 'NPR 1,800',
    time: 'Half to full day',
  },
  {
    name: 'Patan Durbar Square',
    icon: '🗿',
    desc: 'The finest collection of Newari architecture in Nepal, centred on a beautiful royal courtyard. Less crowded than Kathmandu Durbar Square and arguably more impressive.',
    tip: 'The Patan Museum inside the old palace is world-class — one of the best museums in South Asia. Budget 1 hour minimum.',
    link: '/category/durbar-palace',
    fee: 'NPR 1,000',
    time: '2–4 hours',
  },
]

const dayTrips = [
  { name: 'Nagarkot', desc: 'Hilltop village with the best Himalayan sunrise views from Kathmandu Valley, including Everest on a clear day. 1.5 hours by taxi.', icon: '🌄' },
  { name: 'Dhulikhel', desc: 'Peaceful Newari town with stunning mountain views and excellent hiking trails. 1.5 hours east of Kathmandu.', icon: '⛰️' },
  { name: 'Namo Buddha', desc: 'Sacred Buddhist monastery on a ridge with sweeping valley views. Combine with Dhulikhel for a full day trip.', icon: '🙏' },
  { name: 'Changu Narayan', desc: "Nepal's oldest temple (4th century) on a ridge north of Bhaktapur — UNESCO listed and often overlooked.", icon: '🏛️' },
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
  headline: 'Things to Do in Kathmandu — Complete 2025 Guide',
  description: 'The best things to do in Kathmandu: temples, stupas, Durbar Squares, day trips and practical tips for planning your visit.',
  url: 'https://attractionsnepal.com/things-to-do-in-kathmandu',
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

export default function KathmanduThingsToDoPage() {
  return (
    <>
      <PageSeo
        title="Things to Do in Kathmandu — Complete 2025 Travel Guide"
        description="The best things to do in Kathmandu: Pashupatinath, Boudhanath, Swayambhunath, Durbar Squares, day trips and essential practical tips."
        canonicalPath="/things-to-do-in-kathmandu"
        type="article"
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Kathmandu Travel Guide</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Things to Do in Kathmandu
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Ancient temples, medieval palace squares, Himalayan views, and a street food scene unlike anywhere else. Here's everything to see and do in Nepal's remarkable capital.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
            <span>🏙️ Capital city</span>
            <span>·</span>
            <span>⛰️ 1,400m elevation</span>
            <span>·</span>
            <span>🛕 3 UNESCO World Heritage Sites</span>
            <span>·</span>
            <span>✈️ Main entry point to Nepal</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">

        {/* Overview */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Why Visit Kathmandu</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kathmandu is unlike any other city in the world. Nowhere else will you find a living medieval city where ancient Hindu temples and Buddhist stupas sit alongside busy bazaars, crumbling courtyards, and rooftop yoga studios. It's chaotic, polluted, fascinating, and utterly compelling.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Kathmandu Valley alone contains seven UNESCO World Heritage Sites — more per square kilometre than almost anywhere on Earth. Most travellers use Kathmandu as a gateway to trekking or further travel, but the city itself deserves at least 3–4 days.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {[
              { label: 'Best season', value: 'Oct–Nov, Mar–Apr' },
              { label: 'Elevation', value: '1,400m' },
              { label: 'UNESCO Sites', value: '7 in the valley' },
              { label: 'Recommended stay', value: '3–5 days' },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl bg-green-50 p-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{label}</p>
                <p className="mt-1 font-semibold text-gray-900 text-sm">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top attractions */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Top Attractions</h2>
          <p className="text-gray-600 mb-6">The six must-see sites in and around Kathmandu — all within a half-day trip of the city centre.</p>
          <div className="space-y-5">
            {highlights.map(({ name, icon, desc, tip, link, fee, time }) => (
              <div key={name} className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">{icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <h3 className="font-display font-bold text-lg text-gray-900">{name}</h3>
                      <div className="flex gap-2 text-xs shrink-0">
                        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">{fee}</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-medium">⏱ {time}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">{desc}</p>
                    <div className="mt-3 flex items-start gap-2 bg-amber-50 rounded-xl px-3 py-2">
                      <span className="text-amber-500 shrink-0 mt-0.5">💡</span>
                      <p className="text-xs text-amber-800 leading-relaxed">{tip}</p>
                    </div>
                    <Link to={link} className="inline-block mt-3 text-xs font-medium text-primary-700 hover:underline">
                      Browse related places →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Day trips */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Day Trips from Kathmandu</h2>
          <p className="text-gray-600 mb-5">All within 1.5 hours of the city — perfect for extending your stay.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dayTrips.map(({ name, desc, icon }) => (
              <div key={name} className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-5 flex gap-4">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Food */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">What to Eat in Kathmandu</h2>
          <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'Momo', desc: 'Nepal\'s beloved steamed or fried dumplings — filled with buff (buffalo), chicken, or veg. Order from any local canteen for NPR 100–200.' },
                { name: 'Dal Bhat', desc: 'The national dish — lentil soup, rice, vegetables, and pickle. Unlimited refills at most daal bhat restaurants. Incredibly filling and cheap.' },
                { name: 'Newari cuisine', desc: 'Kathmandu Valley\'s own culinary tradition — try Chatamari (rice crepe), Yomari (sweet rice dumpling), and Bara (lentil pancake) in the old bazaars.' },
                { name: 'Sel roti', desc: 'Crispy fried ring-shaped bread sold by street vendors, especially near temples during festivals. Best eaten fresh and hot.' },
                { name: 'Thamel restaurants', desc: 'Kathmandu has excellent international food — Israeli, Italian, Korean, Japanese. The Garden of Dreams area has some of the best rooftop dining.' },
                { name: 'Lassi & chai', desc: 'Mango or plain lassi from Asan Bazaar is a Kathmandu institution. Masala chai (NPR 20–40) is served everywhere and is excellent.' },
              ].map(({ name, desc }) => (
                <div key={name}>
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practical tips */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Practical Tips</h2>
          <div className="space-y-3">
            {[
              { icon: '🚕', tip: 'Getting around', detail: 'Use Pathao or inDrive apps for metered taxi prices (avoids negotiating). Taxis don\'t use meters by default — always agree price first or insist on the meter.' },
              { icon: '💨', tip: 'Air quality', detail: 'Kathmandu\'s pollution can be severe, especially in winter and dry season. Bring a good N95 or FFP2 mask. Air quality is best after rain or in monsoon season.' },
              { icon: '💧', tip: 'Water', detail: 'Never drink tap water. Bottled water is NPR 20–30/litre. Bring a filtered water bottle (Sawyer Squeeze or SteriPen) to reduce plastic waste.' },
              { icon: '💰', tip: 'Money', detail: 'ATMs are everywhere in Thamel and Durbarmarg. Most charge NPR 500–700 per withdrawal. Carry cash as many smaller places don\'t accept cards.' },
              { icon: '👗', tip: 'Dress code', detail: 'Cover shoulders and knees when visiting temples. Remove shoes before entering any temple or monastery. This is strictly enforced at most sites.' },
              { icon: '🌡️', tip: 'Altitude', detail: 'At 1,400m, Kathmandu doesn\'t cause altitude sickness. You\'ll likely feel fine immediately. The altitude concern starts above 3,000m on treks.' },
            ].map(({ icon, tip, detail }) => (
              <div key={tip} className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{tip}</p>
                  <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AmazonProductBoxLoader context="GENERAL" title="Essential Gear for Kathmandu" />

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </section>

        {/* Related guides */}
        <section className="mb-14 p-6 rounded-2xl bg-green-50 border border-green-100">
          <h3 className="font-bold text-gray-900 mb-3">📚 Related Guides</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/nepal-visa-guide"         className="btn-secondary text-sm">Nepal Visa Guide →</Link>
            <Link to="/nepal-travel-cost"        className="btn-secondary text-sm">Nepal Travel Cost →</Link>
            <Link to="/best-time-to-visit-nepal" className="btn-secondary text-sm">Best Time to Visit →</Link>
            <Link to="/nepal-packing-list"       className="btn-secondary text-sm">What to Pack →</Link>
            <Link to="/pokhara-travel-guide"     className="btn-secondary text-sm">Pokhara Guide →</Link>
            <Link to="/itineraries"              className="btn-secondary text-sm">Nepal Itineraries →</Link>
          </div>
        </section>

        <GuidePromo variant="inline" />
      </div>
    </>
  )
}
