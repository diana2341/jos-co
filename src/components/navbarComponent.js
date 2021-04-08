import React from'react'
import { Nav,Navbar,NavDropdown } from 'react-bootstrap';
import logo from '../imgs/logo2.png'
export default function NavbarComponent(props){
    return(
        <Navbar id='nav 'bg='white'expand='lg'variant="light" sticky="top">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="160"
            // height='60'
            height="auto"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        {/* <Navbar.Brand id ='nav-name'href="#home">Jose Construction CO.</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="ml-auto " >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}