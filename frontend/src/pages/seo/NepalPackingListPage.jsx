import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageSeo from '../../components/PageSeo'
import JsonLd from '../../components/JsonLd'
import GuidePromo from '../../components/GuidePromo'
import { AmazonProductBoxLoader } from '../../components/AmazonProductBox'

const faqs = [
  {
    q: 'Do I need trekking poles for Nepal?',
    a: 'Trekking poles are not essential but are highly recommended, especially for descents. The sustained downhill on routes like EBC or Annapurna Circuit puts significant stress on the knees — poles reduce this considerably. You can buy or hire poles in Thamel, Kathmandu for $5–15.',
  },
  {
    q: 'Can I buy trekking gear in Kathmandu?',
    a: "Yes. Thamel in Kathmandu has dozens of outdoor gear shops. You'll find both genuine branded gear (North Face, Arc'teryx, Osprey) and good-quality local brands like Sherpa Adventure Gear. There are also many convincing copies — inspect quality carefully. Prices are generally good even for real branded items.",
  },
  {
    q: 'Do I need a sleeping bag for Nepal trekking?',
    a: "It depends on your trek and season. Teahouses on major routes provide blankets, but they may not be enough above 3,500m in the colder months. Bringing your own sleeping bag rated to -10°C is recommended for high-altitude treks (EBC, Annapurna Circuit, Langtang). For lower-altitude or summer treks, a lighter bag or teahouse blankets may suffice. Sleeping bags can also be hired in Kathmandu.",
  },
  {
    q: 'What clothes do I need for Kathmandu?',
    a: 'Light layers are enough for most of the year. Summers (June–August) are warm at 25–30°C, winters (December–February) are cool in the city at 5–15°C. Always carry modest clothing for temple visits — cover shoulders and knees when entering religious sites. A light rain jacket is useful year-round.',
  },
  {
    q: 'Is there a luggage storage facility in Kathmandu?',
    a: 'Yes. Most guesthouses in Thamel offer free or very cheap luggage storage while you trek. This is the standard practice — leave your main bag with your hotel, take only your trekking pack on the trail. Make sure you get a receipt for stored items.',
  },
]

const seasons = [
  {
    name: 'Oct–Nov',
    label: 'Best Season',
    colour: 'bg-amber-50 border-amber-200',
    activeColour: 'bg-amber-600 text-white border-amber-600',
    headerColour: 'text-amber-800',
    advice: 'Peak trekking season. Days are warm and clear, nights cold above 3,000m. Pack your full trekking kit including down jacket and warm gloves. Light city clothes for Kathmandu and Pokhara.',
  },
  {
    name: 'Dec–Feb',
    label: 'Cold & Clear',
    colour: 'bg-blue-50 border-blue-200',
    activeColour: 'bg-blue-600 text-white border-blue-600',
    headerColour: 'text-blue-800',
    advice: 'Cold and dry. Kathmandu gets chilly (5–15°C). High passes can be snowbound. Pack heavy layers, a quality down jacket, thermal base layers, and waterproof outer shell. Hand and foot warmers are useful above 4,000m.',
  },
  {
    name: 'Mar–May',
    label: 'Spring',
    colour: 'bg-pink-50 border-pink-200',
    activeColour: 'bg-pink-600 text-white border-pink-600',
    headerColour: 'text-pink-800',
    advice: "Second best trekking season. Rhododendrons in bloom. Mornings clear, afternoon clouds possible. Pack similar to autumn but add a light rain layer — late May can bring pre-monsoon afternoon showers. Sunscreen is essential as UV is intense.",
  },
  {
    name: 'Jun–Sep',
    label: 'Monsoon',
    colour: 'bg-green-50 border-green-200',
    activeColour: 'bg-green-600 text-white border-green-600',
    headerColour: 'text-green-800',
    advice: 'Daily rain, warm temperatures. A quality waterproof jacket and pack cover are essential. Quick-dry fabrics are vital — cotton stays wet for days. Pack leech socks for forest trails. The upside: lush green landscapes and the cheapest prices of the year.',
  },
]

const clothingItems = {
  city: [
    'Light layers (T-shirts, lightweight shirts) — works year-round',
    'Modest clothing for temple visits (cover shoulders and knees)',
    'Sun hat or cap for sun protection',
    'Good comfortable walking shoes or trainers',
    'Light rain jacket (useful in any season)',
    'Comfortable trousers or skirts (avoid shorts at religious sites)',
  ],
  trekking: [
    'Moisture-wicking base layer (top and bottom) — avoid cotton',
    'Mid layer fleece or warm top',
    'Waterproof outer jacket (essential)',
    'Waterproof over-trousers',
    'Trekking trousers — zip-off style is very useful',
    'Warm hat that covers ears (essential above 3,000m)',
    'Quality gloves — liner gloves + outer mitts for high altitude',
    'Down jacket — essential for 4,000m+',
    'Gaiters — useful for snow season treks',
    'Quality trekking boots — broken in before travel (critical)',
    'Camp shoes / sandals for teahouse evenings',
    'Wool socks (3–4 pairs minimum)',
  ],
}

