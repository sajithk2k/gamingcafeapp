import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import Booking from './components/booking.js';
import './App.css';
import LoginForm from './components/loginform.js';
import SignUpForm from './components/signupform.js';
import GoogleLogin from 'react-google-login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';
class App extends Component {
   handleLogin = (response) =>{
     console.log(response);
     console.log(response.profileObj);
     console.log(response.profileObj.email);
     const customer = {
       name: response.profileObj.name,
       email: response.profileObj.email
     }
     axios.post('http://localhost:5000/customer/add',customer)
        .then(res => console.log(res.data));
   }
  render() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        {/* <LoginForm />
        <SignUpForm /> */}
        <GoogleLogin
        clientId ="204064659282-mu672f9s1mdp5n3l68shedq6kba102kr.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.handleLogin}
        onFailure={this.handleLogin}
        cookiePolicy={'single_host_origin'}
        />
        <Route path ="/booking" component = {Booking} />
      </div>
    </Router>
  );
      }
}
export default App;

