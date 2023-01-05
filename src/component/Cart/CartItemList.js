import { useRef, useState } from "react";
import classes from "./CartItemList.module.css";

const CartItemList = (props) => {
  const item = props.item;
  const count = useRef();
  const [totalPrice,setTotalPrice] = useState((item.quantity * item.price));
  const increaseHandler = () => {
    count.current.innerText = Number(count.current.innerText) + 1;
    setTotalPrice((e)=>e + item.price);
    props.onCartCount({type:'increase',count:1});
  };
  const decreaseHandler = () => {
    if(Number(count.current.innerText)>0){
    count.current.innerText = Number(count.current.innerText) - 1;
    setTotalPrice((e)=>e-item.price);
    props.onCartCount({type:'decrease',count:1});
    }
    else {
        count.current.innerText = 0;
        setTotalPrice(0);
    }
  };
  return (
    <li className={classes["items-list"]}>
      <span>{item.name}</span>
      <span className={classes["cart-count"]}>
        <button onClick={increaseHandler}>+</button>
        <span ref={count}>{item.quantity}</span>
        <button onClick={decreaseHandler}>-</button>
      </span>
      <span>{`₹ ${totalPrice.toFixed(2)}`}</span>
    </li>
  );
};

export default CartItemList;
