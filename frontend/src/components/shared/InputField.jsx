import React from "react";

const InputField = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="form-group">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
