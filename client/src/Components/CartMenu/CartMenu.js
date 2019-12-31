import React from "react";
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
         <h2>Cart menu</h2>
         <div>this is the cart menu</div>
         <a href="/checkout">Checkout</a>
      </StyledCartMenu>
   );
};

export default CartMenu;
