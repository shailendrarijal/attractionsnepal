import { useState, useEffect } from 'react'
import {
  adminGetAmazonProducts,
  adminCreateAmazonProduct,
  adminUpdateAmazonProduct,
  adminDeleteAmazonProduct,
} from '../../lib/api'

const EMPTY_PRODUCT = { name: '', icon: '', note: '', url: '' }

function ProductRow({ product, onChange, onDelete }) {
  return (
    <div className="grid grid-cols-12 gap-2 items-start py-2 border-b border-gray-100 last:border-0">
      <input
        className="col-span-1 input text-center text-lg px-1"
        value={product.icon}
        onChange={(e) => onChange({ ...product, icon: e.target.value })}
        placeholder="🎒"
        title="Emoji icon"
      />
      <input
        className="col-span-3 input"
        value={product.name}
        onChange={(e) => onChange({ ...product, name: e.target.value })}
        placeholder="Product name"
      />
      <input
        className="col-span-3 input"
        value={product.note}
        onChange={(e) => onChange({ ...product, note: e.target.value })}
        placeholder="Short note (optional)"
      />
      <input
        className="col-span-4 input text-xs"
        value={product.url}
        onChange={(e) => onChange({ ...product, url: e.target.value })}
        placeholder="Amazon URL"
      />
      <button
        onClick={onDelete}
        className="col-span-1 text-red-400 hover:text-red-600 text-lg leading-none pt-2 transition-colors"
        title="Remove product"
      >
        ×
      </button>
    </div>
  )
}

