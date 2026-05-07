const META = {
  TEMPLE:          { label: 'Temple',        color: 'bg-orange-100 text-orange-700', icon: '🛕' },
  MONASTERY:       { label: 'Monastery',     color: 'bg-yellow-100 text-yellow-700', icon: '🏯' },
  STUPA:           { label: 'Stupa',         color: 'bg-amber-100 text-amber-700',   icon: '☸️' },
  DURBAR_PALACE:   { label: 'Palace',        color: 'bg-purple-100 text-purple-700', icon: '🏛️' },
  ARCHAEOLOGICAL:  { label: 'Archaeological',color: 'bg-stone-100 text-stone-700',   icon: '🏺' },
  CULTURAL_VILLAGE:{ label: 'Village',       color: 'bg-lime-100 text-lime-700',     icon: '🏘️' },
  HILL_VIEWPOINT:  { label: 'Viewpoint',     color: 'bg-sky-100 text-sky-700',       icon: '👁️' },
  MOUNTAIN_VIEW:   { label: 'Mountain',      color: 'bg-blue-100 text-blue-700',     icon: '🏔️' },
  RIVER:           { label: 'River',         color: 'bg-cyan-100 text-cyan-700',     icon: '🏞️' },
  WATERFALL:       { label: 'Waterfall',     color: 'bg-teal-100 text-teal-700',     icon: '💦' },
  LAKE:            { label: 'Lake',          color: 'bg-indigo-100 text-indigo-700', icon: '🏖️' },
  HOT_SPRING:      { label: 'Hot Spring',    color: 'bg-rose-100 text-rose-700',     icon: '♨️' },
  CAVE:            { label: 'Cave',          color: 'bg-gray-100 text-gray-700',     icon: '🪨' },
  NATIONAL_PARK:   { label: 'National Park', color: 'bg-green-100 text-green-700',   icon: '🌿' },
  TREK_ROUTE:      { label: 'Trek',          color: 'bg-emerald-100 text-emerald-700',icon: '🥾' },
  ADVENTURE_SPORTS:{ label: 'Adventure',     color: 'bg-red-100 text-red-700',       icon: '🪂' },
  AMUSEMENT_PARK:  { label: 'Amusement',     color: 'bg-pink-100 text-pink-700',     icon: '🎡' },
}

export default function CategoryBadge({ category, size = 'sm' }) {
  const m = META[category] ?? { label: category, color: 'bg-gray-100 text-gray-700', icon: '📍' }
  return (
    <span className={`badge ${m.color} ${size === 'lg' ? 'text-sm px-3 py-1' : 'text-xs'}`}>
      {m.icon} {m.label}
    </span>
  )
}

export function categoryLabel(category) {
  return META[category]?.label ?? category
}
