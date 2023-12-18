import React from 'react'
import {useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SinglePage =async () => {
        const {id} = useParams()
        const data = await fetch(`https://localhost:9000/api/products/${id}`)
        const {title,price,image, description} = data
     

  useEffect(()=>{
            document.title = `Product | ${title}`
          })
        
  return (
    <div>
       
    </div>
  )
}

export default SinglePage