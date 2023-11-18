import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ItemCard from "../Utility/ItemCard";
import style from "./Cart.module.css"

export default function Cart() {
  const { cart } = useContext(CartContext);

  const formatedCart = cart.map(item => <ItemCard item={item} />)

  const total = cart.reduce((acc, cartItem) => acc+=(cartItem.price * cartItem.amount), 0)

  return (
    <>
      <h1>Cart</h1>
      <div>Total: {total}</div>
      <div className={style.cart_container}>
        {formatedCart}
      </div>
      
    </>
  );
}
