import React from "react";
import "../Styles/CustomButton.css";

const CustomButton = ({ className, text, onClick, icon }) => {
  return (
    <button className={className} onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      <span className="text">{text}</span>
    </button>
  );
};

export default CustomButton;
