import styled from "styled-components";

export const StyledPatterns = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-row-gap: 3rem;
   max-width: 1000px;
   margin: auto;
   font-size: 1.8rem;

   @media (min-width: 40em) {
      grid-template-columns: 1fr 1fr;
   }

   @media (min-width: 60em) {
      grid-template-columns: 1fr 1fr 1fr;
   }

   .button {
      max-width: 20rem;
      padding: 1rem;
      font-size: 1.6rem;
      font-weight: bold;
      margin: auto;
      cursor: pointer;
   }

   .button--add {
      background: $scorpion;
   }
`;
