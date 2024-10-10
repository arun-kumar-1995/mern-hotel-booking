import React from "react";
import "../../styles/Form.css";
import FormFooter from "../../components/FormFooter";

const SignUp = () => {
  return (
    <div className="form-wrapper sign-up">
      <h2>Sign up or create an account</h2>
      <p>
        You can sign in using your Booking.com account to access our services.
      </p>

      <form action="" className="signup-form form-container">
        <div className="form-group">
          <label htmlFor="name">Full name</label>
          <input type="text" placeholder="Enter full name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="text" placeholder="Enter your email address" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" placeholder="Enter your phone number" />
        </div>

        <button type="submit" className="btn-signup btn-form-submit">
          Create an account
        </button>
      </form>
      <FormFooter />
    </div>
  );
};

export default SignUp;
