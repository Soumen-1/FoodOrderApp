import { useContext, useRef, useState } from "react";
import CartContext from "../Context/CartContext/CartContext";
import classes from "./CartItemList.module.css";


const CartItemList = (props) => {
  const item = props.item;
  const count = useRef();
  const [totalPrice, setTotalPrice] = useState(item.quantity * item.price);
  const cartCtx = useContext(CartContext);
  const increaseHandler = () => {
    count.current.innerText = Number(count.current.innerText) + 1;
    setTotalPrice((e) => e + item.price);
    item.quantity = +item.quantity + 1;
    cartCtx.cartCountHandler({ type: "increase", count: 1 });
    props.dummy.dummyHandler(props.dummy.dummy);
  };
  const decreaseHandler = () => {
    if (Number(item.quantity) > 1) {
      count.current.innerText = Number(count.current.innerText) - 1;
      setTotalPrice((e) => e - item.price);
      item.quantity = +item.quantity - 1;
      cartCtx.cartCountHandler({ type: "decrease", count: 1 });
    } else if (Number(item.quantity) === 1) {
      item.quantity = 0;
      let list = props.list.filter((obj) => {
        return obj.name !== item.name;
      });
      cartCtx.cartItemCount(list);
      cartCtx.cartCountHandler({ type: "decrease", count: 1 });
      setTotalPrice(0);
    }
    console.log("in cart Item");
    props.dummy.dummyHandler(props.dummy.dummy);
  };
 
  return (
    <li className={classes["items-list"]}>
      <img className={classes.img} src={require(`../Asset/juice.png`)} alt="" />
      <div className={classes.name}>
        <span>{item.name}</span>
        <span className={classes.description}>{item.description}</span>
      </div>
      <span className={classes["cart-count"]}>
        <button onClick={decreaseHandler}>-</button>
        <span ref={count}>{item.quantity}</span>
        <button onClick={increaseHandler}>+</button>
      </span>
      <span className={classes.price}>{`₹ ${totalPrice.toFixed(2)}`}</span>
    </li>
  );
};

export default CartItemList;
