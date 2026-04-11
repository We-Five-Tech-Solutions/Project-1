// Scrolling promo text bar at the very top of every page
// Usage: drop this above <Navbar /> in Layout.jsx
export default function AnnouncementBar() {
  const messages = [
    'FLAT ₹300 OFF ON ORDERS ABOVE ₹1,999',
    'FREE DELIVERY ON ORDERS ABOVE ₹599',
    'COD AVAILABLE PAN INDIA',
  ]

  return (
    <div className="bg-brand-dark text-white text-xs py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex gap-16">
        {[...messages, ...messages].map((msg, i) => (
          <span key={i} className="mx-8 tracking-widest">{msg}</span>
        ))}
      </div>
    </div>
  )
}
