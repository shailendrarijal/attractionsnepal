import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageSeo from '../../components/PageSeo'
import JsonLd from '../../components/JsonLd'
import GuidePromo from '../../components/GuidePromo'
import { AmazonProductBoxLoader } from '../../components/AmazonProductBox'

const faqs = [
  {
    q: 'Is Lumbini worth visiting?',
    a: 'Absolutely — Lumbini is one of the most significant religious sites on Earth and genuinely moving even for non-Buddhists. The Sacred Garden with the Maya Devi Temple (birthplace of Siddhartha Gautama) and Ashoka Pillar are historically extraordinary. The monastic zone, with monasteries built by Buddhist communities from 20+ countries in their own architectural styles, is fascinating and beautifully peaceful. It\'s less visually dramatic than Nepal\'s mountain sites but deeply atmospheric.',
  },
  {
    q: 'How do I get to Lumbini from Kathmandu?',
    a: 'Three main options: (1) Fly to Gautam Buddha International Airport (Bhairahawa/Siddharthanagar) — 35 minutes, $80–130 one way — then 25km taxi to Lumbini ($15–20). (2) Bus from Kathmandu: 7–8 hours, NPR 700–1,200 to Bhairahawa, then local transport to Lumbini. (3) Tour packages from Kathmandu — various agencies offer 2–3 day Lumbini tours including transport and accommodation.',
  },
  {
    q: 'How many days do I need in Lumbini?',
    a: '1–2 days is sufficient for most visitors. Day 1: the Sacred Garden, Maya Devi Temple, and the monastic zone. Day 2: deeper exploration of individual monasteries, meditation, and nearby Tilaurakot (Buddha\'s childhood palace ruins, 27km away). If you\'re a serious Buddhist practitioner or are doing a meditation retreat, longer stays of 5–10+ days are common.',
  },
  {
    q: 'Is Lumbini only for Buddhists?',
    a: 'Not at all. Lumbini welcomes visitors of all faiths and none. The site is a place of world historical and cultural significance — the birthplace of one of history\'s most influential figures. Many visitors are curious travellers, historians, and pilgrims from Hindu, Jain, Shinto, and other traditions. The atmosphere is one of contemplation and peace, respectful of all visitors.',
  },
  {
    q: 'What is the best time to visit Lumbini?',
    a: 'October–March is the best time. The Terai (lowlands) is hot and humid in summer — April–June temperatures exceed 40°C. December–February is pleasantly cool (15–25°C). Buddha Jayanti (full moon in May) is the most significant festival — thousands of pilgrims gather and the atmosphere is extraordinary, though accommodation fills up fast.',
  },
]

