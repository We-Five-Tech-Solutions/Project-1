// /collections/:slug — filter sidebar + sorted product grid
import { useParams } from 'react-router-dom'
import { useProducts } from '@/hooks/useProducts'
import { useFilteredProducts } from '@/hooks/useFilter'
import FilterSidebar from '@/components/product/FilterSidebar'
import ProductGrid from '@/components/product/ProductGrid'
import SortDropdown from '@/components/product/SortDropdown'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Spinner from '@/components/ui/Spinner'

export default function CollectionPage() {
  const { slug } = useParams()
  const { data: products = [], isLoading } = useProducts(slug)
  const filtered = useFilteredProducts(products)

  if (isLoading) return <Spinner />

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb crumbs={[{ label: 'Collections', href: '/collections/all' }, { label: slug }]} />
      <h1 className="text-2xl font-bold mb-6 capitalize">{slug?.replace(/-/g, ' ')}</h1>

      <div className="flex gap-8">
        <FilterSidebar />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500">{filtered.length} products</p>
            <SortDropdown />
          </div>
          <ProductGrid products={filtered} />
        </div>
      </div>
    </div>
  )
}
