const router = require("express").Router();
let Topic = require("../models/topic.model");

router.route("/").get((req, res)=>{
    Topic.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error: "+ err));
});

router.route("/:id").get((req, res)=>{
    Topic.find({_id: req.params.id})
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error: "+ err));
});

router.route("/:id/:subject").get((req, res)=>{
    Topic.find({author: req.params.id, subject:req.params.subject})
    .then(data => res.json(data))
    .catch(err => res.status(400).json("Error: "+ err));
});

router.route("/add").post((req, res)=>{
    const topic_name=req.body.topic_name;
    const subject=req.body.subject;
    const discussion_material = req.body.discussion_material;
    const author = req.body.author;
    const newTopic = new Topic({
        topic_name,
        subject,
        discussion_material,
        author
    });

    newTopic.save()
    .then(()=>res.json("Topic Added..!!"))
    .catch(err=> res.status(400).json("Error: " + err))
});

module.exports = router;