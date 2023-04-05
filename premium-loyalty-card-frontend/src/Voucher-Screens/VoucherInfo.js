import React from "react";
import CenteredTabs from "../Components/ThreeTabs";
import "../Styles/CustomerInfo.css";
import VoucherCoupons from "./Voucher-CouponCodes";

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
    <div className="tabs-container">
      <CenteredTabs tabs={tabs} tabComponents={tabComponents} />
    </div>
  );
};

export default VoucherInfo;
