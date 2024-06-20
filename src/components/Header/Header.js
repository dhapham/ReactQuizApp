import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/app-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/apiService";
import { toast } from "react-toastify";
import { doLogout } from "../../redux/action/userAction";


const Header = () => {

  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const account = useSelector(state => state.user.account);
  // const isAdmin = useSelector((state) => state.user.isAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  }
  const handleRegister = () => {
    navigate('/register');
  }

  const handleLogOut = async () => {
    let rs = await logout("account.email", account.refresh_token);
    if (rs && rs.EC === 0) {
      // clear data
      dispatch(doLogout());
      navigate('/login');
    } else {
      toast.error(rs.EM)
    }
  }

  const handleAdminClick = (event) => {
    event.preventDefault();
    if (isAuthenticated && account.role === 'USER') {
      toast.error("You do not have permission to access the admin page.");
    } else {
      navigate("/admin");
    }
  };


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
            <NavLink onClick={handleAdminClick} className="nav-link admin-link">
              Admin
            </NavLink>

          </Nav>
          <Nav>
            {isAuthenticated === false ?
              <>
                <button className="btn-login" onClick={() => handleLogin()}>Log In</button>
                <button className="btn-signup" onClick={() => handleRegister()}>Sign Up</button>
              </>
              :
              <NavDropdown title="Settings" id="basic-nav-dropdown">
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleLogOut()}>Log Out</NavDropdown.Item>

              </NavDropdown>
            }


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
