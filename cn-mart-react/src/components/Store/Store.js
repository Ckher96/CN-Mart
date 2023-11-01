import style from "./Store.module.css"

export default function Store() {
  return (
    <>
      <h2>What are you looking for?</h2>
      <ul className={style.container}>
        <li>Chips</li>
        <li>Drinks</li>
        <li>Candy</li>
      </ul>
    </>
  );
}
