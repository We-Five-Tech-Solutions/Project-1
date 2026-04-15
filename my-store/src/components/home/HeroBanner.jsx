// Auto-play image slider for the homepage hero section
// Slides defined as an array — swap src values for your real images
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import heroimg1 from '../../assets/images/Petology_B.jpg'
import heroimg2 from '../../assets/images/fit.png'

const slides = [
  {
    id: 1,
    title: 'Train harder. Live bolder.',
    subtitle: 'New arrivals — up to 40% off',
    cta: { label: 'Shop now', href: '/collections/new' },
    bg: '#f0f0f0',
    src : heroimg1,
  },
  {
    id: 2,
    title: 'Built for the grind.',
    subtitle: 'Premium lifting gear',
    cta: { label: 'Shop lifting', href: '/collections/lifting' },
    bg: '#e8e8e8',
    src : heroimg2,
  },
  {
    id: 3,
    title: 'Step up your game.',
    subtitle: 'Sports shoes — all categories',
    cta: { label: 'Shop shoes', href: '/collections/shoes' },
    bg: '#ececec',
    // src : heroimg3,
  },
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <div className="relative w-full h-[400px] md:h-[520px] overflow-hidden bg-cover bg-center" style={{ background: slide.bg , backgroundImage: `url(${slide.src})`,}}>
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 max-w-2xl">
        <p className="text-sm text-gray-500 mb-2 tracking-widest uppercase">{slide.subtitle}</p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">{slide.title}</h1>
        <Link
          to={slide.cta.href}
          className="inline-block bg-black text-white px-8 py-3 text-sm font-medium rounded hover:bg-gray-800 transition-colors self-start"
        >
          {slide.cta.label}
        </Link>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-6 h-2 bg-black' : 'w-2 h-2 bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
