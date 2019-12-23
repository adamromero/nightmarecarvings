import React, { Component } from "react";
import { StyledProductModal } from "../styles/StyledProductModal";

class ProductModal extends Component {
   render() {
      return (
         <React.Fragment>
            {this.props.show && (
               <StyledProductModal>
                  <div>
                     <button onClick={this.props.onHide}>Close</button>
                  </div>

                  <h2>{this.props.content.name}</h2>
                  <img
                     src={this.props.content.image}
                     alt={this.props.content.name}
                  />
                  <div>
                     <button>Add to Cart</button>
                  </div>
               </StyledProductModal>
            )}
         </React.Fragment>
      );
   }
}

export default ProductModal;
