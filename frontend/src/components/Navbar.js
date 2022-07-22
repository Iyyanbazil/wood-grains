import "./Navbar.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import {HiOutlinePhoneMissedCall} from "react-icons/hi"
import {BsCart4} from "react-icons/bs"
import {BsHeart}from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux";
import { NavActions } from "../Redux/navbarSlice";
import { Navbar, NavDropdown, Nav, Container, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
const Navbars = () => {
  const [SearchVal, setSearchVal] = useState("");
  const dispatch = useDispatch();
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
  return (
    <>
      <Navbar bg="light" expand="lg" className="Navbar-size">
        <Container className="main-container-nav">
          {/* <LinkContainer to="/"> */}
          {/* <Navbar.Brand href="#home" className="brand-name">Wood-Grains</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Link to="/" className="brand-name">Wood-Grains</Link>
          {/* </LinkContainer> */}
       
        
            <button  className="call-btn-nav" onClick={submitSearch}>
              <HiOutlinePhoneMissedCall className="call-icon-nav" />
            </button>
             <button  className="heart-btn-nav" onClick={submitSearch}>
              <BsHeart className="heart-icon-nav" />
            </button>
            <button  className="cart-btn-nav" onClick={submitSearch}>
              <BsCart4 className="cart-icon-nav" />
            </button> 
       
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink}  to="/">Home</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              
             <div className="nav-login-div">
            <Link  className="login-button"   to="/login">Login</Link>
            <Link  className="sign-button"   to="/sign">Sign Up</Link>
             
         </div> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="navbar-div-nav">
      <input
            placeholder="Search"
            className="search-nav"
            value={SearchVal}
            onChange={(e) => saveSearch(e)}
          /> 
        
            <button  className="search-btn-new" onClick={submitSearch}>
              <FaSearch className="search-icon" />
            </button>
            </div>
            <div className="nav-disc-div">
              
              <p>Summer Sale is On!</p>
            </div>
    </>
  );
};

export default Navbars;
