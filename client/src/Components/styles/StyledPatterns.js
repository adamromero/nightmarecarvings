import styled from "styled-components";

export const StyledPatterns = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-row-gap: 3rem;
   max-width: 100rem;
   margin: auto;
   font-size: 1.4rem;

   @media (min-width: 40em) {
      font-size: 1.8rem;
      grid-template-columns: repeat(2, 1fr);
   }

   @media (min-width: 60em) {
      grid-template-columns: repeat(4, 1fr);
   }
`;
