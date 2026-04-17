import HeroBanner from '@/components/home/HeroBanner'
import CategoryGrid from '@/components/home/CategoryGrid'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import TrendingProducts from '../components/home/TrendingProducts'
 

export default function HomePage() {
  return (
    <div className="space-y-10 pb-12">
      <HeroBanner />
      <CategoryGrid />

     {/** <BestSellers /> */}
      <FeaturedProducts />
      <TrendingProducts />
    </div>
  )
}
