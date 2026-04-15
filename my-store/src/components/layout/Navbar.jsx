import { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Petalogy',      href: '/collections/petalogy'      },
  { label: 'Bodylogistics', href: '/collections/bodylogistics' },
  { label: 'FitLogistics',  href: '/collections/fitlogistics'  },
  { label: 'Contact us',    href: '/contact'                   },
]

export default function Navbar() {
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [searchOpen,  setSearchOpen]  = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef(null)

  useEffect(() => {
    if (!searchOpen) return
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [searchOpen])

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 gap-4">

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1 text-gray-700 hover:text-black"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>

        {/* Logo */}
        <Link to="/" className="font-extrabold text-xl tracking-tighter shrink-0 hover:opacity-80 transition-opacity">
          RGR Store
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-black hover:bg-gray-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Search bar */}
        <div className="relative shrink-0" ref={searchRef}>
          {!searchOpen ? (
            <button
              onClick={() => {
                setSearchOpen(true)
                setTimeout(() => searchRef.current?.querySelector('input')?.focus(), 50)
              }}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 border border-gray-200 rounded-xl hover:border-gray-400 hover:text-black transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/>
              </svg>
              <span className="hidden sm:inline text-sm">Search</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 border border-black rounded-xl px-3 py-1.5 bg-white w-64">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/>
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
                placeholder="Search products..."
                className="flex-1 text-sm outline-none bg-transparent text-gray-900 placeholder-gray-400"
                autoFocus
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-gray-400 hover:text-black text-lg leading-none">×</button>
              )}
              <button onClick={() => { setSearchOpen(false); setSearchQuery('') }} className="text-xs text-gray-400 hover:text-black ml-1">Esc</button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-gray-800 hover:text-black border-b border-gray-50 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/>
              </svg>
              <input type="text" placeholder="Search products..." className="flex-1 text-sm outline-none text-gray-900 placeholder-gray-400"/>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}