import React, { Component ,useContext,useState } from 'react';
import Navbar2 from './navbar2.js';
import axios from 'axios';
import AuthApi from '../utils/AuthApi';
import UserBooking from'./userbooking.js';
import Navbar from './navbar.js';
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
    console.log("Printing Email:",mer.email);
    const [email, setEmail] = useState(mer.email);
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
        <Navbar />
        <h1>Hi {String(mer.name)}!</h1>
        {/* <div>{String(cust)}</div> */}
        <button onClick={handleSignout}>Logout</button>
        <UserBooking userEmail={email}/>
      </div>
    );
  }