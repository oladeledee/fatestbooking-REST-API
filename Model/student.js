const  mongoose = require ('mongoose');


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
        required:true
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

const Student = mongoose.model('Student', studentSchema);
exports.studentSchema=studentSchema;
exports.Student=  Student;