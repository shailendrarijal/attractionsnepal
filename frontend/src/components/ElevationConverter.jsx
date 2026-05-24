import { useState } from 'react'

const QUICK_REFS = [
  { label: 'Kathmandu', metres: 1400, feet: 4593 },
  { label: 'Pokhara', metres: 822, feet: 2697 },
  { label: 'Poon Hill', metres: 3210, feet: 10531 },
  { label: 'ABC', metres: 4130, feet: 13550 },
  { label: 'EBC', metres: 5364, feet: 17598 },
  { label: 'Thorong La', metres: 5416, feet: 17769 },
]

export default function ElevationConverter() {
  const [metres, setMetres] = useState('')
  const [feet, setFeet] = useState('')

  function handleMetresChange(val) {
    setMetres(val)
    if (val === '' || isNaN(val)) {
      setFeet('')
    } else {
      setFeet((parseFloat(val) * 3.28084).toFixed(0))
    }
  }

  function handleFeetChange(val) {
    setFeet(val)
    if (val === '' || isNaN(val)) {
      setMetres('')
    } else {
      setMetres((parseFloat(val) / 3.28084).toFixed(0))
    }
  }

  function applyPreset(m, ft) {
    setMetres(String(m))
    setFeet(String(ft))
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="font-display font-bold text-gray-900 mb-4 text-base">
        📏 Elevation Converter
      </h3>

      {/* Two-input row */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 flex items-center gap-1.5">
          <input
            type="number"
            min={0}
            value={metres}
            onChange={(e) => handleMetresChange(e.target.value)}
            placeholder="0"
            className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          />
          <span className="text-sm font-semibold text-gray-500 shrink-0">m</span>
        </div>

        <span className="text-gray-300 font-bold shrink-0">↔</span>

        <div className="flex-1 flex items-center gap-1.5">
          <input
            type="number"
            min={0}
            value={feet}
            onChange={(e) => handleFeetChange(e.target.value)}
            placeholder="0"
            className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          />
          <span className="text-sm font-semibold text-gray-500 shrink-0">ft</span>
        </div>
      </div>

      {/* Quick-reference chips */}
      <div className="flex flex-wrap gap-1.5">
        {QUICK_REFS.map(({ label, metres: m, feet: ft }) => (
          <button
            key={label}
            onClick={() => applyPreset(m, ft)}
            className="text-xs px-2.5 py-1 rounded-full border border-gray-200 bg-gray-50 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 text-gray-600 transition-colors"
          >
            {label} {m.toLocaleString()}m
          </button>
        ))}
      </div>
    </div>
  )
}
