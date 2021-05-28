const express = require('express');
const router = new express.Router;
const student = require('../controllers/student/student');

//router.get('/',(req,res)=>res.send(student.find));
// create a new student profile
router.post('/student/create',student.create);
//find all student
router.get('/student/find',student.findAll);
//find student by id
router.get('/student/find/:id', student.findById);
//update student with id
router.put('/student/update/:id', student.update);
//delete student with id
router.delete('/student/delete/:id', student.delete);


module.exports = router;
