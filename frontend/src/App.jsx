import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { useEffect, lazy, Suspense } from 'react'
import { trackPageView } from './utils/analytics'

import Layout from './components/Layout/Layout'
import LoadingSpinner from './components/LoadingSpinner'

// ── Eagerly loaded — tiny, always needed ─────────────────────────────────────
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

// ── Lazy loaded — split into separate chunks ──────────────────────────────────
const PlacePage          = lazy(() => import('./pages/PlacePage'))
const CategoryPage       = lazy(() => import('./pages/CategoryPage'))
const BlogListPage       = lazy(() => import('./pages/BlogListPage'))
const BlogPage           = lazy(() => import('./pages/BlogPage'))
const StoryListPage      = lazy(() => import('./pages/StoryListPage'))
const StoryPage          = lazy(() => import('./pages/StoryPage'))
const ExplorePage        = lazy(() => import('./pages/ExplorePage'))
const PrivacyPage        = lazy(() => import('./pages/PrivacyPage'))
const TermsPage          = lazy(() => import('./pages/TermsPage'))
const ContactPage        = lazy(() => import('./pages/ContactPage'))
const AboutPage          = lazy(() => import('./pages/AboutPage'))
const ItineraryListPage  = lazy(() => import('./pages/ItineraryListPage'))
const ItineraryPage      = lazy(() => import('./pages/ItineraryPage'))
const TripPlannerPage    = lazy(() => import('./pages/TripPlannerPage'))
const AdminPage          = lazy(() => import('./pages/admin/AdminPage'))

// SEO pages — lazy loaded, each is independent content
const VisitNepalPage           = lazy(() => import('./pages/seo/VisitNepalPage'))
const TrekkingGuidePage        = lazy(() => import('./pages/seo/TrekkingGuidePage'))
const BestTimePage             = lazy(() => import('./pages/seo/BestTimePage'))
const NepalVisaGuidePage       = lazy(() => import('./pages/seo/NepalVisaGuidePage'))
const NepalTravelCostPage      = lazy(() => import('./pages/seo/NepalTravelCostPage'))
const KathmanduToPokharaPage   = lazy(() => import('./pages/seo/KathmanduToPokharaPage'))
const NepalPackingListPage     = lazy(() => import('./pages/seo/NepalPackingListPage'))
const KathmanduThingsToDoPage  = lazy(() => import('./pages/seo/KathmanduThingsToDoPage'))
const EverestBaseCampPage      = lazy(() => import('./pages/seo/EverestBaseCampPage'))
const AnnapurnaCircuitPage     = lazy(() => import('./pages/seo/AnnapurnaCircuitPage'))
const PokharaGuidePage         = lazy(() => import('./pages/seo/PokharaGuidePage'))
const ChitwanGuidePage         = lazy(() => import('./pages/seo/ChitwanGuidePage'))
const TrekkingPermitsPage      = lazy(() => import('./pages/seo/TrekkingPermitsPage'))
const LumbiniGuidePage         = lazy(() => import('./pages/seo/LumbiniGuidePage'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
})

/** Fires a GA page_view on every SPA route change. */
function GAPageTracker() {
  const location = useLocation()
  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location])
  return null
}

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GAPageTracker />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/"          element={<HomePage />} />
                <Route path="/explore"   element={<ExplorePage />} />
                <Route path="/places/:slug"        element={<PlacePage />} />
                <Route path="/category/:category"  element={<CategoryPage />} />
                <Route path="/blog"                element={<BlogListPage />} />
                <Route path="/blog/:slug"          element={<BlogPage />} />
                <Route path="/stories"             element={<StoryListPage />} />
                <Route path="/stories/:slug"       element={<StoryPage />} />
                <Route path="/privacy"             element={<PrivacyPage />} />
                <Route path="/terms"               element={<TermsPage />} />
                <Route path="/contact"             element={<ContactPage />} />
                <Route path="/about"               element={<AboutPage />} />
                <Route path="/itineraries"         element={<ItineraryListPage />} />
                <Route path="/itineraries/:slug"   element={<ItineraryPage />} />
                <Route path="/plan-my-trip"        element={<TripPlannerPage />} />
                <Route path="/visit-nepal"                    element={<VisitNepalPage />} />
                <Route path="/nepal-trekking-guide"           element={<TrekkingGuidePage />} />
                <Route path="/best-time-to-visit-nepal"       element={<BestTimePage />} />
                <Route path="/nepal-visa-guide"               element={<NepalVisaGuidePage />} />
                <Route path="/nepal-travel-cost"              element={<NepalTravelCostPage />} />
                <Route path="/kathmandu-to-pokhara"           element={<KathmanduToPokharaPage />} />
                <Route path="/nepal-packing-list"             element={<NepalPackingListPage />} />
                <Route path="/things-to-do-in-kathmandu"      element={<KathmanduThingsToDoPage />} />
                <Route path="/everest-base-camp-trek"         element={<EverestBaseCampPage />} />
                <Route path="/annapurna-circuit-trek"         element={<AnnapurnaCircuitPage />} />
                <Route path="/pokhara-travel-guide"           element={<PokharaGuidePage />} />
                <Route path="/chitwan-national-park"          element={<ChitwanGuidePage />} />
                <Route path="/nepal-trekking-permits"         element={<TrekkingPermitsPage />} />
                <Route path="/lumbini-guide"                  element={<LumbiniGuidePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
              <Route path="/admin/*" element={<AdminPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  )
}
