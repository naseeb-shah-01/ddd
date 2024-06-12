import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth } from '../AuthContext';
import DarkModeToggle from './DarkModeToggle';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Navbar>
      <Container style={{ width: '100%', margin: '0', backgroundColor: 'transparent' }}>
        <LinkContainer to="/">
          <Navbar.Brand className='ch'>Sale Order Management </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAuthenticated && (
              <>
                {/* <LinkContainer to="/products">
                  <Nav.Link className='ch' >Products</Nav.Link>
                </LinkContainer> */}
                {/* <LinkContainer to="/orders">
                  <Nav.Link className='ch'>Orders</Nav.Link>
                </LinkContainer> */}

                <LinkContainer to="/products">
                  <NavLink
                    className="ch"
                    to="/products"
                    activeClassName="active"
                    style={({ isActive }) => ({
                      color: isActive ? 'blue' : 'white' // Change color when active
                    })}
                  >
                    Products
                  </NavLink>
                </LinkContainer>

                <LinkContainer to="/orders">
                  <NavLink
                    className="ch"
                    to="/orders"
                    activeClassName="active"
                    style={({ isActive }) => ({
                      color: isActive ? 'blue' : 'white' // Change color when active
                    })}
                  >
                    Orders
                  </NavLink>
                </LinkContainer>
              </>
            )}
          </Nav>
          <DarkModeToggle />
          {isAuthenticated && (
            <Button variant="outline-danger" style={{marginLeft:'20px'}} onClick={logout}>Logout</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
