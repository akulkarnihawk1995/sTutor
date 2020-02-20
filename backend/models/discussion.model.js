const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discussionSchema = new Schema(
{
    place:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
    },
    start_time:{
        type:Date,
        required:true,
    },
    duration:{
        type:Number,
        max:120,
        required:true,
    },
    max_attendees:{
        type:Number,
        required:true,
    },
    present_attendees:{
        type:[String],
        required:true,
    },
    topic:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    }
});

const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;