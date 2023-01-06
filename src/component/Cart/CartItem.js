import { useEffect, useState } from "react";
import classes from "./CartItem.module.css";
import CartItemList from "./CartItemList";

const CartItem = (props) => {
  const list = props.list;
  // console.log(arr);
  const [dummy, setdummy] = useState(1);
  const cartVisibility = () => {
    props.cartHandler.cartHandler(!props.cartHandler.visibleCart);
  };
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    let count = 0;
    list.forEach((obj) => {
      count += obj.price * +obj.quantity;
    });
    setCartTotal(count.toFixed(2));
  }, [list, dummy]);
  const dummyHandler = (val) => {
    setdummy(!val);
  };
  return (
    <div className={classes.cart} onClick={cartVisibility}>
      <div
        className={classes["items-total"]}
        onClick={(e) => e.stopPropagation()}
      >
        Cart Item
        <span>
          Total : <span>{cartTotal}</span>
        </span>
      </div>
      <div className={classes.items} onClick={(e) => e.stopPropagation()}>
        {list.map((obj) => (
          <CartItemList
            dummy={{ dummy: dummy, dummyHandler: dummyHandler }}
            cartItemCount={props.cartItemCount}
            list={list}
            onCartCount={props.onCartCount}
            key={obj.name}
            item={obj}
          ></CartItemList>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
