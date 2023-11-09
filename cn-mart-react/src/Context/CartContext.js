import React, { useState } from "react";

export const CartContext = React.createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState(["hat"]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
