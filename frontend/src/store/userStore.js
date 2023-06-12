import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: null,
  token: null,
  setUser: (user) => set({ user }),
  setTokenUser: (token) => set({ token }),
  logout: () => set({ user: null, token: null }),
}));

// Asi hago el llamado cuando quiera usar
// const user = useUserStore((state) => state.user)
// const token = useUserStore((state) => state.token)
