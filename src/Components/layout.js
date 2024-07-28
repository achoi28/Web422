import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuth, isAuthenticated } from '../useAuth';

const Layout = ({ children }) => {
  const { logout, user } = useAuth();
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthStatus(isAuthenticated());
    }

    const handleStorageChange = () => {
      setAuthStatus(isAuthenticated());
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [user]);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Exchange Rates App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            <Nav.Link as={Link} href="/about">About</Nav.Link>
            {authStatus ? (
              <>
                <Nav.Link as={Link} href="/favourites">Favorites</Nav.Link>
                <Nav.Link href="#" onClick={(e) => { e.preventDefault(); logout(); }}>Sign out</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} href="/login">Login</Nav.Link>
                <Nav.Link as={Link} href="/register">Register</Nav.Link>
              </>
            )}
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
