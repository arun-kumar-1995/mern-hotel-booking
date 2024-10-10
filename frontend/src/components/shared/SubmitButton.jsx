import React from "react";
const SubmitButton = ({ className, text, onClick }) => {
  return (
    <button type="submit" className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default SubmitButton;