const trekkingGear = [
  { item: 'Trekking poles', note: 'Buy or hire in Thamel for $5–15. Highly recommended.' },
  { item: 'Headlamp + spare batteries', note: 'Power cuts are common. Black Diamond Spot or similar.' },
  { item: 'Sleeping bag rated -10°C', note: 'For high-altitude treks. Can hire in Kathmandu.' },
  { item: 'Basic first aid kit', note: 'Blister treatment, antiseptic, bandages, rehydration salts.' },
  { item: 'Water purification tablets or filter', note: 'Sawyer Squeeze or SteriPen. Reduces plastic waste.' },
  { item: 'Sunscreen SPF 50+', note: 'UV is extremely intense at altitude. Reapply frequently.' },
  { item: 'Lip balm with SPF', note: 'Lips burn and crack quickly at altitude without protection.' },
  { item: 'Altitude sickness medication (Diamox)', note: 'Consult your doctor before travel. Not needed for lower treks.' },
]

const buyInNepal = [
  { item: 'Trekking poles', where: 'Thamel outdoor shops — good quality, $5–15 to hire, $15–40 to buy' },
  { item: 'Sleeping bag hire', where: 'Thamel rental shops — $1–3/day for good quality bags' },
  { item: 'Fleece jacket', where: "Local brands like Sherpa Adventure Gear — excellent quality, fair price" },
  { item: 'Buff / balaclava', where: 'Widely available in Thamel — carry one in your day pack' },
  { item: 'Cashmere and pashmina', where: 'Famous Nepali craft — buy from reputable shops to get the real thing' },
  { item: 'Souvenirs and handicrafts', where: 'Far cheaper than buying at home — Thangka paintings, singing bowls, prayer flags' },
]

