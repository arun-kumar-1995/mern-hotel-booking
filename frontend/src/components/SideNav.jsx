import React from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";

const SideNav = ({ menuOpen, onHandleToggleMenuChange }) => {
  return (
    <div className={`sidenav ${menuOpen ? "open" : ""}`}>
      <div className="sidenav-header">
        <button className="btn btn-close" onClick={onHandleToggleMenuChange}>
          <MdClose size={24} />
        </button>
      </div>
      <nav className="sidenav-nav">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/bookings">My Bookings</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/sign-up">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
