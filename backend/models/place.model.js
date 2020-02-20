const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//MTCC, objectID of IIT, geocode is false
const placeSchema = new Schema(
{
    place:{
        type:String,
        required:true
    },
    college_id:{
        type:String,
        required:true
    },
    geocode:{
        type:[Number,Number],
        required:false
    }

});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;