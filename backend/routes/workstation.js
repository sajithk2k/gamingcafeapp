const router = require('express').Router();
let workStation = require('../models/workstation');

router.route('/').get((req, res) => {
    workStation.find()
      .then(workstations => res.json(workstations))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
router.route('/add').post((req, res) => {
    
    let name = req.body.name
    let pic = req.body.pic
    let type = req.body.type


    const newWorkStation = new workStation(req.body);
    // workstat = req.body   
  
    newWorkStation.save()
      .then(() => res.json('Work Station added'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  workStation.findById(req.params.id)
    .then(workstation => res.json(workstation))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  workStation.findByIdAndDelete(req.params.id)
    .then(() => res.json('workstation deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  workStation.findById(req.params.id)
    .then(workstation => {
      workstation.slots.startTime = req.body.slots.startTime;
      workstation.slots.endTime = req.body.slots.endTime;
      workstation.slots.isBooked = Number(req.body.slots.isBooked);
      workstation.slots.bookedBy = Date.parse(req.slots.body.bookedBy);

      workstation.save()
        .then(() => res.json('workstation updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
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