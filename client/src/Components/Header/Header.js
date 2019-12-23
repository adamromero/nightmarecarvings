import React, { useState } from "react";
import { Link } from "@reach/router";
//import "./Header.scss";

import { StyledHeader } from "../styles/StyledHeader";
//import { ReactComponent as Logo } from "./moon.svg";
import pumpkinImage from "../../images/jack-o-lantern.png";

const Header = () => {
   return (
      <StyledHeader>
         <header className="header header--background">
            <div className="header__top">
               <h1 className="header--text">
                  <img
                     className="header__image"
                     src={pumpkinImage}
                     alt="Pumpkin"
                     width="65"
                  />
                  <Link to="/" className="header__title header--text-color">
                     Nightmare Carvings
                  </Link>
               </h1>
            </div>
            <div className="header__categories">
               <div className="header--link-border"></div>
               <div className="header__links">
                  <Link
                     to="patterns"
                     className="header__link header--subtext header--text-color"
                  >
                     Patterns
                  </Link>
                  <Link
                     to="about"
                     className="header__link header--subtext header--text-color"
                  >
                     About
                  </Link>
                  <Link
                     to="account"
                     className="header__link header--subtext header--text-color"
                  >
                     FAQ
                  </Link>
                  <Link
                     to="contact"
                     className="header__link header--subtext header--text-color"
                  >
                     Contact
                  </Link>
               </div>
            </div>
         </header>
      </StyledHeader>
   );
};

export default Header;
