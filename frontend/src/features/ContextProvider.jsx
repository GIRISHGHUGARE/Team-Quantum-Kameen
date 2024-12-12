import React, { createContext, useReducer } from 'react';
import CartReducer from './CartReducer';

// Create the context
export const CartContext = createContext();

const ContextProvider = ({ children }) => {
  // Use the reducer to manage the cart state
  const [cart, dispatch] = useReducer(CartReducer, []);

  return (
    // Use CartContext.Provider to provide the context value
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default ContextProvider;
