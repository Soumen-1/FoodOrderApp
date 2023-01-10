import React from "react";
import { useState, useReducer, useEffect } from "react";
const CountcartHandler = (state, action) => {
  if (action.type === "decrease") {
    return { count: state.count - action.count };
  } else if (action.type === "increase") {
    return { count: state.count + action.count };
  } else if (action.type === "count") {
    return { count: action.count };
  }
};
const CartContextProvider = (props) => {
  
  const [cartCount, setCartCount] = useReducer(CountcartHandler, { count: 0 });
  const [cartItem, setCartItem] = useState(props.list);
  const cartCountHandler = (action) => {
    setCartCount(action);
  };

  useEffect(() => {
    let count = 0;
    cartItem.forEach((obj) => {
      count += Number(obj.quantity);
    });
    console.log('in effect');
    cartCountHandler({ type: "count", count: count });
  }, []);
  const cartItemCount = (cartItem) => {
    setCartItem(cartItem);
  };

  return (
    <CartContext.Provider
      value={{
        cartItem: cartItem,
        visibleCart: props.visibleCart,
        cartCount: cartCount.count,
        cartHandler: props.cartHandler,
        cartCountHandler: cartCountHandler,
        cartItemCount: cartItemCount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

const CartContext = React.createContext({
  cartItem: [],
  visibleCart: null,
  cartCount: 0,
  cartHandler: () => {},
  cartCountHandler: () => {},
  cartItemCount: () => {},
});

export { CartContextProvider };
export default CartContext;
