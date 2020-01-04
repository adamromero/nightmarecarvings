import React from "react";

import { useCart } from "react-use-cart";

const CartMenuContent = () => {
   const { isEmpty, items, removeItem } = useCart();

   if (isEmpty) {
      return <div className="header__cart-content">Your cart is empty</div>;
   }

   return (
      <div className="header__cart-content">
         {items.map(item => (
            <div className="header__cart-item" key={item.id}>
               <img src={item.image} alt={item.name} width="100" />
               <div>
                  <div>{item.name}</div>
                  <div>${item.price}.00</div>
                  <button onClick={() => removeItem(item.id)}>
                     Remove Item
                  </button>
               </div>
            </div>
         ))}
      </div>
   );
};

export default CartMenuContent;
