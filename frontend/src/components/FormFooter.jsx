import React from "react";
import { Link } from "react-router-dom";

const FormFooter = () => {
  return (
    <div className="form-footer">
      <ul>
        <li>
          <p>
            By signing in or creating an account, you agree with our
            <Link to="/terms-condition" className="links" target="_blank">
              Terms & Conditions
            </Link>
            and
            <Link to="/privacy-olicy" className="links" target="_blank">
              Privacy Statement
            </Link>
          </p>
        </li>
        <li>
          <p>
            <span>All rights reserved.</span>
            Copyright (2006-2024) - Booking.com
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FormFooter;
