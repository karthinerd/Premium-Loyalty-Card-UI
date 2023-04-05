import React from "react";
import "../Styles/CustomButton.css";

const CustomButton = ({ className, text, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
