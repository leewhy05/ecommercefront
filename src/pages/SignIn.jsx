import React, { useContext, useState } from 'react';
import '../styles/sign.css';
import mobileImg from '../assets/jazzy.png';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import PostContext from '../contexts/postContext';

const SignIn = () => {
  const { setLoggedIn } = useContext(PostContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  async function Signin(e) {
    e.preventDefault();
    const loginDetails = {
      email,
      password,
    };

    try {
      const data = await fetch("https://ecommerce-3r9v.onrender.com/api/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(loginDetails),
      });
      const res = await data.json();
      console.log(res);
      if (res.success === false) {
        toast.error(res.message);
      }
      if (res.token === true) {
        toast.success(res.message);
        localStorage.setItem("token", res.token);
        console.log(res);
        history('/');
        setLoggedIn(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  
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
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 login">
            <label className="label d-block" htmlFor="">
              Password 
            </label>
            <input
            className='border border rounded lar  w-100'
            type='password'
              id="password"
              name="password"
              placeholder="Password"
              value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />

            
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <div>
            <input type="checkbox" id="sign"/>
            <label htmlFor="sign" className="sign">Keep me signed in</label>
            </div>
            <label><a href="/ResetPass" className="reset-password">Reset Password</a></label>
          </div>

          <div className="btn1 text-center  mt-4">
            <button className="btn-create" onClick={Signin}>Sign In</button>
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

export default SignIn