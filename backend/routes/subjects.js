const router = require("express").Router();
let Subject = require("../models/subject.model");

router.route("/").get((req, res)=>{
    Subject.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error: "+ err));
});

router.route("/:id").get((req, res)=>{
    Subject.find({_id:req.params.id})
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error: "+ err));
});

router.route("/add").post((req, res)=>{
    const subject_name=req.body.subject_name;
    const subject_code=req.body.subject_code;
    const newSubject = new Subject({
        subject_name,
        subject_code,
    });

    newSubject.save()
    .then(()=>res.json("Subject Added..!!"))
    .catch(err=> res.status(400).json("Error: " + err))
});

module.exports = router;