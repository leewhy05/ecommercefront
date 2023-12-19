import React, { useContext, useState } from "react";
import '../styles/checkout.css'
import { Link } from "react-router-dom";
import Update from "./Update";
import Delivery from "./Delivery";
import binPic from '../assets/bin.jpg'
import CartContext from "../contexts/JazzyContent";


const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const {cart,removeItem, totalPrice,handleIncrease,handleDecrease } = useContext(CartContext)
  console.log(cart);
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
      <section className='col-lg-5 border border-3 rounded p-4'>
            <h5>Your order from</h5>
            {cart.length === 0 && <><h2>No items </h2> </>}
            <hr />
            {cart.map((cartItem) => {
              const { quantity, title, price, _id } = cartItem;
              return (
                <div
                  className="row justify-content-between align-items-center "
                  key={_id}
                >
                  {/* <hr /> */}

                  <div className='col-5 '>
                  <h2 className="fs-6 text-danger"> {title}... </h2>
                  <p className="">  </p>
                  <div className='bg-secondary w-75 '>
                    <button className="btn btn-lg" onClick={()=>handleIncrease(cartItem)}>
                      +
                    </button>
                    {quantity}
                    <button className="btn btn-lg" onClick={()=>handleDecrease(cartItem)}>
                      -
                    </button>
                  </div>
                  </div>
                  <p className="col-4">
                    
                    
                   <div className="d-flex gap-3">
                   <span role="button" onClick={() => removeItem(_id)}>
                     <img src={binPic} alt="" />
                    </span>
                    {price}
                   </div>
                  </p>
                  {/* <div className=''>
                        </div> */}
                </div>
              );
            })}
             <div>
            {totalPrice === 0 ? (
              ""
            ) : (
              <div className="d-flex justify-content-between">
                <p> Items Subtotal </p>
                  <p># {totalPrice} </p>
                {/* <div>
                </div> */}
              </div>
            )}
            <hr />
          </div>
        </section>
    </div>
  );
};

export default CheckOutPage;
