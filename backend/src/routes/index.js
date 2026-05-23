import { Router } from 'express'
import authRoutes from './auth.js'
import placesRoutes from './places.js'
import blogsRoutes from './blogs.js'
import storiesRoutes from './stories.js'
import tagsRoutes from './tags.js'
import adminRoutes from './admin.js'
import uploadRoutes from './upload.js'
import newsletterRoutes from './newsletter.js'
import contactRoutes from './contact.js'
import itinerariesRoutes from './itineraries.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/places', placesRoutes)
router.use('/blogs', blogsRoutes)
router.use('/stories', storiesRoutes)
router.use('/tags', tagsRoutes)
router.use('/admin', adminRoutes)
router.use('/upload', uploadRoutes)
router.use('/newsletter', newsletterRoutes)
router.use('/contact', contactRoutes)
router.use('/itineraries', itinerariesRoutes)

export default router
