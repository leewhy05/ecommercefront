import React from 'react'
import '../styles/update.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const Update = () => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [recipient, setRecipient] = useState({
    lastname:"",
    firstname:'',
    email:"",
    phonenumber:""
  })

  return (
    <>
     <Button variant="" onClick={handleShow}>
    <Link className='btn btn-success btn-lg add'>
            Add Recipient
                </Link>
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title><h1 className="osho">
            Update Recipient
          </h1></Modal.Title>
    </Modal.Header>
    <Modal.Body> <div className=''>
         <div className="container-lg">
        <div className="ink">
          <div className="mb-3">
            <label className="sand d-block" htmlFor="">
              First Name
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
              Last Name
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
              Email
            </label>
            <input
              className="form-control "
              type="email"
              id="email"
              name="email"
              placeholder="example@mail.com"
            />
          </div>
          <div className="mb-3">
            <label className="sand d-block" htmlFor="">
              Phone Number
            </label>
            <div className="d-flex num-inp">
              <input type="text" placeholder="+234" className="inpp" disabled />
              <input
                className="form-control number"
                type="text"
                id="PhoneNumber"
                name="phoneNumber"
                placeholder="818 000 0000"
              />
            </div>
          </div>
        </div>
      </div>
    </div></Modal.Body>
    <Modal.Footer>
    <button className="btn sub text-white">Submit</button>
    </Modal.Footer>
  </Modal>
    </>
   
   
  )
}

export default Update