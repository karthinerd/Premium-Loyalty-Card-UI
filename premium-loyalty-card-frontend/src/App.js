import "./App.css";
import Navbar from "./Components/Navbar";
import SideMenuBar from "./Components/SideMenuBar";
import CustomerList from "./Customer-Screens/CustomerList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerInfo from "./Customer-Screens/CustomerInfo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideMenuBar />
      <Router>
        <Routes>
          <Route path="/customersList" element={<CustomerList />} />
          <Route path="/customerInfo/:id" element={<CustomerInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
