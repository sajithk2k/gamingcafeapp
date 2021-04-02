const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')
const router = require('express').Router();
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://ashwin:ash@gamingcafe.ntvhp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
const customerRouter = require('./routes/customer');
app.use('/customer', customerRouter);

const workStationRouter = require('./routes/workstation');
app.use('/workstation', workStationRouter);

const dateRouter = require('./routes/date');
app.use('/date', dateRouter);
console.log(__dirname);
app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});