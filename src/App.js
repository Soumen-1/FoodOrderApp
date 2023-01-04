import React from "react";
import ItemList from "./component/Card/ItemList";
import CartItem from "./component/Cart/CartItem";
import MainHeader from "./component/MainHeader/MainHeader";

function App() {
  return (
    <React.Fragment>
      <MainHeader></MainHeader>
      <ItemList></ItemList>
      <CartItem></CartItem>
    </React.Fragment>
  );
}

export default App;
