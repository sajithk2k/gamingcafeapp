const mongoose = require ("mongoose");
const workstationModel = require('./workstation');
// const workStationSchema = mongoose.Schema(workstationModel);
const dateSchema = new mongoose.Schema({
    workStations:[],
    date:String,
    
});
mongoose.model("Date",dateSchema);

module.exports= mongoose.model("Date", dateSchema);