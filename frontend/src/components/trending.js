import React, { useSyncExternalStore } from "react";
import "./trending.css";
import Dummy from "./data/dummy";
import axios from "axios";
import { useEffect,useState } from "react";
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";
import {Skeleton} from '@mui/material'
const Trending = ({all}) => {
  // const [product, setproduct] = useState([])
  // useEffect(() => {
  //  const data= axios.get("http://localhost:8000/").then((res)=>{
  //   console.log(res.data);
  //   setproduct(res.data)
  //  })

  // }, [])
  const loading=useSelector((state)=>state.load.load)
  const navigate=useNavigate()
  const routers=(name)=>{
navigate(`/trending/${name}`)
  }
  return (
    <>
    {/* {loading==="true" && (
 <div className="trending-sale">
 <p>Summer Sale is currenty on </p>

</div>
    )} */}
    <img src="./images/saleGif.gif"  className="sale-gif" />
     
      <div className="trending-header">
        <h4>Trending Products</h4>
        </div>
      {loading==="true" ?(
      <>
      <div className="trending-products-main">
       
       <div className="trending-product mobile-view">
         {all.filter((elem)=>elem.trending===true).slice(1,4).map((curElem) => {
           return(
           <div className="product-box" onClick={()=>{routers(curElem.category)}}>
            <div>
             <div className="product-img-btn">
             <img   src={curElem.img} className="products-img-trend"/>
             <button className="shop-now-trend">Shop Now</button>
             </div>
             <h5 className="product-name">{curElem.name}</h5>
             </div>
           </div>
           )
         })}
         {/* <section className='trending-product-first'>

<p>first</p>
   </section> */}
       </div>
       <div className="trending-product desktop-view">
         {all.filter((elem)=>elem.trending===true).map((curElem) => {
           return(
           <div className="product-box" onClick={()=>{routers(curElem.category)}}>
            <div>
             <div className="product-img-btn">
             <img   src={curElem.img} className="products-img-trend"/>
             <button className="shop-now-trend">Shop Now</button>
             </div>
             <h5 className="product-name">{curElem.name}</h5>
             </div>
           </div>
           )
         })}
         {/* <section className='trending-product-first'>

<p>first</p>
   </section> */}
       </div>
     </div>
      </>):(
      <>
         <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      </>)}
      
    </>
  );
};

export default Trending;
