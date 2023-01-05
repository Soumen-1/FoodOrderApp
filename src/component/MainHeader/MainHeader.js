
import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./MainHeader.module.css";
const MainHeader = (props) => {
  return (
    <React.Fragment>
      <div className={classes["header-main"]}>
        <h2 className={classes.title}>ReactMeal</h2>
        <div className={classes.admin}>
            <a href="no">Home</a>
            <a href="no">Help</a>
            <a href="no">About Us</a>
        </div>
        <CartIcon cartState={props.cartState} cartCount={props.cartCount} onCartHandler={props.onCartHandler}></CartIcon>
      </div>
      <div className={classes.body}></div>
      
    </React.Fragment>
  );
};

export default MainHeader;
