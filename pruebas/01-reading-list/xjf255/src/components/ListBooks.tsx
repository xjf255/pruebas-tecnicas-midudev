import { useBookStore } from "../context/useBookStore"
import { useCartStore } from "../context/useCartStore"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import { useQuery } from "@tanstack/react-query"

export default function ListBooks() {

  const { books } = useBookStore()

  const { cart, addToCart } = useCartStore()
  const { isError, isLoading } = useQuery({ queryKey: ["books"] })
  return (
    <section>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>Error en la carga de Libros</h3>}
      {books?.length as number > 0 && books?.map(el => {
        const { title, pages, genre, cover, ISBN } = el
        const style = cart.some(book => book.ISBN === el.ISBN) ? "image image--opacity" : ""
        return (
          <div key={ISBN}>
            <figure className={style}>
              <img src={cover} alt={title} />
            </figure>
            <h3>{title}</h3>
            <span>
              <p>{genre}</p>
              <p>{pages} pagínas</p>
            </span>
            <div className='addToCart' onClick={() => addToCart(el)}>
              {cart.some(book => book.ISBN === el.ISBN) ? <RemoveFromCartIcon /> : <AddToCartIcon />}
            </div>
          </div>
        )
      })}
    </section>
  )
}