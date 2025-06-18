'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  price: number
  imageUrl: string
  category?: string
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 299.99,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      category: 'Electronics'
    },
    {
      id: '2',
      name: 'Ergonomic Office Chair',
      price: 449.99,
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      category: 'Furniture'
    },
    {
      id: '3',
      name: 'Smart Fitness Watch',
      price: 199.99,
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      category: 'Electronics'
    },
    {
      id: '4',
      name: 'Minimalist Desk Lamp',
      price: 89.99,
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      category: 'Furniture'
    },
    {
      id: '5',
      name: 'Premium Coffee Maker',
      price: 329.99,
      imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
      category: 'Appliances'
    },
    {
      id: '6',
      name: 'Leather Messenger Bag',
      price: 179.99,
      imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      category: 'Accessories'
    }
  ])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      // Simulated API call for demo
      // const response = await fetch('/api/products')
      // if (response.ok) {
      //   const data = await response.json()
      //   setProducts(data)
      // }
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category).filter(Boolean)))]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading products...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Discover Premium
              <span className="block text-blue-200">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Curated collection of exceptional products designed to elevate your lifestyle
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filters Section */}
        <div className="-mt-8 mb-16 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1 w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>
              <div className="w-full lg:w-auto">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full lg:w-48 px-4 py-4 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? '🏷️ All Categories' : `📂 ${category}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
              <span>{filteredProducts.length} products found</span>
              <div className="flex items-center gap-4">
                <span>Sort by:</span>
                <select className="px-3 py-1 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Name: A to Z</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="text-8xl mb-8">🔍</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">No Products Found</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We couldn't find any products matching your criteria. Try adjusting your search or browse all categories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('all')
                  }}
                  className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Clear Filters
                </button>
                <Link
                  href="/add-product"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Add New Product
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden bg-gray-100">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = 'https://via.placeholder.com/400x400/f3f4f6/9ca3af?text=No+Image'
                      }}
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      {product.category && (
                        <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full mb-2">
                          {product.category}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">(4.8)</span>
                      </div>
                    </div>
                    
                    <Link
                      href={`/products/${product.id}`}
                      className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}