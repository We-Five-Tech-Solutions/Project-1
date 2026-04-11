// Sort-by dropdown for CollectionPage header
import { useFilterStore } from '@/store/filterStore'

const options = [
  { value: 'featured',   label: 'Featured' },
  { value: 'price_asc',  label: 'Price: low to high' },
  { value: 'price_desc', label: 'Price: high to low' },
  { value: 'newest',     label: 'Newest first' },
]

export default function SortDropdown() {
  const { filters, setFilter } = useFilterStore()

  return (
    <select
      value={filters.sortBy ?? 'featured'}
      onChange={(e) => setFilter('sortBy', e.target.value)}
      className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:border-black"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  )
}
