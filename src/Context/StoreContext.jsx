import { createContext, useEffect, useState } from "react";
import { Food_List } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (cartItems[itemId]) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }));
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: 1,
      }));
    }
  };

  const RemoveFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) - 1,
    }));
  };

  // const getTotalCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const item in cartItems) {
  //     if (cartItems > 0) {
  //       let itemInfo = Food_List.find((product) => product.id === item);
  //       totalAmount += itemInfo.price * cartItems[item];
  //     }
  //   }
  //   return totalAmount;
  // };
  const getTotalCartAmount = () => {
  let totalAmount = 0;

  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = Food_List.find(
        (product) => product.id === Number(item)
      );

      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
  }

  return totalAmount;
};


  const ContextValue = {
    Food_List,
    cartItems,
    setCartItems,
    addToCart,
    RemoveFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
