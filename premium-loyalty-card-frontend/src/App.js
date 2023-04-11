import "./App.css";
import SideMenuBar from "./Components/SideMenuBar";
import CustomerList from "./Customer-Screens/CustomerList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerInfo from "./Customer-Screens/CustomerInfo";
import SubscriptionList from "./Subscription-Screens/SubscriptionList";
import SubscriptionInfo from "./Subscription-Screens/SubscriptionInfo";
import VoucherList from "./Voucher-Screens/VouchersList";
import VoucherInfo from "./Voucher-Screens/VoucherInfo";
import UserList from "./User-Screens/UserList";
import VendorList from "./Vendor-Screens/VendorList";
import VendorInfo from "./Vendor-Screens/VendorInfo";
import LoginPage from "./Login/LoginPage";
import EditUser from "./User-Screens/EditUser";
import CreateUser from "./User-Screens/CreateUser";
import CreateVendor from "./Vendor-Screens/CreateVendor";
import SubscriptionCreation from "./Subscription-Screens/SubscriptionCreation";
import VoucherCreation from "./Voucher-Screens/CreateVoucher";
// import LoginForm from "./Login/LoginForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/loginForm" element={<LoginForm />} /> */}
          <Route path="/*" element={<WithNavBarAndSideMenuBar />} />
        </Routes>
      </Router>
    </div>
  );
}

function WithNavBarAndSideMenuBar() {
  return (
    <>
      <SideMenuBar />
      <Routes>
        <Route path="/customersList" element={<CustomerList />} />
        <Route path="/customerInfo/:id" element={<CustomerInfo />} />
        <Route path="/subscriptionsList" element={<SubscriptionList />} />
        <Route path="/SubscriptionInfo/:id" element={<SubscriptionInfo />} />
        <Route path="/vouchersList" element={<VoucherList />} />
        <Route path="/voucherInfo/:id" element={<VoucherInfo />} />
        <Route path="/usersList" element={<UserList />} />
        <Route path="/editUserInfo/:id" element={<EditUser />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/vendorsList" element={<VendorList />} />
        <Route path="/vendorInfo/:id" element={<VendorInfo />} />
        <Route path="/createVendor" element={<CreateVendor />} />
        <Route path="/createSubscription" element={<SubscriptionCreation />} />
        <Route path="/createVoucher" element={<VoucherCreation />} />
      </Routes>
    </>
  );
}

export default App;
