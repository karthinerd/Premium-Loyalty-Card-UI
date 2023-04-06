import React from "react";

function InputField({ label, type, value, onChange }) {
  return (
    <div className="input-field-container">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
}

export default InputField;
