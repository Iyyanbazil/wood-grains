import React from "react";
import "./cart.css";
import Alert from 'react-bootstrap/Alert';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaSalesforce, FaSearch } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import {useSelector,useDispatch} from "react-redux"
import {CartActions} from "../Redux/cartSlice"
import API from "./API";
import axios from "axios";
import {Skeleton} from "@mui/material"
import {useNavigate} from "react-router-dom"
import {FcApproval} from "react-icons/fc"
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
const Cart = () => {
  const { userID } = useParams();
  const [counter, setcounter] = useState(0)
  const [recieved, setrecieved] = useState([]);
  const [alert,setalert]=useState(false)
  const [loading,setloading]=useState(true)
  const [search,setsearch]=useState("")
  const [filtered,setfiltered]=useState([{}])
 const [carter,setcarter]=useState(false)
 const [spinner,setspinner]=useState(false)
 const [pres,setpres]=useState(false)
  const dispatch=useDispatch()
 const navigate=useNavigate()
 const path=window.location.pathname;
 var newArray=[]
 useEffect(() => {
  setTimeout(() => {
    setpres(false);
  }, 3000);
}, [pres])
  useEffect(() => {
    const current = window.localStorage.getItem("user");
    const parsed = JSON.parse(current);
    // setuserID(parsed._id)
    console.log(parsed._id);
    axios.get(`${API}${userID}/cart`).then((res) => {
      console.log(res.data.CartData[0]);
      setrecieved(res.data.CartData);
     
      // setfiltered(res.data.CartData)
      console.log(res.msg)
      dispatch(CartActions.setCount(res.data.CartData.length))
      console.log(res.data.CartData.length);
      setcounter(res.data.CartData.length)
      if(res){
        setloading(false)
        if(!search)
       {
          setfiltered(res.data.CartData)
        }
      }
    //  CartSearch()
    });
const res=axios.post(`${API}${userID}/cart`)

   

  }, [alert]);
 window.setTimeout(() =>setalert(false) , 5000);
  // clearTimeout(timer);
  const reload=()=>{
    window.reload()
  }
  const clicker = (ides) => {
    setspinner(true)
    // const obj=JSON.parse(ides)
    axios.delete(`${API}${userID}/cart`,{data:{ides:ides}}).then((res)=>{
      if(res){
        setalert(true)
        // window.setTimeout(reload(),4000)
       setcarter(!carter)
       setspinner(false)
       setpres(true)
      }
      console.log(res)
    })
    console.log(ides);
  };
 

  const CartSearch = (e) => {
    setsearch(e.target.value.toLowerCase())
    console.log(search)
  
  };

  const showDetail=(id)=>{
{/* <Redirect to= /> */}
navigate(`${path}/${id}`)
  }

  return (
    <>
   
      <header className="header-cart"> My Shopping Cart</header>
      <div className="cart-main-div">
        <section className="cart-search-section">
          {/* <label>Filter</label> */}
          <input className="cart-search" type="text" placeholder="Search"
           onChange={(e)=>{CartSearch(e)}} 
          />
          <button className="search-btn-cart"
          //  onClick={CartSearch}
           >
            Search
          </button>
        </section>
      </div>

      <div className={pres ? ("alert-div-active"):("alert-div-closed")}>
<p>Delete from Cart <FcApproval size="2rem"/></p>
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
      {loading &&(
    <div>
<Skeleton variant="text" sx={{ fontSize: '1rem' }} />

<div className="body-skelton-cart">
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width={210} height={60} />
<Skeleton variant="rectangular" width={210} height={60} />
</div>
<div className="body-skelton-cart-2">
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width={210} height={60} />
<Skeleton variant="rectangular" width={210} height={60} />
</div>

<div className="body-skelton-cart-3">
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width={210} height={60} />
<Skeleton variant="rectangular" width={210} height={60} />
</div>
</div>
    )}
      {/* {alert && (
        <Alert variant="success">
       Deleted from cart
      </Alert>
      )} */}
      {counter===0 && (
        <h5>Cart is Empty!!</h5>
      )}



      {search &&  (
        <div>

{filtered
      .filter((cur)=>cur.name.toLowerCase().includes(search))
      // {
     .map((elem) => {
        return (
          <>
            <div className="cart-product-div" >
              <div className="cart-product-img" onClick={()=>{showDetail(elem._id)}}>
                <img src={elem.img} className="cart-img" />
              </div>
              <div className="cart-product-data" onClick={()=>{showDetail(elem._id)}} >
             
                <table className="cart-product-table">
                  <tr className="cart-tabel-headers">
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    
                  </tr>
                  <tr className="cart-table-data">
                    <td>{elem.name}</td>
                    <td>{elem.price}</td>
                    <td>1</td>
                    
                  </tr>
                </table>
                <section className="cart-des-section">
                  <p className="cart-des-head">Description</p>
                  <p className="cart-pro-desc">{elem.desc}</p>
                </section>
                
              </div>
              <section>
                  <button  className="cart-remove-btn-before" onClick={()=>{clicker(elem._id)}}>
                    <BsTrash />
                  </button>
                </section>
            </div>
          </>
        );
      })}
        </div>
      )}
       {!search && (
        <div>

{filtered
      // .filter((cur)=>cur.name===search)

      .map((elem) => {
        return (
          <>
            <div className="cart-product-div" >
              <div className="cart-product-img" onClick={()=>{showDetail(elem._id)}}>
                <img src={elem.img} className="cart-img" />
              </div>
              <div className="cart-product-data" onClick={()=>{showDetail(elem._id)}} >
                <table className="cart-product-table">
                  <tr className="cart-tabel-headers">
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                  <tr className="cart-table-data">
                    <td>{elem.name}</td>
                    <td>{elem.price}</td>
                    <td>1</td>
                  </tr>
                </table>
                <section className="cart-des-section">
                  <p className="cart-des-head">Description</p>
                  <p className="cart-pro-desc">{elem.desc}</p>
                </section>
                
              </div>
              <section>
                  <button  className="cart-remove-btn-before" onClick={()=>{clicker(elem._id)}}>
                    <BsTrash />
                  </button>
                </section>
            </div>
          </>
        );
      })}
        </div>
      )}
      

     
    </>
  );
};

export default Cart;
