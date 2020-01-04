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
      max-width: 70rem;
      padding: 3rem 4rem 4rem;
      box-sizing: border-box;
      background: #00040c;

      @media (min-width: 40em) {
         width: 100%;
      }
   }

   .modal-main {
      @media (min-width: 40em) {
         display: grid;
         grid-template-columns: 1fr 1fr;
      }
   }

   .modal-main__image {
      display: block;
      margin: 0 auto 2rem;
   }

   .modal-main__add {
      display: flex;
      width: 24rem;
      margin: auto;
   }

   .modal-main__price {
      font-size: 3rem;
      margin: 2rem 0 1.5rem;
   }

   .modal-main__text {
      display: flex;
      align-items: center;
   }
`;
