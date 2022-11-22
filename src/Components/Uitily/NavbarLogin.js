import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import navbarSearchHook from "./../../hook/search/navbar-search-hook";
import GetAllUserCartHook from "./../../hook/cart/get-all-user-cart-hook";
// import { useDispatch, useSelector } from "react-redux";
// import { getLoggedUser } from "./../../Redux/actions/authAction";

const NavbarLogin = () => {
  // const dispatch = useDispatch();
  const [onChangeSearch, searchWord] = navbarSearchHook();
  let word = "";
  if (localStorage.getItem("searchWord") != null)
    word = localStorage.getItem("searchWord");

  const [user, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user") != null)
      setUser(JSON.parse(localStorage.getItem("user")));

    // dispatch(getLoggedUser());
  }, []);
  // const res = useSelector((state) => state.authReducer.currentUser);
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  };
  const [itemsNum] = GetAllUserCartHook();
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} className="logo" alt="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            value={word}
            onChange={onChangeSearch}
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            {user != "" ? (
              <NavDropdown title={user.name} id="basic-nav-dropdown">
                {user.role === "admin" ? (
                  <NavDropdown.Item href="/admin/allproducts">
                    لوحة التحكم
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item href="/user/profile">
                    الصفحه الشخصية
                  </NavDropdown.Item>
                )}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOut} href="/">
                  تسجيل خروج
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                href="/login"
                className="nav-text d-flex mt-3 justify-content-center">
                <img src={login} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}>دخول</p>
              </Nav.Link>
            )}
            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center position-relative"
              style={{ color: "white" }}>
              <img src={cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>العربه</p>
              <span class="position-absolute top-10 start-0 translate-middle badge  rounded-pill bg-danger">
                {itemsNum || 0}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLogin;
