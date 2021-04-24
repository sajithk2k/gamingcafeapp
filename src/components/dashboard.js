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
import { authenticate, isAuth ,signout } from '../auth/helpers';
export default function Dashboard() {
    const authApi = useContext(AuthApi);
    
    const handleSignout = () => {
        console.log("asd " + authApi.auth)
    // axios.get
    let msg = "";
    
       console.log(msg)
       
      signout(() => {
        axios.delete('http://localhost:5000/customer/logout')
       .then(res => console.log(res.data));
      });
    };
    return (
      <div>
        <h1>Dashboard</h1>
        <button onClick={handleSignout}>Logout</button>
      </div>
    );
  }