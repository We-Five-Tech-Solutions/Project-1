import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import { navLinks } from "@/data/navigation";
import MegaMenu from "./MegaMenu";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const searchRef = useRef();
  const navigate = useNavigate();

  const { data: products = [] } = useProducts();

  // 🔍 Filter
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  // ❌ Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-18 text-white">
        
        {/* Logo */}
<Link to="/" className="flex items-center">
  <img
    src={logo}
    alt="logo"
    className="h-12 sm:h-14 md:h-16 w-auto"
  />
</Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-wide uppercase">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative group"
              onMouseEnter={() => setActiveMenu(link.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                to={link.href}
                className="hover:text-gray-300 transition flex items-center gap-1"
              >
                {link.label}
                {link.children && <span className="text-[10px]">▾</span>}
              </Link>

              {/* underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>

              {link.children && activeMenu === link.label && (
                <MegaMenu items={link.children} />
              )}
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4 relative" ref={searchRef}>
          
          {/* 🔍 Search */}
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="hover:text-gray-300 transition"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </button>

          {/* 🔽 Search Dropdown */}
          {showSearch && (
            <div className="absolute right-0 top-12 w-[90vw] sm:w-[380px] md:w-[420px] bg-white text-black rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
              
              {/* Input */}
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border-b">
                <input
                  autoFocus
                  type="text"
                  placeholder="Search products..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 outline-none text-sm"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="text-gray-400 hover:text-black"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Results */}
              <div className="max-h-80 sm:max-h-96 overflow-y-auto">
                {query ? (
                  filteredProducts.length > 0 ? (
                    filteredProducts.slice(0, 6).map((product) => (
                      <div
                        key={product.id}
                        onClick={() => {
                          navigate(`/products/${product.id}`);
                          setShowSearch(false);
                          setQuery("");
                        }}
                        className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 hover:bg-gray-100 cursor-pointer transition"
                      >
                        <img
                          src={product.images?.[0]}
                          alt={product.name}
                          className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-lg border flex-shrink-0"
                        />

                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">
                            {product.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            ₹{product.price}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500 p-6 text-center">
                      No products found
                    </p>
                  )
                ) : (
                  <p className="text-xs text-gray-400 p-4">
                    Try searching for "bands", "dog leash", "pet grooming"
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}