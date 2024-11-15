import { useEffect } from 'react'
import './App.css'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from './utils/fetchData'
import ReadingList from './components/ReadingList'
import Header from './components/Header'
import ListBooks from './components/ListBooks'
import { useBookStore } from './context/useBookStore'
import { Library } from './types'

export default function App() {
  const { books, filters, updateBooks } = useBookStore()
  const { data } = useQuery({
    queryKey: ["books"],
    queryFn: fetchData,
  })

  function filterBooks(books: Library) {
    const filteredBooks = books?.filter(book => {
      const filterPages = filters.get("pages") as number;
      const filterGenre = filters.get("genre") as string;

      if (filterGenre === "*") {
        return (
          (book.pages >= filterPages) && (filterGenre === "*")
        );
      }

      return (
        (book.pages >= filterPages) &&
        (book.genre === filterGenre)
      );
    });
    return filteredBooks
  }

  useEffect(() => {
    if (data && books === null) {
      updateBooks(data);
    }
    if (books !== null) {
      updateBooks(filterBooks(data as Library));
    }
  }, [filters, data])



  return (
    <>
      <Header />
      <main>
        <ListBooks />
        <ReadingList />
      </main>
    </>
  )
}
