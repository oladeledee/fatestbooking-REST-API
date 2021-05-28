var express = require  ('express');
var  {Application} = require   ('../Model/application') ;
const { Student } = require('../Model/student');



const applicationRouter = express.Router();

//get  Application details
applicationRouter.get('/',async (req, res) => {
    const applications=await Application.find();
    if(applications){   
       res.send(applications);
    }
    else{
        res.status(404).send({ message: 'Student application Details Not Found' });
    }      
     });
// get Application by id
     applicationRouter.get(
        '/:id',
        (async (req, res) => {
          const application = await Application.findById(req.params.id);
          if (application) {
            res.send(application);
          } else {
            res.status(404).send({ message: 'Application Details Not Found' });
          }
        })
      );
    
//sign in  
applicationRouter.post(
  '/Login',
  (async (req, res) => {
    const student = await Student.findOne({ email: req.body.email });
    const application= await Application.findOne({})
    if (student) {
      if (req.body.userName, student.userName) {
        if(application){
            res.send({
                student:student.firstName,
                application
              });
              return;
        } }
    }
    res.status(401).send({ message: 'Invalid email or username' });})
);
//  new application  detail
applicationRouter.post(
  '/register',
  (async (req, res) => {
    let student_Id= req.params.id;;
    const student= await Student.findById(student_Id).populate('Student',"-_id");
    console.log(req.params.student);
    if(!student) return res.status(404).send('invalid student Id')
      
    const applications = new Application({
     program: req.body.program,
     semester: req.body.semester,
     student:student._id,
    });
    const createdApplication = await applications.save();
    res.send({createdApplication});
  })
);


//delete application details
applicationRouter.delete(
  '/delete/:id',
  (async (req, res) => {
    const application = await Application.findById(req.params.id);
    if (application) {
    
      const deleteApplication = await application.remove();
      res.send({ message: ' application data  Deleted', application: deleteApplication });
    } else {
      res.status(404).send({ message: 'Application details Not Found' });
    }
  })
);
//update application Details
applicationRouter.put(
  '/:id',
  (async (req, res) => {
    const application = await Application.findById(req.params.id);
    if (application) {
      application.program = req.body.program || application.program;
      application.semester = req.body.semester || application.semester;
      const updatedApplication = await application.save();
      res.send({ message: 'Application Details Updated', application: updatedApplication });
    } else {
      res.status(404).send({ message: 'Application Details Found' });
    }
  })
);

module.exports = applicationRouter;

