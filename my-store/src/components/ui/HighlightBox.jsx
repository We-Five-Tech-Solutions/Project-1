// components/ui/HighlightBox.jsx
export default function HighlightBox({ children }) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
      {children}
    </div>
  )
}