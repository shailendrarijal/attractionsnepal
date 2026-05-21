import { useState, useEffect } from 'react'
import { Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom'
import { login } from '../../lib/api'
import AdminPlaces from './AdminPlaces'
import AdminBlogs from './AdminBlogs'
import AdminStories from './AdminStories'
import AdminPlaceForm from './AdminPlaceForm'
import AdminBlogForm from './AdminBlogForm'
import AdminStoryForm from './AdminStoryForm'

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { token } = await login(email, password)
      localStorage.setItem('an_token', token)
      onLogin()
    } catch {
      setError('Invalid credentials')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="text-4xl">🏔️</span>
          <h1 className="mt-3 font-display text-2xl font-bold text-gray-900">AttractionsNepal Admin</h1>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-8 space-y-5">
          {error && (
            <div className="rounded-lg bg-red-50 text-red-700 px-4 py-3 text-sm">{error}</div>
          )}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              required
            />
          </div>
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
        <p className="text-center mt-4">
          <Link to="/" className="text-sm text-gray-500 hover:text-primary-700">← Back to site</Link>
        </p>
      </div>
    </div>
  )
}

function AdminLayout({ onLogout }) {
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem('an_token')
    onLogout()
    navigate('/admin')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-gray-900 text-gray-300 flex flex-col shrink-0">
        <div className="p-5 border-b border-gray-800">
          <Link to="/" className="flex items-center gap-2 text-white font-bold">
            <span className="text-xl">🏔️</span>
            <span className="text-sm">AttractionsNepal</span>
          </Link>
          <p className="text-xs text-gray-500 mt-1">Admin Panel</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          <NavLink
            to="/admin/places"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${isActive ? 'bg-primary-700 text-white' : 'hover:bg-gray-800'}`
            }
          >
            📍 Places
          </NavLink>
          <NavLink
            to="/admin/blogs"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${isActive ? 'bg-primary-700 text-white' : 'hover:bg-gray-800'}`
            }
          >
            📝 Blog Posts
          </NavLink>
          <NavLink
            to="/admin/stories"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${isActive ? 'bg-primary-700 text-white' : 'hover:bg-gray-800'}`
            }
          >
            📖 Stories
          </NavLink>
          <Link
            to="/"
            target="_blank"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors"
          >
            🌐 View Site
          </Link>
        </nav>
        <div className="p-3 border-t border-gray-800">
          <button
            onClick={logout}
            className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
          >
            🚪 Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="places" element={<AdminPlaces />} />
          <Route path="places/new" element={<AdminPlaceForm />} />
          <Route path="places/:id/edit" element={<AdminPlaceForm />} />
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="blogs/new" element={<AdminBlogForm />} />
          <Route path="blogs/:id/edit" element={<AdminBlogForm />} />
          <Route path="stories" element={<AdminStories />} />
          <Route path="stories/new" element={<AdminStoryForm />} />
          <Route path="stories/:id/edit" element={<AdminStoryForm />} />
        </Routes>
      </main>
    </div>
  )
}

function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="font-display text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          to="/admin/places/new"
          className="card p-6 hover:shadow-md transition-shadow text-center"
        >
          <p className="text-4xl mb-3">📍</p>
          <h2 className="font-semibold text-gray-900">Add a Place</h2>
          <p className="text-sm text-gray-500 mt-1">Create a new attraction listing</p>
        </Link>
        <Link
          to="/admin/blogs/new"
          className="card p-6 hover:shadow-md transition-shadow text-center"
        >
          <p className="text-4xl mb-3">📝</p>
          <h2 className="font-semibold text-gray-900">Write a Blog Post</h2>
          <p className="text-sm text-gray-500 mt-1">Publish a new travel article</p>
        </Link>
        <Link
          to="/admin/stories/new"
          className="card p-6 hover:shadow-md transition-shadow text-center"
        >
          <p className="text-4xl mb-3">📖</p>
          <h2 className="font-semibold text-gray-900">Add a Story</h2>
          <p className="text-sm text-gray-500 mt-1">Publish a myth, festival legend, or tradition</p>
        </Link>
      </div>
    </div>
  )
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(!!localStorage.getItem('an_token'))

  if (!authed) {
    return <LoginPage onLogin={() => setAuthed(true)} />
  }

  return <AdminLayout onLogout={() => setAuthed(false)} />
}
