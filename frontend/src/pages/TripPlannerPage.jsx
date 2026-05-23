import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useItineraries } from '../hooks/useItineraries'
import ItineraryCard from '../components/ItineraryCard'
import PageSeo from '../components/PageSeo'
import LoadingSpinner from '../components/LoadingSpinner'

// ─── Step data ───────────────────────────────────────────────────────────────

const DURATIONS = [
  { label: '1 Day',    value: 1,  icon: '⚡', desc: 'Perfect weekend excursion' },
  { label: '3 Days',   value: 3,  icon: '🌄', desc: 'Long weekend getaway' },
  { label: '5 Days',   value: 5,  icon: '🏔️', desc: 'Classic first Nepal trip' },
  { label: '7 Days',   value: 7,  icon: '🗺️', desc: 'A full week of adventure' },
  { label: '14 Days',  value: 14, icon: '🌏', desc: 'Epic deep-dive journey' },
]

const ACTIVITIES = [
  { label: 'Trekking',    value: 'TREKKING',   icon: '🥾', desc: 'Trails & mountain walks' },
  { label: 'Cultural',    value: 'CULTURAL',   icon: '🏛️', desc: 'Temples, art & heritage' },
  { label: 'Spiritual',   value: 'SPIRITUAL',  icon: '🕉️', desc: 'Meditation & pilgrimage' },
  { label: 'Adventure',   value: 'ADVENTURE',  icon: '🪂', desc: 'Paragliding, rafting & more' },
  { label: 'Wildlife',    value: 'WILDLIFE',   icon: '🐘', desc: 'Jungle safaris & birding' },
  { label: 'Relaxation',  value: 'RELAXATION', icon: '🧘', desc: 'Yoga, spa & lakeside calm' },
]

const BUDGETS = [
  { label: 'Budget',    value: 'BUDGET',   icon: '💚', desc: 'Teahouses & local transport · ~$30–60/day', color: 'border-green-400 bg-green-50' },
  { label: 'Mid-range', value: 'MIDRANGE', icon: '💙', desc: 'Comfortable hotels & guided tours · ~$80–150/day', color: 'border-blue-400 bg-blue-50' },
  { label: 'Luxury',    value: 'LUXURY',   icon: '💜', desc: 'Boutique lodges & private guides · $200+/day', color: 'border-purple-400 bg-purple-50' },
  { label: 'Any',       value: null,       icon: '✨', desc: 'Show me all options', color: 'border-amber-400 bg-amber-50' },
]

// ─── Step components ─────────────────────────────────────────────────────────

