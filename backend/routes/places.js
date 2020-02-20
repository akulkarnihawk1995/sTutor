const router = require("express").Router();
let Place = require("../models/place.model");

router.route("/").get((req, res)=>{
    Place.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error: "+ err));
});
// place:String 
// 	start_time:time 
// 	duration:time 
// 	max-attendees:integer 
// 	present_attendees:[“string of object”]
router.route("/getPlaces/:collegeId").get((req, res)=>{
    Place.find({college_id:req.params.collegeId})
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error: "+ err));
});
router.route("/add").post((req, res)=>{
    const place=req.body.place;
    const college_id=req.body.college_id;
    const geocode = req.body.geocode;
    const newPlace = new Place({
        place,
        college_id,
        geocode
        
    });

    newPlace.save()
    .then(()=>res.json("Place Added..!!"))
    .catch(err=> res.status(400).json("Error: " + err))
});

module.exports = router;