import React from 'react'
import { useState,useEffect,useRef } from 'react';
import { useParams } from "react-router-dom";
import { Rating } from '@mui/material';
import {useSearchParams,useNavigate} from "react-router-dom"
import "./address.css"
import axios from "axios"
import API from "./API"
import {FcApproval} from 'react-icons/fc'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { v4 as uuid } from 'uuid';
const AddressPage = ({all}) => {
  const [user,setuser]=useState({})
  const [spinner,setspinner]=useState(false)
const [pres,setpres]=useState(false)
  const [data,setdata]=useState({
    pid:"",
    orderid:"",
    uid:"",
    name:"",
    email:"",
    number:"",
    address:"",
    address2:"",
    additional:"",
    payment:"",
    quantity:"",
    color:"",
  })
  const [searchParams,setSearchParams]=useSearchParams()
  const [active, setactive] = useState("")
  const [sender,setsender]=useState(false)
  const [submit,setsubmit]=useState(false)
  const [ordid,setordid]=useState("")
 
  useEffect(() => {
   const login=window.localStorage.getItem("islogin")
   
   if(login==="true"){
    const userd=window.localStorage.getItem("user")
    console.log(JSON.parse(userd))
    if(userd){
      const parser=JSON.parse(userd)
     setuser(parser._id)
     console.log("from user")
      console.log(user)
    }
   }
  //  const ordid = uuid();
  
  }, [,submit])
  const navigate=useNavigate()
  useEffect(() => {
    setInterval(() => {
     setpres(false)
     
    }, 3000);
    
   }, [pres])
    
  // useEffect(() => {
  //   setInterval(() => {
  //     navigate(`/${id}/order`)
            
  //          }, 4000);
  // }, [pres])
  

  useEffect(() => {
    setordid(uuid())
  }, [submit])
  
  
  const {id}=useParams()
  const buyed=all.filter((elem)=>elem._id===id)
 const nameInput=useRef()
  const handleSubmit=async()=>{
    
    setsubmit(!submit)
    setspinner(true)
    console.log(id)
  
    console.log(data)
    // if(data.name==="" && data.email==="" && data.address==="" && data.number && data.payment==="" && data.payment==="" && data.quantity==="" && data.color==="" 
    // && data.pid==="" && data.uid==="" )
    if(data.name===""|| data.email==="" || data.number==="" || data.address==="" || data.quantity==="" || data.color==="" || data.payment==="")
    {
      setspinner(false)
      alert("please fill complete info")
    }else{
      // setdata({...data,orderid:ordid})
      console.log(ordid)
      const res=await axios.post(`${API}:${id}/address`,data)
      if(res){
        setspinner(false)
        setpres(true)
        // navigate(`${id}/order`)
        setdata({ name:"",
        email:"",
        number:"",
        address:"",
        additional:"",
        payment:"",
    address2:"",
      })
      
      }
    }
  
      
     
  
  }
  const today=new Date()
  const date =today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time= (today.getHours() % 12) + ':' + today.getMinutes() + ':' + today.getSeconds();
  const change=(e)=>{
    const {name,value}=e.target
    setdata({
      ...data,
      [name]:value,
      pid:id,
      uid:user,
      payment:active,
      quantity:q,
      color:c,
      time:time,
      date:date,
      orderid:ordid,
      
     
    })
  }
  const q=searchParams.get("q");
  const c=searchParams.get("c");
  
  return (
    <>
    <div className={pres ? ("alert-div-active-add"):("alert-div-closed-add")}>
<p>Order Placed <FcApproval size="2rem"/></p>
    </div>
    <div className={spinner ? ("active-spinner-add"):("disable-spinner-add")}>
    <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
</Button>{' '}
    </div>
    <h3 className='pur-pro-heading-buy'>Purchased product</h3>
   {/* <p>{date}</p>
   <p>{time}</p> */}
    {/* <p>{q}.{c}</p> */}
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
      <input className='address-input-buyed'  ref={nameInput} placeholder='Full Name' type="text" name="name" id="name" value={data.name} onChange={(e)=>change(e)}/>
      {/* <p>Email</p> */}
      <input className='address-input-buyed' name="email"  value={data.email} placeholder='Email' type="text" onChange={(e)=>change(e)} />
      {/* <p>Permanent Address:</p> */}
      <input className='address-input-buyed' name="number" id="number" value={data.number} placeholder='Phone Number' type="number" onChange={(e)=>change(e)} />
      <input className='address-input-buyed' name="address" id="address" value={data.address} placeholder='Address' type="text"  onChange={(e)=>change(e)}/>
      {/* <p>Alternative Address:</p> */}
      <input className='address-input-buyed'  name="address2"  placeholder='Address 2(Optional)' type="text" value={data.address2} onChange={(e)=>change(e)} />
    </div>
    <div className='payment-div-buy'>
      <h3 className="payment-method-heading">Payment Method</h3>
      <div className='buyed-cash-main'>
        <img className={active==="jazz" ?("active-payment"):("buyed-cash-jazz")} src="/images/jazz.jpg" onClick={()=>{setactive("jazz");setdata({...data,payment:"jazz"})}} />
        {/* <p>{active}</p> */}
        <img  className={active==="easy" ?("active-payment"):("buyed-cash-easypaisa")} src="/images/easy.png" onClick={()=>{setactive("easy");setdata({...data,payment:"easy"})}} />
        <img className={active==="delivery" ?("active-payment"):("buyed-cash-delivery")} src="/images/on delivery.png" onClick={()=>{setactive("delivery");setdata({...data,payment:"delivery"})}} />
      </div>
      <div className="cash-method-name">
        <p>Jazz Cash</p>
        <p>Easy paisa</p>
        <p>Cash on Delivery </p>
      </div>
      {/* <p>{active}</p> */}
    </div>
<div className='add-info-buy'>
    <h3 className='additional-heading'>Additional Information(optional)</h3>
    <textarea placeholder='leave comment' name="additional" id="additional" value={data.additional} onChange={(e)=>change(e)}/>
    </div>
    </div>
    <div className='submit-btn-buy'>
      <button className='submit-btn-buy-button' onClick={()=>{handleSubmit()}}>Submit</button>
    </div>
    </>
  )
}

export default AddressPage