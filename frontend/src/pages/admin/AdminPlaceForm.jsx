import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'
import {
  adminGetPlace,
  adminCreatePlace,
  adminUpdatePlace,
  uploadPlaceImage,
  getTags,
} from '../../lib/api'

const CATEGORIES = [
  'TEMPLE','MONASTERY','STUPA','DURBAR_PALACE','ARCHAEOLOGICAL','CULTURAL_VILLAGE',
  'HILL_VIEWPOINT','MOUNTAIN_VIEW','RIVER','WATERFALL','LAKE','HOT_SPRING',
  'CAVE','NATIONAL_PARK','TREK_ROUTE','ADVENTURE_SPORTS','AMUSEMENT_PARK',
]
const PROVINCES = ['KOSHI','MADHESH','BAGMATI','GANDAKI','LUMBINI','KARNALI','SUDURPASHCHIM']
const DIFFICULTIES = ['EASY','MODERATE','HARD','EXTREME']
const SECTION_TYPES = [
  { value: 'TOURS_EXPERIENCES', label: '🎯 Tours & Experiences' },
  { value: 'WHERE_TO_EAT',      label: '🍜 Where to Eat' },
  { value: 'WHERE_TO_STAY',     label: '🏨 Where to Stay' },
  { value: 'TRAVEL_TIPS',       label: '💡 Travel Tips' },
  { value: 'NEARBY_PLACES',     label: '📍 Nearby Places' },
]
const LINK_TYPES = ['affiliate', 'info', 'booking']

function Field({ label, hint, children }) {
  return (
    <div>
      <label className="label">{label}</label>
      {hint && <p className="text-xs text-gray-400 mb-1">{hint}</p>}
      {children}
    </div>
  )
}

function emptySection() {
  return { type: 'TOURS_EXPERIENCES', title: '', content: '', links: [] }
}
function emptyLink() {
  return { label: '', url: '', type: 'affiliate' }
}

