const express = require("express");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("/api/patterns", (req, res) => {
   const patterns = [
      {
         id: 1,
         image:
            "http://res.freestockphotos.biz/pictures/12/12079-illustration-of-a-jack-o-lantern-pv.png",
         name: "Vampire",
         difficulty: 3,
         price: 1
      },
      {
         id: 2,
         image:
            "http://res.freestockphotos.biz/pictures/12/12079-illustration-of-a-jack-o-lantern-pv.png",
         name: "Witch",
         difficulty: 4,
         price: 1
      },
      {
         id: 3,
         image:
            "http://res.freestockphotos.biz/pictures/12/12079-illustration-of-a-jack-o-lantern-pv.png",
         name: "Bat",
         difficulty: 2,
         price: 1
      },
      {
         id: 4,
         image:
            "http://res.freestockphotos.biz/pictures/12/12079-illustration-of-a-jack-o-lantern-pv.png",
         name: "Happy Halloween!",
         difficulty: 4,
         price: 1
      },
      {
         id: 5,
         image:
            "http://res.freestockphotos.biz/pictures/12/12079-illustration-of-a-jack-o-lantern-pv.png",
         name: "Skull",
         difficulty: 3,
         price: 1
      },
      {
         id: 6,
         image:
            "http://res.freestockphotos.biz/pictures/12/12079-illustration-of-a-jack-o-lantern-pv.png",
         name: "Cat",
         difficulty: 2,
         price: 1
      },
      {
         id: 7,
         image:
            "http://res.freestockphotos.biz/pictures/12/12079-illustration-of-a-jack-o-lantern-pv.png",
         name: "Zombie",
         difficulty: 4,
         price: 1
      },
      {
         id: 8,
         image:
            "http://res.freestockphotos.biz/pictures/12/12079-illustration-of-a-jack-o-lantern-pv.png",
         name: "Castle",
         difficulty: 4,
         price: 1
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

if (process.env.NODE_ENV === "production") {
   app.use(express.static(path.join(__dirname, "/client/build")));

   app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "/client/build", "index.html"));
   });
}

app.listen(port, () => console.log(`Server started on port ${port}`));
