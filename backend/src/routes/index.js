import { Router } from 'express'
import authRoutes from './auth.js'
import placesRoutes from './places.js'
import blogsRoutes from './blogs.js'
import tagsRoutes from './tags.js'
import adminRoutes from './admin.js'
import uploadRoutes from './upload.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/places', placesRoutes)
router.use('/blogs', blogsRoutes)
router.use('/tags', tagsRoutes)
router.use('/admin', adminRoutes)
router.use('/upload', uploadRoutes)

export default router
