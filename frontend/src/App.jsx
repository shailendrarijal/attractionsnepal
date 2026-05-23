import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { APIProvider } from '@vis.gl/react-google-maps'
import { useEffect } from 'react'
import { trackPageView } from './utils/analytics'

import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import PlacePage from './pages/PlacePage'
import CategoryPage from './pages/CategoryPage'
import BlogListPage from './pages/BlogListPage'
import BlogPage from './pages/BlogPage'
import StoryListPage from './pages/StoryListPage'
import StoryPage from './pages/StoryPage'
import ExplorePage from './pages/ExplorePage'
import NotFoundPage from './pages/NotFoundPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import ContactPage from './pages/ContactPage'
import AdminPage from './pages/admin/AdminPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
})

const mapsKey = import.meta.env.VITE_GOOGLE_MAPS_KEY

/** Fires a GA page_view on every SPA route change. */
function GAPageTracker() {
  const location = useLocation()
  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location])
  return null
}

export default function App() {
  const inner = (
    <BrowserRouter>
      <GAPageTracker />
      <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/places/:slug" element={<PlacePage />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/blog" element={<BlogListPage />} />
                <Route path="/blog/:slug" element={<BlogPage />} />
                <Route path="/stories" element={<StoryListPage />} />
                <Route path="/stories/:slug" element={<StoryPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms"   element={<TermsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
              <Route path="/admin/*" element={<AdminPage />} />
            </Routes>
          </BrowserRouter>
  )

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        {mapsKey
          ? <APIProvider apiKey={mapsKey}>{inner}</APIProvider>
          : inner
        }
      </QueryClientProvider>
    </HelmetProvider>
  )
}
