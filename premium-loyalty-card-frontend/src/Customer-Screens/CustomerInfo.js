import React, { useState } from "react";
import CenteredTabs from "../Components/ThreeTabs";
import "../Styles/CustomerInfo.css";

const MyTable = () => {
  const [value, setValue] = useState(0);

  const handleTabChange = (newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { label: "Info" },
    { label: "Subscription" },
    { label: "Voucher" },
  ];

  return (
    <div className="tabs-container">
      <CenteredTabs value={value} tabs={tabs} onChange={handleTabChange} />
    </div>
  );
};

export default MyTable;
