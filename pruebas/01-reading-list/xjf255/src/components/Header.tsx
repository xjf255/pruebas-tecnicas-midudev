import { ChangeEventHandler } from "react"
import { useBookStore } from "../context/useBookStore"
import { useCartStore } from "../context/useCartStore"

export default function Header() {

  const { cart } = useCartStore()
  const { books, filters, changeFilterGenre, changeFilterPages } = useBookStore()

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    changeFilterPages(e.target.value as unknown as number)
  }

  const handleGenre: ChangeEventHandler<HTMLSelectElement> = (e) => {
    changeFilterGenre(e.target.value)
  }

  const currentBooks = books?.reduce((acum, current) => cart.includes(current) ? acum : acum + 1, 0)
  return (
    <header>
      <h2>{currentBooks} Libros Disponibles</h2>
      <p>{cart.length} En lista de Lectura</p>
      <form>
        <label>
          Filtrar por pagina:
          <input type="range" name="range" min={0} max={1000} step={100} defaultValue={filters.get("pages")} onChange={handleChange} /> : {filters.get("pages")}
        </label>
        <label>
          filtrar por Genero:
          <select onChange={handleGenre}>
            <option value="*">Todos</option>
            <option value="Terror">Terror</option>
            <option value="Ciencia ficción">Ciencia ficción</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Zombies">Zombies</option>
          </select>
        </label>
      </form>
    </header>
  )
}