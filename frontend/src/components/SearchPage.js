import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchPage.css";
import { AiOutlineLike } from "react-icons/ai";
import { GiSmallFire } from "react-icons/gi";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import axios from "axios"
import API from "./API";
import { useParams } from "react-router-dom";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import {Skeleton} from "@mui/material"
import { CartActions } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";

const SearchPage = ({ all }) => {
  const Search = useSelector((state) => state.Search.Search);
  const [pres, setpres] = useState(false)
  const [linker, setlinker] = useState("");
  const [ides,setides]=useState({})
  const [trending,settrending]=useState(false)
  const [newComing,setnewComing]=useState(false)
  const [best,setbest]=useState(false)
  const [category,setcategory]=useState("")
  const [shower,setshower]=useState(false)
  const [price,setprice]=useState({
    high:"",
    low:"",
    show:false,
  })
  const [ShowPrice,setShowPrice]=useState(false)
  const [ShowCat,setShowCat]=useState(false)
  const [both,setboth]=useState(false)
  const [priceSee,setpriceSee]=useState(false)
  const [filtered,setfiltered]=useState([])
  const [showerCat,setshowerCat]=useState(false)
  const filterd = all.filter(
    (elem) =>
      elem.name.toLowerCase() != Search || elem.category.toLowerCase() != Search
  );
  var newArr=[];
  const { id } = useParams();
  const linked = useParams();
  const {name}=useParams();
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(()=>{
    const current=window.localStorage.getItem("user")
    setides(JSON.parse(current))
  },[,trending,newComing,best])
  useEffect(()=>{
  if(shower===true && price.high!=="" ){
  setboth(true)
  // setshower(false)
  setpriceSee(false)
  setshowerCat(false)
  // setprice(false)
}

  

  },[shower,price,priceSee,showerCat])
  useEffect(() => {
  if(ShowCat===true && ShowPrice===true){
  
    setfiltered(all
      .filter((ele) =>  ele.price <= price.high && ele.price >= price.low && ele.category===category  ))

  }
  console.log(filtered.length)
  // setpriceSee(false)
  // if(filtered.length >0){
  //   setfinal(filtered)
  // }
  }, [priceSee,shower,price,showerCat])
  
 
  if (!filterd) {
    return <h1>no result found</h1>;
  }
  const showTrending = (all) => {
    // const all=all.filter((cur)=>cur.trending==true)
    // return all
    // console.log(all);
    console.log(linked);
    setlinker("trend");
    console.log(linker);
  };

  const AddItem=async (pro)=>{
    const islogin=window.localStorage.getItem("islogin")
     setides(JSON.parse(islogin))
    if(islogin==="true"){
      const data= await axios.post(`${API}search`,{id:pro,userAdd:ides._id})
      console.log("search cart clicked")
      if(data){
        console.log("from get")
        console.log(data.data.msg)
        dispatch(CartActions.setCount(data.data.msg))
      }
    }else{
      navigate(`/login`)
      console.log("search clicked")
    }
  
  
   }
   const showDetails=(id)=>{
   navigate(`${id}`)
   }
   const reloader=()=>{
    window.location.reload()
   }
   var high;
   var low;
  
   const pricer=(high,low)=>{
// let newObj={};
// newObj={high:high,low:low}
setprice(()=>({
  high:high,
  low:low,

}))
setShowPrice(true)
console.log(price)
console.log(priceSee)
   }

  return (
    <>
      {/* <p>{id}</p> */}
      <div>
        <img width="100%" height="130rem" src="/images/dinning.jpg" />
      </div>
      <div className="search-filters">
        <div className="search-filter-list">
          <div className="best-rated">
            <p
              className={linker === "best" ? "linked" : "not-linked"}
              
              onClick={() => {
                setlinker("best");
                // reloader()
                setbest(true);
                settrending(false);
                setnewComing(false);

                setShowCat(false);
                setshower(false);
                
              }}
            >
              Best Rated
              {/* <AiOutlineLike className="icon-like-search" /> */}
            </p>
          </div>

          <div className="trending-div-search">
            <p
              className={linker === "trend" ? "linked" : "not-linked"}
              // href="#best"
              onClick={() => {
                // showTrending();
                setlinker("trend");
                setbest(false);
                settrending(true);
                setnewComing(false);
               
                setShowCat(false);
                setshower(false);

              }}
            >
              {" "}
              Trending
            </p>
            {/* <GiSmallFire className="icon-fire-search" /> */}
          </div>
          <div className="new-coming">
           
            <p  
            className={linker === "NewComing" ? "linked" : "not-linked"}
            onClick={()=>{ setbest(false);
                settrending(false);
                setnewComing(true);
                setlinker("NewComing");
                setShowCat(false);
                setshower(false);
}}>New Coming</p>
          </div>
          <div className="selects-div">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label" onClick={()=>{setlinker("")}}>Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                onChange={()=>{setlinker("")}}
                onClick={()=>{setlinker("")}}
              >
                <MenuItem onClick={()=>{setcategory("Sofa");setshower(true);setshowerCat(true);setbest(false);
                settrending(false);
                setnewComing(false);setShowCat(true)}}  value={10}>Sofa</MenuItem>
                <MenuItem onClick={()=>{setcategory("Bed");setshower(true);setshowerCat(true);setbest(false);
                settrending(false);
                setnewComing(false);setShowCat(true)}}  value={20}>Bed</MenuItem>
                <MenuItem onClick={()=>{setcategory("Chair");setshower(true);setshowerCat(true);setbest(false);
                settrending(false);
                setnewComing(false);setShowCat(true)}} value={30}>Chair</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Price</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem onClick={()=>{pricer(high=30000,low=10000);setpriceSee(true)}} value={10}>Rs-10k-30k</MenuItem>
                <MenuItem onClick={()=>{pricer(high=100000,low=40000);setpriceSee(true)}} value={20}>Rs-40k-100k</MenuItem>
                <MenuItem onClick={()=>{pricer(high=500000,low=100000);setpriceSee(true)}} value={30}>Rs- Above 100k</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <hr />
      {/* ********* Searched products ************ */}
      {/* <p>{id}</p> */}
      {/* <Skeleton variant="rectangular" width={210} height={118} /> */}
     
      {ShowCat===true && ShowPrice===true && Search===""   && <div>
        { filtered.length >0 ? (filtered.map((opek) => {
            return (
              <>
             
               <div className="product-box-search" >
                  {/* <div className="search-sale-div">
                  <img src="/images/salepro.png" className="sale-search" />
                  
               </div> */}
                  <img src={opek.img} className="products-img-search" onClick={()=>{showDetails(opek._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(opek._id)}}>{opek.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(opek._id)}}>{opek.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(opek._id)}}>RS.{opek.price}</h6>
                    {/* <div className="trending-div-search">
                   <BsCartPlus className="icon-cart-search" />
                   <AiOutlineHeart className="icon-cart-heart" />
                 </div> */}
                    <button className="cart-button-products"
                    onClick={()=>{AddItem(opek._id);setpres(!pres)}}>
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                    
                  </div>
                </div>
              </>
            );
            
          })):(
          <div className="no-result-div">
          <h3>No result found for</h3>
          <p> Category:<b>{category}</b></p>
          <p> Price:<b> Rs-/{price.high}-{price.low}</b></p>
          </div>
          )
        // all
        //   .filter((ele) =>  ele.price <= price.high && ele.price >= price.low && ele.category===category  )
          
        }
          <h3><u> You may also like</u></h3>
      </div>
          }
      

      {priceSee && <div>
        {all
          .filter((ele) =>  ele.price <= price.high && ele.price >= price.low )
          .map((opek) => {
            return (
              <>
               <div className="product-box-search" >
                  {/* <div className="search-sale-div">
                  <img src="/images/salepro.png" className="sale-search" />
                  
               </div> */}
                  <img src={opek.img} className="products-img-search" onClick={()=>{showDetails(opek._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(opek._id)}}>{opek.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(opek._id)}}>{opek.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(opek._id)}}>RS.{opek.price}</h6>
                    {/* <div className="trending-div-search">
                   <BsCartPlus className="icon-cart-search" />
                   <AiOutlineHeart className="icon-cart-heart" />
                 </div> */}
                    <button className="cart-button-products"
                    onClick={()=>{AddItem(opek._id);setpres(!pres)}}>
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                    
                  </div>
                </div>
              </>
            );
            
          })
        }
          <h3><u> You may also like</u></h3>
      </div>
          }
      {showerCat && <div>
        {all
          .filter((ele) => ele.category===category)
          .map((opek) => {
            return (
              <>
               <div className="product-box-search" >
                  {/* <div className="search-sale-div">
                  <img src="/images/salepro.png" className="sale-search" />
                  
               </div> */}
                  <img src={opek.img} className="products-img-search" onClick={()=>{showDetails(opek._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(opek._id)}}>{opek.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(opek._id)}}>{opek.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(opek._id)}}>RS.{opek.price}</h6>
                    {/* <div className="trending-div-search">
                   <BsCartPlus className="icon-cart-search" />
                   <AiOutlineHeart className="icon-cart-heart" />
                 </div> */}
                    <button className="cart-button-products"
                    onClick={()=>{AddItem(opek._id);setpres(!pres)}}>
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                    
                  </div>
                </div>
              </>
            );
            
          })
        }
          <h3><u> You may also like</u></h3>
      </div>
          }

      {best && <div>
        {all
          .filter((ele) => ele.rating > 4)
          .map((opek) => {
            return (
              <>
               <div className="product-box-search" >
                  {/* <div className="search-sale-div">
                  <img src="/images/salepro.png" className="sale-search" />
                  
               </div> */}
                  <img src={opek.img} className="products-img-search" onClick={()=>{showDetails(opek._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(opek._id)}}>{opek.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(opek._id)}}>{opek.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(opek._id)}}>RS.{opek.price}</h6>
                    {/* <div className="trending-div-search">
                   <BsCartPlus className="icon-cart-search" />
                   <AiOutlineHeart className="icon-cart-heart" />
                 </div> */}
                    <button className="cart-button-products"
                    onClick={()=>{AddItem(opek._id);setpres(!pres)}}>
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                    
                  </div>
                </div>
              </>
            );
            
          })
        }
          <h3><u> You may also like</u></h3>
      </div>
          }

      {newComing && <div>
        {all
          .filter((ele) => ele.new === true)
          .map((opek) => {
            return (
              <>
               <div className="product-box-search" >
                  {/* <div className="search-sale-div">
                  <img src="/images/salepro.png" className="sale-search" />
                  
               </div> */}
                  <img src={opek.img} className="products-img-search" onClick={()=>{showDetails(opek._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(opek._id)}}>{opek.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(opek._id)}}>{opek.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(opek._id)}}>RS.{opek.price}</h6>
                    {/* <div className="trending-div-search">
                   <BsCartPlus className="icon-cart-search" />
                   <AiOutlineHeart className="icon-cart-heart" />
                 </div> */}
                    <button className="cart-button-products"
                    onClick={()=>{AddItem(opek._id);setpres(!pres)}}>
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                    
                  </div>
                </div>
              </>
            );
            
          })
        }
          <h3><u> You may also like</u></h3>
      </div>
          }

      {trending && <div>
        {all
          .filter((ele) => ele.trending === true)
          .map((opek) => {
            return (
              <>
               <div className="product-box-search" >
                  {/* <div className="search-sale-div">
                  <img src="/images/salepro.png" className="sale-search" />
                  
               </div> */}
                  <img src={opek.img} className="products-img-search" onClick={()=>{showDetails(opek._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(opek._id)}}>{opek.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(opek._id)}}>{opek.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(opek._id)}}>RS.{opek.price}</h6>
                    {/* <div className="trending-div-search">
                   <BsCartPlus className="icon-cart-search" />
                   <AiOutlineHeart className="icon-cart-heart" />
                 </div> */}
                    <button className="cart-button-products"
                    onClick={()=>{AddItem(opek._id);setpres(!pres)}}>
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                    
                  </div>
                </div>
              </>
            );
            
          })
        }
          <h3><u> You may also like</u></h3>
      </div>
          }

      {name && <div>
        {all
          .filter((ele) => ele.category === name || ele.for === name)
          .map((opek) => {
            return (
              <>
               <div className="product-box-search" >
                  {/* <div className="search-sale-div">
                  <img src="/images/salepro.png" className="sale-search" />
                  
               </div> */}
                  <img src={opek.img} className="products-img-search" onClick={()=>{showDetails(opek._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(opek._id)}}>{opek.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(opek._id)}}>{opek.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(opek._id)}}>RS.{opek.price}</h6>
                    {/* <div className="trending-div-search">
                   <BsCartPlus className="icon-cart-search" />
                   <AiOutlineHeart className="icon-cart-heart" />
                 </div> */}
                    <button className="cart-button-products"
                    onClick={()=>{AddItem(opek._id);setpres(!pres)}}>
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                    
                  </div>
                </div>
              </>
            );
            
          })
        }
          <h3><u> You may also like</u></h3>
      </div>
          }
      
          {all
            .filter(
              (cur) => cur.name.toLowerCase().includes(Search)
              
              // cur.for.toLowerCase()==="office"
              // cur.category.includes(Search) ||
              // cur.desc.includes(Search)
            )
            .map((elem) => {
              return (
                <div className="product-box-search" >
                  {/* <div className="search-sale-div">
                  <img src="/images/salepro.png" className="sale-search" />
                  
               </div> */}
                  <img src={elem.img} className="products-img-search" onClick={()=>{showDetails(elem._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(elem._id)}}>{elem.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(elem._id)}}>{elem.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(elem._id)}}>RS.{elem.price}</h6>
                    {/* <div className="trending-div-search">
                   <BsCartPlus className="icon-cart-search" />
                   <AiOutlineHeart className="icon-cart-heart" />
                 </div> */}
                    <button
                      className="cart-button-products"
                      
                      onClick={()=>{AddItem(elem._id);setpres(!pres)}}
                    >
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                  </div>
                </div>
              );
            })}
        {/* </div> */}
      
      {/* <Rating name="read-only" value="4" readOnly /> */}
      {Search!=="" && <div>
        <h3><u>You may also like</u></h3>
      {all.map((elem) => {
              return (
                <div className="product-box-search" >
                  {/* <div className="search-sale-div">
                  <img src="/images/salepro.png" className="sale-search" />
                  
               </div> */}
                  <img src={elem.img} className="products-img-search" onClick={()=>{showDetails(elem._id)}}/>
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(elem._id)}}>{elem.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(elem._id)}}>{elem.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(elem._id)}}>RS.{elem.price}</h6>
                    {/* <div className="trending-div-search">
                   <BsCartPlus className="icon-cart-search" />
                   <AiOutlineHeart className="icon-cart-heart" />
                 </div> */}
                    <button
                      className="cart-button-products"
                      
                      onClick={()=>{AddItem(elem._id);setpres(!pres)}}
                    >
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>}
     
    </>
  );
};

export default SearchPage;
