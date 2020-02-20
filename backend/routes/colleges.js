const router = require("express").Router();
let College = require("../models/college.model");

router.route("/").get((req, res)=>{
    College.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error: "+ err));
});

router.route("/add").post((req, res)=>{
    const college_name=req.body.college_name;
    const branches = req.body.branches;
    const popular_spots = req.body.popular_spots;
    const newCollege = new College({
        college_name,
        branches,
        popular_spots,
    });

    newCollege.save()
    .then(()=>res.json("College Added..!!"))
    .catch(err=> res.status(400).json("Error: " + err))
});

router.route("/addBranchToCollege").post((req, res)=>{

});

module.exports = router;