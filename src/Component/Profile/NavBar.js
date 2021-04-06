import React from 'react'
import {Nav, NavDropdown,Navbar} from 'react-bootstrap';

const MyNavBar = () =>{
    return (
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#pricing">About us</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Externel link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>   
    )
}
export default MyNavBar





