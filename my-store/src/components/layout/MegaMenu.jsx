// Full-width dropdown panel shown on hover over nav items that have children
import { Link } from 'react-router-dom'

export default function MegaMenu({ items, onClose }) {
  return (
    <div className="absolute top-full left-0 bg-white border border-gray-100 shadow-lg rounded-b-lg p-6 min-w-[220px] z-50">
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              to={item.href}
              onClick={onClose}
              className="block text-sm text-gray-700 hover:text-black hover:font-medium transition-all"
            >
              {item.label}
            </Link>
            {item.children && (
              <ul className="ml-3 mt-1 space-y-1 border-l border-gray-100 pl-3">
                {item.children.map((sub) => (
                  <li key={sub.label}>
                    <Link
                      to={sub.href}
                      onClick={onClose}
                      className="block text-xs text-gray-500 hover:text-black transition-colors"
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
