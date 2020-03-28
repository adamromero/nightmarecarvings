import styled from "styled-components";

export const StyledCartMenu = styled.nav`
   a {
      color: #fff;
   }

   .bm-menu-wrap {
      height: 100vh;
      max-width: 35rem;
      width: 100% !important;
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
      transition: all 0.2s ease 0s !important;
   }

   .bm-cross {
      background: white;
   }

   .bm-cross-button {
      height: 24px;
      width: 24px;
   }

   .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      right: 0;
      top: 18px;

      @media (min-width: 40em) {
         right: 18px;
         top: 24px;
      }
   }

   .header__cart {
      color: #e88e06;
      font-size: 3rem;
      cursor: pointer;
      z-index: 999;
   }

   .header__cart-count {
      font-family: Arial, Helvetica, sans-serif;
      position: absolute;
      top: -1rem;
      left: 1.1rem;
      font-size: 1.3rem;
      font-weight: bold;
      color: #ffffff;
   }

   .header__cart-heading {
      margin: 0;
      font-size: 2rem;
      text-align: center;
      color: #f08405;
      outline: 0;
   }

   .header__cart-content {
      border-collapse: collapse;
      font-size: 1.6rem;
      margin: 2rem 0;
      width: 100%;
   }

   .header__cart-item {
      td {
         padding: 1rem 0;
         border-bottom: 1px solid #333333;
      }
   }
`;
