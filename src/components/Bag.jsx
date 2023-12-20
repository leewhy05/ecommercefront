import React,{useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../contexts/JazzyContent'
import BinPic from '../assets/bin.jpg'

const Bag = () => {
    const { cart, removeItem, totalPrice} = useContext(CartContext)
  return (
    <>
    <main className="container p-2 shadow-lg bg-light text-danger">
        <div>
          <div className="container">
            {/* <p className="fw-bold fs-4">Your Order</p> */}

            {cart.map((cartItem) => {
              const { quantity, title, price, _id } = cartItem;
              return (
                <div
                  className="row justify-content-between align-items-center "
                  key={_id}
                >
                  <hr />

                  <p className="col-1 text-secondary"> {quantity} </p>
                  <h2 className="fs-6 col-5 text-danger"> {title}... </h2>
                  <p className="col-4">
                    
                    
                   <div className="d-flex gap-3 text-dark">
                   <span role="button" onClick={() => removeItem(_id)}>
                     <img src={BinPic} alt="" />
                    </span>
                    {price}
                   </div>
                  </p>
                  {/* <div className=''>
                        </div> */}
                </div>
              );
            })}
          </div>
          <hr />
          <div>
            {totalPrice === 0 ? (
              ""
            ) : (
              <div className="d-flex justify-content-between text-dark">
                <p> Items Subtotal </p>
                  <p># {totalPrice} </p>
                {/* <div>
                </div> */}
              </div>
            )}
            <hr />
          </div>
          <div className="d-flex justify-content-center">
          <hr />
            {cart.length > 0 ? (
              <Link className="btn btn-success w-100" to='/CheckOutPage'>
                proceed to Checkout
              </Link>
            ) : (
              <>
                <div className="">
                  <p className="text-center fw-bolder"> Empty Bag </p>

                  <Link className="btn btn-success btn-lg">
                    Continue shopping
                  </Link>
                  {/* <button className="btn btn-success btn-lg">Continue shopping</button> */}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    
    
    </>
  )
}

export default Bag