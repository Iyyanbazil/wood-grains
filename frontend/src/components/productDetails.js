import React from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
    const {id}=useParams()
  return (
   <>
   <h1>detail page</h1>
   <p>{id}</p>
   </>
  )
}

export default ProductDetails