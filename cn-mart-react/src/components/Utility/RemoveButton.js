import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function RemoveButton({item}) {
  const { cart, setCart } = useContext(CartContext);
  const currentItem = cart.find(
    (cartItem) => cartItem.name === item.name
  );

  const removeHandler = () => {
    if (currentItem.amount > 1) {
      const newArray = cart.map((cartItem) => {
        if (cartItem.name === item.name) {
          cartItem.amount--;
          return cartItem;
        } else return cartItem;
      });
      setCart((p) => {
        p = newArray;
        return p;
      });
    } else {
      const newArray = cart.filter(
        (currentItem) => item.name !== currentItem.name
      );
      setCart((p) => {
        p = newArray;
        return p;
      });
    }
  };

  return <button onClick={removeHandler}>Remove Item</button>;
}
