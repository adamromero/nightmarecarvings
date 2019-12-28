import React, { useState } from "react";
import { Link } from "@reach/router";
//import "./Header.scss";

import { StyledHeader } from "../styles/StyledHeader";
import fullmoon from "../../images/full-moon.png";
import witch from "../../images/witch.svg";

const Header = () => {
   return (
      <StyledHeader>
         <header className="header header--background">
            <div className="header__top">
               <h1 className="header--text">
                  <img
                     className="flying-witch"
                     src={witch}
                     alt="Witch"
                     width="50"
                  />
                  <img
                     className="header__image"
                     src={fullmoon}
                     alt="Full Moon"
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
