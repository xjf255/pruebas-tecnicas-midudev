import { IBook, Library } from "../types"

export const fetchData = async () => {
  const data = await fetch("http://localhost:5173/books.json")
  if (!data.ok) {
    throw new Error('Error en la obtencion de datos')
  }
  const json = await data.json()
  const extractedBooks = json.library.map((item: { book: IBook }) => item.book)
  return extractedBooks as Library
}