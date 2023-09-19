import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NPmoqCNXXpNo45vGRKfvcy0qwmbaxa3sGRN6G38i3XzoQEv4FDafgXuvQidxLWAnWtDl6mAdNnUnVHBEUnNdW1W00KzXdtydu"
);
const SubTotal2 = () => {
  const productNumber = useSelector((state) => state.cart.productNumber);
  const products = useSelector((state) => state.cart.products);
  const subTotal = useSelector((state) =>
    state.cart.products.reduce(
      (subtotal, product) => (subtotal += product.price),
      0
    )
  );
  const dispatch = useDispatch();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const response = await fetch(
      "http://localhost:4000/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products }),
      }
    );

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) console.error(result.error.message);
  };
  return (
    <>
      <div className="bg-white p-10 pt-3 mr-5 h-fit">
        <h3 className="font-medium text-xl pb-2">{`Subtotal (${productNumber} item): $${subTotal.toFixed(
          2
        )}`}</h3>
        <span className="pb-2 inline-block">
          <input type="checkbox" />
          This order contains a gift
        </span>
        <div>
          <button className="button w-full" onClick={createCheckoutSession}>
            Proceed to checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default SubTotal2;
