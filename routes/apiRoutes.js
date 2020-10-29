const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", function (req, res) {
  Workout.find({})
    .then(function (workout) {
      res.json(workout);
    })
    .catch(function (error) {
      console.log(error);
    });
});
router.get("/api/workouts/:id", function (req, res) {
    Workout.findOne({_id:req.params.id})
      .then(function (workout) {
        res.json(workout);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  router.post("/api/workouts", function (req, res) {
    Workout.create({})
      .then(function (workout) {
        res.json(workout);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  router.put("/api/workouts/:id", function (req, res) {
    Workout.findOneAndUpdate({_id:req.params.id},
        {$push:{exercises:req.body}},{
            new:true
        })
      .then(function (workout) {
        res.json(workout);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  router.put("/api/workouts/:id", function (req, res) {
    Workout.findOneAndDelete({_id:req.params.id},
        {$push:{exercises:req.body}},{
            new:true
        })
      .then(function (workout) {
        res.json(workout);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

module.exports=router