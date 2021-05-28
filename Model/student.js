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


module.exports = mongoose.model('Student', studentSchema);
