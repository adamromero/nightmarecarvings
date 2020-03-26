import React from "react";
import { Buttons } from "../styles/Buttons";
import { useCart } from "react-use-cart";

import Stripe from "../Stripe/Stripe";

import { MdClose } from "react-icons/md";

const Checkout = () => {
   const { isEmpty, totalItems, items, removeItem, cartTotal } = useCart();

   if (isEmpty) {
      return <div>Your cart is empty</div>;
   }

   return (
      <div>
         <h2>Checkout ({totalItems} items)</h2>
         <div className="checkout">
            <table className="checkout__list">
               <thead>
                  <tr>
                     <th>Item</th>
                     <th>Description</th>
                     <th>Price</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {items.map(item => (
                     <tr className="checkout__item" key={item.id}>
                        <td>
                           <img
                              src={`images/${item.image}`}
                              alt={item.name}
                              width="100"
                           />
                        </td>

                        <td>{item.name}</td>
                        <td>${(item.price * 0.01).toFixed(2)}</td>
                        <td>
                           <MdClose
                              className="remove-item"
                              onClick={() => removeItem(item.id)}
                              aria-label="Remove Item"
                           />
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
            <div className="checkout__purchase">
               <div>Total: ${(cartTotal * 0.01).toFixed(2)}</div>
               <Stripe total={cartTotal} />
            </div>
         </div>
      </div>
   );
};

export default Checkout;
