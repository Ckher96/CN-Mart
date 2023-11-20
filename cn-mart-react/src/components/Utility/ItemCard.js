import { useContext } from "react";
import style from "./ItemCard.module.css";
import { CartContext } from "../../Context/CartContext";

export default function ItemCard({ item }) {
  const { cart, setCart } = useContext(CartContext);
  const currentItem = cart.find(cartItem => cartItem.name === item.name);

  const addHandler = () => {
    if (cart.some((cartItem) => cartItem.name === item.name)) {
      const newArray = cart.map((cartItem) => {
        if (cartItem.name === item.name) {
          cartItem.amount++;
          return cartItem;
        } else return cartItem;
      });
      setCart(newArray);
    } else {
      item.amount++
      setCart([...cart, item]);
    }
  };

  return (
    <div className={style.card}>
      <h3>{item.name}</h3>
      <div>img</div>
      <div>{currentItem?.amount}</div>
      <h4>{item.price}</h4>
      <button onClick={addHandler}>"Add To Cart"</button>
    </div>
  );
}