function StepDuration({ selected, onSelect }) {
  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-gray-900 mb-1">How long is your trip?</h2>
      <p className="text-gray-500 mb-6">Pick the duration that fits your schedule.</p>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {DURATIONS.map((d) => (
          <button
            key={d.value}
            onClick={() => onSelect(d.value)}
            className={`relative rounded-2xl border-2 p-4 text-center transition-all hover:shadow-md focus:outline-none ${
              selected === d.value
                ? 'border-primary-600 bg-primary-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-primary-300'
            }`}
          >
            <span className="text-3xl block mb-2">{d.icon}</span>
            <span className="font-bold text-gray-900 text-sm block">{d.label}</span>
            <span className="text-xs text-gray-400 mt-0.5 block">{d.desc}</span>
            {selected === d.value && (
              <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary-600 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

function StepActivities({ selected, onToggle }) {
  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-gray-900 mb-1">What kind of trip?</h2>
      <p className="text-gray-500 mb-6">Select all that interest you — we'll find itineraries that match.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {ACTIVITIES.map((a) => {
          const isSelected = selected.includes(a.value)
          return (
            <button
              key={a.value}
              onClick={() => onToggle(a.value)}
              className={`relative rounded-2xl border-2 p-4 text-left transition-all hover:shadow-md focus:outline-none ${
                isSelected
                  ? 'border-primary-600 bg-primary-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-primary-300'
              }`}
            >
              <span className="text-2xl block mb-1">{a.icon}</span>
              <span className="font-bold text-gray-900 text-sm block">{a.label}</span>
              <span className="text-xs text-gray-400 mt-0.5 block">{a.desc}</span>
              {isSelected && (
                <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary-600 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </button>
          )
        })}
      </div>
      {selected.length === 0 && (
        <p className="text-xs text-amber-600 mt-3 flex items-center gap-1">
          ⚠️ Select at least one activity, or we'll show all types.
        </p>
      )}
    </div>
  )
}

function StepBudget({ selected, onSelect }) {
  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-gray-900 mb-1">What's your budget style?</h2>
      <p className="text-gray-500 mb-6">This helps us match the right level of accommodation and guides.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {BUDGETS.map((b) => (
          <button
            key={b.label}
            onClick={() => onSelect(b.value)}
            className={`relative rounded-2xl border-2 p-4 text-left transition-all hover:shadow-md focus:outline-none ${
              selected === b.value
                ? `${b.color} border-opacity-100 shadow-md`
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{b.icon}</span>
              <div>
                <span className="font-bold text-gray-900 text-sm block">{b.label}</span>
                <span className="text-xs text-gray-500">{b.desc}</span>
              </div>
            </div>
            {selected === b.value && (
              <span className="absolute top-3 right-3 w-4 h-4 rounded-full bg-primary-600 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Results ─────────────────────────────────────────────────────────────────

function Results({ days, activities, budget, onReset }) {
  // Build query — primary filter by days; secondary by first activity if any; budget if set
  const params = { limit: '6', published: 'true' }
  if (days) params.days = days
  if (activities.length === 1) params.activity = activities[0]
  if (budget) params.budget = budget

  const { data, isLoading, error } = useItineraries(params)

  // If we got fewer than 3 results and had filters, broaden (just days)
  const fallbackParams = { limit: '6', published: 'true' }
  if (days) fallbackParams.days = days
  const fallback = useItineraries(
    data?.itineraries?.length < 3 ? fallbackParams : null
  )

  const itineraries = data?.itineraries?.length >= 1
    ? data.itineraries
    : (fallback.data?.itineraries ?? [])

  const durationLabel = DURATIONS.find((d) => d.value === days)?.label ?? `${days} days`
  const activityLabels = activities.map((a) => ACTIVITIES.find((x) => x.value === a)?.label).filter(Boolean)
  const budgetLabel = BUDGETS.find((b) => b.value === budget)?.label

  return (
    <div>
      {/* Summary */}
      <div className="mb-6 p-4 bg-primary-50 rounded-2xl border border-primary-100 flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold text-primary-800">Your trip:</span>
        <span className="badge bg-primary-100 text-primary-800">{durationLabel}</span>
        {activityLabels.map((l) => (
          <span key={l} className="badge bg-primary-100 text-primary-800">{l}</span>
        ))}
        {budgetLabel && budgetLabel !== 'Any' && (
          <span className="badge bg-primary-100 text-primary-800">{budgetLabel}</span>
        )}
        <button
          onClick={onReset}
          className="ml-auto text-xs text-primary-600 hover:text-primary-900 underline"
        >
          ← Change preferences
        </button>
      </div>

      {isLoading && <LoadingSpinner />}

      {error && (
        <p className="text-red-500 text-sm">Failed to load itineraries. Please try again.</p>
      )}

      {!isLoading && itineraries.length === 0 && (
        <div className="text-center py-16">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-gray-500">No exact matches found.</p>
          <Link to="/itineraries" className="btn-primary mt-4 inline-block">Browse all itineraries</Link>
        </div>
      )}

      {itineraries.length > 0 && (
        <>
          <h2 className="font-display font-bold text-xl text-gray-900 mb-4">
            🗺️ {itineraries.length} itinerar{itineraries.length === 1 ? 'y' : 'ies'} match your trip
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {itineraries.map((it) => (
              <ItineraryCard key={it.id} itinerary={it} />
            ))}
          </div>
          <p className="text-center text-sm text-gray-500">
            Want to see more?{' '}
            <Link to="/itineraries" className="text-primary-700 font-semibold hover:underline">
              Browse all {data?.total ?? ''} itineraries →
            </Link>
          </p>
        </>
      )}
    </div>
  )
}

// ─── Main wizard ─────────────────────────────────────────────────────────────

const STEPS = [
  { number: 1, label: 'Duration' },
  { number: 2, label: 'Activities' },
  { number: 3, label: 'Budget' },
]

export default function TripPlannerPage() {
  const [step, setStep] = useState(1)      // 1 | 2 | 3 | 'results'
  const [days, setDays] = useState(null)
  const [activities, setActivities] = useState([])
  const [budget, setBudget] = useState(undefined)  // undefined = not chosen yet

  function toggleActivity(val) {
    setActivities((prev) =>
      prev.includes(val) ? prev.filter((a) => a !== val) : [...prev, val]
    )
  }

  function canProceed() {
    if (step === 1) return days !== null
    if (step === 2) return true  // activities are optional
    if (step === 3) return budget !== undefined
    return false
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1)
    else setStep('results')
  }

  function handleReset() {
    setStep(1)
    setDays(null)
    setActivities([])
    setBudget(undefined)
  }

  return (
    <>
      <PageSeo
        title="Plan My Nepal Trip — Custom Itinerary Builder"
        description="Answer 3 quick questions and we'll match you with the perfect Nepal itinerary — from 1-day highlights to 14-day epic treks."
        canonicalPath="/plan-my-trip"
      />

      {/* Hero */}
      <div className="bg-primary-900 py-14 px-4 text-center">
        <p className="text-3xl mb-3">🗺️</p>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-2">Plan My Nepal Trip</h1>
        <p className="text-primary-200 text-base max-w-xl mx-auto">
          3 quick questions. We match you to the perfect itinerary from our library of 50+ curated Nepal trips.
        </p>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">

        {/* Progress bar (only while in wizard steps) */}
        {step !== 'results' && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              {STEPS.map((s, i) => {
                const isDone    = s.number < step
                const isCurrent = s.number === step
                return (
                  <div key={s.number} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                          isDone    ? 'bg-primary-600 text-white'
                          : isCurrent ? 'bg-primary-600 text-white ring-4 ring-primary-100'
                          : 'bg-gray-200 text-gray-400'
                        }`}
                      >
                        {isDone ? (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : s.number}
                      </div>
                      <span className={`text-xs mt-1 ${isCurrent ? 'text-primary-700 font-semibold' : 'text-gray-400'}`}>
                        {s.label}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className={`flex-1 h-0.5 mx-2 mb-4 transition-colors ${s.number < step ? 'bg-primary-600' : 'bg-gray-200'}`} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Step content */}
        {step === 1 && (
          <StepDuration selected={days} onSelect={setDays} />
        )}
        {step === 2 && (
          <StepActivities selected={activities} onToggle={toggleActivity} />
        )}
        {step === 3 && (
          <StepBudget selected={budget} onSelect={setBudget} />
        )}
        {step === 'results' && (
          <Results days={days} activities={activities} budget={budget} onReset={handleReset} />
        )}

        {/* Navigation buttons */}
        {step !== 'results' && (
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={() => step > 1 ? setStep((s) => s - 1) : null}
              className={`text-sm font-medium transition-colors ${
                step > 1 ? 'text-gray-600 hover:text-gray-900' : 'invisible'
              }`}
            >
              ← Back
            </button>

            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`btn-primary px-8 py-2.5 transition-all ${
                !canProceed() ? 'opacity-40 cursor-not-allowed' : 'hover:scale-105'
              }`}
            >
              {step === 3 ? 'Find My Itineraries →' : 'Next →'}
            </button>
          </div>
        )}
      </div>
    </>
  )
}
