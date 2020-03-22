import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Home extends Component {
   render() {
      return (
         <div>
            <div>Welcome...</div>
            <div>...to Nightmare Carvings</div>
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
      );
   }
}

export default Home;
