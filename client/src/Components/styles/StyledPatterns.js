import styled from "styled-components";

export const StyledPatterns = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-gap: 3rem;
   max-width: 100rem;
   margin: auto;
   font-size: 1.6rem;

   @media (min-width: 28em) {
      grid-template-columns: repeat(2, 1fr);
   }

   @media (min-width: 40em) {
      font-size: 1.8rem;
      grid-template-columns: repeat(3, 1fr);
   }

   @media (min-width: 60em) {
      grid-template-columns: repeat(4, 1fr);
   }

   .pattern-box {
      -webkit-appearance: none;
      color: #ffffff;
      font-weight: bold;
      background: #000000;
      border: 0;
      /*animation-name: zoomInModified;
      animation-duration: 0.5s;*/
   }

   .pattern-image {
      cursor: pointer;
   }

   @keyframes zoomInModified {
      0% {
         opacity: 0;
         transform: scale3d(0.7, 0.7, 0.7);
      }
      100% {
         opacity: 1;
      }
   }
`;
