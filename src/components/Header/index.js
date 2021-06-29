import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import beklogoblack from './../../images/beklogoblack.png';
import bekblkwht from './../../images/bekblkwht.jpg';
import tools from './../../images/tools.png';
import './index.css';

function Header(props){
  return(
    <header>
    <Navbar sticky="top"collapseOnSelect expand="lg" bg="#00FFEF" variant="dark">
    <NavLink to='/'>
      <Image src={beklogoblack}width="200"height="200"className="d-inline-block align-top"to="/"/>

      </NavLink>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className=" mr-auto">
    <NavLink className="nav-link nav-about"to='/about'>ABOUT</NavLink>
    <NavLink className="nav-link nav-services"to='/services'>SERVICES</NavLink>
    <NavLink className="nav-link nav-contact"to='/contact'>CONTACT</NavLink>

  </Nav>
  <Image
         src={tools}
         width="120"
         height="120"
         className="  tools align-top d-none d-lg-block"

       />


</Navbar.Collapse>
</Navbar>
    </header>
  );
}
export default Header;
