import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import './App.css';
import LoginForm from './components/loginform.js';
import SignUpForm from './components/signupform.js';
import GoogleLogin from 'react-google-login';
class App extends Component {
   handleLogin = (response) =>{
     console.log(response);
     console.log(response.profileObj);
   }
  render() {
  return (
    <div>
       {/* <Navbar /> */}
       {/* <LoginForm />
       <SignUpForm /> */}
       <GoogleLogin
       clientId ="204064659282-mu672f9s1mdp5n3l68shedq6kba102kr.apps.googleusercontent.com"
       buttonText="Login"
       onSuccess={this.handleLogin}
       onFailure={this.handleLogin}
       cookiePolicy={'single_host_origin'}
       />
    </div>
  );
      }
}

export default App;

