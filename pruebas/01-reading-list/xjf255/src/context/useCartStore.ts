import { create } from "zustand"
import { CartStore } from "../types"
import { persist } from "zustand/middleware"

export const useCartStore = create<CartStore>()(persist(
  (set) => ({
    cart: [],
    addToCart: (el) => set((state) => ({
      cart: state.cart.some(book => book.ISBN === el.ISBN) ? state.cart.filter(book => book.ISBN !== el.ISBN) : [...state.cart, el]
    })),
  }), {
  name: "storage"
}
))
