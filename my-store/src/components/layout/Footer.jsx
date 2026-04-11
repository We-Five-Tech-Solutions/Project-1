// Dark footer with links, newsletter signup, and social icons
import { Link } from 'react-router-dom'

const footerLinks = {
  'Shop': [
    { label: 'All products', href: '/collections/all' },
    { label: 'New arrivals', href: '/collections/new' },
    { label: 'Sale', href: '/collections/sale' },
  ],
  'Help': [
    { label: 'Track order', href: '/track' },
    { label: 'Returns', href: '/returns' },
    { label: 'FAQs', href: '/faq' },
  ],
  'Company': [
    { label: 'About us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-400 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand column */}
        <div>
          <p className="text-white font-bold text-lg mb-3">MY STORE</p>
          <p className="text-sm leading-relaxed mb-4">
            Premium fitness gear for every athlete.
          </p>
          <div className="flex gap-3">
            {['IG', 'FB', 'YT'].map((s) => (
              <a key={s} href="#" className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center text-xs hover:border-white hover:text-white transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <p className="text-white text-sm font-medium mb-3">{title}</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-gray-700 text-xs text-gray-600 text-center">
        © {new Date().getFullYear()} My Store. All rights reserved.
      </div>
    </footer>
  )
}
