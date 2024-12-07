import { createContext, useState } from "react";

// 1. Crear el contexto
export const FilterContext = createContext()

// 2. Crear el Provider, para prover el contexto
export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FilterContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FilterContext.Provider>
  )
}