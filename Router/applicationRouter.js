const express = require('express');
const router = new express.Router;

const application = require('../controllers/application/application');
//router.get('/',(req,res)=>res.send('ok'));

// application routes
//create application
router.post('/application/create', application.create);
// find all applications
router.get('/application/find',application.find);
// find application by id
router.get('/application/find/student',application.findById);
//delete application with id
router.delete('/application/delete/:id',application.delete);
//update application with id
router.put('/application/update/:id',application.update);


module.exports = router;
