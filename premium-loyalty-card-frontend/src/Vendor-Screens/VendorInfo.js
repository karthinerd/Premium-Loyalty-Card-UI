import React from "react";
import CenteredTabs from "../Components/ThreeTabs";
import "../Styles/CustomerInfo.css";
import VendorVouchers from "./Vendor-Vouchers";
import ArrowIcon from "../Components/ArrowIcon";
import EditVendor from "./Edit-vendor";

const VendorInfo = () => {

  const tabs = [
    { label: "Info" },
    { label: "Vouchers" },
  ];

  const tabComponents = [
    EditVendor,
    VendorVouchers,
  ];

  return (
    <div className="make-grey">
      <div className="back-button">
        <ArrowIcon destination="/vendorsList" />
        <h1 className="customer-name">Karthi</h1>
      </div>
      <div className="tabs-container">
        <CenteredTabs tabs={tabs} tabComponents={tabComponents} />
      </div>
    </div>
  );
};

export default VendorInfo;
