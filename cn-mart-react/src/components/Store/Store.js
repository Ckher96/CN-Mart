import style from "./Store.module.css";
import fillerData from "../../FillerData/FillerStoreData";

export default function Store() {
  const formatedItems = fillerData.map((item) => <p>{item.name}</p>);

  return (
    <>
      {formatedItems}
      <h2>What are you looking for?</h2>
      <ul className={style.container}>
        <li>Chips</li>
        <li>Drinks</li>
        <li>Candy</li>
      </ul>
    </>
  );
}
