const {Application}= require('../../model/application');
const {Student} = require('../../model/student');

module.exports = {
  create: async(req,res)=>{
try {
  let student_Id=  req.params.id;
    const student= await Student.findOne(student_Id).populate('student');
    console.log(student);
    if(student){ 
      const{program,semester}= req.body;
      const applications = new Application({
      program,
      semester,
      student:student._id
     });
     
     console.log(applications);
       await applications.save();
     res.send({applications});
  }
  else{
    res.status(404).send({ message: '  Student id isnt valid' });  }
} 

 catch (error) {
  console.error(error.message)
  res.status(500).send({message:'internal server error'});
} 
     }   ,

find: async(req,res) =>{
  try{
    const applications=await Application.find().populate('student');
    if(applications){   
       res.send(applications);
    }
    else{
        res.status(404).send({ message: ' No Student application Details  Found' });
    }
  }
   catch(error) {
    console.error(error.message)
    res.status(500).send({message:'internal server error'});
    //throw  error
      }
  
},

findById : async(req,res)=>{
  try {
    const id = req.params._id;
    const application = await Application.findById(id).populate('student');
          if (application) {
            res.send(application.student);
          } else {
            res.status(404).send({ message: 'Application with the given id Not Found' });
          }
  } catch (error) {
      console.error(error.message)
      res.status(500).send({message:'internal server error'});
  }    
},

update:(async (req, res) => {
  try {
    const id = req.params.id;
    const application = await Application.findById(id);
    if (application) {
        const applications = await Application.update({
            student:student.id,
        program:req.body.program ,
       semester:req.body.semester,
         });
      const updatedApplication = await applications.save();
      res.send({ message: 'Application Details Updated', application: updatedApplication });
    } else {
      res.status(404).send({ message: 'Application Details Found' });
    }
  } catch (error) {
    console.error(error.message)
    res.status(500).send({message:'internal server error'});
  }
   
}),

delete: (async(req,res)=>{
  try {
    const id = req.params.id;
    const student = await Application.findById(id);
    if (student) {
    
        const deleteApplication = await Application.remove();
        res.send({ message: ' Application data  Deleted', student: deleteApplication });
      } else {
        res.status(404).send({ message: 'student details Not Found' });
      }
  
  } catch (error) {
    console.error(error.message)
    res.status(500).send({message:'internal server error'});
  }
   }),
}






  


