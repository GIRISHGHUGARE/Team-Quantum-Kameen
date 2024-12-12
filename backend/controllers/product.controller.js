import { Product } from "../models/product.model.js";
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51QUtTXDed9rAXbWZnvkEi0svoZfxxxugPip62FxKQhXMBrmJxkDhvYlz6guMMJXwDPEdtoOdOn6SJRK2HD5H8wOr00u9yp285m');
export const getProducts = async (req, res) => {
    Product.find()
  .then(events_table => res.json(events_table))
    .catch(err => res.json(err))
};



export const Sstripe = async (req, res) => {
    const { total } = req.body;

  const product = await stripe.products.create({
      name:"Products"
  });

  
  if(product){
      var price = await stripe.prices.create({
          product: `${product.id}`,
          unit_amount: total * 100,
          currency:'inr',
      });
  }


  if(price.id){
     var session = await stripe.checkout.sessions.create({
      line_items: [
          {
              price: `${price.id}`,
              quantity: 1,
          }
      ],
      mode:'payment',
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel',
      customer_email:'demo@gmail.com'

     }) 
  }

  res.json(session)

};