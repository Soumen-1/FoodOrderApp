import React from "react";
import Card from "./Card";
import classes from './ItemList.module.css'

const ItemList=(props) =>{
return(<div className={classes['list']}>
    {
        props.itemList.map((obj)=><Card item ={obj} key={obj._id}></Card>)
    }
</div>);
}

export default ItemList;