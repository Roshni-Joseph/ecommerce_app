import { createContext, useState } from "react";

export const CartContext  = createContext();


export const CartProvider = ({children }) => {
  const [cartItemValue, setCartItemValue] = useState([])

  return (
    <CartContext.Provider value={{  setCartItemValue, cartItemValue}}>
        {children}
    </CartContext.Provider>
  )
}