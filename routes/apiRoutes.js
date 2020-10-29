//express router
const router = require("express").Router();
const Workout = require("../models/workout");
//api's get workouts
router.get("/api/workouts", function (req, res) {
  Workout.find({})
    .then(function (workout) {
      res.json(workout);
    })
    .catch(function (error) {
      console.log(error);
    });
});
//api's get workout only one
router.get("/api/workouts/:id", function (req, res) {
    Workout.findOne({_id:req.params.id})
      .then(function (workout) {
        res.json(workout);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  //api create workout
  router.post("/api/workouts", function (req, res) {
    Workout.create({})
      .then(function (workout) {
        res.json(workout);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  //api find workout and update 
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
  //api delete workout
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