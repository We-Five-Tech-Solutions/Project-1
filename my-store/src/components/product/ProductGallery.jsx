// Main image + thumbnail strip for the ProductPage
import { useState } from 'react'

export default function ProductGallery({ images = [] }) {
  const [selected, setSelected] = useState(0)

  if (images.length === 0) {
    return <div className="aspect-square bg-gray-100 rounded-xl" />
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="aspect-square rounded-xl overflow-hidden bg-gray-50">
        <img
          src={images[selected]}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                i === selected ? 'border-black' : 'border-transparent'
              }`}
            >
              <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