const gearList = [
  { name: 'Trekking boots', tip: 'Look for waterproof, ankle-support boots from brands like Scarpa, Salomon, or Merrell. Must be broken in 4–6 weeks before your trek.' },
  { name: 'Down jacket', tip: 'At least 600-fill power for anything above 4,000m. Packable styles are ideal for travel. Patagonia, Arc\'teryx, or Rab are reliable choices.' },
  { name: 'Trekking poles', tip: 'Collapsible carbon or aluminium poles. Leki, Black Diamond, and local Thamel brands are all available in Kathmandu.' },
  { name: 'Water filter (Sawyer Squeeze)', tip: 'Filters to 0.1 micron. Eliminates need for plastic bottles on the trail. One of the best eco-conscious kit choices.' },
  { name: 'Headlamp (Black Diamond Spot or similar)', tip: 'Minimum 300 lumens. Bring lithium batteries — they perform better in cold temperatures than alkaline.' },
  { name: 'Sun-protective clothing', tip: 'UPF 50+ long-sleeve shirts for high altitude and Terai safari. Helps in combination with sunscreen above treeline.' },
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
  headline: 'Nepal Packing List 2025 — What to Pack for Nepal (Trekking & City)',
  description: 'Complete Nepal packing list for every season and trip type — trekking essentials, clothing layers, electronics, documents, and what to buy in Nepal.',
  url: 'https://attractionsnepal.com/nepal-packing-list',
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

export default function NepalPackingListPage() {
  const [activeSeason, setActiveSeason] = useState(0)

  return (
    <>
      <PageSeo
        title="Nepal Packing List 2025 — What to Pack for Nepal (Trekking & City)"
        description="Complete Nepal packing list for every season and trip type — trekking essentials, clothing layers, electronics, documents, and what to buy in Nepal."
        canonicalPath="/nepal-packing-list"
        type="article"
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Nepal Travel Planning</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Nepal Packing List 2025
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            What to pack for Nepal — whether you're trekking to Everest Base Camp or exploring Kathmandu's temples. City layers, trekking essentials, and what to buy when you arrive.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">

        {/* Season selector */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Packing by Season</h2>
          <p className="text-gray-600 mb-5">
            What you pack depends heavily on when you visit. Select your season for specific advice.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {seasons.map(({ name, label, activeColour }, i) => (
              <button
                key={name}
                onClick={() => setActiveSeason(i)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  activeSeason === i ? activeColour : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                {name} <span className="font-normal opacity-75">— {label}</span>
              </button>
            ))}
          </div>
          <div className={`rounded-2xl border p-6 ${seasons[activeSeason].colour}`}>
            <h3 className={`font-display font-bold text-lg mb-2 ${seasons[activeSeason].headerColour}`}>
              {seasons[activeSeason].name}: {seasons[activeSeason].label}
            </h3>
            <p className="text-sm text-gray-700">{seasons[activeSeason].advice}</p>
          </div>
        </section>

        {/* Essential documents */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Essential Documents</h2>
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6">
            <ul className="space-y-3">
              {[
                'Passport + 2 photocopies (keep copies separately from originals)',
                'Passport photos — at least 4 (needed for visa, trekking permits, TIMS card)',
                'Travel insurance policy with emergency helicopter evacuation cover',
                'Vaccination record (yellow fever certificate required if entering from Africa or South America)',
                'Emergency contacts list — on paper, not just in your phone',
                'Printed e-visa confirmation if applicable',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-primary-700 mt-0.5 shrink-0 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Clothing */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Clothing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">City (Kathmandu / Pokhara)</h3>
              <ul className="space-y-2">
                {clothingItems.city.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-primary-700 shrink-0 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Trekking</h3>
              <ul className="space-y-2">
                {clothingItems.trekking.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-primary-700 shrink-0 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Trekking gear */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Trekking Gear Essentials</h2>
          <div className="overflow-hidden rounded-2xl ring-1 ring-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Item</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {trekkingGear.map(({ item, note }) => (
                  <tr key={item}>
                    <td className="px-5 py-3 font-semibold text-gray-900 whitespace-nowrap">{item}</td>
                    <td className="px-5 py-3 text-gray-600">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Electronics */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Electronics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'Power bank', note: 'Essential above base camp where lodges may charge for power outlets. 20,000mAh recommended for multi-day treks.' },
              { name: 'Universal travel adapter', note: 'Nepal uses Type C, D, and M sockets. A universal adapter covers all bases.' },
              { name: 'GoPro or camera', note: "Optional but you'll want a way to capture the mountain scenery. Bring spare memory cards." },
              { name: 'Earphones / headphones', note: 'Useful for long bus journeys and downtime in teahouses.' },
            ].map(({ name, note }) => (
              <div key={name} className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-5">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{name}</h3>
                <p className="text-sm text-gray-600">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What NOT to bring */}
        <section className="mb-14 rounded-2xl bg-red-50 border border-red-200 p-8">
          <h2 className="font-display text-xl font-bold text-red-900 mb-4">What NOT to Bring</h2>
          <ul className="space-y-3">
            {[
              'Large hard-sided suitcases — difficult on mountain trails and overpriced to store. Use a soft duffel bag or backpack.',
              'More than 15kg if trekking — porters have weight limits and you\'ll thank yourself for packing light.',
              'Expensive jewellery — leave it at home. Simple, practical accessories only.',
              'Hair dryers and high-wattage appliances — power is unreliable in mountain areas.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-red-800">
                <span className="shrink-0 mt-0.5 font-bold text-red-600">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* What to buy in Nepal */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">What to Buy in Nepal (Cheaper There)</h2>
          <p className="text-gray-600 mb-6">
            Save luggage space and money by buying these items in Kathmandu rather than at home.
          </p>
          <div className="space-y-3">
            {buyInNepal.map(({ item, where }) => (
              <div key={item} className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-4 flex gap-4 items-start">
                <span className="text-primary-700 font-bold shrink-0 mt-0.5">✓</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{where}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trekking gear — Amazon affiliate boxes */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Recommended Trekking Gear</h2>
          <p className="text-gray-600 mb-2">
            These are the most important items to invest in for Nepal trekking. Buy quality — cheap gear fails when it matters most.
          </p>
          <AmazonProductBoxLoader context="TREKKING" title="Trekking Essentials" />
        </section>

        {/* Travel accessories — Amazon affiliate boxes */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Travel Accessories</h2>
          <p className="text-gray-600 mb-2">
            Useful for all Nepal trips, not just trekking.
          </p>
          <AmazonProductBoxLoader context="GENERAL" title="Nepal Travel Accessories" />
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </section>

        {/* CTA */}
        <section className="mb-14 text-center">
          <p className="text-gray-600 mb-4">Ready to explore Nepal? Browse itineraries to plan your perfect trip.</p>
          <Link
            to="/itineraries"
            className="inline-flex items-center gap-2 rounded-full bg-primary-700 hover:bg-primary-800 text-white font-semibold px-7 py-3 transition-colors shadow"
          >
            Browse Nepal Itineraries →
          </Link>
        </section>

        {/* Guide promo */}
        <GuidePromo variant="inline" />
      </div>
    </>
  )
}
