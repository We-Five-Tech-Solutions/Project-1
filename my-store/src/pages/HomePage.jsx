import HeroBanner from '@/components/home/HeroBanner'
import CategoryGrid from '@/components/home/CategoryGrid'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import TrendingProducts from '../components/home/TrendingProducts'
import ComboPacks from '../components/home/ComboPacks';
 

export default function HomePage() {
  return (
    <div className="space-y-10 pb-12 bg-gradient-to-b from-white via-gray-50 to-white">
      <HeroBanner />
      <CategoryGrid />

      <FeaturedProducts />
      <TrendingProducts />
      <ComboPacks/>
    </div>
  );
}