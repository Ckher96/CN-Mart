import style from "./ItemCard.module.css";
import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton";

export default function ItemCard({ item }) {
  return (
    <div className={style.card}>
      <h3>{item.name}</h3>
      <div>img</div>
      <h4>{item.price}</h4>
      <AddButton item={item} />
      {item.amount > 0 ? <RemoveButton item={item} /> : ""}
    </div>
  );
}
