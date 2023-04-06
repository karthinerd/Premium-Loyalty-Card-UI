import "./App.css";
import Navbar from "./Components/Navbar";
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideMenuBar />
      <Router>
        <Routes>
          <Route path="/customersList" element={<CustomerList />} />
          <Route path="/customerInfo/:id" element={<CustomerInfo />} />
          <Route path="/subscriptionsList" element={<SubscriptionList />} />
          <Route path="/SubscriptionInfo/:id" element={<SubscriptionInfo />} />
          <Route path="/vouchersList" element={<VoucherList />} />
          <Route path="/voucherInfo/:id" element={<VoucherInfo />} />
          <Route path="/usersList" element={<UserList />} />
          <Route path="/vendorsList" element={<VendorList />} />
          <Route path="/vendorInfo/:id" element={<VendorInfo />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
