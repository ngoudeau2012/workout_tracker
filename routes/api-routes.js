const db = require("../models");
var express = require("express");
var router = express.Router();

console.log("testing api routes");

router.get("/api/workouts", (req, res) => {
  console.log("hi");
  db.Workout.find({}).then(function (data) {
    console.log(data);
    res.json(data);
  });
});

router.post("/api/workouts/", (req, res) => {
    db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });

router.put("/api/workouts/:id", (req, res) => {
  console.log(req.body);
  db.Workout.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $push: { exercises: req.body },
    },
    {
      upsert: true
    }
  )
    .then((data) => {
      // console.log(data);
      let duration = data.calcDuration();
      db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { totalDuration: duration } }
      ).then((data) => {
        try {
          res.json(data);
        } catch (error) {
          res.status(400).message({message: error});
      
        }    
    })
    .catch((err) => {
      res.status(400).message({message: err});
    })
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(function (data) {
      res.json(data);
    })
    .catch(err =>{
        res.json(err);
    })
  });

module.exports = router;
