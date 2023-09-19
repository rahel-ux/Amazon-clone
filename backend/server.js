require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();
app.use(express.json());
app.use(cors());

app.post("/create-payment-route", async (req, res) => {
  try {
    const { basket } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: basket.map((product) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title,
          },
          unit_amount: product.price * 100,
        },
        quantity: 1,
      })),
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/checkout`,
    });
    res.json({ id: session.id });
  } catch (error) {
    res.json({ error: error.message });
  }
});
console.log(process.env.CLIENT_URL);
console.log(process.env.STRIPE_SECRET_KEY);

app.listen(5000, console.log("server is liste"));
