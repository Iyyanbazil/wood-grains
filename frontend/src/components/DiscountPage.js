import React from 'react'
import "./discount.css"
import { useEffect,useState } from 'react'
import API from './API'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import {BsCartPlus } from "react-icons/bs"
import {useDispatch,useSelector} from "react-redux"
import {CartActions} from "../Redux/cartSlice"
import {FcApproval} from "react-icons/fc"
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
const DiscountPage = ({all}) => {
    const [ides,setides]=useState({})
    const [currentID,setcurrentID]=useState("")
    const [alert,setalert]=useState(false)
    const [pres,setpres]=useState(false)
    const [curid,setcurid]=useState("")
    const [spinner,setspinner]=useState(false)
    const dispatch=useDispatch()
    const loading=useSelector((state)=>state.load.load)
    useEffect(() => {
        const current=window.localStorage.getItem("user")
        setides(JSON.parse(current))
        const need=JSON.parse(current)
        const islogin=window.localStorage.getItem("islogin")
        if(islogin==="true"){
          var used=need._id
          console.log(used)
          const res=axios.post(`${API}count`,{user:used}).then((res)=>{
            console.log(res.data.msg)
            if(res){
              if(res.data.msg>0){
                dispatch(CartActions.setCount(res.data.msg))
               
              }
           
            }
          })
        }
    
      }, [,pres])
      useEffect(() => {
        setTimeout(() => {
          setpres(false);
        }, 3000);
      }, [pres])

const navigate=useNavigate()
const navigater=(id)=>{
    navigate(`/discount/${id}`)
}


 const AddItem=async(pro)=>{
  setspinner(true)
  const islogin=window.localStorage.getItem("islogin")
  if(islogin==="true"){
    const data= await axios.post(API,{id:pro,userAdd:ides._id})
    if(data){
      console.log("from get")
      console.log(data.data.msg)
      dispatch(CartActions.setCount(data.data.msg))
      setspinner(false)
      setpres(true)
    }
  }else{
    navigate(`/login`)
  }


 }
  return (
    <>

<div className={pres ? ("alert-div-active"):("alert-div-closed")}>
<p>Added to Cart <FcApproval size="2rem"/></p>
    </div>
    <div className={spinner ? ("active-spinner"):("disable-spinner")}>
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
    <h3 className="discount-main-head">Discounted Products</h3>
 {all.filter((elem)=>elem.discount===true).map((curElem)=>{
    return(
        <>
        <div className="discount-main-div" >
            <img src={curElem.img} className="discount-main-div-img" onClick={()=>{navigater(curElem._id) }} />
            <div>
                <p className='discount-main-div-name' onClick={()=>{navigater(curElem._id) }}>{curElem.name}</p>
            <p className="discount-main-div-desc" onClick={()=>{navigater(curElem._id) }}>{curElem.desc}</p>
            <p className='discount-main-div-price' onClick={()=>{navigater(curElem._id) }}>Rs.{curElem.price}</p>
            <button className="add-to-cart-discount" onClick={()=>{AddItem(curElem._id)}}>
            Add to cart <BsCartPlus />
          </button>
            <p>{curElem.discount}</p>
            </div>
            
            
        </div>

</>
    )
 })}
 <hr/>
<h4><u>You may also like</u></h4>
{all.filter((elem)=>elem.discount!==true).map((curElem)=>{
    return(
        <>
        <div className="discount-main-div" onClick={()=>{navigater(curElem._id) }}>
          <div>
            <img src={curElem.img} className="discount-main-div-img" />
            </div>
            <div>
                <p>{curElem.name}</p>
            <p className="discount-main-div-desc">{curElem.desc}</p>
            <p>Rs.{curElem.price}</p>
            <p>{curElem.discount}</p>
            <button className="add-to-cart-discount" onClick={()=>{AddItem(curElem._id)}}>
            Add to cart <BsCartPlus />
          </button>
            </div>
            
        </div>

</>
    )
 })}

    </>
  )
}

export default DiscountPage