import React from "react";
import CenteredTabs from "../Components/ThreeTabs";
import "../Styles/CustomerInfo.css";
import SubscriptionVoucher from "./Subscription-Voucher";
import SubscriptionCustomer from "./Subscription-Customer";
import ArrowIcon from "../Components/ArrowIcon";
import EditSubscription from "./EditSubscription";

const SubscriptionInfo = () => {
  const tabs = [
    { label: "Info" },
    { label: "Customers" },
    { label: "Voucher" },
  ];

  const tabComponents = [
    EditSubscription,
    SubscriptionCustomer,
    SubscriptionVoucher,
  ];

  return (
    <div className="make-grey">
      <div className="back-button">
        <ArrowIcon destination="/subscriptionsList" />
        <h1 className="customer-name">Karthi</h1>
      </div>
      <div className="tabs-container">
        <CenteredTabs tabs={tabs} tabComponents={tabComponents} />
      </div>
    </div>
  );
};

export default SubscriptionInfo;
