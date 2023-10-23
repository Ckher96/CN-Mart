import style from "./Nav.module.css"

export default function Nav() {
    return (
        <nav className={style.Nav}>
            <a href="/">Home</a>
            <a href="/">Store</a>
            <a href="/">About</a>
            <a href="/">Hours</a>
        </nav>
    )
}