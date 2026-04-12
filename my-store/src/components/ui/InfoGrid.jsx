// components/ui/InfoGrid.jsx
export default function InfoGrid({ items }) {
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-6">
      {items.map((item, i) => (
        <div key={i} className="border rounded-xl p-4 bg-gray-50">
          <h4 className="font-semibold mb-1">{item.title}</h4>
          <p className="text-sm text-gray-500">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}