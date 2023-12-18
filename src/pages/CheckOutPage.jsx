import React from "react";
import '../styles/checkout.css'
import { Link } from "react-router-dom";
import Update from "./Update";
import Delivery from "./Delivery";
import Bag from "../components/Bag";


const CheckOutPage = () => {
  
  return (
    <div className="row align-items-center justify-content-between">
      <div className="checkout-con container-lg my-5 col-lg-6">
        <div className="sam">
          <div className="thed mb-3">
            <h2 className="dutch mb-4">Review and place order </h2>
            <p className="rev">
              Review / Add address and fulfill payments to complete your
              purchase
            </p>
          </div>
          <div className="thed pb-4">
            <h2 className="flat">Recipient information</h2>
           <div>
           <Update/>
           </div>
          </div>
          <div className="thed pb-4">
            <h2 className="flat">Delivery Address</h2>
           <Delivery/>
          </div>

          <button className="place">Place Your Order</button>
        </div>
      </div>
      <div className="ally col-lg-6">
      <Bag/>
      </div>
    </div>
  );
};

export default CheckOutPage;
