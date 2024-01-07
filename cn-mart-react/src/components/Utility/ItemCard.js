import style from "./ItemCard.module.css";
import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function ItemCard({ item }) {
  const { cart } = useContext(CartContext);

  let currentItem = null;

  if (cart.some((cartItem) => cartItem.name === item.name)) {
    currentItem = cart.find((cartItem) => cartItem.name === item.name);
  }

  return (
    <div className={style.card}>
      <h3>{item.name.toUpperCase()}</h3>
      {item.img ? <img src={item.img} alt={item.name} /> : <div>img</div>}
      <div>AMOUNT: {currentItem?.amount ? currentItem.amount : 0}</div>
      <h4>${item.price}</h4>
      <AddButton item={item} />
      <RemoveButton item={item} />
    </div>
  );
}
