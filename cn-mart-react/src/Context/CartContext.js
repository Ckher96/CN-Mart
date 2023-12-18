import React, { useState } from "react";

export const CartContext = React.createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState({items: [], totalPrice:0});
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
