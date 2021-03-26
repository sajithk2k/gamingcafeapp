const mongoose = require ("mongoose");

const dateSchema = new mongoose.Schema({
    workStations:[],
    date:Date,
    
});
mongoose.model("Date",dateSchema);

module.exports= mongoose.model("Date", dateSchema);