import { createContext } from "react";
import { useState } from "react";

// 1. crear contexto
export const CartContext = createContext()

// 2. crear provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    // check if the product is already in the cart
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      // una forma seria usando structureClone
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // producto no esta en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart, addToCart, clearCart, removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}