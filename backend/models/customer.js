const mongoose = require ("mongoose");

const CustomerSchema = new mongoose.Schema({
    name: String,
    email: String,
    slotsBooked : [],
    
},{ timestamps : true});
mongoose.model("Customer",CustomerSchema);

module.exports= mongoose.model("Customer", CustomerSchema);