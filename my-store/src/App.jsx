import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'
import CollectionPage from '@/pages/CollectionPage'
import ProductPage from '@/pages/ProductPage'
import NotFoundPage from '@/pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="collections/:slug" element={<CollectionPage />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}