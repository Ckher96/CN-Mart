import ItemCard from "../Utility/ItemCard";
import useFetch from "../Utility/UseFetch";

import style from "./Store.module.css";

export default function StoreProducts() {
  const { data: storeItems, err } = useFetch(`${process.env.REACT_APP_URL}store`);

  const formatedItems = storeItems?.map((item, index) => (
    <ItemCard key={index} item={item} />
  ));

  return (
    <>
      {!storeItems?.length && !err ? <h3>Loading</h3> : ""}
      {err && <h2>{err}</h2>}
      <div className={style.items}>{formatedItems}</div>
    </>
  );
}
