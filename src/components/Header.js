import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import logo from '../assets/sf-logo2.png';


function Header() {
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
              <Link to="/">Home</Link>
              <Link to="/">Squads</Link>
              <Link to="/search">Find Friends</Link>
              <Link to="/profile">Profile</Link>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
