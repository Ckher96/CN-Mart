import style from "./Store.module.css";
import fillerData from "../../FillerData/FillerStoreData";
import { Link } from "react-router-dom";
import ItemCard from "../Utility/ItemCard";

export default function Store() {
  const formatedItems = fillerData.map((item) => <ItemCard item={item} />);

  return (
    <>
      <h2>What are you looking for?</h2>
      <ul className={style.container}>
        <li>
          <Link to="/store/chips">Chips</Link>
        </li>
        <li>
          <Link to="/store/drinks">Drinks</Link>
        </li>
        <li>
          <Link to="/store/candy">Candy</Link>
        </li>
        <li>
          <Link to="/store/noodles">Noodles</Link>
        </li>
      </ul>
      <div className={style.items}>{formatedItems}</div>
    </>
  );
}
