// Sticky top navbar with logo, mega-menu links, search & cart icon
// State: hovered menu item tracked locally; cart count from cartStore
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import { navLinks } from "@/data/navigation";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const cartCount = useCartStore((s) => s.items.reduce((a, i) => a + i.qty, 0));
  const openCart = useUIStore((s) => s.openCart);

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
          <button
            aria-label="Search"
            className="p-1 hover:opacity-70 transition-opacity"
          >
            {/* Replace with your search icon SVG */}
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
          {/**
            
            <button
            aria-label={`Cart (${cartCount} items)`}
            onClick={openCart}
            className="relative p-1 hover:opacity-70 transition-opacity"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </button>*/}
        </div>
      </nav>
    </header>
  );
}
