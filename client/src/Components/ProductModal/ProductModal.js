import React, { useState, useEffect } from "react";
import { StyledProductModal } from "../styles/StyledProductModal";
import { Buttons } from "../styles/Buttons";
import Modal from "react-modal";
import AnimationModal from "react-animated-modal";
import { useCart } from "react-use-cart";

import { GiPumpkin } from "react-icons/gi";

const ProductModal = props => {
   const { addItem, inCart } = useCart();
   const [addToCartText, setAddToCartText] = useState("Add to Cart");
   const [disabledButton, setDisabledButton] = useState(false);

   useEffect(() => {
      setAddToCartText(inCart(props.content.id) ? "Item Added" : "Add to Cart");
      setDisabledButton(inCart(props.content.id));
   }, [props]);

   const difficultyIcons = difficulty => {
      const maxDifficulty = 5;
      let a = [];
      for (let i = 0; i < maxDifficulty; i++) {
         a[i] =
            i < difficulty ? (
               <GiPumpkin key={i} className="pumpkin pumpkin-fill" />
            ) : (
               <GiPumpkin key={i} className="pumpkin" />
            );
      }
      return a;
   };

   return (
      <StyledProductModal>
         <AnimationModal
            visible={props.show}
            closemodal={props.onHide}
            type="fadeInUp"
         >
            <h2>{props.content.name}</h2>
            <div className="modal-main">
               <div>
                  <img
                     className="modal-main__image"
                     src={`images/${props.content.image}`}
                     alt={props.content.name}
                     width="200"
                  />
                  <div>
                     Difficulty:{" "}
                     {difficultyIcons(props.content.difficulty).map(
                        icon => icon
                     )}
                  </div>
                  <div className="modal-main__add">
                     <div className="modal-main__price">
                        ${(props.content.price * 0.01).toFixed(2)}
                     </div>
                     <Buttons
                        disabled={disabledButton}
                        onClick={() => {
                           addItem(props.content);
                           setAddToCartText("Item Added");
                           setDisabledButton(true);
                        }}
                     >
                        {addToCartText}
                     </Buttons>
                  </div>
               </div>
               <div className="modal-main__text">
                  <div>Carving Tips:</div>
                  {props.content.description}
               </div>
            </div>
         </AnimationModal>
      </StyledProductModal>
   );
};

export default ProductModal;
