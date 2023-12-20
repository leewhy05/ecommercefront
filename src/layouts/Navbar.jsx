import React, { useState, useContext, useEffect } from 'react'
import jazzy from '../assets/image 2.svg'
import {Outlet, Link } from 'react-router-dom'
import location from '../assets/Vector (2).svg'
import foodpan from '../assets/Vector (3).svg'
import guest from '../assets/Vector (4).svg'
import lock from '../assets/Vector (10).jpg'
import Cart from '../pages/Cart'
import '../styles/navbar.css'
import {IoChevronUpOutline, IoChevronDown} from "react-icons/io5"
import CartContext from '../contexts/JazzyContent'
import LoginHover from '../pages/LoginHover'

const Navbar = () => {
  const {cart} = useContext(CartContext)
  const [see,setSee]= useState(false)
  const [show, setShow] = useState(false);
  const [authShow, setAuthShow] = useState(false);
  const [user,setUser] = useState(null)
  const token = localStorage.getItem('token')
  let getUser = async () => {
    let response = await fetch('https://ecommerce-3r9v.onrender.com/api/user/getusername', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    let data = await response.json();
    setUser(data.firstname);
    console.log(data.firstname);
  };
   useEffect(()=>{
    getUser()
   },[])

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

 <section className='d-flex justify-content-between align-items-center gap-2'>
      <img src={foodpan} alt="" className='img-fluid'/>
     <Link to='/CheckOutPage'className='text-decoration-none'> <h5 className='d-none d-lg-block mt-2 text-danger'>All products</h5></Link>
     <div
            className="d-flex gap-3 position-relative"
            role="button"
            onClick={() => (!authShow ? setAuthShow(true) : setAuthShow(false))}
          >
            <img src={guest} alt="guest-logo" />
            <h5 className="d-none d-md-block mt-3 text-secondary">Hi,  {token ?  <> {user} </> : <> Guests </>} </h5>
            {!authShow ? (
              <div className="d-none d-md-block mt-3 text-secondary">
                <IoChevronDown />
              </div>
            ) : (
              <div className="d-none d-md-block mt-3 text-secondary">
                
                <IoChevronUpOutline />
              </div>
            )}

            <div className="position-absolute top-100 end-0 mt-3  ">
              {authShow && <LoginHover />}
            </div>
          </div>

      <div>
        <div onClick={()=>(!show ? setShow(true) :setShow(false))} className='cart-container'>
        <p className='pod'>{cart.length}</p>
        <img src={lock}alt="" role='button' className='pod2'  />
        </div>
      </div>
    
 </section>
    </nav>
    <div className='position-absolute end-0'>{show && <Cart/>}</div>
    <div className='position-absolute end-0'>{see && <LoginHover/>}</div>
    <Outlet/>
</main>
  )
}

export default Navbar
