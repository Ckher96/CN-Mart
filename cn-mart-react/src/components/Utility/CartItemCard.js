import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import style from "./ItemCard.module.css";

export default function CartItemCard({ item }) {
  const { cart, setCart } = useContext(CartContext);
  const currentItem = cart.items.find(
    (cartItem) => cartItem.name === item.name
  );

  const removeHandler = () => {
    if (currentItem.amount > 1) {
      const newArray = cart.items.map((cartItem) => {
        if (cartItem.name === item.name) {
          cartItem.amount--;
          return cartItem;
        } else return cartItem;
      });
      setCart((p) => {
        p.items = newArray
        return p;
      });
    } else {
      const newArray = cart.filter(
        (currentItem) => item.name !== currentItem.name
      );
      setCart((p) => {
        p.items = newArray
        return p;
      });
    }
  };

  return (
    <div className={style.card}>
      <h3>{item.name}</h3>
      <div>img</div>
      <div>{currentItem.amount}</div>
      <h4>{item.price}</h4>
      <button onClick={removeHandler}>Remove Item</button>
    </div>
  );
}
