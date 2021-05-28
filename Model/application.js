const  mongoose = require ( 'mongoose');

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

module.exports = mongoose.model('application', applicationSchema);
