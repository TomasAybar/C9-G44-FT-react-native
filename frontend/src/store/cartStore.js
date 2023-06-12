import { create } from 'zustand'

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => {
    // si el producto ya existe en el carrito, no lo agrega
    if (useCartStore.getState().cart.some((i) => i._id === product._id)) {
      return
    }

    set((state) => ({ cart: [...state.cart, product] }))
  },
  removeFromCart: (productID) =>
    set((state) => ({
      cart: state.cart.filter((productCard) => productCard._id !== productID)
    })),
  clearCart: () => set({ cart: [] })
}))
