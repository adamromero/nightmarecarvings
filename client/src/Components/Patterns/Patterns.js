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
         <>
            <h2 className="animated-heading">Select a pattern</h2>
            <div className="animated-content">
               <StyledPatterns>
                  {patterns.map(pattern => (
                     <button
                        className="pattern-box"
                        key={pattern.id}
                        onClick={() => this.openModal(pattern)}
                     >
                        <img
                           className="pattern-image"
                           src={`images/${pattern.image}`}
                           alt={pattern.name}
                           width="150"
                        />
                        <div>{pattern.name}</div>
                     </button>
                  ))}
                  <ProductModal
                     show={this.state.showModal}
                     onHide={this.hideModal}
                     content={this.state.modalContent}
                     type="flipInX"
                  />
               </StyledPatterns>
            </div>
         </>
      );
   }
}

export default Patterns;
