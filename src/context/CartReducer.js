// import React from "react";
const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      //   console.log(state, action);
      const cartProducts = [...state.cart];
      //   const updatedCart = [...state.total];
      const index = cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        cartProducts.push({ ...action.payload, quantity: 1 });
        // updatedCart + action.payload.offPrice;
      } else {
        const updatedCart = { ...cartProducts[index] };
        updatedCart.quantity++;
        cartProducts[index] = updatedCart;
      }

      return { ...state, cart: cartProducts };
    }

    default:
      return state;
  }
};

export default CartReducer;
