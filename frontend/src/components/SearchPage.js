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
import { useParams } from "react-router-dom";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const SearchPage = ({ all }) => {
  const Search = useSelector((state) => state.Search.Search);
  const [linker, setlinker] = useState("")
  const filterd = all.filter(
    (elem) =>
      elem.name.toLowerCase() != Search || elem.category.toLowerCase() != Search
  );
  const linked =useParams()
  // if(Search===""){
  //     return(
  //         <h1>No result found</h1>
  //     )
  // }
  if (!filterd) {
    return <h1>no result found</h1>;
  }
  const showTrending = (all) => {
    // const all=all.filter((cur)=>cur.trending==true)
    // return all
    // console.log(all);
    console.log(linked);
    setlinker("trend")
    console.log(linker);
  };
  return (
    <>
      <div>
        <img width="100%" height="130rem" src="/images/dinning.jpg" />
      </div>
      <div className="search-filters">
        <div className="search-filter-list">
          <div className="best-rated">
            <a className={linker==="best" ? ("linked"):("not-linked")} href="#best" onClick={()=>{setlinker("best")}}>
            Best Rated 
            {/* <AiOutlineLike className="icon-like-search" /> */}
            </a> 
          </div>
          <div className="trending-div-search">
            <a className={linker==="trend" ? ("linked"):("not-linked")} href="#best" onClick={()=>{showTrending();setlinker("trend")}}> Trending</a>
            {/* <GiSmallFire className="icon-fire-search" /> */}
          </div>
          <div className="new-coming"> <a href="#best">New Coming</a></div>
          <div className="selects-div">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120, }}>
              <InputLabel id="demo-simple-select-label">Price</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          
          </div>
        </div>
      </div>
      <hr />
      {/* ********* Searched products ************ */}
      { <div className="trending-product-search">
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
                  
               </div>
               <img src={elem.img} className="products-img-search" />

               <h5 className="product-name-search">{elem.name}</h5>
                <p className="product-desc-search">{elem.desc}</p>

               <h6 className="search-price">RS.{elem.price}</h6>

                
               

                <div className="trending-div-search">
                   <BsCartPlus className="icon-cart-search" />
                   <AiOutlineHeart className="icon-cart-heart" />
                 </div>
               </div>
             );
           })}
       </div> }
      {/* <Rating name="read-only" value="4" readOnly /> */}
  
    </>
  );
};

export default SearchPage;
