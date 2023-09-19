import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51NPoQfFuZ28QPoBTTdN4Fgt88XdQEWmVlUgFjUwATbQhJCvtBvW8RisCQ95YdTVTK4RNmRUsHzz8x8xbSfufpoH400ONVf3APd"
);

const Subtotal = () => {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();
console.log(basket)
console.log(typeof basket)
  const paymentHandler = async () => {
    console.log("button clicked")
    try {
      console.log("try")
       const strip = await stripePromise;
       const response = await fetch(
         "http://localhost:5000/create-payment-route",
         {
           method: "POST",
           headers: {
             "Content-type": "application/json",
           },
           body: JSON.stringify({ basket }),
         }
       );
       const session = await response.json();
       console.log(session)
       const result = await strip.redirectToCheckout({ sessionId: session.id });
        console.log(result);
        if (result.error) {
          console.error(result.error.message);
        } else {
          navigate("/payment");
        }
      
    } catch (error) {
      console.log(error)

    }
   
   
  };

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="flex items-center mt-[13px]">
              <input type="checkbox" className="mr-1" /> This order contains a
              gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="subtotalButton" onClick={paymentHandler}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
