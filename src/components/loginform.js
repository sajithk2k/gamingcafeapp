import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authAction'
import classnames from 'classnames';
import PropTypes from 'prop-types';
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
        axios.post('http://localhost:5000/customer/glogin',customer)
           .then(res => console.log(res.data));
           alert("Logged In!")
      }
      // constructor() {
      //   super();
      //   this.state = {
      //     email: '',
      //     password: '',
      //     errors: {}
      //   };
    
      //   this.onChange = this.onChange.bind(this);
      //   this.onSubmit = this.onSubmit.bind(this);
      // }
      // componentDidMount() {
      //   if (this.props.auth.isAuthenticated) {
      //     this.props.history.push('/dashboard');
      //   }
      // }
    
      // componentWillReceiveProps(nextProps) {
      //   if (nextProps.auth.isAuthenticated) {
      //     this.props.history.push('/dashboard');
      //   }
    
      //   if (nextProps.errors) {
      //     this.setState({ errors: nextProps.errors });
      //   }
      // }
      // onSubmit(e) {
      //   e.preventDefault();
    
      //   const userData = {
      //     email: this.state.email,
      //     password: this.state.password
      //   };
    
      //   this.props.loginUser(userData);
      // }
    
      // onChange(e) {
      //   this.setState({ [e.target.name]: e.target.value });
      // }
    
    render() { 
        const { errors } = this.state;
        return (
                <div class="contact-form">
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
                {/* <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form> */}

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