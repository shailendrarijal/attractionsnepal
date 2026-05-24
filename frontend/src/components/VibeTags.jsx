import { useState } from 'react'
import api from '../lib/api'

export const VIBE_SETS = {
  TEMPLE:           ['🕉️ Spiritually moving', '🙏 Deeply religious', '🌅 Peaceful', '👥 Often crowded', '✨ Worth visiting', '📚 Historically significant'],
  STUPA:            ['🕉️ Spiritually moving', '☸️ Buddhist heritage', '🌅 Peaceful', '👥 Often crowded', '✨ Worth visiting', '📚 Historically significant'],
  MONASTERY:        ['🕉️ Spiritually moving', '🎨 Beautiful art', '🌅 Peaceful', '🏔️ Scenic setting', '✨ Worth visiting', '🙏 Deeply religious'],
  DURBAR_PALACE:    ['🏛️ Historically significant', '🎨 Architectural marvel', '📸 Great for photos', '👥 Often crowded', '✨ Worth visiting'],
  ARCHAEOLOGICAL:   ['🏛️ Historically significant', '🎨 Architectural marvel', '📚 Fascinating history', '✨ Worth visiting', '💎 Hidden gem'],
  CULTURAL_VILLAGE: ['🌿 Authentic culture', '🍜 Great local food', '💎 Off the beaten path', '📸 Great for photos', '🌅 Peaceful', '✨ Worth visiting'],
  HILL_VIEWPOINT:   ['🌄 Stunning scenery', '🌅 Amazing sunrise', '📸 Great for photos', '👥 Often crowded', '🏔️ Himalaya views', '✨ Worth the hike'],
  MOUNTAIN_VIEW:    ['🌄 Stunning scenery', '🌅 Amazing sunrise', '📸 Great for photos', '🏔️ Himalaya views', '✨ Worth visiting'],
  RIVER:            ['🌊 Beautiful scenery', '🎒 Rafting & kayaking', '🌿 Natural setting', '💎 Hidden gem', '✨ Worth visiting'],
  WATERFALL:        ['💧 Beautiful falls', '🌿 Lush surroundings', '💎 Hidden gem', '🥾 Hike to reach it', '📸 Great for photos', '✨ Worth visiting'],
  LAKE:             ['🌄 Scenic beauty', '🌅 Peaceful', '📸 Great for photos', '🚣 Water activities', '💎 Hidden gem', '✨ Worth visiting'],
  HOT_SPRING:       ['♨️ Relaxing soak', '🌿 Natural setting', '💎 Hidden gem', '🥾 Hike required', '✨ Worth visiting'],
  CAVE:             ['🪨 Fascinating geology', '💡 Bring a torch', '💎 Hidden gem', '🏛️ Historically significant', '✨ Worth visiting'],
  NATIONAL_PARK:    ['🐘 Wildlife-rich', '🌿 Beautiful nature', '🦅 Great birdwatching', '🎒 Adventure', '✨ Worth visiting', '🌅 Peaceful'],
  TREK_ROUTE:       ['🌄 Stunning scenery', '⛰️ Challenging trek', '🏆 Worth the effort', '💎 Hidden gem', '🥾 Beginner-friendly', '👥 Popular route'],
  ADVENTURE_SPORTS: ['⚡ Thrilling', '🎯 Well-organised', '👍 Beginner-friendly', '🏆 Worth every penny', '✨ Highly recommended'],
  AMUSEMENT_PARK:   ['🎡 Fun for families', '👶 Kid-friendly', '✨ Worth visiting', '🎢 Great rides', '👥 Can get crowded'],
}

function getStorageKey(placeSlug) {
  return `an_vibes_${placeSlug}`
}

function getVotedVibes(placeSlug) {
  try {
    const raw = localStorage.getItem(getStorageKey(placeSlug))
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch {
    return new Set()
  }
}

function saveVotedVibe(placeSlug, vibe) {
  try {
    const existing = getVotedVibes(placeSlug)
    existing.add(vibe)
    localStorage.setItem(getStorageKey(placeSlug), JSON.stringify([...existing]))
  } catch {
    // ignore storage errors
  }
}

export default function VibeTags({ placeSlug, category, initialVotes = {} }) {
  const vibes = VIBE_SETS[category] ?? VIBE_SETS.TEMPLE

  const [votes, setVotes] = useState(() => {
    const result = {}
    vibes.forEach((v) => {
      result[v] = initialVotes[v] ?? 0
    })
    return result
  })

  const [votedVibes] = useState(() => getVotedVibes(placeSlug))
  const [submitting, setSubmitting] = useState(false)

  async function handleVote(vibe) {
    if (submitting) return
    setSubmitting(true)

    // Optimistic update
    setVotes((prev) => ({ ...prev, [vibe]: (prev[vibe] ?? 0) + 1 }))
    saveVotedVibe(placeSlug, vibe)
    votedVibes.add(vibe)

    try {
      await api.post(`/places/${placeSlug}/vibes`, { vibe })
    } catch {
      // Revert on error
      setVotes((prev) => ({ ...prev, [vibe]: Math.max(0, (prev[vibe] ?? 1) - 1) }))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <h2 className="font-display font-bold text-xl text-gray-900 mb-1">
        👋 What's this place like?
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Tap to vote — helps other travellers know what to expect
      </p>
      <div className="flex flex-wrap gap-2">
        {vibes.map((vibe) => {
          const isVoted = votedVibes.has(vibe)
          return (
            <button
              key={vibe}
              onClick={() => handleVote(vibe)}
              disabled={submitting}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm border transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                isVoted
                  ? 'bg-primary-100 border-primary-400 text-primary-800'
                  : 'bg-gray-100 hover:bg-primary-50 hover:border-primary-300 border-gray-200 text-gray-700'
              }`}
            >
              <span>{vibe}</span>
              {votes[vibe] > 0 && (
                <span className="text-xs text-gray-400 font-medium">{votes[vibe]}</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
