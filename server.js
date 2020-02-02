const express = require("express");
const keys = require("./config");
const stripe = require("stripe")(keys.STRIPE_SECRET_KEY);
const cors = require("cors");
const uuid = require("uuid/v4");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/api/patterns", (req, res) => {
   const patterns = [
      {
         id: 1,
         image:
            "http://res.freestockphotos.biz/pictures/12/12079-illustration-of-a-jack-o-lantern-pv.png",
         name: "Vampire",
         difficulty: 3,
         price: 100
      },
      {
         id: 2,
         image:
            "http://res.freestockphotos.biz/pictures/12/12079-illustration-of-a-jack-o-lantern-pv.png",
         name: "Witch",
         difficulty: 4,
         price: 100
      },
      {
         id: 3,
         image:
            "http://res.freestockphotos.biz/pictures/12/12079-illustration-of-a-jack-o-lantern-pv.png",
         name: "Bat",
         difficulty: 2,
         price: 100
      },
      {
         id: 4,
         image:
            "http://res.freestockphotos.biz/pictures/12/12079-illustration-of-a-jack-o-lantern-pv.png",
         name: "Happy Halloween!",
         difficulty: 4,
         price: 100
      },
      {
         id: 5,
         image:
            "http://res.freestockphotos.biz/pictures/12/12079-illustration-of-a-jack-o-lantern-pv.png",
         name: "Skull",
         difficulty: 3,
         price: 100
      },
      {
         id: 6,
         image:
            "http://res.freestockphotos.biz/pictures/12/12079-illustration-of-a-jack-o-lantern-pv.png",
         name: "Cat",
         difficulty: 2,
         price: 100
      },
      {
         id: 7,
         image:
            "http://res.freestockphotos.biz/pictures/12/12079-illustration-of-a-jack-o-lantern-pv.png",
         name: "Zombie",
         difficulty: 4,
         price: 100
      },
      {
         id: 8,
         image:
            "http://res.freestockphotos.biz/pictures/12/12079-illustration-of-a-jack-o-lantern-pv.png",
         name: "Castle",
         difficulty: 4,
         price: 100
      }
   ];

   res.json(patterns);
});

app.get("/", (req, res) => {
   res.send({
      message: "Hello Stripe checkout server!",
      timestamp: new Date().toISOString()
   });
});

app.post("/checkout", async (req, res) => {
   console.log("Request:", req.body);

   let error;
   let status;
   try {
      //const { product, token } = req.body;
      const { amount, token } = req.body;

      const customer = await stripe.customers.create({
         email: token.email,
         source: token.id
      });

      const idempotency_key = uuid();
      const charge = await stripe.charges.create(
         {
            amount: amount,
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
            //description: `Purchased the ${product.name}`,
            shipping: {
               name: token.card.name,
               address: {
                  line1: token.card.address_line1,
                  line2: token.card.address_line2,
                  city: token.card.address_city,
                  country: token.card.address_country,
                  postal_code: token.card.address_zip
               }
            }
         },
         {
            idempotency_key
         }
      );
      console.log("Charge:", { charge });
      status = "success";
   } catch (error) {
      console.error("Error:", error);
      status = "failure";
   }

   res.json({ error, status });
});

if (process.env.NODE_ENV === "production") {
   app.use(express.static(path.join(__dirname, "/client/build")));

   app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "/client/build", "index.html"));
   });
} else {
   app.use(express.static(path.join(__dirname, "/client/public")));
}

app.listen(port, () => console.log(`Server started on port ${port}`));
