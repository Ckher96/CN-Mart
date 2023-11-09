import { Link, useLocation } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className={style.nav}>
      <Link to="/" className={pathname === "/" ? style.active : ""}>
        Home
      </Link>
      <Link to="/store" className={pathname === "/store" ? style.active : ""}>
        Store
      </Link>
      <Link to="/about" className={pathname === "/about" ? style.active : ""}>
        About
      </Link>
      <Link to="/hours" className={pathname === "/hours" ? style.active : ""}>
        Hours
      </Link>
      <Link to="/cart" className={pathname === "/cart" ? style.active : ""}>
        Cart
      </Link>
    </nav>
  );
}
