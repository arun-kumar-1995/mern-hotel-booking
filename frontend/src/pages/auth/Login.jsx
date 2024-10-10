import React, { useState } from "react";
import "../../styles/Form.css";

import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import FormFooter from "../../components/FormFooter";
import SocialButton from "../../components/shared/SocialButton";

const Login = () => {
  return (
    <div className="form-wrapper login-container">
      <h2>Sign in to an account</h2>
      <p>
        You can sign in using your Booking.com account to access our services.
      </p>

      <form className="login-form form-container">
        <label htmlFor="email">Email address</label>
        <input type="text" placeholder="Enter your email address" />

        <button type="submit" className="btn-login btn-form-submit">
          Continue with email
        </button>
      </form>

      <div className="divider">
        <div className="hr"></div>
        <span>or use one of these options</span>
      </div>

      <div className="third-party-login">
        <SocialButton
          Icon={IoLogoFacebook}
          title="facebook login"
          className="btn-social facebook"
        />

        <button title="google login" className="btn-social google">
          <FcGoogle />
        </button>
      </div>

      <div className="divider">
        <div className="hr"></div>
        <span></span>
      </div>

      <FormFooter />
    </div>
  );
};

export default Login;
