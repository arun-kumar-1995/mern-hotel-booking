import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import SideNav from "./SideNav";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenuChange = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>Booking.com</h1>
          </Link>
        </div>

        <nav className="middle-navbar">
          <ul className="nav-links">
            <li className="links">
              <Link to="/">Home</Link>
            </li>
            <li className="links">
              <Link to="/bookings">Bookings</Link>
            </li>
            <li className="links">
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <div className="header-right">
          <ul className="nav-links">
            <li>
              <Link to="/sign-up" className="btn btn-register">
                Register
              </Link>
            </li>
            <li>
              <Link to="/sign-in" className="btn btn-login">
                Login
              </Link>
            </li>
            <li></li>
          </ul>
        </div>

        <div className="hamburger" onClick={handleToggleMenuChange}>
          <div className="stick"></div>
          <div className="stick"></div>
          <div className="stick"></div>
        </div>
        {toggleMenu && (
          <SideNav 
          menuOpen={toggleMenu}
          onHandleToggleMenuChange={handleToggleMenuChange} />
        )}
      </div>
    </header>
  );
};

export default Header;
