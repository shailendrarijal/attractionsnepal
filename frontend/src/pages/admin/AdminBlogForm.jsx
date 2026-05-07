import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'
import {
  adminGetBlog,
  adminCreateBlog,
  adminUpdateBlog,
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
  title: '', excerpt: '', content: '',
  heroImage: '', images: '',
  relatedPlaceSlugs: '',
  seoTitle: '', seoDescription: '',
  published: false,
}

export default function AdminBlogForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = !!id

  const [form, setForm] = useState(EMPTY)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [selectedTags, setSelectedTags] = useState([])

  const { data: blog } = useQuery({
    queryKey: ['admin-blog', id],
    queryFn: () => adminGetBlog(id),
    enabled: isEdit,
  })

  const { data: allTags = [] } = useQuery({
    queryKey: ['tags'],
    queryFn: getTags,
  })

  useEffect(() => {
    if (blog) {
      setForm({
        title: blog.title ?? '',
        excerpt: blog.excerpt ?? '',
        content: blog.content ?? '',
        heroImage: blog.heroImage ?? '',
        images: (blog.images ?? []).join('\n'),
        relatedPlaceSlugs: (blog.relatedPlaceSlugs ?? []).join('\n'),
        seoTitle: blog.seoTitle ?? '',
        seoDescription: blog.seoDescription ?? '',
        published: blog.published ?? false,
      })
      setSelectedTags(blog.tags?.map((t) => t.tag.id) ?? [])
    }
  }, [blog])

  const save = useMutation({
    mutationFn: (data) => isEdit ? adminUpdateBlog(id, data) : adminCreateBlog(data),
    onSuccess: () => navigate('/admin/blogs'),
    onError: (e) => setError(e.response?.data?.error ?? 'Save failed'),
  })

  function set(key, val) {
    setForm((f) => ({ ...f, [key]: val }))
  }

  function buildPayload() {
    return {
      title: form.title,
      excerpt: form.excerpt,
      content: form.content,
      heroImage: form.heroImage || null,
      images: form.images.split('\n').map((s) => s.trim()).filter(Boolean),
      relatedPlaceSlugs: form.relatedPlaceSlugs.split('\n').map((s) => s.trim()).filter(Boolean),
      seoTitle: form.seoTitle || null,
      seoDescription: form.seoDescription || null,
      published: form.published,
      tags: selectedTags,
    }
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

  function toggleTag(id) {
    setSelectedTags((t) =>
      t.includes(id) ? t.filter((x) => x !== id) : [...t, id]
    )
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold text-gray-900">
          {isEdit ? 'Edit Blog Post' : 'New Blog Post'}
        </h1>
        <button onClick={() => navigate('/admin/blogs')} className="btn-secondary">Cancel</button>
      </div>

      {error && (
        <div className="mb-4 rounded-lg bg-red-50 text-red-700 px-4 py-3 text-sm">{error}</div>
      )}

      <div className="space-y-5 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6">
        <Field label="Title *">
          <input value={form.title} onChange={(e) => set('title', e.target.value)} className="input" required />
        </Field>
        <Field label="Excerpt (2–3 lines)">
          <textarea value={form.excerpt} onChange={(e) => set('excerpt', e.target.value)} className="input" rows={3} />
        </Field>
        <Field label="Content (HTML / Markdown)">
          <textarea value={form.content} onChange={(e) => set('content', e.target.value)} className="input font-mono text-xs" rows={16} />
        </Field>

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

        {/* Related places */}
        <Field label="Related Place Slugs (one per line)">
          <textarea
            value={form.relatedPlaceSlugs}
            onChange={(e) => set('relatedPlaceSlugs', e.target.value)}
            className="input font-mono text-xs"
            rows={4}
            placeholder="pashupatinath-temple&#10;boudhanath-stupa"
          />
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
        </div>

        {/* Publishing */}
        <h2 className="font-semibold text-gray-900 border-b pb-2 pt-2">Publishing</h2>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={form.published} onChange={(e) => set('published', e.target.checked)} className="rounded" />
          <span className="text-sm font-medium text-gray-700">Published</span>
        </label>

        <div className="pt-4 flex gap-3">
          <button
            onClick={() => save.mutate(buildPayload())}
            disabled={save.isPending}
            className="btn-primary"
          >
            {save.isPending ? 'Saving...' : isEdit ? 'Update Post' : 'Create Post'}
          </button>
          <button onClick={() => navigate('/admin/blogs')} className="btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  )
}
