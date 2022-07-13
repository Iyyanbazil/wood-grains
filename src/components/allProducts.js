import React from 'react'
import Dummy from './data/dummy'
import "./allproduct.css"
import {Pagination} from "react-bootstrap"
const AllProducts = () => {
  return (
    <>
    <div>
        <h5 className='heading-all'>All Products</h5>
    </div>
    <div className="trending-product-all">
      {Dummy.map((curElem) => {
            return(
            <div className="product-box-all">
              <img   src={curElem.img} className="products-img"/>
              <h5 className="product-name">{curElem.name}</h5>
              <p className='product-desc-all'>{curElem.desc}</p>
              <h6>{curElem.price}</h6>
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