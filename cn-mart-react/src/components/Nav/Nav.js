import { Link } from "react-router-dom"
import style from "./Nav.module.css"

export default function Nav() {
    return (
        <nav className={style.Nav}>
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/about">About</Link>
            <Link to="/hours">Hours</Link>
            <Link to="/cart">Cart</Link>
        </nav>
    )
}