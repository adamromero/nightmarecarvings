import React, { Component } from "react";
import ProductModal from "../ProductModal/ProductModal";
import { StyledPatterns } from "../styles/StyledPatterns";

import { GiPumpkin } from "react-icons/gi";

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

   difficultyIcons = difficulty => {
      let a = [];
      for (let i = 0; i < difficulty; i++) {
         a[i] = <GiPumpkin key={i} className="pumpkin" />;
      }

      return a;
   };

   render() {
      const { patterns } = this.state;

      return (
         <StyledPatterns>
            {patterns.map(pattern => (
               <div key={pattern.id}>
                  <img
                     className="pattern-image"
                     src={pattern.image}
                     alt={pattern.name}
                     onClick={() => this.openModal(pattern)}
                     width="150"
                  />
                  <div>{pattern.name}</div>
                  <div>
                     Difficulty:{" "}
                     {this.difficultyIcons(pattern.difficulty).map(
                        icon => icon
                     )}
                  </div>
               </div>
            ))}
            <ProductModal
               show={this.state.showModal}
               onHide={this.hideModal}
               content={this.state.modalContent}
               type="flipInX"
            />
         </StyledPatterns>
      );
   }
}

export default Patterns;
