import React from "react";
import "./trending.css";
import Dummy from "./data/dummy";
const Trending = () => {
  return (
    <>
      <div className="trending-sale">
        <p>Summer Sale is currenty on </p>
      </div>
      <div className="trending-products-main">
        <h3>Trending Products</h3>
        <div className="trending-product">
          {Dummy.map((curElem) => {
            return(
            <div className="product-box">
              <img   src={curElem.img} className="products-img"/>
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
