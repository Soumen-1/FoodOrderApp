

import { useRef } from 'react';
import classes from './CartItemList.module.css'

const CartItemList = ()=>{
    const count = useRef();
    const increaseHandler=()=>{
        count.current.innerText= Number(count.current.innerText)+1;
    }
    const decreaseHandler= ()=>{
        count.current.innerText= Number(count.current.innerText)-1;
        if(Number(count.current.innerText)<0) count.current.innerText=0;
    }
    return(<li className={classes["items-list"]}>
    <span>Butter Chicken</span>
    <span className={classes["cart-count"]}>
    <button onClick={increaseHandler}>+</button>
      <span ref={count}>6</span>
      <button onClick={decreaseHandler}>-</button>
    </span>
    <span>₹350.00</span>
  </li>);
}

export default CartItemList;