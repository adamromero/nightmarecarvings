import styled from "styled-components";

export const StyledHeader = styled.header`
   .header {
      padding: 1.2rem 0;
      position: relative;
      background: #000;
   }

   .header__title {
      margin: 0;
      /*text-shadow: 2px 1px 5px #5d370c;*/
      text-decoration: none;
      text-align: center;
   }

   .header__links {
      list-style: none;
      padding: 0;
      text-align: center;
      display: flex;
      justify-content: space-between;
      max-width: 40rem;
      margin: auto;
      position: relative;
      padding: 0 2.5rem;
      background: #000;
      visibility: hidden;

      @media screen and (min-width: 640px) {
         visibility: visible;
      }
   }

   .header__mobile-menu {
      display: block;
      text-align: center;
      font-size: 1.6rem;
      font-weight: bold;
      cursor: pointer;

      @media screen and (min-width: 640px) {
         display: none;
      }
   }

   .header__link {
      display: inline-flex;

      &:first-child {
         padding: 0;
      }
   }

   .header--text-color {
      color: #e88e06;
      transition: 0.2s color;
      /*
      &:hover {
         color: #f08405;
      }*/
   }

   .header--text {
      font-size: 2rem;
      text-align: center;

      @media (min-width: 40em) {
         font-size: 2.5rem;
         margin: 1.2rem 0;
      }
   }

   .header--subtext {
      font-size: 1.7rem;
      font-weight: bold;
   }

   @media (min-width: 40em) {
      .header--link-border {
         border-bottom: 3px solid #e88e06;
         position: absolute;
         top: 50%;
         width: 100%;
      }
   }

   .header__categories {
      position: relative;
   }

   .header__top {
      position: relative;
   }

   .header__image {
      margin: 0 auto 1rem;
      display: block;

      @media (min-width: 40em) {
         position: relative;
         top: 1.5rem;
         right: 1rem;
         margin: 0;
         display: inline;
      }
   }

   .flying-witch {
      position: relative;
      top: 0.8rem;
      transform: translateX(5rem);
      z-index: 10;
      animation: flying-witch-animation 4s 1;
      display: none;

      @media (min-width: 40em) {
         display: inline;
      }
   }

   @keyframes flying-witch-animation {
      0% {
         transform: translateX(0);
      }
      /*
      25% {
         transform: translateX(25%);
      }

      75% {
         transform: translateX(75%);
      }*/

      100% {
         transform: translateX(1500%);
      }
   }
`;
