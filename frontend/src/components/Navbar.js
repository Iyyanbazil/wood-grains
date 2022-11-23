import "./Navbar.css";
import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import {TbTruckDelivery} from "react-icons/tb"
import {HiLogout, HiOutlinePhoneMissedCall} from "react-icons/hi"
import {BsCart4} from "react-icons/bs"
import {BsHeart}from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux";
import { NavActions } from "../Redux/navbarSlice";
import { Navbar, NavDropdown, Nav, Container, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import CartSlice from "../Redux/cartSlice"
const Navbars = () => {
  const [SearchVal, setSearchVal] = useState("");
  const [current, setcurrent]=useState({})
  const [loger, setloger] = useState()
  

  const count=useSelector((state)=>state.count.count)
  const dispatch = useDispatch();
  useEffect(()=>{
    const data=window.localStorage.getItem("islogin")
    setloger(JSON.parse(data))
    if(data==="true"){
      const value=window.localStorage.getItem("user")
    setcurrent(JSON.parse(value))
    console.log(value);
    }
    // dispatch()
  
  },[count])
  const url=window.location.pathname
  
  
  let navigate=useNavigate()
  let location=useLocation()
  const saveSearch = (e) => {
    setSearchVal(e.target.value);
    console.log(SearchVal);
  };
  const submitSearch = () => {
    dispatch(NavActions.setValue(SearchVal));
    if(SearchVal==="" && location.pathname==='/'){
      navigate('/')
    }else{
     navigate('/search')
    }
   
  };
const changeRoute=()=>{
  const userId=current._id
  if(loger===true){
    navigate(`${userId}/cart`)
  }else{
navigate("/login")
  }
 
}
  const Logout=()=>{
if(loger===true){
  window.localStorage.setItem("user",JSON.stringify({
    Fname:"",
  Lname:"",
  email:"",
password:"",
Cpassword:"", }))

}
  window.localStorage.setItem("islogin",false)
    window.location.reload()
    window.location.pathname="/"
  }
  const loginRoute=(name)=>{
    if(name==="login"){
      navigate("/login")
    }
    if(name==="sign"){
      navigate("/sign")
    }
    
  }
 const pager=()=>{
  navigate("/search")
 }
 const changer=()=>{
  const id=current._id
  if(loger===true){
    navigate(`${id}/order`)
  }else{
    navigate("/login")
  }
 
 
 }
  return (
    <>
      <Navbar bg="light" expand="sm" className="Navbar-size">
        <Container className="main-container-nav">
          {/* <LinkContainer to="/"> */}
          {/* <Navbar.Brand href="#home" className="brand-name">Wood-Grains</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav"
           className="nav-toogler-mob" />
           

          <Link to="/" className="brand-name"><img src="./images/circleLogo.png" className="logo-image" /> WoodGrains</Link>
          {url!== "/cart" && 
        (
          <>
          <div className="navbar-div-desktop">
         <input
               placeholder="Search"
               className="search-nav-desktop"
               value={SearchVal}
               onChange={(e) => saveSearch(e)}
               onFocus={pager}
             /> 
           
               <button  className="search-btn-new-desktop" onClick={submitSearch}>
                 <FaSearch className="search-icon" />
               </button>
           </div>
           </>
        )
          }
          {/* </LinkContainer> */}
       
          <div className="icons-cart-div">
            <button  className="call-btn-nav" onClick={()=>{changer()}}  >
             {/* <p  */}
            
              <TbTruckDelivery className="call-icon-nav" />
              {/* </p> */}
            </button>
           
            <button  className="cart-btn-nav" 
            onClick={changeRoute}
             >
            {/* {loger===true ?(  <Link  to="/cart"><BsCart4 className="cart-icon-nav" /></Link>):( <Link to="/login"><BsCart4 className="cart-icon-nav" /></Link>)} */}
            <BsCart4 className="cart-icon-nav" />
            </button> 
            
          </div>
          {loger && (
  <div className="cart-pro-count">
    <p className="cart-pro-count-para">{count}</p>
    </div>
            )}
       
          
          <Navbar.Collapse id="basic-navbar-nav" className="collapse">
            <Nav className="me-auto">
             
         
              <Nav.Link as={NavLink}  to="/" className="Nav-home">Home</Nav.Link>
              {/* <Nav.Link as={NavLink}  to="/login"
              
               className="Nav-contact">Contact</Nav.Link> */}
               {/* <button className="contact-des"  onClick={changer()} >Contact</button> */}
              {loger===true ?( <h4 className="login-as-name">Login as <u>{current.Fname}</u></h4>):(<hr/>)}
             
             <div className="nav-login-div">
              {loger===true ? ( <button  className="login-button" onClick={()=>Logout()}   >Logout</button>):( <button  className="login-button" onClick={()=>loginRoute("login")}   to="/login">Login</button>)}
            {/* <Link  className="login-button"   to="/login">Login</Link> */}
            <button  className="sign-button" onClick={()=>loginRoute("sign")}   to="/sign">Sign Up</button>
             
         </div> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {url!== "/cart" && 
        (
          <>
         <div className="navbar-div-nav">
         <input
               placeholder="Search"
               className="search-nav"
               value={SearchVal}
               onChange={(e) => saveSearch(e)}
               onFocus={pager}
             /> 
           
               <button  className="search-btn-new" onClick={submitSearch}>
                 {/* Search  */}
                 <FaSearch className="search-icon" />
               </button>
           </div>
           </>
      )
      }
     
            <div className="nav-disc-div">
              
              <p>Summer Sale is On!</p>
            </div>
    </>
  );
};

export default Navbars;
