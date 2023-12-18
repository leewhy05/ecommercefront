import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Bag = () => {
    const [wk,setWk] = useState(1)
  return (
    <>
    <main className='container shadow-lg bg-light'>
        <div>
            <p className='text-center fw-bolder'>Empty bag</p>
            <hr />
            {wk > 0 ? (
                <Link className='btn btn-success btn-lg' to="/CheckOutPage">
                Proceed to checkout
                </Link>
            ):(
                <button className='btn btn-success btn-lg'>Continue shopping</button>
            )
            }
        </div>

    </main>
    
    
    </>
  )
}

export default Bag