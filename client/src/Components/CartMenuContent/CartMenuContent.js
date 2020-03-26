import React from "react";
import { Buttons } from "../styles/Buttons";

import { useCart } from "react-use-cart";

import { MdClose } from "react-icons/md";

const CartMenuContent = () => {
   const { isEmpty, items, removeItem } = useCart();

   if (isEmpty) {
      return <div className="header__cart-content">Your cart is empty</div>;
   }

   return (
      <div className="header__cart-content">
         {items.map(item => (
            <div className="header__cart-item" key={item.id}>
               <img src={`images/${item.image}`} alt={item.name} width="100" />
               <div>
                  <div>{item.name}</div>
                  <div>${(item.price * 0.01).toFixed(2)}</div>
               </div>
               <MdClose
                  className="remove-item"
                  onClick={() => removeItem(item.id)}
               />
            </div>
         ))}
      </div>
   );
};

export default CartMenuContent;
