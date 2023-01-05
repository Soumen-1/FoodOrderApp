import React, { useEffect, useReducer, useState } from "react";
import ItemList from "./component/Card/ItemList";
import CartItem from "./component/Cart/CartItem";
import MainHeader from "./component/MainHeader/MainHeader";
const TotalCartItem=[{
  name : 'Fried Rice',
  price : 120.40,
  quantity: 10
},
{
  name : 'Chicken Kosha',
  price : 180.70,
  quantity: 8
},
{
  name : 'Mixed Veg',
  price : 140.20,
  quantity: 6
}];
const CountcartHandler = (state,action)=>{
    if(action.type=='decrease'){
      return {count:state.count-action.count}
    }
    else if(action.type=='increase'){
      return {count:state.count+action.count}
    }
    else if(action.type=='count'){
      return {count:action.count}
    }
}
function App() {
  const [visibleCart,setvisibleCart] = useState(false);
  const [cartItem,setCartItem] = useState(TotalCartItem);
  const [cartCount,setCartCount] = useReducer(CountcartHandler,{count:0});
  useEffect(()=>{
    let count = 0;
    cartItem.forEach((obj)=>{
      count+=Number(obj.quantity);
    });
    setCartCount({type:'count',count:count});
  },[]);
  const cartHandler = (handler)=>{
    setvisibleCart(handler);
  }
  const cartCountHandler=(action)=>{
    setCartCount(action);
  }
 
  return (
    <React.Fragment>
      <MainHeader cartState={visibleCart} cartCount={cartCount.count} onCartHandler={cartHandler}></MainHeader>
      <ItemList></ItemList>
      {visibleCart && <CartItem onCartCount={cartCountHandler} list={cartItem}></CartItem>}
    </React.Fragment>
  );
}

export default App;
