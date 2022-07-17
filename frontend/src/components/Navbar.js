import "./Navbar.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { NavActions } from "../Redux/navbarSlice";
import { Navbar, NavDropdown, Nav, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
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
      <Navbar bg="light" expand="lg">
        <Container className="main-container-nav">
          <LinkContainer to="/">
          <Navbar.Brand href="#home">Wood-Grains</Navbar.Brand>
          </LinkContainer>
          <input
            placeholder="Search"
            className="search-nav"
            value={SearchVal}
            onChange={(e) => saveSearch(e)}
          ></input>
          {/* <Nav.Link as={NavLink} to="/bar">
          Bar
        </Nav.Link> */}
          {/* <NavLink>Search</NavLink> */}
         
            <Nav.Link  className="search-btn" onClick={submitSearch}>
              <FaSearch className="search-icon" />
            </Nav.Link>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink}  to="/">Home</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">
                Cart <GiShoppingCart className="cart-icon" />
              </Nav.Link>
              {/* <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Modern </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Classic
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Up coming
                </NavDropdown.Item>
              
                  <NavDropdown.Item href="#action/3.3">
                  For Kids
                </NavDropdown.Item>
               
              </NavDropdown> */}

              <Button className="sign-button">Sign-up</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
