import React from "react";
import CenteredTabs from "../Components/ThreeTabs";
import "../Styles/CustomerInfo.css";
import SubscriptionVoucher from "./Subscription-Voucher";
import SubscriptionCustomer from "./Subscription-Customer";

const SubscriptionInfo = () => {

  const tabs = [
    { label: "Info" },
    { label: "Customers" },
    { label: "Voucher" },
  ];

  const tabComponents = [
    SubscriptionVoucher,
    SubscriptionCustomer,
    SubscriptionVoucher
  ];

  return (
    <div className="tabs-container">
      <CenteredTabs tabs={tabs} tabComponents={tabComponents} />
    </div>
  );
};

export default SubscriptionInfo;
