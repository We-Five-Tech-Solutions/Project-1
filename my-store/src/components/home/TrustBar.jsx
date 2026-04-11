// Four trust badges: free delivery, easy returns, COD, secure payments
const badges = [
  { icon: '🚚', title: 'Free delivery', sub: 'On orders above ₹599' },
  { icon: '↩', title: 'Easy returns', sub: '7-day return policy' },
  { icon: '💵', title: 'COD available', sub: 'Pay on delivery' },
  { icon: '🔒', title: 'Secure payments', sub: '100% safe checkout' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {badges.map((b) => (
          <div key={b.title} className="flex flex-col items-center text-center gap-2">
            <span className="text-2xl">{b.icon}</span>
            <p className="text-sm font-medium">{b.title}</p>
            <p className="text-xs text-gray-500">{b.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
