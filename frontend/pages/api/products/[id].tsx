import type { NextApiRequest, NextApiResponse } from 'next'

interface Product {
  id: string
  name: string
  price: number
  imageUrl: string
  category?: string
  description?: string
}

// Import the same products array (in production, use shared database)
let products: Product[] = [
  {
    id: '1',
    name: 'Premium Laptop Bag',
    price: 89.99,
    imageUrl: '/images/bag.jpg',
    category: 'Electronics',
    description: 'High-quality laptop bag with multiple compartments'
  },
  {
    id: '2',
    name: 'Stainless Steel Water Bottle',
    price: 24.99,
    imageUrl: '/images/bottle.jpg',
    category: 'Home',
    description: 'Eco-friendly water bottle that keeps drinks cold for 24 hours'
  }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req
  const { id } = query

  switch (method) {
    case 'DELETE':
      // Delete product by ID
      const productIndex = products.findIndex(p => p.id === id)
      
      if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found' })
      }

      const deletedProduct = products.splice(productIndex, 1)[0]
      res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct })
      break

    default:
      res.setHeader('Allow', ['DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}