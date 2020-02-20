const router = require("express").Router();
let User = require("../models/user.model");

router.route("/:email").get((req, res)=>{
    User.find({email: req.params.email})
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error: "+ err));
});

router.route("/getId/:id").get((req, res)=>{
    User.find({_id: req.params.id})
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error: "+ err));
});

router.route("/add").post((req, res)=>{
    const first_name=req.body.first_name;
    const last_name=req.body.last_name;
    const email=req.body.email;
    const password=req.body.password;
    const college=req.body.college;
    const branch = req.body.branch;
    const interested_subjects = req.body.interested_subjects;
    const discussions_participated =  req.body.discussions_participated;
    const discussions_completed =  req.body.discussions_completed;

    const newUser = new User({
        first_name,
        last_name,
        email,
        password,
        college,
        branch, 
        interested_subjects,
        discussions_participated,
        discussions_completed
    });

    newUser.save()
    .then(()=>res.json("User Added..!!"))
    .catch(err=> res.status(400).json("Error: " + err))
})

module.exports = router;