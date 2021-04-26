import React, { useContext } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../components/loginform';
import SignUp from '../components/signupform';
import DashBoard from '../components/dashboard';
import Booking from '../components/booking'
import Profile from '../components/profile'
// import AuthApi from '../utils/AuthApi';
import Navbar2 from '../components/navbar2'
import { authenticate, isAuth , isAdmin } from '../auth/helpers';
import Inventory from '../components/inventory';
import Request from '../components/request'

// <Route path ="/login" component = {LoginForm} />
//         <Route path ="/booking" component = {Booking} />
//         <Route path ="/dashboard" component = {Dashboard} />
//         <Route path ="/inventory" component = {Inventory} />
//         <Route path ="/staff" component = {Staff} />
//         <Route path ="/request" component ={Request} />

function Routes() {
  
  return (
    <Switch>
      
      <RouteRegisteration
        path="/signin"
        component={SignIn}
        // auth={authApi.auth}
      />
      <RouteRegisteration
        path="/signup"
        component={SignUp}
        // auth={authApi.auth}
      />
      <RouteProtectedAdmin
        path="/dashboard"
        component={DashBoard}
        // auth={authApi.auth}
      />
      <RouteProtected
        path="/booking"
        component={Booking}
        // auth={authApi.auth}
      />
      <RouteProtected
        path="/profile"
        component={Profile}
        // auth={authApi.auth}
      />
      <RouteProtectedAdmin
        path="/inventory"
        component={Inventory}
        // auth={authApi.auth}
      />
      <RouteProtectedAdmin
        path="/request"
        component={Request}
        // auth={authApi.auth}
      />
          
      
    </Switch>
  );
}

// const RouteRegisteration = ({ auth, component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         !auth ? <Component {...props} /> : <Redirect to="/booking" />
//       }
//     />
//   );
// };

// const RouteProtected = ({ auth, component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         auth ? <Component {...props} /> : <Redirect to="/signin" />
//       }
//     />
//   );
// };
const RouteRegisteration = ({ component: Component, ...rest }) => {
    
    return (
      <Route
        {...rest}
        render={(props) =>
          !isAuth() ? <Component {...props} /> : <Redirect to="/booking" />
        }
      />
    );
  };
  
const RouteProtected = ({component: Component, ...rest }) => {
  
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};
const RouteProtectedAdmin = ({component: Component, ...rest }) => {
  
  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin() ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default Routes;