import styled from "styled-components";

export const StyledHeader = styled.header`
   .header {
      padding: 1.2rem 0;
      position: relative;
   }

   .header__title {
      margin: 0;
      text-shadow: 2px 1px 5px;
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
      background: #00040c;
   }

   .header__link {
      display: inline-flex;

      &:first-child {
         padding: 0;
      }
   }

   .header--text-color {
      color: #f08405;
      transition: 0.2s color;

      &:hover {
         color: #fdd58e;
      }
   }

   .header--text {
      font-size: 3rem;
      text-align: center;

      @media (min-width: 40em) {
         font-size: 4rem;
      }
   }

   .header--subtext {
      font-size: 1.7rem;
      font-weight: bold;
   }

   .header--link-border {
      border-bottom: 3px solid #f08405;
      position: absolute;
      top: 50%;
      width: 100%;
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
         top: 1rem;
         right: 0.5rem;
         margin: 0;
         display: inline;
      }
   }
`;
