import React, { useState } from 'react'
import '../styles/sign.css'
import mobileImg from '../assets/jazzy.png'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    
  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div>
          <div className="form-con col-12  col-md-8 offset-md-2 col-lg-4 offset-lg-4">
      <div className="first text-center mt-1">
      <Link to={`/`}>
      <img className="mb-4 signup-logo" src={mobileImg} alt="" height={120}/>
            </Link>
        <h2 className="create mb-5">SIGN IN TO YOUR ACCOUNT</h2>
      </div>
      <div className=" col-md-10 col-10 offset-1 offset-md-1">
        <form>
          <div className="mb-3">
            <label className="label d-block" htmlFor="">
              Email
            </label>
            <input
            className='border border rounded lar  w-100'
              type="text"
              id="email"
              name="email"
              placeholder="example@mail.com"
            />
          </div>
          <div className="mb-3 login">
            <label className="label d-block" htmlFor="">
              Password 
            </label>
            <input
            className='border border rounded lar  w-100'
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
            />

            <button
              className="btn-password"
              onClick={handleTogglePassword}
              aria-label={passwordVisible ? "Hide password" : "Show password"}
            >
              <i
                className={`fa fa-sharp fa-light ${
                  passwordVisible ? "fa-eye" : "fa-eye-slash"
                }`}
              ></i>
            </button>
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <div>
            <input type="checkbox" id="sign"/>
            <label htmlFor="sign" className="sign">Keep me signed in</label>
            </div>
            <label><a href="#" className="reset-password">Reset Password</a></label>
          </div>

          <div className="btn1 text-center  mt-4">
            <button className="btn-create">Sign In</button>
          </div>
        </form>
      </div>

      <div className="foot p-2 text-center ">
        <p>
          Dont have an account? <a href="#">Create one</a>
        </p>
      </div>
    </div>
    </div>
  )
}

export default SignUp