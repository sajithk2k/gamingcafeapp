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

export default function Dashboard() {
    const authApi = useContext(AuthApi);
  
    const handleSignout = () => {
    // axios.get
    let msg = "";
    axios.delete('http://localhost:5000/customer/logout')
       .then(res => console.log(res.data));
       console.log(msg)
       alert(msg)
      authApi.setAuth(false);
    };
    return (
      <div>
        <h1>Dashboard</h1>
        <button onClick={handleSignout}>Logout</button>
      </div>
    );
  }