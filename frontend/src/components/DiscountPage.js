import React from 'react'
import "./discount.css"
import { useNavigate } from 'react-router-dom'
const DiscountPage = ({all}) => {

const navigate=useNavigate()
const navigater=(id)=>{
    navigate(`/discount/${id}`)
}
  return (
    <>
 {all.filter((elem)=>elem.discount===true).map((curElem)=>{
    return(
        <>
        <div className="discount-main-div" onClick={()=>{navigater(curElem._id) }}>
            <img src={curElem.img} className="discount-main-div-img" />
            <div>
                <p>{curElem.name}</p>
            <p className="discount-main-div-desc">{curElem.desc}</p>
            <p>Rs.{curElem.price}</p>
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
            <img src={curElem.img} className="discount-main-div-img" />
            <div>
                <p>{curElem.name}</p>
            <p className="discount-main-div-desc">{curElem.desc}</p>
            <p>Rs.{curElem.price}</p>
            <p>{curElem.discount}</p>
            </div>
            
        </div>

</>
    )
 })}

    </>
  )
}

export default DiscountPage