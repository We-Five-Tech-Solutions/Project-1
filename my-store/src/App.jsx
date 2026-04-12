import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import CollectionPage from "@/pages/CollectionPage";
import ProductPage from "@/pages/ProductPage";
import CartPage from "@/pages/CartPage";
import NotFoundPage from "@/pages/NotFoundPage";

import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import AboutPage from "@/pages/AboutPage";
import ReturnsPage from "@/pages/ReturnsPage";
import ShippingPage from "@/pages/ShippingPage";
import WarrantyPage from "@/pages/WarrantyPage";
import ContactPage from "@/pages/ContactPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="collections/:slug" element={<CollectionPage />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="returns" element={<ReturnsPage />} />
        <Route path="shipping" element={<ShippingPage />} />
        <Route path="warranty" element={<WarrantyPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
