import React, { useState } from "react";
import "../Styles/Form.css";
import CustomButton from "../Components/CustomButton";
import "../Styles/EditVendor.css";

const EditVendor = () => {
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
          <div className="profile-picture"></div>
          <div>
            <label htmlFor="vendorName" style={{ marginRight: "240px" }}>
              Vendor Name
            </label>
            <label htmlFor="emiratesId">Emirates Id</label>
          </div>
          <div className="fl">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="firstName"
              style={{ marginRight: "70px" }}
              placeholder="Vendor name"
            />
            <input type="text" id="lastName" className="lastName" placeholder="Emirates id" />
          </div>
          <div>
            <label htmlFor="contractStart" style={{ marginRight: "188px" }}>
              Contract Start Date
            </label>
            <label htmlFor="contractEnd">Contract End Date</label>
          </div>
          <div className="fl">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="firstName"
              style={{ marginRight: "70px" }}
              placeholder="Start date"
            />
            <input type="text" id="lastName" className="lastName" placeholder="End date" />
          </div>
          <div>
            <label htmlFor="License" style={{ marginRight: "218px" }}>
              License Number
            </label>
            <label htmlFor="phone">Phone Number</label>
          </div>
          <div className="fl">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="firstName"
              style={{ marginRight: "70px" }}
              placeholder="License number"
            />
            <input type="text" id="lastName" className="lastName" placeholder="Phone number" />
          </div>
          <div>
            <label htmlFor="redemptionPin" style={{ marginRight: "158px" }}>
              Vendor Redemption Pin
            </label>
            <label htmlFor="Files">Files</label>
          </div>
          <div className="fl">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="firstName"
              style={{ marginRight: "70px" }}
              placeholder="Pin"
            />
            <input type="File" id="lastName" className="lastName" />
          </div>
          <div>
            <label htmlFor="redemptionPin" style={{ marginRight: "209px" }}>
              Vendor Category
            </label>
            <label htmlFor="Files">Vendor Location</label>
          </div>
          <div className="fl">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="firstName"
              style={{ marginRight: "70px" }}
              placeholder="Category"
            />
            <input type="text" id="lastName" className="lastName" placeholder="Location" />
          </div>
          <div style={{ marginTop: "30px" }}>
            <label htmlFor="contractStart">
              Short Description (Max 250 Words)
            </label>
          </div>
          <textarea
            id="description"
            name="description"
            rows="10"
            maxLength="250"
            className="description"
          />
          <div className="edit-vendor-title">
            <h2>Contract Person</h2>
          </div>
          <div>
            <label htmlFor="firstName" style={{ marginRight: "266px" }}>
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
              placeholder="Enter your first name"
            />
            <input type="text" id="lastName" className="lastName" placeholder="Enter your last name" />
          </div>
          <div>
            <label htmlFor="firstName" style={{ marginRight: "236px" }}>
              Email Address
            </label>
            <label htmlFor="lastName">Phone Number</label>
          </div>
          <div className="fl">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="firstName"
              style={{ marginRight: "70px" }}
              placeholder="Enter your email address"
            />
            <input type="text" id="lastName" className="lastName" placeholder="Enter your phone number" />
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

export default EditVendor;
