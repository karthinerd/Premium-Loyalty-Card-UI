import "./App.css";
import Navbar from "./Components/Navbar";
import SideMenuBar from "./Components/SideMenuBar";
import CustomerList from "./Customer-Screens/CustomerList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerInfo from "./Customer-Screens/CustomerInfo";
import SubscriptionList from "./Subscription-Screens/SubscriptionList";
import SubscriptionInfo from "./Subscription-Screens/SubscriptionInfo";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
