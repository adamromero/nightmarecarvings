import styled from "styled-components";

export const StyledProductModal = styled.div`
   .animate-modal-overlay-enter-done {
      opacity: 0.5;
   }

   .animate-modal-overlay-enter-active,
   .animate-modal-overlay-exit-active {
      opacity: 0.5;
   }

   .react-modal {
      left: 0;
      top: 0;
   }

   .react-modal-body {
      color: #fff;
      max-width: 70rem;
      padding: 3rem 4rem 4rem;
      box-sizing: border-box;
      background: #000000;

      @media (min-width: 40em) {
         width: 100%;
      }
   }
`;
