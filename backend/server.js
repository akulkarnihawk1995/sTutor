const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology:true});
const connection  = mongoose.connection;

connection.once('open', ()=>{
    console.log("mongoDb connection open success");
});


const usersRouter = require("./routes/users");
const collegesRouter = require("./routes/colleges");
const branchesRouter = require("./routes/branches");
const subjectsRouter = require("./routes/subjects");
const topicsRouter = require("./routes/topics");
const discussionsRouter = require("./routes/discussions");
const placesRouter = require("./routes/places");

app.use("/users", usersRouter);
app.use("/colleges", collegesRouter);
app.use("/branches", branchesRouter);
app.use("/subjects", subjectsRouter);
app.use("/topics", topicsRouter);
app.use("/discussions",discussionsRouter);
app.use("/places",placesRouter);



app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});
