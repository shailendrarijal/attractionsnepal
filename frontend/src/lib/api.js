import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/api',
})

// Attach JWT for admin requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('an_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (r) => r,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('an_token')
    }
    return Promise.reject(err)
  }
)

export default api

// ── Public helpers ─────────────────────────────────────────────────────────

export const getPlaces = (params) => api.get('/places', { params }).then((r) => r.data)
export const getPlace  = (slug)   => api.get(`/places/${slug}`).then((r) => r.data)

export const getBlogs  = (params) => api.get('/blogs', { params }).then((r) => r.data)
export const getBlog   = (slug)   => api.get(`/blogs/${slug}`).then((r) => r.data)

export const getTags   = ()       => api.get('/tags').then((r) => r.data)

export const getStories = (params) => api.get('/stories', { params }).then((r) => r.data)
export const getStory   = (slug)   => api.get(`/stories/${slug}`).then((r) => r.data)

// ── Auth ───────────────────────────────────────────────────────────────────

export const login = (email, password) =>
  api.post('/auth/login', { email, password }).then((r) => r.data)

// ── Admin helpers ──────────────────────────────────────────────────────────

export const adminGetPlaces  = (p) => api.get('/admin/places', { params: p }).then((r) => r.data)
export const adminGetPlace   = (id) => api.get(`/admin/places/${id}`).then((r) => r.data)
export const adminCreatePlace = (d) => api.post('/admin/places', d).then((r) => r.data)
export const adminUpdatePlace = (id, d) => api.put(`/admin/places/${id}`, d).then((r) => r.data)
export const adminDeletePlace = (id) => api.delete(`/admin/places/${id}`).then((r) => r.data)

export const adminGetBlogs   = (p) => api.get('/admin/blogs', { params: p }).then((r) => r.data)
export const adminGetBlog    = (id) => api.get(`/admin/blogs/${id}`).then((r) => r.data)
export const adminCreateBlog = (d) => api.post('/admin/blogs', d).then((r) => r.data)
export const adminUpdateBlog = (id, d) => api.put(`/admin/blogs/${id}`, d).then((r) => r.data)
export const adminDeleteBlog = (id) => api.delete(`/admin/blogs/${id}`).then((r) => r.data)

export const adminCreateTag  = (name) => api.post('/admin/tags', { name }).then((r) => r.data)
export const adminDeleteTag  = (id)   => api.delete(`/admin/tags/${id}`).then((r) => r.data)

export const adminGetStories   = (p)     => api.get('/admin/stories', { params: p }).then((r) => r.data)
export const adminGetStory     = (id)    => api.get(`/admin/stories/${id}`).then((r) => r.data)
export const adminCreateStory  = (d)     => api.post('/admin/stories', d).then((r) => r.data)
export const adminUpdateStory  = (id, d) => api.put(`/admin/stories/${id}`, d).then((r) => r.data)
export const adminDeleteStory  = (id)    => api.delete(`/admin/stories/${id}`).then((r) => r.data)

export const uploadStoryImage  = (file) => {
  const fd = new FormData()
  fd.append('image', file)
  return api.post('/upload/blog-image', fd).then((r) => r.data)
}

export const uploadPlaceImage  = (file) => {
  const fd = new FormData()
  fd.append('image', file)
  return api.post('/upload/place-image', fd).then((r) => r.data)
}

export const uploadBlogImage   = (file) => {
  const fd = new FormData()
  fd.append('image', file)
  return api.post('/upload/blog-image', fd).then((r) => r.data)
}

// ── Newsletter ─────────────────────────────────────────────────────────────

export const subscribeNewsletter = (email) =>
  api.post('/newsletter/subscribe', { email }).then((r) => r.data)

// ── Contact ────────────────────────────────────────────────────────────────

export const sendContactMessage = (payload) =>
  api.post('/contact', payload).then((r) => r.data)

// ── Itineraries ────────────────────────────────────────────────────────────

export const getItineraries = (params) => api.get('/itineraries', { params }).then((r) => r.data)
export const getItinerary   = (slug)   => api.get(`/itineraries/${slug}`).then((r) => r.data)
