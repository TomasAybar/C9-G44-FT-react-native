import { create } from 'zustand'

export const useVenderStore = create((set) => ({
  product: {},
  addProps: (props) =>
    set((state) => ({
      ...state,
      product: {
        ...state.product,
        ...props
      }
    })),
  clearProduct: () =>
    set({
      product: {}
    })
}))
