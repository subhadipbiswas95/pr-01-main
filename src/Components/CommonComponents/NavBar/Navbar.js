import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <Link className="flex items center" to="/">
          <img src="/img/logo.png" alt="logo" style={{ height: 60,transform: 'rotate(225deg)' }} />
        </Link>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/About" className="nav-link">
              About Us
            </Link>
            <Link to="/Contact" className="nav-link">
              Contact Us
            </Link>
          </div>
        </div>
        <div class="navbar-nav">

        <Link to="#" className="nav-link">LOGIN
        </Link>
        </div>
          
      </div>
    </nav>
  );
};

export default Navbar;
