import style from "./Store.module.css";
import { Link, Outlet } from "react-router-dom";

export default function Store() {
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
      <Outlet />
    </>
  );
}
