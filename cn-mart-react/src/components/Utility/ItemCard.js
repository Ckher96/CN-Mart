import { useContext } from "react";
import style from "./ItemCard.module.css";
import { CartContext } from "../../Context/CartContext";
import { useLocation } from "react-router-dom";

export default function ItemCard({ item }) {
  const { cart, setCart } = useContext(CartContext);
  const { pathname } = useLocation();

  const addHandler = () => {
    if (cart.includes(item)) {
      item.amount = item.amount + 1;
      const newArray = cart.map((cartItem) => {
        if (cartItem.name === item.name) {
          cartItem.amount++;
          return cartItem;
        } else return cartItem;
      });
      setCart(newArray);
    } else {
      item.amount = 1;
      setCart([...cart, item]);
    }
  };

  const removeHandler = () => {
    const itemToBeRemoved = cart.find(
      (cartItem) => item.name === cartItem.name
    );
    if (itemToBeRemoved.amount > 1) {
      const newArray = cart.map((cartItem) => {
        if (cartItem.name === item.name) {
          cartItem.amount--;
          return cartItem;
        } else return cartItem;
      });
      setCart(newArray);
    } else {
        const newArray = cart.filter(
          (currentItem) => item.name !== currentItem.name
        );
      setCart(newArray);
    }
  };

  const buttonText = pathname !== "/cart" ? "Add To Cart" : "Remove From Cart";

  return (
    <div className={style.card}>
      <h3>{item.name}</h3>
      <div>img</div>
      <div>{item.amount}</div>
      <h4>{item.price}</h4>
      <button onClick={pathname !== "/cart" ? addHandler : removeHandler}>
        {buttonText}
      </button>
    </div>
  );
}
