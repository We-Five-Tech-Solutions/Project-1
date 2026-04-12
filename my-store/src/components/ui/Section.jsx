// components/ui/Section.jsx
export default function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-black mb-2">
        {title}
      </h3>
      <div className="text-gray-600">{children}</div>
    </div>
  )
}