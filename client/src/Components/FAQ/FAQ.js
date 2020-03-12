import React, { Component } from "react";

class FAQ extends Component {
   render() {
      return (
         <div>
            <h2>Frequently Asked Questions</h2>
            <div className="content__text">
               <ul>
                  <li>Q: What is the cost of a pattern?</li>
                  <li>A: Every pattern is one dollar.</li>
                  <li>Q: How many patterns can I buy?</li>
                  <li>
                     A: There is no limit to how many patterns that can be
                     purchased.
                  </li>
                  <li>Q: How will I receive the pattern I purchased?</li>
                  <li>
                     A: The pattern will emailed as a PDF file to the email
                     address provided. If you have not received the email, check
                     your spam folder, if it is not there, contact support.
                  </li>
               </ul>
            </div>
         </div>
      );
   }
}

export default FAQ;
