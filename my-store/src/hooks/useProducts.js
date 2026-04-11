// React Query hooks to fetch products and categories from local JSON
// Swap the fetch URL to a real API endpoint when you go live
import { useQuery } from '@tanstack/react-query'
import productsData from '@/data/products.json'
import categoriesData from '@/data/categories.json'

const fetchProducts = async (slug) => {
  // Using local JSON data — replace with: fetch(`/api/products?category=${slug}`)
  await new Promise((r) => setTimeout(r, 100)) // simulate network
  if (!slug || slug === 'all') return productsData
  return productsData.filter((p) => p.category === slug)
}

const fetchProduct = async (id) => {
  await new Promise((r) => setTimeout(r, 100))
  const product = productsData.find((p) => p.id === id)
  if (!product) return null
  const related = productsData.filter((p) => product.related?.includes(p.id))
  return { ...product, related }
}

export function useProducts(slug) {
  return useQuery({
    queryKey: ['products', slug],
    queryFn: () => fetchProducts(slug),
  })
}

export function useProduct(id) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  })
}

export function useCategories() {
  return categoriesData
}