function SectionEditor({ section, idx, onChange, onRemove, onMoveUp, onMoveDown, isFirst, isLast }) {
  function setField(key, val) { onChange({ ...section, [key]: val }) }

  function addLink() { onChange({ ...section, links: [...section.links, emptyLink()] }) }
  function removeLink(i) { onChange({ ...section, links: section.links.filter((_, li) => li !== i) }) }
  function setLink(i, key, val) {
    const links = section.links.map((l, li) => li === i ? { ...l, [key]: val } : l)
    onChange({ ...section, links })
  }

  return (
    <div className="border border-gray-200 rounded-xl p-4 space-y-3 bg-white">
      <div className="flex items-center gap-2">
        <select value={section.type} onChange={e => setField('type', e.target.value)} className="input text-sm flex-1">
          {SECTION_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
        <div className="flex gap-1">
          <button type="button" onClick={onMoveUp} disabled={isFirst} className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-30 text-xs">↑</button>
          <button type="button" onClick={onMoveDown} disabled={isLast} className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-30 text-xs">↓</button>
          <button type="button" onClick={onRemove} className="p-1.5 rounded hover:bg-red-50 text-red-500 text-xs ml-1">✕ Remove</button>
        </div>
      </div>

      <input
        value={section.title}
        onChange={e => setField('title', e.target.value)}
        className="input text-sm"
        placeholder="Section title e.g. Best Restaurants Near Bhaktapur"
      />

      <textarea
        value={section.content}
        onChange={e => setField('content', e.target.value)}
        className="input text-sm font-mono"
        rows={4}
        placeholder="Write editorial content in Markdown. E.g. describe the top restaurants, tours, or tips..."
      />

      {/* Links */}
      <div>
        <p className="text-xs font-medium text-gray-600 mb-2">
          Links — for TOURS_EXPERIENCES paste the GYG activity URL; for WHERE_TO_EAT paste a Google Maps link
        </p>
        <div className="space-y-2">
          {section.links.map((link, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input
                value={link.label}
                onChange={e => setLink(i, 'label', e.target.value)}
                className="input text-xs w-36 shrink-0"
                placeholder="Label"
              />
              <input
                value={link.url}
                onChange={e => setLink(i, 'url', e.target.value)}
                className="input text-xs flex-1 font-mono"
                placeholder="https://..."
              />
              <select
                value={link.type}
                onChange={e => setLink(i, 'type', e.target.value)}
                className="input text-xs w-28 shrink-0"
              >
                {LINK_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <button type="button" onClick={() => removeLink(i)} className="text-red-400 hover:text-red-600 shrink-0 text-sm">✕</button>
            </div>
          ))}
        </div>
        <button type="button" onClick={addLink} className="mt-2 text-xs text-primary-700 hover:underline">+ Add link</button>
      </div>
    </div>
  )
}

const EMPTY = {
  name: '', category: 'TEMPLE', summary: '', story: '',
  district: '', province: 'BAGMATI',
  lat: '', lng: '', elevation: '',
  entryFee: '', bestSeason: '', openingHours: '', howToGetThere: '',
  trekDays: '', trekDifficulty: '', trekMaxElevation: '', trekDistance: '',
  trekStartPoint: '', trekEndPoint: '', trekHighlights: '',
  gygQuery: '', bookingCity: '',
  heroImage: '', images: '', youtubeUrl: '',
  seoTitle: '', seoDescription: '',
  published: false, featured: false,
}

export default function AdminPlaceForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = !!id

  const [form, setForm] = useState(EMPTY)
  const [sections, setSections] = useState([])
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [selectedTags, setSelectedTags] = useState([])

  const { data: place } = useQuery({
    queryKey: ['admin-place', id],
    queryFn: () => adminGetPlace(id),
    enabled: isEdit,
  })

  const { data: allTags = [] } = useQuery({
    queryKey: ['tags'],
    queryFn: getTags,
  })

  useEffect(() => {
    if (place) {
      setForm({
        name: place.name ?? '',
        category: place.category ?? 'TEMPLE',
        summary: place.summary ?? '',
        story: place.story ?? '',
        district: place.district ?? '',
        province: place.province ?? 'BAGMATI',
        lat: place.lat ?? '',
        lng: place.lng ?? '',
        elevation: place.elevation ?? '',
        entryFee: place.entryFee ?? '',
        bestSeason: place.bestSeason ?? '',
        openingHours: place.openingHours ?? '',
        howToGetThere: place.howToGetThere ?? '',
        trekDays: place.trekDays ?? '',
        trekDifficulty: place.trekDifficulty ?? '',
        trekMaxElevation: place.trekMaxElevation ?? '',
        trekDistance: place.trekDistance ?? '',
        trekStartPoint: place.trekStartPoint ?? '',
        trekEndPoint: place.trekEndPoint ?? '',
        trekHighlights: (place.trekHighlights ?? []).join('\n'),
        gygQuery: place.gygQuery ?? '',
        bookingCity: place.bookingCity ?? '',
        heroImage: place.heroImage ?? '',
        images: (place.images ?? []).join('\n'),
        youtubeUrl: place.youtubeUrl ?? '',
        seoTitle: place.seoTitle ?? '',
        seoDescription: place.seoDescription ?? '',
        published: place.published ?? false,
        featured: place.featured ?? false,
      })
      setSelectedTags(place.tags?.map((t) => t.tag.id) ?? [])
      setSections(
        [...(place.sections ?? [])]
          .sort((a, b) => a.order - b.order)
          .map(s => ({ type: s.type, title: s.title, content: s.content, links: s.links ?? [] }))
      )
    }
  }, [place])

  const save = useMutation({
    mutationFn: (data) => isEdit ? adminUpdatePlace(id, data) : adminCreatePlace(data),
    onSuccess: () => navigate('/admin/places'),
    onError: (e) => setError(e.response?.data?.error ?? 'Save failed'),
  })

  function set(key, val) {
    setForm((f) => ({ ...f, [key]: val }))
  }

  function buildPayload() {
    return {
      name: form.name,
      category: form.category,
      summary: form.summary,
      story: form.story,
      district: form.district,
      province: form.province,
      lat: form.lat ? parseFloat(form.lat) : null,
      lng: form.lng ? parseFloat(form.lng) : null,
      elevation: form.elevation ? parseInt(form.elevation) : null,
      entryFee: form.entryFee || null,
      bestSeason: form.bestSeason || null,
      openingHours: form.openingHours || null,
      howToGetThere: form.howToGetThere || null,
      trekDays: form.trekDays ? parseInt(form.trekDays) : null,
      trekDifficulty: form.trekDifficulty || null,
      trekMaxElevation: form.trekMaxElevation ? parseInt(form.trekMaxElevation) : null,
      trekDistance: form.trekDistance ? parseFloat(form.trekDistance) : null,
      trekStartPoint: form.trekStartPoint || null,
      trekEndPoint: form.trekEndPoint || null,
      trekHighlights: form.trekHighlights
        ? form.trekHighlights.split('\n').map((s) => s.trim()).filter(Boolean)
        : [],
      gygQuery: form.gygQuery || null,
      bookingCity: form.bookingCity || null,
      heroImage: form.heroImage || null,
      images: form.images
        ? form.images.split('\n').map((s) => s.trim()).filter(Boolean)
        : [],
      youtubeUrl: form.youtubeUrl || null,
      seoTitle: form.seoTitle || null,
      seoDescription: form.seoDescription || null,
      published: form.published,
      featured: form.featured,
      tags: selectedTags,
      sections: sections.map((s, i) => ({
        type: s.type,
        title: s.title,
        content: s.content,
        links: s.links,
        order: i,
      })),
    }
  }

  function addSection() { setSections(s => [...s, emptySection()]) }
  function removeSection(i) { setSections(s => s.filter((_, si) => si !== i)) }
  function updateSection(i, updated) { setSections(s => s.map((sec, si) => si === i ? updated : sec)) }
  function moveSection(i, dir) {
    setSections(s => {
      const next = [...s]
      const swap = i + dir
      if (swap < 0 || swap >= next.length) return s;
      [next[i], next[swap]] = [next[swap], next[i]]
      return next
    })
  }

  async function handleHeroUpload(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    try {
      const { url } = await uploadPlaceImage(file)
      set('heroImage', url)
    } catch {
      setError('Image upload failed')
    } finally {
      setUploading(false)
    }
  }

  function toggleTag(id) {
    setSelectedTags((t) =>
      t.includes(id) ? t.filter((x) => x !== id) : [...t, id]
    )
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold text-gray-900">
          {isEdit ? 'Edit Place' : 'Add Place'}
        </h1>
        <button onClick={() => navigate('/admin/places')} className="btn-secondary">Cancel</button>
      </div>

      {error && (
        <div className="mb-4 rounded-lg bg-red-50 text-red-700 px-4 py-3 text-sm">{error}</div>
      )}

      <div className="space-y-5 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6">
        {/* Basic */}
        <h2 className="font-semibold text-gray-900 border-b pb-2">Basic Info</h2>
        <Field label="Name *">
          <input value={form.name} onChange={(e) => set('name', e.target.value)} className="input" required />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Category">
            <select value={form.category} onChange={(e) => set('category', e.target.value)} className="input">
              {CATEGORIES.map((c) => <option key={c} value={c}>{c.replace(/_/g, ' ')}</option>)}
            </select>
          </Field>
          <Field label="Province">
            <select value={form.province} onChange={(e) => set('province', e.target.value)} className="input">
              {PROVINCES.map((p) => <option key={p} value={p}>{p.replace('_', ' ')}</option>)}
            </select>
          </Field>
        </div>
        <Field label="District">
          <input value={form.district} onChange={(e) => set('district', e.target.value)} className="input" />
        </Field>
        <Field label="Summary (2–3 lines, used in cards)">
          <textarea value={form.summary} onChange={(e) => set('summary', e.target.value)} className="input" rows={3} />
        </Field>
        <Field label="Story (HTML / Markdown)">
          <textarea value={form.story} onChange={(e) => set('story', e.target.value)} className="input font-mono text-xs" rows={10} />
        </Field>

        {/* Location */}
        <h2 className="font-semibold text-gray-900 border-b pb-2 pt-2">Location</h2>
        <div className="grid grid-cols-3 gap-4">
          <Field label="Latitude"><input type="number" step="any" value={form.lat} onChange={(e) => set('lat', e.target.value)} className="input" /></Field>
          <Field label="Longitude"><input type="number" step="any" value={form.lng} onChange={(e) => set('lng', e.target.value)} className="input" /></Field>
          <Field label="Elevation (m)"><input type="number" value={form.elevation} onChange={(e) => set('elevation', e.target.value)} className="input" /></Field>
        </div>

        {/* Practical */}
        <h2 className="font-semibold text-gray-900 border-b pb-2 pt-2">Practical Info</h2>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Entry Fee"><input value={form.entryFee} onChange={(e) => set('entryFee', e.target.value)} className="input" placeholder="Free / NPR 100" /></Field>
          <Field label="Best Season"><input value={form.bestSeason} onChange={(e) => set('bestSeason', e.target.value)} className="input" placeholder="Oct–Apr" /></Field>
        </div>
        <Field label="Opening Hours"><input value={form.openingHours} onChange={(e) => set('openingHours', e.target.value)} className="input" /></Field>
        <Field label="How to Get There">
          <textarea value={form.howToGetThere} onChange={(e) => set('howToGetThere', e.target.value)} className="input" rows={3} />
        </Field>

        {/* Trek */}
        <h2 className="font-semibold text-gray-900 border-b pb-2 pt-2">Trek Info (optional)</h2>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Days"><input type="number" value={form.trekDays} onChange={(e) => set('trekDays', e.target.value)} className="input" /></Field>
          <Field label="Difficulty">
            <select value={form.trekDifficulty} onChange={(e) => set('trekDifficulty', e.target.value)} className="input">
              <option value="">—</option>
              {DIFFICULTIES.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </Field>
          <Field label="Max Elevation (m)"><input type="number" value={form.trekMaxElevation} onChange={(e) => set('trekMaxElevation', e.target.value)} className="input" /></Field>
          <Field label="Distance (km)"><input type="number" step="0.1" value={form.trekDistance} onChange={(e) => set('trekDistance', e.target.value)} className="input" /></Field>
          <Field label="Start Point"><input value={form.trekStartPoint} onChange={(e) => set('trekStartPoint', e.target.value)} className="input" /></Field>
          <Field label="End Point"><input value={form.trekEndPoint} onChange={(e) => set('trekEndPoint', e.target.value)} className="input" /></Field>
        </div>
        <Field label="Highlights (one per line)">
          <textarea value={form.trekHighlights} onChange={(e) => set('trekHighlights', e.target.value)} className="input" rows={4} placeholder="Poon Hill sunrise&#10;Annapurna Base Camp" />
        </Field>

        {/* Monetisation */}
        <h2 className="font-semibold text-gray-900 border-b pb-2 pt-2">Monetisation</h2>
        <div className="grid grid-cols-2 gap-4">
          <Field label="GetYourGuide Query"><input value={form.gygQuery} onChange={(e) => set('gygQuery', e.target.value)} className="input" placeholder="Pashupatinath Temple" /></Field>
          <Field label="Booking.com City"><input value={form.bookingCity} onChange={(e) => set('bookingCity', e.target.value)} className="input" placeholder="Kathmandu" /></Field>
        </div>

        {/* Media */}
        <h2 className="font-semibold text-gray-900 border-b pb-2 pt-2">Media</h2>
        <Field label="Hero Image">
          <div className="flex gap-3 items-start">
            {form.heroImage && (
              <img src={form.heroImage} alt="hero" className="w-20 h-14 object-cover rounded-lg" />
            )}
            <div className="flex-1">
              <input value={form.heroImage} onChange={(e) => set('heroImage', e.target.value)} className="input mb-2" placeholder="https://..." />
              <label className="btn-secondary cursor-pointer text-xs">
                {uploading ? 'Uploading...' : 'Upload image'}
                <input type="file" accept="image/*" className="sr-only" onChange={handleHeroUpload} disabled={uploading} />
              </label>
            </div>
          </div>
        </Field>
        <Field label="Gallery Images (one URL per line)">
          <textarea value={form.images} onChange={(e) => set('images', e.target.value)} className="input font-mono text-xs" rows={4} placeholder="https://..." />
        </Field>
        <Field label="YouTube Video URL">
          <input
            value={form.youtubeUrl ?? ''}
            onChange={(e) => set('youtubeUrl', e.target.value)}
            className="input"
            placeholder="https://www.youtube.com/watch?v=..."
          />
          <p className="text-xs text-gray-400 mt-1">Paste a YouTube URL to show a video preview on the place page.</p>
        </Field>

        {/* SEO */}
        <h2 className="font-semibold text-gray-900 border-b pb-2 pt-2">SEO</h2>
        <Field label="SEO Title"><input value={form.seoTitle} onChange={(e) => set('seoTitle', e.target.value)} className="input" /></Field>
        <Field label="SEO Description"><textarea value={form.seoDescription} onChange={(e) => set('seoDescription', e.target.value)} className="input" rows={2} /></Field>

        {/* Tags */}
        <h2 className="font-semibold text-gray-900 border-b pb-2 pt-2">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag.id}
              type="button"
              onClick={() => toggleTag(tag.id)}
              className={`badge cursor-pointer select-none transition-colors ${selectedTags.includes(tag.id) ? 'bg-primary-100 text-primary-800 ring-1 ring-primary-400' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {tag.name}
            </button>
          ))}
          {!allTags.length && <p className="text-sm text-gray-400">No tags yet. Create them via the API.</p>}
        </div>

        {/* Content Sections */}
        <h2 className="font-semibold text-gray-900 border-b pb-2 pt-2">Content Sections</h2>
        <p className="text-xs text-gray-500 -mt-2">
          Add curated blocks that appear on the place page — tours, where to eat, travel tips, etc.
          For GYG activities: find the activity on getyourguide.com, copy its URL, add <code className="bg-gray-100 px-1 rounded">?partner_id=YOUR_ID</code> to the end, set type to <em>affiliate</em>.
        </p>
        <div className="space-y-3">
          {sections.map((sec, idx) => (
            <SectionEditor
              key={idx}
              idx={idx}
              section={sec}
              onChange={(updated) => updateSection(idx, updated)}
              onRemove={() => removeSection(idx)}
              onMoveUp={() => moveSection(idx, -1)}
              onMoveDown={() => moveSection(idx, 1)}
              isFirst={idx === 0}
              isLast={idx === sections.length - 1}
            />
          ))}
          <button type="button" onClick={addSection} className="btn-secondary text-sm w-full">
            + Add Section
          </button>
        </div>

        {/* Publishing */}
        <h2 className="font-semibold text-gray-900 border-b pb-2 pt-2">Publishing</h2>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.published} onChange={(e) => set('published', e.target.checked)} className="rounded" />
            <span className="text-sm font-medium text-gray-700">Published</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.featured} onChange={(e) => set('featured', e.target.checked)} className="rounded" />
            <span className="text-sm font-medium text-gray-700">Featured</span>
          </label>
        </div>

        <div className="pt-4 flex gap-3">
          <button
            onClick={() => save.mutate(buildPayload())}
            disabled={save.isPending}
            className="btn-primary"
          >
            {save.isPending ? 'Saving...' : isEdit ? 'Update Place' : 'Create Place'}
          </button>
          <button onClick={() => navigate('/admin/places')} className="btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  )
}
