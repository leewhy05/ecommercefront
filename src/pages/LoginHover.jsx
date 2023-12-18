import React from 'react'
import loginIcon from '../assets/Vector (1).jpg'
import signUpIcon from '../assets/Vector (2).jpg'
import { Link } from 'react-router-dom'

const LoginHover = () => {
  return (
    <div>
        <div className='login-hover-con'>
        <div className="">
       
            <Link to={`/SignIn`} className='login-con'>
            <div className="login-icon"><img src={loginIcon} alt=''></img></div>
            <div className="login-text">Login</div>
            
            </Link>
        </div>
        <Link to={`/SignUp`} className='signup-con'>
        <div className=""><img src={signUpIcon} alt='... sign up'></img></div>
            <div className="signup-text">SignUp</div>
            
            </Link>
    </div>
    </div>
  )
}

export default LoginHover