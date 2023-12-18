import React, { useContext, useState } from 'react'
import '../styles/sign.css'
import mobileImg from '../assets/jazzy.png'
import { Link, useNavigate } from 'react-router-dom'
import PostContext from '../contexts/logContext'

const SignUp = () => {
  const { setLoggedIn } = useContext(PostContext);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  async function Signin(e) {
    e.preventDefault();
    const loginDetails = {
      email,
      password,
    };

    try {
      const res = await fetch("https://ecommerce-3r9v.onrender.com/api/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(loginDetails),
      });
      const data = await res.json();
      console.log(data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        toast.success(data.msg);
        navigate("/");
        setLoggedIn(true);
      }
      if (
        data.msg === "all fields are required to login" ||
        data.errors.password === "Email or password is incorrect" ||
        data.errors.email === "Not a regitered email"
      ) {
        toast.error(data.msg || data.errors.password || data.errors.email);
      }
    } catch (error) {
      console.log(error.message);
      
    }
  }

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
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              value={password}
                onChange={(e)=>setpassword(e.target.value)}
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

export default SignUp