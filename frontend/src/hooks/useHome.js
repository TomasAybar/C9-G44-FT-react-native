import React, { useState, useEffect } from 'react';
import { productRequest } from '../api/productRequest';

export const useHome = () => {

  const [products, setProducts] = useState([])

  const [reload, setReload] = useState(false)

  useEffect(() => {
    productRequest
      .getProducts()
      .then((res) => setProducts(res.data.response))
  }, [reload])

  const handleReload = () => setReload(!reload)

  let productsOrder = [...products]

  const desorder = () => {
    return Math.random() - 0.5
  }

  productsOrder = productsOrder.sort(desorder).map((product) => product)

  return {
    products,
    handleReload,
    productsOrder
  }
}
