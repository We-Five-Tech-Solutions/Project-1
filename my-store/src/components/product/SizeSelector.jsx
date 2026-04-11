// Size buttons grid — highlights selected, marks unavailable sizes
export default function SizeSelector({ sizes = [], selected, onChange }) {
  return (
    <div>
      <p className="text-sm font-medium mb-2">
        Size: <span className="font-bold">{selected || 'Select'}</span>
      </p>
      <div className="flex flex-wrap gap-2">
        {sizes.map(({ label, available }) => (
          <button
            key={label}
            onClick={() => available && onChange(label)}
            disabled={!available}
            className={`min-w-[44px] h-11 px-3 text-sm border rounded transition-all ${
              selected === label
                ? 'bg-black text-white border-black'
                : available
                ? 'border-gray-300 hover:border-black'
                : 'border-gray-200 text-gray-300 cursor-not-allowed line-through'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
