import React from "react";
import mealsimage from "../Asset/food-table.jpg";
import CartIcon from "../Cart/CartIcon";
import classes from "./MainHeader.module.css";
import Card from "../Card/Card";
const MainHeader = () => {
  return (
    <React.Fragment>
      <div className={classes["header-main"]}>
        <h2>ReactMeal</h2>
        <div className={classes.admin}>
            <a>Home</a>
            <a>Help</a>
            <a>About Us</a>
        </div>
        <CartIcon></CartIcon>
      </div>
      <img className={classes.img} src={mealsimage} alt="Food Table" />
      <Card></Card>
    </React.Fragment>
  );
};

export default MainHeader;
