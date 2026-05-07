import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { APIProvider } from '@vis.gl/react-google-maps'

import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import PlacePage from './pages/PlacePage'
import CategoryPage from './pages/CategoryPage'
import BlogListPage from './pages/BlogListPage'
import BlogPage from './pages/BlogPage'
import ExplorePage from './pages/ExplorePage'
import NotFoundPage from './pages/NotFoundPage'
import AdminPage from './pages/admin/AdminPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 min
      retry: 1,
    },
  },
})

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
          <BrowserRouter>
            <Routes>
              {/* Public */}
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/places/:slug" element={<PlacePage />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/blog" element={<BlogListPage />} />
                <Route path="/blog/:slug" element={<BlogPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>

              {/* Admin — no nav wrapper */}
              <Route path="/admin/*" element={<AdminPage />} />
            </Routes>
          </BrowserRouter>
        </APIProvider>
      </QueryClientProvider>
    </HelmetProvider>
  )
}
