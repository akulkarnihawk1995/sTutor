const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collegeSchema = new Schema(
{
    college_name:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
    },
    branches:{
        type:[String],
        required:true,
    },
    popular_spots:{
        type:[String]
    }
});

const College = mongoose.model('College', collegeSchema);

module.exports = College;