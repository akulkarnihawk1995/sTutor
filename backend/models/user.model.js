const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
{
    first_name:{
        type:String,
        required:true,
        trim:true,
        minlength:3
    },
    last_name:{
        type:String,
        trim:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    college:{
        type:String,
        required:true,
    },
    branch: {
        type:String,
        required:true,
    },
    interested_subjects:[String],
    discussions_participated:[String],
    discussions_completed:[Number]
},{
    timestamps:true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;