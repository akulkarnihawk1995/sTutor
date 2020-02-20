const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const branchSchema = new Schema(
{
    branch_name:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
    },
    subjects:{
        type:[String],
        required:true,
    }
});

const Branch = mongoose.model('Branch', branchSchema);

module.exports = Branch;