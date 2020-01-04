import styled from "styled-components";

export const Buttons = styled.button`
   background: #f08405;
   border: 0;
   padding: 1rem;
   font-weight: bold;
   cursor: pointer;
   max-width: 15rem;
   margin: auto;
   color: #000;
   transition: 0.2s background;

   &:hover {
      background: #e8aa5e;
   }

   &:disabled {
      cursor: not-allowed;
      background: #e8aa5e;
   }
`;
