const mongoose = require('mongoose'); //import mongoose so we can use mongoose to make a table


const ExerciseSchema = new mongoose.Schema({




    exerciseName: {
        type: Array,
        required: [true, "Exercise Name is required"]
    },
    workout_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "workout"
    }
},
    { timestamps: true } //generates created at and updated at automatically
);

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;