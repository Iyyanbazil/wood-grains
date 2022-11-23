import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchPage.css";

import { BsCartPlus } from "react-icons/bs";

import {FcApproval} from "react-icons/fc"
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios"
import API from "./API";
import { useParams } from "react-router-dom";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import {Skeleton} from "@mui/material"
import { CartActions } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { FaHourglassEnd, FaPrescriptionBottleAlt } from "react-icons/fa";

const SearchPage = ({ all }) => {
  const Search = useSelector((state) => state.Search.Search);
   const {head}=useParams();
  const [pres, setpres] = useState(false)
  const [linker, setlinker] = useState("");
  const [ides,setides]=useState({})
  const [trending,settrending]=useState(false)
  const [newComing,setnewComing]=useState(false)
  const [best,setbest]=useState(false)
  const [category,setcategory]=useState("")
  const [shower,setshower]=useState(false)
  const [header,setheader]=useState(head)
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
  const [spinner,setspinner]=useState(false)
  const filterd = all.filter(
    (elem) =>
      elem.name.toLowerCase() != Search || elem.category.toLowerCase() != Search
  );
  useEffect(() => {
    setTimeout(() => {
      setpres(false);
    }, 3000);
  }, [pres])
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
  },[shower,price,priceSee,showerCat,trending,newComing,best])
  useEffect(() => {
  if(ShowCat===true && ShowPrice===true){
  
    setfiltered(all
      .filter((ele) =>  ele.price <= price.high && ele.price >= price.low && ele.category===category  ))

  }

  
  console.log(filtered.length)
 
  
  }, [priceSee,shower,price,showerCat])
  useEffect(() => {
    settrending(false);
  setnewComing(false);
 setbest(false);
 setShowCat(false);
 setShowPrice(false);
 
 
  }, [Search])
 
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

  


   const AddItem=async(pro)=>{
    setspinner(true)
    const islogin=window.localStorage.getItem("islogin")
    if(islogin==="true"){
      
      const data= await axios.post(API,{id:pro,userAdd:ides._id})
      if(data){
        console.log("from get")
        console.log(data.data.msg)
        dispatch(CartActions.setCount(data.data.msg))
        setspinner(false)
        setpres(true)
      }
    }else{
      navigate(`/login`)
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
      {/* <div className="search-filters"> */}
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
      {/* </div> */}
      <hr />

      
      <div className={pres ? ("alert-div-active"):("alert-div-closed")}>
<p>Added to Cart <FcApproval size="2rem"/></p>
    </div>
    <div className={spinner ? ("active-spinner"):("disable-spinner")}>
    <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
</Button>{' '}
    </div>

      {head && trending===false && newComing===false && best===false && priceSee===false &&ShowCat===false && setshower===false && setshowerCat===false && <div>
        <p className="headings"> Trending <b>{head}</b> for you</p>
        {all
          .filter((ele) =>   ele.for ===head || ele.name===head || ele.purpose===head)
          .map((opek1) => {
            return (
              <>
               <div className="product-box-search" >
                 
                  <img src={opek1.img} className="products-img-search" onClick={()=>{showDetails(opek1._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(opek1._id)}}>{opek1.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(opek1._id)}}>{opek1.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(opek1._id)}}>RS.{opek1.price}</h6>
                 
                    <button className="cart-button-products"
                    onClick={()=>{AddItem(opek1._id)}}>
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                    
                  </div>
                </div>
              </>
            );
            
          })
        }
         <p className="headings"> More products</p>
      </div>
          }


      {name &&  trending===false && newComing===false && best===false && priceSee===false &&ShowCat===false  && <div>
        <p className="headings"> <b>{name}</b> for you</p>
        {all
          .filter((ele) =>  ele.name ===name || ele.for ===name )
          .map((opek1) => {
            return (
              <>
               <div className="product-box-search" >
                 
                  <img src={opek1.img} className="products-img-search" onClick={()=>{showDetails(opek1._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(opek1._id)}}>{opek1.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(opek1._id)}}>{opek1.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(opek1._id)}}>RS.{opek1.price}</h6>
                 
                    <button className="cart-button-products"
                    onClick={()=>{AddItem(opek1._id)}}>
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                    
                  </div>
                </div>
              </>
            );
            
          })
        }
         <p className="headings"> More products</p>
      </div>
          }


      {/* ********** this show when category and price filter is active ***********    */}
      {ShowCat===true && ShowPrice===true   && <div>
        
        { filtered.length >0 ? (filtered.map((opek) => {
            return (
              <>
             
               <div className="product-box-search" >
                 
                  <img src={opek.img} className="products-img-search" onClick={()=>{showDetails(opek._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(opek._id)}}>{opek.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(opek._id)}}>{opek.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(opek._id)}}>RS.{opek.price}</h6>
                 
                    <button className="cart-button-products"
                    onClick={()=>{AddItem(opek._id)}}>
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                    
                  </div>
                </div>
                <p className="more-like">you may also like</p>
              </>
              
            );
            
          })):(
          <div className="no-result-div">
          <h3>No result found for</h3>
          <p> Category:<b>{category}</b></p>
          <p> Price:<b> Rs-/{price.high}-{price.low}</b></p>
          <p className="more-like">you may also like</p>
          </div>
          )
       
          
        }
          
      </div>
          }
      
