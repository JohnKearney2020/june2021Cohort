const express = require('express');
// the db will load the index.js
const db = require('../../models');
const router = express.Router();

// POST /api/v1/doctors
router.post('/', function(req, res, next) {
  // check for all required fields
  if(!req.body || !req.body.name){
    res.status(422).json({ error: 'must include name' });
    return;
  }
  // create a new patient
    // sequelize autonmatically sanitizes data to prevent SQL injections
  db.Doctor.create({
    name: req.body.name,
    specialty: req.body.specialty,
    location: req.body.location
  })
    .then((createdDoctor) => {
      // send new patient as response
      res.status(201).json(createdDoctor);
    })
  
})

module.exports = router;