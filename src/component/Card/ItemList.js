import React, { useContext } from "react";
import CartContext from "../Context/CartContext/CartContext";
import Card from "./Card";
import classes from "./ItemList.module.css";

const ItemList = () => {
    const itemCtx = useContext(CartContext);
    console.log('item list');
  return (
    <div className={classes["list"]}>
      {itemCtx.itemList.map((obj) => (
        <Card item={obj} key={obj._id}></Card>
      ))}
    </div>
  );
};

export default ItemList;