{/* *************** this show when price filter is active ************** */}
      {priceSee && <div>
        {all
          .filter((ele) =>  ele.price <= price.high && ele.price >= price.low )
          .map((opek1) => {
            return (
              <>
               <div className="product-box-search" >
                 
                  <img src={opek1.img} className="products-img-search" onClick={()=>{showDetails(opek1._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(opek1._id)}}>{opek1.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(opek1._id)}}>{opek1.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(opek1._id)}}>RS.{opek1.price}</h6>
                 
                    <button className="cart-button-products"
                    onClick={()=>{AddItem(opek1._id)}}>
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                    
                  </div>
                </div>
              </>
            );
            
          })
        }
        
      </div>
          }

          {/* ******************** this show when category filter is active ************* */}
      {showerCat && <div>
        {all
          .filter((ele) => ele.category===category)
          .map((opek2) => {
            return (
              <>
               <div className="product-box-search" >
                  
                  <img src={opek2.img} className="products-img-search" onClick={()=>{showDetails(opek2._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(opek2._id)}}>{opek2.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(opek2._id)}}>{opek2.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(opek2._id)}}>RS.{opek2.price}</h6>
                   
                    <button className="cart-button-products"
                    onClick={()=>{AddItem(opek2._id)}}>
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                    
                  </div>
                </div>
              </>
            );
            
          })
        }
      
      </div>
          }


{/* ******************* this show when best rated is selected *********************** */}
      {best && <div>
        <p className="headings"> Best Rated Products for you</p>
        {all
          .filter((ele) => ele.rating > 4)
          .map((opek3) => {
            return (
              <>
               <div className="product-box-search" >
                
                  <img src={opek3.img} className="products-img-search" onClick={()=>{showDetails(opek3._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(opek3._id)}}>{opek3.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(opek3._id)}}>{opek3.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(opek3._id)}}>RS.{opek3.price}</h6>
                  
                    <button className="cart-button-products"
                    onClick={()=>{AddItem(opek3._id)}}>
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                    
                  </div>
                </div>
              </>
            );
            
          })
        }
          
      </div>
          }


{/* ****************** this show when new coming is selected ***************** */}
      {newComing && <div>
        <p className="headings"> New Coming!!</p>
        {all
          .filter((ele) => ele.new === true)
          .map((opek4) => {
            return (
              <>
               <div className="product-box-search" >
                 
                  <img src={opek4.img} className="products-img-search" onClick={()=>{showDetails(opek4._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(opek4._id)}}>{opek4.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(opek4._id)}}>{opek4.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(opek4._id)}}>RS.{opek4.price}</h6>
                 
                    <button className="cart-button-products"
                    onClick={()=>{AddItem(opek4._id)}}>
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                    
                  </div>
                </div>
              </>
            );
            
          })
        }
        
      </div>
          }


{/* ********************** this show when trending is selected ************ */}
      {trending && <div>
        <p className="headings"> <b>Trending </b> for you</p>
        {all
          .filter((ele) => ele.trending === true)
          .map((opek5) => {
            return (
              <>
               <div className="product-box-search" >
                
                  <img src={opek5.img} className="products-img-search" onClick={()=>{showDetails(opek5._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(opek5._id)}}>{opek5.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(opek5._id)}}>{opek5.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(opek5._id)}}>RS.{opek5.price}</h6>
                   
                    <button className="cart-button-products"
                    onClick={()=>{AddItem(opek5._id)}}>
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                    
                  </div>
                </div>
              </>
            );
            
          })
        }
          
      </div>
          }

{/* ********************* this show when someone search through search box ************** */}
      {/* {Search && <div>
        {all
          .filter((ele) => ele.category === Search || ele.for === Search || ele.name ===Search)
          .map((opek6) => {
            return (
              <>
               <div className="product-box-search" >
                 
                  <img src={opek6.img} className="products-img-search" onClick={()=>{showDetails(opek6._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(opek6._id)}}>{opek6.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(opek6._id)}}>{opek6.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(opek6._id)}}>RS.{opek6.price}</h6>
                   
                    <button className="cart-button-products"
                    onClick={()=>{AddItem(opek6._id);setpres(!pres)}}>
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
          } */}
      
          {
          all
            .filter(
              (cur) => cur.name.toLowerCase().includes(Search)  
            )
            .map((elem1) => {
              return (
                <div className="product-box-search" >
                  
                  <img src={elem1.img} className="products-img-search" onClick={()=>{showDetails(elem1._id)}} />
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(elem1._id)}}>{elem1.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(elem1._id)}}>{elem1.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(elem1._id)}}>RS.{elem1.price}</h6>
                   
                    <button
                      className="cart-button-products"
                      
                      onClick={()=>{AddItem(elem1._id)}}
                    >
                      Add to Cart <BsCartPlus className="icon-cart-all" />
                    </button>
                  </div>
                  
                </div>
                
              );
            })
            }
      
      {Search && <div>
      <h3><u>You may also like</u></h3>
      {all.map((elem2) => {
              return (
                <div className="product-box-search" >
                  {/* <div className="search-sale-div">
                  <img src="/images/salepro.png" className="sale-search" />
                  
               </div> */}
                  <img src={elem2.img} className="products-img-search" onClick={()=>{showDetails(elem2._id)}}/>
                  <div>
                    <h5 className="product-name-search" onClick={()=>{showDetails(elem2._id)}}>{elem2.name}</h5>
                    <p className="product-desc-search" onClick={()=>{showDetails(elem2._id)}}>{elem2.desc}</p>

                    <h6 className="search-price" onClick={()=>{showDetails(elem2._id)}}>RS.{elem2.price}</h6>
                    {/* <div className="trending-div-search">
                   <BsCartPlus className="icon-cart-search" />
                   <AiOutlineHeart className="icon-cart-heart" />
                 </div> */}
                    <button
                      className="cart-button-products"
                      
                      onClick={()=>{AddItem(elem2._id)}}
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
