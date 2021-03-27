import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './booking.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Booking extends Component {
    state = {  }
    render() { 
        const data =[{"name":"MSI GF65","img":"https://www.designbust.com/download/437/png/gaming_pc_transparent_icon256.png","rent":"Rs.500/hr"},{"name":"MSI GF65","img":"https://www.designbust.com/download/437/png/gaming_pc_transparent_icon256.png","rent":"Rs.500/hr"},{"name":"MSI GF65","img":"https://www.designbust.com/download/437/png/gaming_pc_transparent_icon256.png","rent":"Rs.500/hr"}];
        return (  
        <ul id="removeBullets" className="productGrid flex-container wrap">
             {data.map(function(d,idx){
             return(
            <li key={idx} className="flex-item ">
            <img className="" src={d.img} />
                <div className="caption ">
                    <h5 className="bolder">{d.name}</h5>
                    <p>{d.rent}</p>
                </div>
            </li>)
        })}
        </ul>
    );
    }
}
 
export default Booking;