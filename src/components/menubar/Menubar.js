import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo.png";

const Menubar = () => {
  const [user] = useAuthState(auth);

  const handleLogOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" href="#features">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs" href="#pricing">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <Link
                  to="/"
                  className="btn btn-link text-decoration-none text-dark"
                  onClick={handleLogOut}
                >
                  Log out
                </Link>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    Log in
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
