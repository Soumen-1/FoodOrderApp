import React, { useEffect, useReducer, useState } from "react";
import ItemList from "./component/Card/ItemList";
import CartItem from "./component/Cart/CartItem";
import CartContext from "./component/Context/CartContext/CartContext";
import MainHeader from "./component/MainHeader/MainHeader";
import image from '../src/component/Asset/juice.png'
const TotalCartItem = [
  
  { 
    _id: 'friedrice',
    name: "Fried Rice",
    src:require('../src/component/Asset/juice.png'),
    description:"rice rice rice rice rice rice rice",
    price: 120.4,
    quantity: 10,
  },
  {
    _id:'chickenkosha',
    name: "Chicken Kosha",
    src:'../Asset/juice.png',
    description:"rice rice rice rice rice rice ",
    price: 180.7,
    quantity: 8,
  },
  { 
    _id:'mixedveg',
    name: "Mixed Veg",
    src:'../Asset/juice.png',
    description:"rice rice rice rice rice rice" ,
    price: 140.2,
    quantity: 6,
  }
];
const CountcartHandler = (state, action) => {
  if (action.type === "decrease") {
    return { count: state.count - action.count };
  } else if (action.type === "increase") {
    return { count: state.count + action.count };
  } else if (action.type === "count") {
    return { count: action.count };
  }
};
function App() {
  const [visibleCart, setvisibleCart] = useState(false);
  const [cartCount, setCartCount] = useReducer(CountcartHandler, { count: 0 });
  useEffect(() => {
    let count = 0;
    TotalCartItem.forEach((obj) => {
      count += Number(obj.quantity);
    });
    setCartCount({ type: "count", count: count });
  }, []);
  const cartHandler = (handler) => {
    setvisibleCart(handler);
  };
  const cartCountHandler = (action) => {
    setCartCount(action);
  };
  const [cartItem,setCartItem] = useState(TotalCartItem);
  const cartItemCount=(cart)=>{
    setCartItem(cart);
  }
  return (
    <React.Fragment>
      <CartContext.Provider
        value={{
          cartState: visibleCart,
          cartCount: cartCount.count,
          onCartHandler: cartHandler,
        }}
      >
        <MainHeader></MainHeader>
      </CartContext.Provider>
      <ItemList></ItemList>
      {visibleCart && (
        <CartItem
        cartItemCount = {cartItemCount}
          onCartCount={cartCountHandler}
          list={cartItem}
        ></CartItem>
      )}
    </React.Fragment>
  );
}

export default App;
