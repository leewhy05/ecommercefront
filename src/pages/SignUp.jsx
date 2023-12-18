import React, {useState} from 'react'
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
       
        <h2 className="create mb-5">Create Your account</h2>
      </div>
      <div className=" col-md-10 col-10 offset-1 offset-md-1">
        <form>
          <div className="label mb-3">
            <label className="label d-block" htmlFor="">
              First name
            </label>
            <input
           className='border border rounded lar  w-100'
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="mb-3">
            <label className="label d-block" htmlFor="">
              Last name
            </label>
            <input
             className='border border rounded lar  w-100'
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
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
          <div className="mb-3">
            <label className="label d-block" htmlFor="">
              Phone Number
            </label>
            <div className="toolkit-con">
            <span className="toolkit">+234</span>
            <input
            className='border border rounded lar  w-100'
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="818 000 0000"
            />
            </div>
          </div>
          <div className="mb-3 login">
            <label className="label d-block" htmlFor="">
              Password (8 character minimum)
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
          <div className="er">
          </div>
          <div className="mb-3 login">
            <label className="label d-block" htmlFor="">
              Confirm Password
            </label>
            <input
             className='border border rounded lar  w-100'
              type={passwordVisible ? "text" : "password"}
              id="confirmPassWord"
              name="confirmPassWord"
              placeholder="Confirm Password"
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

          <div className="mb-3">
            <input type="checkbox" id="sign"/>
            <label htmlFor="sign" className="sign">Keep me signed in</label>
          </div>

          <div className="btn1 text-center  mt-4">
            <button className="btn-create">Create Your Account</button>
          </div>
        </form>
      </div>

      <div className="foot p-2 text-center mb-4">
        <p>
          Have an account? <a href="/SignIn">Sign in</a>
        </p>
        By creating your Quickmunch account, you agree to the <br />
        <a href="#">Terms of use</a> and <a href="#" >Privacy Policy.</a>
      </div>
    </div>
    </div>
  )
}

export default SignUp