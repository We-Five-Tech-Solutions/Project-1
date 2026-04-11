# My Store — Vite + React Product Catalog

A Boldfit-style product catalog built with Vite, React, Tailwind CSS, and Zustand.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Tech stack
- **Vite** — build tool
- **React 18** — UI
- **React Router v6** — routing
- **Tailwind CSS** — styling
- **Zustand** — cart & UI state (persisted to localStorage)
- **TanStack Query** — data fetching

## Project structure
```
src/
├── components/
│   ├── layout/    AnnouncementBar, Navbar, MegaMenu, Footer, CartDrawerOverlay
│   ├── home/      HeroBanner, CategoryGrid, FeaturedProducts, PromoBanner, TrustBar
│   ├── product/   ProductCard, ProductGrid, FilterSidebar, Gallery, Size/Color/Qty
│   ├── cart/      CartDrawer, CartItem, CartSummary
│   └── ui/        Button, Badge, Spinner, EmptyState, Breadcrumb
├── pages/         HomePage, CollectionPage, ProductPage, CartPage, NotFoundPage
├── store/         cartStore, filterStore, uiStore
├── data/          products.json, categories.json, navigation.js
├── hooks/         useProducts, useCart, useFilter
└── utils/         formatPrice, filterProducts, cn
```

## Swap to a real backend
Replace the mock fetch in `src/hooks/useProducts.js` with your real API URL.
