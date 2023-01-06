import React, { useEffect, useReducer, useState } from "react";
import ItemList from "./component/Card/ItemList";
import CartItem from "./component/Cart/CartItem";
import CartContext from "./component/Context/CartContext/CartContext";
import MainHeader from "./component/MainHeader/MainHeader";
const TotalCartItem = [
  { 
    _id: 'friedrice',
    name: "Fried Rice",
    price: 120.4,
    quantity: 10,
  },
  {
    _id:'chickenkosha',
    name: "Chicken Kosha",
    price: 180.7,
    quantity: 8,
  },
  { 
    _id:'mixedveg',
    name: "Mixed Veg",
    price: 140.2,
    quantity: 6,
  },
];
const CountcartHandler = (state, action) => {
  if (action.type == "decrease") {
    return { count: state.count - action.count };
  } else if (action.type == "increase") {
    return { count: state.count + action.count };
  } else if (action.type == "count") {
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
          cartHandler={{ cartHandler: cartHandler, visibleCart: visibleCart }}
          onCartCount={cartCountHandler}
          list={TotalCartItem}
        ></CartItem>
      )}
    </React.Fragment>
  );
}

export default App;
