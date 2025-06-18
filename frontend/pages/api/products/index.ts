import type { NextApiRequest, NextApiResponse } from 'next'

interface Product {
  id: string
  name: string
  price: number
  imageUrl: string
  category?: string
  description?: string
}

// In-memory storage (replace with database in production)
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
  const { method } = req

  switch (method) {
    case 'GET':
      // Return all products
      res.status(200).json(products)
      break

    case 'POST':
      // Add new product
      const { name, price, imageUrl, category, description } = req.body

      if (!name || !price || !imageUrl) {
        return res.status(400).json({ error: 'Missing required fields' })
      }

      const newProduct: Product = {
        id: Date.now().toString(),
        name,
        price: parseFloat(price),
        imageUrl,
        category,
        description
      }

      products.push(newProduct)
      res.status(201).json(newProduct)
      break

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

