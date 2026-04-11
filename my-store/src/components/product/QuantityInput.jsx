// +/- quantity stepper used on ProductPage and CartItem
export default function QuantityInput({ value, onChange, min = 1, max = 99 }) {
  return (
    <div className="inline-flex items-center border border-gray-300 rounded-lg overflow-hidden">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        className="w-10 h-10 text-lg text-gray-600 hover:bg-gray-50 transition-colors"
        aria-label="Decrease"
      >
        −
      </button>
      <span className="w-10 h-10 flex items-center justify-center text-sm font-medium border-x border-gray-200">
        {value}
      </span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        className="w-10 h-10 text-lg text-gray-600 hover:bg-gray-50 transition-colors"
        aria-label="Increase"
      >
        +
      </button>
    </div>
  )
}
