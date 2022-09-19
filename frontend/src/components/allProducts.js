import React from 'react'
import Dummy from './data/dummy'
import axios from "axios"
import API from "./API"
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import "./allproduct.css"
import {Pagination} from "react-bootstrap"
import {useDispatch,useSelector} from "react-redux"
import { loadAction } from '../Redux/loadingSlice';
import { Skeleton } from '@mui/material';
import {CartActions} from "../Redux/cartSlice"
const AllProduct = (props) => {
  const [ides,setides]=useState({})
  const [currentID,setcurrentID]=useState("")
  const [alert,setalert]=useState(false)
  const [pres,setpres]=useState(false)
  const [curid,setcurid]=useState("")
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
  

const Navigate=useNavigate()
 const showDetails=(id)=>{
// window.location.pathname=`/${id}`
Navigate(`/${id}`)
 }

 const AddItem=async(pro)=>{
  const islogin=window.localStorage.getItem("islogin")
  if(islogin==="true"){
    const data= await axios.post(API,{id:pro,userAdd:ides._id})
    if(data){
      console.log("from get")
      console.log(data.data.msg)
      dispatch(CartActions.setCount(data.data.msg))
    }
  }else{
    Navigate(`/login`)
  }


 }
  return (
    <>
  
   {alert && (
        <Alert variant="success" className='alert-all-pro'>
       Added to cart
      </Alert>
      )}
      <p>{pres}</p>
    <div>
     
        <h5 className='heading-all'>All Products</h5>
    </div>
    {loading==="true" ? ( <div className="trending-product-all" >
   
   {props.all.map((curElem) => {
         return(
         <div className="product-box-all"
         //  onClick={()=>{showDetails(curElem._id)}}
          >
             
           <img   src={curElem.img} className="products-img-all" onClick={()=>{showDetails(curElem._id)}}/>
           <h5 className="product-name-all" onClick={()=>{showDetails(curElem._id)}}>{curElem.name}</h5>
           <p className='product-desc-all' onClick={()=>{showDetails(curElem._id)}}>{curElem.desc}</p>
           <h6 className='all-product-price' onClick={()=>{showDetails(curElem._id)}}>Rs.{curElem.price}</h6>
           <div className="all-div-icons">
         
             <button className="cart-button-products" onClick={()=>{AddItem(curElem._id);setpres(!pres)}}>Add to Cart <BsCartPlus className="icon-cart-all" /></button>
               
                {/* <AiOutlineHeart className="icon-heart-all" /> */}
              </div>
              
         </div>
         )
       })}
      
       </div>):(
       <div className="skel-all-home">
       <Skeleton variant="rectangular" width={190} height={218} />
       <Skeleton variant="rectangular" width={190} height={218} />
       <Skeleton variant="rectangular" width={190} height={218} />
       <Skeleton variant="rectangular" width={190} height={218} />
       </div>
       )}
   
          <div className="pagination-all">
          <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      {/* <Pagination.Ellipsis /> */}

      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item active>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
    
      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
          </div>

    </>
  )
}

export default AllProduct