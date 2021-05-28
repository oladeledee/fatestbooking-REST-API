const  mongoose = require ( 'mongoose');
const {Student}= require('../Model/student')

const applicationSchema = new mongoose.Schema({
    student:
    
    {  type:mongoose.Schema.Types.ObjectId,
        ref:"Student",    
    } ,
    program: {
        type:String,
        required:true
    },
    semester:{
        type:String,
        required:true
    },  
},
{timestamps:true}
)

const Application = mongoose.model('application', applicationSchema);
exports.Application=  Application;
