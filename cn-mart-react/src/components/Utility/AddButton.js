import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import style from "./ItemCard.module.css"

export default function AddButton({ item }) {
  const { cart, setCart } = useContext(CartContext);

  const addHandler = () => {
    if (cart.some((cartItem) => cartItem.name === item.name)) {
      const newArray = cart.map((cartItem) => {
        if (cartItem.name === item.name) {
          cartItem.amount++;
          return cartItem;
        } else return cartItem;
      });
      setCart((p) => {
        p = newArray;
        return p;
      });
    } else {
      item.amount = 1;
      setCart((p) => {
        p = [...cart, item];
        return p;
      });
    }
  };

  return <button className={style.addBtn} onClick={addHandler}>Add</button>;
}
