import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function AddButton({ item }) {
  const { cart, setCart } = useContext(CartContext);

  const addHandler = () => {
    if (cart.items.some((cartItem) => cartItem.name === item.name)) {
      const newArray = cart.items.map((cartItem) => {
        if (cartItem.name === item.name) {
          cartItem.amount++;
          return cartItem;
        } else return cartItem;
      });
      setCart((p) => {
        p.items = newArray;
        return p;
      });
    } else {
      item.amount = 1;
      setCart((p) => {
        p.items = [...cart.items, item];
        return p;
      });
    }
  };

  return <button onClick={addHandler}>Add</button>;
}
