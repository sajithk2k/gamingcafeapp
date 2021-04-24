import React, { Component } from 'react';
import './booking.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';
class Booking extends Component {
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
        //   msg.slots[num].isBooked = false;
        //   console.log(msg);

    render() { 
        var data=this.state.systems;
        var date1=new Date();
        var date2=new Date();
        date2.setDate(date2.getDate()+1);
        var date3=new Date();
        date3.setDate(date2.getDate()+2);
        var date4=new Date();
        date4.setDate(date2.getDate()+3);
        var date5=new Date();
        date5.setDate(date2.getDate()+4);
        var date6=new Date();
        date6.setDate(date2.getDate()+5);
        var date7=new Date();
        date7.setDate(date2.getDate()+6);

        // console.log(data[0]);
        return ( <div>
            <div>
        <ul id="removeBullets" className="productGrid flex-container wrap">
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
        })}
        </ul>
        </div>
         <DropdownButton id="dropdown-basic-button" title="Select a Date">
                <Dropdown.Item href="#/action-1"  className = {'green-color'}>{date1.toISOString().slice(0, 10)}</Dropdown.Item>
                <Dropdown.Item href="#/action-2"  className = {'green-color'}>{date2.toISOString().slice(0, 10)}</Dropdown.Item>
                <Dropdown.Item href="#/action-3"  className = {'green-color'}>{date3.toISOString().slice(0, 10)}</Dropdown.Item>
                <Dropdown.Item href="#/action-3"  className = {'green-color'}>{date4.toISOString().slice(0, 10)}</Dropdown.Item>
                <Dropdown.Item href="#/action-3"  className = {'green-color'}>{date5.toISOString().slice(0, 10)}</Dropdown.Item>
                <Dropdown.Item href="#/action-3"  className = {'green-color'}>{date6.toISOString().slice(0, 10)}</Dropdown.Item>
                <Dropdown.Item href="#/action-3"  className = {'green-color'}>{date7.toISOString().slice(0, 10)}</Dropdown.Item>

                </DropdownButton>
        </div>
    );
    }
  
}
 
export default Booking;