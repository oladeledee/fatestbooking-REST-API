var express = require  ('express');
var  {Student} = require   ('../Model/student') ;



const studentRouter = express.Router();

//get all student details
studentRouter.get('/',async (req, res) => {
    const students=await Student.find();
    if(students){
        
       res.send(students);
    }
    else{
        res.status(404).send({ message: 'Student  Details Not Found' });
    }
    
      
     });
// get student by id
     studentRouter.get(
        '/:id',
        (async (req, res) => {
          const student = await Student.findById(req.params.id);
          if (student) {
            res.send(student);
          } else {
            res.status(404).send({ message: 'student Details Not Found' });
          }
        })
      );
    
//update student details 
studentRouter.post(
  '/signin',
  (async (req, res) => {
    const student = await Student.findOne({ email: req.body.email });

    if (student) {
        
      if (req.body.userName, student.userName) {
        if(student){
            res.send({
                
     firstName: student.firstName,
      email: student.email,
      lastName: student.lastName,
      userName:student.userName,
      cgpa:student.cgpa,
              });
              return;
        }
        
      }
    }
    res.status(401).send({ message: 'Invalid email or username' });
  })
);
//insert  student Details
studentRouter.post(
  '/register',
  (async (req, res) => {
    
    const students = new Student({

      firstName: req.body.firstName,
      email: req.body.email,
      lastName: req.body.lastName,
      userName:req.body.userName,
      cgpa:req.body.cgpa,
    

    });
    const createdstudent = await students.save();
    res.send({
               createdstudent
    });
  })
);


//delete student detail by :id
studentRouter.delete(
  '/:id',
  (async (req, res) => {
    const student = await Student.findById(req.params.id);
    if (student) {
    
      const deletestudent = await student.remove();
      res.send({ message: ' student data  Deleted', student: deletestudent });
    } else {
      res.status(404).send({ message: 'student details Not Found' });
    }
  })
);
//update student Details
studentRouter.put(
  '/:id',
  (async (req, res) => {
    const student = await Student.findById(req.params.id);
    if (student) {
        
      
      student.firstName = req.body.firstName || student.firstName;
      student.lastName = req.body.lastName || student.lastName;
      student.email = req.body.email || student.email;
      student.userName = req.body.userName || student.userName;
      student.cgpa = req.body.cgpa || student.cgpa;
      const updatedstudent = await student.save();
      res.send({ message: 'student Details Updated', student: updatedstudent });
    } else {
      res.status(404).send({ message: 'student Details Found' });
    }
  })
);

module.exports = studentRouter;

