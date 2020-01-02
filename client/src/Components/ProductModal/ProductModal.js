import React from "react";
import { StyledProductModal } from "../styles/StyledProductModal";
import { Buttons } from "../styles/Buttons";
import Modal from "react-animated-modal";
import { useCart } from "react-use-cart";

const ProductModal = props => {
   const { addItem } = useCart();

   return (
      <StyledProductModal>
         <Modal visible={props.show} closemodal={props.onHide} type="fadeInUp">
            <h2>{props.content.name}</h2>
            <div className="modal-main">
               <div>
                  <img
                     className="modal-main__image"
                     src={props.content.image}
                     alt={props.content.name}
                     width="150"
                  />
                  <div className="modal-main__add">
                     <div className="modal-main__price">
                        ${props.content.price}.00
                     </div>
                     <Buttons onClick={() => addItem(props.content)}>
                        Add to Cart
                     </Buttons>
                  </div>
               </div>
               <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
               </div>
            </div>
         </Modal>
      </StyledProductModal>
   );
};

export default ProductModal;
