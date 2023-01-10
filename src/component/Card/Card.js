import React from "react";
import classes from "./Card.module.css";
import image from "../Asset/food-table.jpg";
import Button from "../Button/Button";

const Card = (props) => {
  const item = props.item;
  return (
      <div className={classes.card}>
        <img className={classes["card-img"]} src={image} alt=""/>
        <h4 className={`${classes.name}`}>{item.name}</h4>
        <span className={classes.description}>
          {item.description} 
        </span>
        <span className={classes.price}>₹<span>{item.price}</span> for one</span>
        <Button className={classes.addCart}>Add to Cart</Button>
        <Button className={classes.order}>Order</Button>
      </div>
  );
};
export default Card;
