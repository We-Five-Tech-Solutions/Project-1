// React Query hooks to fetch products and categories from local JSON
import { useQuery } from "@tanstack/react-query";
import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";

const fetchProducts = async (slug) => {
  await new Promise((r) => setTimeout(r, 100));

  let products =
    !slug || slug === "all"
      ? [...productsData]
      : productsData.filter((p) => p.category === slug);

  // Default sort: low price to high price
  //products.sort((a, b) => Number(a.price) - Number(b.price));

  return products;
};

const fetchProduct = async (id) => {
  await new Promise((r) => setTimeout(r, 100));

  const product = productsData.find((p) => p.id === id);
  if (!product) return null;

  const related = productsData
    .filter((p) => product.related?.includes(p.id))
    .sort((a, b) => Number(a.price) - Number(b.price));

  return { ...product, related };
};

export function useProducts(slug) {
  return useQuery({
    queryKey: ["products", slug],
    queryFn: () => fetchProducts(slug),
  });
}

export function useProduct(id) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  });
}

export function useCategories() {
  return categoriesData;
}