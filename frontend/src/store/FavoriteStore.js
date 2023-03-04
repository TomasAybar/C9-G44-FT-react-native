import { create } from 'zustand'

export const useFavoriteStore = create((set) => ({
    favorites: [],
    addOrDeleteToFavorite: (item) => {

        // si el producto ya existe saco el fav
        if (useFavoriteStore.getState().favorites.some((i) => i.id === item.id)) {


            set((state) => ({ favorites: state.favorites.filter((i) => i.id !== item.id) }))

            console.log('saco')
            return

        }

        set((state) => ({ favorites: [...state.favorites, item] }))

    },
}))