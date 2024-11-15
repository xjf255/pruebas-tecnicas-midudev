import { create } from "zustand";
import { IBookStore, Library } from "../types";
import { INITIAL_FILTERS } from "../contants";

export const useBookStore = create<IBookStore>()((set) => ({
  books: null,
  filters: INITIAL_FILTERS,
  changeFilterGenre: (genre: string) => set((state) => ({
    filters: new Map(state.filters.set("genre", genre))
  })),
  changeFilterPages: (pages: number) => set((state) => ({
    filters: new Map(state.filters.set("pages", pages))
  })),
  updateBooks: (books: Library | undefined) => set(() => ({
    books: books
  }))
}))