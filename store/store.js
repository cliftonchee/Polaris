import { create } from "zustand";

const useStore = create((set) => ({
  user: null,
  setUser: (input) => set({ user: input }),
  removeUser: () => set({ user: null }),
}));

export default useStore;
