import React, { useState } from "react";
import "../Styles/EditUser.css";
import CustomButton from "../Components/CustomButton";

const EditUser = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, email, role);
  };

  return (
    <div className="edit-user-container">
      <div className="edit-user-card">
        <div className="edit-title">
            <h2>Edit User Details</h2>
        </div>
        <form onSubmit={handleSubmit} className="edit-user-form">
          <div className="form-row">
            <label htmlFor="firstName" className="edit-user-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="edit-user-input"
            />
          </div>
          <div className="form-row">
            <label htmlFor="lastName" className="edit-user-label">
              Last Name
            </label>
            <input type="text" id="lastName" className="edit-user-input" />
          </div>
          <div className="form-row">
            <label htmlFor="email" className="user-email-label">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="email-input"
            />
          </div>

          <div className="form-row">
            <label htmlFor="role" className="user-role-label">
              Role
            </label>
            <select
              id="role"
              className="select-wrapper"
              onChange={handleRoleChange}
            >
              <option value="">Select a role</option>
              <option value="admin">Admin</option>
              <option value="superAdmin">Super Admin</option>
            </select>
          </div>
          <CustomButton
            className="edit-user-button"
            text="save"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default EditUser;
