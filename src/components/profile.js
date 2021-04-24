import React, { Component ,useContext } from 'react';
import Navbar2 from './navbar2.js';
import axios from 'axios';
import AuthApi from '../utils/AuthApi';
// class Dashboard extends Component {
//     state = {  }
//     render() { 
//         return(
//                 <Navbar2 />
               
//         );
//     }
// }
 
// export default Dashboard;
import { authenticate, isAuth ,signout,getCookie } from '../auth/helpers';
import { useHistory } from 'react-router-dom';
import cookie from 'js-cookie';
export default function Profile() {
    let history = useHistory();
    // const authApi = useContext(AuthApi);
    const cust = cookie.get('user');
    const mer = JSON.parse(localStorage.getItem('user'));
    console.log(cust)
    console.log(mer)
    const handleSignout = () => {
        // console.log("asd " + authApi.auth  
      signout(() => {
        axios.delete('http://localhost:5000/customer/logout')
       .then(res => console.log(res.data));
       history.push('/signin')
      });
    };
    return (
      <div>
        <h1>Hi {String(mer.name)}!</h1>
        {/* <div>{String(cust)}</div> */}
        <button onClick={handleSignout}>Logout</button>

      </div>
    );
  }