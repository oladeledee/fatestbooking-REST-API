const Student= require('../../model/student');

module.exports = {

create: async(req,res)=>{
    
     const student = await Student.Create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        cgpa:req.body.cgpa
     })
     return res.send(student);
},

findAll: async(req,res) =>{
    const student = await Student.find()
    return res.send(student);
},

findById : async(req,res)=>{
    const {id} = req.params;
    const student = await Student.findById(id);
    res.send(student);
},

update:(async (req, res) => {
    const {id} = req.params;
    const student = await Student.findById(id);
    if (student) {    
        const student = await Student.update({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            cgpa:req.body.cgpa
         });
     
      const updatedstudent = await student.save();
      res.send({ message: 'student Details Updated', student: updatedstudent });
    } else {
      res.status(404).send({ message: 'student Details Found' });
    }
}),

delete: (async(req,res)=>{
    const {id} = req.params;
    const student = await Student.findById(id);
    if (student) {
    
        const deletestudent = await student.remove();
        res.send({ message: ' student data  Deleted', student: deletestudent });
      } else {
        res.status(404).send({ message: 'student details Not Found' });
      }
    }),   
}






  


