import { useEffect, useState } from "react"
import { useCartStore } from "../context/useCartStore"
import { MenuIcon } from "./Icons"

export default function ReadingList() {

  const { cart } = useCartStore()
  const [activeModal, setModal] = useState(false)
  useEffect(() => {
    document.querySelector("aside")?.classList.toggle("--active")
    document.querySelector("body")?.classList.toggle("--lock")
  }, [activeModal])
  return (
    <>
      <div className="btn__menu" onClick={() => setModal(!activeModal)}>
        <MenuIcon />
      </div>
      {cart.length > 0 && <aside>
        <h2>Lista de Lectura</h2>
        <ul>
          {cart.map(book => {
            const { title, cover, ISBN } = book
            return (
              <li key={ISBN}>
                <figure>
                  <img src={cover} alt={title} />
                </figure>
              </li>
            )
          })}
        </ul>
      </aside>}
    </>
  )
}