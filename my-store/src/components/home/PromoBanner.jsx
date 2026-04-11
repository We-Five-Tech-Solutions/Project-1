// Two-column promo image banners (Men's / Women's collections)
import { Link } from 'react-router-dom'

const banners = [
  { label: "Men's collection", href: '/collections/men', bg: '#dce3e8' },
  { label: "Women's collection", href: '/collections/women', bg: '#e8dce0' },
]

export default function PromoBanner() {
  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {banners.map((b) => (
          <Link
            key={b.label}
            to={b.href}
            className="relative h-48 md:h-64 rounded-xl overflow-hidden flex items-end p-6 group"
            style={{ background: b.bg }}
          >
            <div>
              <p className="text-sm text-gray-600 mb-1">New arrivals</p>
              <p className="text-xl font-bold text-gray-900">{b.label}</p>
              <p className="mt-2 text-xs underline text-gray-700 group-hover:text-black">
                Shop now →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
