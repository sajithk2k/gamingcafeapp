const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('express').Router();
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
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

const requestRouter = require('./routes/request');
app.use('/request',requestRouter);

app.get('/', function (req, res) {
  res.redirect('/login');
})
// app.use(express.static(path.join(__dirname, '../build')))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build'))
// })
app.listen(port,() => {
    console.log('Server is running on port:',port);
});