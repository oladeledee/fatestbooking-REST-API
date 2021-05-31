const {Student,studentsValidate}= require('../../model/student');

module.exports = {

create: async(req,res)=>{
  try {
    
    const { error } = studentsValidate.validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    let user = await Student.findOne({email:req.body.email});
    if(user) return res.status(404).send('student already exist');

    const {firstName,lastName,userName,email,cgpa}=req.body;
     const student = await Student.create({
        firstName,
        lastName,
        userName,
        email,
        cgpa
     })
     await student.save();
     return res.send(student);
  } catch (error) {
    console.error(error.message)
    res.status(500).send({message:'internal server error'});
  }
    
},

findAll: async(req,res) =>{
  try {
    const student = await Student.find()
    if(student){
      return res.send(student);
    }
    else {
      res.status(404).send({ message: 'student Not Found' });
       }
  } catch (error) {
    console.error(error.message)
    res.status(500).send({message:'internal server error'});
  }
    
},


findById : async(req,res)=>{
  try {
    const {id} = req.params;

    const student = await Student.findById(id);
    if(student){
      res.send(student);
    }
    else {
      res.status(404).send({ message: 'student with the given Not Found' });
    }
  } catch (error) {
    console.error(error.message)
    res.status(500).send({message:'internal server error'});
  }
   
},

update:(async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error.message)
    res.status(500).send({message:'internal server error'});
  }
    
}),

delete: (async(req,res)=>{
  try {
    const {id} = req.params;
    const student = await Student.findById(id);
    if (student) {
    
        const deletestudent = await student.remove();
        res.send({ message: ' student data  Deleted', student: deletestudent });
      } else {
        res.status(404).send({ message: 'student details Not Found' });
      }

  } catch (error) {
    console.error(error.message)
    res.status(500).send({message:'internal server error'});
  }
        }),   
}






  


