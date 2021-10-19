import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import SignIn from './SignIn';
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
              <Button variant="outline-white">Home</Button>
              <Button variant="outline-white">Squads</Button>
              <Button variant="outline-white">Account</Button>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
