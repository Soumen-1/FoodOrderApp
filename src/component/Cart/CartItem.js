import { useRef, useState } from "react";
import classes from "./CartItem.module.css";
import CartItemList from "./CartItemList";

const CartItem = () => {
    // const [count,setValue] = useState(6);
    // const increaseHandler = ()=>{
    //     setValue((e)=>{
    //         e= e+1;
    //         return e;
    //     });
    // }
    // const decreaseHandler = ()=>{
    //     setValue((e)=>{
    //         if(e>0) e-=1;
    //         else e =0;
    //         return e;
    //     });
    // }
    
  return (
    <div className={classes.cart}>
      <button className={classes.btn}>X</button>
      <div className={classes.items}>
        <CartItemList></CartItemList>
        <CartItemList></CartItemList>
        <CartItemList></CartItemList>
        <CartItemList></CartItemList>
        <CartItemList></CartItemList>
        <CartItemList></CartItemList>
        <CartItemList></CartItemList>
        <CartItemList></CartItemList>
        <CartItemList></CartItemList>
        <CartItemList></CartItemList>
        <CartItemList></CartItemList>
        <CartItemList></CartItemList>
        <CartItemList></CartItemList>
        <CartItemList></CartItemList>
        <CartItemList></CartItemList>
        <CartItemList></CartItemList>
        <CartItemList></CartItemList>
        <CartItemList></CartItemList>
       
      </div>
    </div>
  );
};

export default CartItem;
