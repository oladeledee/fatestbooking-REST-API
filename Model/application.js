const  mongoose = require ( 'mongoose');
const {Student}= require('../Model/student')


const applicationSchema = new mongoose.Schema({
    Student:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        
        
        
    },


    program: {
        type:String,
        required:true
    },
    semester:{
        type:String,
        required:true
    },
    Created_at:{
        type:Date,
        default:Date.now
    },

    Updated_at:{
        type:Date,
        default:Date.now
    },

})

const Application = mongoose.model('application', applicationSchema);
exports.Application=  Application;
