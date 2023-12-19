import React, { useContext } from 'react'
import loginIcon from '../assets/Vector (1).jpg'
import signUpIcon from '../assets/Vector (2).jpg'
import { Link } from 'react-router-dom'
import PostContext from '../contexts/postContext'

const LoginHover = () => {
  const {loggedIn, logout} = useContext(PostContext)
  return (
    <div>
         <main className="container p-2 shadow-lg border rounded bg-light">
        <div className=" d-flex flex-column gap-3 m-3">
          {loggedIn ? <>   <Link onClick={logout}  className="btn btn-primary text-light  fs-5 ">
            Logout
            </Link> </> : <>   <div className="d-flex bg-primary border rounded p-2 gap-3">
              <img src={loginIcon} alt="log-in-logo" /> 
            <Link to='/SignIn' className="btn text-light  fs-5 ">
            Login
            </Link>
          </div>
          <div className="d-flex p-2 gap-3 border-danger border rounded ">
              <img src={signUpIcon} alt="sign-up-logo" className="" /> 
            <Link to='/SignUp' className=" text-danger  fw-bolder btn">
            SignUp
            </Link>
          </div>  </> }
        
        </div>
      </main>
    </div>
  )
}

export default LoginHover