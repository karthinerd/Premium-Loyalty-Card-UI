import React, { useState } from "react";
import "../Styles/Form.css";
import CustomButton from "../Components/CustomButton";
import "../Styles/EditVendor.css";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const CreateVendor = () => {
  const [firstName, setFirstName] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName);
  };

  return (
    <div className="vendor-form">
      <div className="vendor-card">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="edit-vendor-title">
            <h2>Create Vendor</h2>
          </div>
          <div className="drag-drop-image">
          <label htmlFor="image-upload" className="image-label">
            <CloudDownloadIcon />
            Drag and drop image here or click to select
          </label>
          <input
            type="file"
            id="image-upload"
            className="image-upload-field"
            accept="image/*"
          />
        </div>
          <div>
            <label htmlFor="vendorName" style={{ marginRight: "203px" }}>
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
            <label htmlFor="contractStart" style={{ marginRight: "150px" }}>
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
            <label htmlFor="License" style={{ marginRight: "185px" }}>
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
            <label htmlFor="redemptionPin" style={{ marginRight: "120px" }}>
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
            <label htmlFor="redemptionPin" style={{ marginRight: "171px" }}>
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
            <label htmlFor="firstName" style={{ marginRight: "221px" }}>
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
            <label htmlFor="firstName" style={{ marginRight: "196px" }}>
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

export default CreateVendor;
