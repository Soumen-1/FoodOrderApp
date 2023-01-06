import React from "react";
import classes from "./Card.module.css";
import image from "../Asset/food-table.jpg";
import Button from "../Button/Button";

const Card = () => {
  return (
      <div className={classes.card}>
        <img className={classes["card-img"]} src={image} alt=""/>
        <h4 className={`${classes.name}`}>Butter Chicken</h4>
        <span className={classes.description}>
          Lorem, ipsum dolor 
        </span>
        <span className={classes.price}>₹<span>180.00</span> for one</span>
        <Button className={classes.addCart}>Add to Cart</Button>
        <Button className={classes.order}>Order</Button>
      </div>
  );
};
export default Card;
