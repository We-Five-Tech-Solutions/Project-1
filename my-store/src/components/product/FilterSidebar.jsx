// Left-hand filter panel for CollectionPage
// Filters: category, price range, color, size
import { useFilterStore } from '@/store/filterStore'
import { useCategories } from '@/hooks/useProducts'

const COLORS = ['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow']
const SIZES  = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

export default function FilterSidebar() {
  const { filters, setFilter, resetFilters } = useFilterStore()
  const categories = useCategories()

  return (
    <aside className="w-full md:w-56 shrink-0">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm">Filters</h3>
        <button onClick={resetFilters} className="text-xs text-gray-500 underline hover:text-black">
          Clear all
        </button>
      </div>

      {/* Category */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Category</p>
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-black">
                <input
                  type="radio"
                  name="category"
                  value={cat.slug}
                  checked={filters.category === cat.slug}
                  onChange={() => setFilter('category', cat.slug)}
                  className="accent-black"
                />
                {cat.name}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price range */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Max price</p>
        <input
          type="range"
          min={0}
          max={5000}
          step={100}
          value={filters.maxPrice ?? 5000}
          onChange={(e) => setFilter('maxPrice', Number(e.target.value))}
          className="w-full accent-black"
        />
        <p className="text-xs text-gray-500 mt-1">Up to ₹{filters.maxPrice ?? 5000}</p>
      </div>

      {/* Color */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Color</p>
        <div className="flex flex-wrap gap-2">
          {COLORS.map((c) => (
            <button
              key={c}
              onClick={() => setFilter('color', filters.color === c ? null : c)}
              className={`text-xs px-2 py-1 border rounded transition-colors ${
                filters.color === c ? 'bg-black text-white border-black' : 'border-gray-300 hover:border-black'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Size</p>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((sz) => (
            <button
              key={sz}
              onClick={() => setFilter('size', filters.size === sz ? null : sz)}
              className={`w-10 h-10 text-xs border rounded transition-colors ${
                filters.size === sz ? 'bg-black text-white border-black' : 'border-gray-300 hover:border-black'
              }`}
            >
              {sz}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
