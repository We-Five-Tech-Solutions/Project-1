// Small overlay badge on product card images (e.g. "-30%", "NEW", "SALE")
export default function ProductBadge({ label, color = 'green', position = 'top-right' }) {
  const pos = position === 'top-left' ? 'top-2 left-2' : 'top-2 right-2'
  const style = color === 'green'
    ? 'bg-green-600 text-white'
    : color === 'red'
    ? 'bg-red-500 text-white'
    : 'bg-black text-white'

  return (
    <span className={`absolute ${pos} ${style} text-[10px] font-bold px-2 py-0.5 rounded`}>
      {label}
    </span>
  )
}
