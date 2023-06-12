import { create } from 'zustand';

export const useFavoriteStore = create((set) => ({
  favorites: [],
  setFavorites: (arrayFav) =>
    set((state) => ({ favorites: [...state.favorites, arrayFav] })),
}));
