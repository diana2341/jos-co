import React from'react'
import { Nav,Navbar,NavDropdown } from 'react-bootstrap';
import logo from '../imgs/MLogo.png'
import { useHistory } from "react-router-dom";

export default function NavbarComponent(props){
    let masonry=()=>{
      props.routerProps.history.push('/services')
      props.setWork('masonry')
    }
    let carpentry=()=>{
      props.routerProps.history.push('/services')
      props.setWork('carpentry')
    }
    return(
        <Navbar id='nav 'bg='white'expand='lg'variant="light" sticky="top">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="100"
            height="auto"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="ml-auto " >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={masonry}>Masonry</NavDropdown.Item>
            <NavDropdown.Item onClick={carpentry}>Carpentry</NavDropdown.Item>
          </NavDropdown>
            <Nav.Link href="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}