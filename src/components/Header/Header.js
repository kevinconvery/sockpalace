import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


const Header = props => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(`/products`);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }

  }

  return (
    <div className="Header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Sock Palace</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/sales">Sales</Nav.Link>
            <Nav.Link href="/deals">New Deals</Nav.Link>
            <NavDropdown title="Sock Collections" id="basic-nav-dropdown">
              <NavDropdown.Item href="/patterns">Patterns</NavDropdown.Item>
              <NavDropdown.Item href="/images">Images</NavDropdown.Item>
              <NavDropdown.Item href="/quirky">Quirky</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Search Placeholder</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl 
              type="text" 
              placeholder="Search" 
              className="mr-sm-2"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
            <Button 
              variant="outline-success"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Form>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
