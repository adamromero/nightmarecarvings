import React, { Component } from "react";
import ProductModal from "../ProductModal/ProductModal";
import { StyledPatterns } from "../styles/StyledPatterns";
//import "./Patterns.scss";

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
         <StyledPatterns>
            {patterns.map(pattern => (
               <div key={pattern.id} onClick={() => this.openModal(pattern)}>
                  <img src={pattern.image} alt={pattern.name} />
                  <div>{pattern.name}</div>
                  <div>Difficulty: {pattern.difficulty}</div>
               </div>
            ))}
            <ProductModal
               show={this.state.showModal}
               onHide={this.hideModal}
               content={this.state.modalContent}
            />
         </StyledPatterns>
      );
   }
}

export default Patterns;
