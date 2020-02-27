import React, { Component } from "react";
import ProductModal from "../ProductModal/ProductModal";
import { StyledPatterns } from "../styles/StyledPatterns";

class Patterns extends Component {
   state = {
      patterns: [],
      showModal: false,
      modalContent: ""
   };

   componentDidMount() {
      fetch("/api/patterns")
         .then(res => res.json())
         .then(patterns => this.setState({ patterns }));
   }

   openModal = pattern => {
      this.setState({ showModal: true, modalContent: pattern });
   };

   hideModal = () => {
      this.setState({ showModal: false });
   };

   render() {
      const { patterns } = this.state;

      return (
         <div>
            <h2>Select a pattern</h2>
            <StyledPatterns>
               {patterns.map(pattern => (
                  <div key={pattern.id}>
                     <img
                        className="pattern-image"
                        src={pattern.image}
                        alt={pattern.name}
                        onClick={() => this.openModal(pattern)}
                        width="100"
                     />
                     <div>{pattern.name}</div>
                  </div>
               ))}
               <ProductModal
                  show={this.state.showModal}
                  onHide={this.hideModal}
                  content={this.state.modalContent}
                  type="flipInX"
               />
            </StyledPatterns>
         </div>
      );
   }
}

export default Patterns;
