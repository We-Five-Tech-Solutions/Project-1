import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-10 mt-10">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">

        {/* Brand */}
        <div className="col-span-2">
          <p className="text-white font-extrabold text-2xl mb-4 tracking-tight">
            RGR GLOABL STORE
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-sm">
            Three powerful brands. One destination for your wellness and fitness journey.
          </p>

          <div className="flex gap-3">
            {['IG'].map((s) => (
              <a
                key={s}
                href="https://www.instagram.com/bodylastics_official"
                className="w-10 h-10 border border-gray-700 rounded-md flex items-center justify-center text-xs font-semibold hover:border-white hover:text-white transition-all"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Our brands */}
        <div>
          <p className="text-xs tracking-widest text-gray-500 uppercase mb-5">
            Our Brands
          </p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/collections/petology" className="hover:text-white transition">Petology</Link></li>
            <li><Link to="/collections/bodylastics" className="hover:text-white transition">Bodylastics</Link></li>
            <li><Link to="/collections/fitlastics" className="hover:text-white transition">FitLastics</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <p className="text-xs tracking-widest text-gray-500 uppercase mb-5">
            Support
          </p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/contact" className="hover:text-white transition">Contact us</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About us</Link></li>
          </ul>
        </div>

        {/* ✅ Newsletter moved HERE */}
        <div className="col-span-2 lg:col-span-2">
          <p className="text-xs tracking-widest text-gray-500 uppercase mb-4">
            Newsletter
          </p>

          <p className="text-sm text-gray-400 mb-6 max-w-md">
            Subscribe to our newsletter and get exclusive deals on your first purchase.
          </p>

          <div className="flex bg-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3 text-sm text-black outline-none"
            />
            <button className="px-5 text-xs font-semibold tracking-widest text-black hover:bg-gray-200 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 mt-14 border-t border-gray-800 pt-6">

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} RGR Global Store. All rights reserved.</span>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gray-300 transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gray-300 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}