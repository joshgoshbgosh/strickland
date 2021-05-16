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
    <Nav.Link href='/'>
      <Image src={beklogoblack}width="200"height="200"className="d-inline-block align-top"to="/"/>

      </Nav.Link>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className=" mr-auto">
    <Nav.Link className="nav-link nav-about"href='/about'>ABOUT</Nav.Link>
    <Nav.Link className="nav-link nav-services"href='/services'>SERVICES</Nav.Link>
    <Nav.Link className="nav-link nav-contact"href='/contact'>CONTACT</Nav.Link>

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