const sites = [
  {
    name: 'Maya Devi Temple',
    icon: '🕌',
    desc: 'The most sacred spot in Lumbini — the actual birthplace of Siddhartha Gautama (Buddha), identified by the Marker Stone and the ancient brick ruins within the temple. The current structure houses and protects a 3rd century BCE nativity sculpture.',
    tip: 'Remove shoes before entering. Arrive early to avoid crowds. The surrounding ancient pool (Puskarini) where Maya Devi is said to have bathed is still visible.',
  },
  {
    name: 'Ashoka Pillar',
    icon: '🗿',
    desc: 'Erected by Emperor Ashoka during his pilgrimage in 249 BCE, this sandstone pillar bears an inscription confirming Lumbini as the birthplace of Buddha. One of the most important historical artefacts in Asia and the key evidence that authenticated Lumbini as the birthplace.',
    tip: 'Read the inscribed text translation on the information boards nearby — the 2,300-year-old words are genuinely affecting.',
  },
  {
    name: 'The Monastic Zone',
    icon: '🏯',
    desc: 'A remarkable collection of monasteries built by Buddhist communities from 20+ countries — Thailand, Sri Lanka, Japan, China, Korea, Myanmar, France, Germany, and more. Each reflects its own national tradition and architecture. The zone is divided into the Theravada (east) and Mahayana/Vajrayana (west) sections.',
    tip: 'Rent a bicycle at the gate (NPR 50–100/hour) to explore the sprawling monastic zone efficiently. Walking takes 3–4 hours; cycling is much more enjoyable.',
  },
  {
    name: 'Eternal Flame',
    icon: '🔥',
    desc: 'A flame that has burned continuously since 1986, lit to commemorate world peace. Located at the centre of the monastic zone near the main canal. A meditative focal point for pilgrims.',
    tip: 'Sit quietly at the flame area — the sound of temple bells and the silence between them is part of the Lumbini experience.',
  },
  {
    name: 'World Peace Flame Museum',
    icon: '🕊️',
    desc: 'Houses artefacts, photographs, and documentation related to Lumbini\'s history, the Buddha\'s life, and the international Buddhist community that has helped develop the site since the 1970s UNESCO restoration project.',
    tip: 'The Japanese Peace Pagoda (white stupa) near the Sacred Garden is worth a visit and photographs beautifully at sunset.',
  },
  {
    name: 'Tilaurakot (Buddha\'s Childhood Palace)',
    icon: '🏛️',
    desc: 'The ruins of Kapilavastu, the Shakya palace where Siddhartha Gautama grew up as a prince before renouncing his royal life. Located 27km from Lumbini. Excavations continue to reveal ancient structures and artefacts.',
    tip: 'Hire a taxi from Lumbini for the half-day trip (NPR 1,500–2,000 round trip). Combine with nearby Kudan and Niglihawa archaeological sites.',
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
  headline: 'Lumbini Nepal Guide 2025 — Birthplace of Buddha, What to See & How to Visit',
  description: 'Complete guide to Lumbini, Nepal — birthplace of Buddha: Maya Devi Temple, Ashoka Pillar, the Monastic Zone, how to get there and best time to visit.',
  url: 'https://attractionsnepal.com/lumbini-guide',
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

export default function LumbiniGuidePage() {
  return (
    <>
      <PageSeo
        title="Lumbini Nepal Guide 2025 — Birthplace of Buddha, Things to See & How to Visit"
        description="Complete guide to Lumbini — birthplace of the Buddha: Maya Devi Temple, Ashoka Pillar, monastic zone, how to get there from Kathmandu and best time."
        canonicalPath="/lumbini-guide"
        type="article"
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      <section className="hero-gradient text-white py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Nepal Sacred Sites Guide</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">Lumbini — Birthplace of Buddha</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            One of the holiest sites in the world — the garden where Siddhartha Gautama was born 2,600 years ago and set in motion one of humanity's great spiritual traditions.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
            <span>🌏 UNESCO World Heritage Site</span><span>·</span>
            <span>🕌 20+ international monasteries</span><span>·</span>
            <span>📅 2,600 years of history</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Why Lumbini Matters</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lumbini is where Queen Maya Devi gave birth to Siddhartha Gautama around 623 BCE — the prince who would become the Buddha, one of history's most influential figures. For the world's 500 million Buddhists, this is the holiest pilgrimage site on Earth. For anyone with curiosity about human history, culture, and philosophy, it is a genuinely moving and important place.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The site was largely forgotten for centuries until Ashoka's pillar was rediscovered in 1896 by archaeologist Dr. Alois Anton Führer. UNESCO has since led a major restoration and development programme. Today Lumbini is a carefully planned pilgrimage garden surrounded by an extraordinary collection of monasteries from Buddhist nations around the world — each built in its own national style, creating an architectural survey of Buddhist traditions across Asia.
          </p>
        </section>

        <section className="mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Best time', value: 'Oct–March' },
              { label: 'Entry fee', value: 'NPR 200 (foreigners)' },
              { label: 'Recommended stay', value: '1–2 days' },
              { label: 'Nearest airport', value: 'Bhairahawa (25km)' },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl bg-amber-50 p-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{label}</p>
                <p className="mt-1 font-semibold text-gray-900 text-sm">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">What to See in Lumbini</h2>
          <p className="text-gray-600 mb-5">The main site is organised around the Sacred Garden (the original birthplace) and the monastic zone.</p>
          <div className="space-y-4">
            {sites.map(({ name, icon, desc, tip }) => (
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
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Visitor Etiquette</h2>
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 p-6">
            <ul className="space-y-2">
              {[
                'Dress modestly — cover shoulders and knees. White or light colours are common among pilgrims.',
                'Remove shoes before entering the Maya Devi Temple and individual monasteries.',
                'Maintain silence within the sacred garden — this is an active place of worship.',
                'Photography is generally permitted outside temples; ask before photographing inside.',
                'Do not hand money directly to monks — donations should go to official donation boxes.',
                'Lumbini is a place of peace — maintain a quiet, respectful demeanour throughout.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-primary-700 font-bold shrink-0 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <AmazonProductBoxLoader context="GENERAL" title="Travel Essentials for Lumbini" />

        <section className="mb-14">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </section>

        <section className="mb-14 p-6 rounded-2xl bg-green-50 border border-green-100">
          <h3 className="font-bold text-gray-900 mb-3">📚 Related Guides</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/best-time-to-visit-nepal" className="btn-secondary text-sm">Best Time to Visit Nepal →</Link>
            <Link to="/nepal-visa-guide"         className="btn-secondary text-sm">Nepal Visa Guide →</Link>
            <Link to="/nepal-travel-cost"        className="btn-secondary text-sm">Nepal Travel Cost →</Link>
            <Link to="/itineraries"              className="btn-secondary text-sm">Nepal Itineraries →</Link>
            <Link to="/things-to-do-in-kathmandu" className="btn-secondary text-sm">Kathmandu Guide →</Link>
          </div>
        </section>

        <GuidePromo variant="inline" />
      </div>
    </>
  )
}
