import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import LandingPage from '../components/LandingPage'

const Home = () => {
    useEffect(()=>{
        document.title = 'Jazzyburger || home'
    })
  return (
    <>
    <Hero/>
   <div className='mt-5'>
   <LandingPage/>
   </div>
    </>
  )
}

export default Home