import { React } from "react";
import { Nav, Navbar } from "react-bootstrap";

function navbar() {
  return (
    <div className="navBar" role="navigation">
      <Navbar collapseOnSelect bg="light" expand="lg" variant="dark" fixed="top">
        <Navbar.Brand href="#">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Portfolio
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="link1" style={{width: "100%"}}>
            {/* <Nav.Link href="/" className="links">Home</Nav.Link> */}
            <Nav.Link href="/" className="links">About</Nav.Link>
            <Nav.Link href="/projects" className="links">Project</Nav.Link>
            <Nav.Link href="/resume" className="links">Resume</Nav.Link>
            <Nav.Link href="/contact" className="links">Contact</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default navbar;
