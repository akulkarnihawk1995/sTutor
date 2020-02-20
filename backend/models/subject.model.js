const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = new Schema(
{
    subject_name:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
    },
    subject_code:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        minLength:3,
    }
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;