
import React from "react";
import mealsimage from "../Asset/food-background.jpg";
import CartIcon from "../Cart/CartIcon";
import classes from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <React.Fragment>
      <div className={classes["header-main"]}>
        <h2 className={classes.title}>ReactMeal</h2>
        <div className={classes.admin}>
            <a href="no">Home</a>
            <a href="no">Help</a>
            <a href="no">About Us</a>
        </div>
        <CartIcon></CartIcon>
      </div>
      <img className={classes.img}src={mealsimage} alt="food"/>
    </React.Fragment>
  );
};

export default MainHeader;
