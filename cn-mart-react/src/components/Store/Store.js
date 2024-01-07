import style from "./Store.module.css";
import { Link, Outlet } from "react-router-dom";

export default function Store() {
  return (
    <>
      <h2>What are you looking for?</h2>
      <ul className={style.container}>
        <li>
          <Link to="/store/chips">Chips</Link>
          <img src={require("../../images/chips.jpg")} alt="chips" />
        </li>
        <li>
          <Link to="/store/drinks">Drinks</Link>
          <img src={require("../../images/drinks.jpg")} alt="drinks" />
        </li>
        <li>
          <Link to="/store/candy">Candy</Link>
          <img src={require("../../images/candy.jpg")} alt="candy" />
        </li>
        <li>
          <Link to="/store/noodles">Noodles</Link>
          <img src={require("../../images/noodles.jpg")} alt="noodles" />
        </li>
      </ul>
      <Outlet />
    </>
  );
}
