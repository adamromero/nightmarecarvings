import styled from "styled-components";

export const StyledCartMenu = styled.nav`
   transform: translateX(0px);
   height: 100vh;
   max-width: 30rem;
   width: 100%;
   text-align: left;
   font-size: 1.6rem;
   position: fixed;
   top: 0px;
   right: 0px;
   z-index: 99;
   background: #000;
   padding: 2rem;
   border-left: 3px solid #333333;
   box-sizing: border-box;
   transition: transform 0.2s ease-in-out 0s;
   transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "translateX(0)" : "translateX(100%)"};

   a {
      color: #fff;
   }

   .header__cart {
      color: #e88e06;
      font-size: 3rem;
      cursor: pointer;
      position: absolute;
      z-index: 999;
      top: 2rem;
      left: -5rem;
   }

   .header__cart-count {
      font-family: Arial, Helvetica, sans-serif;
      position: absolute;
      top: -1.2rem;
      left: 1.1rem;
      font-size: 1.5rem;
      font-weight: bold;
      color: #ffffff;
   }

   .header__cart-heading {
      margin: 0;
      font-size: 2rem;
      text-align: center;
      color: #f08405;
   }

   .header__cart-content {
      font-size: 1.6rem;
      padding: 2rem 0;
   }

   .header__cart-item {
      display: flex;
      padding: 1rem 0;
   }
`;
