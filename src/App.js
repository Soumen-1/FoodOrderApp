import React, { useEffect, useContext, useState } from "react";
import ItemList from "./component/Card/ItemList";
import CartItem from "./component/Cart/CartItem";
import CartContext, {
  CartContextProvider,
} from "./component/Context/CartContext/CartContext";
import MainHeader from "./component/MainHeader/MainHeader";

const TOTAL_CART_ITEM = [
  {
    _id: "friedrice",
    name: "Fried Rice",
    src: "../Asset/juice.png",
    description:
      "Fried rice is a traditional Chinese preparation of cooked rice, vegetables, protein, soy sauce, and aromatics.",
    price: 120.4,
    quantity: 10,
  },
  {
    _id: "chickenkosha",
    name: "Chicken Kosha",
    src: "../Asset/juicea.png",
    description:
      "Chicken Kosha is an age-old Bengali way of cooking Chicken Curry. Like Kosha Mangsho this one is also high on spice level and not for faint-hearted",
    price: 180.7,
    quantity: 8,
  },
  {
    _id: "mixedveg",
    name: "Mixed Veg",
    src: "../Asset/juiceaa.png",
    description: "Potato, french beans, garam masala, cashew nuts, ginger",
    price: 140.2,
    quantity: 6,
  },
];

const ITEM_LIST = [
  {
    _id: "friedrice",
    name: "Fried Rice",
    src: require("../src/component/Asset/juice.png"),
    description:
      "Fried rice is a traditional Chinese preparation of cooked rice, vegetables, protein, soy sauce, and aromatics.",
    price: 120.4,
  },
  {
    _id: "chickenkosha",
    name: "Chicken Kosha",
    src: "../Asset/juice.png",
    description:
      "Chicken Kosha is an age-old Bengali way of cooking Chicken Curry. Like Kosha Mangsho this one is also high on spice level and not for faint-hearted",
    price: 180.7,
  },
  {
    _id: "mixedveg",
    name: "Mixed Veg",
    src: "../Asset/juice.png",
    description: "Potato, french beans, garam masala, cashew nuts, ginger",
    price: 140.2,
  },
  {
    _id: "chickenrezala",
    name: "Chicken Rezala",
    src: require("../src/component/Asset/juice.png"),
    description:
      "Rezala is a Mughlai-style curry made using yogurt, cashew nuts, poppy seeds, and a few whole spices",
    price: 220.4,
  },
  {
    _id: "punjabitariwalachicken",
    name: "Punjabi Tariwala Chicken",
    src: "../Asset/juice.png",
    description:
      "Tariwala Chicken is a popular Punjabi curry where chicken is cooked in a thin spicy gravy. It is best served with phulka or rice. ",
    price: 180.7,
  },
  {
    _id: "goanchickenvindaloo",
    name: "Goan Chicken Vindaloo",
    src: "../Asset/juice.png",
    description:
      "Vindaloo is a Portuguese-influenced Goan dish made by cooking meat with spices and vinegar.",
    price: 240.2,
  },
  {
    _id: "mangaloreanchickensukka",
    name: "Mangalorean Chicken Sukka (Kori Sukka)",
    src: require("../src/component/Asset/juice.png"),
    description:
      "Mangalorean Chicken Sukka or Kori Sukka is a dry Konkani chicken dish made using fresh chicken, masalas, grated fresh coconut, and it is generously tempered using ghee as well as onions",
    price: 200.4,
  },
  {
    _id: "chickenmasalacurry",
    name: "Chicken Masala Curry",
    src: "../Asset/juice.png",
    description:
      "Chicken Masala Curry is a bold, spicy, and super flavorful chicken curry made by cooking chicken in an onion tomato-based gravy (gluten-free)",
    price: 190.7,
  },
  {
    _id: "butterchicken",
    name: "Butter Chicken",
    src: "../Asset/juice.png",
    description:
      "Butter Chicken (Chicken Makhani, Murgh Makhani) is a rich and creamy North Indian curry made using boneless chicken cubes, lots of butter, and spices.",
    price: 210.2,
  },
  {
    _id: "chickentikkamasala",
    name: "Chicken Tikka Masala",
    src: require("../src/component/Asset/juice.png"),
    description:
      "Chicken Tikka Masala is a creamy and rich curry made using marinated and grilled pieces of chicken which are simmered in a rich onion tomato based gravy.",
    price: 150.4,
  },
  {
    _id: "malaichickencurry",
    name: "Malai Chicken Curry",
    src: "../Asset/juice.png",
    description:
      "Malai Chicken Curry (Murgh Malaiwala) is a rich and creamy chicken curry where chicken pieces are cooked with heavy cream, yogurt, and spices. Serve it with naan or lachha paratha for an indulgent meal (gluten-free) ",
    price: 160.7,
  },
  {
    _id: "chickensalna",
    name: "Chicken Salna",
    src: "../Asset/juice.png",
    description:
      "Chicken Salna is a thin and spicy chicken curry from Tamil Nadu, a Southern state of India. It tastes delicious with flaky parotta, biryani, or steamed rice (gluten-free).",
    price: 240.2,
  },
  {
    _id: "coconutcurrychicken",
    name: "Coconut Curry Chicken",
    src: require("../src/component/Asset/juice.png"),
    description:
      " Creamy Coconut Curry Chicken is an Indian curry dish made using chicken pieces, coconut milk, and spices",
    price: 200.4,
  },
  {
    _id: "chickenchettinad",
    name: "Chicken Chettinad",
    src: "../Asset/juice.png",
    description:
      "Spicy, full of flavors, and hearty, Chicken Chettinad is a delicious chicken curry from the Chettinad region of South India",
    price: 170.7,
  },
];

function App() {
  const [visibleCart, setvisibleCart] = useState(false);
  const cartHandler = (handler) => {
    setvisibleCart(handler);
  };
  return (
    <React.Fragment>
      <CartContextProvider
        list={TOTAL_CART_ITEM}
        visibleCart={visibleCart}
        cartHandler={cartHandler}
      >
        <MainHeader></MainHeader>
        {visibleCart && <CartItem></CartItem>}
      </CartContextProvider>
      <ItemList itemList={ITEM_LIST}></ItemList>
    </React.Fragment>
  );
}

export default App;
