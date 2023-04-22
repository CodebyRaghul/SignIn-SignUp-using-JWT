const express = require("express")
const noteRouter = express.Router();

noteRouter.get("/", (req,res)=>{
    res.send("Note get requested");
});
noteRouter.post("/", (req,res)=>{
    res.send("Note post requested");
});

module.exports = noteRouter;