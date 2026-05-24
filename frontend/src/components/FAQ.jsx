import { useState } from 'react'

export default function FAQ({ faqs = [], title = 'Frequently Asked Questions' }) {
  const [openIndex, setOpenIndex] = useState(null)

  if (!faqs.length) return null

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  function toggle(i) {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <h2 className="font-display font-bold text-2xl text-gray-900 mb-5">{title}</h2>

      <div className="space-y-2">
        {faqs.map(({ question, answer }, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className="rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  {question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer — max-height transition */}
              <div
                style={{
                  maxHeight: isOpen ? '600px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.25s ease',
                }}
              >
                <p className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {answer}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
