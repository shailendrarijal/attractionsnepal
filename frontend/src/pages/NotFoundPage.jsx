import { Link } from 'react-router-dom'
import PageSeo from '../components/PageSeo'

export default function NotFoundPage() {
  return (
    <>
      <PageSeo title="Page Not Found" />
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <p className="text-7xl mb-6">🏔️</p>
        <h1 className="font-display text-4xl font-bold text-gray-900 mb-3">404 — Lost in the Himalayas</h1>
        <p className="text-gray-500 max-w-md mb-8">
          The page you're looking for doesn't exist. Maybe it was swept away by an avalanche, or you took a wrong turn on the trail.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/" className="btn-primary">Back to Home</Link>
          <Link to="/explore" className="btn-secondary">Explore Places</Link>
        </div>
      </div>
    </>
  )
}
