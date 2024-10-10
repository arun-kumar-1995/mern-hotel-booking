import React, { useState } from "react";
import "../../styles/Login.css";

import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Sign in or create an account</h2>
      <p>
        You can sign in using your Booking.com account to access our services.
      </p>

      <form className="login-form form-container">
        <label htmlFor="email">Email address</label>
        <input type="text" placeholder="Enter your email address" />

        <button type="submit" className="btn-login">
          Continue with email
        </button>
      </form>

      <div className="divider">
        <div className="hr"></div>
        <span>or use one of these options</span>
      </div>

      <div className="third-party-login">
        <button title="facebook login" className="btn-social facebook">
          <IoLogoFacebook />
        </button>
        <button title="google login" className="btn-social google">
          <FcGoogle />
        </button>
      </div>

      <div className="divider">
        <div className="hr"></div>
        <span></span>
      </div>

      <p>
        By signing in or creating an account, you agree with our
        <Link to="/terms-condition" className="links">
          Terms & Conditions
        </Link>
        and
        <Link to="/privacy-olicy" className="links">
          Privacy Statement
        </Link>
      </p>
    </div>
  );
};

export default Login;
