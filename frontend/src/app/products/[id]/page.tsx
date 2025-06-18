'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  price: number
  imageUrl: string
  category?: string
  description?: string
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetchProduct()
  }, [params.id])

  const fetchProduct = async () => {
    try {
      const response = await fetch('/api/products')
      if (response.ok) {
        const products = await response.json()
        const foundProduct = products.find((p: Product) => p.id === params.id)
        setProduct(foundProduct || null)
      }
    } catch (error) {
      console.error('Failed to fetch product:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!product || !confirm('Are you sure you want to delete this product?')) return

    setDeleting(true)
    try {
      const response = await fetch(`/api/products/${product.id}`, {
        method: 'DELETE',
      })
      
      if (response.ok) {
        router.push('/products')
      } else {
        alert('Failed to delete product')
      }
    } catch (error) {
      console.error('Failed to delete product:', error)
      alert('Failed to delete product')
    } finally {
      setDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">{product.name}</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Product Details */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Image */}
        <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-96 object-cover object-center"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = 'https://via.placeholder.com/400x400?text=No+Image'
            }}
          />
        </div>

        {/* Product Info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {product.name}
          </h1>

          <div className="mt-3">
            <p className="text-3xl text-gray-900">${product.price.toFixed(2)}</p>
          </div>

          {product.category && (
            <div className="mt-6">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {product.category}
              </span>
            </div>
          )}

          {product.description && (
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base text-gray-700 space-y-6">
                <p>{product.description}</p>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              className="flex-1 bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Add to Cart
            </button>

            <button
              onClick={handleDelete}
              disabled={deleting}
              className="flex-1 bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {deleting ? 'Deleting...' : 'Delete Product'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}