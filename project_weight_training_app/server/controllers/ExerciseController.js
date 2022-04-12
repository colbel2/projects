const Exercise = require('../models/exerciseModel');



module.exports.getAllExercises = (req, res) => {
    console.log("trying to find all exercises")
    Exercise.find()
        .then(allExercises  => {
            res.json({results: allExercises})
        })
        .catch(err => res.json({message: "Something went wrong", error: err}))
}



module.exports.createExercise = (req, res) => {
    console.log("trying to create new exercise")
    console.log("REQ.BODY----->",req.body)
    Exercise.create(req.body)
        .then(newlyCreatedExercise =>{
            res.json({results: newlyCreatedExercise})
        })
        .catch(err => res.json({message: "Something went wrong", error: err}))
}