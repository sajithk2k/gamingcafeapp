const mongoose = require ("mongoose");

const CustomerSchema = new mongoose.Schema({
    id : String,
    name: String,
    email: String,
    password : String,
    Date : [{"Date" : String , "slotsBooked" : []}],
    slotsBooked : [],
    
},{ timestamps : true});
mongoose.model("Customer",CustomerSchema);

module.exports= mongoose.model("Customer", CustomerSchema);