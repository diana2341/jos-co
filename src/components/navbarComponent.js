import React from'react'
import { Nav,Navbar,NavDropdown } from 'react-bootstrap';
import logo from '../imgs/logo2.png'
export default function NavbarComponent(props){
    return(
        <Navbar expand='lg'variant="light" sticky="top">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="100"
            height="auto"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        {/* <Navbar.Brand id ='nav-name'href="#home">Jose Construction CO.</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/home/about-us">About</Nav.Link>
            <Nav.Link href="/home/contact-us">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}