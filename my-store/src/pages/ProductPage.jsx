import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "@/hooks/useProducts";

import ProductGallery from "@/components/product/ProductGallery";
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
    return <p className="p-8 text-center text-gray-500">Product not found.</p>;
  }

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : null;

  const handleRedirectToAmazon = () => {
    if (!product?.amazonLink) {
      alert("Amazon link is not available for this product.");
      return;
    }
    window.open(product.amazonLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">
      {/* Breadcrumb */}
      <Breadcrumb
        crumbs={[
          { label: product.category, href: `/collections/${product.category}` },
          { label: product.name },
        ]}
      />

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-6 md:mt-8">
        {/* LEFT */}
        <div className="w-full">
          <ProductGallery images={product.images} />
        </div>

        {/* RIGHT */}
        <div className="space-y-5 md:space-y-6">
          {/* Title */}
          <div>
            <h1 className="text-xl md:text-3xl font-semibold leading-snug">
              {product.name}
            </h1>

            {discount && (
              <p className="text-green-600 text-xs md:text-sm font-medium mt-1">
                {discount}% OFF
              </p>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-2xl md:text-3xl font-bold text-black">
              {formatPrice(product.price)}
            </span>

            {product.originalPrice && (
              <span className="text-sm md:text-lg text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Variants */}
          {product.colors?.length > 0 && (
            <ColorSelector
              colors={product.colors}
              selected={selectedColor}
              onChange={setSelectedColor}
            />
          )}

          {product.sizes?.length > 0 && (
            <SizeSelector
              sizes={product.sizes}
              selected={selectedSize}
              onChange={setSelectedSize}
            />
          )}

          {/* CTA */}
          <div className="space-y-2 md:space-y-3 pt-2">
            <button
              onClick={handleRedirectToAmazon}
              className="w-full bg-black text-white py-3 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base font-semibold tracking-wide hover:bg-gray-900 transition"
            >
              Buy on Amazon
            </button>

            <p className="text-[11px] md:text-xs text-gray-500 text-center">
              Secure checkout via Amazon
            </p>
          </div>

          {/* Description */}
          {product.description && (
            <div className="pt-3 md:pt-4">
              <h3 className="text-sm font-semibold mb-2">Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          )}

          {/* Features */}
          {product.details?.about?.length > 0 && (
            <div className="pt-3 md:pt-4">
              <h3 className="text-sm font-semibold mb-3">Key Features</h3>

              <ul className="space-y-2 text-sm text-gray-600">
                {product.details.about.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-black">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Specs */}
          {product.details && (
            <div className="pt-3 md:pt-4 border-t">
              <h3 className="text-sm font-semibold mb-3">Specifications</h3>

              <div className="grid grid-cols-2 gap-3 text-sm">
                {Object.entries(product.details).map(([key, value]) => {
                  if (key === "about") return null;

                  return (
                    <div key={key}>
                      <span className="text-gray-500 capitalize text-xs md:text-sm">
                        {key}
                      </span>
                      <p className="font-medium text-sm">{value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related */}
      {product.related?.length > 0 && (
        <div className="mt-12 md:mt-20">
          <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
            You may also like
          </h2>
          <RelatedProducts products={product.related} />
        </div>
      )}
    </div>
  );
}
