import React, { useContext } from "react";
import classes from "./Card.module.css";
import image from "../Asset/food-table.jpg";
import Button from "../Button/Button";
import CartContext from "../Context/CartContext/CartContext";

const Card = (props) => {
  const itemCtx = useContext(CartContext);
  const item = props.item;
  let cartItem = itemCtx.cartItem;
  const onCartHandler = ()=>{
    for(let i in cartItem){
      if(cartItem[i]._id.trim() === item._id.trim()){
        cartItem[i].quantity = +cartItem[i].quantity+1;
        break;
      }
      else {
        if(+i=== +cartItem.length-1){
          cartItem.push({...item,quantity:1});
          console.log(1);
          break;
        }
      }
    }
    itemCtx.cartItemCount(cartItem=>[...cartItem]);
  }
  return (
      <div className={classes.card}>
        <img className={classes["card-img"]} src={image} alt=""/>
        <h4 className={`${classes.name}`}>{item.name}</h4>
        <span className={classes.description}>
          {item.description} 
        </span>
        <span className={classes.price}>₹<span>{item.price}</span> for one</span>
        <Button className={classes.addCart}onclick={onCartHandler} >Add to Cart</Button>
        <Button className={classes.order}>Order</Button>
      </div>
  );
};
export default Card;
