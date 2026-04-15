// Main image + thumbnail strip for the ProductPage
import { useState } from 'react'

// Helper to generate responsive Amazon image sizes
const getAmazonImage = (url, size) => {
  if (!url) return '/placeholder.jpg'
  return url.replace(/\._SL\d+_\.jpg/, `._SL${size}_.jpg`)
}

export default function ProductGallery({ images = [] }) {
  const [selected, setSelected] = useState(0)

  if (images.length === 0) {
    return <div className="aspect-square bg-gray-100 rounded-xl" />
  }

  const selectedImage = images[selected]

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="aspect-square rounded-xl overflow-hidden bg-gray-50">
        <img
          src={getAmazonImage(selectedImage, 1000)}
          srcSet={`
            ${getAmazonImage(selectedImage, 500)} 500w,
            ${getAmazonImage(selectedImage, 800)} 800w,
            ${getAmazonImage(selectedImage, 1000)} 1000w,
            ${getAmazonImage(selectedImage, 1500)} 1500w
          `}
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 50vw,
                 40vw"
          alt="Product"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.target.src = '/placeholder.jpg'
          }}
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
              <img
                src={getAmazonImage(img, 200)}
                alt={`View ${i + 1}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}