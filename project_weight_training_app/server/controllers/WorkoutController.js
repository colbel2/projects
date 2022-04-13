const Workout = require('../models/workoutModel')

module.exports.getAllWorkouts = (req, res) => {
    console.log("trying to find all Workouts")
    Workout.find()
        .then(allWorkouts => {
            res.json({ results: allWorkouts })
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}



module.exports.createWorkout = (req, res) => {
    console.log("trying to create new workout")
    console.log("REQ.BODY----->", req.body)
    Workout.create(req.body)
        .then(newlyCreatedWorkout => {
            res.json({ results: newlyCreatedWorkout })
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}



module.exports.findOneWorkout = (req, res) => {
    console.log("trying to find one workout!")

    Workout.findOne({ _id: req.params.id })
        .then(singleWorkout => {
            res.json({ results: singleWorkout })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}


module.exports.updateWorkout = (req, res) => {
    console.log("trying to update a workout!")

    Workout.findOneAndUpdate(
        { _id: req.params.id }, //which ninja to update by _id
        req.body, //form info
        { new: true, runValidators: true } //return back teh newly updated ninja info
    )
        .then(updatedWorkout => {
            res.json({ results: updatedWorkout })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}


module.exports.deleteWorkout = (req,res)=>{
    console.log("trying to delete a workout!")

    Workout.deleteOne({_id: req.params.id})
        .then(deletedWorkout =>{
            res.json({results: deletedWorkout})
        })
        .catch(err=> res.json({ message: 'Something went wrong', error: err }))
}