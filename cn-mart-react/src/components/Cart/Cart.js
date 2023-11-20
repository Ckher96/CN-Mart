import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import style from "./Cart.module.css";
import CartItemCard from "../Utility/CartItemCard";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const [err, setErr] = useState('');

  const formatedCart = cart.map((item, index) => <CartItemCard key={index} item={item} />);

  const total = cart.reduce(
    (acc, cartItem) => (acc += cartItem.price * cartItem.amount),
    0
  );

  const addOrderHandler = async () => {
    if(!cart.length) return setErr("Cart Is Empty")
    try {const data = await fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },body : JSON.stringify({data: cart})
    });
    console.log(data)
  }
    catch(e) {
      setErr(e.message)
    }
  }

  return (
    <>
      <h1>Cart</h1>
      <h2>{err}</h2>
      <div>Total: {total}</div>
      <div className={style.cart_container}>{formatedCart}</div>
      <button onClick={addOrderHandler}>Add Order</button>
    </>
  );
}
