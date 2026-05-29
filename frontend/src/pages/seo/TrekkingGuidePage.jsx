import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageSeo from '../../components/PageSeo'
import JsonLd from '../../components/JsonLd'
import GuidePromo from '../../components/GuidePromo'
import { AmazonProductBoxLoader } from '../../components/AmazonProductBox'

const faqs = [
  {
    q: 'Do I need a guide for trekking in Nepal?',
    a: 'Since April 2023 solo trekking in national park and conservation areas has been restricted — a licensed guide is now required in many areas including Everest and Annapurna regions. Guides cost USD 25–35 per day. This rule improves safety and supports the local economy.',
  },
  {
    q: 'What permits do I need to trek in Nepal?',
    a: 'Most treks require a TIMS (Trekkers\' Information Management System) card and a conservation area or national park permit. The Annapurna Circuit requires the ACAP permit (NPR 3,000), while Everest Base Camp requires the Sagarmatha National Park permit (NPR 3,000). Both are obtained in Kathmandu or at trail entry points.',
  },
  {
    q: 'What is the best season for trekking in Nepal?',
    a: 'The two peak seasons are October–November (post-monsoon: clear skies, stable weather) and March–April (pre-monsoon: rhododendrons in bloom). December–February is cold but quiet and clear at lower altitudes. Monsoon (June–September) brings leeches and cloud cover but lush scenery.',
  },
  {
    q: 'How fit do I need to be for Nepal treks?',
    a: 'Most popular treks (Annapurna Base Camp, Langtang) require good general fitness — the ability to walk 6–8 hours a day for multiple consecutive days carrying a day pack. Everest Base Camp adds altitude challenge. No technical climbing skills are needed for standard routes.',
  },
  {
    q: 'What should I pack for trekking in Nepal?',
    a: 'Layered clothing (thermal base, fleece mid-layer, waterproof outer), sturdy broken-in trekking boots, trekking poles, a 30–40L daypack, headlamp, water purification tablets or a filter, high-SPF sunscreen, blister treatment, and a first-aid kit. Sleeping bags rated to -10°C for high-altitude lodges.',
  },
]

