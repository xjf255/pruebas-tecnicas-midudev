interface IAuthor {
  name: string
  otherBooks?: Array<string>
}

interface IBook {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: IAuthor
}

export type Library = IBook[]

export interface CartStore {
  cart: Library
  addToCart: (book: IBook) => void
}

export interface IBookStore {
  books: Library | null
  filters: Map<string, string | number>
  changeFilterGenre: (genre: string) => void
  changeFilterPages: (pages: number) => void
  updateBooks: (books: Library | undefined) => void
}