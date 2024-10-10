import React from "react";
import "../../styles/Form.css";
import FormFooter from "../../components/FormFooter";
import SubmitButton from "../../components/shared/SubmitButton";
import InputField from "../../components/shared/InputField";

const SignUp = () => {
  const fields = [
    { label: "Full name", placeholder: "Enter full name" },
    { label: "Email address", placeholder: "Enter your email address" },
    { label: "Phone", placeholder: "Enter your phone number" },
  ];

  return (
    <div className="form-wrapper sign-up">
      <h2>Sign up or create an account</h2>
      <p>
        You can sign in using your Booking.com account to access our services.
      </p>

      <form action="" className="signup-form form-container">
        {fields.map((field, index) => (
          <InputField
            key={index}
            label={field.label}
            placeholder={field.placeholder}
          />
        ))}

        <SubmitButton
          className="btn-signup btn-form-submit"
          text="Create an account"
        />
      </form>
      <FormFooter />
    </div>
  );
};

export default SignUp;
