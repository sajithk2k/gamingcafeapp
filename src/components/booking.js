import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './booking.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
        console.log(data[0]);
        return (  
            <div>
            
        <ul id="removeBullets" className="productGrid flex-container wrap">
             {data.map(function(d,idx){
             return(
                 
            <li key={idx} className="flex-item ">
            <img className="" src={d.pic} />
                <div className="caption ">
                    <h5 className="bolder">{d.name}</h5>
                    <p>Rs.{d.rent}/hr</p>
                </div>
                <DropdownButton id="dropdown-basic-button" title="Book a Slot">
                <Dropdown.Item href="#/action-1" className = {d.slots[0].isBooked?'red-color':'green-color'}>09:00-10:00</Dropdown.Item>
                <Dropdown.Item href="#/action-2" className = {d.slots[1].isBooked?'red-color':'green-color'}>10:00-11:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3" className = {d.slots[2].isBooked?'red-color':'green-color'}>11:00-12:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3" className = {d.slots[3].isBooked?'red-color':'green-color'}>12:00-13:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3" className = {d.slots[4].isBooked?'red-color':'green-color'}>13:00-14:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3" className = {d.slots[5].isBooked?'red-color':'green-color'}>14:00-15:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3" className = {d.slots[6].isBooked?'red-color':'green-color'}>15:00-16:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3" className = {d.slots[7].isBooked?'red-color':'green-color'}>16:00-17:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3" className = {d.slots[8].isBooked?'red-color':'green-color'}>17:00-18:00</Dropdown.Item>
                </DropdownButton>
            </li>)
        })}
        </ul>
        </div>
    );
    }
}
 
export default Booking;