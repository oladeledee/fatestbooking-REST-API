const {Application}= require('../../model/application');
const {student}= require('../../model/student');

module.exports = {

create: async(req,res)=>{
   let student_Id=  req.params.id;
    const student= await Student.findOne(student_Id);
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
},

find: async(req,res) =>{
    const applications=await Application.find().populate('student');
    if(applications){   
       res.send(applications);
    }
    else{
        res.status(404).send({ message: ' No Student application Details  Found' });
    }
},

findById : async(req,res)=>{
    const {id} = req.params._id;
    const application = await Application.findById(id).populate('student');
          if (application) {
            res.send(application.student);
          } else {
            res.status(404).send({ message: 'Application with the given id Not Found' });
          }
},

update:(async (req, res) => {
    const {id} = req.params.id;
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
}),

delete: (async(req,res)=>{
    const {id} = req.params._id;
    const student = await Student.findById(id);
    if (student) {
    
        const deletestudent = await student.remove();
        res.send({ message: ' student data  Deleted', student: deletestudent });
      } else {
        res.status(404).send({ message: 'student details Not Found' });
      }
    }),
}






  


