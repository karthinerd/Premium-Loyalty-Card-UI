import React from "react";
import CenteredTabs from "../Components/ThreeTabs";
import "../Styles/CustomerInfo.css";
import VendorVouchers from "./Vendor-Vouchers";

const VendorInfo = () => {

  const tabs = [
    { label: "Info" },
    { label: "Vouchers" },
  ];

  const tabComponents = [
    VendorVouchers,
    VendorVouchers,
  ];

  return (
    <div className="tabs-container">
      <CenteredTabs tabs={tabs} tabComponents={tabComponents} />
    </div>
  );
};

export default VendorInfo;
