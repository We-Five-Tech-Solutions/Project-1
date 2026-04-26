import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import { useFilteredProducts } from "@/hooks/useFilter";
import FilterSidebar from "@/components/product/FilterSidebar";
import ProductGrid from "@/components/product/ProductGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Spinner from "@/components/ui/Spinner";

export default function CollectionPage() {
  const { slug } = useParams();
  const { data: products = [], isLoading } = useProducts(slug);
  const filtered = useFilteredProducts(products);

  const [showFilters, setShowFilters] = useState(false);

  if (isLoading) return <Spinner />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
      
      <Breadcrumb
        crumbs={[
          { label: "Collections", href: "/collections/all" },
          { label: slug },
        ]}
      />

      <h1 className="text-xl md:text-2xl font-bold mb-6 capitalize">
        {slug?.replace(/-/g, " ")}
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <FilterSidebar />
        </div>

        {/* Products */}
        <div className="flex-1 min-w-0">
          
          {/* Mobile Controls */}
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <button
              onClick={() => setShowFilters(true)}
              className="border px-4 py-2 text-sm rounded-lg"
            >
              Filters
            </button>

            {/**<SortDropdown /> */}
          </div>

          <ProductGrid products={filtered} />
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowFilters(false)}
          />

          <div className="absolute left-0 top-0 h-full w-72 bg-white shadow-xl p-4 overflow-y-auto">
            
            <div className="flex justify-between items-center mb-4">
              
              <button onClick={() => setShowFilters(false)}>✕</button>
            </div>

            <FilterSidebar />
          </div>
        </div>
      )}
    </div>
  );
}