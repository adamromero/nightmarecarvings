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

   .pattern-image {
      cursor: pointer;
   }

   .pumpkin {
      font-size: 2.2rem;
      position: relative;
      top: 0.3rem;
   }

   .pumpkin-fill {
      color: #f08405;
   }
`;
