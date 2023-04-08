import React, { useState } from "react";
import "../Styles/Form.css";
import CustomButton from "../Components/CustomButton";
import "../Styles/EditVendor.css";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DescriptionEditor from "../Components/DescriptionField";
import CsvUploader from "../Components/CsvFileUploader";
import Dropdown from "../Components/DropDown";
import WeekdayCheckboxes from "../Components/WeekDaysCheckBox";

const EditVoucher = () => {
  const [firstName, setFirstName] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName);
  };

  const [description, setDescription] = useState("");

  const handleCsvUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const csvData = event.target.result;
      console.log(csvData);
    };
    reader.readAsText(file);
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const [selectedDays, setSelectedDays] = useState([]);

  const handleDaysChange = (days) => {
    setSelectedDays(days);
  };

  return (
    <div className="full-form">
      <div className="form-card">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="profile-picture">
          </div>
          <div>
            <label htmlFor="vendorName" style={{ marginRight: "203px" }}>
              Voucher Name
            </label>
          </div>
          <div className="fl">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="firstName"
            />
          </div>
          <div>
            <label htmlFor="contractStart">Coupon Code</label>
          </div>
          <div style={{ marginTop: "20px" }}>
            <CsvUploader onUpload={handleCsvUpload} />
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
            value={description}
            className="description"
          />
          <div>
            <label htmlFor="contractStart">
              Long Description (Max 1500 Words)
            </label>
          </div>
          <DescriptionEditor
            value={description}
            onChange={(content) => setDescription(content)}
          />
          <div>
            <label htmlFor="vendorName" style={{ marginRight: "203px" }}>
              Number of times the can be redeemed by an customer
            </label>
          </div>
          <div className="fl">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className="firstName"
            />
          </div>
          <div>
            <label htmlFor="License" style={{ marginRight: "235px" }}>
              Original Price
            </label>
            <label htmlFor="phone">Discounted Price</label>
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
            <label htmlFor="License" style={{ marginRight: "300px" }}>
              Vendor
            </label>
            <label htmlFor="phone">Subscription Plan</label>
          </div>
          <div className="fl">
            <Dropdown
              options={options}
              value={selectedOption}
              onChange={handleSelect}
              placeholder="Select an option"
            />
            <Dropdown
              options={options}
              value={selectedOption}
              onChange={handleSelect}
              placeholder="Select an option"
            />
          </div>
          <div>
            <label htmlFor="License" style={{ marginRight: "203px" }}>
              Voucher Category
            </label>
            <label htmlFor="phone">Discounted Percentage</label>
          </div>
          <div className="fl">
            <Dropdown
              options={options}
              value={selectedOption}
              onChange={handleSelect}
              placeholder="Select an option"
            />
            <input type="number" id="lastName" className="lastName" />
          </div>
          <div>
            <label htmlFor="License" style={{ marginRight: "250px" }}>
              Voucher Validity
            </label>
          </div>
          <div className="fl">
          <input type="date" id="lastName" className="lastName" />
          </div>
          <div>
            <label htmlFor="License" style={{ marginRight: "250px" }}>
              Voucher Valid On
            </label>
          </div>
          <div style={{ marginTop: "20px" }}>
          <WeekdayCheckboxes onChange={handleDaysChange} />
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

export default EditVoucher;
