import { useContext } from "react"
import { FilterContext } from "../context/filters"

export function useFilter() {
  // const [filter, setFilter] = useState({
  //   category: 'all',
  //   minPrice: 0
  // })
  const { filters, setFilters } = useContext(FilterContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filterProducts, setFilters, filters }
}