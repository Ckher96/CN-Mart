import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import style from "./Cart.module.css";
import CartItemCard from "../Utility/CartItemCard";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [err, setErr] = useState("");

  const totalPrice = cart.reduce(
    (acc, cartItem) => (acc += cartItem.price * cartItem.amount),
    0
  );

  const formatedCart = cart.map((item, index) => (
    <CartItemCard key={index} item={item} />
  ));

  setCart((p) => {
    p.totalPrice = totalPrice;
    return p;
  });

  const addOrderHandler = () => {
    if (!cart.length) {
      return setErr("Cart Is Empty");
    } else {
      try {
        fetch("http://localhost:5000/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: { items: cart, totalPrice } }),
        })
      } catch (e) {
        setErr(e.message);
      }
      setCart([]);
    }
  };

  return (
    <>
      <h2>Cart</h2>
      <h3>{err}</h3>
      <div>totalPrice: {totalPrice}</div>
      <div className={style.cart_container}>{formatedCart}</div>
      <button onClick={addOrderHandler}>Add Order</button>
    </>
  );
}
