import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * User MokutonCoffee-API. JWT disimpan backend di httpOnly cookie "token",
 * jadi store hanya menampung data profil untuk UI/guard.
 */
export type User = {
  id: string;
  role: string;
  name: string;
  email: string;
};

type AuthStore = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  isAuthenticated: () => boolean;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
      isAuthenticated: () => !!get().user,
    }),
    {
      // key baru: shape user lama (Backendless) tidak kompatibel
      name: "mokuton-auth",
    }
  )
);
