import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center px-4">
      <h1 className="text-8xl font-extrabold text-gray-100">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-2">Page not found</h2>
      <p className="text-gray-500 text-sm mb-8">The page you're looking for doesn't exist or was moved.</p>
      <Link to="/" className="bg-black text-white px-8 py-3 rounded-xl text-sm font-medium hover:bg-gray-900 transition-colors">
        Back to home
      </Link>
    </div>
  )
}
