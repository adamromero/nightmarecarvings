import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import fullmoon from "../../images/full-moon.png";

const Stripe = props => {
   const publishableKey = "pk_test_Z5oTT7UDLPJT9OLXvoUKpZ5Z";
   const amount = props.total;

   async function handleToken(token, addresses) {
      const response = await axios.post("http://localhost:5000/checkout", {
         token,
         amount
      });

      const { status } = response.data;
      if (status === "success") {
         alert("success!!");
      } else {
         alert("epic failure");
      }
   }

   return (
      <StripeCheckout
         label="Pay Now"
         name="Nightmare Carvings"
         //description="Upgrade to a premium account today."
         panelLabel="Purchase" //Submit button in modal
         amount={props.total} //Amount in cents $1.00
         token={handleToken}
         stripeKey={publishableKey}
         image={fullmoon} //Pop-in header image
         billingAddress
      />
   );
};

export default Stripe;
