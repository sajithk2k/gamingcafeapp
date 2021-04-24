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
    constructor(props) {
        super(props);
    
        this.state = { systems:[],
            workstation:{}};
        this.bookSlot = this.bookSlot.bind(this);
      }
    //'http://localhost:5000/workstation'
      
    componentDidMount() {
        const apiUrl = 'http://localhost:5000/workstation/';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => this.setState({systems: data.slice(0)}));
      }
      bookSlot(msg,num){
        //   this.setState({workstation:d});
        if(msg.slots[num].isBooked){alert("Slot not available");
        return}
        alert("Pay Rs."+msg.rent+" to confirm booking.")
        alert("Slot Booked!")
        console.log(typeof(num));
            console.log(msg.slots[num].isBooked);
            let msg1= msg;
            msg1.slots[num].isBooked=true;
            console.log(msg1);
            console.log(msg1._id);
            axios.post('http://localhost:5000/workstation/update/'+msg1._id,msg1)
           .then(res => console.log(res.data));
      }
      onSubmit = () => {
        if(document.getElementById("name").value!="" && document.getElementById("type").value!="" ){
         let pict="";
          let type=document.getElementById("type").value
         if(type=="PC"){
             pict="https://www.designbust.com/download/437/png/gaming_pc_transparent_icon256.png"
         }else if(type=="Console"){
            pict="https://www.designbust.com/download/464/png/sony_playstation_transparent256.png"
        }else{
             alert("please type PC or Console in type of system field")
             document.getElementById("type").value=""
             return;
         }
        const newRequest ={
          name: document.getElementById("name").value,
          pic: pict,
          type: document.getElementById("type").value

        }
        axios.post('http://localhost:5000/workstation/add',newRequest)
             .then(res => console.log(res.data));
             alert("Request Added!");
             axios.get(`http://localhost:5000/workstation/`)
             .then(res => {
               const systems = res.data;
               this.setState({ systems:systems  });
             })
            }else{
                alert("please enter name of workstation and type of workstation")
            }
        }
    render() { 
        var data=this.state.systems;
        return (

                <div>
                <Navbar2 />
                <div>
                <ul id="removeBullets" className="productGrid flex-container wrap"> 
                {/* <h3>This will be the Inventory page!</h3> */}
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
                {/* <button onClick={() =>this.bookSlot(d)}>Testing</button> */}
                <DropdownButton id="dropdown-basic-button" title="Book a Slot">
                <Dropdown.Item href="#/action-1" onClick={() =>this.bookSlot(d,0)} className = {d.slots[0].isBooked?'red-color':'green-color'}>09:00-10:00</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={() =>this.bookSlot(d,1)} className = {d.slots[1].isBooked?'red-color':'green-color'}>10:00-11:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={() =>this.bookSlot(d,2)} className = {d.slots[2].isBooked?'red-color':'green-color'}>11:00-12:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={() =>this.bookSlot(d,3)} className = {d.slots[3].isBooked?'red-color':'green-color'}>12:00-13:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={() =>this.bookSlot(d,4)}className = {d.slots[4].isBooked?'red-color':'green-color'}>13:00-14:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={() =>this.bookSlot(d,5)}className = {d.slots[5].isBooked?'red-color':'green-color'}>14:00-15:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={() =>this.bookSlot(d,6)}className = {d.slots[6].isBooked?'red-color':'green-color'}>15:00-16:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={() =>this.bookSlot(d,7)} className = {d.slots[7].isBooked?'red-color':'green-color'}>16:00-17:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={() =>this.bookSlot(d,8)}className = {d.slots[8].isBooked?'red-color':'green-color'}>17:00-18:00</Dropdown.Item>
                </DropdownButton>
            </li>)
        })}</ul>
<<<<<<< HEAD


=======
            </div>
            <div>
>>>>>>> 2632f9da7cc560369e6b9bc6fb99c6182137cbe1
            <form >
                <label>Name of Workstation to be added</label>
            <input type="text" id="name" />
            <label>Add type of workstation</label>
            <input type="text" id="type" />
            <label>Rent amount</label>
            <input type="text" id="rent" />
            <Button href="/inventory" onClick={this.onSubmit} className="btn" type="submit">Add system</Button>
            </form>
            </div>
        );
    }
}
  
 
export default Inventory;