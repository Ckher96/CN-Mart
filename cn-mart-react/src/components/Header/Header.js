import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={require("../../images/logo.jpg")} alt="logo" />
      </div>
      <div className={style.storeName}>
        <h1>CN Mart</h1>
      </div>
    </header>
  );
}
