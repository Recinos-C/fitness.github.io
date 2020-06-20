const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", (req, res) => {
    Workout.create(req.body).then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        res.status(400).json(err);
    });
});

// capture items by id
router.put("/api/workouts/:id", function (req, res) {
    Workout.findByIdAndUpdate(req.params.id, {
        $push: {
            workouts: req.body
        }
    }).then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        res.status(400).json(err);
    });
});

// find all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find().sort({
        date: -1
    }).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

// deletes by id (body id not req id) (same doc as update but use word delete)
router.put("/api/workouts/:id", function (req, res) {
    // do not use dbWorkout since we are deleting information
    Workout.findByIdAndDelete(req.body.id).then(() => {
        res.json(dbWorkout)
    }).catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;
// research limit doc
// item should scale on how many are searched

// router.post("/api/workouts/range", ({
//     body
// }, res) => {
//     Workout.find(body).then(dbWorkout => {
//         res.json(dbWorkout);
//     }).catch(err => {
//         res.status(400).json(err);
//     });
// });