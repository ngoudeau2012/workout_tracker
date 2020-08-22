const path = require("path");
var express = require('express')
var router = express.Router()

    router.get("/", function(req,res){
        console.log("testing HTML routes 2")
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    router.get("/stats", function(req,res){
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });

    router.get("/exercise", function(req,res){
        console.log("testing exercise");
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    });

module.exports = router