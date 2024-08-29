import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">My Brand (Metrifica)</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/InformationUpload">Information Upload</Nav.Link>
            <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="#action1">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#action3">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
