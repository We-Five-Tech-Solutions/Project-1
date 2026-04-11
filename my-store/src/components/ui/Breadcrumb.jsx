// Breadcrumb trail: Home > Collections > Product name
import { Link } from 'react-router-dom'

export default function Breadcrumb({ crumbs = [] }) {
  return (
    <nav className="text-xs text-gray-500 flex items-center gap-1.5 mb-4">
      <Link to="/" className="hover:text-black transition-colors">Home</Link>
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <span>/</span>
          {crumb.href ? (
            <Link to={crumb.href} className="hover:text-black transition-colors">{crumb.label}</Link>
          ) : (
            <span className="text-gray-900 font-medium">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
