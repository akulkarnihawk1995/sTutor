const router = require("express").Router();
let Discussion = require("../models/discussion.model");

router.route("/").get((req, res)=>{
    Discussion.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error: "+ err));
});
// place:String 
// 	start_time:time 
// 	duration:time 
// 	max-attendees:integer 
// 	present_attendees:[“string of object”]
router.route("/getPending/:place").get((req, res)=>{
    Discussion.find({status:"pending",place:req.params.place})
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error: "+ err));
});

router.route("/addAttendee/:id/:attendee").put((req, res)=>{
    Discussion.findByIdAndUpdate(req.params.id, {"$push": {"present_attendees": req.params.attendee}}, {"new":true,"upsert":true}, function (err, managerparent) {
        if (err) res.status(400).json("Error: " + err);
    })
})

router.route("/add").post((req, res)=>{
    const place=req.body.place;
    const start_time=req.body.start_time;
    const duration = req.body.duration;
    const max_attendees = req.body.max_attendees;
    const present_attendees = req.body.present_attendees;
    const topic = req.body.topic;
    const status = req.body.status;
    const newDiscussion = new Discussion({
        place,
        start_time,
        duration,
        max_attendees,
        present_attendees,
        topic,
        status
    });

    newDiscussion.save()
    .then(()=>res.json("Discussion Added..!!"))
    .catch(err=> res.status(400).json("Error: " + err))
});

module.exports = router;