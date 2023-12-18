import React, { useState } from 'react'
import jazzy from '../assets/image 2.svg'
import {Outlet, Link } from 'react-router-dom'
import location from '../assets/Vector (2).svg'
import foodpan from '../assets/Vector (3).svg'
import guest from '../assets/Vector (4).svg'
import cart from '../assets/cartt.svg'
import Cart from '../pages/Cart'
import '../styles/navbar.css'
import guestVector from '../assets/down.jpg'
import LoginHover from '../pages/LoginHover'

const Navbar = () => {
    const [show,setShow]= useState(false)


  return (
    <main className='container position-relative'>
        <nav className='d-flex justify-content-between align-items-center gap-3'>
     <section className='d-flex justify-content-between align-items-center gap-3 my-3'>

               <div>
                <Link to='/'>
                    <img src={jazzy} alt="" />
                </Link>
               </div>

               <div>
                <img src={location} alt="" className='d-none d-lg-block'/>
               </div>
               <h5 className='d-none d-lg-block text-danger'>Lagos, Nigeria</h5>
     </section>

     <section className='d-flex align-items-center gap-2'>
          <img src={foodpan} alt="" className='img-fluid'/>
          <h5 className='d-none d-lg-block mt-2 text-danger'>All products</h5>
          <label htmlFor='login-hover-box'>
        <div className='d-flex align-items-center gap-3 guest-con'>
            <div>
                <img  src={guest} alt="guest-icon" className='w-100' style={{width:"20px"}}/>
            </div>
              <div className='d-flex pt-3 gap-2   '>
              <p className='guest-text d-none d-lg-block fs-5 text-secondary'>Hi,Guests</p>
              <div className='guest-image d-none d-lg-block'> <img src={guestVector} alt="guest-vector" className='img-fluid' style={{width:"20px"}}/>
             </div>
             <LoginHover/>
              </div>
           
        </div>
        </label>
          <div className='poss'>
          <div className='d-flex align-items-center'>
            <div className='pic'  onClick={()=>(!show ? setShow(true) :setShow(false))}>
                <img src={cart}alt="" role='button' className='' />
               ({length})
            </div>
            <Cart/>
          </div>
          </div>
     </section>
        </nav>
        {/* <div className='position-absolute end-0'>{show && <Cart/>}</div> */}
        <Outlet/>
    </main>
  )
}

export default Navbar
