// Applies filter + sort state (from filterStore) to a products array
import { useFilterStore } from '@/store/filterStore'

export function useFilteredProducts(products = []) {
  const { filters } = useFilterStore()

  return products
    .filter((p) => {
      if (filters.category && p.category !== filters.category) return false
      if (filters.maxPrice  && p.price > filters.maxPrice)     return false
      if (filters.color) {
        const hasColor = p.colors?.some((c) => c.name === filters.color)
        if (!hasColor) return false
      }
      if (filters.size) {
        const hasSize = p.sizes?.some((s) => s.label === filters.size && s.available)
        if (!hasSize) return false
      }
      return true
    })
    .sort((a, b) => {
      if (filters.sortBy === 'price_asc')  return a.price - b.price
      if (filters.sortBy === 'price_desc') return b.price - a.price
      if (filters.sortBy === 'newest')     return b.id - a.id
      return 0
    })
}
