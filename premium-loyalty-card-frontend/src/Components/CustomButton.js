import React from 'react';
import './Button.css';

const CustomButton = ({ color, text, onClick }) => {
  return (
    <button className={`custom-button ${color}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
