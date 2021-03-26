const mongoose = require ("mongoose");

const slotSchema = new mongoose.Schema({startTime : String,isBooked : Boolean , bookedBy:{}});

const workStationSchema = new mongoose.Schema({
    slots:[slotSchema],
    name:String,
    pic:String,
    type:String,
    config:
    {
        games:[]
    },
    
    
},{ timestamps : true});
mongoose.model("WorkStation",workStationSchema);

module.exports= mongoose.model("WorkStation", workStationSchema);

//{"startTime" : "9","isBooked" : false,"bookedBy" : {}}
// startTime : String,
// isBooked : {type : Boolean, "default" : false},
// bookedBy : {type : Object, "default" : null}