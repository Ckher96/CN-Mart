import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import style from "./Cart.module.css";
import ItemCard from "../Utility/ItemCard";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [err, setErr] = useState("");

  const totalPrice = cart.reduce(
    (acc, cartItem) => (acc += cartItem.price * cartItem.amount),
    0
  );

  const formatedCart = cart.map((item, index) => (
    <ItemCard key={index} item={item} />
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
        fetch(`${process.env.REACT_APP_URL}cart`, {
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
      <h2 className={style.price}>TOTAL PRICE: {totalPrice}</h2>
      <div className={style.cart_container}>{formatedCart}</div>
      <button className={style.addOrderBtn} onClick={addOrderHandler}>Add Order</button>
    </>
  );
}
