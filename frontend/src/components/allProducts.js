import React from 'react'
import Dummy from './data/dummy'
import { useState,useEffect } from 'react'
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import "./allproduct.css"
import {Pagination} from "react-bootstrap"
const AllProducts = (props) => {
//   const [All, setAll] = useState(props.all)
//  useEffect(() => {
// setAll(props.all)
//  }, [])
 
  return (
    <>
    <div>
     
        <h5 className='heading-all'>All Products</h5>
    </div>
    <div className="trending-product-all">
      {props.all.map((curElem) => {
            return(
            <div className="product-box-all">
              <img   src={curElem.img} className="products-img-all"/>
              <h5 className="product-name-all">{curElem.name}</h5>
              <p className='product-desc-all'>{curElem.desc}</p>
              <h6 className='all-product-price'>Rs.{curElem.price}</h6>
              <div className="all-div-icons">
                   <BsCartPlus className="icon-cart-all" />
                   <AiOutlineHeart className="icon-heart-all" />
                 </div>
            </div>
            )
          })}
          </div>
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

export default AllProducts