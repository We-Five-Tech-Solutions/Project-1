// Sticky top navbar with logo, mega-menu links, search & cart icon
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import { useProducts } from "@/hooks/useProducts";
import { navLinks } from "@/data/navigation";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const searchRef = useRef();
  const navigate = useNavigate();

  const cartCount = useCartStore((s) =>
    s.items.reduce((a, i) => a + i.qty, 0)
  );
  const openCart = useUIStore((s) => s.openCart);

  const { data: products = [] } = useProducts();

  // 🔍 Filter logic
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  // ❌ Close search on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl tracking-tight">
          RGR GLOBAL STORE
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(link.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                to={link.href}
                className="text-sm font-medium hover:text-gray-600 transition-colors"
              >
                {link.label}
                {link.children && <span className="ml-1 text-xs">▾</span>}
              </Link>

              {link.children && activeMenu === link.label && (
                <MegaMenu
                  items={link.children}
                  onClose={() => setActiveMenu(null)}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* 🔍 Search Icon */}
          <button
            aria-label="Search"
            onClick={() => setShowSearch((prev) => !prev)}
            className="p-1 hover:opacity-70 transition-opacity"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </button>

          {/* 🛒 Cart */}
          {/**<button
            aria-label={`Cart (${cartCount} items)`}
            onClick={openCart}
            className="relative p-1 hover:opacity-70 transition-opacity"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
            </svg>

            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button> */}
        </div>
      </nav>

      {/* 🔍 Search Dropdown */}
      {showSearch && (
  <div className="fixed inset-0 z-50">
    
    {/* 🔲 Backdrop */}
    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

    {/* 🔍 Search Panel */}
    <div className="relative max-w-2xl mx-auto mt-24 px-4">
      <div
        ref={searchRef}
        className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
      >
        {/* Input */}
        <div className="flex items-center gap-2 px-4 py-3 border-b">
          
          {/* Icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className="text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="22" y2="22" />
          </svg>

          {/* Input field */}
          <input
            autoFocus
            type="text"
            placeholder="Search products (petology, bands, leash...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 outline-none text-sm"
          />

          {/* ❌ Clear Button */}
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-gray-400 hover:text-black transition"
            >
              ✕
            </button>
          )}
        </div>

        {/* Results */}
        {query && (
          <div className="max-h-80 overflow-y-auto divide-y">
            {filteredProducts.length > 0 ? (
              filteredProducts.slice(0, 6).map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    navigate(`/products/${product.id}`);
                    setShowSearch(false);
                    setQuery("");
                  }}
                  className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 cursor-pointer transition"
                >
                  {/* Image */}
                  <img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded-lg border"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {product.name}
                    </p>

                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-xs text-gray-500">
                        ₹{product.price}
                      </p>

                      {/* Badge */}
                      {product.badge && (
                        <span className="text-[10px] px-2 py-0.5 bg-black text-white rounded-full">
                          {product.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 px-4 py-6 text-center">
                No products found
              </p>
            )}
          </div>
        )}

        {/* Footer hint */}
        {!query && (
          <p className="text-xs text-gray-400 px-4 py-3">
            Try searching for "bands", "dog leash", "pet grooming"
          </p>
        )}
      </div>
    </div>
  </div>
)}
    </header>
  );
}