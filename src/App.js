import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import Booking from './components/booking.js';
import './App.css';
import LoginForm from './components/loginform.js';
import SignUpForm from './components/signupform.js';
import GoogleLogin from 'react-google-login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
   
  render() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        {/* <LoginForm />
        <SignUpForm /> */}
        <Route path ="/login" component = {LoginForm} />
        <Route path ="/booking" component = {Booking} />
      </div>
    </Router>
  );
      }
}
export default App;

