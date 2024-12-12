import React, { useContext } from 'react';
import { CartContext } from '../../features/ContextProvider';
import { totalItem } from '../../features/CartReducer';
import { totalPrice } from '../../features/CartReducer';
import axios from 'axios';
import CartProduct from '../../components/CartProduct';
const Cart = () => {

  const buyfunction = async () => {
    const total = totalPrice(cart); 
    try {
      let response = await axios.post('http://localhost:8000/stripe',{total});
      if (response && response.status === 200) {
        console.log(response.data);
        window.location.href = response.data.url;//redirects the user to stripe page
      }
    } catch (error) {
      console.error("Error occurred during payment:", error);
    }
  };
  
  const { cart } = useContext(CartContext);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-8">
          {cart.map((p) => (
            <CartProduct key={p.id} product={p}></CartProduct> // Add key here
          ))}
        </div>
        <div className="col-4 p-2">
          <div className="bg-gray-600 p-4 text-white">
            <h5 className="text-lg font-bold">Total items: {totalItem(cart)}</h5>
            <h5 className="text-lg font-bold">Total price {totalPrice(cart)}</h5>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded" onClick={buyfunction}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
