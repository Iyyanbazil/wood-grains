import React from 'react'
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { Rating } from '@mui/material';
import "./address.css"
const AddressPage = ({all}) => {
  const [active, setactive] = useState("")
  const {id}=useParams()
  const buyed=all.filter((elem)=>elem._id===id)
  return (
    <>
    {/* <p>this is user address page</p>
    <p>{id}</p> */}
    <h3 className='pur-pro-heading-buy'>Purchased product</h3>
    {buyed.map((cur)=>{
      return(
        <>
        <div className='buyed-product-main'>
          <img className='buyed-product-img' src={cur.img} />
          <div>
          <h1 className='buyed-product-name'>{cur.name}</h1>
          <p className='buyed-product-desc'>{cur.desc}</p>
          <Rating
        name="read-only"
        value={cur.rating}
        readOnly
        className="rating-detail"
      />
      {/* <p className="rating-detail">({cur.rating}/5 users)</p> */}
      <p className='buyed-product-price'>Rs.<b>{cur.price}</b></p>
          </div>
        </div>

       
        </>
      )
    })}
<div className='grid-div'>


    <div className='delivery-div-main'>
    <h3 className='delivery-info-head'>Delivery Information</h3>
    {/* <p>Full Name</p> */}
      <input className='address-input-buyed' placeholder='Full Name' type="text" />
      {/* <p>Email</p> */}
      <input className='address-input-buyed' placeholder='Email' type="text" />
      {/* <p>Permanent Address:</p> */}
      <input className='address-input-buyed' placeholder='Phone Number' type="number" />
      <input className='address-input-buyed' placeholder='Address' type="text" />
      {/* <p>Alternative Address:</p> */}
      <input className='address-input-buyed'  placeholder='Address 2' type="text" />
    </div>
    <div className='payment-div-buy'>
      <h3 className="payment-method-heading">Payment Method</h3>
      <div className='buyed-cash-main'>
        <img className={active==="jazz" ?("active-payment"):("buyed-cash-jazz")} src="/images/jazz.jpg" onClick={()=>{setactive("jazz")}} />
        {/* <p>{active}</p> */}
        <img  className={active==="easy" ?("active-payment"):("buyed-cash-easypaisa")} src="/images/easy.png" onClick={()=>{setactive("easy")}} />
        <img className={active==="delivery" ?("active-payment"):("buyed-cash-delivery")} src="/images/on delivery.png" onClick={()=>{setactive("delivery")}} />
      </div>
    </div>
<div className='add-info-buy'>
    <h3 className='additional-heading'>Additional Information(optional)</h3>
    <textarea placeholder='leave comment'/>
    </div>
    </div>
    <div className='submit-btn-buy'>
      <button className='submit-btn-buy-button'>Submit</button>
    </div>
    </>
  )
}

export default AddressPage