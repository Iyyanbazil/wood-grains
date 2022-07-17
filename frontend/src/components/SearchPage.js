import React from "react";
import { useState, useEffect } from "react";
import { useSelecor, useDispatch, useSelector } from "react-redux";
import "./SearchPage.css";
import { AiOutlineLike } from "react-icons/ai";
import { GiSmallFire } from "react-icons/gi";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiTag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Typography } from "@mui/material";
import { Rating } from "@mui/material";

const SearchPage = ({ all }) => {
  const Search = useSelector((state) => state.Search.Search);
  const filterd = all.filter(
    (elem) =>
      elem.name.toLowerCase() != Search || elem.category.toLowerCase() != Search
  );
  // if(Search===""){
  //     return(
  //         <h1>No result found</h1>
  //     )
  // }
  if (!filterd) {
    return <h1>no result found</h1>;
  }
  const showTrending=(all)=>{
    // const all=all.filter((cur)=>cur.trending==true)
    // return all
    // console.log(all);
  }
  return (
    <>
      <div>
        <img width="408rem" height="130rem" src="/images/dinning.jpg" />
      </div>
      <div className="search-filters">
        <ul className="search-filter-list">
          <div>
            Best Rated <AiOutlineLike className="icon-like-search" />
          </div>
          <div  className="trending-div-search">
           <h3 onClick={showTrending}> Trending</h3> <GiSmallFire className="icon-fire-search" />
          </div>
          <div>New Coming</div>
          <div>
            {" "}
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">Category</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            {" "}
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Price
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>{" "}
          </div>
        </ul>
      </div>
      <hr />
      {/* ********* Searched products ************ */}
      <div className="trending-product-search">
        {all
          .filter(
            (cur) =>
              cur.name.toLowerCase().includes(Search) ||
              cur.category.includes(Search) ||
              cur.desc.includes(Search)
          )
          .map((elem) => {
            return (
              <div className="product-box-search">
                <div className="search-sale-div">
                  <img src="/images/salepro.png" className="sale-search" />
                  <p>upto 25%</p>
                </div>
                <img src={elem.img} className="products-img-search" />

                <h5 className="product-name-search">{elem.name}</h5>
                <p className="product-desc-search">{elem.desc}</p>

                <h6 className="search-price">RS.{elem.price}</h6>

                {/* <Typography component="legend">Read only</Typography> */}
                <Rating name="read-only" value="4" readOnly />

                <div className="trending-div-search">
                  <BsCartPlus className="icon-cart-search" />
                  <AiOutlineHeart className="icon-cart-heart" />
                </div>
              </div>
            );
          })}
      </div>

      {/* })} */}
    </>
  );
};

export default SearchPage;
