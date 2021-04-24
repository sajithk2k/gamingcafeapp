import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import Booking from './components/booking.js';
// import Dashboard from './components/dashboard.js';
import './App.css';
import LoginForm from './components/loginform.js';
// import Inventory from './components/inventory.js';
// import Staff from './components/staff.js'
import Request from './components/request.js'
import SignUpForm from './components/signupform.js';
import GoogleLogin from 'react-google-login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
   
  render() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        {/* <LoginForm />
        <SignUpForm /> */}
        <Route path ="/login" component = {LoginForm} />
        <Route path ="/booking" component = {Booking} />
        {/* <Route path ="/dashboard" component = {Dashboard} /> */}
        {/* <Route path ="/inventory" component = {Inventory} /> */}
        {/* <Route path ="/staff" component = {Staff} /> */}
        {/* <Route path ="/request" component ={Request} /> */}
      </div>
    </Router>
  );
      }
}
export default App;