import React, { Component } from 'react';
import Button from 'react-bootstrap/Dropdown';
import Navbar2 from './navbar2.js';
import axios from 'axios';
// import './request.css'
class Request extends Component {
      constructor(props) {
        super(props);
    
        this.state = { requests:[]
            };
      }
      componentDidMount() {
        const apiUrl = 'http://localhost:5000/request/';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => this.setState({requests: data.slice(0)}));
      }
      removeRequest(r){
          console.log(r);
          console.log(r._id);
          axios.delete(`http://localhost:5000/request/${r._id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        axios.get(`http://localhost:5000/request/`)
      .then(res => {
        const requests = res.data;
        this.setState({ requests });
      })
      })
    }
      render() {
        var data=this.state.requests;
        // console.log(data[0]);
        return ( <div>
            <Navbar2 /> 
            <div>
        <ul id="removeBullets" className="productGrid flex-container wrap">
             {data.map((d) => {
             return(
            <li  className="flex-item ">
                <h3>{d.wsname}</h3>
                <p>{d.reqbody}</p>
                <h5>{d.requestedBy}</h5>
                <p>{d.createdAt.substring(0,10)}</p>
                <Button variant="success" onClick={() =>this.removeRequest(d)} className="btn-success">Mark as Resolved</Button>{' '}
            </li>)
        })}
        </ul>
        </div>
        </div>
    );
    }
}
 
export default Request;