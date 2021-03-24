import React, { Component } from 'react';
import Navbar from './components/navbar.js';
import './App.css';
import LoginForm from './components/loginform.js';
import SignUpForm from './components/signupform.js';
function App() {
  return (
    <div>
       <Navbar />
       <LoginForm />
       <SignUpForm />
    </div>
  );
}

export default App;

