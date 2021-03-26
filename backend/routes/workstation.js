const router = require('express').Router();
let workStation = require('../models/workstation');

router.route('/').get((req, res) => {
    workStation.find()
      .then(workstations => res.json(workstations))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
router.route('/add').post((req, res) => {
    
    // let name = req.body.name
    // let pic = req.body.pic
    // let type = req.body.type


    const newWorkStation = new workStation(req.body);
    // workstat = req.body   
  
    newWorkStation.save()
      .then(() => res.json('Work Station added'))
      .catch(err => res.status(400).json('Error: ' + err));
});

// slots:[
//     {
//         startTime : String,
//         endTime : String,
//         isBooked : {type : Boolean, "default" : false},
//         bookedBy : {type : Object, "default" : null}

//     }    
// ],
// name:String,
// pic:String,
// type:String,
// config:{
//     games:[]
//     }
module.exports = router;