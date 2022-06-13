import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div Container>
      <Navbar
        className="navbar fixed-top "
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand>logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
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
    </div>
    // <div>
    //   <Link to="/">Main</Link>
    //   <Link to={{ pathname: "/about", state: { fromLocation: true } }}>
    //     About
    //   </Link>
    // </div>
  );
}
export default Navigation;
