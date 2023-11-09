import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <h1>Cart</h1>
      <p>{cart}</p>
    </>
  );
}
