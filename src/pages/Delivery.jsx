import React from 'react'
import '../styles/update.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const Delivery = () => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <Button variant="" onClick={handleShow}>
     <Link className='btn btn-success btn-lg add' to="">
            Add Delivery Address
                </Link>
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>  <h1 className="osho">
          Add Address
          </h1></Modal.Title>
    </Modal.Header>
    <Modal.Body><div className=" container-lg">
        <div className="ink">
        
          <div className="mb-3">
            <label className="sand d-block" htmlFor="">
             Select City
            </label>
            <input
              className="form-control "
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="mb-3">
            <label className="sand d-block" htmlFor="">
              House Number
            </label>
            <input
              className="form-control"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-3">
            <label className="sand d-block" htmlFor="">
              Street
            </label>
            <input
              className="form-control "
              type="email"
              id="email"
              name="email"
              placeholder="example@mail.com"
            />
          </div>
        
    </div>
   
    </div></Modal.Body>
    <Modal.Footer>
    <button className="btn sub text-white">Use This Address</button>
    </Modal.Footer>
  </Modal>
    </>
  )
}

export default Delivery