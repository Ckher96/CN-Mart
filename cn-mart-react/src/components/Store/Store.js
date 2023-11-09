import style from "./Store.module.css";
import fillerData from "../../FillerData/FillerStoreData";
import { Link } from "react-router-dom";
import ItemCard from "../Utility/ItemCard";
import { useEffect, useState } from "react";

export default function Store() {
  const [storeItems , setStoreItems] = useState()

  useEffect(() => {
    async function getData() {
      const data = await fetch('http://localhost:5000/store').then(res => res.json())
    console.log(data)
    setStoreItems(data)
    }
    getData()
  },[])


  const formatedItems = storeItems?.map((item, index) => <ItemCard key={index} item={item} />);

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
      <div className={style.items}>{formatedItems}</div>
    </>
  );
}
