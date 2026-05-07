import { Router } from 'express'
import { requireAuth } from '../middleware/auth.js'
import { uploadSingle, uploadMultiple } from '../middleware/upload.js'
import {
  uploadFile,
  deleteFile,
  PLACE_IMAGES_BUCKET,
  BLOG_IMAGES_BUCKET,
} from '../lib/supabase.js'
import { randomUUID } from 'crypto'

const router = Router()
router.use(requireAuth)

function ext(mimetype) {
  const map = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif' }
  return map[mimetype] ?? 'jpg'
}

// POST /api/upload/place-image — single hero or gallery image
router.post('/place-image', (req, res) => {
  uploadSingle(req, res, async (err) => {
    if (err) return res.status(400).json({ error: err.message })
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' })

    const path = `places/${randomUUID()}.${ext(req.file.mimetype)}`
    const url = await uploadFile(PLACE_IMAGES_BUCKET, path, req.file.buffer, req.file.mimetype)
    res.json({ url, path })
  })
})

// POST /api/upload/place-images — bulk gallery
router.post('/place-images', (req, res) => {
  uploadMultiple(req, res, async (err) => {
    if (err) return res.status(400).json({ error: err.message })
    if (!req.files?.length) return res.status(400).json({ error: 'No files uploaded' })

    const results = await Promise.all(
      req.files.map(async (f) => {
        const path = `places/${randomUUID()}.${ext(f.mimetype)}`
        const url = await uploadFile(PLACE_IMAGES_BUCKET, path, f.buffer, f.mimetype)
        return { url, path }
      })
    )
    res.json(results)
  })
})

// POST /api/upload/blog-image
router.post('/blog-image', (req, res) => {
  uploadSingle(req, res, async (err) => {
    if (err) return res.status(400).json({ error: err.message })
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' })

    const path = `blogs/${randomUUID()}.${ext(req.file.mimetype)}`
    const url = await uploadFile(BLOG_IMAGES_BUCKET, path, req.file.buffer, req.file.mimetype)
    res.json({ url, path })
  })
})

// DELETE /api/upload — by path
router.delete('/', async (req, res) => {
  try {
    const { bucket, path } = req.body
    if (!bucket || !path) return res.status(400).json({ error: 'bucket and path required' })
    await deleteFile(bucket, path)
    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to delete file' })
  }
})

export default router
