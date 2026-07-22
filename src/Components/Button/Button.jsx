import React from "react";
import "./button.css";

const Button = ({ text, type = "button", onClick, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-btn ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;