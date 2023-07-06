import { useState, useEffect } from 'react'
import { ecoModaDB } from '../api/ecoModaDB'
import { Product, ProductsResponse } from '../interfaces/products.interface'

export const useHome = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<Product[]>([])

  const loadProducts = async () => {
    const res = await ecoModaDB.get<ProductsResponse>('/products')
    setProducts(res.data.response)

    setIsLoading(false)
  }

  useEffect(() => {
    
    loadProducts()
    
  }, [])
  

  return {
    isLoading,
    products
  }
}
