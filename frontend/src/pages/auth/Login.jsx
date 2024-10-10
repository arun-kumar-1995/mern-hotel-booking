import React, { useState } from "react";
import "../../styles/Form.css";

import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import FormFooter from "../../components/FormFooter";
import SocialButton from "../../components/shared/SocialButton";
import SubmitButton from "../../components/shared/SubmitButton";

const Divider = ({ text }) => (
  <div className="divider">
    <div className="hr"></div>
    {text && <span>{text}</span>}
  </div>
);

const Login = () => {
  const socialLogins = [
    { Icon: IoLogoFacebook, title: "facebook login", className: "facebook" },
    { Icon: FcGoogle, title: "google login", className: "google" },
  ];

  return (
    <div className="form-wrapper login-container">
      <h2>Sign in to an account</h2>
      <p>
        You can sign in using your Booking.com account to access our services.
      </p>

      <form className="login-form form-container">
        <label htmlFor="email">Email address</label>
        <input type="text" placeholder="Enter your email address" />

        <SubmitButton
          className="btn-login btn-form-submit"
          text="Continue with email"
        />
      </form>

      <Divider text="or use one of these options" />

      <div className="third-party-login">
        {socialLogins.map(({ Icon, title, className }, index) => (
          <SocialButton
            key={index}
            Icon={Icon}
            title={title}
            className={`btn-social ${className}`}
          />
        ))}
      </div>

      <Divider />

      <FormFooter />
    </div>
  );
};

export default Login;
