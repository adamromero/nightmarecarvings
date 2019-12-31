import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { CartProvider } from "react-use-cart";

import "./variables.scss";
import "./index.scss";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Patterns from "./Components/Patterns/Patterns";
import About from "./Components/About/About";
//import Account from "./Components/Account/Account";
import Contact from "./Components/Contact/Contact";
import Checkout from "./Components/Checkout/Checkout";
import CartMenu from "./Components/CartMenu/CartMenu";
import FAQ from "./Components/FAQ/FAQ";

import * as serviceWorker from "./serviceWorker";

function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <div className="wrapper">
         <CartProvider id="cartProvider">
            <Header />
            <div className="content">
               <Router>
                  <Home path="/" />
                  <Patterns path="patterns" />
                  <About path="about" />
                  <FAQ path="faq" />
                  <Contact path="contact" />
                  <Checkout path="checkout" />
               </Router>
            </div>
            <footer className="footer">
               &copy; {new Date().getFullYear()} Nightmare Carvings
            </footer>
            <CartMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
         </CartProvider>
      </div>
   );
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
