const  mongoose = require ('mongoose');
const Joi= require ('joi);
                    
const studentSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        match: [
      /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
    },
    userName:{
        type:String,
        required:true
    },
    cgpa:{
        type:Number,
        required:true
    }
})
// student validation
const studentsValidate = 
        Joi.object({
            firstName: Joi.string().min(3).max(255).required(),
            lastName:Joi.string().min(3).max(225).required(),
            userName:Joi.string().min(3).max(30).required(),
            cgpa:Joi.number().required(),
          email:Joi.string().min(5).max(225).required().email(),
        });
  

module.exports = mongoose.model('Student', studentSchema);
exports.studentsValidate=studentsValidate;
