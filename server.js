const express = require("express");
const keys = require("./config");
const stripe = require("stripe")(keys.STRIPE_SECRET_KEY);
const cors = require("cors");
const uuid = require("uuid/v4");
const dotenv = require("dotenv");
const cacheTime = 86400000 * 30;

dotenv.config();
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

app.use(
   express.static(path.join(__dirname, "../client/public"), {
      maxAge: cacheTime,
   })
);
app.use(express.json());
app.use(cors());

app.get("/api/patterns", (req, res) => {
   const patterns = [
      {
         id: 1,
         image: "vampire.png",
         name: "Vampire",
         difficulty: 4,
         price: 100,
         description: `Begin with carving out the eyes and teeth, then proceed with the vampire's right cheek. 
         From here, you can then work on the ears, lower jaw and finally the rest of the face in smaller sections.`,
      },
      {
         id: 2,
         image: "vampires-bride.png",
         name: "Vampire Bride",
         difficulty: 5,
         price: 100,
         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
         do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco
         laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
         id: 3,
         image: "witch.png",
         name: "Witch",
         difficulty: 4,
         price: 100,
         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
         do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco
         laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
         id: 4,
         image: "skull.png",
         name: "Skull",
         difficulty: 3,
         price: 100,
         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
         do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco
         laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
         id: 5,
         image: "bat.png",
         name: "Bat",
         difficulty: 2,
         price: 100,
         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
         do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco
         laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
         id: 6,
         image: "castle.png",
         name: "Castle",
         difficulty: 4,
         price: 100,
         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
         do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco
         laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
         id: 7,
         image: "happy-halloween.png",
         name: "Happy Halloween!",
         difficulty: 3,
         price: 100,
         description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
         do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco
         laboris nisi ut aliquip ex ea commodo consequat.`,
      },
      {
         id: 8,
         image: "cat.png",
         name: "Cat",
         difficulty: 2,
         price: 100,
         description: `Begin carving on the eyes. Finish by carving out the background of the cat.`,
      },
   ];

   res.json(patterns);
});

app.post("/checkout", async (req, res) => {
   let error;
   let status;
   try {
      const { amount, token } = req.body;

      const customer = await stripe.customers.create({
         email: token.email,
         source: token.id,
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
                  postal_code: token.card.address_zip,
               },
            },
         },
         {
            idempotency_key,
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
