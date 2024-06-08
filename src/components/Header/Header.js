import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import logo from "../../assets/app-logo.svg";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="/">Sandy's Quiz App</Navbar.Brand> */}
        <NavLink to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Sandy's Quiz App Logo"
            style={{ height: "60px" }}
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
            <NavLink to="/user" className="nav-link">
              User
            </NavLink>
            <NavLink to="/admin" className="nav-link">
              Admin
            </NavLink>
          </Nav>
          <Nav>
            <button className="btn-login">Log In</button>
            <button className="btn-signup">Sign Up</button>

            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item>Log In</NavDropdown.Item>
              <NavDropdown.Item>Log Out</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
