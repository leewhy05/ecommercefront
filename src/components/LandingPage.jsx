import React, { useEffect, useState } from 'react'
import jazzy from '../assets/image 4.png'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button';
import '../styles/home.css'
import Card from 'react-bootstrap/Card';
import image5 from '../assets/image 5.jpg'
import image6 from '../assets/image 6.jpg'
import image7 from '../assets/image 7.jpg'
import image8 from '../assets/image 8.jpg'
import image9 from '../assets/image 9.jpg'
import { Link } from 'react-router-dom';
import Love from './Love';


const LandingPage = () => {
  const [ data, setData] = useState ([])
  const [load, setLoad] = useState(false)
  const [minu, setMinu] = useState(0)

  const minus = ()=>{
    setMinu(minu-1)
  }

     const add = ()=>{
     setMinu(minu+1)
   }


  const getDate = async ()=>{
    try {
      setLoad(true)
      let data = await fetch('https://ecommerce-3r9v.onrender.com/api/products');
      let response = await data.json();
      setData(response.products)
      console.log(response.products);
    } catch (error) {
      console.log(error)
    }finally{
      setLoad(false)
    }

  }


    useEffect (()=>{
        document.title= 'Home || Page'
        getDate()
    },[])
  return (
    <div >
      <div className='d-flex justify-content-between w-100'>
        <div className='d-none d-lg-block'>
        <img src={jazzy} alt="" className='me-5 me-md-3 lag'/>
       </div>
        <div>
        {load && <Spinner animation="border" className='position-absolute top-50 start-50 text-danger'/>}
        <div className='row'>
          {data.map((datum)=>{
            const {title, price, _id, image}= datum
            return(
              <div key={_id} className='col-9 col-md-6 justify-content-between col-lg-4 my-3'>
              <Card className='card' >
                <Love/>
            <Link to="/SinglePage"><Card.Img variant="top" src={image} className='w'/></Link>
            
            <Card.Body>
             <p>{title}</p>
             <div className='d-flex align-items-center justify-content-between'>
              <div>
              total price
                <h4>&#8358;{price}.00</h4>
              </div>

             <p className='addfont'>
              <button className='btn btn-'>
                <button className='btn text-danger fs-2' onClick={minus}>-</button>
              {minu}
              <button className='btn text-danger fs-4' onClick={add}>+</button>
              </button>
              </p>
             </div>

             <div className='d-flex justify-content-between w-75 ps-4 '>
              <img src={image5} alt="" />
              <img src={image6} alt="" />
              <img src={image7} alt="" />
              <img src={image8} alt="" />
              <img src={image9} alt="" />
             </div>
             <Link to=''> <Button variant="danger" className='w-100'> <span>+</span> Add to cart</Button></Link>
            </Card.Body>
            </Card>
            </div>
            )
          })}
        </div>
        </div>
      </div>
     
    </div>
  )
}

export default LandingPage