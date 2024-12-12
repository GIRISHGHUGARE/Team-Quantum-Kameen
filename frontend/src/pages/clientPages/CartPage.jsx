import React, { useContext } from "react";
import { CartContext } from "../../features/ContextProvider";
import { totalItem, totalPrice } from "../../features/CartReducer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

const CartPage = () => {
  const { cart, dispatch } = useContext(CartContext);
  const Increase = (_id) => {
    console.log("ID received in Increase function:", _id);
    const Index = cart.findIndex((p) => p._id === _id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", _id });
    }
  };// to handle the increase


  const Decrease = (_id) => {
    const Index = cart.findIndex((p) => p._id === _id);
    if (cart[Index].quantity > 0) {
      dispatch({ type: "Decrease", _id });
    }
  }// to handle the decrease of each product 

  const Remove = (_id) => {
    dispatch({ type: "Remove", _id });
  }
  const buyfunction = async () => {
    const total = totalPrice(cart);
    try {
      const response = await axios.post("http://localhost:8000/api/v1/product/stripe", { total });
      if (response && response.status === 200) {
        console.log(response.data);
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Error occurred during payment:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
    >
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <div className="text-center text-gray-400">
          <p>Your cart is empty.</p>
          <Link to="/marketplace" className="text-blue-400 underline">
            Go to Marketplace
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cart.map((product, index) => (
              <motion.div
                key={index}
                className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 shadow-md flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <img
                  src={product.myimages}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-md mb-4"
                />
                <h4 className="text-lg font-semibold text-white text-center mb-2">
                  {product.name}
                </h4>
                <p className="text-green-400 font-medium text-center mb-2">
                  ₹{product.price}
                </p>
                <div className="flex space-x-2">
                  <button
                    className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md transition duration-300"
                    onClick={()=>Remove(product._id)}
                  >
                    Remove
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-md transition duration-300"
                    onClick={() => Increase(product._id)}
                  >
                    +
                  </button>
                  <span className="mx-2">{product.quantity}</span>
                  <button
                    className="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white rounded-md transition duration-300"
                    onClick={() => { console.log('Product ID passed to Decrease:', product._id); Decrease(product._id); }}
                  >
                    -
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700">
            <h5 className="text-lg font-semibold text-white mb-4">Cart Summary</h5>
            <p className="text-gray-300">
              <span className="font-bold">Total Items: </span>
              {totalItem(cart)}
            </p>
            <p className="text-gray-300">
              <span className="font-bold">Total Price: </span>
              ₹{totalPrice(cart)}
            </p>
            <button
              className="mt-4 w-full py-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-500 text-white font-bold rounded-lg transition duration-300"
              onClick={buyfunction}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CartPage;
