import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import SideNav from "./SideNav";
import { FaRegCircleUser } from "react-icons/fa6";
import { CgMenu } from "react-icons/cg";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenuChange = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-main">
          <div className="logo">
            <Link to="/">
              <h1>Booking.com</h1>
            </Link>
          </div>

          <Link to="/login" className="btn-sign-in" title="Sign in">
            <FaRegCircleUser />
            <span>Sign In</span>
          </Link>

          <button
            title="open menu"
            className="btn hamburger"
            onClick={handleToggleMenuChange}
          >
            <CgMenu />
          </button>
        </div>

        <nav className="middle-navbar">
          <ul className="nav-links">
            <li className="links">
              <Link to="/">Home</Link>
            </li>
            <li className="links">
              <Link to="/rooms">Rooms</Link>
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
              <Link to="/login" className="btn btn-login">
                Login
              </Link>
            </li>
            <li></li>
          </ul>
        </div>

        {toggleMenu && (
          <SideNav
            menuOpen={toggleMenu}
            onHandleToggleMenuChange={handleToggleMenuChange}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
