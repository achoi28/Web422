// components/Layout.js
import React from 'react';
import Link from 'next/link';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Exchange Rates App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            <Nav.Link as={Link} href="/about">About</Nav.Link>{' '}
            <Nav.Link as={Link} href="/favourites">Favorites</Nav.Link>{' '}
            <Nav.Link as={Link} href="/login">Login</Nav.Link>{' / '}
            <Nav.Link as={Link} href="/signout">Sign out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <main className="main-content">
          {children}
        </main>
      </Container>
    </>
  );
};

export default Layout;
