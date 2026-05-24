import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'
import {
  adminGetItinerary,
  adminCreateItinerary,
  adminUpdateItinerary,
  uploadBlogImage,
  getTags,
} from '../../lib/api'

function Field({ label, children }) {
  return (
    <div>
      <label className="label">{label}</label>
      {children}
    </div>
  )
}

const EMPTY = {
  title: '',
  excerpt: '',
  days: 7,
  heroImage: '',
  startLocation: '',
  endLocation: '',
  seoTitle: '',
  seoDescription: '',
  published: false,
  featured: false,
}

const ACTIVITY_OPTIONS = [
  { value: 'TREKKING', label: 'Trekking 🥾' },
  { value: 'CULTURAL', label: 'Cultural 🏛️' },
  { value: 'SPIRITUAL', label: 'Spiritual 🕉️' },
  { value: 'ADVENTURE', label: 'Adventure 🪂' },
  { value: 'WILDLIFE', label: 'Wildlife 🐘' },
  { value: 'RELAXATION', label: 'Relaxation 🧘' },
]

const PROVINCE_OPTIONS = [
  'KOSHI',
  'MADHESH',
  'BAGMATI',
  'GANDAKI',
  'LUMBINI',
  'KARNALI',
  'SUDURPASHCHIM',
]

function newDayPlan(dayNum) {
  return {
    _key: Date.now() + Math.random(),
    day: dayNum,
    title: '',
    description: '',
    accommodation: '',
    meals: '',
    distanceKm: '',
    maxElevation: '',
    isAlternative: false,
    alternativeLabel: '',
  }
}

