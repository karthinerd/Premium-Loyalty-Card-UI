
import './App.css';
import Navbar from './Components/Navbar';
import SideMenuBar from './Components/SideMenuBar';
import CustomerList from './Customer-Screens/CustomerList';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import CustomerInfo from './Customer-Screens/CustomerInfo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SideMenuBar/>
      <CustomerList/>
      {/* <Router>
      <Switch>
        <Route exact path="/" component={CustomerList} />
        <Route path="/customer/:id" component={CustomerInfo} />
      </Switch>
    </Router> */}
    </div>
  );
}

export default App;
