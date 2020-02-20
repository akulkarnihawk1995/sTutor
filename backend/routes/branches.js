const router = require("express").Router();
let Branch = require("../models/branch.model");

router.route("/").get((req, res)=>{
    Branch.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error: "+ err));
});

router.route("/:id").get((req, res)=>{
    Branch.find({_id:req.params.id})
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error: "+ err));
});

router.route("/add").post((req, res)=>{
    const branch_name=req.body.branch_name;
    const subjects = req.body.subjects;
    const newBranch = new Branch({
        branch_name,
        subjects,
    });

    newBranch.save()
    .then(()=>res.json("Branch Added..!!"))
    .catch(err=> res.status(400).json("Error: " + err))
});

router.route("/addSubject").put((req, res)=>{
    Branch.findByIdAndUpdate(req.body.id, {"$push": {"subjects": req.subject}}, {"new":true,"upsert":true}, function (err, managerparent) {
        if (err) res.status(400).json("Error: " + err);
    })
});

module.exports = router;