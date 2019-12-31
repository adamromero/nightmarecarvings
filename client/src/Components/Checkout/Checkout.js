import React from "react";
import { useCart } from "react-use-cart";

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
               <img src={item.image} alt={item.name} />
               <div>{item.name}</div>
               <button onClick={() => removeItem(item.id)}>Remove Item</button>
            </div>
         ))}
         <br />
         <br />
         <div>Total Number of Items: {totalItems}</div>
         <div>Total: ${cartTotal}.00</div>
      </div>
   );
};

export default Checkout;
