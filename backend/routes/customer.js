const router = require('express').Router();
const Customer = require('../models/customer');

router.route('/').get((req, res) => {
  Customer.find()
    .then(customers => res.json(customers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  const newCustomer = new Customer({name,email});

  newCustomer.save()
    .then(() => res.json('Customer added!'+ req.body))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;