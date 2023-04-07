const router = require('express').Router();
let student = require('../models/student');

//https//localhost:8070/student/add
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender;

  //send this object through model to mongodb to store it in the database
  const newStudent = new student({
    name,
    age,
    gender,
  });

  newStudent
    .save()
    .then(() => {
      res.json('Student Added Successfully');
    })
    .catch((err) => console.log(err));
});

module.exports = router;