function GroupEditor({ group, onSaved, onDeleted }) {
  const [title, setTitle]       = useState(group.title)
  const [products, setProducts] = useState(Array.isArray(group.products) ? group.products : [])
  const [active, setActive]     = useState(group.active)
  const [saving, setSaving]     = useState(false)
  const [status, setStatus]     = useState('')

  function updateProduct(idx, updated) {
    setProducts((p) => p.map((item, i) => (i === idx ? updated : item)))
  }

  function removeProduct(idx) {
    setProducts((p) => p.filter((_, i) => i !== idx))
  }

  function addProduct() {
    setProducts((p) => [...p, { ...EMPTY_PRODUCT }])
  }

  async function save() {
    setSaving(true)
    setStatus('')
    try {
      const updated = await adminUpdateAmazonProduct(group.id, { title, products, active })
      onSaved(updated)
      setStatus('Saved!')
      setTimeout(() => setStatus(''), 2000)
    } catch {
      setStatus('Save failed')
    } finally {
      setSaving(false)
    }
  }

  async function deleteGroup() {
    if (!confirm(`Delete the "${group.context}" group? This cannot be undone.`)) return
    try {
      await adminDeleteAmazonProduct(group.id)
      onDeleted(group.id)
    } catch {
      alert('Delete failed')
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-orange-50 border-b border-orange-100 px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold bg-orange-200 text-orange-900 px-2 py-0.5 rounded">
            {group.context}
          </span>
          <input
            className="font-display font-bold text-gray-900 bg-transparent border-b-2 border-transparent focus:border-orange-400 outline-none text-lg w-72"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
              className="rounded"
            />
            <span className="text-gray-600">Active</span>
          </label>
          <button
            onClick={deleteGroup}
            className="text-xs text-red-400 hover:text-red-600 transition-colors"
          >
            Delete group
          </button>
        </div>
      </div>

      {/* Products list */}
      <div className="px-6 py-4">
        {/* Column headers */}
        <div className="grid grid-cols-12 gap-2 mb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          <span className="col-span-1">Icon</span>
          <span className="col-span-3">Name</span>
          <span className="col-span-3">Note</span>
          <span className="col-span-4">Amazon URL</span>
          <span className="col-span-1"></span>
        </div>

        {products.length === 0 && (
          <p className="text-sm text-gray-400 py-4 text-center">No products yet. Add one below.</p>
        )}

        {products.map((product, idx) => (
          <ProductRow
            key={idx}
            product={product}
            onChange={(updated) => updateProduct(idx, updated)}
            onDelete={() => removeProduct(idx)}
          />
        ))}

        <button
          onClick={addProduct}
          className="mt-3 text-sm font-medium text-orange-600 hover:text-orange-800 transition-colors flex items-center gap-1"
        >
          + Add product
        </button>
      </div>

      {/* Footer / Save */}
      <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
        <p className="text-xs text-gray-400">
          {products.length} product{products.length !== 1 ? 's' : ''}
        </p>
        <div className="flex items-center gap-3">
          {status && (
            <span className={`text-sm ${status === 'Saved!' ? 'text-green-600' : 'text-red-500'}`}>
              {status}
            </span>
          )}
          <button
            onClick={save}
            disabled={saving}
            className="btn-primary py-2 px-5 text-sm disabled:opacity-50"
          >
            {saving ? 'Saving…' : 'Save changes'}
          </button>
        </div>
      </div>
    </div>
  )
}

function NewGroupModal({ onCreated, onClose }) {
  const [context, setContext] = useState('')
  const [title, setTitle]     = useState('')
  const [saving, setSaving]   = useState(false)
  const [error, setError]     = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!context.trim() || !title.trim()) return
    setSaving(true)
    setError('')
    try {
      const group = await adminCreateAmazonProduct({
        context: context.trim().toUpperCase(),
        title: title.trim(),
        products: [],
      })
      onCreated(group)
    } catch (err) {
      setError(err?.response?.data?.error ?? 'Failed to create group')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gray-900/50" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
        <h2 className="font-display font-bold text-lg text-gray-900 mb-4">New Product Group</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">Context key <span className="text-gray-400 font-normal">(used in code)</span></label>
            <input
              className="input"
              value={context}
              onChange={(e) => setContext(e.target.value.toUpperCase().replace(/[^A-Z_]/g, ''))}
              placeholder="e.g. CAMPING or PHOTOGRAPHY"
              required
            />
            <p className="text-xs text-gray-400 mt-1">
              Uppercase letters and underscores only. Used to link this group to a page.
            </p>
          </div>
          <div>
            <label className="label">Display title</label>
            <input
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Photography Gear for Nepal"
              required
            />
          </div>
          {error && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="btn-secondary flex-1 justify-center">
              Cancel
            </button>
            <button type="submit" disabled={saving} className="btn-primary flex-1 justify-center disabled:opacity-50">
              {saving ? 'Creating…' : 'Create group'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function AdminAmazonProducts() {
  const [groups, setGroups]     = useState([])
  const [loading, setLoading]   = useState(true)
  const [showNew, setShowNew]   = useState(false)

  useEffect(() => {
    adminGetAmazonProducts()
      .then(setGroups)
      .finally(() => setLoading(false))
  }, [])

  function handleSaved(updated) {
    setGroups((g) => g.map((grp) => (grp.id === updated.id ? updated : grp)))
  }

  function handleDeleted(id) {
    setGroups((g) => g.filter((grp) => grp.id !== id))
  }

  function handleCreated(group) {
    setGroups((g) => [...g, group])
    setShowNew(false)
  }

  return (
    <div className="p-8 max-w-5xl">
      {showNew && (
        <NewGroupModal onCreated={handleCreated} onClose={() => setShowNew(false)} />
      )}

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-gray-900">Amazon Product Groups</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Edit the product recommendations shown across the site. Changes go live immediately.
          </p>
        </div>
        <button onClick={() => setShowNew(true)} className="btn-primary">
          + New group
        </button>
      </div>

      {/* Context legend */}
      <div className="mb-6 rounded-2xl bg-amber-50 border border-amber-100 p-4 text-sm text-amber-800">
        <p className="font-semibold mb-2">Which context appears where:</p>
        <ul className="space-y-1 text-xs">
          <li><code className="bg-amber-100 px-1 rounded">TREKKING</code> — Trek Route / Adventure places, Trekking itineraries, Packing List page, Trekking Guide page</li>
          <li><code className="bg-amber-100 px-1 rounded">WILDLIFE</code> — National Park places</li>
          <li><code className="bg-amber-100 px-1 rounded">GENERAL</code> — Non-trekking itineraries, Packing List page (travel accessories section)</li>
        </ul>
      </div>

      {loading && (
        <div className="text-center py-16 text-gray-400">Loading…</div>
      )}

      {!loading && groups.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          No product groups yet. Click "+ New group" to create one.
        </div>
      )}

      <div className="space-y-6">
        {groups.map((group) => (
          <GroupEditor
            key={group.id}
            group={group}
            onSaved={handleSaved}
            onDeleted={handleDeleted}
          />
        ))}
      </div>
    </div>
  )
}
