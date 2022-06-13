import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Button variant="primary" className="mr-2">
            Log In
          </Button>
          <Button variant="primary">Sign Out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <div>
    //   <Link to="/">Main</Link>
    //   <Link to={{ pathname: "/about", state: { fromLocation: true } }}>
    //     About
    //   </Link>
    // </div>
  );
}
export default Navigation;
