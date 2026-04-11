// Inline text badge — used for "New", "Sale", category labels
export default function Badge({ children, color = 'gray' }) {
  const colors = {
    gray:  'bg-gray-100 text-gray-700',
    green: 'bg-green-100 text-green-700',
    red:   'bg-red-100 text-red-600',
    black: 'bg-black text-white',
  }
  return (
    <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${colors[color]}`}>
      {children}
    </span>
  )
}
