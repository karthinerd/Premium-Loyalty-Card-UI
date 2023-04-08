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
            <label htmlFor="vendorName" style={{ marginRight: "230px" }}>
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
            />
            <input type="text" id="lastName" className="lastName" />
          </div>
          <div>
            <label htmlFor="contractStart" style={{ marginRight: "180px" }}>
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
            />
            <input type="text" id="lastName" className="lastName" />
          </div>
          <div>
            <label htmlFor="License" style={{ marginRight: "210px" }}>
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
            />
            <input type="text" id="lastName" className="lastName" />
          </div>
          <div>
            <label htmlFor="redemptionPin" style={{ marginRight: "150px" }}>
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
            />
            <input type="text" id="lastName" className="lastName" />
          </div>
          <div>
            <label htmlFor="redemptionPin" style={{ marginRight: "206px" }}>
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
            />
            <input type="text" id="lastName" className="lastName" />
          </div>
          <div className="edit-vendor-title">
            <h2>Contract Person</h2>
          </div>
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
          <div>
            <label htmlFor="firstName" style={{ marginRight: "226px" }}>
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
            />
            <input type="text" id="lastName" className="lastName" />
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
