import React from "react";
import { Link } from "@reach/router";

import { StyledHeader } from "../styles/StyledHeader";

const Header = () => {
   return (
      <StyledHeader>
         <header className="header header--background">
            <a href="#maincontent" className="skip">
               Skip to main content
            </a>
            <div className="header__top">
               <h1 className="header--text">
                  <Link to="/" className="header__title header--text-color">
                     Nightmare Carvings
                  </Link>
               </h1>
            </div>
            <div className="header__categories">
               <div className="header--link-border"></div>
               <div className="header__mobile-menu">Menu</div>
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
                     to="faq"
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
