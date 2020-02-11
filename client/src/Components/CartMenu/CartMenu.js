import React from "react";
import { Link } from "@reach/router";

import CartMenuContent from "../CartMenuContent/CartMenuContent";
import { Buttons } from "../styles/Buttons";
import { StyledCartMenu } from "../styles/StyledCartMenu";
import { MdShoppingCart } from "react-icons/md";
import { useCart } from "react-use-cart";

const CartMenu = ({ isMenuOpen, setIsMenuOpen }) => {
   const { totalItems } = useCart();

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
         <CartMenuContent />
         <a href="/checkout">
            <Buttons>Checkout</Buttons>
         </a>
      </StyledCartMenu>
   );
};

export default CartMenu;
