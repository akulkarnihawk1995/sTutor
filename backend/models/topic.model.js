const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Topic_name
//  Subject:String
// 	discussion_material:”doubts”
// 	author:IDstring

const topicSchema = new Schema(
{
    topic_name:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true
    },
    discussion_material:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }

});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;