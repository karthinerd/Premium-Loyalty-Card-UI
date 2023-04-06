import React from "react";
import CenteredTabs from "../Components/ThreeTabs";
import "../Styles/CustomerInfo.css";
import VoucherCoupons from "./Voucher-CouponCodes";
import ArrowIcon from "../Components/ArrowIcon";

const VoucherInfo = () => {

  const tabs = [
    { label: "Info" },
    { label: "Coupon Codes" },
  ];

  const tabComponents = [
    VoucherCoupons,
    VoucherCoupons,
  ];

  return (
    <div className="make-grey">
      <div className="back-button">
        <ArrowIcon destination="/vouchersList" />
        <h1 className="customer-name">Karthi</h1>
      </div>
      <div className="tabs-container">
        <CenteredTabs tabs={tabs} tabComponents={tabComponents} />
      </div>
    </div>
  );
};

export default VoucherInfo;
