
import classes from "./CartItem.module.css";
import CartItemList from "./CartItemList";

const CartItem = (props) => {
  const list = props.list;
  // console.log(arr);
  const cartVisibility = ()=>{
    props.cartHandler.cartHandler(!props.cartHandler.visibleCart);
  }
  return (
    <div className={classes.cart} onClick={cartVisibility}>
      <div className={classes.items}>
        {list.map((obj) => (
          <CartItemList  onCartCount={props.onCartCount} key={obj.name} item={obj}></CartItemList>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
