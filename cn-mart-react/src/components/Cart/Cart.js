import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import style from "./Cart.module.css"
import CartItemCard from "../Utility/CartItemCard";

export default function Cart() {
  const { cart } = useContext(CartContext);

  const formatedCart = cart.map(item => <CartItemCard item={item} />)

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
