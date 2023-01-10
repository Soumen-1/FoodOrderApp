import React, { useEffect, useState ,useContext} from "react";
import CartContext from "../Context/CartContext/CartContext";
import classes from "./CartItem.module.css";
import CartItemList from "./CartItemList";
import Modal from "./Modal/Modal";
const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const list = cartCtx.cartItem;
  // console.log(arr);
  const [dummy, setdummy] = useState(1);

  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    let count = 0;
    list.forEach((obj) => {
      count += (+obj.price) * (+ obj.quantity);
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
                list={list}
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
