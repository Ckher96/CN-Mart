import style from "./ItemCard.module.css";
import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton";

export default function CartItemCard({ item }) {
  return (
    <div className={style.card}>
      <h3>{item.name}</h3>
      {item.img ? <img src={item.img}/> : <div>img</div>}
      <div>{item.amount}</div>
      <h4>{item.price}</h4>
      <AddButton item={item} />
      <RemoveButton item={item} />
    </div>
  );
}
