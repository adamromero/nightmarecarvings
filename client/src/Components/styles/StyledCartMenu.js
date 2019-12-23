import styled from "styled-components";

export const StyledCartMenu = styled.nav`
   transform: translateX(0px);
   height: 100vh;
   text-align: left;
   position: fixed;
   top: 0px;
   right: 0px;
   background: #3e3e3e;
   padding: 2rem;
   transition: transform 0.2s ease-in-out 0s;
   transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "translateX(0)" : "translateX(100%)"};

   .header__cart {
      color: #f08405;
      font-size: 3rem;
      cursor: pointer;
      position: absolute;
      z-index: 999;
      top: 2rem;
      left: -5rem;
   }
`;
