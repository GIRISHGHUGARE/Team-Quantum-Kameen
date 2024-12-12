import React, { createContext, useReducer } from 'react'
export const totalItem = (cart) => {
  return cart.reduce((sum, product) => sum + product.quantity , 0)
}

export const totalPrice = (cart) => {
  return cart.reduce((total, product) => total + product.quantity * product.price , 0)
}

const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      // Add the new product to the cart
      return [...state, action.product];

    case "Remove":
      // Remove the product from the cart by matching _id
      return state.filter(p => p._id !== action._id); 

    case "Increase":
      // Find the index of the product with the given _id
      const IndexI = state.findIndex(p => p._id === action._id); 
      if (IndexI !== -1 && state[IndexI].quantity < 10) { 
        // If product found and quantity is less than 10, increase the quantity
        state[IndexI].quantity += 1;
      }
      return [...state]; // Return the updated cart

    case "Decrease":
      // Find the index of the product with the given _id
      const IndexD = state.findIndex(p => p._id === action._id); 
      if (IndexD !== -1 && state[IndexD].quantity > 1) {
        // If product found and quantity is greater than 1, decrease the quantity
        state[IndexD].quantity -= 1;
      }
      return [...state]; // Return the updated cart

    default:
      return state; // Default return if no matching action type
  }
};

export default CartReducer;
