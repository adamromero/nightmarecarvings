const express = require("express");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const app = express();
const port = process.env.PORT || 5000;

app.get("/api/customers", (req, res) => {
   const customers = [
      { id: 1, firstName: "John", lastName: "Doe" },
      { id: 2, firstName: "Steve", lastName: "Smith" },
      { id: 3, firstName: "Mary", lastName: "Swanson" }
   ];

   res.json(customers);
});

app.get("/api/patterns", (req, res) => {
   const patterns = [
      {
         id: 1,
         image: "https://via.placeholder.com/250?text=Coming+Soon",
         name: "Vampire",
         difficulty: 3
      },
      {
         id: 2,
         image: "https://via.placeholder.com/250?text=Coming+Soon",
         name: "Witch",
         difficulty: 4
      },
      {
         id: 3,
         image: "https://via.placeholder.com/250?text=Coming+Soon",
         name: "Bat",
         difficulty: 2
      },
      {
         id: 4,
         image: "https://via.placeholder.com/250?text=Coming+Soon",
         name: "Happy Halloween!",
         difficulty: 4
      }
   ];

   res.json(patterns);
});

app.post("/charge", (req, res) => {
   const amount = 1;

   stripe.customers
      .create({
         email: req.body.stripeEmail,
         source: req.body.stripeToken
      })
      .then(customer =>
         stripe.charges.create({
            amount,
            description: "sample charge",
            currency: "usd",
            customer: customer.id
         })
      )
      .then(charge => res.render("/"));
});

app.listen(port, () => console.log(`Server started on port ${port}`));
