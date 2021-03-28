import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class LoginForm extends Component {
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
                <div class="login-box">
                    <h1>Login</h1>
                    <div class="textbox">
	                    <i class="fas fa-user"></i>
	                    <input type="text" placeholder="Username"/>
	                </div>
                    <div class="textbox">
	                    <i class="fas fa-lock"></i>
	                    <input type="password" placeholder="Password"/>
	                </div>
                    <input type="button" class="btn" value="Sign in" />

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
 
export default LoginForm;