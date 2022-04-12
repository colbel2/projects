const mongoose = require('mongoose'); //import mongoose so we can use mongoose to make a table


const ExerciseSchema = new mongoose.Schema({



    
    date: {
        type: Date,
        required: [true, "Workout date is required"]
    },
    exerciseName: {
        type: Array,
        required: [true, "Exercise Name is required"]
    },
    exerciseSet: {
        type: Array,
        required: [true, "Atleast 1 set is required to log exercise"]
    },
    exerciseWeight: {
        type: Array
    },
    exerciseRep: {
        type: Array,
        required: [true, "Atleast 1 rep is required to log exercise"]
    },
    physiqueUpdatePicture: {
        type: String
    }
},
    { timestamps: true } //generates created at and updated at automatically
);

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;