const Exercise = require('../models/exerciseModel');



module.exports.getAllExercises = (req, res) => {
    console.log("trying to find all exercises")
    Exercise.find()
        .then(allExercises => {
            res.json({ results: allExercises })
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}



module.exports.createExercise = (req, res) => {
    console.log("trying to create new exercise")
    console.log("REQ.BODY----->", req.body)
    Exercise.create(req.body)
        .then(newlyCreatedExercise => {
            res.json({ results: newlyCreatedExercise })
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}



module.exports.findOneExercise = (req, res) => {
    console.log("trying to find one exercise!")

    Exercise.findOne({ _id: req.params.id })
        .then(singleExercise => {
            res.json({ results: singleExercise })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}


module.exports.updateExercise = (req, res) => {
    console.log("trying to update an exercise!")

    Exercise.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body, //form info
        { new: true, runValidators: true } //
    )
        .then(updatedExercise => {
            res.json({ results: updatedExercise })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}


module.exports.deleteExercise = (req,res)=>{
    console.log("trying to delete an exercise!")

    Exercise.deleteOne({_id: req.params.id})
        .then(deletedExercise =>{
            res.json({results: deletedExercise})
        })
        .catch(err=> res.json({ message: 'Something went wrong', error: err }))
}