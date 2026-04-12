import { Link } from 'react-router-dom'

const footerLinks = {
  'Company Info': [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms and Conditions', href: '/terms' },
    { label: 'About us', href: '/about' },
  ],
  'Useful Links': [
    { label: 'Return Policy', href: '/returns' },
    { label: 'Shipping Policy', href: '/shipping' },
    { label: 'Warranty Policy', href: '/warranty' },
  ],
  'Shop': [
    { label: 'All products', href: '/collections/all' },
    { label: 'New arrivals', href: '/collections/new' },
    { label: 'Sale', href: '/collections/sale' },
  ],
  'Support': [
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-gray-400 pt-14">
      
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
        
        {/* Brand */}
        <div className="col-span-2">
          <p className="text-white font-semibold text-lg mb-3">
            rgrglobalstore
          </p>
          <p className="text-sm mb-4 leading-relaxed text-gray-500">
            Premium fitness gear for every athlete.
          </p>

          {/* Email */}
          <p className="text-sm mb-4">
            <span className="text-gray-500">Email:</span>{' '}
            <a
              href="mailto:support@rgrglobalstore.com"
              className="hover:text-white transition"
            >
              support@rgrglobalstore.com
            </a>
          </p>

          {/* Social */}
          <div className="flex gap-3">
            {['IG', 'FB', 'YT'].map((s) => (
              <div
                key={s}
                className="w-8 h-8 border border-gray-700 rounded flex items-center justify-center text-xs hover:border-white hover:text-white transition"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <p className="text-white text-xs tracking-widest uppercase mb-4">
              {title}
            </p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="text-sm text-gray-500 hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12"></div>

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-white text-xs tracking-widest uppercase mb-3">
          Newsletter
        </p>
        <p className="text-white-200 text-lg mb-6 max-w-md">
          Subscribe to our newsletter and get some percentage off your first purchase
        </p>

        <div className="flex max-w-md">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-gray-200 text-black px-4 py-3 text-sm outline-none"
          />
          <button className="bg-gray-200 text-black px-6 text-xs tracking-widest font-medium hover:bg-white transition">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} rgrglobalstore. All rights reserved.</p>

          {/* Payment placeholders */}
          <div className="flex gap-2">
            {['VISA', 'MC', 'AMEX', 'UPI'].map((p) => (
              <div
                key={p}
                className="px-2 py-1 border border-gray-700 text-[10px]"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}