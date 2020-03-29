import React, { useEffect } from "react";

import CartMenuContent from "../CartMenuContent/CartMenuContent";
import { StyledCartMenu } from "../styles/StyledCartMenu";
import { Buttons } from "../styles/Buttons";
import { useCart } from "react-use-cart";

import { slide as Menu } from "react-burger-menu";

import { MdShoppingCart } from "react-icons/md";

const ShoppingCartIcon = () => {
   const { totalItems } = useCart();

   return (
      <div className="header__cart cart-icon">
         <div className="header__cart-count">
            {totalItems > 0 ? totalItems : ""}
         </div>
         <MdShoppingCart />
      </div>
   );
};

const CartMenu = props => {
   useEffect(() => {
      document
         .querySelector(".header__cart")
         .nextElementSibling.setAttribute("id", "cartMenu");
   });

   return (
      <StyledCartMenu>
         <Menu {...props} customBurgerIcon={<ShoppingCartIcon />} right>
            <h1 className="header__cart-heading">Cart Items</h1>
            <CartMenuContent />
            <a href="/checkout">
               <Buttons>Checkout</Buttons>
            </a>
         </Menu>
      </StyledCartMenu>
   );
};

export default CartMenu;
