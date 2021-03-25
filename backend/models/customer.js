var mongoose = require ("mongoose");

var CustomerSchema = new mongoose.Schema({
    name: String,
    email: String
});
mongoose.model("Customer",CustomerSchema);

module.exports= mongoose.model("Customer", CustomerSchema);