import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './booking.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
class Booking extends Component {
    
    state={
        systems:[]
    }
    //'http://localhost:5000/workstation'
      
    componentDidMount() {
        const apiUrl = 'http://localhost:5000/workstation/';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => this.setState({systems: data.slice(0)}));
      }

    
    render() { 
      
       
        var data=this.state.systems;
        console.log(this.state)
        return (  
            <div>
            
        <ul id="removeBullets" className="productGrid flex-container wrap">
             {data.map(function(d,idx){
             return(
                 
            <li key={idx} className="flex-item ">
            <img className="" src={d.pic} />
                <div className="caption ">
                    <h5 className="bolder">{d.name}</h5>
                    <p>{d.rent}</p>
                </div>
            </li>)
        })}
        </ul>
        </div>
    );
    }
}
 
export default Booking;