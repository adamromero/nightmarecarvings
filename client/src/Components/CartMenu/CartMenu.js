import React from "react";
import { StyledCartMenu } from "../styles/StyledCartMenu";
import { MdShoppingCart } from "react-icons/md";

const CartMenu = ({ isMenuOpen, setIsMenuOpen }) => {
   return (
      <StyledCartMenu isMenuOpen={isMenuOpen}>
         <MdShoppingCart
            className="header__cart cart-icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
         />
         <h2>Cart menu</h2>
         <div>this is the cart menu</div>
         <a href="/checkout">Checkout</a>
      </StyledCartMenu>
   );
};

export default CartMenu;
