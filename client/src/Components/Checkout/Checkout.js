import React from "react";
import { Buttons } from "../styles/Buttons";
import { useCart } from "react-use-cart";

import Stripe from "../Stripe/Stripe";

const Checkout = () => {
   const { isEmpty, totalItems, items, removeItem, cartTotal } = useCart();

   if (isEmpty) {
      return <div>Your cart is empty</div>;
   }

   return (
      <div>
         <h2>Checkout</h2>
         {items.map(item => (
            <div key={item.id}>
               <img src={item.image} alt={item.name} width="100" />
               <div>{item.name}</div>
               <div>${(item.price * 0.01).toFixed(2)}</div>
               <Buttons onClick={() => removeItem(item.id)}>
                  Remove Item
               </Buttons>
            </div>
         ))}
         <br />
         <br />
         <div>Total Number of Items: {totalItems}</div>
         <div>Total: ${(cartTotal * 0.01).toFixed(2)}</div>
         <Stripe total={cartTotal} />
      </div>
   );
};

export default Checkout;
