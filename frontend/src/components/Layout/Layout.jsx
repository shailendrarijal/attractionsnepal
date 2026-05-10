import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AdSidebar from '../AdSidebar'
import MobileAdBanner from '../MobileAdBanner'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        {isHome ? (
          /* ── Homepage: full-width, no sidebar ── */
          <Outlet />
        ) : (
          /* ── All other pages: content + right sidebar on desktop ── */
          <div className="flex items-start w-full max-w-screen-2xl mx-auto">
            {/* Page content */}
            <div className="flex-1 min-w-0">
              <Outlet />
            </div>

            {/* Desktop sidebar — xl and above (≥ 1280 px) */}
            <aside
              aria-label="Advertisements"
              className="hidden xl:block w-[300px] shrink-0"
            >
              <AdSidebar />
            </aside>
          </div>
        )}
      </main>

      {/* Mobile / tablet ad strip — shown below content, above footer, on screens < xl */}
      {!isHome && (
        <div className="xl:hidden border-t border-gray-100 bg-gray-50">
          <MobileAdBanner />
        </div>
      )}

      <Footer />
    </div>
  )
}
