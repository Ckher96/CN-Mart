import style from "./Footer.module.css"

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.footerItem}>
        <h3>Phone</h3>
        <p>(000)000-0000</p>
      </div>
      <div className={style.footerItem}>
        <h3>Email</h3>
        <p>RandomEmail@email.com</p>
      </div>
    </div>
  );
}
