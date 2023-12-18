import { useContext } from "react";
import style from "./ItemCard.module.css";
import { CartContext } from "../../Context/CartContext";

export default function ItemCard({ item }) {
  const { cart, setCart } = useContext(CartContext);

  const addHandler = () => {
    if (cart.items.some((cartItem) => cartItem.name === item.name)) {
      const newArray = cart.items.map((cartItem) => {
        if (cartItem.name === item.name) {
          cartItem.amount++;
          return cartItem;
        } else return cartItem;
      });
      setCart((p) => {
        p.items = newArray
        return p;
      });
    } else {
      item.amount = 1
      setCart((p) => {
        p.items = [...cart.items, item]
        return p
      });
    }
  };

  return (
    <div className={style.card}>
      <h3>{item.name}</h3>
      <div>img</div>
      <h4>{item.price}</h4>
      <button onClick={addHandler}>"Add To Cart"</button>
    </div>
  );
}
