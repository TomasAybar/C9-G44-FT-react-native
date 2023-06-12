import { create } from 'zustand';

export const useCompletarPerfil = create((set) => ({
  data: {},
  addProps: (props) =>
    set((state) => ({
      ...state,
      data: {
        ...state.data,
        ...props,
      },
    })),
  clearData: () =>
    set({
      data: {},
    }),
}));