const popularTreks = [
  {
    name: 'Everest Base Camp',
    difficulty: 'Challenging',
    duration: '12–14 days',
    desc: 'The world\'s most famous trek leads through Sherpa villages to the foot of the highest mountain on Earth at 5,364m.',
  },
  {
    name: 'Annapurna Circuit',
    difficulty: 'Moderate–Challenging',
    duration: '14–21 days',
    desc: 'A classic circuit crossing the Thorong La pass at 5,416m, passing through diverse landscapes from subtropical forests to high desert.',
  },
  {
    name: 'Langtang Valley',
    difficulty: 'Moderate',
    duration: '7–10 days',
    desc: 'A quieter alternative close to Kathmandu, winding through glaciated valleys with views of Langtang Lirung at 7,234m.',
  },
  {
    name: 'Annapurna Base Camp',
    difficulty: 'Moderate',
    duration: '8–11 days',
    desc: 'A shorter but spectacular trek into a natural amphitheatre surrounded by peaks above 7,000m including Annapurna I.',
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
  headline: 'Nepal Trekking Guide 2025 — Best Treks, Permits & Tips',
  description: 'Everything you need to know about trekking in Nepal: the best routes, required permits, fitness levels, best seasons, altitude sickness, and gear lists.',
  url: 'https://attractionsnepal.com/nepal-trekking-guide',
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

export default function TrekkingGuidePage() {
  return (
    <>
      <PageSeo
        title="Nepal Trekking Guide 2025 — Best Treks, Permits & Tips"
        description="Everything you need to know about trekking in Nepal: the best routes, required permits, fitness levels, best seasons, altitude sickness, and gear lists."
        canonicalPath="/nepal-trekking-guide"
        type="article"
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Trekking in Nepal</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Trekking in Nepal: The Complete Guide
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Everything you need to know before you hit the trail — from choosing the right route and sorting your permits to staying safe at altitude and packing the right gear.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">

        {/* Popular treks grid */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Most Popular Treks in Nepal</h2>
          <p className="text-gray-600 mb-6">
            Nepal offers over 1,000km of marked trekking trails. These four routes attract the most trekkers and are well-served by teahouses and guides.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {popularTreks.map(({ name, difficulty, duration, desc }) => (
              <Link
                key={name}
                to="/category/trek-route"
                className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6 hover:shadow-md hover:ring-primary-200 transition-all group"
              >
                <h3 className="font-semibold text-primary-800 group-hover:text-primary-700 text-lg mb-1">{name}</h3>
                <div className="flex gap-3 mb-3">
                  <span className="text-xs font-medium bg-amber-100 text-amber-800 rounded-full px-2.5 py-0.5">{difficulty}</span>
                  <span className="text-xs font-medium bg-green-100 text-green-800 rounded-full px-2.5 py-0.5">{duration}</span>
                </div>
                <p className="text-gray-600 text-sm">{desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link to="/category/trek-route" className="inline-block text-sm font-semibold text-primary-700 hover:underline">
              View all trekking routes in Nepal →
            </Link>
          </div>
        </section>

        {/* Permits section */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Trekking Permits in Nepal</h2>
          <p className="text-gray-600 mb-6">
            All foreign trekkers need at least one permit. Obtain permits in Kathmandu at the Nepal Tourism Board or at entry points to the trekking areas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">TIMS Card</h3>
              <p className="text-gray-600 text-sm mb-3">
                The Trekkers' Information Management System (TIMS) card tracks trekkers for safety purposes and is required for most trekking areas.
              </p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-700 mt-0.5">•</span>
                  SAARC nationals: NPR 2,000
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-700 mt-0.5">•</span>
                  Other nationalities: USD 20
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Conservation Area Permits</h3>
              <p className="text-gray-600 text-sm mb-3">
                Required in addition to TIMS when trekking through national parks or conservation areas.
              </p>
              <ul className="text-sm space-y-1 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-700 mt-0.5">•</span>
                  ACAP (Annapurna): NPR 3,000 / USD 30
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-700 mt-0.5">•</span>
                  Sagarmatha NP (Everest): NPR 3,000 / USD 30
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Altitude sickness */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Altitude Sickness: What You Need to Know</h2>
          <div className="prose prose-base max-w-none text-gray-700">
            <p>
              Acute Mountain Sickness (AMS) affects many trekkers above 3,000m and is the most serious risk on high-altitude treks. Symptoms include headache, nausea, fatigue, and dizziness. The golden rule is: <strong>never ascend with symptoms</strong>.
            </p>
            <p>
              The standard acclimatisation protocol is to gain no more than 300–500m of sleeping altitude per day above 3,000m, with a rest day every 1,000m. Both the Everest Base Camp and Annapurna Circuit itineraries build in acclimatisation days — do not skip them even if you feel fine.
            </p>
            <p>
              Acetazolamide (Diamox) is commonly used for prevention and mild AMS — consult a travel medicine clinic before your trip. In severe cases (HACE or HAPE), immediate descent and supplemental oxygen are essential. Always purchase travel insurance that covers helicopter evacuation; a helicopter rescue from high altitude can cost USD 5,000–10,000.
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-5">
            <p className="font-semibold text-amber-900 mb-1">Altitude warning signs requiring immediate descent:</p>
            <ul className="text-sm text-amber-800 space-y-1 mt-2">
              <li className="flex items-start gap-2"><span>•</span> Confusion, loss of coordination, or inability to walk a straight line</li>
              <li className="flex items-start gap-2"><span>•</span> Persistent cough producing pink or frothy sputum</li>
              <li className="flex items-start gap-2"><span>•</span> Severe headache not relieved by painkillers and rest</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Trekking FAQ</h2>
          <FaqAccordion items={faqs} />
        </section>

        {/* Guide promo */}
        {/* Amazon gear box — high intent after reading trekking guide */}
        <AmazonProductBoxLoader context="TREKKING" />

        <GuidePromo variant="inline" />
      </div>
    </>
  )
}
