import "./App.css";
import Nav from "./nav/Nav";
import Home from "./Home";
import Checkout from "./checkout/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./login/Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./Firbase";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(
  "pk_test_51NPoQfFuZ28QPoBTTdN4Fgt88XdQEWmVlUgFjUwATbQhJCvtBvW8RisCQ95YdTVTK4RNmRUsHzz8x8xbSfufpoH400ONVf3APd"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispatch({
          type: "SET_USER",
          user: authuser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <>
                <Nav />
                {/* <Elements stripe={""}> */}
                <Payment />
                {/* </Elements> */}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {" "}
                <Nav /> <Home />{" "}
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Elements stripe={stripePromise}>
                  {" "}
                  <Nav /> <Checkout />{" "}
                </Elements>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
