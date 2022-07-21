import React, { useContext, createContext, useReducer } from "react";
import CartReducer from "./CartReducer";
const CartContext = createContext();
const CartContextDispatcher = createContext();
const CartProvider = ({ children }) => {
  const initialValue = {
    cart: [],
    total: 0,
  };
  // useEffect(() => {
  //   const savedCartItems = JSON.parse(localStorage.getItem("cart2"));
  //   const { cart } = CartContext();
  //   if (cart) {
  //     cart.push(savedCartItems);
  //   }
  // }, []);

  // useEffect(() => {
  //   const { cart } = CartContext();

  //   localStorage.setItem("cart2", JSON.stringify(cart));
  // }, []);

  const [cart, dispatch] = useReducer(CartReducer, initialValue);
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};
export const useCartContext = () => useContext(CartContext);
export const useCartContextActions = () => {
  return useContext(CartContextDispatcher);
};

export default CartProvider;
