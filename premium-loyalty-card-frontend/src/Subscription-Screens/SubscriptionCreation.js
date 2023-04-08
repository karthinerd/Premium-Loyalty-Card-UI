import React, { useState } from "react";
import "../Styles/Form.css";
import CustomButton from "../Components/CustomButton";
import "../Styles/EditVendor.css";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ButtonToggle from "../Components/ToggleButton";
import DescriptionEditor from "../Components/DescriptionField";

const SubscriptionCreation = () => {
  const [firstName, setFirstName] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName);
  };

  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  const [description, setDescription] = useState("");


  return (
    <div className="vendor-form">
      <div className="vendor-card">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="edit-vendor-title">
            <h2>Create Subscriptions</h2>
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
              style={{ marginBottom: "30px" }}
            />
          </div>
          <div>
            <label htmlFor="vendorName" style={{ marginRight: "203px" }}>
              Subscription Name
            </label>
            <label htmlFor="emiratesId">Subscription Status</label>
          </div>
          <div className="fl">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="firstName"
              style={{ marginRight: "170px" }}
            />
            <ButtonToggle checked={checked} onChange={handleToggle} />
          </div>
          <div>
            <label htmlFor="contractStart">Description (Max 1500 Words)</label>
          </div>
          <DescriptionEditor
            value={description}
            onChange={(content) => setDescription(content)}
            />
          <div>
            <label htmlFor="License" style={{ marginRight: "270px" }}>
              Price
            </label>
            <label htmlFor="phone">Validity</label>
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
            className="edit-customer"
            text="save"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default SubscriptionCreation;
