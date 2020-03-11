import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Buttons } from "../styles/Buttons";

import { useCart } from "react-use-cart";

const CartMenuContent = () => {
   const { isEmpty, items, removeItem } = useCart();

   const showSettings = event => {
      event.preventDefault();
   };

   if (isEmpty) {
      return <div className="header__cart-content">Your cart is empty</div>;
   }

   /*
   return (
      <Menu>
         <a id="home" className="menu-item" href="/">
            Home
         </a>
         <a id="about" className="menu-item" href="/about">
            About
         </a>
         <a id="contact" className="menu-item" href="/contact">
            Contact
         </a>
         <a
            onClick={e => {
               showSettings(e);
            }}
            className="menu-item--small"
            href=""
         >
            Settings
         </a>
      </Menu>
   );
*/

   return (
      <div className="header__cart-content">
         {items.map(item => (
            <div className="header__cart-item" key={item.id}>
               <img src={`images/${item.image}`} alt={item.name} width="100" />
               <div>
                  <div>{item.name}</div>
                  <div>${(item.price * 0.01).toFixed(2)}</div>
                  <Buttons onClick={() => removeItem(item.id)}>
                     Remove Item
                  </Buttons>
               </div>
            </div>
         ))}
      </div>
   );
};

export default CartMenuContent;
