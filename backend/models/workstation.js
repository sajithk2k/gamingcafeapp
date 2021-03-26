var mongoose = require ("mongoose");


var workStationSchema = new mongoose.Schema({
    slots:[
        {
            startTime : String,
            endTime : String,
            isBooked : {type : Boolean, "default" : false},
            bookedBy : {type : Object, "default" : null}

        }    
    ],
    name:String,
    pic:String,
    type:String,
    config:
    {
        games:[]
    },
    // timestamps : true

    
    
});
mongoose.model("WorkStation",workStationSchema);

module.exports= mongoose.model("WorkStation", workStationSchema);