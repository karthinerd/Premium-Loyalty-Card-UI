import React from "react";
import CenteredTabs from "../Components/ThreeTabs";
import "../Styles/CustomerInfo.css";
import CustomerVoucher from "./CustomerVoucher";
import CustomerSubscription from "./CustomerSubscription";
import ArrowIcon from "../Components/ArrowIcon";
import CustomerEdit from "./CustomerEdit";

const MyTable = () => {

  const tabs = [
    { label: "Info" },
    { label: "Subscription" },
    { label: "Voucher" },
  ];

  const tabComponents = [
    CustomerEdit,
    CustomerSubscription,
    CustomerVoucher,
  ];


  return (
    <div className="make-grey">
      <div className="back-button">
        <ArrowIcon destination="/customersList"/>
        <h1 className="customer-name">Karthi</h1>
      </div>
      <div className="tabs-container">
        <CenteredTabs tabs={tabs} tabComponents={tabComponents} />
      </div>
    </div>
  );
};

export default MyTable;