export default function AdminItineraryForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = !!id

  const [form, setForm] = useState(EMPTY)
  const [activities, setActivities] = useState([])
  const [budget, setBudget] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [provinces, setProvinces] = useState([])
  const [highlights, setHighlights] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [dayPlans, setDayPlans] = useState([])
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  const { data: itinerary } = useQuery({
    queryKey: ['admin-itinerary', id],
    queryFn: () => adminGetItinerary(id),
    enabled: isEdit,
  })

  const { data: allTags = [] } = useQuery({
    queryKey: ['tags'],
    queryFn: getTags,
  })

  useEffect(() => {
    if (itinerary) {
      setForm({
        title: itinerary.title ?? '',
        excerpt: itinerary.excerpt ?? '',
        days: itinerary.days ?? 7,
        heroImage: itinerary.heroImage ?? '',
        startLocation: itinerary.startLocation ?? '',
        endLocation: itinerary.endLocation ?? '',
        seoTitle: itinerary.seoTitle ?? '',
        seoDescription: itinerary.seoDescription ?? '',
        published: itinerary.published ?? false,
        featured: itinerary.featured ?? false,
      })
      setActivities(itinerary.activities ?? [])
      setBudget(itinerary.budget ?? '')
      setDifficulty(itinerary.difficulty ?? '')
      setProvinces(itinerary.provinces ?? [])
      setHighlights((itinerary.highlights ?? []).join('\n'))
      setSelectedTags(itinerary.tags?.map((t) => t.tag.id) ?? [])
      setDayPlans(
        (itinerary.dayPlans ?? []).map((dp) => ({
          _key: Date.now() + Math.random(),
          day: dp.day,
          title: dp.title ?? '',
          description: dp.description ?? '',
          accommodation: dp.accommodation ?? '',
          meals: dp.meals ?? '',
          distanceKm: dp.distanceKm != null ? String(dp.distanceKm) : '',
          maxElevation: dp.maxElevation != null ? String(dp.maxElevation) : '',
          isAlternative: dp.isAlternative ?? false,
          alternativeLabel: dp.alternativeLabel ?? '',
        }))
      )
    }
  }, [itinerary])

  const save = useMutation({
    mutationFn: (data) =>
      isEdit ? adminUpdateItinerary(id, data) : adminCreateItinerary(data),
    onSuccess: () => navigate('/admin/itineraries'),
    onError: (e) => setError(e.response?.data?.error ?? 'Save failed'),
  })

  function set(key, val) {
    setForm((f) => ({ ...f, [key]: val }))
  }

  function toggleActivity(val) {
    setActivities((a) =>
      a.includes(val) ? a.filter((x) => x !== val) : [...a, val]
    )
  }

  function toggleProvince(val) {
    setProvinces((p) =>
      p.includes(val) ? p.filter((x) => x !== val) : [...p, val]
    )
  }

  function toggleTag(tagId) {
    setSelectedTags((t) =>
      t.includes(tagId) ? t.filter((x) => x !== tagId) : [...t, tagId]
    )
  }

  function updateDayPlan(idx, field, val) {
    setDayPlans((plans) =>
      plans.map((p, i) => (i === idx ? { ...p, [field]: val } : p))
    )
  }

  function addDayPlan() {
    const lastDay = dayPlans.length > 0 ? dayPlans[dayPlans.length - 1].day : 0
    setDayPlans((plans) => [...plans, newDayPlan(lastDay + 1)])
  }

  function removeDayPlan(idx) {
    setDayPlans((plans) => plans.filter((_, i) => i !== idx))
  }

  async function handleHeroUpload(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    try {
      const { url } = await uploadBlogImage(file)
      set('heroImage', url)
    } catch {
      setError('Image upload failed')
    } finally {
      setUploading(false)
    }
  }

  function buildPayload() {
    return {
      ...form,
      days: Number(form.days),
      activities,
      budget: budget || null,
      difficulty: difficulty || null,
      provinces,
      highlights: highlights
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean),
      tags: selectedTags,
      dayPlans: dayPlans.map((dp, i) => ({
        day: Number(dp.day),
        title: dp.title,
        description: dp.description,
        accommodation: dp.accommodation || null,
        meals: dp.meals || null,
        distanceKm: dp.distanceKm ? Number(dp.distanceKm) : null,
        maxElevation: dp.maxElevation ? Number(dp.maxElevation) : null,
        isAlternative: dp.isAlternative,
        alternativeLabel: dp.alternativeLabel || null,
        order: i,
      })),
    }
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold text-gray-900">
          {isEdit ? 'Edit Itinerary' : 'New Itinerary'}
        </h1>
        <button onClick={() => navigate('/admin/itineraries')} className="btn-secondary">
          Cancel
        </button>
      </div>

      {error && (
        <div className="mb-4 rounded-lg bg-red-50 text-red-700 px-4 py-3 text-sm">{error}</div>
      )}

      <div className="space-y-5 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6">

        {/* Basic Info */}
        <h2 className="font-semibold text-gray-900 border-b pb-2 pt-2">Basic Info</h2>

        <Field label="Title *">
          <input
            value={form.title}
            onChange={(e) => set('title', e.target.value)}
            className="input"
            required
          />
        </Field>

        <Field label="Excerpt">
          <textarea
            value={form.excerpt}
            onChange={(e) => set('excerpt', e.target.value)}
            className="input"
            rows={3}
          />
        </Field>

        <Field label="Duration (days)">
          <input
            type="number"
            min={1}
            value={form.days}
            onChange={(e) => set('days', e.target.value)}
            className="input"
          />
        </Field>

        <Field label="Hero Image">
          <div className="flex gap-3 items-start">
            {form.heroImage && (
              <img src={form.heroImage} alt="hero" className="w-20 h-14 object-cover rounded-lg" />
            )}
            <div className="flex-1">
              <input
                value={form.heroImage}
                onChange={(e) => set('heroImage', e.target.value)}
                className="input mb-2"
                placeholder="https://..."
              />
              <label className="btn-secondary cursor-pointer text-xs">
                {uploading ? 'Uploading...' : 'Upload image'}
                <input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleHeroUpload}
                  disabled={uploading}
                />
              </label>
            </div>
          </div>
        </Field>

        <Field label="Start Location">
          <input
            value={form.startLocation}
            onChange={(e) => set('startLocation', e.target.value)}
            className="input"
          />
        </Field>

        <Field label="End Location">
          <input
            value={form.endLocation}
            onChange={(e) => set('endLocation', e.target.value)}
            className="input"
          />
        </Field>

        {/* Trip Details */}
        <h2 className="font-semibold text-gray-900 border-b pb-2 pt-2">Trip Details</h2>

        <Field label="Activities">
          <div className="flex flex-wrap gap-2 mt-1">
            {ACTIVITY_OPTIONS.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => toggleActivity(value)}
                className={`badge cursor-pointer select-none transition-colors ${
                  activities.includes(value)
                    ? 'bg-primary-100 text-primary-800 ring-1 ring-primary-400'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Field>

        <Field label="Budget">
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="input"
          >
            <option value="">Any</option>
            <option value="BUDGET">Budget</option>
            <option value="MIDRANGE">Mid-range</option>
            <option value="LUXURY">Luxury</option>
          </select>
        </Field>

        <Field label="Difficulty">
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="input"
          >
            <option value="">Any</option>
            <option value="EASY">Easy</option>
            <option value="MODERATE">Moderate</option>
            <option value="HARD">Hard</option>
            <option value="EXTREME">Extreme</option>
          </select>
        </Field>

        <Field label="Provinces">
          <div className="flex flex-wrap gap-2 mt-1">
            {PROVINCE_OPTIONS.map((prov) => (
              <button
                key={prov}
                type="button"
                onClick={() => toggleProvince(prov)}
                className={`badge cursor-pointer select-none transition-colors ${
                  provinces.includes(prov)
                    ? 'bg-primary-100 text-primary-800 ring-1 ring-primary-400'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {prov.charAt(0) + prov.slice(1).toLowerCase()}
              </button>
            ))}
          </div>
        </Field>

        {/* Highlights */}
        <h2 className="font-semibold text-gray-900 border-b pb-2 pt-2">Highlights</h2>

        <Field label="Highlights (one per line)">
          <textarea
            value={highlights}
            onChange={(e) => setHighlights(e.target.value)}
            className="input"
            rows={5}
            placeholder={'Summit views of Annapurna\nMeet local Gurung villagers'}
          />
        </Field>

        {/* SEO */}
        <h2 className="font-semibold text-gray-900 border-b pb-2 pt-2">SEO</h2>

        <Field label="SEO Title">
          <input
            value={form.seoTitle}
            onChange={(e) => set('seoTitle', e.target.value)}
            className="input"
          />
        </Field>

        <Field label="SEO Description">
          <textarea
            value={form.seoDescription}
            onChange={(e) => set('seoDescription', e.target.value)}
            className="input"
            rows={2}
          />
        </Field>

        {/* Tags */}
        <h2 className="font-semibold text-gray-900 border-b pb-2 pt-2">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag.id}
              type="button"
              onClick={() => toggleTag(tag.id)}
              className={`badge cursor-pointer select-none transition-colors ${
                selectedTags.includes(tag.id)
                  ? 'bg-primary-100 text-primary-800 ring-1 ring-primary-400'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>

        {/* Day Plans */}
        <h2 className="font-semibold text-gray-900 border-b pb-2 pt-2">📅 Day Plans</h2>

        <div className="space-y-4">
          {dayPlans.map((dp, idx) => (
            <div
              key={dp._key}
              className="rounded-xl border border-gray-200 p-4 space-y-3 bg-gray-50"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700 text-sm">Day {idx + 1}</span>
                <button
                  type="button"
                  onClick={() => removeDayPlan(idx)}
                  className="text-xs text-red-500 hover:underline"
                >
                  ✕ Remove
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label">Day number</label>
                  <input
                    type="number"
                    value={dp.day}
                    onChange={(e) => updateDayPlan(idx, 'day', e.target.value)}
                    className="input"
                    min={1}
                  />
                </div>
                <div>
                  <label className="label">Title</label>
                  <input
                    value={dp.title}
                    onChange={(e) => updateDayPlan(idx, 'title', e.target.value)}
                    className="input"
                    placeholder="Arrival in Kathmandu"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label">Distance (km, optional)</label>
                  <input
                    type="number"
                    value={dp.distanceKm}
                    onChange={(e) => updateDayPlan(idx, 'distanceKm', e.target.value)}
                    className="input"
                    placeholder="12.5"
                    step="0.1"
                  />
                </div>
                <div>
                  <label className="label">Max elevation (m, optional)</label>
                  <input
                    type="number"
                    value={dp.maxElevation}
                    onChange={(e) => updateDayPlan(idx, 'maxElevation', e.target.value)}
                    className="input"
                    placeholder="3440"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label">Accommodation</label>
                  <input
                    value={dp.accommodation}
                    onChange={(e) => updateDayPlan(idx, 'accommodation', e.target.value)}
                    className="input"
                    placeholder="Teahouse"
                  />
                </div>
                <div>
                  <label className="label">Meals</label>
                  <input
                    value={dp.meals}
                    onChange={(e) => updateDayPlan(idx, 'meals', e.target.value)}
                    className="input"
                    placeholder="B/L/D"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    checked={dp.isAlternative}
                    onChange={(e) => updateDayPlan(idx, 'isAlternative', e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-gray-700">Is Alternative?</span>
                </label>
                {dp.isAlternative && (
                  <div className="flex-1">
                    <input
                      value={dp.alternativeLabel}
                      onChange={(e) => updateDayPlan(idx, 'alternativeLabel', e.target.value)}
                      className="input"
                      placeholder="Alternative label"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="label">Description</label>
                <textarea
                  value={dp.description}
                  onChange={(e) => updateDayPlan(idx, 'description', e.target.value)}
                  className="input font-mono text-xs"
                  rows={8}
                  placeholder="Markdown supported..."
                />
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addDayPlan}
          className="btn-secondary w-full"
        >
          + Add Day
        </button>

        {/* Publishing */}
        <h2 className="font-semibold text-gray-900 border-b pb-2 pt-2">Publishing</h2>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) => set('published', e.target.checked)}
            className="rounded"
          />
          <span className="text-sm font-medium text-gray-700">Published</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) => set('featured', e.target.checked)}
            className="rounded"
          />
          <span className="text-sm font-medium text-gray-700">Featured</span>
        </label>

        <div className="pt-4 flex gap-3">
          <button
            onClick={() => save.mutate(buildPayload())}
            disabled={save.isPending}
            className="btn-primary"
          >
            {save.isPending
              ? 'Saving...'
              : isEdit
              ? 'Update Itinerary'
              : 'Create Itinerary'}
          </button>
          <button onClick={() => navigate('/admin/itineraries')} className="btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
