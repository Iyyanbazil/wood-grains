import "./Navbar.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {GiShoppingCart} from "react-icons/gi"
import {FaSearch} from "react-icons/fa"
import { Navbar,NavDropdown,Nav,Container, Button } from "react-bootstrap";
const Navbars = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className="main-container-nav">
          <Navbar.Brand href="#home">Wood-Grains</Navbar.Brand>
          <input placeholder="Search" className="search-nav" ></input>
                 <button className="search-btn"><FaSearch className="search-icon"/></button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">Cart <GiShoppingCart className="cart-icon"/></Nav.Link>
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
