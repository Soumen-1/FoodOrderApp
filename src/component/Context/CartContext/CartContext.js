import React from "react";

const CartContext = React.createContext({
    cartState:false,
    cartCount:0,
    onCartHandler:()=>{}

});

export default CartContext;