import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.Header}>
      <div className={style.logo}>
        <h1>LOGO</h1>
      </div>
      <div className={style.storeName}>
        <h1>CN Mart</h1>
      </div>
    </header>
  );
}
