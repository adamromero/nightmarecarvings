import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Home extends Component {
   render() {
      return (
         <>
            <h2 className="welcome-message animated-heading">
               Welcome to Nightmare Carvings...
            </h2>
            <div className="animated-content">
               <Carousel>
                  <div>
                     <img src="/images/vampire.png" alt="" />
                  </div>
                  <div>
                     <img src="/images/skull.png" alt="" />
                  </div>
                  <div>
                     <img src="/images/witch.png" alt="" />
                  </div>
               </Carousel>
            </div>
         </>
      );
   }
}

export default Home;
