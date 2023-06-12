import React, { useState, useEffect } from 'react'
import { ecoModaDB } from '../api/ecoModaDB'

export const useHome = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getProducts = async () => {
    const productsPromise = ecoModaDB.get('/products')

    const res = await Promise(productsPromise)

    setProducts(res.data.response)

    console.log(res.data.response)

    setIsLoading(false)
  }

  useEffect(() => {
    getProducts()
    console.log('homescreen')
  }, [])

  return {
    products,
    isLoading
  }
}
