import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loginAsync, logoutAsync } from "../../redux/auth/authActions";

function Header() {
  const dispatch = useDispatch();
  const { isAuthorized } = useSelector(
    ({ auth }) => ({ isAuthorized: auth.user !== null }),
    shallowEqual
  );
  const { user } = useSelector((state) => state.auth);

  const login = () => {
    dispatch(loginAsync());
  };
  const logout = () => {
    dispatch(logoutAsync());
  };

  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">DEMO REACT APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="text-white" to="/">
              Projects
            </NavLink>
          </Nav>
          <Nav>
            {!isAuthorized ? (
              <>
                <Nav.Link onClick={login}>Login</Nav.Link>
              </>
            ) : (
              <>
                <Navbar.Text>{user?.profile?.name}</Navbar.Text>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
