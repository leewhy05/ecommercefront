import React, { useContext, useState } from 'react'
import '../styles/sign.css'
import mobileImg from '../assets/jazzy.png'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import PostContext from '../contexts/postContext';

const Forgetpass = () => {
  

  return (
    <div>
          <div className="form-con col-12  col-md-8 offset-md-2 col-lg-4 offset-lg-4">
      <div className="first text-center mt-1">
      <Link to={`/`}>
      <img className="mb-4 signup-logo" src={mobileImg} alt="" height={120}/>
            </Link>
        <h2 className="create mb-5">RESET YOUR PASSWORD</h2>
      </div>
      <div className=" col-md-10 col-10 offset-1 offset-md-1">
        <form>
          <div className="mb-3 login">
            <label className="label d-block" htmlFor="">
             Reset Password 
            </label>
            <input
            className='border border rounded lar  w-100'
            type='password'
              id="password"
              name="password"
              placeholder="Reset Password"
            />

            
          </div>
          <div className="btn1 text-center  mt-4">
            <button className="btn-create">RESET</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Forgetpass