import { React } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function navbar() {
  return (
    <div className="navBar" role="navigation">
      <Navbar bg="light" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <i class="fa fa-user-circle"></i> Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="link1 me-auto">
              <Nav.Link href="/" className="links">
                About
              </Nav.Link>
              <Nav.Link href="/projects" className="links">
                Projects
              </Nav.Link>
              <Nav.Link href="/resume" className="links">
                Resume
              </Nav.Link>
              <Nav.Link href="/contact" className="links">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default navbar;
