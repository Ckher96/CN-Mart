import { useNavigate, useParams } from "react-router-dom";
import ItemCard from "../Utility/ItemCard";
import useFetch from "../Utility/UseFetch";
import style from "./Store.module.css"

export default function StoreCat() {
  const { itemCategory } = useParams();
  const navigate = useNavigate();

  const { data, err } = useFetch(`http://localhost:5000/store/${itemCategory}`);
  
  const categorizedItems = data?.map((item, index) => (
    <ItemCard key={index} item={item} />
  ));

  return (
    <div>
      <button className={style.backBtn} onClick={() => navigate("/store")}>Go Back</button>
      {!categorizedItems?.length && !err ? <h3>Loading</h3> : ""}
      {err && <h2>{err}</h2>}
      <div className={style.items}>{categorizedItems}</div>
    </div>
  );
}
