import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Footer from './layouts/Footer'
import CheckOutPage from './pages/CheckOutPage'
import Update from './pages/Update'
import Delivery from './pages/Delivery'
import SinglePage from './pages/SinglePage'
import { Toaster } from 'react-hot-toast';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<><Navbar/><Footer/></>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/CheckOutPage' element={<CheckOutPage/>}/>
          <Route path='/Update' element={<Update/>}/>
          <Route path='/Delivery' element={<Delivery/>}/>
          <Route path='/SinglePage' element={<SinglePage/>}/>
        </Route>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
      <Toaster/>
      
      
      
      </BrowserRouter>
    </>
  )
}

export default App
