import { useRef } from "react";
import classes from "./CartItem.module.css";
import CartItemList from "./CartItemList";

const CartItem = (props) => {
  const list = props.list;
  // console.log(arr);
  return (
    <div className={classes.cart}>
      <div className={classes.items}>
        {list.map((obj) => (
          <CartItemList onCartCount={props.onCartCount} key={obj.name} item={obj}></CartItemList>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
