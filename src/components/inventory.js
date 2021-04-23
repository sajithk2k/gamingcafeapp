import React, { Component } from 'react';
import Navbar2 from './navbar2.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

class Inventory extends Component {
    state = {  }
    constructor(props) {
        super(props);
    
        this.state = { systems:[],
            workstation:{}};

      }
    componentDidMount() {
        const apiUrl = 'http://localhost:5000/workstation/';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => this.setState({systems: data.slice(0)}));
      }
      onDelete(d){
        console.log(d);
        console.log(d._id);
        axios.delete(`http://localhost:5000/workstation/${d._id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      axios.get(`http://localhost:5000/workstation/`)
    .then(res => {
      const systems = res.data;
      this.setState({ systems:systems });
    })
    })
      }
    render() { 
        var data=this.state.systems;
        return (
            <div>
                <ul id="removeBullets" className="productGrid flex-container wrap"> <Navbar2 />
                <h3>This will be the Inventory page!</h3>
                {data.map((d) => {
             return(
            <li  className="flex-item ">
            <img className="" src={d.pic} />
                <div className="caption">
                    <h5 className="bolder">{d.name}</h5>
                    <p>Rs.{d.rent}/hr</p>
                </div>
                <DropdownButton id="dropdown-basic-button" title="Games Available">
                    {d.config.games.map((game) =>{
                        return(
                            <Dropdown.Item>{game}</Dropdown.Item>
                       )
                    })}
                </DropdownButton>
                <Button  onClick={() =>this.onDelete(d)} href="/"  className="btn " type="submit">
                 Delete
               </Button>
            </li>)
        })}</ul>
               
            </div>
        );
    }
}
 
export default Inventory;