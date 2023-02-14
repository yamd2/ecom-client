import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { requestSuccess } from "../login/authSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleOnLogout = () => {
    dispatch(requestSuccess({}));
    Navigate("/");
  };

  return (
    <Navbar bg="warning" expand="md">
      <Container>
        <Link to="/" className="navbar-brand">
          Admin CMS
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link to="/" className="nav-link">
                  <i class="fa-solid fa-bell"></i>
                </Link>
                <Link to="/register" className="nav-link">
                  <i class="fa-solid fa-pen-to-square"></i>
                </Link>
                <Link to="/" className="nav-link" onClick={handleOnLogout}>
                  <i class="fa-solid fa-right-from-bracket"></i>
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="nav-link">
                  <i class="fa-solid fa-right-from-bracket"></i>
                </Link>
                <Link to="/register" className="nav-link">
                  <i class="fa-solid fa-pen-to-square"></i>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
