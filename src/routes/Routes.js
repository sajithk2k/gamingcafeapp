import React, { useContext } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../components/loginform';
import SignUp from '../components/signupform';
import DashBoard from '../components/dashboard';
import AuthApi from '../utils/AuthApi';

function Routes() {
  const authApi = useContext(AuthApi);
  return (
    <Switch>
      <RouteRegisteration
        path="/signin"
        component={SignIn}
        auth={authApi.auth}
      />
      <RouteRegisteration
        path="/signup"
        component={SignUp}
        auth={authApi.auth}
      />
      <RouteProtected
        path="/dashboard"
        component={DashBoard}
        auth={authApi.auth}
      />
    </Switch>
  );
}

const RouteRegisteration = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? <Component {...props} /> : <Redirect to="/dashboard" />
      }
    />
  );
};

const RouteProtected = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default Routes;