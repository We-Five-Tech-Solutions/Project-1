import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Small Badge */}
        <div className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-6">
          Oops! Wrong page
        </div>

        {/* 404 */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-gray-100 tracking-tight select-none">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-md mx-auto leading-relaxed">
          The page you are looking for may have been removed, renamed, or is
          temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-900 transition"
          >
            Back to Home
          </Link>

          <Link
            to="/collections/all"
            className="border border-gray-300 text-gray-800 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 transition"
          >
            Browse Products
          </Link>
        </div>

        {/* Extra Links */}
        <div className="mt-10 pt-6 border-t flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <Link to="/collections/all" className="hover:text-black transition">
            Shop
          </Link>
          <Link to="/contact" className="hover:text-black transition">
            Contact
          </Link>
        </div>

        {/* Back */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 text-sm text-gray-500 hover:text-black transition"
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
}