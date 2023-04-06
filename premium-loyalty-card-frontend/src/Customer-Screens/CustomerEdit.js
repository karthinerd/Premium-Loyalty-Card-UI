import React, { useState } from "react";
import "../Styles/Form.css";
import CustomButton from "../Components/CustomButton";

const CustomerEdit = () => {
  const [firstName, setFirstName] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName);
  };

  return (
    <div className="full-form">
      <div className="form-card">
        <form onSubmit={handleSubmit} className="form-container">
          <div
            className="profile-picture"
          ></div>
          <div>
            <label htmlFor="firstName" style={{ marginRight: "256px" }}>
              First Name
            </label>
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="fl">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="firstName"
              style={{ marginRight: "70px" }}
            />
            <input type="text" id="lastName" className="lastName" />
          </div>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            value={firstName}
            onChange={handleFirstNameChange}
            className="Email"
          />
          <label htmlFor="phone">Phone Number</label>
          <input type="number" id="phone" className="phone" />
          <div className="date">
            <span>Created on : 20th Jan 2023 at 12:30 PM</span>
          </div>
          <CustomButton
            className="edit-customer"
            text="save"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default CustomerEdit;
