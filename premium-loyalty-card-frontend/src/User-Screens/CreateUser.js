import React, { useState } from "react";
import "../Styles/EditUser.css";
import CustomButton from "../Components/CustomButton";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
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

  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault();
    navigate('/usersList');
  };

  return (
    <div className="new-user-container">
      <div className="edit-user-card">
        <div className="new-title">
          <h2>Add New User</h2>
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
              placeholder="Enter your first name"
            />
          </div>
          <div className="form-row">
            <label htmlFor="lastName" className="edit-user-label">
              Last Name
            </label>
            <input type="text" id="lastName" className="edit-user-input" placeholder="Enter your last name" />
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
              placeholder="Enter your email address"
            />
          </div>
          <div className="form-row">
            <label htmlFor="password" className="edit-user-label">
              Password
            </label>
            <input type="password" id="password" className="edit-user-input" placeholder="Enter Your Password" />
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
          <div class="button-container">
            <CustomButton
              className="cancel-save-user"
              text="Cancel"
              onClick={handleCancel}
            />
            <CustomButton
              className="save-user"
              text="save"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
