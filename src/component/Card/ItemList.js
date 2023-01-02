import React from "react";
import Card from "./Card";
import classes from './ItemList.module.css'

const ItemList=() =>{
return(<div className={classes['list']}>
    <Card></Card>
    <Card></Card><Card></Card><Card></Card>
    <Card></Card> <Card></Card> <Card></Card> <Card></Card>
    <Card></Card>
     <Card></Card> 
     <Card></Card> 
     <Card></Card>
    
</div>);
}

export default ItemList;