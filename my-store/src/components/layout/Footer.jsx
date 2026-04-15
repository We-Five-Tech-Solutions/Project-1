import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2A] text-gray-400 pt-14 pb-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <p className="text-white font-extrabold text-xl mb-4 tracking-tighter">MY STORE</p>
          <p className="text-sm leading-relaxed mb-5">
            Three powerful brands. One destination for your wellness and fitness journey.
          </p>
          <div className="flex gap-2">
            {['IG', 'FB', 'YT'].map((s) => (
              <a key={s} href="#" className="w-9 h-9 border border-gray-600 rounded-lg flex items-center justify-center text-xs font-bold hover:border-white hover:text-white transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Our brands */}
        <div>
          <p className="text-white text-sm font-semibold mb-4">Our brands</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/collections/petalogy"      className="hover:text-white transition-colors">Petalogy</Link></li>
            <li><Link to="/collections/bodylogistics" className="hover:text-white transition-colors">Bodylogistics</Link></li>
            <li><Link to="/collections/fitlogistics"  className="hover:text-white transition-colors">FitLogistics</Link></li>
          </ul>
        </div>

        {/* Help — no track order, no returns, no warranty */}
        <div>
          <p className="text-white text-sm font-semibold mb-4">Help</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/faq"     className="hover:text-white transition-colors">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact us</Link></li>
            <li><Link to="/about"   className="hover:text-white transition-colors">About us</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-white text-sm font-semibold mb-4">Newsletter</p>
          <p className="text-xs text-gray-500 mb-3 leading-relaxed">
            Get new arrivals and exclusive deals straight to your inbox.
          </p>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-3 py-2.5 text-sm bg-[#3a3a38] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 mb-2"
          />
          <button className="w-full py-2.5 bg-white text-black text-sm font-bold rounded-lg hover:bg-gray-200 transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-gray-700 text-xs text-gray-600 flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} My Store. All rights reserved.</span>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-gray-400 transition-colors">Privacy policy</Link>
          <Link to="/terms"   className="hover:text-gray-400 transition-colors">Terms of service</Link>
        </div>
      </div>
    </footer>
  )
}