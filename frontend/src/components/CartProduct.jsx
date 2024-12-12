import React from 'react';
import { CartContext } from '../features/ContextProvider';
import { useContext } from 'react';
const CartProduct = ({ product}) => {
   const {cart,dispatch}=useContext(CartContext)
   
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

 const Remove=(_id)=>{
    dispatch({ type: "Remove", _id}); 
 }
    return (
        <div className="d-flex align-items-center p-3 border-bottom">
            <img src={product.myimages} alt={product.name} className="img-fluid" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <div className="flex-grow-1 ms-3">

                <h4 className="h5 mb-1">{product.name}</h4>
                <h5 className="h6 text-muted">Rs {product.price}</h5>


                <div className="d-flex align-items-center mt-2">
                    {/* <button  onClick={console.log('Product ID passed to Decrease:', product.id); Decrease(product.id)}className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
                        <b>-</b>
                    </button> */}

<button className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }} onClick={() => { console.log('Product ID passed to Decrease:', product._id); Decrease(product._id); }}><b>-</b></button>

                    <span className="mx-2">{product.quantity}</span>
                    <button onClick={() => Increase(product._id)} className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
                        <b>+</b>
                    </button>
                </div>
                {/* <button className="btn btn-warning mt-3" onClick={()=>dispatch({type:"Remove",id:product.id})}>Remove</button> */}
            <button className="btn btn-warning mt-3" onClick={()=>Remove(product._id)}>Remove</button>
                
            </div>
        </div>
    );
};

export default CartProduct;
