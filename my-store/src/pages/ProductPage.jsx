// /products/:id — full product detail view
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "@/hooks/useProducts";

import ProductGallery from "@/components/product/ProductGallery";
import SizeSelector from "@/components/product/SizeSelector";
import ColorSelector from "@/components/product/ColorSelector";
import QuantityInput from "@/components/product/QuantityInput";
import RelatedProducts from "@/components/product/RelatedProducts";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Spinner from "@/components/ui/Spinner";
import { formatPrice } from "@/utils/formatPrice";

export default function ProductPage() {
  const { id } = useParams();
  const { data: product, isLoading } = useProduct(id);

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [qty, setQty] = useState(1);

  if (isLoading) return <Spinner />;

  if (!product) {
    return (
      <p className="p-8 text-center text-gray-500">
        Product not found.
      </p>
    );
  }

  const handleRedirectToAmazon = () => {
    if (!product?.amazonLink) {
      alert("Amazon link is not available for this product.");
      return;
    }

    window.open(product.amazonLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        crumbs={[
          {
            label: product.category,
            href: `/collections/${product.category}`,
          },
          { label: product.name },
        ]}
      />

      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Product Images */}
        <ProductGallery images={product.images} />

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-2xl font-bold">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Color Selection */}
          {product.colors?.length > 0 && (
            <div className="mb-4">
              <ColorSelector
                colors={product.colors}
                selected={selectedColor}
                onChange={setSelectedColor}
              />
            </div>
          )}

          {/* Size Selection */}
          {product.sizes?.length > 0 && (
            <div className="mb-6">
              <SizeSelector
                sizes={product.sizes}
                selected={selectedSize}
                onChange={setSelectedSize}
              />
            </div>
          )}

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-6">
            <QuantityInput value={qty} onChange={setQty} />
          </div>

          {/* Buy from Amazon Button */}
          <button
            onClick={handleRedirectToAmazon}
            className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-900 transition-colors"
          >
            Buy it from Amazon — {formatPrice(product.price * qty)}
          </button>

          {/* Product Description */}
          {product.description && (
            <div className="mt-8 prose prose-sm text-gray-600">
              <h3 className="font-semibold text-black text-sm mb-2">
                Product details
              </h3>
              <p>{product.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {product.related?.length > 0 && (
        <RelatedProducts products={product.related} />
      )}
    </div>
  );
}