const express = require('express');
// the db will load the index.js
const db = require('../../models');
const router = express.Router();

router.get('/', (req,res) => {
  db.Appointment.findAll({
    include: [db.Patient, db.Doctor]
  })
    .then((appointments) => {
      res.json(appointments);
    })
})

module.exports = router;