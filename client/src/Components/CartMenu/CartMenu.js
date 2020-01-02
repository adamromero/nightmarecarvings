import React from "react";
import { Link } from "@reach/router";

import { StyledCartMenu } from "../styles/StyledCartMenu";
import { MdShoppingCart } from "react-icons/md";
import { useCart } from "react-use-cart";

const CartMenu = ({ isMenuOpen, setIsMenuOpen }) => {
   const { totalItems, items, removeItem, cartTotal } = useCart();
   return (
      <StyledCartMenu isMenuOpen={isMenuOpen}>
         <div
            className="header__cart cart-icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
         >
            <MdShoppingCart />
            <div className="header__cart-count">
               {totalItems > 0 ? totalItems : ""}
            </div>
         </div>
         <h2 className="header__cart-heading">Cart Items</h2>
         {items.map(item => (
            <div key={item.id}>
               <img src={item.image} alt={item.name} width="100" />
               <div>{item.name}</div>
               <button onClick={() => removeItem(item.id)}>Remove Item</button>
            </div>
         ))}
         <Link to="checkout">Checkout</Link>
      </StyledCartMenu>
   );
};

export default CartMenu;
