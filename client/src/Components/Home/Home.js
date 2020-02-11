import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Home extends Component {
   render() {
      return (
         <div>
            <h2>Welcome... to Nightmare Carvings...</h2>
            <Carousel>
               <div>
                  <img src="https://via.placeholder.com/350x250" width="350" />
               </div>
               <div>
                  <img src="https://via.placeholder.com/350x250" width="350" />
               </div>
               <div>
                  <img src="https://via.placeholder.com/350x250" width="350" />
               </div>
            </Carousel>
         </div>
      );
   }
}

export default Home;
