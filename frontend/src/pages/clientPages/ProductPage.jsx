import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { CartContext } from "../../features/ContextProvider";


function ProductPage() {
  const [myproducts, setmyproducts] = useState([]);
const {dispatch}=useContext(CartContext);
  useEffect(() => {
    axios
      .get("http://localhost:3001/heloo")
      .then((res) => {
        setmyproducts(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
  <Navbar></Navbar>
      {/* <header className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-8">
        <h1 className="text-4xl font-bold text-center">ProductPage</h1>
      </header> */}

      {/* Card Layout */}
      <div className="p-8">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {myproducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={product.myimages}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600 mt-2">Price: ₹{product.price}</p>
                <button
                  className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                  onClick={()=>dispatch({type:"Add",product:product})}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
