const express = require('express');
// the db will load the index.js
const db = require('../../models');
const router = express.Router();

// POST /api/v1/patients
router.post('/', function(req, res, next) {
  // check for all required fields
  if(!req.body || !req.body.name){
    res.status(422).json({ error: 'must include name' });
    return;
  }
  // create a new patient
    // sequelize autonmatically sanitizes data to prevent SQL injections
  db.Patient.create({
    name: req.body.name,
    birthdate: req.body.birthdate,
    covid: req.body.covid,
    phone: req.body.phone
  })
    .then((createdPatient) => {
      // send new patient as response
      res.status(201).json(createdPatient);
    })
  
})

// POST /api/v1/patients/:id/appointment
router.post('/:id/appointments', (req, res) => {
  // check for all required fields
  if (!req.body || !req.body.time) {
    // --if not, send error and stop
    res.status(422).json({ error: 'please include time' })
    return
  }

  // check if patient exists
  db.Patient.findByPk(req.params.id)
    .then((patient) => {
      // if there is no patient, respond with 404
      if (!patient) {
        res.status(404).json({ error: 'could not find that patient' })
        return
      }
      
      // create new appointment
      patient.createAppointment({
        time: req.body.time
      })
        .then((appointment) => {
          // respond with new appointment
          res.status(201).json(appointment)
        })
    })
})





module.exports = router;