import React from "react";
import "./trending.css";
import Dummy from "./data/dummy";
import axios from "axios";
import { useEffect,useState } from "react";
const Trending = ({all}) => {
  // const [product, setproduct] = useState([])
  // useEffect(() => {
  //  const data= axios.get("http://localhost:8000/").then((res)=>{
  //   console.log(res.data);
  //   setproduct(res.data)
  //  })

  // }, [])
  
  return (
    <>
      <div className="trending-sale">
        <p>Summer Sale is currenty on </p>
      </div>
      <div className="trending-products-main">
        <h3 className="trending-main-head">Trending Products</h3>
        <div className="trending-product">
          {all.filter((elem)=>elem.trending===true).map((curElem) => {
            return(
            <div className="product-box">
              <section>
              <img   src={curElem.img} className="products-img"/>
              <button className="shop-now-trend">Shop Now</button>
              </section>
              <h5 className="product-name">{curElem.name}</h5>
            </div>
            )
          })}
          {/* <section className='trending-product-first'>

<p>first</p>
    </section> */}
        </div>
      </div>
    </>
  );
};

export default Trending;
