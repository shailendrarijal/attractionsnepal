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
import ItineraryListPage from './pages/ItineraryListPage'
import ItineraryPage from './pages/ItineraryPage'
import TripPlannerPage from './pages/TripPlannerPage'
import AdminPage from './pages/admin/AdminPage'
import VisitNepalPage from './pages/seo/VisitNepalPage'
import TrekkingGuidePage from './pages/seo/TrekkingGuidePage'
import BestTimePage from './pages/seo/BestTimePage'
import NepalVisaGuidePage from './pages/seo/NepalVisaGuidePage'
import NepalTravelCostPage from './pages/seo/NepalTravelCostPage'
import KathmanduToPokharaPage from './pages/seo/KathmanduToPokharaPage'
import NepalPackingListPage from './pages/seo/NepalPackingListPage'

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
                <Route path="/itineraries" element={<ItineraryListPage />} />
                <Route path="/itineraries/:slug" element={<ItineraryPage />} />
                <Route path="/plan-my-trip" element={<TripPlannerPage />} />
                <Route path="/visit-nepal" element={<VisitNepalPage />} />
                <Route path="/nepal-trekking-guide" element={<TrekkingGuidePage />} />
                <Route path="/best-time-to-visit-nepal" element={<BestTimePage />} />
                <Route path="/nepal-visa-guide" element={<NepalVisaGuidePage />} />
                <Route path="/nepal-travel-cost" element={<NepalTravelCostPage />} />
                <Route path="/kathmandu-to-pokhara" element={<KathmanduToPokharaPage />} />
                <Route path="/nepal-packing-list" element={<NepalPackingListPage />} />
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
