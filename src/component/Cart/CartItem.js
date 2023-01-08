import React, { useEffect, useState } from "react";
import classes from "./CartItem.module.css";
import CartItemList from "./CartItemList";
import Modal from "./Modal/Modal";
const CartItem = (props) => {
  const list = props.list;
  // console.log(arr);
  const [dummy, setdummy] = useState(1);

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
    <Modal >
      <div className={classes["cart-header"]}>
        <span className={classes.title}>Cart Item</span>
        <span className={classes.span}>
          Total : <span>{cartTotal}</span>
        </span>
      </div>
      <div className={classes.cart}>
        <div className={classes.items}>
          <div className={classes['items-div']}>
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
          <div className={classes.order}>
            <button className={classes["order-btn"]}>Order</button>
          </div>
        </div>
        <div className={classes.summary}></div>
      </div>
    </Modal>
  );
};

export default CartItem;
