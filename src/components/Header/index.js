import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import beklogoblack from './../../images/beklogoblack.png';
import bekblkwht from './../../images/bekblkwht.jpg';
import flower from './../../images/flower.png';
import './index.css';

function Header(props){
  return(
    <header>
    <Navbar sticky="top"collapseOnSelect expand="lg" bg="#00FFEF" variant="dark">
<Navbar.Brand href="/">    <img
        src={beklogoblack}
        width="200"
        height="200"
        className="d-inline-block align-top"to="/"

      /></Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="#features">ABOUT</Nav.Link>
    <Nav.Link href="#pricing">SERVICES</Nav.Link>
    <Nav.Link href="#pricing">CONTACT</Nav.Link>

  </Nav>
  <img
         src={flower}
         width="120"
         height="120"
         className="  align-top d-none d-lg-block"

       />

  <Nav.Link className="fbook d-none d-lg-block"href="https://www.facebook.com/rebekah.lanier"target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></Nav.Link>
  <Nav.Link className="prest d-none d-lg-block"href="https://www.pinterest.com/bekahashley/_saved/"target="_blank" rel="noopener noreferrer"><i class="fab fa-pinterest"></i></Nav.Link>
</Navbar.Collapse>
</Navbar>
    </header>
  );
}
export default Header;
