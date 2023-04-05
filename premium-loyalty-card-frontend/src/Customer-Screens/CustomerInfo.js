import React from "react";
import CenteredTabs from "../Components/ThreeTabs";
import "../Styles/CustomerInfo.css";
import CustomerVoucher from "./CustomerVoucher";
import CustomerSubscription from "./CustomerSubscription";

const MyTable = () => {

  const tabs = [
    { label: "Info" },
    { label: "Subscription" },
    { label: "Voucher" },
  ];

  const tabComponents = [
    CustomerSubscription,
    CustomerSubscription,
    CustomerVoucher,
  ];

  return (
    <div className="tabs-container">
      <CenteredTabs tabs={tabs} tabComponents={tabComponents} />
    </div>
  );
};

export default MyTable;
