import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import logo from "../assets/sf-logo2.png";

import { LoginContext } from "../context/LoginContext";

function Header() {

  const loginContext = useContext(LoginContext);

  return (
    <>
      <Navbar expand="md">
        <div className="header-main">
          <div className="header-top">
            <img src={logo} alt="site logo" />
            <SignIn />
          </div>
          <div className="header-bottom-1">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="header-bottom">

              <Link to="/">HOME</Link>
              <Link to="/">SQUADS</Link>
              <Link to="/search">FIND FRIENDS</Link>
              <Link to={loginContext.isLoggedIn ? `/profile/${loginContext.user.user.id}` : `/profile`}>PROFILE</Link>

            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
