import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import CheckoutProducts from "./CheckoutProducts";




const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="bg-white">
      <div>
        <h1 className="text-center text-lg p-[10px] font-normal bg-[#EAEDED] border-b-1 border-[#D3D3D3]">
          Checkout (
          <Link to="/Checkout" className="no-underline">
            {basket?.length} items
          </Link>
          )
        </h1>
        <div className="flex p-5 mx-0 my-5 border-b-2 border-gray-300 ">
          <div className="flex-[.20]">
            <h3>Delivery Address</h3>
          </div>
          <div className="flex-[.80]">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Chicago, IL</p>
          </div>
        </div>
        <div className="flex p-5 mx-0 my-5 border-b-2 border-gray-300">
          <div className="flex-auto">
            <h3>Review items and delivery</h3>
          </div>

          <div className="flex-1">
            {basket.map((item) => (
              <CheckoutProducts
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="flex p-5 mx-0 my-5 border-b-2 border-gray-300">
          <div className="flex-auto">
            <h3>Payment Method</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
